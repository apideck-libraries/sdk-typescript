/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { SDKHooks } from "../hooks/hooks.js";
import { HookContext } from "../hooks/types.js";
import {
  ConnectionError,
  InvalidRequestError,
  RequestAbortedError,
  RequestTimeoutError,
  UnexpectedClientError,
} from "../models/errors/httpclienterrors.js";
import { ERR, OK, Result } from "../types/fp.js";
import { stringToBase64 } from "./base64.js";
import { SDK_METADATA, SDKOptions, serverURLFromOptions } from "./config.js";
import { encodeForm } from "./encodings.js";
import { env, fillGlobals } from "./env.js";
import {
  HTTPClient,
  isAbortError,
  isConnectionError,
  isTimeoutError,
  matchContentType,
  matchStatusCode,
} from "./http.js";
import { Logger } from "./logger.js";
import { retry, RetryConfig } from "./retries.js";
import { SecurityState } from "./security.js";

export type RequestOptions = {
  /**
   * Sets a timeout, in milliseconds, on HTTP requests made by an SDK method. If
   * `fetchOptions.signal` is set then it will take precedence over this option.
   */
  timeoutMs?: number;
  /**
   * Set or override a retry policy on HTTP calls.
   */
  retries?: RetryConfig;
  /**
   * Specifies the status codes which should be retried using the given retry policy.
   */
  retryCodes?: string[];
  /**
   * Overrides the base server URL that will be used by an operation.
   */
  serverURL?: string | URL;
  /**
   * Sets various request options on the `fetch` call made by an SDK method.
   *
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options|Request}
   */
  fetchOptions?: Omit<RequestInit, "method" | "body">;
};

type RequestConfig = {
  method: string;
  path: string;
  baseURL?: string | URL | undefined;
  query?: string;
  body?: RequestInit["body"];
  headers?: HeadersInit;
  security?: SecurityState | null;
  uaHeader?: string;
  timeoutMs?: number;
};

const gt: unknown = typeof globalThis === "undefined" ? null : globalThis;
const webWorkerLike = typeof gt === "object"
  && gt != null
  && "importScripts" in gt
  && typeof gt["importScripts"] === "function";
const isBrowserLike = webWorkerLike
  || (typeof navigator !== "undefined" && "serviceWorker" in navigator)
  || (typeof window === "object" && typeof window.document !== "undefined");

export class ClientSDK {
  readonly #httpClient: HTTPClient;
  readonly #hooks: SDKHooks;
  readonly #logger?: Logger | undefined;
  public readonly _baseURL: URL | null;
  public readonly _options: SDKOptions & { hooks?: SDKHooks };

  constructor(options: SDKOptions = {}) {
    const opt = options as unknown;
    if (
      typeof opt === "object"
      && opt != null
      && "hooks" in opt
      && opt.hooks instanceof SDKHooks
    ) {
      this.#hooks = opt.hooks;
    } else {
      this.#hooks = new SDKHooks();
    }
    this._options = { ...fillGlobals(options), hooks: this.#hooks };

    const url = serverURLFromOptions(options);
    if (url) {
      url.pathname = url.pathname.replace(/\/+$/, "") + "/";
    }
    const { baseURL, client } = this.#hooks.sdkInit({
      baseURL: url,
      client: options.httpClient || new HTTPClient(),
    });
    this._baseURL = baseURL;
    this.#httpClient = client;
    this.#logger = options.debugLogger;
    if (!this.#logger && env().APIDECK_DEBUG) {
      this.#logger = console;
    }
  }

  public _createRequest(
    context: HookContext,
    conf: RequestConfig,
    options?: RequestOptions,
  ): Result<Request, InvalidRequestError | UnexpectedClientError> {
    const { method, path, query, headers: opHeaders, security } = conf;

    const base = conf.baseURL ?? this._baseURL;
    if (!base) {
      return ERR(new InvalidRequestError("No base URL provided for operation"));
    }
    const reqURL = new URL(base);
    const inputURL = new URL(path, reqURL);

    if (path) {
      reqURL.pathname += reqURL.pathname.endsWith("/") ? "" : "/";
      reqURL.pathname += inputURL.pathname.replace(/^\/+/, "");
    }

    let finalQuery = query || "";

    const secQuery: string[] = [];
    for (const [k, v] of Object.entries(security?.queryParams || {})) {
      const q = encodeForm(k, v, { charEncoding: "percent" });
      if (typeof q !== "undefined") {
        secQuery.push(q);
      }
    }
    if (secQuery.length) {
      finalQuery += `&${secQuery.join("&")}`;
    }

    if (finalQuery) {
      const q = finalQuery.startsWith("&") ? finalQuery.slice(1) : finalQuery;
      reqURL.search = `?${q}`;
    }

    const headers = new Headers(opHeaders);

    const username = security?.basic.username;
    const password = security?.basic.password;
    if (username != null || password != null) {
      const encoded = stringToBase64(
        [username || "", password || ""].join(":"),
      );
      headers.set("Authorization", `Basic ${encoded}`);
    }

    const securityHeaders = new Headers(security?.headers || {});
    for (const [k, v] of securityHeaders) {
      headers.set(k, v);
    }

    let cookie = headers.get("cookie") || "";
    for (const [k, v] of Object.entries(security?.cookies || {})) {
      cookie += `; ${k}=${v}`;
    }
    cookie = cookie.startsWith("; ") ? cookie.slice(2) : cookie;
    headers.set("cookie", cookie);

    const userHeaders = new Headers(options?.fetchOptions?.headers);
    for (const [k, v] of userHeaders) {
      headers.set(k, v);
    }

    // Only set user agent header in non-browser-like environments since CORS
    // policy disallows setting it in browsers e.g. Chrome throws an error.
    if (!isBrowserLike) {
      headers.set(conf.uaHeader ?? "user-agent", SDK_METADATA.userAgent);
    }

    let fetchOptions = options?.fetchOptions;
    if (!fetchOptions?.signal && conf.timeoutMs && conf.timeoutMs > 0) {
      const timeoutSignal = AbortSignal.timeout(conf.timeoutMs);
      if (!fetchOptions) {
        fetchOptions = { signal: timeoutSignal };
      } else {
        fetchOptions.signal = timeoutSignal;
      }
    }

    if (conf.body instanceof ReadableStream) {
      if (!fetchOptions) {
        fetchOptions = {};
      }
      Object.assign(fetchOptions, { duplex: "half" });
    }

    let input;
    try {
      input = this.#hooks.beforeCreateRequest(context, {
        url: reqURL,
        options: {
          ...fetchOptions,
          body: conf.body ?? null,
          headers,
          method,
        },
      });
    } catch (err: unknown) {
      return ERR(
        new UnexpectedClientError("Create request hook failed to execute", {
          cause: err,
        }),
      );
    }

    return OK(new Request(input.url, input.options));
  }

  public async _do(
    request: Request,
    options: {
      context: HookContext;
      errorCodes: number | string | (number | string)[];
      retryConfig: RetryConfig;
      retryCodes: string[];
    },
  ): Promise<
    Result<
      Response,
      | RequestAbortedError
      | RequestTimeoutError
      | ConnectionError
      | UnexpectedClientError
    >
  > {
    const { context, errorCodes } = options;

    return retry(
      async () => {
        const req = await this.#hooks.beforeRequest(context, request.clone());
        await logRequest(this.#logger, req).catch((e) =>
          this.#logger?.log("Failed to log request:", e)
        );

        let response = await this.#httpClient.request(req);

        try {
          if (matchStatusCode(response, errorCodes)) {
            const result = await this.#hooks.afterError(
              context,
              response,
              null,
            );
            if (result.error) {
              throw result.error;
            }
            response = result.response || response;
          } else {
            response = await this.#hooks.afterSuccess(context, response);
          }
        } finally {
          await logResponse(this.#logger, response, req)
            .catch(e => this.#logger?.log("Failed to log response:", e));
        }

        return response;
      },
      { config: options.retryConfig, statusCodes: options.retryCodes },
    ).then(
      (r) => OK(r),
      (err) => {
        switch (true) {
          case isAbortError(err):
            return ERR(
              new RequestAbortedError("Request aborted by client", {
                cause: err,
              }),
            );
          case isTimeoutError(err):
            return ERR(
              new RequestTimeoutError("Request timed out", { cause: err }),
            );
          case isConnectionError(err):
            return ERR(
              new ConnectionError("Unable to make request", { cause: err }),
            );
          default:
            return ERR(
              new UnexpectedClientError("Unexpected HTTP client error", {
                cause: err,
              }),
            );
        }
      },
    );
  }
}

const jsonLikeContentTypeRE = /(application|text)\/.*?\+*json.*/;
const jsonlLikeContentTypeRE =
  /(application|text)\/(.*?\+*\bjsonl\b.*|.*?\+*\bx-ndjson\b.*)/;
async function logRequest(logger: Logger | undefined, req: Request) {
  if (!logger) {
    return;
  }

  const contentType = req.headers.get("content-type");
  const ct = contentType?.split(";")[0] || "";

  logger.group(`> Request: ${req.method} ${req.url}`);

  logger.group("Headers:");
  for (const [k, v] of req.headers.entries()) {
    logger.log(`${k}: ${v}`);
  }
  logger.groupEnd();

  logger.group("Body:");
  switch (true) {
    case jsonLikeContentTypeRE.test(ct):
      logger.log(await req.clone().json());
      break;
    case ct.startsWith("text/"):
      logger.log(await req.clone().text());
      break;
    case ct === "multipart/form-data": {
      const body = await req.clone().formData();
      for (const [k, v] of body) {
        const vlabel = v instanceof Blob ? "<Blob>" : v;
        logger.log(`${k}: ${vlabel}`);
      }
      break;
    }
    default:
      logger.log(`<${contentType}>`);
      break;
  }
  logger.groupEnd();

  logger.groupEnd();
}

async function logResponse(
  logger: Logger | undefined,
  res: Response,
  req: Request,
) {
  if (!logger) {
    return;
  }

  const contentType = res.headers.get("content-type");
  const ct = contentType?.split(";")[0] || "";

  logger.group(`< Response: ${req.method} ${req.url}`);
  logger.log("Status Code:", res.status, res.statusText);

  logger.group("Headers:");
  for (const [k, v] of res.headers.entries()) {
    logger.log(`${k}: ${v}`);
  }
  logger.groupEnd();

  logger.group("Body:");
  switch (true) {
    case matchContentType(res, "application/json")
      || jsonLikeContentTypeRE.test(ct) && !jsonlLikeContentTypeRE.test(ct):
      logger.log(await res.clone().json());
      break;
    case matchContentType(res, "application/jsonl")
      || jsonlLikeContentTypeRE.test(ct):
      logger.log(await res.clone().text());
      break;
    case matchContentType(res, "text/event-stream"):
      logger.log(`<${contentType}>`);
      break;
    case matchContentType(res, "text/*"):
      logger.log(await res.clone().text());
      break;
    case matchContentType(res, "multipart/form-data"): {
      const body = await res.clone().formData();
      for (const [k, v] of body) {
        const vlabel = v instanceof Blob ? "<Blob>" : v;
        logger.log(`${k}: ${vlabel}`);
      }
      break;
    }
    default:
      logger.log(`<${contentType}>`);
      break;
  }
  logger.groupEnd();

  logger.groupEnd();
}

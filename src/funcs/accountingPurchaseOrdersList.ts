/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { ApideckCore } from "../core.js";
import {
  encodeDeepObjectQuery,
  encodeFormQuery,
  encodeSimple,
  queryJoin,
} from "../lib/encodings.js";
import * as M from "../lib/matchers.js";
import { safeParse } from "../lib/schemas.js";
import { RequestOptions } from "../lib/sdks.js";
import { extractSecurity, resolveGlobalSecurity } from "../lib/security.js";
import { pathToFunc } from "../lib/url.js";
import { APIError } from "../models/errors/apierror.js";
import {
  ConnectionError,
  InvalidRequestError,
  RequestAbortedError,
  RequestTimeoutError,
  UnexpectedClientError,
} from "../models/errors/httpclienterrors.js";
import * as errors from "../models/errors/index.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import * as operations from "../models/operations/index.js";
import { Result } from "../types/fp.js";

/**
 * List Purchase Orders
 *
 * @remarks
 * List Purchase Orders
 */
export async function accountingPurchaseOrdersList(
  client: ApideckCore,
  request: operations.AccountingPurchaseOrdersAllRequest,
  options?: RequestOptions,
): Promise<
  Result<
    operations.AccountingPurchaseOrdersAllResponse,
    | errors.BadRequestResponse
    | errors.UnauthorizedResponse
    | errors.PaymentRequiredResponse
    | errors.NotFoundResponse
    | errors.UnprocessableResponse
    | APIError
    | SDKValidationError
    | UnexpectedClientError
    | InvalidRequestError
    | RequestAbortedError
    | RequestTimeoutError
    | ConnectionError
  >
> {
  const parsed = safeParse(
    request,
    (value) =>
      operations.AccountingPurchaseOrdersAllRequest$outboundSchema.parse(value),
    "Input validation failed",
  );
  if (!parsed.ok) {
    return parsed;
  }
  const payload = parsed.value;
  const body = null;

  const path = pathToFunc("/accounting/purchase-orders")();

  const query = queryJoin(
    encodeDeepObjectQuery({
      "filter": payload.filter,
      "pass_through": payload.pass_through,
      "sort": payload.sort,
    }),
    encodeFormQuery({
      "cursor": payload.cursor,
      "limit": payload.limit,
      "raw": payload.raw,
    }),
  );

  const headers = new Headers({
    Accept: "application/json",
    "x-apideck-service-id": encodeSimple(
      "x-apideck-service-id",
      payload.serviceId,
      { explode: false, charEncoding: "none" },
    ),
    "x-apideck-app-id": encodeSimple(
      "x-apideck-app-id",
      client._options.appId,
      { explode: false, charEncoding: "none" },
    ),
    "x-apideck-consumer-id": encodeSimple(
      "x-apideck-consumer-id",
      client._options.consumerId,
      { explode: false, charEncoding: "none" },
    ),
  });

  const secConfig = await extractSecurity(client._options.apiKey);
  const securityInput = secConfig == null ? {} : { apiKey: secConfig };
  const requestSecurity = resolveGlobalSecurity(securityInput);

  const context = {
    operationID: "accounting.purchaseOrdersAll",
    oAuth2Scopes: [],

    resolvedSecurity: requestSecurity,

    securitySource: client._options.apiKey,
    retryConfig: options?.retries
      || client._options.retryConfig
      || {
        strategy: "backoff",
        backoff: {
          initialInterval: 500,
          maxInterval: 60000,
          exponent: 1.5,
          maxElapsedTime: 3600000,
        },
        retryConnectionErrors: true,
      }
      || { strategy: "none" },
    retryCodes: options?.retryCodes || ["5XX"],
  };

  const requestRes = client._createRequest(context, {
    security: requestSecurity,
    method: "GET",
    path: path,
    headers: headers,
    query: query,
    body: body,
    timeoutMs: options?.timeoutMs || client._options.timeoutMs || -1,
  }, options);
  if (!requestRes.ok) {
    return requestRes;
  }
  const req = requestRes.value;

  const doResult = await client._do(req, {
    context,
    errorCodes: ["400", "401", "402", "404", "422", "4XX", "5XX"],
    retryConfig: context.retryConfig,
    retryCodes: context.retryCodes,
  });
  if (!doResult.ok) {
    return doResult;
  }
  const response = doResult.value;

  const responseFields = {
    HttpMeta: { Response: response, Request: req },
  };

  const [result] = await M.match<
    operations.AccountingPurchaseOrdersAllResponse,
    | errors.BadRequestResponse
    | errors.UnauthorizedResponse
    | errors.PaymentRequiredResponse
    | errors.NotFoundResponse
    | errors.UnprocessableResponse
    | APIError
    | SDKValidationError
    | UnexpectedClientError
    | InvalidRequestError
    | RequestAbortedError
    | RequestTimeoutError
    | ConnectionError
  >(
    M.json(200, operations.AccountingPurchaseOrdersAllResponse$inboundSchema, {
      key: "GetPurchaseOrdersResponse",
    }),
    M.jsonErr(400, errors.BadRequestResponse$inboundSchema),
    M.jsonErr(401, errors.UnauthorizedResponse$inboundSchema),
    M.jsonErr(402, errors.PaymentRequiredResponse$inboundSchema),
    M.jsonErr(404, errors.NotFoundResponse$inboundSchema),
    M.jsonErr(422, errors.UnprocessableResponse$inboundSchema),
    M.fail(["4XX", "5XX"]),
    M.json(
      "default",
      operations.AccountingPurchaseOrdersAllResponse$inboundSchema,
      { key: "UnexpectedErrorResponse" },
    ),
  )(response, req, { extraFields: responseFields });
  if (!result.ok) {
    return result;
  }

  return result;
}

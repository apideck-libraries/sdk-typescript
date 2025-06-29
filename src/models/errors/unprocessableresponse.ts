/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { ApideckError } from "./apideckerror.js";
import { SDKValidationError } from "./sdkvalidationerror.js";

/**
 * Contains parameter or domain specific information related to the error and why it occurred.
 */
export type UnprocessableResponseDetail = string | { [k: string]: any };

/**
 * Unprocessable
 */
export type UnprocessableResponseData = {
  /**
   * HTTP status code
   */
  statusCode?: number | undefined;
  /**
   * Contains an explanation of the status_code as defined in HTTP/1.1 standard (RFC 7231)
   */
  error?: string | undefined;
  /**
   * The type of error returned
   */
  typeName?: string | undefined;
  /**
   * A human-readable message providing more details about the error.
   */
  message?: string | undefined;
  /**
   * Contains parameter or domain specific information related to the error and why it occurred.
   */
  detail?: string | { [k: string]: any } | undefined;
  /**
   * Link to documentation of error type
   */
  ref?: string | undefined;
};

/**
 * Unprocessable
 */
export class UnprocessableResponse extends ApideckError {
  /**
   * HTTP status code
   */
  statusCode?: number | undefined;
  /**
   * Contains an explanation of the status_code as defined in HTTP/1.1 standard (RFC 7231)
   */
  error?: string | undefined;
  /**
   * The type of error returned
   */
  typeName?: string | undefined;
  /**
   * Contains parameter or domain specific information related to the error and why it occurred.
   */
  detail?: string | { [k: string]: any } | undefined;
  /**
   * Link to documentation of error type
   */
  ref?: string | undefined;

  /** The original data that was passed to this error instance. */
  data$: UnprocessableResponseData;

  constructor(
    err: UnprocessableResponseData,
    httpMeta: { response: Response; request: Request; body: string },
  ) {
    const message = err.message || "API error occurred";
    super(message, httpMeta);
    this.data$ = err;
    if (err.statusCode != null) this.statusCode = err.statusCode;
    if (err.error != null) this.error = err.error;
    if (err.typeName != null) this.typeName = err.typeName;
    if (err.detail != null) this.detail = err.detail;
    if (err.ref != null) this.ref = err.ref;

    this.name = "UnprocessableResponse";
  }
}

/** @internal */
export const UnprocessableResponseDetail$inboundSchema: z.ZodType<
  UnprocessableResponseDetail,
  z.ZodTypeDef,
  unknown
> = z.union([z.string(), z.record(z.any())]);

/** @internal */
export type UnprocessableResponseDetail$Outbound = string | {
  [k: string]: any;
};

/** @internal */
export const UnprocessableResponseDetail$outboundSchema: z.ZodType<
  UnprocessableResponseDetail$Outbound,
  z.ZodTypeDef,
  UnprocessableResponseDetail
> = z.union([z.string(), z.record(z.any())]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UnprocessableResponseDetail$ {
  /** @deprecated use `UnprocessableResponseDetail$inboundSchema` instead. */
  export const inboundSchema = UnprocessableResponseDetail$inboundSchema;
  /** @deprecated use `UnprocessableResponseDetail$outboundSchema` instead. */
  export const outboundSchema = UnprocessableResponseDetail$outboundSchema;
  /** @deprecated use `UnprocessableResponseDetail$Outbound` instead. */
  export type Outbound = UnprocessableResponseDetail$Outbound;
}

export function unprocessableResponseDetailToJSON(
  unprocessableResponseDetail: UnprocessableResponseDetail,
): string {
  return JSON.stringify(
    UnprocessableResponseDetail$outboundSchema.parse(
      unprocessableResponseDetail,
    ),
  );
}

export function unprocessableResponseDetailFromJSON(
  jsonString: string,
): SafeParseResult<UnprocessableResponseDetail, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => UnprocessableResponseDetail$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'UnprocessableResponseDetail' from JSON`,
  );
}

/** @internal */
export const UnprocessableResponse$inboundSchema: z.ZodType<
  UnprocessableResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  status_code: z.number().optional(),
  error: z.string().optional(),
  type_name: z.string().optional(),
  message: z.string().optional(),
  detail: z.union([z.string(), z.record(z.any())]).optional(),
  ref: z.string().optional(),
  request$: z.instanceof(Request),
  response$: z.instanceof(Response),
  body$: z.string(),
})
  .transform((v) => {
    const remapped = remap$(v, {
      "status_code": "statusCode",
      "type_name": "typeName",
    });

    return new UnprocessableResponse(remapped, {
      request: v.request$,
      response: v.response$,
      body: v.body$,
    });
  });

/** @internal */
export type UnprocessableResponse$Outbound = {
  status_code?: number | undefined;
  error?: string | undefined;
  type_name?: string | undefined;
  message?: string | undefined;
  detail?: string | { [k: string]: any } | undefined;
  ref?: string | undefined;
};

/** @internal */
export const UnprocessableResponse$outboundSchema: z.ZodType<
  UnprocessableResponse$Outbound,
  z.ZodTypeDef,
  UnprocessableResponse
> = z.instanceof(UnprocessableResponse)
  .transform(v => v.data$)
  .pipe(
    z.object({
      statusCode: z.number().optional(),
      error: z.string().optional(),
      typeName: z.string().optional(),
      message: z.string().optional(),
      detail: z.union([z.string(), z.record(z.any())]).optional(),
      ref: z.string().optional(),
    }).transform((v) => {
      return remap$(v, {
        statusCode: "status_code",
        typeName: "type_name",
      });
    }),
  );

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UnprocessableResponse$ {
  /** @deprecated use `UnprocessableResponse$inboundSchema` instead. */
  export const inboundSchema = UnprocessableResponse$inboundSchema;
  /** @deprecated use `UnprocessableResponse$outboundSchema` instead. */
  export const outboundSchema = UnprocessableResponse$outboundSchema;
  /** @deprecated use `UnprocessableResponse$Outbound` instead. */
  export type Outbound = UnprocessableResponse$Outbound;
}

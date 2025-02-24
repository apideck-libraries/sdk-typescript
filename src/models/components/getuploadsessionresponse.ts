/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  UploadSession,
  UploadSession$inboundSchema,
  UploadSession$Outbound,
  UploadSession$outboundSchema,
} from "./uploadsession.js";

/**
 * UploadSessions
 */
export type GetUploadSessionResponse = {
  /**
   * HTTP Response Status Code
   */
  statusCode: number;
  /**
   * HTTP Response Status
   */
  status: string;
  /**
   * Apideck ID of service provider
   */
  service: string;
  /**
   * Unified API resource name
   */
  resource: string;
  /**
   * Operation performed
   */
  operation: string;
  data: UploadSession;
  /**
   * Raw response from the integration when raw=true query param is provided
   */
  raw?: { [k: string]: any } | null | undefined;
};

/** @internal */
export const GetUploadSessionResponse$inboundSchema: z.ZodType<
  GetUploadSessionResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  status_code: z.number().int(),
  status: z.string(),
  service: z.string(),
  resource: z.string(),
  operation: z.string(),
  data: UploadSession$inboundSchema,
  _raw: z.nullable(z.record(z.any())).optional(),
}).transform((v) => {
  return remap$(v, {
    "status_code": "statusCode",
    "_raw": "raw",
  });
});

/** @internal */
export type GetUploadSessionResponse$Outbound = {
  status_code: number;
  status: string;
  service: string;
  resource: string;
  operation: string;
  data: UploadSession$Outbound;
  _raw?: { [k: string]: any } | null | undefined;
};

/** @internal */
export const GetUploadSessionResponse$outboundSchema: z.ZodType<
  GetUploadSessionResponse$Outbound,
  z.ZodTypeDef,
  GetUploadSessionResponse
> = z.object({
  statusCode: z.number().int(),
  status: z.string(),
  service: z.string(),
  resource: z.string(),
  operation: z.string(),
  data: UploadSession$outboundSchema,
  raw: z.nullable(z.record(z.any())).optional(),
}).transform((v) => {
  return remap$(v, {
    statusCode: "status_code",
    raw: "_raw",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetUploadSessionResponse$ {
  /** @deprecated use `GetUploadSessionResponse$inboundSchema` instead. */
  export const inboundSchema = GetUploadSessionResponse$inboundSchema;
  /** @deprecated use `GetUploadSessionResponse$outboundSchema` instead. */
  export const outboundSchema = GetUploadSessionResponse$outboundSchema;
  /** @deprecated use `GetUploadSessionResponse$Outbound` instead. */
  export type Outbound = GetUploadSessionResponse$Outbound;
}

export function getUploadSessionResponseToJSON(
  getUploadSessionResponse: GetUploadSessionResponse,
): string {
  return JSON.stringify(
    GetUploadSessionResponse$outboundSchema.parse(getUploadSessionResponse),
  );
}

export function getUploadSessionResponseFromJSON(
  jsonString: string,
): SafeParseResult<GetUploadSessionResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetUploadSessionResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetUploadSessionResponse' from JSON`,
  );
}

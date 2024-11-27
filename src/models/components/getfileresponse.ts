/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  UnifiedFile,
  UnifiedFile$inboundSchema,
  UnifiedFile$Outbound,
  UnifiedFile$outboundSchema,
} from "./unifiedfile.js";

/**
 * File
 */
export type GetFileResponse = {
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
  data: UnifiedFile;
};

/** @internal */
export const GetFileResponse$inboundSchema: z.ZodType<
  GetFileResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  status_code: z.number().int(),
  status: z.string(),
  service: z.string(),
  resource: z.string(),
  operation: z.string(),
  data: UnifiedFile$inboundSchema,
}).transform((v) => {
  return remap$(v, {
    "status_code": "statusCode",
  });
});

/** @internal */
export type GetFileResponse$Outbound = {
  status_code: number;
  status: string;
  service: string;
  resource: string;
  operation: string;
  data: UnifiedFile$Outbound;
};

/** @internal */
export const GetFileResponse$outboundSchema: z.ZodType<
  GetFileResponse$Outbound,
  z.ZodTypeDef,
  GetFileResponse
> = z.object({
  statusCode: z.number().int(),
  status: z.string(),
  service: z.string(),
  resource: z.string(),
  operation: z.string(),
  data: UnifiedFile$outboundSchema,
}).transform((v) => {
  return remap$(v, {
    statusCode: "status_code",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetFileResponse$ {
  /** @deprecated use `GetFileResponse$inboundSchema` instead. */
  export const inboundSchema = GetFileResponse$inboundSchema;
  /** @deprecated use `GetFileResponse$outboundSchema` instead. */
  export const outboundSchema = GetFileResponse$outboundSchema;
  /** @deprecated use `GetFileResponse$Outbound` instead. */
  export type Outbound = GetFileResponse$Outbound;
}

export function getFileResponseToJSON(
  getFileResponse: GetFileResponse,
): string {
  return JSON.stringify(GetFileResponse$outboundSchema.parse(getFileResponse));
}

export function getFileResponseFromJSON(
  jsonString: string,
): SafeParseResult<GetFileResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetFileResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetFileResponse' from JSON`,
  );
}

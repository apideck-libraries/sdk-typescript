/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  Application,
  Application$inboundSchema,
  Application$Outbound,
  Application$outboundSchema,
} from "./application.js";

/**
 * Applications
 */
export type GetApplicationResponse = {
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
  data: Application;
};

/** @internal */
export const GetApplicationResponse$inboundSchema: z.ZodType<
  GetApplicationResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  status_code: z.number().int(),
  status: z.string(),
  service: z.string(),
  resource: z.string(),
  operation: z.string(),
  data: Application$inboundSchema,
}).transform((v) => {
  return remap$(v, {
    "status_code": "statusCode",
  });
});

/** @internal */
export type GetApplicationResponse$Outbound = {
  status_code: number;
  status: string;
  service: string;
  resource: string;
  operation: string;
  data: Application$Outbound;
};

/** @internal */
export const GetApplicationResponse$outboundSchema: z.ZodType<
  GetApplicationResponse$Outbound,
  z.ZodTypeDef,
  GetApplicationResponse
> = z.object({
  statusCode: z.number().int(),
  status: z.string(),
  service: z.string(),
  resource: z.string(),
  operation: z.string(),
  data: Application$outboundSchema,
}).transform((v) => {
  return remap$(v, {
    statusCode: "status_code",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetApplicationResponse$ {
  /** @deprecated use `GetApplicationResponse$inboundSchema` instead. */
  export const inboundSchema = GetApplicationResponse$inboundSchema;
  /** @deprecated use `GetApplicationResponse$outboundSchema` instead. */
  export const outboundSchema = GetApplicationResponse$outboundSchema;
  /** @deprecated use `GetApplicationResponse$Outbound` instead. */
  export type Outbound = GetApplicationResponse$Outbound;
}

export function getApplicationResponseToJSON(
  getApplicationResponse: GetApplicationResponse,
): string {
  return JSON.stringify(
    GetApplicationResponse$outboundSchema.parse(getApplicationResponse),
  );
}

export function getApplicationResponseFromJSON(
  jsonString: string,
): SafeParseResult<GetApplicationResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetApplicationResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetApplicationResponse' from JSON`,
  );
}

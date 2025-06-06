/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  CustomObjectSchema,
  CustomObjectSchema$inboundSchema,
  CustomObjectSchema$Outbound,
  CustomObjectSchema$outboundSchema,
} from "./customobjectschema.js";

/**
 * Custom object schema
 */
export type GetCustomObjectSchemaResponse = {
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
  data: CustomObjectSchema;
  /**
   * Raw response from the integration when raw=true query param is provided
   */
  raw?: { [k: string]: any } | null | undefined;
};

/** @internal */
export const GetCustomObjectSchemaResponse$inboundSchema: z.ZodType<
  GetCustomObjectSchemaResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  status_code: z.number().int(),
  status: z.string(),
  service: z.string(),
  resource: z.string(),
  operation: z.string(),
  data: CustomObjectSchema$inboundSchema,
  _raw: z.nullable(z.record(z.any())).optional(),
}).transform((v) => {
  return remap$(v, {
    "status_code": "statusCode",
    "_raw": "raw",
  });
});

/** @internal */
export type GetCustomObjectSchemaResponse$Outbound = {
  status_code: number;
  status: string;
  service: string;
  resource: string;
  operation: string;
  data: CustomObjectSchema$Outbound;
  _raw?: { [k: string]: any } | null | undefined;
};

/** @internal */
export const GetCustomObjectSchemaResponse$outboundSchema: z.ZodType<
  GetCustomObjectSchemaResponse$Outbound,
  z.ZodTypeDef,
  GetCustomObjectSchemaResponse
> = z.object({
  statusCode: z.number().int(),
  status: z.string(),
  service: z.string(),
  resource: z.string(),
  operation: z.string(),
  data: CustomObjectSchema$outboundSchema,
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
export namespace GetCustomObjectSchemaResponse$ {
  /** @deprecated use `GetCustomObjectSchemaResponse$inboundSchema` instead. */
  export const inboundSchema = GetCustomObjectSchemaResponse$inboundSchema;
  /** @deprecated use `GetCustomObjectSchemaResponse$outboundSchema` instead. */
  export const outboundSchema = GetCustomObjectSchemaResponse$outboundSchema;
  /** @deprecated use `GetCustomObjectSchemaResponse$Outbound` instead. */
  export type Outbound = GetCustomObjectSchemaResponse$Outbound;
}

export function getCustomObjectSchemaResponseToJSON(
  getCustomObjectSchemaResponse: GetCustomObjectSchemaResponse,
): string {
  return JSON.stringify(
    GetCustomObjectSchemaResponse$outboundSchema.parse(
      getCustomObjectSchemaResponse,
    ),
  );
}

export function getCustomObjectSchemaResponseFromJSON(
  jsonString: string,
): SafeParseResult<GetCustomObjectSchemaResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetCustomObjectSchemaResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetCustomObjectSchemaResponse' from JSON`,
  );
}

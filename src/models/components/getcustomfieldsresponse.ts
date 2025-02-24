/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  CustomFieldFinder,
  CustomFieldFinder$inboundSchema,
  CustomFieldFinder$Outbound,
  CustomFieldFinder$outboundSchema,
} from "./customfieldfinder.js";

/**
 * Custom mapping
 */
export type GetCustomFieldsResponse = {
  /**
   * HTTP Response Status Code
   */
  statusCode: number;
  /**
   * HTTP Response Status
   */
  status: string;
  data: Array<CustomFieldFinder>;
  /**
   * Raw response from the integration when raw=true query param is provided
   */
  raw?: { [k: string]: any } | null | undefined;
};

/** @internal */
export const GetCustomFieldsResponse$inboundSchema: z.ZodType<
  GetCustomFieldsResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  status_code: z.number().int(),
  status: z.string(),
  data: z.array(CustomFieldFinder$inboundSchema),
  _raw: z.nullable(z.record(z.any())).optional(),
}).transform((v) => {
  return remap$(v, {
    "status_code": "statusCode",
    "_raw": "raw",
  });
});

/** @internal */
export type GetCustomFieldsResponse$Outbound = {
  status_code: number;
  status: string;
  data: Array<CustomFieldFinder$Outbound>;
  _raw?: { [k: string]: any } | null | undefined;
};

/** @internal */
export const GetCustomFieldsResponse$outboundSchema: z.ZodType<
  GetCustomFieldsResponse$Outbound,
  z.ZodTypeDef,
  GetCustomFieldsResponse
> = z.object({
  statusCode: z.number().int(),
  status: z.string(),
  data: z.array(CustomFieldFinder$outboundSchema),
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
export namespace GetCustomFieldsResponse$ {
  /** @deprecated use `GetCustomFieldsResponse$inboundSchema` instead. */
  export const inboundSchema = GetCustomFieldsResponse$inboundSchema;
  /** @deprecated use `GetCustomFieldsResponse$outboundSchema` instead. */
  export const outboundSchema = GetCustomFieldsResponse$outboundSchema;
  /** @deprecated use `GetCustomFieldsResponse$Outbound` instead. */
  export type Outbound = GetCustomFieldsResponse$Outbound;
}

export function getCustomFieldsResponseToJSON(
  getCustomFieldsResponse: GetCustomFieldsResponse,
): string {
  return JSON.stringify(
    GetCustomFieldsResponse$outboundSchema.parse(getCustomFieldsResponse),
  );
}

export function getCustomFieldsResponseFromJSON(
  jsonString: string,
): SafeParseResult<GetCustomFieldsResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetCustomFieldsResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetCustomFieldsResponse' from JSON`,
  );
}

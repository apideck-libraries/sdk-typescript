/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  ApiResource,
  ApiResource$inboundSchema,
  ApiResource$Outbound,
  ApiResource$outboundSchema,
} from "./apiresource.js";
import {
  Links,
  Links$inboundSchema,
  Links$Outbound,
  Links$outboundSchema,
} from "./links.js";
import {
  Meta,
  Meta$inboundSchema,
  Meta$Outbound,
  Meta$outboundSchema,
} from "./meta.js";

/**
 * ApiResources
 */
export type GetApiResourceResponse = {
  /**
   * HTTP Response Status Code
   */
  statusCode: number;
  /**
   * HTTP Response Status
   */
  status: string;
  data: ApiResource;
  /**
   * Response metadata
   */
  meta?: Meta | undefined;
  /**
   * Links to navigate to previous or next pages through the API
   */
  links?: Links | undefined;
};

/** @internal */
export const GetApiResourceResponse$inboundSchema: z.ZodType<
  GetApiResourceResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  status_code: z.number().int(),
  status: z.string(),
  data: ApiResource$inboundSchema,
  meta: Meta$inboundSchema.optional(),
  links: Links$inboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    "status_code": "statusCode",
  });
});

/** @internal */
export type GetApiResourceResponse$Outbound = {
  status_code: number;
  status: string;
  data: ApiResource$Outbound;
  meta?: Meta$Outbound | undefined;
  links?: Links$Outbound | undefined;
};

/** @internal */
export const GetApiResourceResponse$outboundSchema: z.ZodType<
  GetApiResourceResponse$Outbound,
  z.ZodTypeDef,
  GetApiResourceResponse
> = z.object({
  statusCode: z.number().int(),
  status: z.string(),
  data: ApiResource$outboundSchema,
  meta: Meta$outboundSchema.optional(),
  links: Links$outboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    statusCode: "status_code",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetApiResourceResponse$ {
  /** @deprecated use `GetApiResourceResponse$inboundSchema` instead. */
  export const inboundSchema = GetApiResourceResponse$inboundSchema;
  /** @deprecated use `GetApiResourceResponse$outboundSchema` instead. */
  export const outboundSchema = GetApiResourceResponse$outboundSchema;
  /** @deprecated use `GetApiResourceResponse$Outbound` instead. */
  export type Outbound = GetApiResourceResponse$Outbound;
}

export function getApiResourceResponseToJSON(
  getApiResourceResponse: GetApiResourceResponse,
): string {
  return JSON.stringify(
    GetApiResourceResponse$outboundSchema.parse(getApiResourceResponse),
  );
}

export function getApiResourceResponseFromJSON(
  jsonString: string,
): SafeParseResult<GetApiResourceResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetApiResourceResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetApiResourceResponse' from JSON`,
  );
}

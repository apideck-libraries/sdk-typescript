/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type HrisTimeOffRequestsAllGlobals = {
  /**
   * ID of the consumer which you want to get or push data from
   */
  consumerId?: string | undefined;
  /**
   * The ID of your Unify application
   */
  appId?: string | undefined;
};

export type HrisTimeOffRequestsAllRequest = {
  /**
   * Include raw response. Mostly used for debugging purposes
   */
  raw?: boolean | undefined;
  /**
   * Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API.
   */
  serviceId?: string | undefined;
  /**
   * Cursor to start from. You can find cursors for next/previous pages in the meta.cursors property of the response.
   */
  cursor?: string | null | undefined;
  /**
   * Number of results to return. Minimum 1, Maximum 200, Default 20
   */
  limit?: number | undefined;
  /**
   * Apply filters
   */
  filter?: components.TimeOffRequestsFilter | undefined;
  /**
   * Optional unmapped key/values that will be passed through to downstream as query parameters. Ie: ?pass_through[search]=leads becomes ?search=leads
   */
  passThrough?: { [k: string]: any } | undefined;
  /**
   * The 'fields' parameter allows API users to specify the fields they want to include in the API response. If this parameter is not present, the API will return all available fields. If this parameter is present, only the fields specified in the comma-separated string will be included in the response. Nested properties can also be requested by using a dot notation. <br /><br />Example: `fields=name,email,addresses.city`<br /><br />In the example above, the response will only include the fields "name", "email" and "addresses.city". If any other fields are available, they will be excluded.
   */
  fields?: string | null | undefined;
};

export type HrisTimeOffRequestsAllResponse = {
  httpMeta: components.HTTPMetadata;
  /**
   * TimeOffRequests
   */
  getTimeOffRequestsResponse?:
    | components.GetTimeOffRequestsResponse
    | undefined;
  /**
   * Unexpected error
   */
  unexpectedErrorResponse?: components.UnexpectedErrorResponse | undefined;
};

/** @internal */
export const HrisTimeOffRequestsAllGlobals$inboundSchema: z.ZodType<
  HrisTimeOffRequestsAllGlobals,
  z.ZodTypeDef,
  unknown
> = z.object({
  consumerId: z.string().optional(),
  appId: z.string().optional(),
});

/** @internal */
export type HrisTimeOffRequestsAllGlobals$Outbound = {
  consumerId?: string | undefined;
  appId?: string | undefined;
};

/** @internal */
export const HrisTimeOffRequestsAllGlobals$outboundSchema: z.ZodType<
  HrisTimeOffRequestsAllGlobals$Outbound,
  z.ZodTypeDef,
  HrisTimeOffRequestsAllGlobals
> = z.object({
  consumerId: z.string().optional(),
  appId: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace HrisTimeOffRequestsAllGlobals$ {
  /** @deprecated use `HrisTimeOffRequestsAllGlobals$inboundSchema` instead. */
  export const inboundSchema = HrisTimeOffRequestsAllGlobals$inboundSchema;
  /** @deprecated use `HrisTimeOffRequestsAllGlobals$outboundSchema` instead. */
  export const outboundSchema = HrisTimeOffRequestsAllGlobals$outboundSchema;
  /** @deprecated use `HrisTimeOffRequestsAllGlobals$Outbound` instead. */
  export type Outbound = HrisTimeOffRequestsAllGlobals$Outbound;
}

export function hrisTimeOffRequestsAllGlobalsToJSON(
  hrisTimeOffRequestsAllGlobals: HrisTimeOffRequestsAllGlobals,
): string {
  return JSON.stringify(
    HrisTimeOffRequestsAllGlobals$outboundSchema.parse(
      hrisTimeOffRequestsAllGlobals,
    ),
  );
}

export function hrisTimeOffRequestsAllGlobalsFromJSON(
  jsonString: string,
): SafeParseResult<HrisTimeOffRequestsAllGlobals, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => HrisTimeOffRequestsAllGlobals$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'HrisTimeOffRequestsAllGlobals' from JSON`,
  );
}

/** @internal */
export const HrisTimeOffRequestsAllRequest$inboundSchema: z.ZodType<
  HrisTimeOffRequestsAllRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  raw: z.boolean().default(false),
  serviceId: z.string().optional(),
  cursor: z.nullable(z.string()).optional(),
  limit: z.number().int().default(20),
  filter: components.TimeOffRequestsFilter$inboundSchema.optional(),
  pass_through: z.record(z.any()).optional(),
  fields: z.nullable(z.string()).optional(),
}).transform((v) => {
  return remap$(v, {
    "pass_through": "passThrough",
  });
});

/** @internal */
export type HrisTimeOffRequestsAllRequest$Outbound = {
  raw: boolean;
  serviceId?: string | undefined;
  cursor?: string | null | undefined;
  limit: number;
  filter?: components.TimeOffRequestsFilter$Outbound | undefined;
  pass_through?: { [k: string]: any } | undefined;
  fields?: string | null | undefined;
};

/** @internal */
export const HrisTimeOffRequestsAllRequest$outboundSchema: z.ZodType<
  HrisTimeOffRequestsAllRequest$Outbound,
  z.ZodTypeDef,
  HrisTimeOffRequestsAllRequest
> = z.object({
  raw: z.boolean().default(false),
  serviceId: z.string().optional(),
  cursor: z.nullable(z.string()).optional(),
  limit: z.number().int().default(20),
  filter: components.TimeOffRequestsFilter$outboundSchema.optional(),
  passThrough: z.record(z.any()).optional(),
  fields: z.nullable(z.string()).optional(),
}).transform((v) => {
  return remap$(v, {
    passThrough: "pass_through",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace HrisTimeOffRequestsAllRequest$ {
  /** @deprecated use `HrisTimeOffRequestsAllRequest$inboundSchema` instead. */
  export const inboundSchema = HrisTimeOffRequestsAllRequest$inboundSchema;
  /** @deprecated use `HrisTimeOffRequestsAllRequest$outboundSchema` instead. */
  export const outboundSchema = HrisTimeOffRequestsAllRequest$outboundSchema;
  /** @deprecated use `HrisTimeOffRequestsAllRequest$Outbound` instead. */
  export type Outbound = HrisTimeOffRequestsAllRequest$Outbound;
}

export function hrisTimeOffRequestsAllRequestToJSON(
  hrisTimeOffRequestsAllRequest: HrisTimeOffRequestsAllRequest,
): string {
  return JSON.stringify(
    HrisTimeOffRequestsAllRequest$outboundSchema.parse(
      hrisTimeOffRequestsAllRequest,
    ),
  );
}

export function hrisTimeOffRequestsAllRequestFromJSON(
  jsonString: string,
): SafeParseResult<HrisTimeOffRequestsAllRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => HrisTimeOffRequestsAllRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'HrisTimeOffRequestsAllRequest' from JSON`,
  );
}

/** @internal */
export const HrisTimeOffRequestsAllResponse$inboundSchema: z.ZodType<
  HrisTimeOffRequestsAllResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  HttpMeta: components.HTTPMetadata$inboundSchema,
  GetTimeOffRequestsResponse: components
    .GetTimeOffRequestsResponse$inboundSchema.optional(),
  UnexpectedErrorResponse: components.UnexpectedErrorResponse$inboundSchema
    .optional(),
}).transform((v) => {
  return remap$(v, {
    "HttpMeta": "httpMeta",
    "GetTimeOffRequestsResponse": "getTimeOffRequestsResponse",
    "UnexpectedErrorResponse": "unexpectedErrorResponse",
  });
});

/** @internal */
export type HrisTimeOffRequestsAllResponse$Outbound = {
  HttpMeta: components.HTTPMetadata$Outbound;
  GetTimeOffRequestsResponse?:
    | components.GetTimeOffRequestsResponse$Outbound
    | undefined;
  UnexpectedErrorResponse?:
    | components.UnexpectedErrorResponse$Outbound
    | undefined;
};

/** @internal */
export const HrisTimeOffRequestsAllResponse$outboundSchema: z.ZodType<
  HrisTimeOffRequestsAllResponse$Outbound,
  z.ZodTypeDef,
  HrisTimeOffRequestsAllResponse
> = z.object({
  httpMeta: components.HTTPMetadata$outboundSchema,
  getTimeOffRequestsResponse: components
    .GetTimeOffRequestsResponse$outboundSchema.optional(),
  unexpectedErrorResponse: components.UnexpectedErrorResponse$outboundSchema
    .optional(),
}).transform((v) => {
  return remap$(v, {
    httpMeta: "HttpMeta",
    getTimeOffRequestsResponse: "GetTimeOffRequestsResponse",
    unexpectedErrorResponse: "UnexpectedErrorResponse",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace HrisTimeOffRequestsAllResponse$ {
  /** @deprecated use `HrisTimeOffRequestsAllResponse$inboundSchema` instead. */
  export const inboundSchema = HrisTimeOffRequestsAllResponse$inboundSchema;
  /** @deprecated use `HrisTimeOffRequestsAllResponse$outboundSchema` instead. */
  export const outboundSchema = HrisTimeOffRequestsAllResponse$outboundSchema;
  /** @deprecated use `HrisTimeOffRequestsAllResponse$Outbound` instead. */
  export type Outbound = HrisTimeOffRequestsAllResponse$Outbound;
}

export function hrisTimeOffRequestsAllResponseToJSON(
  hrisTimeOffRequestsAllResponse: HrisTimeOffRequestsAllResponse,
): string {
  return JSON.stringify(
    HrisTimeOffRequestsAllResponse$outboundSchema.parse(
      hrisTimeOffRequestsAllResponse,
    ),
  );
}

export function hrisTimeOffRequestsAllResponseFromJSON(
  jsonString: string,
): SafeParseResult<HrisTimeOffRequestsAllResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => HrisTimeOffRequestsAllResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'HrisTimeOffRequestsAllResponse' from JSON`,
  );
}

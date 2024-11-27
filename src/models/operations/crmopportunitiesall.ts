/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type CrmOpportunitiesAllGlobals = {
  /**
   * ID of the consumer which you want to get or push data from
   */
  consumerId?: string | undefined;
  /**
   * The ID of your Unify application
   */
  appId?: string | undefined;
};

export type CrmOpportunitiesAllRequest = {
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
  filter?: components.OpportunitiesFilter | undefined;
  /**
   * Apply sorting
   */
  sort?: components.OpportunitiesSort | undefined;
  /**
   * Optional unmapped key/values that will be passed through to downstream as query parameters. Ie: ?pass_through[search]=leads becomes ?search=leads
   */
  passThrough?: { [k: string]: any } | undefined;
  /**
   * The 'fields' parameter allows API users to specify the fields they want to include in the API response. If this parameter is not present, the API will return all available fields. If this parameter is present, only the fields specified in the comma-separated string will be included in the response. Nested properties can also be requested by using a dot notation. <br /><br />Example: `fields=name,email,addresses.city`<br /><br />In the example above, the response will only include the fields "name", "email" and "addresses.city". If any other fields are available, they will be excluded.
   */
  fields?: string | null | undefined;
};

export type CrmOpportunitiesAllResponse = {
  httpMeta: components.HTTPMetadata;
  /**
   * Opportunities
   */
  getOpportunitiesResponse?: components.GetOpportunitiesResponse | undefined;
  /**
   * Unexpected error
   */
  unexpectedErrorResponse?: components.UnexpectedErrorResponse | undefined;
};

/** @internal */
export const CrmOpportunitiesAllGlobals$inboundSchema: z.ZodType<
  CrmOpportunitiesAllGlobals,
  z.ZodTypeDef,
  unknown
> = z.object({
  consumerId: z.string().optional(),
  appId: z.string().optional(),
});

/** @internal */
export type CrmOpportunitiesAllGlobals$Outbound = {
  consumerId?: string | undefined;
  appId?: string | undefined;
};

/** @internal */
export const CrmOpportunitiesAllGlobals$outboundSchema: z.ZodType<
  CrmOpportunitiesAllGlobals$Outbound,
  z.ZodTypeDef,
  CrmOpportunitiesAllGlobals
> = z.object({
  consumerId: z.string().optional(),
  appId: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CrmOpportunitiesAllGlobals$ {
  /** @deprecated use `CrmOpportunitiesAllGlobals$inboundSchema` instead. */
  export const inboundSchema = CrmOpportunitiesAllGlobals$inboundSchema;
  /** @deprecated use `CrmOpportunitiesAllGlobals$outboundSchema` instead. */
  export const outboundSchema = CrmOpportunitiesAllGlobals$outboundSchema;
  /** @deprecated use `CrmOpportunitiesAllGlobals$Outbound` instead. */
  export type Outbound = CrmOpportunitiesAllGlobals$Outbound;
}

export function crmOpportunitiesAllGlobalsToJSON(
  crmOpportunitiesAllGlobals: CrmOpportunitiesAllGlobals,
): string {
  return JSON.stringify(
    CrmOpportunitiesAllGlobals$outboundSchema.parse(crmOpportunitiesAllGlobals),
  );
}

export function crmOpportunitiesAllGlobalsFromJSON(
  jsonString: string,
): SafeParseResult<CrmOpportunitiesAllGlobals, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CrmOpportunitiesAllGlobals$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CrmOpportunitiesAllGlobals' from JSON`,
  );
}

/** @internal */
export const CrmOpportunitiesAllRequest$inboundSchema: z.ZodType<
  CrmOpportunitiesAllRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  raw: z.boolean().default(false),
  serviceId: z.string().optional(),
  cursor: z.nullable(z.string()).optional(),
  limit: z.number().int().default(20),
  filter: components.OpportunitiesFilter$inboundSchema.optional(),
  sort: components.OpportunitiesSort$inboundSchema.optional(),
  pass_through: z.record(z.any()).optional(),
  fields: z.nullable(z.string()).optional(),
}).transform((v) => {
  return remap$(v, {
    "pass_through": "passThrough",
  });
});

/** @internal */
export type CrmOpportunitiesAllRequest$Outbound = {
  raw: boolean;
  serviceId?: string | undefined;
  cursor?: string | null | undefined;
  limit: number;
  filter?: components.OpportunitiesFilter$Outbound | undefined;
  sort?: components.OpportunitiesSort$Outbound | undefined;
  pass_through?: { [k: string]: any } | undefined;
  fields?: string | null | undefined;
};

/** @internal */
export const CrmOpportunitiesAllRequest$outboundSchema: z.ZodType<
  CrmOpportunitiesAllRequest$Outbound,
  z.ZodTypeDef,
  CrmOpportunitiesAllRequest
> = z.object({
  raw: z.boolean().default(false),
  serviceId: z.string().optional(),
  cursor: z.nullable(z.string()).optional(),
  limit: z.number().int().default(20),
  filter: components.OpportunitiesFilter$outboundSchema.optional(),
  sort: components.OpportunitiesSort$outboundSchema.optional(),
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
export namespace CrmOpportunitiesAllRequest$ {
  /** @deprecated use `CrmOpportunitiesAllRequest$inboundSchema` instead. */
  export const inboundSchema = CrmOpportunitiesAllRequest$inboundSchema;
  /** @deprecated use `CrmOpportunitiesAllRequest$outboundSchema` instead. */
  export const outboundSchema = CrmOpportunitiesAllRequest$outboundSchema;
  /** @deprecated use `CrmOpportunitiesAllRequest$Outbound` instead. */
  export type Outbound = CrmOpportunitiesAllRequest$Outbound;
}

export function crmOpportunitiesAllRequestToJSON(
  crmOpportunitiesAllRequest: CrmOpportunitiesAllRequest,
): string {
  return JSON.stringify(
    CrmOpportunitiesAllRequest$outboundSchema.parse(crmOpportunitiesAllRequest),
  );
}

export function crmOpportunitiesAllRequestFromJSON(
  jsonString: string,
): SafeParseResult<CrmOpportunitiesAllRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CrmOpportunitiesAllRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CrmOpportunitiesAllRequest' from JSON`,
  );
}

/** @internal */
export const CrmOpportunitiesAllResponse$inboundSchema: z.ZodType<
  CrmOpportunitiesAllResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  HttpMeta: components.HTTPMetadata$inboundSchema,
  GetOpportunitiesResponse: components.GetOpportunitiesResponse$inboundSchema
    .optional(),
  UnexpectedErrorResponse: components.UnexpectedErrorResponse$inboundSchema
    .optional(),
}).transform((v) => {
  return remap$(v, {
    "HttpMeta": "httpMeta",
    "GetOpportunitiesResponse": "getOpportunitiesResponse",
    "UnexpectedErrorResponse": "unexpectedErrorResponse",
  });
});

/** @internal */
export type CrmOpportunitiesAllResponse$Outbound = {
  HttpMeta: components.HTTPMetadata$Outbound;
  GetOpportunitiesResponse?:
    | components.GetOpportunitiesResponse$Outbound
    | undefined;
  UnexpectedErrorResponse?:
    | components.UnexpectedErrorResponse$Outbound
    | undefined;
};

/** @internal */
export const CrmOpportunitiesAllResponse$outboundSchema: z.ZodType<
  CrmOpportunitiesAllResponse$Outbound,
  z.ZodTypeDef,
  CrmOpportunitiesAllResponse
> = z.object({
  httpMeta: components.HTTPMetadata$outboundSchema,
  getOpportunitiesResponse: components.GetOpportunitiesResponse$outboundSchema
    .optional(),
  unexpectedErrorResponse: components.UnexpectedErrorResponse$outboundSchema
    .optional(),
}).transform((v) => {
  return remap$(v, {
    httpMeta: "HttpMeta",
    getOpportunitiesResponse: "GetOpportunitiesResponse",
    unexpectedErrorResponse: "UnexpectedErrorResponse",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CrmOpportunitiesAllResponse$ {
  /** @deprecated use `CrmOpportunitiesAllResponse$inboundSchema` instead. */
  export const inboundSchema = CrmOpportunitiesAllResponse$inboundSchema;
  /** @deprecated use `CrmOpportunitiesAllResponse$outboundSchema` instead. */
  export const outboundSchema = CrmOpportunitiesAllResponse$outboundSchema;
  /** @deprecated use `CrmOpportunitiesAllResponse$Outbound` instead. */
  export type Outbound = CrmOpportunitiesAllResponse$Outbound;
}

export function crmOpportunitiesAllResponseToJSON(
  crmOpportunitiesAllResponse: CrmOpportunitiesAllResponse,
): string {
  return JSON.stringify(
    CrmOpportunitiesAllResponse$outboundSchema.parse(
      crmOpportunitiesAllResponse,
    ),
  );
}

export function crmOpportunitiesAllResponseFromJSON(
  jsonString: string,
): SafeParseResult<CrmOpportunitiesAllResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CrmOpportunitiesAllResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CrmOpportunitiesAllResponse' from JSON`,
  );
}

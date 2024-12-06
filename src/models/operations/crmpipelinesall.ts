/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type CrmPipelinesAllGlobals = {
  /**
   * ID of the consumer which you want to get or push data from
   */
  consumerId?: string | undefined;
  /**
   * The ID of your Unify application
   */
  appId?: string | undefined;
};

export type CrmPipelinesAllRequest = {
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
   * Optional unmapped key/values that will be passed through to downstream as query parameters. Ie: ?pass_through[search]=leads becomes ?search=leads
   */
  passThrough?: { [k: string]: any } | undefined;
  /**
   * The 'fields' parameter allows API users to specify the fields they want to include in the API response. If this parameter is not present, the API will return all available fields. If this parameter is present, only the fields specified in the comma-separated string will be included in the response. Nested properties can also be requested by using a dot notation. <br /><br />Example: `fields=name,email,addresses.city`<br /><br />In the example above, the response will only include the fields "name", "email" and "addresses.city". If any other fields are available, they will be excluded.
   */
  fields?: string | null | undefined;
};

export type CrmPipelinesAllResponse = {
  httpMeta: components.HTTPMetadata;
  /**
   * Pipelines
   */
  getPipelinesResponse?: components.GetPipelinesResponse | undefined;
  /**
   * Unexpected error
   */
  unexpectedErrorResponse?: components.UnexpectedErrorResponse | undefined;
};

/** @internal */
export const CrmPipelinesAllGlobals$inboundSchema: z.ZodType<
  CrmPipelinesAllGlobals,
  z.ZodTypeDef,
  unknown
> = z.object({
  consumerId: z.string().optional(),
  appId: z.string().optional(),
});

/** @internal */
export type CrmPipelinesAllGlobals$Outbound = {
  consumerId?: string | undefined;
  appId?: string | undefined;
};

/** @internal */
export const CrmPipelinesAllGlobals$outboundSchema: z.ZodType<
  CrmPipelinesAllGlobals$Outbound,
  z.ZodTypeDef,
  CrmPipelinesAllGlobals
> = z.object({
  consumerId: z.string().optional(),
  appId: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CrmPipelinesAllGlobals$ {
  /** @deprecated use `CrmPipelinesAllGlobals$inboundSchema` instead. */
  export const inboundSchema = CrmPipelinesAllGlobals$inboundSchema;
  /** @deprecated use `CrmPipelinesAllGlobals$outboundSchema` instead. */
  export const outboundSchema = CrmPipelinesAllGlobals$outboundSchema;
  /** @deprecated use `CrmPipelinesAllGlobals$Outbound` instead. */
  export type Outbound = CrmPipelinesAllGlobals$Outbound;
}

export function crmPipelinesAllGlobalsToJSON(
  crmPipelinesAllGlobals: CrmPipelinesAllGlobals,
): string {
  return JSON.stringify(
    CrmPipelinesAllGlobals$outboundSchema.parse(crmPipelinesAllGlobals),
  );
}

export function crmPipelinesAllGlobalsFromJSON(
  jsonString: string,
): SafeParseResult<CrmPipelinesAllGlobals, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CrmPipelinesAllGlobals$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CrmPipelinesAllGlobals' from JSON`,
  );
}

/** @internal */
export const CrmPipelinesAllRequest$inboundSchema: z.ZodType<
  CrmPipelinesAllRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  raw: z.boolean().default(false),
  serviceId: z.string().optional(),
  cursor: z.nullable(z.string()).optional(),
  limit: z.number().int().default(20),
  pass_through: z.record(z.any()).optional(),
  fields: z.nullable(z.string()).optional(),
}).transform((v) => {
  return remap$(v, {
    "pass_through": "passThrough",
  });
});

/** @internal */
export type CrmPipelinesAllRequest$Outbound = {
  raw: boolean;
  serviceId?: string | undefined;
  cursor?: string | null | undefined;
  limit: number;
  pass_through?: { [k: string]: any } | undefined;
  fields?: string | null | undefined;
};

/** @internal */
export const CrmPipelinesAllRequest$outboundSchema: z.ZodType<
  CrmPipelinesAllRequest$Outbound,
  z.ZodTypeDef,
  CrmPipelinesAllRequest
> = z.object({
  raw: z.boolean().default(false),
  serviceId: z.string().optional(),
  cursor: z.nullable(z.string()).optional(),
  limit: z.number().int().default(20),
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
export namespace CrmPipelinesAllRequest$ {
  /** @deprecated use `CrmPipelinesAllRequest$inboundSchema` instead. */
  export const inboundSchema = CrmPipelinesAllRequest$inboundSchema;
  /** @deprecated use `CrmPipelinesAllRequest$outboundSchema` instead. */
  export const outboundSchema = CrmPipelinesAllRequest$outboundSchema;
  /** @deprecated use `CrmPipelinesAllRequest$Outbound` instead. */
  export type Outbound = CrmPipelinesAllRequest$Outbound;
}

export function crmPipelinesAllRequestToJSON(
  crmPipelinesAllRequest: CrmPipelinesAllRequest,
): string {
  return JSON.stringify(
    CrmPipelinesAllRequest$outboundSchema.parse(crmPipelinesAllRequest),
  );
}

export function crmPipelinesAllRequestFromJSON(
  jsonString: string,
): SafeParseResult<CrmPipelinesAllRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CrmPipelinesAllRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CrmPipelinesAllRequest' from JSON`,
  );
}

/** @internal */
export const CrmPipelinesAllResponse$inboundSchema: z.ZodType<
  CrmPipelinesAllResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  HttpMeta: components.HTTPMetadata$inboundSchema,
  GetPipelinesResponse: components.GetPipelinesResponse$inboundSchema
    .optional(),
  UnexpectedErrorResponse: components.UnexpectedErrorResponse$inboundSchema
    .optional(),
}).transform((v) => {
  return remap$(v, {
    "HttpMeta": "httpMeta",
    "GetPipelinesResponse": "getPipelinesResponse",
    "UnexpectedErrorResponse": "unexpectedErrorResponse",
  });
});

/** @internal */
export type CrmPipelinesAllResponse$Outbound = {
  HttpMeta: components.HTTPMetadata$Outbound;
  GetPipelinesResponse?: components.GetPipelinesResponse$Outbound | undefined;
  UnexpectedErrorResponse?:
    | components.UnexpectedErrorResponse$Outbound
    | undefined;
};

/** @internal */
export const CrmPipelinesAllResponse$outboundSchema: z.ZodType<
  CrmPipelinesAllResponse$Outbound,
  z.ZodTypeDef,
  CrmPipelinesAllResponse
> = z.object({
  httpMeta: components.HTTPMetadata$outboundSchema,
  getPipelinesResponse: components.GetPipelinesResponse$outboundSchema
    .optional(),
  unexpectedErrorResponse: components.UnexpectedErrorResponse$outboundSchema
    .optional(),
}).transform((v) => {
  return remap$(v, {
    httpMeta: "HttpMeta",
    getPipelinesResponse: "GetPipelinesResponse",
    unexpectedErrorResponse: "UnexpectedErrorResponse",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CrmPipelinesAllResponse$ {
  /** @deprecated use `CrmPipelinesAllResponse$inboundSchema` instead. */
  export const inboundSchema = CrmPipelinesAllResponse$inboundSchema;
  /** @deprecated use `CrmPipelinesAllResponse$outboundSchema` instead. */
  export const outboundSchema = CrmPipelinesAllResponse$outboundSchema;
  /** @deprecated use `CrmPipelinesAllResponse$Outbound` instead. */
  export type Outbound = CrmPipelinesAllResponse$Outbound;
}

export function crmPipelinesAllResponseToJSON(
  crmPipelinesAllResponse: CrmPipelinesAllResponse,
): string {
  return JSON.stringify(
    CrmPipelinesAllResponse$outboundSchema.parse(crmPipelinesAllResponse),
  );
}

export function crmPipelinesAllResponseFromJSON(
  jsonString: string,
): SafeParseResult<CrmPipelinesAllResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CrmPipelinesAllResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CrmPipelinesAllResponse' from JSON`,
  );
}

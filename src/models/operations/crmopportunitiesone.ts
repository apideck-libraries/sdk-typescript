/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type CrmOpportunitiesOneGlobals = {
  /**
   * ID of the consumer which you want to get or push data from
   */
  consumerId?: string | undefined;
  /**
   * The ID of your Unify application
   */
  appId?: string | undefined;
};

export type CrmOpportunitiesOneRequest = {
  /**
   * ID of the record you are acting upon.
   */
  id: string;
  /**
   * ID of the consumer which you want to get or push data from
   */
  consumerId?: string | undefined;
  /**
   * The ID of your Unify application
   */
  appId?: string | undefined;
  /**
   * Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API.
   */
  serviceId?: string | undefined;
  /**
   * Include raw response. Mostly used for debugging purposes
   */
  raw?: boolean | undefined;
  /**
   * The 'fields' parameter allows API users to specify the fields they want to include in the API response. If this parameter is not present, the API will return all available fields. If this parameter is present, only the fields specified in the comma-separated string will be included in the response. Nested properties can also be requested by using a dot notation. <br /><br />Example: `fields=name,email,addresses.city`<br /><br />In the example above, the response will only include the fields "name", "email" and "addresses.city". If any other fields are available, they will be excluded.
   */
  fields?: string | null | undefined;
};

export type CrmOpportunitiesOneResponse = {
  httpMeta: components.HTTPMetadata;
  /**
   * Opportunity
   */
  getOpportunityResponse?: components.GetOpportunityResponse | undefined;
  /**
   * Unexpected error
   */
  unexpectedErrorResponse?: components.UnexpectedErrorResponse | undefined;
};

/** @internal */
export const CrmOpportunitiesOneGlobals$inboundSchema: z.ZodType<
  CrmOpportunitiesOneGlobals,
  z.ZodTypeDef,
  unknown
> = z.object({
  consumerId: z.string().optional(),
  appId: z.string().optional(),
});

/** @internal */
export type CrmOpportunitiesOneGlobals$Outbound = {
  consumerId?: string | undefined;
  appId?: string | undefined;
};

/** @internal */
export const CrmOpportunitiesOneGlobals$outboundSchema: z.ZodType<
  CrmOpportunitiesOneGlobals$Outbound,
  z.ZodTypeDef,
  CrmOpportunitiesOneGlobals
> = z.object({
  consumerId: z.string().optional(),
  appId: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CrmOpportunitiesOneGlobals$ {
  /** @deprecated use `CrmOpportunitiesOneGlobals$inboundSchema` instead. */
  export const inboundSchema = CrmOpportunitiesOneGlobals$inboundSchema;
  /** @deprecated use `CrmOpportunitiesOneGlobals$outboundSchema` instead. */
  export const outboundSchema = CrmOpportunitiesOneGlobals$outboundSchema;
  /** @deprecated use `CrmOpportunitiesOneGlobals$Outbound` instead. */
  export type Outbound = CrmOpportunitiesOneGlobals$Outbound;
}

export function crmOpportunitiesOneGlobalsToJSON(
  crmOpportunitiesOneGlobals: CrmOpportunitiesOneGlobals,
): string {
  return JSON.stringify(
    CrmOpportunitiesOneGlobals$outboundSchema.parse(crmOpportunitiesOneGlobals),
  );
}

export function crmOpportunitiesOneGlobalsFromJSON(
  jsonString: string,
): SafeParseResult<CrmOpportunitiesOneGlobals, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CrmOpportunitiesOneGlobals$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CrmOpportunitiesOneGlobals' from JSON`,
  );
}

/** @internal */
export const CrmOpportunitiesOneRequest$inboundSchema: z.ZodType<
  CrmOpportunitiesOneRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
  consumerId: z.string().optional(),
  appId: z.string().optional(),
  serviceId: z.string().optional(),
  raw: z.boolean().default(false),
  fields: z.nullable(z.string()).optional(),
});

/** @internal */
export type CrmOpportunitiesOneRequest$Outbound = {
  id: string;
  consumerId?: string | undefined;
  appId?: string | undefined;
  serviceId?: string | undefined;
  raw: boolean;
  fields?: string | null | undefined;
};

/** @internal */
export const CrmOpportunitiesOneRequest$outboundSchema: z.ZodType<
  CrmOpportunitiesOneRequest$Outbound,
  z.ZodTypeDef,
  CrmOpportunitiesOneRequest
> = z.object({
  id: z.string(),
  consumerId: z.string().optional(),
  appId: z.string().optional(),
  serviceId: z.string().optional(),
  raw: z.boolean().default(false),
  fields: z.nullable(z.string()).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CrmOpportunitiesOneRequest$ {
  /** @deprecated use `CrmOpportunitiesOneRequest$inboundSchema` instead. */
  export const inboundSchema = CrmOpportunitiesOneRequest$inboundSchema;
  /** @deprecated use `CrmOpportunitiesOneRequest$outboundSchema` instead. */
  export const outboundSchema = CrmOpportunitiesOneRequest$outboundSchema;
  /** @deprecated use `CrmOpportunitiesOneRequest$Outbound` instead. */
  export type Outbound = CrmOpportunitiesOneRequest$Outbound;
}

export function crmOpportunitiesOneRequestToJSON(
  crmOpportunitiesOneRequest: CrmOpportunitiesOneRequest,
): string {
  return JSON.stringify(
    CrmOpportunitiesOneRequest$outboundSchema.parse(crmOpportunitiesOneRequest),
  );
}

export function crmOpportunitiesOneRequestFromJSON(
  jsonString: string,
): SafeParseResult<CrmOpportunitiesOneRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CrmOpportunitiesOneRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CrmOpportunitiesOneRequest' from JSON`,
  );
}

/** @internal */
export const CrmOpportunitiesOneResponse$inboundSchema: z.ZodType<
  CrmOpportunitiesOneResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  HttpMeta: components.HTTPMetadata$inboundSchema,
  GetOpportunityResponse: components.GetOpportunityResponse$inboundSchema
    .optional(),
  UnexpectedErrorResponse: components.UnexpectedErrorResponse$inboundSchema
    .optional(),
}).transform((v) => {
  return remap$(v, {
    "HttpMeta": "httpMeta",
    "GetOpportunityResponse": "getOpportunityResponse",
    "UnexpectedErrorResponse": "unexpectedErrorResponse",
  });
});

/** @internal */
export type CrmOpportunitiesOneResponse$Outbound = {
  HttpMeta: components.HTTPMetadata$Outbound;
  GetOpportunityResponse?:
    | components.GetOpportunityResponse$Outbound
    | undefined;
  UnexpectedErrorResponse?:
    | components.UnexpectedErrorResponse$Outbound
    | undefined;
};

/** @internal */
export const CrmOpportunitiesOneResponse$outboundSchema: z.ZodType<
  CrmOpportunitiesOneResponse$Outbound,
  z.ZodTypeDef,
  CrmOpportunitiesOneResponse
> = z.object({
  httpMeta: components.HTTPMetadata$outboundSchema,
  getOpportunityResponse: components.GetOpportunityResponse$outboundSchema
    .optional(),
  unexpectedErrorResponse: components.UnexpectedErrorResponse$outboundSchema
    .optional(),
}).transform((v) => {
  return remap$(v, {
    httpMeta: "HttpMeta",
    getOpportunityResponse: "GetOpportunityResponse",
    unexpectedErrorResponse: "UnexpectedErrorResponse",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CrmOpportunitiesOneResponse$ {
  /** @deprecated use `CrmOpportunitiesOneResponse$inboundSchema` instead. */
  export const inboundSchema = CrmOpportunitiesOneResponse$inboundSchema;
  /** @deprecated use `CrmOpportunitiesOneResponse$outboundSchema` instead. */
  export const outboundSchema = CrmOpportunitiesOneResponse$outboundSchema;
  /** @deprecated use `CrmOpportunitiesOneResponse$Outbound` instead. */
  export type Outbound = CrmOpportunitiesOneResponse$Outbound;
}

export function crmOpportunitiesOneResponseToJSON(
  crmOpportunitiesOneResponse: CrmOpportunitiesOneResponse,
): string {
  return JSON.stringify(
    CrmOpportunitiesOneResponse$outboundSchema.parse(
      crmOpportunitiesOneResponse,
    ),
  );
}

export function crmOpportunitiesOneResponseFromJSON(
  jsonString: string,
): SafeParseResult<CrmOpportunitiesOneResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CrmOpportunitiesOneResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CrmOpportunitiesOneResponse' from JSON`,
  );
}

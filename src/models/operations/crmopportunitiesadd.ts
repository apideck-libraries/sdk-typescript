/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type CrmOpportunitiesAddGlobals = {
  /**
   * ID of the consumer which you want to get or push data from
   */
  consumerId?: string | undefined;
  /**
   * The ID of your Unify application
   */
  appId?: string | undefined;
};

export type CrmOpportunitiesAddRequest = {
  /**
   * Include raw response. Mostly used for debugging purposes
   */
  raw?: boolean | undefined;
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
  opportunity: components.OpportunityInput;
};

export type CrmOpportunitiesAddResponse = {
  httpMeta: components.HTTPMetadata;
  /**
   * Opportunity created
   */
  createOpportunityResponse?: components.CreateOpportunityResponse | undefined;
  /**
   * Unexpected error
   */
  unexpectedErrorResponse?: components.UnexpectedErrorResponse | undefined;
};

/** @internal */
export const CrmOpportunitiesAddGlobals$inboundSchema: z.ZodType<
  CrmOpportunitiesAddGlobals,
  z.ZodTypeDef,
  unknown
> = z.object({
  consumerId: z.string().optional(),
  appId: z.string().optional(),
});

/** @internal */
export type CrmOpportunitiesAddGlobals$Outbound = {
  consumerId?: string | undefined;
  appId?: string | undefined;
};

/** @internal */
export const CrmOpportunitiesAddGlobals$outboundSchema: z.ZodType<
  CrmOpportunitiesAddGlobals$Outbound,
  z.ZodTypeDef,
  CrmOpportunitiesAddGlobals
> = z.object({
  consumerId: z.string().optional(),
  appId: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CrmOpportunitiesAddGlobals$ {
  /** @deprecated use `CrmOpportunitiesAddGlobals$inboundSchema` instead. */
  export const inboundSchema = CrmOpportunitiesAddGlobals$inboundSchema;
  /** @deprecated use `CrmOpportunitiesAddGlobals$outboundSchema` instead. */
  export const outboundSchema = CrmOpportunitiesAddGlobals$outboundSchema;
  /** @deprecated use `CrmOpportunitiesAddGlobals$Outbound` instead. */
  export type Outbound = CrmOpportunitiesAddGlobals$Outbound;
}

export function crmOpportunitiesAddGlobalsToJSON(
  crmOpportunitiesAddGlobals: CrmOpportunitiesAddGlobals,
): string {
  return JSON.stringify(
    CrmOpportunitiesAddGlobals$outboundSchema.parse(crmOpportunitiesAddGlobals),
  );
}

export function crmOpportunitiesAddGlobalsFromJSON(
  jsonString: string,
): SafeParseResult<CrmOpportunitiesAddGlobals, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CrmOpportunitiesAddGlobals$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CrmOpportunitiesAddGlobals' from JSON`,
  );
}

/** @internal */
export const CrmOpportunitiesAddRequest$inboundSchema: z.ZodType<
  CrmOpportunitiesAddRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  raw: z.boolean().default(false),
  consumerId: z.string().optional(),
  appId: z.string().optional(),
  serviceId: z.string().optional(),
  Opportunity: components.OpportunityInput$inboundSchema,
}).transform((v) => {
  return remap$(v, {
    "Opportunity": "opportunity",
  });
});

/** @internal */
export type CrmOpportunitiesAddRequest$Outbound = {
  raw: boolean;
  consumerId?: string | undefined;
  appId?: string | undefined;
  serviceId?: string | undefined;
  Opportunity: components.OpportunityInput$Outbound;
};

/** @internal */
export const CrmOpportunitiesAddRequest$outboundSchema: z.ZodType<
  CrmOpportunitiesAddRequest$Outbound,
  z.ZodTypeDef,
  CrmOpportunitiesAddRequest
> = z.object({
  raw: z.boolean().default(false),
  consumerId: z.string().optional(),
  appId: z.string().optional(),
  serviceId: z.string().optional(),
  opportunity: components.OpportunityInput$outboundSchema,
}).transform((v) => {
  return remap$(v, {
    opportunity: "Opportunity",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CrmOpportunitiesAddRequest$ {
  /** @deprecated use `CrmOpportunitiesAddRequest$inboundSchema` instead. */
  export const inboundSchema = CrmOpportunitiesAddRequest$inboundSchema;
  /** @deprecated use `CrmOpportunitiesAddRequest$outboundSchema` instead. */
  export const outboundSchema = CrmOpportunitiesAddRequest$outboundSchema;
  /** @deprecated use `CrmOpportunitiesAddRequest$Outbound` instead. */
  export type Outbound = CrmOpportunitiesAddRequest$Outbound;
}

export function crmOpportunitiesAddRequestToJSON(
  crmOpportunitiesAddRequest: CrmOpportunitiesAddRequest,
): string {
  return JSON.stringify(
    CrmOpportunitiesAddRequest$outboundSchema.parse(crmOpportunitiesAddRequest),
  );
}

export function crmOpportunitiesAddRequestFromJSON(
  jsonString: string,
): SafeParseResult<CrmOpportunitiesAddRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CrmOpportunitiesAddRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CrmOpportunitiesAddRequest' from JSON`,
  );
}

/** @internal */
export const CrmOpportunitiesAddResponse$inboundSchema: z.ZodType<
  CrmOpportunitiesAddResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  HttpMeta: components.HTTPMetadata$inboundSchema,
  CreateOpportunityResponse: components.CreateOpportunityResponse$inboundSchema
    .optional(),
  UnexpectedErrorResponse: components.UnexpectedErrorResponse$inboundSchema
    .optional(),
}).transform((v) => {
  return remap$(v, {
    "HttpMeta": "httpMeta",
    "CreateOpportunityResponse": "createOpportunityResponse",
    "UnexpectedErrorResponse": "unexpectedErrorResponse",
  });
});

/** @internal */
export type CrmOpportunitiesAddResponse$Outbound = {
  HttpMeta: components.HTTPMetadata$Outbound;
  CreateOpportunityResponse?:
    | components.CreateOpportunityResponse$Outbound
    | undefined;
  UnexpectedErrorResponse?:
    | components.UnexpectedErrorResponse$Outbound
    | undefined;
};

/** @internal */
export const CrmOpportunitiesAddResponse$outboundSchema: z.ZodType<
  CrmOpportunitiesAddResponse$Outbound,
  z.ZodTypeDef,
  CrmOpportunitiesAddResponse
> = z.object({
  httpMeta: components.HTTPMetadata$outboundSchema,
  createOpportunityResponse: components.CreateOpportunityResponse$outboundSchema
    .optional(),
  unexpectedErrorResponse: components.UnexpectedErrorResponse$outboundSchema
    .optional(),
}).transform((v) => {
  return remap$(v, {
    httpMeta: "HttpMeta",
    createOpportunityResponse: "CreateOpportunityResponse",
    unexpectedErrorResponse: "UnexpectedErrorResponse",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CrmOpportunitiesAddResponse$ {
  /** @deprecated use `CrmOpportunitiesAddResponse$inboundSchema` instead. */
  export const inboundSchema = CrmOpportunitiesAddResponse$inboundSchema;
  /** @deprecated use `CrmOpportunitiesAddResponse$outboundSchema` instead. */
  export const outboundSchema = CrmOpportunitiesAddResponse$outboundSchema;
  /** @deprecated use `CrmOpportunitiesAddResponse$Outbound` instead. */
  export type Outbound = CrmOpportunitiesAddResponse$Outbound;
}

export function crmOpportunitiesAddResponseToJSON(
  crmOpportunitiesAddResponse: CrmOpportunitiesAddResponse,
): string {
  return JSON.stringify(
    CrmOpportunitiesAddResponse$outboundSchema.parse(
      crmOpportunitiesAddResponse,
    ),
  );
}

export function crmOpportunitiesAddResponseFromJSON(
  jsonString: string,
): SafeParseResult<CrmOpportunitiesAddResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CrmOpportunitiesAddResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CrmOpportunitiesAddResponse' from JSON`,
  );
}

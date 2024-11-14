/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";

export type CrmOpportunitiesUpdateGlobals = {
  /**
   * ID of the consumer which you want to get or push data from
   */
  customerId?: string | undefined;
  /**
   * The ID of your Unify application
   */
  appId?: string | undefined;
};

export type CrmOpportunitiesUpdateRequest = {
  /**
   * ID of the record you are acting upon.
   */
  id: string;
  /**
   * Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API.
   */
  serviceId?: string | undefined;
  /**
   * Include raw response. Mostly used for debugging purposes
   */
  raw?: boolean | undefined;
  opportunity: components.OpportunityInput;
};

export type CrmOpportunitiesUpdateResponse = {
  httpMeta: components.HTTPMetadata;
  /**
   * Opportunity updated
   */
  updateOpportunityResponse?: components.UpdateOpportunityResponse | undefined;
  /**
   * Unexpected error
   */
  unexpectedErrorResponse?: components.UnexpectedErrorResponse | undefined;
};

/** @internal */
export const CrmOpportunitiesUpdateGlobals$inboundSchema: z.ZodType<
  CrmOpportunitiesUpdateGlobals,
  z.ZodTypeDef,
  unknown
> = z.object({
  customerId: z.string().optional(),
  appId: z.string().optional(),
});

/** @internal */
export type CrmOpportunitiesUpdateGlobals$Outbound = {
  customerId?: string | undefined;
  appId?: string | undefined;
};

/** @internal */
export const CrmOpportunitiesUpdateGlobals$outboundSchema: z.ZodType<
  CrmOpportunitiesUpdateGlobals$Outbound,
  z.ZodTypeDef,
  CrmOpportunitiesUpdateGlobals
> = z.object({
  customerId: z.string().optional(),
  appId: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CrmOpportunitiesUpdateGlobals$ {
  /** @deprecated use `CrmOpportunitiesUpdateGlobals$inboundSchema` instead. */
  export const inboundSchema = CrmOpportunitiesUpdateGlobals$inboundSchema;
  /** @deprecated use `CrmOpportunitiesUpdateGlobals$outboundSchema` instead. */
  export const outboundSchema = CrmOpportunitiesUpdateGlobals$outboundSchema;
  /** @deprecated use `CrmOpportunitiesUpdateGlobals$Outbound` instead. */
  export type Outbound = CrmOpportunitiesUpdateGlobals$Outbound;
}

/** @internal */
export const CrmOpportunitiesUpdateRequest$inboundSchema: z.ZodType<
  CrmOpportunitiesUpdateRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
  serviceId: z.string().optional(),
  raw: z.boolean().default(false),
  Opportunity: components.OpportunityInput$inboundSchema,
}).transform((v) => {
  return remap$(v, {
    "Opportunity": "opportunity",
  });
});

/** @internal */
export type CrmOpportunitiesUpdateRequest$Outbound = {
  id: string;
  serviceId?: string | undefined;
  raw: boolean;
  Opportunity: components.OpportunityInput$Outbound;
};

/** @internal */
export const CrmOpportunitiesUpdateRequest$outboundSchema: z.ZodType<
  CrmOpportunitiesUpdateRequest$Outbound,
  z.ZodTypeDef,
  CrmOpportunitiesUpdateRequest
> = z.object({
  id: z.string(),
  serviceId: z.string().optional(),
  raw: z.boolean().default(false),
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
export namespace CrmOpportunitiesUpdateRequest$ {
  /** @deprecated use `CrmOpportunitiesUpdateRequest$inboundSchema` instead. */
  export const inboundSchema = CrmOpportunitiesUpdateRequest$inboundSchema;
  /** @deprecated use `CrmOpportunitiesUpdateRequest$outboundSchema` instead. */
  export const outboundSchema = CrmOpportunitiesUpdateRequest$outboundSchema;
  /** @deprecated use `CrmOpportunitiesUpdateRequest$Outbound` instead. */
  export type Outbound = CrmOpportunitiesUpdateRequest$Outbound;
}

/** @internal */
export const CrmOpportunitiesUpdateResponse$inboundSchema: z.ZodType<
  CrmOpportunitiesUpdateResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  HttpMeta: components.HTTPMetadata$inboundSchema,
  UpdateOpportunityResponse: components.UpdateOpportunityResponse$inboundSchema
    .optional(),
  UnexpectedErrorResponse: components.UnexpectedErrorResponse$inboundSchema
    .optional(),
}).transform((v) => {
  return remap$(v, {
    "HttpMeta": "httpMeta",
    "UpdateOpportunityResponse": "updateOpportunityResponse",
    "UnexpectedErrorResponse": "unexpectedErrorResponse",
  });
});

/** @internal */
export type CrmOpportunitiesUpdateResponse$Outbound = {
  HttpMeta: components.HTTPMetadata$Outbound;
  UpdateOpportunityResponse?:
    | components.UpdateOpportunityResponse$Outbound
    | undefined;
  UnexpectedErrorResponse?:
    | components.UnexpectedErrorResponse$Outbound
    | undefined;
};

/** @internal */
export const CrmOpportunitiesUpdateResponse$outboundSchema: z.ZodType<
  CrmOpportunitiesUpdateResponse$Outbound,
  z.ZodTypeDef,
  CrmOpportunitiesUpdateResponse
> = z.object({
  httpMeta: components.HTTPMetadata$outboundSchema,
  updateOpportunityResponse: components.UpdateOpportunityResponse$outboundSchema
    .optional(),
  unexpectedErrorResponse: components.UnexpectedErrorResponse$outboundSchema
    .optional(),
}).transform((v) => {
  return remap$(v, {
    httpMeta: "HttpMeta",
    updateOpportunityResponse: "UpdateOpportunityResponse",
    unexpectedErrorResponse: "UnexpectedErrorResponse",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CrmOpportunitiesUpdateResponse$ {
  /** @deprecated use `CrmOpportunitiesUpdateResponse$inboundSchema` instead. */
  export const inboundSchema = CrmOpportunitiesUpdateResponse$inboundSchema;
  /** @deprecated use `CrmOpportunitiesUpdateResponse$outboundSchema` instead. */
  export const outboundSchema = CrmOpportunitiesUpdateResponse$outboundSchema;
  /** @deprecated use `CrmOpportunitiesUpdateResponse$Outbound` instead. */
  export type Outbound = CrmOpportunitiesUpdateResponse$Outbound;
}

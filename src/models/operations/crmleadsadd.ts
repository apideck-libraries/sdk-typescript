/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type CrmLeadsAddGlobals = {
  /**
   * ID of the consumer which you want to get or push data from
   */
  consumerId?: string | undefined;
  /**
   * The ID of your Unify application
   */
  appId?: string | undefined;
};

export type CrmLeadsAddRequest = {
  /**
   * Include raw response. Mostly used for debugging purposes
   */
  raw?: boolean | undefined;
  /**
   * Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API.
   */
  serviceId?: string | undefined;
  lead: components.LeadInput;
};

export type CrmLeadsAddResponse = {
  httpMeta: components.HTTPMetadata;
  /**
   * Lead created
   */
  createLeadResponse?: components.CreateLeadResponse | undefined;
  /**
   * Unexpected error
   */
  unexpectedErrorResponse?: components.UnexpectedErrorResponse | undefined;
};

/** @internal */
export const CrmLeadsAddGlobals$inboundSchema: z.ZodType<
  CrmLeadsAddGlobals,
  z.ZodTypeDef,
  unknown
> = z.object({
  consumerId: z.string().optional(),
  appId: z.string().optional(),
});

/** @internal */
export type CrmLeadsAddGlobals$Outbound = {
  consumerId?: string | undefined;
  appId?: string | undefined;
};

/** @internal */
export const CrmLeadsAddGlobals$outboundSchema: z.ZodType<
  CrmLeadsAddGlobals$Outbound,
  z.ZodTypeDef,
  CrmLeadsAddGlobals
> = z.object({
  consumerId: z.string().optional(),
  appId: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CrmLeadsAddGlobals$ {
  /** @deprecated use `CrmLeadsAddGlobals$inboundSchema` instead. */
  export const inboundSchema = CrmLeadsAddGlobals$inboundSchema;
  /** @deprecated use `CrmLeadsAddGlobals$outboundSchema` instead. */
  export const outboundSchema = CrmLeadsAddGlobals$outboundSchema;
  /** @deprecated use `CrmLeadsAddGlobals$Outbound` instead. */
  export type Outbound = CrmLeadsAddGlobals$Outbound;
}

export function crmLeadsAddGlobalsToJSON(
  crmLeadsAddGlobals: CrmLeadsAddGlobals,
): string {
  return JSON.stringify(
    CrmLeadsAddGlobals$outboundSchema.parse(crmLeadsAddGlobals),
  );
}

export function crmLeadsAddGlobalsFromJSON(
  jsonString: string,
): SafeParseResult<CrmLeadsAddGlobals, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CrmLeadsAddGlobals$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CrmLeadsAddGlobals' from JSON`,
  );
}

/** @internal */
export const CrmLeadsAddRequest$inboundSchema: z.ZodType<
  CrmLeadsAddRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  raw: z.boolean().default(false),
  serviceId: z.string().optional(),
  Lead: components.LeadInput$inboundSchema,
}).transform((v) => {
  return remap$(v, {
    "Lead": "lead",
  });
});

/** @internal */
export type CrmLeadsAddRequest$Outbound = {
  raw: boolean;
  serviceId?: string | undefined;
  Lead: components.LeadInput$Outbound;
};

/** @internal */
export const CrmLeadsAddRequest$outboundSchema: z.ZodType<
  CrmLeadsAddRequest$Outbound,
  z.ZodTypeDef,
  CrmLeadsAddRequest
> = z.object({
  raw: z.boolean().default(false),
  serviceId: z.string().optional(),
  lead: components.LeadInput$outboundSchema,
}).transform((v) => {
  return remap$(v, {
    lead: "Lead",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CrmLeadsAddRequest$ {
  /** @deprecated use `CrmLeadsAddRequest$inboundSchema` instead. */
  export const inboundSchema = CrmLeadsAddRequest$inboundSchema;
  /** @deprecated use `CrmLeadsAddRequest$outboundSchema` instead. */
  export const outboundSchema = CrmLeadsAddRequest$outboundSchema;
  /** @deprecated use `CrmLeadsAddRequest$Outbound` instead. */
  export type Outbound = CrmLeadsAddRequest$Outbound;
}

export function crmLeadsAddRequestToJSON(
  crmLeadsAddRequest: CrmLeadsAddRequest,
): string {
  return JSON.stringify(
    CrmLeadsAddRequest$outboundSchema.parse(crmLeadsAddRequest),
  );
}

export function crmLeadsAddRequestFromJSON(
  jsonString: string,
): SafeParseResult<CrmLeadsAddRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CrmLeadsAddRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CrmLeadsAddRequest' from JSON`,
  );
}

/** @internal */
export const CrmLeadsAddResponse$inboundSchema: z.ZodType<
  CrmLeadsAddResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  HttpMeta: components.HTTPMetadata$inboundSchema,
  CreateLeadResponse: components.CreateLeadResponse$inboundSchema.optional(),
  UnexpectedErrorResponse: components.UnexpectedErrorResponse$inboundSchema
    .optional(),
}).transform((v) => {
  return remap$(v, {
    "HttpMeta": "httpMeta",
    "CreateLeadResponse": "createLeadResponse",
    "UnexpectedErrorResponse": "unexpectedErrorResponse",
  });
});

/** @internal */
export type CrmLeadsAddResponse$Outbound = {
  HttpMeta: components.HTTPMetadata$Outbound;
  CreateLeadResponse?: components.CreateLeadResponse$Outbound | undefined;
  UnexpectedErrorResponse?:
    | components.UnexpectedErrorResponse$Outbound
    | undefined;
};

/** @internal */
export const CrmLeadsAddResponse$outboundSchema: z.ZodType<
  CrmLeadsAddResponse$Outbound,
  z.ZodTypeDef,
  CrmLeadsAddResponse
> = z.object({
  httpMeta: components.HTTPMetadata$outboundSchema,
  createLeadResponse: components.CreateLeadResponse$outboundSchema.optional(),
  unexpectedErrorResponse: components.UnexpectedErrorResponse$outboundSchema
    .optional(),
}).transform((v) => {
  return remap$(v, {
    httpMeta: "HttpMeta",
    createLeadResponse: "CreateLeadResponse",
    unexpectedErrorResponse: "UnexpectedErrorResponse",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CrmLeadsAddResponse$ {
  /** @deprecated use `CrmLeadsAddResponse$inboundSchema` instead. */
  export const inboundSchema = CrmLeadsAddResponse$inboundSchema;
  /** @deprecated use `CrmLeadsAddResponse$outboundSchema` instead. */
  export const outboundSchema = CrmLeadsAddResponse$outboundSchema;
  /** @deprecated use `CrmLeadsAddResponse$Outbound` instead. */
  export type Outbound = CrmLeadsAddResponse$Outbound;
}

export function crmLeadsAddResponseToJSON(
  crmLeadsAddResponse: CrmLeadsAddResponse,
): string {
  return JSON.stringify(
    CrmLeadsAddResponse$outboundSchema.parse(crmLeadsAddResponse),
  );
}

export function crmLeadsAddResponseFromJSON(
  jsonString: string,
): SafeParseResult<CrmLeadsAddResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CrmLeadsAddResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CrmLeadsAddResponse' from JSON`,
  );
}

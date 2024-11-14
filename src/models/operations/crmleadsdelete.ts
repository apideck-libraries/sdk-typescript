/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";

export type CrmLeadsDeleteGlobals = {
  /**
   * ID of the consumer which you want to get or push data from
   */
  customerId?: string | undefined;
  /**
   * The ID of your Unify application
   */
  appId?: string | undefined;
};

export type CrmLeadsDeleteRequest = {
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
};

export type CrmLeadsDeleteResponse = {
  httpMeta: components.HTTPMetadata;
  /**
   * Lead deleted
   */
  deleteLeadResponse?: components.DeleteLeadResponse | undefined;
  /**
   * Unexpected error
   */
  unexpectedErrorResponse?: components.UnexpectedErrorResponse | undefined;
};

/** @internal */
export const CrmLeadsDeleteGlobals$inboundSchema: z.ZodType<
  CrmLeadsDeleteGlobals,
  z.ZodTypeDef,
  unknown
> = z.object({
  customerId: z.string().optional(),
  appId: z.string().optional(),
});

/** @internal */
export type CrmLeadsDeleteGlobals$Outbound = {
  customerId?: string | undefined;
  appId?: string | undefined;
};

/** @internal */
export const CrmLeadsDeleteGlobals$outboundSchema: z.ZodType<
  CrmLeadsDeleteGlobals$Outbound,
  z.ZodTypeDef,
  CrmLeadsDeleteGlobals
> = z.object({
  customerId: z.string().optional(),
  appId: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CrmLeadsDeleteGlobals$ {
  /** @deprecated use `CrmLeadsDeleteGlobals$inboundSchema` instead. */
  export const inboundSchema = CrmLeadsDeleteGlobals$inboundSchema;
  /** @deprecated use `CrmLeadsDeleteGlobals$outboundSchema` instead. */
  export const outboundSchema = CrmLeadsDeleteGlobals$outboundSchema;
  /** @deprecated use `CrmLeadsDeleteGlobals$Outbound` instead. */
  export type Outbound = CrmLeadsDeleteGlobals$Outbound;
}

/** @internal */
export const CrmLeadsDeleteRequest$inboundSchema: z.ZodType<
  CrmLeadsDeleteRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
  serviceId: z.string().optional(),
  raw: z.boolean().default(false),
});

/** @internal */
export type CrmLeadsDeleteRequest$Outbound = {
  id: string;
  serviceId?: string | undefined;
  raw: boolean;
};

/** @internal */
export const CrmLeadsDeleteRequest$outboundSchema: z.ZodType<
  CrmLeadsDeleteRequest$Outbound,
  z.ZodTypeDef,
  CrmLeadsDeleteRequest
> = z.object({
  id: z.string(),
  serviceId: z.string().optional(),
  raw: z.boolean().default(false),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CrmLeadsDeleteRequest$ {
  /** @deprecated use `CrmLeadsDeleteRequest$inboundSchema` instead. */
  export const inboundSchema = CrmLeadsDeleteRequest$inboundSchema;
  /** @deprecated use `CrmLeadsDeleteRequest$outboundSchema` instead. */
  export const outboundSchema = CrmLeadsDeleteRequest$outboundSchema;
  /** @deprecated use `CrmLeadsDeleteRequest$Outbound` instead. */
  export type Outbound = CrmLeadsDeleteRequest$Outbound;
}

/** @internal */
export const CrmLeadsDeleteResponse$inboundSchema: z.ZodType<
  CrmLeadsDeleteResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  HttpMeta: components.HTTPMetadata$inboundSchema,
  DeleteLeadResponse: components.DeleteLeadResponse$inboundSchema.optional(),
  UnexpectedErrorResponse: components.UnexpectedErrorResponse$inboundSchema
    .optional(),
}).transform((v) => {
  return remap$(v, {
    "HttpMeta": "httpMeta",
    "DeleteLeadResponse": "deleteLeadResponse",
    "UnexpectedErrorResponse": "unexpectedErrorResponse",
  });
});

/** @internal */
export type CrmLeadsDeleteResponse$Outbound = {
  HttpMeta: components.HTTPMetadata$Outbound;
  DeleteLeadResponse?: components.DeleteLeadResponse$Outbound | undefined;
  UnexpectedErrorResponse?:
    | components.UnexpectedErrorResponse$Outbound
    | undefined;
};

/** @internal */
export const CrmLeadsDeleteResponse$outboundSchema: z.ZodType<
  CrmLeadsDeleteResponse$Outbound,
  z.ZodTypeDef,
  CrmLeadsDeleteResponse
> = z.object({
  httpMeta: components.HTTPMetadata$outboundSchema,
  deleteLeadResponse: components.DeleteLeadResponse$outboundSchema.optional(),
  unexpectedErrorResponse: components.UnexpectedErrorResponse$outboundSchema
    .optional(),
}).transform((v) => {
  return remap$(v, {
    httpMeta: "HttpMeta",
    deleteLeadResponse: "DeleteLeadResponse",
    unexpectedErrorResponse: "UnexpectedErrorResponse",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CrmLeadsDeleteResponse$ {
  /** @deprecated use `CrmLeadsDeleteResponse$inboundSchema` instead. */
  export const inboundSchema = CrmLeadsDeleteResponse$inboundSchema;
  /** @deprecated use `CrmLeadsDeleteResponse$outboundSchema` instead. */
  export const outboundSchema = CrmLeadsDeleteResponse$outboundSchema;
  /** @deprecated use `CrmLeadsDeleteResponse$Outbound` instead. */
  export type Outbound = CrmLeadsDeleteResponse$Outbound;
}

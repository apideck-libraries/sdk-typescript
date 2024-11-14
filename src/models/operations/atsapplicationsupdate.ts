/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";

export type AtsApplicationsUpdateGlobals = {
  /**
   * ID of the consumer which you want to get or push data from
   */
  customerId?: string | undefined;
  /**
   * The ID of your Unify application
   */
  appId?: string | undefined;
};

export type AtsApplicationsUpdateRequest = {
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
  application: components.ApplicationInput;
};

export type AtsApplicationsUpdateResponse = {
  httpMeta: components.HTTPMetadata;
  /**
   * Applications
   */
  updateApplicationResponse?: components.UpdateApplicationResponse | undefined;
  /**
   * Unexpected error
   */
  unexpectedErrorResponse?: components.UnexpectedErrorResponse | undefined;
};

/** @internal */
export const AtsApplicationsUpdateGlobals$inboundSchema: z.ZodType<
  AtsApplicationsUpdateGlobals,
  z.ZodTypeDef,
  unknown
> = z.object({
  customerId: z.string().optional(),
  appId: z.string().optional(),
});

/** @internal */
export type AtsApplicationsUpdateGlobals$Outbound = {
  customerId?: string | undefined;
  appId?: string | undefined;
};

/** @internal */
export const AtsApplicationsUpdateGlobals$outboundSchema: z.ZodType<
  AtsApplicationsUpdateGlobals$Outbound,
  z.ZodTypeDef,
  AtsApplicationsUpdateGlobals
> = z.object({
  customerId: z.string().optional(),
  appId: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AtsApplicationsUpdateGlobals$ {
  /** @deprecated use `AtsApplicationsUpdateGlobals$inboundSchema` instead. */
  export const inboundSchema = AtsApplicationsUpdateGlobals$inboundSchema;
  /** @deprecated use `AtsApplicationsUpdateGlobals$outboundSchema` instead. */
  export const outboundSchema = AtsApplicationsUpdateGlobals$outboundSchema;
  /** @deprecated use `AtsApplicationsUpdateGlobals$Outbound` instead. */
  export type Outbound = AtsApplicationsUpdateGlobals$Outbound;
}

/** @internal */
export const AtsApplicationsUpdateRequest$inboundSchema: z.ZodType<
  AtsApplicationsUpdateRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
  serviceId: z.string().optional(),
  raw: z.boolean().default(false),
  Application: components.ApplicationInput$inboundSchema,
}).transform((v) => {
  return remap$(v, {
    "Application": "application",
  });
});

/** @internal */
export type AtsApplicationsUpdateRequest$Outbound = {
  id: string;
  serviceId?: string | undefined;
  raw: boolean;
  Application: components.ApplicationInput$Outbound;
};

/** @internal */
export const AtsApplicationsUpdateRequest$outboundSchema: z.ZodType<
  AtsApplicationsUpdateRequest$Outbound,
  z.ZodTypeDef,
  AtsApplicationsUpdateRequest
> = z.object({
  id: z.string(),
  serviceId: z.string().optional(),
  raw: z.boolean().default(false),
  application: components.ApplicationInput$outboundSchema,
}).transform((v) => {
  return remap$(v, {
    application: "Application",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AtsApplicationsUpdateRequest$ {
  /** @deprecated use `AtsApplicationsUpdateRequest$inboundSchema` instead. */
  export const inboundSchema = AtsApplicationsUpdateRequest$inboundSchema;
  /** @deprecated use `AtsApplicationsUpdateRequest$outboundSchema` instead. */
  export const outboundSchema = AtsApplicationsUpdateRequest$outboundSchema;
  /** @deprecated use `AtsApplicationsUpdateRequest$Outbound` instead. */
  export type Outbound = AtsApplicationsUpdateRequest$Outbound;
}

/** @internal */
export const AtsApplicationsUpdateResponse$inboundSchema: z.ZodType<
  AtsApplicationsUpdateResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  HttpMeta: components.HTTPMetadata$inboundSchema,
  UpdateApplicationResponse: components.UpdateApplicationResponse$inboundSchema
    .optional(),
  UnexpectedErrorResponse: components.UnexpectedErrorResponse$inboundSchema
    .optional(),
}).transform((v) => {
  return remap$(v, {
    "HttpMeta": "httpMeta",
    "UpdateApplicationResponse": "updateApplicationResponse",
    "UnexpectedErrorResponse": "unexpectedErrorResponse",
  });
});

/** @internal */
export type AtsApplicationsUpdateResponse$Outbound = {
  HttpMeta: components.HTTPMetadata$Outbound;
  UpdateApplicationResponse?:
    | components.UpdateApplicationResponse$Outbound
    | undefined;
  UnexpectedErrorResponse?:
    | components.UnexpectedErrorResponse$Outbound
    | undefined;
};

/** @internal */
export const AtsApplicationsUpdateResponse$outboundSchema: z.ZodType<
  AtsApplicationsUpdateResponse$Outbound,
  z.ZodTypeDef,
  AtsApplicationsUpdateResponse
> = z.object({
  httpMeta: components.HTTPMetadata$outboundSchema,
  updateApplicationResponse: components.UpdateApplicationResponse$outboundSchema
    .optional(),
  unexpectedErrorResponse: components.UnexpectedErrorResponse$outboundSchema
    .optional(),
}).transform((v) => {
  return remap$(v, {
    httpMeta: "HttpMeta",
    updateApplicationResponse: "UpdateApplicationResponse",
    unexpectedErrorResponse: "UnexpectedErrorResponse",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AtsApplicationsUpdateResponse$ {
  /** @deprecated use `AtsApplicationsUpdateResponse$inboundSchema` instead. */
  export const inboundSchema = AtsApplicationsUpdateResponse$inboundSchema;
  /** @deprecated use `AtsApplicationsUpdateResponse$outboundSchema` instead. */
  export const outboundSchema = AtsApplicationsUpdateResponse$outboundSchema;
  /** @deprecated use `AtsApplicationsUpdateResponse$Outbound` instead. */
  export type Outbound = AtsApplicationsUpdateResponse$Outbound;
}

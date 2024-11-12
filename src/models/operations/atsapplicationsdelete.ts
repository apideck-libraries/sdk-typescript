/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import * as components from "../components/index.js";

export type AtsApplicationsDeleteGlobals = {
  /**
   * ID of the consumer which you want to get or push data from
   */
  customerId?: string | undefined;
  /**
   * The ID of your Unify application
   */
  appId?: string | undefined;
};

export type AtsApplicationsDeleteRequest = {
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

export type AtsApplicationsDeleteResponse =
  | components.DeleteApplicationResponse
  | components.UnexpectedErrorResponse;

/** @internal */
export const AtsApplicationsDeleteGlobals$inboundSchema: z.ZodType<
  AtsApplicationsDeleteGlobals,
  z.ZodTypeDef,
  unknown
> = z.object({
  customerId: z.string().optional(),
  appId: z.string().optional(),
});

/** @internal */
export type AtsApplicationsDeleteGlobals$Outbound = {
  customerId?: string | undefined;
  appId?: string | undefined;
};

/** @internal */
export const AtsApplicationsDeleteGlobals$outboundSchema: z.ZodType<
  AtsApplicationsDeleteGlobals$Outbound,
  z.ZodTypeDef,
  AtsApplicationsDeleteGlobals
> = z.object({
  customerId: z.string().optional(),
  appId: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AtsApplicationsDeleteGlobals$ {
  /** @deprecated use `AtsApplicationsDeleteGlobals$inboundSchema` instead. */
  export const inboundSchema = AtsApplicationsDeleteGlobals$inboundSchema;
  /** @deprecated use `AtsApplicationsDeleteGlobals$outboundSchema` instead. */
  export const outboundSchema = AtsApplicationsDeleteGlobals$outboundSchema;
  /** @deprecated use `AtsApplicationsDeleteGlobals$Outbound` instead. */
  export type Outbound = AtsApplicationsDeleteGlobals$Outbound;
}

/** @internal */
export const AtsApplicationsDeleteRequest$inboundSchema: z.ZodType<
  AtsApplicationsDeleteRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
  serviceId: z.string().optional(),
  raw: z.boolean().default(false),
});

/** @internal */
export type AtsApplicationsDeleteRequest$Outbound = {
  id: string;
  serviceId?: string | undefined;
  raw: boolean;
};

/** @internal */
export const AtsApplicationsDeleteRequest$outboundSchema: z.ZodType<
  AtsApplicationsDeleteRequest$Outbound,
  z.ZodTypeDef,
  AtsApplicationsDeleteRequest
> = z.object({
  id: z.string(),
  serviceId: z.string().optional(),
  raw: z.boolean().default(false),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AtsApplicationsDeleteRequest$ {
  /** @deprecated use `AtsApplicationsDeleteRequest$inboundSchema` instead. */
  export const inboundSchema = AtsApplicationsDeleteRequest$inboundSchema;
  /** @deprecated use `AtsApplicationsDeleteRequest$outboundSchema` instead. */
  export const outboundSchema = AtsApplicationsDeleteRequest$outboundSchema;
  /** @deprecated use `AtsApplicationsDeleteRequest$Outbound` instead. */
  export type Outbound = AtsApplicationsDeleteRequest$Outbound;
}

/** @internal */
export const AtsApplicationsDeleteResponse$inboundSchema: z.ZodType<
  AtsApplicationsDeleteResponse,
  z.ZodTypeDef,
  unknown
> = z.union([
  components.DeleteApplicationResponse$inboundSchema,
  components.UnexpectedErrorResponse$inboundSchema,
]);

/** @internal */
export type AtsApplicationsDeleteResponse$Outbound =
  | components.DeleteApplicationResponse$Outbound
  | components.UnexpectedErrorResponse$Outbound;

/** @internal */
export const AtsApplicationsDeleteResponse$outboundSchema: z.ZodType<
  AtsApplicationsDeleteResponse$Outbound,
  z.ZodTypeDef,
  AtsApplicationsDeleteResponse
> = z.union([
  components.DeleteApplicationResponse$outboundSchema,
  components.UnexpectedErrorResponse$outboundSchema,
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AtsApplicationsDeleteResponse$ {
  /** @deprecated use `AtsApplicationsDeleteResponse$inboundSchema` instead. */
  export const inboundSchema = AtsApplicationsDeleteResponse$inboundSchema;
  /** @deprecated use `AtsApplicationsDeleteResponse$outboundSchema` instead. */
  export const outboundSchema = AtsApplicationsDeleteResponse$outboundSchema;
  /** @deprecated use `AtsApplicationsDeleteResponse$Outbound` instead. */
  export type Outbound = AtsApplicationsDeleteResponse$Outbound;
}

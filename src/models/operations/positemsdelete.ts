/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import * as components from "../components/index.js";

export type PosItemsDeleteGlobals = {
  /**
   * ID of the consumer which you want to get or push data from
   */
  customerId?: string | undefined;
  /**
   * The ID of your Unify application
   */
  appId?: string | undefined;
};

export type PosItemsDeleteRequest = {
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

export type PosItemsDeleteResponse =
  | components.DeleteItemResponse
  | components.UnexpectedErrorResponse;

/** @internal */
export const PosItemsDeleteGlobals$inboundSchema: z.ZodType<
  PosItemsDeleteGlobals,
  z.ZodTypeDef,
  unknown
> = z.object({
  customerId: z.string().optional(),
  appId: z.string().optional(),
});

/** @internal */
export type PosItemsDeleteGlobals$Outbound = {
  customerId?: string | undefined;
  appId?: string | undefined;
};

/** @internal */
export const PosItemsDeleteGlobals$outboundSchema: z.ZodType<
  PosItemsDeleteGlobals$Outbound,
  z.ZodTypeDef,
  PosItemsDeleteGlobals
> = z.object({
  customerId: z.string().optional(),
  appId: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PosItemsDeleteGlobals$ {
  /** @deprecated use `PosItemsDeleteGlobals$inboundSchema` instead. */
  export const inboundSchema = PosItemsDeleteGlobals$inboundSchema;
  /** @deprecated use `PosItemsDeleteGlobals$outboundSchema` instead. */
  export const outboundSchema = PosItemsDeleteGlobals$outboundSchema;
  /** @deprecated use `PosItemsDeleteGlobals$Outbound` instead. */
  export type Outbound = PosItemsDeleteGlobals$Outbound;
}

/** @internal */
export const PosItemsDeleteRequest$inboundSchema: z.ZodType<
  PosItemsDeleteRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
  serviceId: z.string().optional(),
  raw: z.boolean().default(false),
});

/** @internal */
export type PosItemsDeleteRequest$Outbound = {
  id: string;
  serviceId?: string | undefined;
  raw: boolean;
};

/** @internal */
export const PosItemsDeleteRequest$outboundSchema: z.ZodType<
  PosItemsDeleteRequest$Outbound,
  z.ZodTypeDef,
  PosItemsDeleteRequest
> = z.object({
  id: z.string(),
  serviceId: z.string().optional(),
  raw: z.boolean().default(false),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PosItemsDeleteRequest$ {
  /** @deprecated use `PosItemsDeleteRequest$inboundSchema` instead. */
  export const inboundSchema = PosItemsDeleteRequest$inboundSchema;
  /** @deprecated use `PosItemsDeleteRequest$outboundSchema` instead. */
  export const outboundSchema = PosItemsDeleteRequest$outboundSchema;
  /** @deprecated use `PosItemsDeleteRequest$Outbound` instead. */
  export type Outbound = PosItemsDeleteRequest$Outbound;
}

/** @internal */
export const PosItemsDeleteResponse$inboundSchema: z.ZodType<
  PosItemsDeleteResponse,
  z.ZodTypeDef,
  unknown
> = z.union([
  components.DeleteItemResponse$inboundSchema,
  components.UnexpectedErrorResponse$inboundSchema,
]);

/** @internal */
export type PosItemsDeleteResponse$Outbound =
  | components.DeleteItemResponse$Outbound
  | components.UnexpectedErrorResponse$Outbound;

/** @internal */
export const PosItemsDeleteResponse$outboundSchema: z.ZodType<
  PosItemsDeleteResponse$Outbound,
  z.ZodTypeDef,
  PosItemsDeleteResponse
> = z.union([
  components.DeleteItemResponse$outboundSchema,
  components.UnexpectedErrorResponse$outboundSchema,
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PosItemsDeleteResponse$ {
  /** @deprecated use `PosItemsDeleteResponse$inboundSchema` instead. */
  export const inboundSchema = PosItemsDeleteResponse$inboundSchema;
  /** @deprecated use `PosItemsDeleteResponse$outboundSchema` instead. */
  export const outboundSchema = PosItemsDeleteResponse$outboundSchema;
  /** @deprecated use `PosItemsDeleteResponse$Outbound` instead. */
  export type Outbound = PosItemsDeleteResponse$Outbound;
}

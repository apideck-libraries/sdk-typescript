/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";

export type VaultConnectionsOneGlobals = {
  /**
   * ID of the consumer which you want to get or push data from
   */
  customerId?: string | undefined;
  /**
   * The ID of your Unify application
   */
  appId?: string | undefined;
};

export type VaultConnectionsOneRequest = {
  /**
   * Service ID of the resource to return
   */
  serviceId: string;
  /**
   * Unified API
   */
  unifiedApi: string;
};

export type VaultConnectionsOneResponse =
  | components.GetConnectionResponse
  | components.UnexpectedErrorResponse;

/** @internal */
export const VaultConnectionsOneGlobals$inboundSchema: z.ZodType<
  VaultConnectionsOneGlobals,
  z.ZodTypeDef,
  unknown
> = z.object({
  customerId: z.string().optional(),
  appId: z.string().optional(),
});

/** @internal */
export type VaultConnectionsOneGlobals$Outbound = {
  customerId?: string | undefined;
  appId?: string | undefined;
};

/** @internal */
export const VaultConnectionsOneGlobals$outboundSchema: z.ZodType<
  VaultConnectionsOneGlobals$Outbound,
  z.ZodTypeDef,
  VaultConnectionsOneGlobals
> = z.object({
  customerId: z.string().optional(),
  appId: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace VaultConnectionsOneGlobals$ {
  /** @deprecated use `VaultConnectionsOneGlobals$inboundSchema` instead. */
  export const inboundSchema = VaultConnectionsOneGlobals$inboundSchema;
  /** @deprecated use `VaultConnectionsOneGlobals$outboundSchema` instead. */
  export const outboundSchema = VaultConnectionsOneGlobals$outboundSchema;
  /** @deprecated use `VaultConnectionsOneGlobals$Outbound` instead. */
  export type Outbound = VaultConnectionsOneGlobals$Outbound;
}

/** @internal */
export const VaultConnectionsOneRequest$inboundSchema: z.ZodType<
  VaultConnectionsOneRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  service_id: z.string(),
  unified_api: z.string(),
}).transform((v) => {
  return remap$(v, {
    "service_id": "serviceId",
    "unified_api": "unifiedApi",
  });
});

/** @internal */
export type VaultConnectionsOneRequest$Outbound = {
  service_id: string;
  unified_api: string;
};

/** @internal */
export const VaultConnectionsOneRequest$outboundSchema: z.ZodType<
  VaultConnectionsOneRequest$Outbound,
  z.ZodTypeDef,
  VaultConnectionsOneRequest
> = z.object({
  serviceId: z.string(),
  unifiedApi: z.string(),
}).transform((v) => {
  return remap$(v, {
    serviceId: "service_id",
    unifiedApi: "unified_api",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace VaultConnectionsOneRequest$ {
  /** @deprecated use `VaultConnectionsOneRequest$inboundSchema` instead. */
  export const inboundSchema = VaultConnectionsOneRequest$inboundSchema;
  /** @deprecated use `VaultConnectionsOneRequest$outboundSchema` instead. */
  export const outboundSchema = VaultConnectionsOneRequest$outboundSchema;
  /** @deprecated use `VaultConnectionsOneRequest$Outbound` instead. */
  export type Outbound = VaultConnectionsOneRequest$Outbound;
}

/** @internal */
export const VaultConnectionsOneResponse$inboundSchema: z.ZodType<
  VaultConnectionsOneResponse,
  z.ZodTypeDef,
  unknown
> = z.union([
  components.GetConnectionResponse$inboundSchema,
  components.UnexpectedErrorResponse$inboundSchema,
]);

/** @internal */
export type VaultConnectionsOneResponse$Outbound =
  | components.GetConnectionResponse$Outbound
  | components.UnexpectedErrorResponse$Outbound;

/** @internal */
export const VaultConnectionsOneResponse$outboundSchema: z.ZodType<
  VaultConnectionsOneResponse$Outbound,
  z.ZodTypeDef,
  VaultConnectionsOneResponse
> = z.union([
  components.GetConnectionResponse$outboundSchema,
  components.UnexpectedErrorResponse$outboundSchema,
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace VaultConnectionsOneResponse$ {
  /** @deprecated use `VaultConnectionsOneResponse$inboundSchema` instead. */
  export const inboundSchema = VaultConnectionsOneResponse$inboundSchema;
  /** @deprecated use `VaultConnectionsOneResponse$outboundSchema` instead. */
  export const outboundSchema = VaultConnectionsOneResponse$outboundSchema;
  /** @deprecated use `VaultConnectionsOneResponse$Outbound` instead. */
  export type Outbound = VaultConnectionsOneResponse$Outbound;
}

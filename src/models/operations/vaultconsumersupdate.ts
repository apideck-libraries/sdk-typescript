/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";

export type VaultConsumersUpdateGlobals = {
  /**
   * The ID of your Unify application
   */
  appId?: string | undefined;
};

export type VaultConsumersUpdateRequest = {
  /**
   * ID of the consumer to return
   */
  consumerId: string;
  updateConsumerRequest: components.UpdateConsumerRequest;
};

export type VaultConsumersUpdateResponse =
  | components.UpdateConsumerResponse
  | components.UnexpectedErrorResponse;

/** @internal */
export const VaultConsumersUpdateGlobals$inboundSchema: z.ZodType<
  VaultConsumersUpdateGlobals,
  z.ZodTypeDef,
  unknown
> = z.object({
  appId: z.string().optional(),
});

/** @internal */
export type VaultConsumersUpdateGlobals$Outbound = {
  appId?: string | undefined;
};

/** @internal */
export const VaultConsumersUpdateGlobals$outboundSchema: z.ZodType<
  VaultConsumersUpdateGlobals$Outbound,
  z.ZodTypeDef,
  VaultConsumersUpdateGlobals
> = z.object({
  appId: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace VaultConsumersUpdateGlobals$ {
  /** @deprecated use `VaultConsumersUpdateGlobals$inboundSchema` instead. */
  export const inboundSchema = VaultConsumersUpdateGlobals$inboundSchema;
  /** @deprecated use `VaultConsumersUpdateGlobals$outboundSchema` instead. */
  export const outboundSchema = VaultConsumersUpdateGlobals$outboundSchema;
  /** @deprecated use `VaultConsumersUpdateGlobals$Outbound` instead. */
  export type Outbound = VaultConsumersUpdateGlobals$Outbound;
}

/** @internal */
export const VaultConsumersUpdateRequest$inboundSchema: z.ZodType<
  VaultConsumersUpdateRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  consumer_id: z.string(),
  UpdateConsumerRequest: components.UpdateConsumerRequest$inboundSchema,
}).transform((v) => {
  return remap$(v, {
    "consumer_id": "consumerId",
    "UpdateConsumerRequest": "updateConsumerRequest",
  });
});

/** @internal */
export type VaultConsumersUpdateRequest$Outbound = {
  consumer_id: string;
  UpdateConsumerRequest: components.UpdateConsumerRequest$Outbound;
};

/** @internal */
export const VaultConsumersUpdateRequest$outboundSchema: z.ZodType<
  VaultConsumersUpdateRequest$Outbound,
  z.ZodTypeDef,
  VaultConsumersUpdateRequest
> = z.object({
  consumerId: z.string(),
  updateConsumerRequest: components.UpdateConsumerRequest$outboundSchema,
}).transform((v) => {
  return remap$(v, {
    consumerId: "consumer_id",
    updateConsumerRequest: "UpdateConsumerRequest",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace VaultConsumersUpdateRequest$ {
  /** @deprecated use `VaultConsumersUpdateRequest$inboundSchema` instead. */
  export const inboundSchema = VaultConsumersUpdateRequest$inboundSchema;
  /** @deprecated use `VaultConsumersUpdateRequest$outboundSchema` instead. */
  export const outboundSchema = VaultConsumersUpdateRequest$outboundSchema;
  /** @deprecated use `VaultConsumersUpdateRequest$Outbound` instead. */
  export type Outbound = VaultConsumersUpdateRequest$Outbound;
}

/** @internal */
export const VaultConsumersUpdateResponse$inboundSchema: z.ZodType<
  VaultConsumersUpdateResponse,
  z.ZodTypeDef,
  unknown
> = z.union([
  components.UpdateConsumerResponse$inboundSchema,
  components.UnexpectedErrorResponse$inboundSchema,
]);

/** @internal */
export type VaultConsumersUpdateResponse$Outbound =
  | components.UpdateConsumerResponse$Outbound
  | components.UnexpectedErrorResponse$Outbound;

/** @internal */
export const VaultConsumersUpdateResponse$outboundSchema: z.ZodType<
  VaultConsumersUpdateResponse$Outbound,
  z.ZodTypeDef,
  VaultConsumersUpdateResponse
> = z.union([
  components.UpdateConsumerResponse$outboundSchema,
  components.UnexpectedErrorResponse$outboundSchema,
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace VaultConsumersUpdateResponse$ {
  /** @deprecated use `VaultConsumersUpdateResponse$inboundSchema` instead. */
  export const inboundSchema = VaultConsumersUpdateResponse$inboundSchema;
  /** @deprecated use `VaultConsumersUpdateResponse$outboundSchema` instead. */
  export const outboundSchema = VaultConsumersUpdateResponse$outboundSchema;
  /** @deprecated use `VaultConsumersUpdateResponse$Outbound` instead. */
  export type Outbound = VaultConsumersUpdateResponse$Outbound;
}

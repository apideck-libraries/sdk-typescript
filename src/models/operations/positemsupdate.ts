/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";

export type PosItemsUpdateGlobals = {
  /**
   * ID of the consumer which you want to get or push data from
   */
  customerId?: string | undefined;
  /**
   * The ID of your Unify application
   */
  appId?: string | undefined;
};

export type PosItemsUpdateRequest = {
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
  item: components.ItemInput;
};

export type PosItemsUpdateResponse =
  | components.UpdateItemResponse
  | components.UnexpectedErrorResponse;

/** @internal */
export const PosItemsUpdateGlobals$inboundSchema: z.ZodType<
  PosItemsUpdateGlobals,
  z.ZodTypeDef,
  unknown
> = z.object({
  customerId: z.string().optional(),
  appId: z.string().optional(),
});

/** @internal */
export type PosItemsUpdateGlobals$Outbound = {
  customerId?: string | undefined;
  appId?: string | undefined;
};

/** @internal */
export const PosItemsUpdateGlobals$outboundSchema: z.ZodType<
  PosItemsUpdateGlobals$Outbound,
  z.ZodTypeDef,
  PosItemsUpdateGlobals
> = z.object({
  customerId: z.string().optional(),
  appId: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PosItemsUpdateGlobals$ {
  /** @deprecated use `PosItemsUpdateGlobals$inboundSchema` instead. */
  export const inboundSchema = PosItemsUpdateGlobals$inboundSchema;
  /** @deprecated use `PosItemsUpdateGlobals$outboundSchema` instead. */
  export const outboundSchema = PosItemsUpdateGlobals$outboundSchema;
  /** @deprecated use `PosItemsUpdateGlobals$Outbound` instead. */
  export type Outbound = PosItemsUpdateGlobals$Outbound;
}

/** @internal */
export const PosItemsUpdateRequest$inboundSchema: z.ZodType<
  PosItemsUpdateRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
  serviceId: z.string().optional(),
  raw: z.boolean().default(false),
  Item: components.ItemInput$inboundSchema,
}).transform((v) => {
  return remap$(v, {
    "Item": "item",
  });
});

/** @internal */
export type PosItemsUpdateRequest$Outbound = {
  id: string;
  serviceId?: string | undefined;
  raw: boolean;
  Item: components.ItemInput$Outbound;
};

/** @internal */
export const PosItemsUpdateRequest$outboundSchema: z.ZodType<
  PosItemsUpdateRequest$Outbound,
  z.ZodTypeDef,
  PosItemsUpdateRequest
> = z.object({
  id: z.string(),
  serviceId: z.string().optional(),
  raw: z.boolean().default(false),
  item: components.ItemInput$outboundSchema,
}).transform((v) => {
  return remap$(v, {
    item: "Item",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PosItemsUpdateRequest$ {
  /** @deprecated use `PosItemsUpdateRequest$inboundSchema` instead. */
  export const inboundSchema = PosItemsUpdateRequest$inboundSchema;
  /** @deprecated use `PosItemsUpdateRequest$outboundSchema` instead. */
  export const outboundSchema = PosItemsUpdateRequest$outboundSchema;
  /** @deprecated use `PosItemsUpdateRequest$Outbound` instead. */
  export type Outbound = PosItemsUpdateRequest$Outbound;
}

/** @internal */
export const PosItemsUpdateResponse$inboundSchema: z.ZodType<
  PosItemsUpdateResponse,
  z.ZodTypeDef,
  unknown
> = z.union([
  components.UpdateItemResponse$inboundSchema,
  components.UnexpectedErrorResponse$inboundSchema,
]);

/** @internal */
export type PosItemsUpdateResponse$Outbound =
  | components.UpdateItemResponse$Outbound
  | components.UnexpectedErrorResponse$Outbound;

/** @internal */
export const PosItemsUpdateResponse$outboundSchema: z.ZodType<
  PosItemsUpdateResponse$Outbound,
  z.ZodTypeDef,
  PosItemsUpdateResponse
> = z.union([
  components.UpdateItemResponse$outboundSchema,
  components.UnexpectedErrorResponse$outboundSchema,
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PosItemsUpdateResponse$ {
  /** @deprecated use `PosItemsUpdateResponse$inboundSchema` instead. */
  export const inboundSchema = PosItemsUpdateResponse$inboundSchema;
  /** @deprecated use `PosItemsUpdateResponse$outboundSchema` instead. */
  export const outboundSchema = PosItemsUpdateResponse$outboundSchema;
  /** @deprecated use `PosItemsUpdateResponse$Outbound` instead. */
  export type Outbound = PosItemsUpdateResponse$Outbound;
}

/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";

export type PosOrdersDeleteGlobals = {
  /**
   * ID of the consumer which you want to get or push data from
   */
  customerId?: string | undefined;
  /**
   * The ID of your Unify application
   */
  appId?: string | undefined;
};

export type PosOrdersDeleteRequest = {
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

export type PosOrdersDeleteResponse = {
  httpMeta: components.HTTPMetadata;
  /**
   * Orders
   */
  deleteOrderResponse?: components.DeleteOrderResponse | undefined;
  /**
   * Unexpected error
   */
  unexpectedErrorResponse?: components.UnexpectedErrorResponse | undefined;
};

/** @internal */
export const PosOrdersDeleteGlobals$inboundSchema: z.ZodType<
  PosOrdersDeleteGlobals,
  z.ZodTypeDef,
  unknown
> = z.object({
  customerId: z.string().optional(),
  appId: z.string().optional(),
});

/** @internal */
export type PosOrdersDeleteGlobals$Outbound = {
  customerId?: string | undefined;
  appId?: string | undefined;
};

/** @internal */
export const PosOrdersDeleteGlobals$outboundSchema: z.ZodType<
  PosOrdersDeleteGlobals$Outbound,
  z.ZodTypeDef,
  PosOrdersDeleteGlobals
> = z.object({
  customerId: z.string().optional(),
  appId: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PosOrdersDeleteGlobals$ {
  /** @deprecated use `PosOrdersDeleteGlobals$inboundSchema` instead. */
  export const inboundSchema = PosOrdersDeleteGlobals$inboundSchema;
  /** @deprecated use `PosOrdersDeleteGlobals$outboundSchema` instead. */
  export const outboundSchema = PosOrdersDeleteGlobals$outboundSchema;
  /** @deprecated use `PosOrdersDeleteGlobals$Outbound` instead. */
  export type Outbound = PosOrdersDeleteGlobals$Outbound;
}

/** @internal */
export const PosOrdersDeleteRequest$inboundSchema: z.ZodType<
  PosOrdersDeleteRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
  serviceId: z.string().optional(),
  raw: z.boolean().default(false),
});

/** @internal */
export type PosOrdersDeleteRequest$Outbound = {
  id: string;
  serviceId?: string | undefined;
  raw: boolean;
};

/** @internal */
export const PosOrdersDeleteRequest$outboundSchema: z.ZodType<
  PosOrdersDeleteRequest$Outbound,
  z.ZodTypeDef,
  PosOrdersDeleteRequest
> = z.object({
  id: z.string(),
  serviceId: z.string().optional(),
  raw: z.boolean().default(false),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PosOrdersDeleteRequest$ {
  /** @deprecated use `PosOrdersDeleteRequest$inboundSchema` instead. */
  export const inboundSchema = PosOrdersDeleteRequest$inboundSchema;
  /** @deprecated use `PosOrdersDeleteRequest$outboundSchema` instead. */
  export const outboundSchema = PosOrdersDeleteRequest$outboundSchema;
  /** @deprecated use `PosOrdersDeleteRequest$Outbound` instead. */
  export type Outbound = PosOrdersDeleteRequest$Outbound;
}

/** @internal */
export const PosOrdersDeleteResponse$inboundSchema: z.ZodType<
  PosOrdersDeleteResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  HttpMeta: components.HTTPMetadata$inboundSchema,
  DeleteOrderResponse: components.DeleteOrderResponse$inboundSchema.optional(),
  UnexpectedErrorResponse: components.UnexpectedErrorResponse$inboundSchema
    .optional(),
}).transform((v) => {
  return remap$(v, {
    "HttpMeta": "httpMeta",
    "DeleteOrderResponse": "deleteOrderResponse",
    "UnexpectedErrorResponse": "unexpectedErrorResponse",
  });
});

/** @internal */
export type PosOrdersDeleteResponse$Outbound = {
  HttpMeta: components.HTTPMetadata$Outbound;
  DeleteOrderResponse?: components.DeleteOrderResponse$Outbound | undefined;
  UnexpectedErrorResponse?:
    | components.UnexpectedErrorResponse$Outbound
    | undefined;
};

/** @internal */
export const PosOrdersDeleteResponse$outboundSchema: z.ZodType<
  PosOrdersDeleteResponse$Outbound,
  z.ZodTypeDef,
  PosOrdersDeleteResponse
> = z.object({
  httpMeta: components.HTTPMetadata$outboundSchema,
  deleteOrderResponse: components.DeleteOrderResponse$outboundSchema.optional(),
  unexpectedErrorResponse: components.UnexpectedErrorResponse$outboundSchema
    .optional(),
}).transform((v) => {
  return remap$(v, {
    httpMeta: "HttpMeta",
    deleteOrderResponse: "DeleteOrderResponse",
    unexpectedErrorResponse: "UnexpectedErrorResponse",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PosOrdersDeleteResponse$ {
  /** @deprecated use `PosOrdersDeleteResponse$inboundSchema` instead. */
  export const inboundSchema = PosOrdersDeleteResponse$inboundSchema;
  /** @deprecated use `PosOrdersDeleteResponse$outboundSchema` instead. */
  export const outboundSchema = PosOrdersDeleteResponse$outboundSchema;
  /** @deprecated use `PosOrdersDeleteResponse$Outbound` instead. */
  export type Outbound = PosOrdersDeleteResponse$Outbound;
}

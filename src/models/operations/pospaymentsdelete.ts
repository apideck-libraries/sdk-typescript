/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import * as components from "../components/index.js";

export type PosPaymentsDeleteGlobals = {
  /**
   * ID of the consumer which you want to get or push data from
   */
  customerId?: string | undefined;
  /**
   * The ID of your Unify application
   */
  appId?: string | undefined;
};

export type PosPaymentsDeleteRequest = {
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

export type PosPaymentsDeleteResponse =
  | components.DeletePosPaymentResponse
  | components.UnexpectedErrorResponse;

/** @internal */
export const PosPaymentsDeleteGlobals$inboundSchema: z.ZodType<
  PosPaymentsDeleteGlobals,
  z.ZodTypeDef,
  unknown
> = z.object({
  customerId: z.string().optional(),
  appId: z.string().optional(),
});

/** @internal */
export type PosPaymentsDeleteGlobals$Outbound = {
  customerId?: string | undefined;
  appId?: string | undefined;
};

/** @internal */
export const PosPaymentsDeleteGlobals$outboundSchema: z.ZodType<
  PosPaymentsDeleteGlobals$Outbound,
  z.ZodTypeDef,
  PosPaymentsDeleteGlobals
> = z.object({
  customerId: z.string().optional(),
  appId: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PosPaymentsDeleteGlobals$ {
  /** @deprecated use `PosPaymentsDeleteGlobals$inboundSchema` instead. */
  export const inboundSchema = PosPaymentsDeleteGlobals$inboundSchema;
  /** @deprecated use `PosPaymentsDeleteGlobals$outboundSchema` instead. */
  export const outboundSchema = PosPaymentsDeleteGlobals$outboundSchema;
  /** @deprecated use `PosPaymentsDeleteGlobals$Outbound` instead. */
  export type Outbound = PosPaymentsDeleteGlobals$Outbound;
}

/** @internal */
export const PosPaymentsDeleteRequest$inboundSchema: z.ZodType<
  PosPaymentsDeleteRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
  serviceId: z.string().optional(),
  raw: z.boolean().default(false),
});

/** @internal */
export type PosPaymentsDeleteRequest$Outbound = {
  id: string;
  serviceId?: string | undefined;
  raw: boolean;
};

/** @internal */
export const PosPaymentsDeleteRequest$outboundSchema: z.ZodType<
  PosPaymentsDeleteRequest$Outbound,
  z.ZodTypeDef,
  PosPaymentsDeleteRequest
> = z.object({
  id: z.string(),
  serviceId: z.string().optional(),
  raw: z.boolean().default(false),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PosPaymentsDeleteRequest$ {
  /** @deprecated use `PosPaymentsDeleteRequest$inboundSchema` instead. */
  export const inboundSchema = PosPaymentsDeleteRequest$inboundSchema;
  /** @deprecated use `PosPaymentsDeleteRequest$outboundSchema` instead. */
  export const outboundSchema = PosPaymentsDeleteRequest$outboundSchema;
  /** @deprecated use `PosPaymentsDeleteRequest$Outbound` instead. */
  export type Outbound = PosPaymentsDeleteRequest$Outbound;
}

/** @internal */
export const PosPaymentsDeleteResponse$inboundSchema: z.ZodType<
  PosPaymentsDeleteResponse,
  z.ZodTypeDef,
  unknown
> = z.union([
  components.DeletePosPaymentResponse$inboundSchema,
  components.UnexpectedErrorResponse$inboundSchema,
]);

/** @internal */
export type PosPaymentsDeleteResponse$Outbound =
  | components.DeletePosPaymentResponse$Outbound
  | components.UnexpectedErrorResponse$Outbound;

/** @internal */
export const PosPaymentsDeleteResponse$outboundSchema: z.ZodType<
  PosPaymentsDeleteResponse$Outbound,
  z.ZodTypeDef,
  PosPaymentsDeleteResponse
> = z.union([
  components.DeletePosPaymentResponse$outboundSchema,
  components.UnexpectedErrorResponse$outboundSchema,
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PosPaymentsDeleteResponse$ {
  /** @deprecated use `PosPaymentsDeleteResponse$inboundSchema` instead. */
  export const inboundSchema = PosPaymentsDeleteResponse$inboundSchema;
  /** @deprecated use `PosPaymentsDeleteResponse$outboundSchema` instead. */
  export const outboundSchema = PosPaymentsDeleteResponse$outboundSchema;
  /** @deprecated use `PosPaymentsDeleteResponse$Outbound` instead. */
  export type Outbound = PosPaymentsDeleteResponse$Outbound;
}

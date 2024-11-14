/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";

export type PosPaymentsAddGlobals = {
  /**
   * ID of the consumer which you want to get or push data from
   */
  customerId?: string | undefined;
  /**
   * The ID of your Unify application
   */
  appId?: string | undefined;
};

export type PosPaymentsAddRequest = {
  /**
   * Include raw response. Mostly used for debugging purposes
   */
  raw?: boolean | undefined;
  /**
   * Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API.
   */
  serviceId?: string | undefined;
  posPayment: components.PosPaymentInput;
};

export type PosPaymentsAddResponse = {
  httpMeta: components.HTTPMetadata;
  /**
   * PosPayments
   */
  createPosPaymentResponse?: components.CreatePosPaymentResponse | undefined;
  /**
   * Unexpected error
   */
  unexpectedErrorResponse?: components.UnexpectedErrorResponse | undefined;
};

/** @internal */
export const PosPaymentsAddGlobals$inboundSchema: z.ZodType<
  PosPaymentsAddGlobals,
  z.ZodTypeDef,
  unknown
> = z.object({
  customerId: z.string().optional(),
  appId: z.string().optional(),
});

/** @internal */
export type PosPaymentsAddGlobals$Outbound = {
  customerId?: string | undefined;
  appId?: string | undefined;
};

/** @internal */
export const PosPaymentsAddGlobals$outboundSchema: z.ZodType<
  PosPaymentsAddGlobals$Outbound,
  z.ZodTypeDef,
  PosPaymentsAddGlobals
> = z.object({
  customerId: z.string().optional(),
  appId: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PosPaymentsAddGlobals$ {
  /** @deprecated use `PosPaymentsAddGlobals$inboundSchema` instead. */
  export const inboundSchema = PosPaymentsAddGlobals$inboundSchema;
  /** @deprecated use `PosPaymentsAddGlobals$outboundSchema` instead. */
  export const outboundSchema = PosPaymentsAddGlobals$outboundSchema;
  /** @deprecated use `PosPaymentsAddGlobals$Outbound` instead. */
  export type Outbound = PosPaymentsAddGlobals$Outbound;
}

/** @internal */
export const PosPaymentsAddRequest$inboundSchema: z.ZodType<
  PosPaymentsAddRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  raw: z.boolean().default(false),
  serviceId: z.string().optional(),
  PosPayment: components.PosPaymentInput$inboundSchema,
}).transform((v) => {
  return remap$(v, {
    "PosPayment": "posPayment",
  });
});

/** @internal */
export type PosPaymentsAddRequest$Outbound = {
  raw: boolean;
  serviceId?: string | undefined;
  PosPayment: components.PosPaymentInput$Outbound;
};

/** @internal */
export const PosPaymentsAddRequest$outboundSchema: z.ZodType<
  PosPaymentsAddRequest$Outbound,
  z.ZodTypeDef,
  PosPaymentsAddRequest
> = z.object({
  raw: z.boolean().default(false),
  serviceId: z.string().optional(),
  posPayment: components.PosPaymentInput$outboundSchema,
}).transform((v) => {
  return remap$(v, {
    posPayment: "PosPayment",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PosPaymentsAddRequest$ {
  /** @deprecated use `PosPaymentsAddRequest$inboundSchema` instead. */
  export const inboundSchema = PosPaymentsAddRequest$inboundSchema;
  /** @deprecated use `PosPaymentsAddRequest$outboundSchema` instead. */
  export const outboundSchema = PosPaymentsAddRequest$outboundSchema;
  /** @deprecated use `PosPaymentsAddRequest$Outbound` instead. */
  export type Outbound = PosPaymentsAddRequest$Outbound;
}

/** @internal */
export const PosPaymentsAddResponse$inboundSchema: z.ZodType<
  PosPaymentsAddResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  HttpMeta: components.HTTPMetadata$inboundSchema,
  CreatePosPaymentResponse: components.CreatePosPaymentResponse$inboundSchema
    .optional(),
  UnexpectedErrorResponse: components.UnexpectedErrorResponse$inboundSchema
    .optional(),
}).transform((v) => {
  return remap$(v, {
    "HttpMeta": "httpMeta",
    "CreatePosPaymentResponse": "createPosPaymentResponse",
    "UnexpectedErrorResponse": "unexpectedErrorResponse",
  });
});

/** @internal */
export type PosPaymentsAddResponse$Outbound = {
  HttpMeta: components.HTTPMetadata$Outbound;
  CreatePosPaymentResponse?:
    | components.CreatePosPaymentResponse$Outbound
    | undefined;
  UnexpectedErrorResponse?:
    | components.UnexpectedErrorResponse$Outbound
    | undefined;
};

/** @internal */
export const PosPaymentsAddResponse$outboundSchema: z.ZodType<
  PosPaymentsAddResponse$Outbound,
  z.ZodTypeDef,
  PosPaymentsAddResponse
> = z.object({
  httpMeta: components.HTTPMetadata$outboundSchema,
  createPosPaymentResponse: components.CreatePosPaymentResponse$outboundSchema
    .optional(),
  unexpectedErrorResponse: components.UnexpectedErrorResponse$outboundSchema
    .optional(),
}).transform((v) => {
  return remap$(v, {
    httpMeta: "HttpMeta",
    createPosPaymentResponse: "CreatePosPaymentResponse",
    unexpectedErrorResponse: "UnexpectedErrorResponse",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PosPaymentsAddResponse$ {
  /** @deprecated use `PosPaymentsAddResponse$inboundSchema` instead. */
  export const inboundSchema = PosPaymentsAddResponse$inboundSchema;
  /** @deprecated use `PosPaymentsAddResponse$outboundSchema` instead. */
  export const outboundSchema = PosPaymentsAddResponse$outboundSchema;
  /** @deprecated use `PosPaymentsAddResponse$Outbound` instead. */
  export type Outbound = PosPaymentsAddResponse$Outbound;
}

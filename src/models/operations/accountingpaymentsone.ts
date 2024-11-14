/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";

export type AccountingPaymentsOneGlobals = {
  /**
   * ID of the consumer which you want to get or push data from
   */
  customerId?: string | undefined;
  /**
   * The ID of your Unify application
   */
  appId?: string | undefined;
};

export type AccountingPaymentsOneRequest = {
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
  /**
   * The 'fields' parameter allows API users to specify the fields they want to include in the API response. If this parameter is not present, the API will return all available fields. If this parameter is present, only the fields specified in the comma-separated string will be included in the response. Nested properties can also be requested by using a dot notation. <br /><br />Example: `fields=name,email,addresses.city`<br /><br />In the example above, the response will only include the fields "name", "email" and "addresses.city". If any other fields are available, they will be excluded.
   */
  fields?: string | null | undefined;
};

export type AccountingPaymentsOneResponse = {
  httpMeta: components.HTTPMetadata;
  /**
   * Payment
   */
  getPaymentResponse?: components.GetPaymentResponse | undefined;
  /**
   * Unexpected error
   */
  unexpectedErrorResponse?: components.UnexpectedErrorResponse | undefined;
};

/** @internal */
export const AccountingPaymentsOneGlobals$inboundSchema: z.ZodType<
  AccountingPaymentsOneGlobals,
  z.ZodTypeDef,
  unknown
> = z.object({
  customerId: z.string().optional(),
  appId: z.string().optional(),
});

/** @internal */
export type AccountingPaymentsOneGlobals$Outbound = {
  customerId?: string | undefined;
  appId?: string | undefined;
};

/** @internal */
export const AccountingPaymentsOneGlobals$outboundSchema: z.ZodType<
  AccountingPaymentsOneGlobals$Outbound,
  z.ZodTypeDef,
  AccountingPaymentsOneGlobals
> = z.object({
  customerId: z.string().optional(),
  appId: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AccountingPaymentsOneGlobals$ {
  /** @deprecated use `AccountingPaymentsOneGlobals$inboundSchema` instead. */
  export const inboundSchema = AccountingPaymentsOneGlobals$inboundSchema;
  /** @deprecated use `AccountingPaymentsOneGlobals$outboundSchema` instead. */
  export const outboundSchema = AccountingPaymentsOneGlobals$outboundSchema;
  /** @deprecated use `AccountingPaymentsOneGlobals$Outbound` instead. */
  export type Outbound = AccountingPaymentsOneGlobals$Outbound;
}

/** @internal */
export const AccountingPaymentsOneRequest$inboundSchema: z.ZodType<
  AccountingPaymentsOneRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
  serviceId: z.string().optional(),
  raw: z.boolean().default(false),
  fields: z.nullable(z.string()).optional(),
});

/** @internal */
export type AccountingPaymentsOneRequest$Outbound = {
  id: string;
  serviceId?: string | undefined;
  raw: boolean;
  fields?: string | null | undefined;
};

/** @internal */
export const AccountingPaymentsOneRequest$outboundSchema: z.ZodType<
  AccountingPaymentsOneRequest$Outbound,
  z.ZodTypeDef,
  AccountingPaymentsOneRequest
> = z.object({
  id: z.string(),
  serviceId: z.string().optional(),
  raw: z.boolean().default(false),
  fields: z.nullable(z.string()).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AccountingPaymentsOneRequest$ {
  /** @deprecated use `AccountingPaymentsOneRequest$inboundSchema` instead. */
  export const inboundSchema = AccountingPaymentsOneRequest$inboundSchema;
  /** @deprecated use `AccountingPaymentsOneRequest$outboundSchema` instead. */
  export const outboundSchema = AccountingPaymentsOneRequest$outboundSchema;
  /** @deprecated use `AccountingPaymentsOneRequest$Outbound` instead. */
  export type Outbound = AccountingPaymentsOneRequest$Outbound;
}

/** @internal */
export const AccountingPaymentsOneResponse$inboundSchema: z.ZodType<
  AccountingPaymentsOneResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  HttpMeta: components.HTTPMetadata$inboundSchema,
  GetPaymentResponse: components.GetPaymentResponse$inboundSchema.optional(),
  UnexpectedErrorResponse: components.UnexpectedErrorResponse$inboundSchema
    .optional(),
}).transform((v) => {
  return remap$(v, {
    "HttpMeta": "httpMeta",
    "GetPaymentResponse": "getPaymentResponse",
    "UnexpectedErrorResponse": "unexpectedErrorResponse",
  });
});

/** @internal */
export type AccountingPaymentsOneResponse$Outbound = {
  HttpMeta: components.HTTPMetadata$Outbound;
  GetPaymentResponse?: components.GetPaymentResponse$Outbound | undefined;
  UnexpectedErrorResponse?:
    | components.UnexpectedErrorResponse$Outbound
    | undefined;
};

/** @internal */
export const AccountingPaymentsOneResponse$outboundSchema: z.ZodType<
  AccountingPaymentsOneResponse$Outbound,
  z.ZodTypeDef,
  AccountingPaymentsOneResponse
> = z.object({
  httpMeta: components.HTTPMetadata$outboundSchema,
  getPaymentResponse: components.GetPaymentResponse$outboundSchema.optional(),
  unexpectedErrorResponse: components.UnexpectedErrorResponse$outboundSchema
    .optional(),
}).transform((v) => {
  return remap$(v, {
    httpMeta: "HttpMeta",
    getPaymentResponse: "GetPaymentResponse",
    unexpectedErrorResponse: "UnexpectedErrorResponse",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AccountingPaymentsOneResponse$ {
  /** @deprecated use `AccountingPaymentsOneResponse$inboundSchema` instead. */
  export const inboundSchema = AccountingPaymentsOneResponse$inboundSchema;
  /** @deprecated use `AccountingPaymentsOneResponse$outboundSchema` instead. */
  export const outboundSchema = AccountingPaymentsOneResponse$outboundSchema;
  /** @deprecated use `AccountingPaymentsOneResponse$Outbound` instead. */
  export type Outbound = AccountingPaymentsOneResponse$Outbound;
}

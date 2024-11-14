/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";

export type AccountingCustomersUpdateGlobals = {
  /**
   * ID of the consumer which you want to get or push data from
   */
  customerId?: string | undefined;
  /**
   * The ID of your Unify application
   */
  appId?: string | undefined;
};

export type AccountingCustomersUpdateRequest = {
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
  customer: components.CustomerInput;
};

export type AccountingCustomersUpdateResponse = {
  httpMeta: components.HTTPMetadata;
  /**
   * Customers
   */
  updateCustomerResponse?: components.UpdateCustomerResponse | undefined;
  /**
   * Unexpected error
   */
  unexpectedErrorResponse?: components.UnexpectedErrorResponse | undefined;
};

/** @internal */
export const AccountingCustomersUpdateGlobals$inboundSchema: z.ZodType<
  AccountingCustomersUpdateGlobals,
  z.ZodTypeDef,
  unknown
> = z.object({
  customerId: z.string().optional(),
  appId: z.string().optional(),
});

/** @internal */
export type AccountingCustomersUpdateGlobals$Outbound = {
  customerId?: string | undefined;
  appId?: string | undefined;
};

/** @internal */
export const AccountingCustomersUpdateGlobals$outboundSchema: z.ZodType<
  AccountingCustomersUpdateGlobals$Outbound,
  z.ZodTypeDef,
  AccountingCustomersUpdateGlobals
> = z.object({
  customerId: z.string().optional(),
  appId: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AccountingCustomersUpdateGlobals$ {
  /** @deprecated use `AccountingCustomersUpdateGlobals$inboundSchema` instead. */
  export const inboundSchema = AccountingCustomersUpdateGlobals$inboundSchema;
  /** @deprecated use `AccountingCustomersUpdateGlobals$outboundSchema` instead. */
  export const outboundSchema = AccountingCustomersUpdateGlobals$outboundSchema;
  /** @deprecated use `AccountingCustomersUpdateGlobals$Outbound` instead. */
  export type Outbound = AccountingCustomersUpdateGlobals$Outbound;
}

/** @internal */
export const AccountingCustomersUpdateRequest$inboundSchema: z.ZodType<
  AccountingCustomersUpdateRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
  serviceId: z.string().optional(),
  raw: z.boolean().default(false),
  Customer: components.CustomerInput$inboundSchema,
}).transform((v) => {
  return remap$(v, {
    "Customer": "customer",
  });
});

/** @internal */
export type AccountingCustomersUpdateRequest$Outbound = {
  id: string;
  serviceId?: string | undefined;
  raw: boolean;
  Customer: components.CustomerInput$Outbound;
};

/** @internal */
export const AccountingCustomersUpdateRequest$outboundSchema: z.ZodType<
  AccountingCustomersUpdateRequest$Outbound,
  z.ZodTypeDef,
  AccountingCustomersUpdateRequest
> = z.object({
  id: z.string(),
  serviceId: z.string().optional(),
  raw: z.boolean().default(false),
  customer: components.CustomerInput$outboundSchema,
}).transform((v) => {
  return remap$(v, {
    customer: "Customer",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AccountingCustomersUpdateRequest$ {
  /** @deprecated use `AccountingCustomersUpdateRequest$inboundSchema` instead. */
  export const inboundSchema = AccountingCustomersUpdateRequest$inboundSchema;
  /** @deprecated use `AccountingCustomersUpdateRequest$outboundSchema` instead. */
  export const outboundSchema = AccountingCustomersUpdateRequest$outboundSchema;
  /** @deprecated use `AccountingCustomersUpdateRequest$Outbound` instead. */
  export type Outbound = AccountingCustomersUpdateRequest$Outbound;
}

/** @internal */
export const AccountingCustomersUpdateResponse$inboundSchema: z.ZodType<
  AccountingCustomersUpdateResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  HttpMeta: components.HTTPMetadata$inboundSchema,
  UpdateCustomerResponse: components.UpdateCustomerResponse$inboundSchema
    .optional(),
  UnexpectedErrorResponse: components.UnexpectedErrorResponse$inboundSchema
    .optional(),
}).transform((v) => {
  return remap$(v, {
    "HttpMeta": "httpMeta",
    "UpdateCustomerResponse": "updateCustomerResponse",
    "UnexpectedErrorResponse": "unexpectedErrorResponse",
  });
});

/** @internal */
export type AccountingCustomersUpdateResponse$Outbound = {
  HttpMeta: components.HTTPMetadata$Outbound;
  UpdateCustomerResponse?:
    | components.UpdateCustomerResponse$Outbound
    | undefined;
  UnexpectedErrorResponse?:
    | components.UnexpectedErrorResponse$Outbound
    | undefined;
};

/** @internal */
export const AccountingCustomersUpdateResponse$outboundSchema: z.ZodType<
  AccountingCustomersUpdateResponse$Outbound,
  z.ZodTypeDef,
  AccountingCustomersUpdateResponse
> = z.object({
  httpMeta: components.HTTPMetadata$outboundSchema,
  updateCustomerResponse: components.UpdateCustomerResponse$outboundSchema
    .optional(),
  unexpectedErrorResponse: components.UnexpectedErrorResponse$outboundSchema
    .optional(),
}).transform((v) => {
  return remap$(v, {
    httpMeta: "HttpMeta",
    updateCustomerResponse: "UpdateCustomerResponse",
    unexpectedErrorResponse: "UnexpectedErrorResponse",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AccountingCustomersUpdateResponse$ {
  /** @deprecated use `AccountingCustomersUpdateResponse$inboundSchema` instead. */
  export const inboundSchema = AccountingCustomersUpdateResponse$inboundSchema;
  /** @deprecated use `AccountingCustomersUpdateResponse$outboundSchema` instead. */
  export const outboundSchema =
    AccountingCustomersUpdateResponse$outboundSchema;
  /** @deprecated use `AccountingCustomersUpdateResponse$Outbound` instead. */
  export type Outbound = AccountingCustomersUpdateResponse$Outbound;
}

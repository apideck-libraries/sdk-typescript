/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";

export type AccountingInvoiceItemsAddGlobals = {
  /**
   * ID of the consumer which you want to get or push data from
   */
  customerId?: string | undefined;
  /**
   * The ID of your Unify application
   */
  appId?: string | undefined;
};

export type AccountingInvoiceItemsAddRequest = {
  /**
   * Include raw response. Mostly used for debugging purposes
   */
  raw?: boolean | undefined;
  /**
   * Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API.
   */
  serviceId?: string | undefined;
  invoiceItem: components.InvoiceItemInput;
};

export type AccountingInvoiceItemsAddResponse = {
  httpMeta: components.HTTPMetadata;
  /**
   * InvoiceItems
   */
  createInvoiceItemResponse?: components.CreateInvoiceItemResponse | undefined;
  /**
   * Unexpected error
   */
  unexpectedErrorResponse?: components.UnexpectedErrorResponse | undefined;
};

/** @internal */
export const AccountingInvoiceItemsAddGlobals$inboundSchema: z.ZodType<
  AccountingInvoiceItemsAddGlobals,
  z.ZodTypeDef,
  unknown
> = z.object({
  customerId: z.string().optional(),
  appId: z.string().optional(),
});

/** @internal */
export type AccountingInvoiceItemsAddGlobals$Outbound = {
  customerId?: string | undefined;
  appId?: string | undefined;
};

/** @internal */
export const AccountingInvoiceItemsAddGlobals$outboundSchema: z.ZodType<
  AccountingInvoiceItemsAddGlobals$Outbound,
  z.ZodTypeDef,
  AccountingInvoiceItemsAddGlobals
> = z.object({
  customerId: z.string().optional(),
  appId: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AccountingInvoiceItemsAddGlobals$ {
  /** @deprecated use `AccountingInvoiceItemsAddGlobals$inboundSchema` instead. */
  export const inboundSchema = AccountingInvoiceItemsAddGlobals$inboundSchema;
  /** @deprecated use `AccountingInvoiceItemsAddGlobals$outboundSchema` instead. */
  export const outboundSchema = AccountingInvoiceItemsAddGlobals$outboundSchema;
  /** @deprecated use `AccountingInvoiceItemsAddGlobals$Outbound` instead. */
  export type Outbound = AccountingInvoiceItemsAddGlobals$Outbound;
}

/** @internal */
export const AccountingInvoiceItemsAddRequest$inboundSchema: z.ZodType<
  AccountingInvoiceItemsAddRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  raw: z.boolean().default(false),
  serviceId: z.string().optional(),
  InvoiceItem: components.InvoiceItemInput$inboundSchema,
}).transform((v) => {
  return remap$(v, {
    "InvoiceItem": "invoiceItem",
  });
});

/** @internal */
export type AccountingInvoiceItemsAddRequest$Outbound = {
  raw: boolean;
  serviceId?: string | undefined;
  InvoiceItem: components.InvoiceItemInput$Outbound;
};

/** @internal */
export const AccountingInvoiceItemsAddRequest$outboundSchema: z.ZodType<
  AccountingInvoiceItemsAddRequest$Outbound,
  z.ZodTypeDef,
  AccountingInvoiceItemsAddRequest
> = z.object({
  raw: z.boolean().default(false),
  serviceId: z.string().optional(),
  invoiceItem: components.InvoiceItemInput$outboundSchema,
}).transform((v) => {
  return remap$(v, {
    invoiceItem: "InvoiceItem",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AccountingInvoiceItemsAddRequest$ {
  /** @deprecated use `AccountingInvoiceItemsAddRequest$inboundSchema` instead. */
  export const inboundSchema = AccountingInvoiceItemsAddRequest$inboundSchema;
  /** @deprecated use `AccountingInvoiceItemsAddRequest$outboundSchema` instead. */
  export const outboundSchema = AccountingInvoiceItemsAddRequest$outboundSchema;
  /** @deprecated use `AccountingInvoiceItemsAddRequest$Outbound` instead. */
  export type Outbound = AccountingInvoiceItemsAddRequest$Outbound;
}

/** @internal */
export const AccountingInvoiceItemsAddResponse$inboundSchema: z.ZodType<
  AccountingInvoiceItemsAddResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  HttpMeta: components.HTTPMetadata$inboundSchema,
  CreateInvoiceItemResponse: components.CreateInvoiceItemResponse$inboundSchema
    .optional(),
  UnexpectedErrorResponse: components.UnexpectedErrorResponse$inboundSchema
    .optional(),
}).transform((v) => {
  return remap$(v, {
    "HttpMeta": "httpMeta",
    "CreateInvoiceItemResponse": "createInvoiceItemResponse",
    "UnexpectedErrorResponse": "unexpectedErrorResponse",
  });
});

/** @internal */
export type AccountingInvoiceItemsAddResponse$Outbound = {
  HttpMeta: components.HTTPMetadata$Outbound;
  CreateInvoiceItemResponse?:
    | components.CreateInvoiceItemResponse$Outbound
    | undefined;
  UnexpectedErrorResponse?:
    | components.UnexpectedErrorResponse$Outbound
    | undefined;
};

/** @internal */
export const AccountingInvoiceItemsAddResponse$outboundSchema: z.ZodType<
  AccountingInvoiceItemsAddResponse$Outbound,
  z.ZodTypeDef,
  AccountingInvoiceItemsAddResponse
> = z.object({
  httpMeta: components.HTTPMetadata$outboundSchema,
  createInvoiceItemResponse: components.CreateInvoiceItemResponse$outboundSchema
    .optional(),
  unexpectedErrorResponse: components.UnexpectedErrorResponse$outboundSchema
    .optional(),
}).transform((v) => {
  return remap$(v, {
    httpMeta: "HttpMeta",
    createInvoiceItemResponse: "CreateInvoiceItemResponse",
    unexpectedErrorResponse: "UnexpectedErrorResponse",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AccountingInvoiceItemsAddResponse$ {
  /** @deprecated use `AccountingInvoiceItemsAddResponse$inboundSchema` instead. */
  export const inboundSchema = AccountingInvoiceItemsAddResponse$inboundSchema;
  /** @deprecated use `AccountingInvoiceItemsAddResponse$outboundSchema` instead. */
  export const outboundSchema =
    AccountingInvoiceItemsAddResponse$outboundSchema;
  /** @deprecated use `AccountingInvoiceItemsAddResponse$Outbound` instead. */
  export type Outbound = AccountingInvoiceItemsAddResponse$Outbound;
}

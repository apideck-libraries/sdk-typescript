/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";

export type AccountingBillsAddGlobals = {
  /**
   * ID of the consumer which you want to get or push data from
   */
  customerId?: string | undefined;
  /**
   * The ID of your Unify application
   */
  appId?: string | undefined;
};

export type AccountingBillsAddRequest = {
  /**
   * Include raw response. Mostly used for debugging purposes
   */
  raw?: boolean | undefined;
  /**
   * Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API.
   */
  serviceId?: string | undefined;
  bill: components.BillInput;
};

export type AccountingBillsAddResponse = {
  httpMeta: components.HTTPMetadata;
  /**
   * Bill created
   */
  createBillResponse?: components.CreateBillResponse | undefined;
  /**
   * Unexpected error
   */
  unexpectedErrorResponse?: components.UnexpectedErrorResponse | undefined;
};

/** @internal */
export const AccountingBillsAddGlobals$inboundSchema: z.ZodType<
  AccountingBillsAddGlobals,
  z.ZodTypeDef,
  unknown
> = z.object({
  customerId: z.string().optional(),
  appId: z.string().optional(),
});

/** @internal */
export type AccountingBillsAddGlobals$Outbound = {
  customerId?: string | undefined;
  appId?: string | undefined;
};

/** @internal */
export const AccountingBillsAddGlobals$outboundSchema: z.ZodType<
  AccountingBillsAddGlobals$Outbound,
  z.ZodTypeDef,
  AccountingBillsAddGlobals
> = z.object({
  customerId: z.string().optional(),
  appId: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AccountingBillsAddGlobals$ {
  /** @deprecated use `AccountingBillsAddGlobals$inboundSchema` instead. */
  export const inboundSchema = AccountingBillsAddGlobals$inboundSchema;
  /** @deprecated use `AccountingBillsAddGlobals$outboundSchema` instead. */
  export const outboundSchema = AccountingBillsAddGlobals$outboundSchema;
  /** @deprecated use `AccountingBillsAddGlobals$Outbound` instead. */
  export type Outbound = AccountingBillsAddGlobals$Outbound;
}

/** @internal */
export const AccountingBillsAddRequest$inboundSchema: z.ZodType<
  AccountingBillsAddRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  raw: z.boolean().default(false),
  serviceId: z.string().optional(),
  Bill: components.BillInput$inboundSchema,
}).transform((v) => {
  return remap$(v, {
    "Bill": "bill",
  });
});

/** @internal */
export type AccountingBillsAddRequest$Outbound = {
  raw: boolean;
  serviceId?: string | undefined;
  Bill: components.BillInput$Outbound;
};

/** @internal */
export const AccountingBillsAddRequest$outboundSchema: z.ZodType<
  AccountingBillsAddRequest$Outbound,
  z.ZodTypeDef,
  AccountingBillsAddRequest
> = z.object({
  raw: z.boolean().default(false),
  serviceId: z.string().optional(),
  bill: components.BillInput$outboundSchema,
}).transform((v) => {
  return remap$(v, {
    bill: "Bill",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AccountingBillsAddRequest$ {
  /** @deprecated use `AccountingBillsAddRequest$inboundSchema` instead. */
  export const inboundSchema = AccountingBillsAddRequest$inboundSchema;
  /** @deprecated use `AccountingBillsAddRequest$outboundSchema` instead. */
  export const outboundSchema = AccountingBillsAddRequest$outboundSchema;
  /** @deprecated use `AccountingBillsAddRequest$Outbound` instead. */
  export type Outbound = AccountingBillsAddRequest$Outbound;
}

/** @internal */
export const AccountingBillsAddResponse$inboundSchema: z.ZodType<
  AccountingBillsAddResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  HttpMeta: components.HTTPMetadata$inboundSchema,
  CreateBillResponse: components.CreateBillResponse$inboundSchema.optional(),
  UnexpectedErrorResponse: components.UnexpectedErrorResponse$inboundSchema
    .optional(),
}).transform((v) => {
  return remap$(v, {
    "HttpMeta": "httpMeta",
    "CreateBillResponse": "createBillResponse",
    "UnexpectedErrorResponse": "unexpectedErrorResponse",
  });
});

/** @internal */
export type AccountingBillsAddResponse$Outbound = {
  HttpMeta: components.HTTPMetadata$Outbound;
  CreateBillResponse?: components.CreateBillResponse$Outbound | undefined;
  UnexpectedErrorResponse?:
    | components.UnexpectedErrorResponse$Outbound
    | undefined;
};

/** @internal */
export const AccountingBillsAddResponse$outboundSchema: z.ZodType<
  AccountingBillsAddResponse$Outbound,
  z.ZodTypeDef,
  AccountingBillsAddResponse
> = z.object({
  httpMeta: components.HTTPMetadata$outboundSchema,
  createBillResponse: components.CreateBillResponse$outboundSchema.optional(),
  unexpectedErrorResponse: components.UnexpectedErrorResponse$outboundSchema
    .optional(),
}).transform((v) => {
  return remap$(v, {
    httpMeta: "HttpMeta",
    createBillResponse: "CreateBillResponse",
    unexpectedErrorResponse: "UnexpectedErrorResponse",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AccountingBillsAddResponse$ {
  /** @deprecated use `AccountingBillsAddResponse$inboundSchema` instead. */
  export const inboundSchema = AccountingBillsAddResponse$inboundSchema;
  /** @deprecated use `AccountingBillsAddResponse$outboundSchema` instead. */
  export const outboundSchema = AccountingBillsAddResponse$outboundSchema;
  /** @deprecated use `AccountingBillsAddResponse$Outbound` instead. */
  export type Outbound = AccountingBillsAddResponse$Outbound;
}

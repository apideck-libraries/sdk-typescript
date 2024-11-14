/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";

export type AccountingBalanceSheetOneGlobals = {
  /**
   * ID of the consumer which you want to get or push data from
   */
  customerId?: string | undefined;
  /**
   * The ID of your Unify application
   */
  appId?: string | undefined;
};

export type AccountingBalanceSheetOneRequest = {
  /**
   * Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API.
   */
  serviceId?: string | undefined;
  /**
   * Optional unmapped key/values that will be passed through to downstream as query parameters. Ie: ?pass_through[search]=leads becomes ?search=leads
   */
  passThrough?: { [k: string]: any } | undefined;
  /**
   * Apply filters
   */
  filter?: components.BalanceSheetFilter | undefined;
  /**
   * Include raw response. Mostly used for debugging purposes
   */
  raw?: boolean | undefined;
};

export type AccountingBalanceSheetOneResponse = {
  httpMeta: components.HTTPMetadata;
  /**
   * BalanceSheet
   */
  getBalanceSheetResponse?: components.GetBalanceSheetResponse | undefined;
  /**
   * Unexpected error
   */
  unexpectedErrorResponse?: components.UnexpectedErrorResponse | undefined;
};

/** @internal */
export const AccountingBalanceSheetOneGlobals$inboundSchema: z.ZodType<
  AccountingBalanceSheetOneGlobals,
  z.ZodTypeDef,
  unknown
> = z.object({
  customerId: z.string().optional(),
  appId: z.string().optional(),
});

/** @internal */
export type AccountingBalanceSheetOneGlobals$Outbound = {
  customerId?: string | undefined;
  appId?: string | undefined;
};

/** @internal */
export const AccountingBalanceSheetOneGlobals$outboundSchema: z.ZodType<
  AccountingBalanceSheetOneGlobals$Outbound,
  z.ZodTypeDef,
  AccountingBalanceSheetOneGlobals
> = z.object({
  customerId: z.string().optional(),
  appId: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AccountingBalanceSheetOneGlobals$ {
  /** @deprecated use `AccountingBalanceSheetOneGlobals$inboundSchema` instead. */
  export const inboundSchema = AccountingBalanceSheetOneGlobals$inboundSchema;
  /** @deprecated use `AccountingBalanceSheetOneGlobals$outboundSchema` instead. */
  export const outboundSchema = AccountingBalanceSheetOneGlobals$outboundSchema;
  /** @deprecated use `AccountingBalanceSheetOneGlobals$Outbound` instead. */
  export type Outbound = AccountingBalanceSheetOneGlobals$Outbound;
}

/** @internal */
export const AccountingBalanceSheetOneRequest$inboundSchema: z.ZodType<
  AccountingBalanceSheetOneRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  serviceId: z.string().optional(),
  pass_through: z.record(z.any()).optional(),
  filter: components.BalanceSheetFilter$inboundSchema.optional(),
  raw: z.boolean().default(false),
}).transform((v) => {
  return remap$(v, {
    "pass_through": "passThrough",
  });
});

/** @internal */
export type AccountingBalanceSheetOneRequest$Outbound = {
  serviceId?: string | undefined;
  pass_through?: { [k: string]: any } | undefined;
  filter?: components.BalanceSheetFilter$Outbound | undefined;
  raw: boolean;
};

/** @internal */
export const AccountingBalanceSheetOneRequest$outboundSchema: z.ZodType<
  AccountingBalanceSheetOneRequest$Outbound,
  z.ZodTypeDef,
  AccountingBalanceSheetOneRequest
> = z.object({
  serviceId: z.string().optional(),
  passThrough: z.record(z.any()).optional(),
  filter: components.BalanceSheetFilter$outboundSchema.optional(),
  raw: z.boolean().default(false),
}).transform((v) => {
  return remap$(v, {
    passThrough: "pass_through",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AccountingBalanceSheetOneRequest$ {
  /** @deprecated use `AccountingBalanceSheetOneRequest$inboundSchema` instead. */
  export const inboundSchema = AccountingBalanceSheetOneRequest$inboundSchema;
  /** @deprecated use `AccountingBalanceSheetOneRequest$outboundSchema` instead. */
  export const outboundSchema = AccountingBalanceSheetOneRequest$outboundSchema;
  /** @deprecated use `AccountingBalanceSheetOneRequest$Outbound` instead. */
  export type Outbound = AccountingBalanceSheetOneRequest$Outbound;
}

/** @internal */
export const AccountingBalanceSheetOneResponse$inboundSchema: z.ZodType<
  AccountingBalanceSheetOneResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  HttpMeta: components.HTTPMetadata$inboundSchema,
  GetBalanceSheetResponse: components.GetBalanceSheetResponse$inboundSchema
    .optional(),
  UnexpectedErrorResponse: components.UnexpectedErrorResponse$inboundSchema
    .optional(),
}).transform((v) => {
  return remap$(v, {
    "HttpMeta": "httpMeta",
    "GetBalanceSheetResponse": "getBalanceSheetResponse",
    "UnexpectedErrorResponse": "unexpectedErrorResponse",
  });
});

/** @internal */
export type AccountingBalanceSheetOneResponse$Outbound = {
  HttpMeta: components.HTTPMetadata$Outbound;
  GetBalanceSheetResponse?:
    | components.GetBalanceSheetResponse$Outbound
    | undefined;
  UnexpectedErrorResponse?:
    | components.UnexpectedErrorResponse$Outbound
    | undefined;
};

/** @internal */
export const AccountingBalanceSheetOneResponse$outboundSchema: z.ZodType<
  AccountingBalanceSheetOneResponse$Outbound,
  z.ZodTypeDef,
  AccountingBalanceSheetOneResponse
> = z.object({
  httpMeta: components.HTTPMetadata$outboundSchema,
  getBalanceSheetResponse: components.GetBalanceSheetResponse$outboundSchema
    .optional(),
  unexpectedErrorResponse: components.UnexpectedErrorResponse$outboundSchema
    .optional(),
}).transform((v) => {
  return remap$(v, {
    httpMeta: "HttpMeta",
    getBalanceSheetResponse: "GetBalanceSheetResponse",
    unexpectedErrorResponse: "UnexpectedErrorResponse",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AccountingBalanceSheetOneResponse$ {
  /** @deprecated use `AccountingBalanceSheetOneResponse$inboundSchema` instead. */
  export const inboundSchema = AccountingBalanceSheetOneResponse$inboundSchema;
  /** @deprecated use `AccountingBalanceSheetOneResponse$outboundSchema` instead. */
  export const outboundSchema =
    AccountingBalanceSheetOneResponse$outboundSchema;
  /** @deprecated use `AccountingBalanceSheetOneResponse$Outbound` instead. */
  export type Outbound = AccountingBalanceSheetOneResponse$Outbound;
}

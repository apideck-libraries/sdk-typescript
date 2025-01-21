/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type AccountingBalanceSheetOneGlobals = {
  /**
   * ID of the consumer which you want to get or push data from
   */
  consumerId?: string | undefined;
  /**
   * The ID of your Unify application
   */
  appId?: string | undefined;
};

export type AccountingBalanceSheetOneRequest = {
  /**
   * ID of the consumer which you want to get or push data from
   */
  consumerId?: string | undefined;
  /**
   * The ID of your Unify application
   */
  appId?: string | undefined;
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
  consumerId: z.string().optional(),
  appId: z.string().optional(),
});

/** @internal */
export type AccountingBalanceSheetOneGlobals$Outbound = {
  consumerId?: string | undefined;
  appId?: string | undefined;
};

/** @internal */
export const AccountingBalanceSheetOneGlobals$outboundSchema: z.ZodType<
  AccountingBalanceSheetOneGlobals$Outbound,
  z.ZodTypeDef,
  AccountingBalanceSheetOneGlobals
> = z.object({
  consumerId: z.string().optional(),
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

export function accountingBalanceSheetOneGlobalsToJSON(
  accountingBalanceSheetOneGlobals: AccountingBalanceSheetOneGlobals,
): string {
  return JSON.stringify(
    AccountingBalanceSheetOneGlobals$outboundSchema.parse(
      accountingBalanceSheetOneGlobals,
    ),
  );
}

export function accountingBalanceSheetOneGlobalsFromJSON(
  jsonString: string,
): SafeParseResult<AccountingBalanceSheetOneGlobals, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => AccountingBalanceSheetOneGlobals$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AccountingBalanceSheetOneGlobals' from JSON`,
  );
}

/** @internal */
export const AccountingBalanceSheetOneRequest$inboundSchema: z.ZodType<
  AccountingBalanceSheetOneRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  consumerId: z.string().optional(),
  appId: z.string().optional(),
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
  consumerId?: string | undefined;
  appId?: string | undefined;
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
  consumerId: z.string().optional(),
  appId: z.string().optional(),
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

export function accountingBalanceSheetOneRequestToJSON(
  accountingBalanceSheetOneRequest: AccountingBalanceSheetOneRequest,
): string {
  return JSON.stringify(
    AccountingBalanceSheetOneRequest$outboundSchema.parse(
      accountingBalanceSheetOneRequest,
    ),
  );
}

export function accountingBalanceSheetOneRequestFromJSON(
  jsonString: string,
): SafeParseResult<AccountingBalanceSheetOneRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => AccountingBalanceSheetOneRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AccountingBalanceSheetOneRequest' from JSON`,
  );
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

export function accountingBalanceSheetOneResponseToJSON(
  accountingBalanceSheetOneResponse: AccountingBalanceSheetOneResponse,
): string {
  return JSON.stringify(
    AccountingBalanceSheetOneResponse$outboundSchema.parse(
      accountingBalanceSheetOneResponse,
    ),
  );
}

export function accountingBalanceSheetOneResponseFromJSON(
  jsonString: string,
): SafeParseResult<AccountingBalanceSheetOneResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => AccountingBalanceSheetOneResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AccountingBalanceSheetOneResponse' from JSON`,
  );
}

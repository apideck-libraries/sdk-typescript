/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type AccountingExpensesAllGlobals = {
  /**
   * ID of the consumer which you want to get or push data from
   */
  consumerId?: string | undefined;
  /**
   * The ID of your Unify application
   */
  appId?: string | undefined;
};

export type AccountingExpensesAllRequest = {
  /**
   * Include raw response. Mostly used for debugging purposes
   */
  raw?: boolean | undefined;
  /**
   * Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API.
   */
  serviceId?: string | undefined;
  /**
   * Cursor to start from. You can find cursors for next/previous pages in the meta.cursors property of the response.
   */
  cursor?: string | null | undefined;
  /**
   * Number of results to return. Minimum 1, Maximum 200, Default 20
   */
  limit?: number | undefined;
};

export type AccountingExpensesAllResponse = {
  httpMeta: components.HTTPMetadata;
  /**
   * Expenses
   */
  getExpensesResponse?: components.GetExpensesResponse | undefined;
  /**
   * Unexpected error
   */
  unexpectedErrorResponse?: components.UnexpectedErrorResponse | undefined;
};

/** @internal */
export const AccountingExpensesAllGlobals$inboundSchema: z.ZodType<
  AccountingExpensesAllGlobals,
  z.ZodTypeDef,
  unknown
> = z.object({
  consumerId: z.string().optional(),
  appId: z.string().optional(),
});

/** @internal */
export type AccountingExpensesAllGlobals$Outbound = {
  consumerId?: string | undefined;
  appId?: string | undefined;
};

/** @internal */
export const AccountingExpensesAllGlobals$outboundSchema: z.ZodType<
  AccountingExpensesAllGlobals$Outbound,
  z.ZodTypeDef,
  AccountingExpensesAllGlobals
> = z.object({
  consumerId: z.string().optional(),
  appId: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AccountingExpensesAllGlobals$ {
  /** @deprecated use `AccountingExpensesAllGlobals$inboundSchema` instead. */
  export const inboundSchema = AccountingExpensesAllGlobals$inboundSchema;
  /** @deprecated use `AccountingExpensesAllGlobals$outboundSchema` instead. */
  export const outboundSchema = AccountingExpensesAllGlobals$outboundSchema;
  /** @deprecated use `AccountingExpensesAllGlobals$Outbound` instead. */
  export type Outbound = AccountingExpensesAllGlobals$Outbound;
}

export function accountingExpensesAllGlobalsToJSON(
  accountingExpensesAllGlobals: AccountingExpensesAllGlobals,
): string {
  return JSON.stringify(
    AccountingExpensesAllGlobals$outboundSchema.parse(
      accountingExpensesAllGlobals,
    ),
  );
}

export function accountingExpensesAllGlobalsFromJSON(
  jsonString: string,
): SafeParseResult<AccountingExpensesAllGlobals, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => AccountingExpensesAllGlobals$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AccountingExpensesAllGlobals' from JSON`,
  );
}

/** @internal */
export const AccountingExpensesAllRequest$inboundSchema: z.ZodType<
  AccountingExpensesAllRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  raw: z.boolean().default(false),
  serviceId: z.string().optional(),
  cursor: z.nullable(z.string()).optional(),
  limit: z.number().int().default(20),
});

/** @internal */
export type AccountingExpensesAllRequest$Outbound = {
  raw: boolean;
  serviceId?: string | undefined;
  cursor?: string | null | undefined;
  limit: number;
};

/** @internal */
export const AccountingExpensesAllRequest$outboundSchema: z.ZodType<
  AccountingExpensesAllRequest$Outbound,
  z.ZodTypeDef,
  AccountingExpensesAllRequest
> = z.object({
  raw: z.boolean().default(false),
  serviceId: z.string().optional(),
  cursor: z.nullable(z.string()).optional(),
  limit: z.number().int().default(20),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AccountingExpensesAllRequest$ {
  /** @deprecated use `AccountingExpensesAllRequest$inboundSchema` instead. */
  export const inboundSchema = AccountingExpensesAllRequest$inboundSchema;
  /** @deprecated use `AccountingExpensesAllRequest$outboundSchema` instead. */
  export const outboundSchema = AccountingExpensesAllRequest$outboundSchema;
  /** @deprecated use `AccountingExpensesAllRequest$Outbound` instead. */
  export type Outbound = AccountingExpensesAllRequest$Outbound;
}

export function accountingExpensesAllRequestToJSON(
  accountingExpensesAllRequest: AccountingExpensesAllRequest,
): string {
  return JSON.stringify(
    AccountingExpensesAllRequest$outboundSchema.parse(
      accountingExpensesAllRequest,
    ),
  );
}

export function accountingExpensesAllRequestFromJSON(
  jsonString: string,
): SafeParseResult<AccountingExpensesAllRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => AccountingExpensesAllRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AccountingExpensesAllRequest' from JSON`,
  );
}

/** @internal */
export const AccountingExpensesAllResponse$inboundSchema: z.ZodType<
  AccountingExpensesAllResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  HttpMeta: components.HTTPMetadata$inboundSchema,
  GetExpensesResponse: components.GetExpensesResponse$inboundSchema.optional(),
  UnexpectedErrorResponse: components.UnexpectedErrorResponse$inboundSchema
    .optional(),
}).transform((v) => {
  return remap$(v, {
    "HttpMeta": "httpMeta",
    "GetExpensesResponse": "getExpensesResponse",
    "UnexpectedErrorResponse": "unexpectedErrorResponse",
  });
});

/** @internal */
export type AccountingExpensesAllResponse$Outbound = {
  HttpMeta: components.HTTPMetadata$Outbound;
  GetExpensesResponse?: components.GetExpensesResponse$Outbound | undefined;
  UnexpectedErrorResponse?:
    | components.UnexpectedErrorResponse$Outbound
    | undefined;
};

/** @internal */
export const AccountingExpensesAllResponse$outboundSchema: z.ZodType<
  AccountingExpensesAllResponse$Outbound,
  z.ZodTypeDef,
  AccountingExpensesAllResponse
> = z.object({
  httpMeta: components.HTTPMetadata$outboundSchema,
  getExpensesResponse: components.GetExpensesResponse$outboundSchema.optional(),
  unexpectedErrorResponse: components.UnexpectedErrorResponse$outboundSchema
    .optional(),
}).transform((v) => {
  return remap$(v, {
    httpMeta: "HttpMeta",
    getExpensesResponse: "GetExpensesResponse",
    unexpectedErrorResponse: "UnexpectedErrorResponse",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AccountingExpensesAllResponse$ {
  /** @deprecated use `AccountingExpensesAllResponse$inboundSchema` instead. */
  export const inboundSchema = AccountingExpensesAllResponse$inboundSchema;
  /** @deprecated use `AccountingExpensesAllResponse$outboundSchema` instead. */
  export const outboundSchema = AccountingExpensesAllResponse$outboundSchema;
  /** @deprecated use `AccountingExpensesAllResponse$Outbound` instead. */
  export type Outbound = AccountingExpensesAllResponse$Outbound;
}

export function accountingExpensesAllResponseToJSON(
  accountingExpensesAllResponse: AccountingExpensesAllResponse,
): string {
  return JSON.stringify(
    AccountingExpensesAllResponse$outboundSchema.parse(
      accountingExpensesAllResponse,
    ),
  );
}

export function accountingExpensesAllResponseFromJSON(
  jsonString: string,
): SafeParseResult<AccountingExpensesAllResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => AccountingExpensesAllResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AccountingExpensesAllResponse' from JSON`,
  );
}

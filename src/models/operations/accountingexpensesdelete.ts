/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type AccountingExpensesDeleteGlobals = {
  /**
   * ID of the consumer which you want to get or push data from
   */
  consumerId?: string | undefined;
  /**
   * The ID of your Unify application
   */
  appId?: string | undefined;
};

export type AccountingExpensesDeleteRequest = {
  /**
   * ID of the record you are acting upon.
   */
  id: string;
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
   * Include raw response. Mostly used for debugging purposes
   */
  raw?: boolean | undefined;
};

export type AccountingExpensesDeleteResponse = {
  httpMeta: components.HTTPMetadata;
  /**
   * Expenses
   */
  deleteExpenseResponse?: components.DeleteExpenseResponse | undefined;
  /**
   * Unexpected error
   */
  unexpectedErrorResponse?: components.UnexpectedErrorResponse | undefined;
};

/** @internal */
export const AccountingExpensesDeleteGlobals$inboundSchema: z.ZodType<
  AccountingExpensesDeleteGlobals,
  z.ZodTypeDef,
  unknown
> = z.object({
  consumerId: z.string().optional(),
  appId: z.string().optional(),
});

/** @internal */
export type AccountingExpensesDeleteGlobals$Outbound = {
  consumerId?: string | undefined;
  appId?: string | undefined;
};

/** @internal */
export const AccountingExpensesDeleteGlobals$outboundSchema: z.ZodType<
  AccountingExpensesDeleteGlobals$Outbound,
  z.ZodTypeDef,
  AccountingExpensesDeleteGlobals
> = z.object({
  consumerId: z.string().optional(),
  appId: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AccountingExpensesDeleteGlobals$ {
  /** @deprecated use `AccountingExpensesDeleteGlobals$inboundSchema` instead. */
  export const inboundSchema = AccountingExpensesDeleteGlobals$inboundSchema;
  /** @deprecated use `AccountingExpensesDeleteGlobals$outboundSchema` instead. */
  export const outboundSchema = AccountingExpensesDeleteGlobals$outboundSchema;
  /** @deprecated use `AccountingExpensesDeleteGlobals$Outbound` instead. */
  export type Outbound = AccountingExpensesDeleteGlobals$Outbound;
}

export function accountingExpensesDeleteGlobalsToJSON(
  accountingExpensesDeleteGlobals: AccountingExpensesDeleteGlobals,
): string {
  return JSON.stringify(
    AccountingExpensesDeleteGlobals$outboundSchema.parse(
      accountingExpensesDeleteGlobals,
    ),
  );
}

export function accountingExpensesDeleteGlobalsFromJSON(
  jsonString: string,
): SafeParseResult<AccountingExpensesDeleteGlobals, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => AccountingExpensesDeleteGlobals$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AccountingExpensesDeleteGlobals' from JSON`,
  );
}

/** @internal */
export const AccountingExpensesDeleteRequest$inboundSchema: z.ZodType<
  AccountingExpensesDeleteRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
  consumerId: z.string().optional(),
  appId: z.string().optional(),
  serviceId: z.string().optional(),
  raw: z.boolean().default(false),
});

/** @internal */
export type AccountingExpensesDeleteRequest$Outbound = {
  id: string;
  consumerId?: string | undefined;
  appId?: string | undefined;
  serviceId?: string | undefined;
  raw: boolean;
};

/** @internal */
export const AccountingExpensesDeleteRequest$outboundSchema: z.ZodType<
  AccountingExpensesDeleteRequest$Outbound,
  z.ZodTypeDef,
  AccountingExpensesDeleteRequest
> = z.object({
  id: z.string(),
  consumerId: z.string().optional(),
  appId: z.string().optional(),
  serviceId: z.string().optional(),
  raw: z.boolean().default(false),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AccountingExpensesDeleteRequest$ {
  /** @deprecated use `AccountingExpensesDeleteRequest$inboundSchema` instead. */
  export const inboundSchema = AccountingExpensesDeleteRequest$inboundSchema;
  /** @deprecated use `AccountingExpensesDeleteRequest$outboundSchema` instead. */
  export const outboundSchema = AccountingExpensesDeleteRequest$outboundSchema;
  /** @deprecated use `AccountingExpensesDeleteRequest$Outbound` instead. */
  export type Outbound = AccountingExpensesDeleteRequest$Outbound;
}

export function accountingExpensesDeleteRequestToJSON(
  accountingExpensesDeleteRequest: AccountingExpensesDeleteRequest,
): string {
  return JSON.stringify(
    AccountingExpensesDeleteRequest$outboundSchema.parse(
      accountingExpensesDeleteRequest,
    ),
  );
}

export function accountingExpensesDeleteRequestFromJSON(
  jsonString: string,
): SafeParseResult<AccountingExpensesDeleteRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => AccountingExpensesDeleteRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AccountingExpensesDeleteRequest' from JSON`,
  );
}

/** @internal */
export const AccountingExpensesDeleteResponse$inboundSchema: z.ZodType<
  AccountingExpensesDeleteResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  HttpMeta: components.HTTPMetadata$inboundSchema,
  DeleteExpenseResponse: components.DeleteExpenseResponse$inboundSchema
    .optional(),
  UnexpectedErrorResponse: components.UnexpectedErrorResponse$inboundSchema
    .optional(),
}).transform((v) => {
  return remap$(v, {
    "HttpMeta": "httpMeta",
    "DeleteExpenseResponse": "deleteExpenseResponse",
    "UnexpectedErrorResponse": "unexpectedErrorResponse",
  });
});

/** @internal */
export type AccountingExpensesDeleteResponse$Outbound = {
  HttpMeta: components.HTTPMetadata$Outbound;
  DeleteExpenseResponse?: components.DeleteExpenseResponse$Outbound | undefined;
  UnexpectedErrorResponse?:
    | components.UnexpectedErrorResponse$Outbound
    | undefined;
};

/** @internal */
export const AccountingExpensesDeleteResponse$outboundSchema: z.ZodType<
  AccountingExpensesDeleteResponse$Outbound,
  z.ZodTypeDef,
  AccountingExpensesDeleteResponse
> = z.object({
  httpMeta: components.HTTPMetadata$outboundSchema,
  deleteExpenseResponse: components.DeleteExpenseResponse$outboundSchema
    .optional(),
  unexpectedErrorResponse: components.UnexpectedErrorResponse$outboundSchema
    .optional(),
}).transform((v) => {
  return remap$(v, {
    httpMeta: "HttpMeta",
    deleteExpenseResponse: "DeleteExpenseResponse",
    unexpectedErrorResponse: "UnexpectedErrorResponse",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AccountingExpensesDeleteResponse$ {
  /** @deprecated use `AccountingExpensesDeleteResponse$inboundSchema` instead. */
  export const inboundSchema = AccountingExpensesDeleteResponse$inboundSchema;
  /** @deprecated use `AccountingExpensesDeleteResponse$outboundSchema` instead. */
  export const outboundSchema = AccountingExpensesDeleteResponse$outboundSchema;
  /** @deprecated use `AccountingExpensesDeleteResponse$Outbound` instead. */
  export type Outbound = AccountingExpensesDeleteResponse$Outbound;
}

export function accountingExpensesDeleteResponseToJSON(
  accountingExpensesDeleteResponse: AccountingExpensesDeleteResponse,
): string {
  return JSON.stringify(
    AccountingExpensesDeleteResponse$outboundSchema.parse(
      accountingExpensesDeleteResponse,
    ),
  );
}

export function accountingExpensesDeleteResponseFromJSON(
  jsonString: string,
): SafeParseResult<AccountingExpensesDeleteResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => AccountingExpensesDeleteResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AccountingExpensesDeleteResponse' from JSON`,
  );
}

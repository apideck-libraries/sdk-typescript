/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type AccountingBankFeedAccountsAddGlobals = {
  /**
   * ID of the consumer which you want to get or push data from
   */
  consumerId?: string | undefined;
  /**
   * The ID of your Unify application
   */
  appId?: string | undefined;
};

export type AccountingBankFeedAccountsAddRequest = {
  /**
   * Include raw response. Mostly used for debugging purposes
   */
  raw?: boolean | undefined;
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
  bankFeedAccount: components.BankFeedAccountInput;
};

export type AccountingBankFeedAccountsAddResponse = {
  httpMeta: components.HTTPMetadata;
  /**
   * Bank Feed Accounts
   */
  createBankFeedAccountResponse?:
    | components.CreateBankFeedAccountResponse
    | undefined;
  /**
   * Unexpected error
   */
  unexpectedErrorResponse?: components.UnexpectedErrorResponse | undefined;
};

/** @internal */
export const AccountingBankFeedAccountsAddGlobals$inboundSchema: z.ZodType<
  AccountingBankFeedAccountsAddGlobals,
  z.ZodTypeDef,
  unknown
> = z.object({
  consumerId: z.string().optional(),
  appId: z.string().optional(),
});

/** @internal */
export type AccountingBankFeedAccountsAddGlobals$Outbound = {
  consumerId?: string | undefined;
  appId?: string | undefined;
};

/** @internal */
export const AccountingBankFeedAccountsAddGlobals$outboundSchema: z.ZodType<
  AccountingBankFeedAccountsAddGlobals$Outbound,
  z.ZodTypeDef,
  AccountingBankFeedAccountsAddGlobals
> = z.object({
  consumerId: z.string().optional(),
  appId: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AccountingBankFeedAccountsAddGlobals$ {
  /** @deprecated use `AccountingBankFeedAccountsAddGlobals$inboundSchema` instead. */
  export const inboundSchema =
    AccountingBankFeedAccountsAddGlobals$inboundSchema;
  /** @deprecated use `AccountingBankFeedAccountsAddGlobals$outboundSchema` instead. */
  export const outboundSchema =
    AccountingBankFeedAccountsAddGlobals$outboundSchema;
  /** @deprecated use `AccountingBankFeedAccountsAddGlobals$Outbound` instead. */
  export type Outbound = AccountingBankFeedAccountsAddGlobals$Outbound;
}

export function accountingBankFeedAccountsAddGlobalsToJSON(
  accountingBankFeedAccountsAddGlobals: AccountingBankFeedAccountsAddGlobals,
): string {
  return JSON.stringify(
    AccountingBankFeedAccountsAddGlobals$outboundSchema.parse(
      accountingBankFeedAccountsAddGlobals,
    ),
  );
}

export function accountingBankFeedAccountsAddGlobalsFromJSON(
  jsonString: string,
): SafeParseResult<AccountingBankFeedAccountsAddGlobals, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      AccountingBankFeedAccountsAddGlobals$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AccountingBankFeedAccountsAddGlobals' from JSON`,
  );
}

/** @internal */
export const AccountingBankFeedAccountsAddRequest$inboundSchema: z.ZodType<
  AccountingBankFeedAccountsAddRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  raw: z.boolean().default(false),
  consumerId: z.string().optional(),
  appId: z.string().optional(),
  serviceId: z.string().optional(),
  BankFeedAccount: components.BankFeedAccountInput$inboundSchema,
}).transform((v) => {
  return remap$(v, {
    "BankFeedAccount": "bankFeedAccount",
  });
});

/** @internal */
export type AccountingBankFeedAccountsAddRequest$Outbound = {
  raw: boolean;
  consumerId?: string | undefined;
  appId?: string | undefined;
  serviceId?: string | undefined;
  BankFeedAccount: components.BankFeedAccountInput$Outbound;
};

/** @internal */
export const AccountingBankFeedAccountsAddRequest$outboundSchema: z.ZodType<
  AccountingBankFeedAccountsAddRequest$Outbound,
  z.ZodTypeDef,
  AccountingBankFeedAccountsAddRequest
> = z.object({
  raw: z.boolean().default(false),
  consumerId: z.string().optional(),
  appId: z.string().optional(),
  serviceId: z.string().optional(),
  bankFeedAccount: components.BankFeedAccountInput$outboundSchema,
}).transform((v) => {
  return remap$(v, {
    bankFeedAccount: "BankFeedAccount",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AccountingBankFeedAccountsAddRequest$ {
  /** @deprecated use `AccountingBankFeedAccountsAddRequest$inboundSchema` instead. */
  export const inboundSchema =
    AccountingBankFeedAccountsAddRequest$inboundSchema;
  /** @deprecated use `AccountingBankFeedAccountsAddRequest$outboundSchema` instead. */
  export const outboundSchema =
    AccountingBankFeedAccountsAddRequest$outboundSchema;
  /** @deprecated use `AccountingBankFeedAccountsAddRequest$Outbound` instead. */
  export type Outbound = AccountingBankFeedAccountsAddRequest$Outbound;
}

export function accountingBankFeedAccountsAddRequestToJSON(
  accountingBankFeedAccountsAddRequest: AccountingBankFeedAccountsAddRequest,
): string {
  return JSON.stringify(
    AccountingBankFeedAccountsAddRequest$outboundSchema.parse(
      accountingBankFeedAccountsAddRequest,
    ),
  );
}

export function accountingBankFeedAccountsAddRequestFromJSON(
  jsonString: string,
): SafeParseResult<AccountingBankFeedAccountsAddRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      AccountingBankFeedAccountsAddRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AccountingBankFeedAccountsAddRequest' from JSON`,
  );
}

/** @internal */
export const AccountingBankFeedAccountsAddResponse$inboundSchema: z.ZodType<
  AccountingBankFeedAccountsAddResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  HttpMeta: components.HTTPMetadata$inboundSchema,
  CreateBankFeedAccountResponse: components
    .CreateBankFeedAccountResponse$inboundSchema.optional(),
  UnexpectedErrorResponse: components.UnexpectedErrorResponse$inboundSchema
    .optional(),
}).transform((v) => {
  return remap$(v, {
    "HttpMeta": "httpMeta",
    "CreateBankFeedAccountResponse": "createBankFeedAccountResponse",
    "UnexpectedErrorResponse": "unexpectedErrorResponse",
  });
});

/** @internal */
export type AccountingBankFeedAccountsAddResponse$Outbound = {
  HttpMeta: components.HTTPMetadata$Outbound;
  CreateBankFeedAccountResponse?:
    | components.CreateBankFeedAccountResponse$Outbound
    | undefined;
  UnexpectedErrorResponse?:
    | components.UnexpectedErrorResponse$Outbound
    | undefined;
};

/** @internal */
export const AccountingBankFeedAccountsAddResponse$outboundSchema: z.ZodType<
  AccountingBankFeedAccountsAddResponse$Outbound,
  z.ZodTypeDef,
  AccountingBankFeedAccountsAddResponse
> = z.object({
  httpMeta: components.HTTPMetadata$outboundSchema,
  createBankFeedAccountResponse: components
    .CreateBankFeedAccountResponse$outboundSchema.optional(),
  unexpectedErrorResponse: components.UnexpectedErrorResponse$outboundSchema
    .optional(),
}).transform((v) => {
  return remap$(v, {
    httpMeta: "HttpMeta",
    createBankFeedAccountResponse: "CreateBankFeedAccountResponse",
    unexpectedErrorResponse: "UnexpectedErrorResponse",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AccountingBankFeedAccountsAddResponse$ {
  /** @deprecated use `AccountingBankFeedAccountsAddResponse$inboundSchema` instead. */
  export const inboundSchema =
    AccountingBankFeedAccountsAddResponse$inboundSchema;
  /** @deprecated use `AccountingBankFeedAccountsAddResponse$outboundSchema` instead. */
  export const outboundSchema =
    AccountingBankFeedAccountsAddResponse$outboundSchema;
  /** @deprecated use `AccountingBankFeedAccountsAddResponse$Outbound` instead. */
  export type Outbound = AccountingBankFeedAccountsAddResponse$Outbound;
}

export function accountingBankFeedAccountsAddResponseToJSON(
  accountingBankFeedAccountsAddResponse: AccountingBankFeedAccountsAddResponse,
): string {
  return JSON.stringify(
    AccountingBankFeedAccountsAddResponse$outboundSchema.parse(
      accountingBankFeedAccountsAddResponse,
    ),
  );
}

export function accountingBankFeedAccountsAddResponseFromJSON(
  jsonString: string,
): SafeParseResult<AccountingBankFeedAccountsAddResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      AccountingBankFeedAccountsAddResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AccountingBankFeedAccountsAddResponse' from JSON`,
  );
}

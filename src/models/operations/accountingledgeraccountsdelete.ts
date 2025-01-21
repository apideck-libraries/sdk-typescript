/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type AccountingLedgerAccountsDeleteGlobals = {
  /**
   * ID of the consumer which you want to get or push data from
   */
  consumerId?: string | undefined;
  /**
   * The ID of your Unify application
   */
  appId?: string | undefined;
};

export type AccountingLedgerAccountsDeleteRequest = {
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

export type AccountingLedgerAccountsDeleteResponse = {
  httpMeta: components.HTTPMetadata;
  /**
   * LedgerAccount deleted
   */
  deleteLedgerAccountResponse?:
    | components.DeleteLedgerAccountResponse
    | undefined;
  /**
   * Unexpected error
   */
  unexpectedErrorResponse?: components.UnexpectedErrorResponse | undefined;
};

/** @internal */
export const AccountingLedgerAccountsDeleteGlobals$inboundSchema: z.ZodType<
  AccountingLedgerAccountsDeleteGlobals,
  z.ZodTypeDef,
  unknown
> = z.object({
  consumerId: z.string().optional(),
  appId: z.string().optional(),
});

/** @internal */
export type AccountingLedgerAccountsDeleteGlobals$Outbound = {
  consumerId?: string | undefined;
  appId?: string | undefined;
};

/** @internal */
export const AccountingLedgerAccountsDeleteGlobals$outboundSchema: z.ZodType<
  AccountingLedgerAccountsDeleteGlobals$Outbound,
  z.ZodTypeDef,
  AccountingLedgerAccountsDeleteGlobals
> = z.object({
  consumerId: z.string().optional(),
  appId: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AccountingLedgerAccountsDeleteGlobals$ {
  /** @deprecated use `AccountingLedgerAccountsDeleteGlobals$inboundSchema` instead. */
  export const inboundSchema =
    AccountingLedgerAccountsDeleteGlobals$inboundSchema;
  /** @deprecated use `AccountingLedgerAccountsDeleteGlobals$outboundSchema` instead. */
  export const outboundSchema =
    AccountingLedgerAccountsDeleteGlobals$outboundSchema;
  /** @deprecated use `AccountingLedgerAccountsDeleteGlobals$Outbound` instead. */
  export type Outbound = AccountingLedgerAccountsDeleteGlobals$Outbound;
}

export function accountingLedgerAccountsDeleteGlobalsToJSON(
  accountingLedgerAccountsDeleteGlobals: AccountingLedgerAccountsDeleteGlobals,
): string {
  return JSON.stringify(
    AccountingLedgerAccountsDeleteGlobals$outboundSchema.parse(
      accountingLedgerAccountsDeleteGlobals,
    ),
  );
}

export function accountingLedgerAccountsDeleteGlobalsFromJSON(
  jsonString: string,
): SafeParseResult<AccountingLedgerAccountsDeleteGlobals, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      AccountingLedgerAccountsDeleteGlobals$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AccountingLedgerAccountsDeleteGlobals' from JSON`,
  );
}

/** @internal */
export const AccountingLedgerAccountsDeleteRequest$inboundSchema: z.ZodType<
  AccountingLedgerAccountsDeleteRequest,
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
export type AccountingLedgerAccountsDeleteRequest$Outbound = {
  id: string;
  consumerId?: string | undefined;
  appId?: string | undefined;
  serviceId?: string | undefined;
  raw: boolean;
};

/** @internal */
export const AccountingLedgerAccountsDeleteRequest$outboundSchema: z.ZodType<
  AccountingLedgerAccountsDeleteRequest$Outbound,
  z.ZodTypeDef,
  AccountingLedgerAccountsDeleteRequest
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
export namespace AccountingLedgerAccountsDeleteRequest$ {
  /** @deprecated use `AccountingLedgerAccountsDeleteRequest$inboundSchema` instead. */
  export const inboundSchema =
    AccountingLedgerAccountsDeleteRequest$inboundSchema;
  /** @deprecated use `AccountingLedgerAccountsDeleteRequest$outboundSchema` instead. */
  export const outboundSchema =
    AccountingLedgerAccountsDeleteRequest$outboundSchema;
  /** @deprecated use `AccountingLedgerAccountsDeleteRequest$Outbound` instead. */
  export type Outbound = AccountingLedgerAccountsDeleteRequest$Outbound;
}

export function accountingLedgerAccountsDeleteRequestToJSON(
  accountingLedgerAccountsDeleteRequest: AccountingLedgerAccountsDeleteRequest,
): string {
  return JSON.stringify(
    AccountingLedgerAccountsDeleteRequest$outboundSchema.parse(
      accountingLedgerAccountsDeleteRequest,
    ),
  );
}

export function accountingLedgerAccountsDeleteRequestFromJSON(
  jsonString: string,
): SafeParseResult<AccountingLedgerAccountsDeleteRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      AccountingLedgerAccountsDeleteRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AccountingLedgerAccountsDeleteRequest' from JSON`,
  );
}

/** @internal */
export const AccountingLedgerAccountsDeleteResponse$inboundSchema: z.ZodType<
  AccountingLedgerAccountsDeleteResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  HttpMeta: components.HTTPMetadata$inboundSchema,
  DeleteLedgerAccountResponse: components
    .DeleteLedgerAccountResponse$inboundSchema.optional(),
  UnexpectedErrorResponse: components.UnexpectedErrorResponse$inboundSchema
    .optional(),
}).transform((v) => {
  return remap$(v, {
    "HttpMeta": "httpMeta",
    "DeleteLedgerAccountResponse": "deleteLedgerAccountResponse",
    "UnexpectedErrorResponse": "unexpectedErrorResponse",
  });
});

/** @internal */
export type AccountingLedgerAccountsDeleteResponse$Outbound = {
  HttpMeta: components.HTTPMetadata$Outbound;
  DeleteLedgerAccountResponse?:
    | components.DeleteLedgerAccountResponse$Outbound
    | undefined;
  UnexpectedErrorResponse?:
    | components.UnexpectedErrorResponse$Outbound
    | undefined;
};

/** @internal */
export const AccountingLedgerAccountsDeleteResponse$outboundSchema: z.ZodType<
  AccountingLedgerAccountsDeleteResponse$Outbound,
  z.ZodTypeDef,
  AccountingLedgerAccountsDeleteResponse
> = z.object({
  httpMeta: components.HTTPMetadata$outboundSchema,
  deleteLedgerAccountResponse: components
    .DeleteLedgerAccountResponse$outboundSchema.optional(),
  unexpectedErrorResponse: components.UnexpectedErrorResponse$outboundSchema
    .optional(),
}).transform((v) => {
  return remap$(v, {
    httpMeta: "HttpMeta",
    deleteLedgerAccountResponse: "DeleteLedgerAccountResponse",
    unexpectedErrorResponse: "UnexpectedErrorResponse",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AccountingLedgerAccountsDeleteResponse$ {
  /** @deprecated use `AccountingLedgerAccountsDeleteResponse$inboundSchema` instead. */
  export const inboundSchema =
    AccountingLedgerAccountsDeleteResponse$inboundSchema;
  /** @deprecated use `AccountingLedgerAccountsDeleteResponse$outboundSchema` instead. */
  export const outboundSchema =
    AccountingLedgerAccountsDeleteResponse$outboundSchema;
  /** @deprecated use `AccountingLedgerAccountsDeleteResponse$Outbound` instead. */
  export type Outbound = AccountingLedgerAccountsDeleteResponse$Outbound;
}

export function accountingLedgerAccountsDeleteResponseToJSON(
  accountingLedgerAccountsDeleteResponse:
    AccountingLedgerAccountsDeleteResponse,
): string {
  return JSON.stringify(
    AccountingLedgerAccountsDeleteResponse$outboundSchema.parse(
      accountingLedgerAccountsDeleteResponse,
    ),
  );
}

export function accountingLedgerAccountsDeleteResponseFromJSON(
  jsonString: string,
): SafeParseResult<AccountingLedgerAccountsDeleteResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      AccountingLedgerAccountsDeleteResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AccountingLedgerAccountsDeleteResponse' from JSON`,
  );
}

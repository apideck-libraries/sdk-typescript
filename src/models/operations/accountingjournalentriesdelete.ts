/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type AccountingJournalEntriesDeleteGlobals = {
  /**
   * ID of the consumer which you want to get or push data from
   */
  consumerId?: string | undefined;
  /**
   * The ID of your Unify application
   */
  appId?: string | undefined;
};

export type AccountingJournalEntriesDeleteRequest = {
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
};

export type AccountingJournalEntriesDeleteResponse = {
  httpMeta: components.HTTPMetadata;
  /**
   * JournalEntries
   */
  deleteJournalEntryResponse?:
    | components.DeleteJournalEntryResponse
    | undefined;
  /**
   * Unexpected error
   */
  unexpectedErrorResponse?: components.UnexpectedErrorResponse | undefined;
};

/** @internal */
export const AccountingJournalEntriesDeleteGlobals$inboundSchema: z.ZodType<
  AccountingJournalEntriesDeleteGlobals,
  z.ZodTypeDef,
  unknown
> = z.object({
  consumerId: z.string().optional(),
  appId: z.string().optional(),
});

/** @internal */
export type AccountingJournalEntriesDeleteGlobals$Outbound = {
  consumerId?: string | undefined;
  appId?: string | undefined;
};

/** @internal */
export const AccountingJournalEntriesDeleteGlobals$outboundSchema: z.ZodType<
  AccountingJournalEntriesDeleteGlobals$Outbound,
  z.ZodTypeDef,
  AccountingJournalEntriesDeleteGlobals
> = z.object({
  consumerId: z.string().optional(),
  appId: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AccountingJournalEntriesDeleteGlobals$ {
  /** @deprecated use `AccountingJournalEntriesDeleteGlobals$inboundSchema` instead. */
  export const inboundSchema =
    AccountingJournalEntriesDeleteGlobals$inboundSchema;
  /** @deprecated use `AccountingJournalEntriesDeleteGlobals$outboundSchema` instead. */
  export const outboundSchema =
    AccountingJournalEntriesDeleteGlobals$outboundSchema;
  /** @deprecated use `AccountingJournalEntriesDeleteGlobals$Outbound` instead. */
  export type Outbound = AccountingJournalEntriesDeleteGlobals$Outbound;
}

export function accountingJournalEntriesDeleteGlobalsToJSON(
  accountingJournalEntriesDeleteGlobals: AccountingJournalEntriesDeleteGlobals,
): string {
  return JSON.stringify(
    AccountingJournalEntriesDeleteGlobals$outboundSchema.parse(
      accountingJournalEntriesDeleteGlobals,
    ),
  );
}

export function accountingJournalEntriesDeleteGlobalsFromJSON(
  jsonString: string,
): SafeParseResult<AccountingJournalEntriesDeleteGlobals, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      AccountingJournalEntriesDeleteGlobals$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AccountingJournalEntriesDeleteGlobals' from JSON`,
  );
}

/** @internal */
export const AccountingJournalEntriesDeleteRequest$inboundSchema: z.ZodType<
  AccountingJournalEntriesDeleteRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
  serviceId: z.string().optional(),
  raw: z.boolean().default(false),
});

/** @internal */
export type AccountingJournalEntriesDeleteRequest$Outbound = {
  id: string;
  serviceId?: string | undefined;
  raw: boolean;
};

/** @internal */
export const AccountingJournalEntriesDeleteRequest$outboundSchema: z.ZodType<
  AccountingJournalEntriesDeleteRequest$Outbound,
  z.ZodTypeDef,
  AccountingJournalEntriesDeleteRequest
> = z.object({
  id: z.string(),
  serviceId: z.string().optional(),
  raw: z.boolean().default(false),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AccountingJournalEntriesDeleteRequest$ {
  /** @deprecated use `AccountingJournalEntriesDeleteRequest$inboundSchema` instead. */
  export const inboundSchema =
    AccountingJournalEntriesDeleteRequest$inboundSchema;
  /** @deprecated use `AccountingJournalEntriesDeleteRequest$outboundSchema` instead. */
  export const outboundSchema =
    AccountingJournalEntriesDeleteRequest$outboundSchema;
  /** @deprecated use `AccountingJournalEntriesDeleteRequest$Outbound` instead. */
  export type Outbound = AccountingJournalEntriesDeleteRequest$Outbound;
}

export function accountingJournalEntriesDeleteRequestToJSON(
  accountingJournalEntriesDeleteRequest: AccountingJournalEntriesDeleteRequest,
): string {
  return JSON.stringify(
    AccountingJournalEntriesDeleteRequest$outboundSchema.parse(
      accountingJournalEntriesDeleteRequest,
    ),
  );
}

export function accountingJournalEntriesDeleteRequestFromJSON(
  jsonString: string,
): SafeParseResult<AccountingJournalEntriesDeleteRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      AccountingJournalEntriesDeleteRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AccountingJournalEntriesDeleteRequest' from JSON`,
  );
}

/** @internal */
export const AccountingJournalEntriesDeleteResponse$inboundSchema: z.ZodType<
  AccountingJournalEntriesDeleteResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  HttpMeta: components.HTTPMetadata$inboundSchema,
  DeleteJournalEntryResponse: components
    .DeleteJournalEntryResponse$inboundSchema.optional(),
  UnexpectedErrorResponse: components.UnexpectedErrorResponse$inboundSchema
    .optional(),
}).transform((v) => {
  return remap$(v, {
    "HttpMeta": "httpMeta",
    "DeleteJournalEntryResponse": "deleteJournalEntryResponse",
    "UnexpectedErrorResponse": "unexpectedErrorResponse",
  });
});

/** @internal */
export type AccountingJournalEntriesDeleteResponse$Outbound = {
  HttpMeta: components.HTTPMetadata$Outbound;
  DeleteJournalEntryResponse?:
    | components.DeleteJournalEntryResponse$Outbound
    | undefined;
  UnexpectedErrorResponse?:
    | components.UnexpectedErrorResponse$Outbound
    | undefined;
};

/** @internal */
export const AccountingJournalEntriesDeleteResponse$outboundSchema: z.ZodType<
  AccountingJournalEntriesDeleteResponse$Outbound,
  z.ZodTypeDef,
  AccountingJournalEntriesDeleteResponse
> = z.object({
  httpMeta: components.HTTPMetadata$outboundSchema,
  deleteJournalEntryResponse: components
    .DeleteJournalEntryResponse$outboundSchema.optional(),
  unexpectedErrorResponse: components.UnexpectedErrorResponse$outboundSchema
    .optional(),
}).transform((v) => {
  return remap$(v, {
    httpMeta: "HttpMeta",
    deleteJournalEntryResponse: "DeleteJournalEntryResponse",
    unexpectedErrorResponse: "UnexpectedErrorResponse",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AccountingJournalEntriesDeleteResponse$ {
  /** @deprecated use `AccountingJournalEntriesDeleteResponse$inboundSchema` instead. */
  export const inboundSchema =
    AccountingJournalEntriesDeleteResponse$inboundSchema;
  /** @deprecated use `AccountingJournalEntriesDeleteResponse$outboundSchema` instead. */
  export const outboundSchema =
    AccountingJournalEntriesDeleteResponse$outboundSchema;
  /** @deprecated use `AccountingJournalEntriesDeleteResponse$Outbound` instead. */
  export type Outbound = AccountingJournalEntriesDeleteResponse$Outbound;
}

export function accountingJournalEntriesDeleteResponseToJSON(
  accountingJournalEntriesDeleteResponse:
    AccountingJournalEntriesDeleteResponse,
): string {
  return JSON.stringify(
    AccountingJournalEntriesDeleteResponse$outboundSchema.parse(
      accountingJournalEntriesDeleteResponse,
    ),
  );
}

export function accountingJournalEntriesDeleteResponseFromJSON(
  jsonString: string,
): SafeParseResult<AccountingJournalEntriesDeleteResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      AccountingJournalEntriesDeleteResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AccountingJournalEntriesDeleteResponse' from JSON`,
  );
}

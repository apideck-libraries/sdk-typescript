/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type AccountingJournalEntriesOneGlobals = {
  /**
   * ID of the consumer which you want to get or push data from
   */
  consumerId?: string | undefined;
  /**
   * The ID of your Unify application
   */
  appId?: string | undefined;
};

export type AccountingJournalEntriesOneRequest = {
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
  /**
   * The 'fields' parameter allows API users to specify the fields they want to include in the API response. If this parameter is not present, the API will return all available fields. If this parameter is present, only the fields specified in the comma-separated string will be included in the response. Nested properties can also be requested by using a dot notation. <br /><br />Example: `fields=name,email,addresses.city`<br /><br />In the example above, the response will only include the fields "name", "email" and "addresses.city". If any other fields are available, they will be excluded.
   */
  fields?: string | null | undefined;
};

export type AccountingJournalEntriesOneResponse = {
  httpMeta: components.HTTPMetadata;
  /**
   * JournalEntries
   */
  getJournalEntryResponse?: components.GetJournalEntryResponse | undefined;
  /**
   * Unexpected error
   */
  unexpectedErrorResponse?: components.UnexpectedErrorResponse | undefined;
};

/** @internal */
export const AccountingJournalEntriesOneGlobals$inboundSchema: z.ZodType<
  AccountingJournalEntriesOneGlobals,
  z.ZodTypeDef,
  unknown
> = z.object({
  consumerId: z.string().optional(),
  appId: z.string().optional(),
});

/** @internal */
export type AccountingJournalEntriesOneGlobals$Outbound = {
  consumerId?: string | undefined;
  appId?: string | undefined;
};

/** @internal */
export const AccountingJournalEntriesOneGlobals$outboundSchema: z.ZodType<
  AccountingJournalEntriesOneGlobals$Outbound,
  z.ZodTypeDef,
  AccountingJournalEntriesOneGlobals
> = z.object({
  consumerId: z.string().optional(),
  appId: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AccountingJournalEntriesOneGlobals$ {
  /** @deprecated use `AccountingJournalEntriesOneGlobals$inboundSchema` instead. */
  export const inboundSchema = AccountingJournalEntriesOneGlobals$inboundSchema;
  /** @deprecated use `AccountingJournalEntriesOneGlobals$outboundSchema` instead. */
  export const outboundSchema =
    AccountingJournalEntriesOneGlobals$outboundSchema;
  /** @deprecated use `AccountingJournalEntriesOneGlobals$Outbound` instead. */
  export type Outbound = AccountingJournalEntriesOneGlobals$Outbound;
}

export function accountingJournalEntriesOneGlobalsToJSON(
  accountingJournalEntriesOneGlobals: AccountingJournalEntriesOneGlobals,
): string {
  return JSON.stringify(
    AccountingJournalEntriesOneGlobals$outboundSchema.parse(
      accountingJournalEntriesOneGlobals,
    ),
  );
}

export function accountingJournalEntriesOneGlobalsFromJSON(
  jsonString: string,
): SafeParseResult<AccountingJournalEntriesOneGlobals, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      AccountingJournalEntriesOneGlobals$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AccountingJournalEntriesOneGlobals' from JSON`,
  );
}

/** @internal */
export const AccountingJournalEntriesOneRequest$inboundSchema: z.ZodType<
  AccountingJournalEntriesOneRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
  serviceId: z.string().optional(),
  raw: z.boolean().default(false),
  fields: z.nullable(z.string()).optional(),
});

/** @internal */
export type AccountingJournalEntriesOneRequest$Outbound = {
  id: string;
  serviceId?: string | undefined;
  raw: boolean;
  fields?: string | null | undefined;
};

/** @internal */
export const AccountingJournalEntriesOneRequest$outboundSchema: z.ZodType<
  AccountingJournalEntriesOneRequest$Outbound,
  z.ZodTypeDef,
  AccountingJournalEntriesOneRequest
> = z.object({
  id: z.string(),
  serviceId: z.string().optional(),
  raw: z.boolean().default(false),
  fields: z.nullable(z.string()).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AccountingJournalEntriesOneRequest$ {
  /** @deprecated use `AccountingJournalEntriesOneRequest$inboundSchema` instead. */
  export const inboundSchema = AccountingJournalEntriesOneRequest$inboundSchema;
  /** @deprecated use `AccountingJournalEntriesOneRequest$outboundSchema` instead. */
  export const outboundSchema =
    AccountingJournalEntriesOneRequest$outboundSchema;
  /** @deprecated use `AccountingJournalEntriesOneRequest$Outbound` instead. */
  export type Outbound = AccountingJournalEntriesOneRequest$Outbound;
}

export function accountingJournalEntriesOneRequestToJSON(
  accountingJournalEntriesOneRequest: AccountingJournalEntriesOneRequest,
): string {
  return JSON.stringify(
    AccountingJournalEntriesOneRequest$outboundSchema.parse(
      accountingJournalEntriesOneRequest,
    ),
  );
}

export function accountingJournalEntriesOneRequestFromJSON(
  jsonString: string,
): SafeParseResult<AccountingJournalEntriesOneRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      AccountingJournalEntriesOneRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AccountingJournalEntriesOneRequest' from JSON`,
  );
}

/** @internal */
export const AccountingJournalEntriesOneResponse$inboundSchema: z.ZodType<
  AccountingJournalEntriesOneResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  HttpMeta: components.HTTPMetadata$inboundSchema,
  GetJournalEntryResponse: components.GetJournalEntryResponse$inboundSchema
    .optional(),
  UnexpectedErrorResponse: components.UnexpectedErrorResponse$inboundSchema
    .optional(),
}).transform((v) => {
  return remap$(v, {
    "HttpMeta": "httpMeta",
    "GetJournalEntryResponse": "getJournalEntryResponse",
    "UnexpectedErrorResponse": "unexpectedErrorResponse",
  });
});

/** @internal */
export type AccountingJournalEntriesOneResponse$Outbound = {
  HttpMeta: components.HTTPMetadata$Outbound;
  GetJournalEntryResponse?:
    | components.GetJournalEntryResponse$Outbound
    | undefined;
  UnexpectedErrorResponse?:
    | components.UnexpectedErrorResponse$Outbound
    | undefined;
};

/** @internal */
export const AccountingJournalEntriesOneResponse$outboundSchema: z.ZodType<
  AccountingJournalEntriesOneResponse$Outbound,
  z.ZodTypeDef,
  AccountingJournalEntriesOneResponse
> = z.object({
  httpMeta: components.HTTPMetadata$outboundSchema,
  getJournalEntryResponse: components.GetJournalEntryResponse$outboundSchema
    .optional(),
  unexpectedErrorResponse: components.UnexpectedErrorResponse$outboundSchema
    .optional(),
}).transform((v) => {
  return remap$(v, {
    httpMeta: "HttpMeta",
    getJournalEntryResponse: "GetJournalEntryResponse",
    unexpectedErrorResponse: "UnexpectedErrorResponse",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AccountingJournalEntriesOneResponse$ {
  /** @deprecated use `AccountingJournalEntriesOneResponse$inboundSchema` instead. */
  export const inboundSchema =
    AccountingJournalEntriesOneResponse$inboundSchema;
  /** @deprecated use `AccountingJournalEntriesOneResponse$outboundSchema` instead. */
  export const outboundSchema =
    AccountingJournalEntriesOneResponse$outboundSchema;
  /** @deprecated use `AccountingJournalEntriesOneResponse$Outbound` instead. */
  export type Outbound = AccountingJournalEntriesOneResponse$Outbound;
}

export function accountingJournalEntriesOneResponseToJSON(
  accountingJournalEntriesOneResponse: AccountingJournalEntriesOneResponse,
): string {
  return JSON.stringify(
    AccountingJournalEntriesOneResponse$outboundSchema.parse(
      accountingJournalEntriesOneResponse,
    ),
  );
}

export function accountingJournalEntriesOneResponseFromJSON(
  jsonString: string,
): SafeParseResult<AccountingJournalEntriesOneResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      AccountingJournalEntriesOneResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AccountingJournalEntriesOneResponse' from JSON`,
  );
}

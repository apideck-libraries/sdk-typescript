/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type AccountingBankFeedAccountsAllGlobals = {
  /**
   * ID of the consumer which you want to get or push data from
   */
  consumerId?: string | undefined;
  /**
   * The ID of your Unify application
   */
  appId?: string | undefined;
};

export type AccountingBankFeedAccountsAllRequest = {
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
  /**
   * Cursor to start from. You can find cursors for next/previous pages in the meta.cursors property of the response.
   */
  cursor?: string | null | undefined;
  /**
   * Number of results to return. Minimum 1, Maximum 200, Default 20
   */
  limit?: number | undefined;
  /**
   * Optional unmapped key/values that will be passed through to downstream as query parameters. Ie: ?pass_through[search]=leads becomes ?search=leads
   */
  passThrough?: { [k: string]: any } | undefined;
  /**
   * The 'fields' parameter allows API users to specify the fields they want to include in the API response. If this parameter is not present, the API will return all available fields. If this parameter is present, only the fields specified in the comma-separated string will be included in the response. Nested properties can also be requested by using a dot notation. <br /><br />Example: `fields=name,email,addresses.city`<br /><br />In the example above, the response will only include the fields "name", "email" and "addresses.city". If any other fields are available, they will be excluded.
   */
  fields?: string | null | undefined;
};

export type AccountingBankFeedAccountsAllResponse = {
  httpMeta: components.HTTPMetadata;
  /**
   * Bank Feed Accounts
   */
  getBankFeedAccountsResponse?:
    | components.GetBankFeedAccountsResponse
    | undefined;
  /**
   * Unexpected error
   */
  unexpectedErrorResponse?: components.UnexpectedErrorResponse | undefined;
};

/** @internal */
export const AccountingBankFeedAccountsAllGlobals$inboundSchema: z.ZodType<
  AccountingBankFeedAccountsAllGlobals,
  z.ZodTypeDef,
  unknown
> = z.object({
  consumerId: z.string().optional(),
  appId: z.string().optional(),
});

/** @internal */
export type AccountingBankFeedAccountsAllGlobals$Outbound = {
  consumerId?: string | undefined;
  appId?: string | undefined;
};

/** @internal */
export const AccountingBankFeedAccountsAllGlobals$outboundSchema: z.ZodType<
  AccountingBankFeedAccountsAllGlobals$Outbound,
  z.ZodTypeDef,
  AccountingBankFeedAccountsAllGlobals
> = z.object({
  consumerId: z.string().optional(),
  appId: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AccountingBankFeedAccountsAllGlobals$ {
  /** @deprecated use `AccountingBankFeedAccountsAllGlobals$inboundSchema` instead. */
  export const inboundSchema =
    AccountingBankFeedAccountsAllGlobals$inboundSchema;
  /** @deprecated use `AccountingBankFeedAccountsAllGlobals$outboundSchema` instead. */
  export const outboundSchema =
    AccountingBankFeedAccountsAllGlobals$outboundSchema;
  /** @deprecated use `AccountingBankFeedAccountsAllGlobals$Outbound` instead. */
  export type Outbound = AccountingBankFeedAccountsAllGlobals$Outbound;
}

export function accountingBankFeedAccountsAllGlobalsToJSON(
  accountingBankFeedAccountsAllGlobals: AccountingBankFeedAccountsAllGlobals,
): string {
  return JSON.stringify(
    AccountingBankFeedAccountsAllGlobals$outboundSchema.parse(
      accountingBankFeedAccountsAllGlobals,
    ),
  );
}

export function accountingBankFeedAccountsAllGlobalsFromJSON(
  jsonString: string,
): SafeParseResult<AccountingBankFeedAccountsAllGlobals, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      AccountingBankFeedAccountsAllGlobals$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AccountingBankFeedAccountsAllGlobals' from JSON`,
  );
}

/** @internal */
export const AccountingBankFeedAccountsAllRequest$inboundSchema: z.ZodType<
  AccountingBankFeedAccountsAllRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  raw: z.boolean().default(false),
  consumerId: z.string().optional(),
  appId: z.string().optional(),
  serviceId: z.string().optional(),
  cursor: z.nullable(z.string()).optional(),
  limit: z.number().int().default(20),
  pass_through: z.record(z.any()).optional(),
  fields: z.nullable(z.string()).optional(),
}).transform((v) => {
  return remap$(v, {
    "pass_through": "passThrough",
  });
});

/** @internal */
export type AccountingBankFeedAccountsAllRequest$Outbound = {
  raw: boolean;
  consumerId?: string | undefined;
  appId?: string | undefined;
  serviceId?: string | undefined;
  cursor?: string | null | undefined;
  limit: number;
  pass_through?: { [k: string]: any } | undefined;
  fields?: string | null | undefined;
};

/** @internal */
export const AccountingBankFeedAccountsAllRequest$outboundSchema: z.ZodType<
  AccountingBankFeedAccountsAllRequest$Outbound,
  z.ZodTypeDef,
  AccountingBankFeedAccountsAllRequest
> = z.object({
  raw: z.boolean().default(false),
  consumerId: z.string().optional(),
  appId: z.string().optional(),
  serviceId: z.string().optional(),
  cursor: z.nullable(z.string()).optional(),
  limit: z.number().int().default(20),
  passThrough: z.record(z.any()).optional(),
  fields: z.nullable(z.string()).optional(),
}).transform((v) => {
  return remap$(v, {
    passThrough: "pass_through",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AccountingBankFeedAccountsAllRequest$ {
  /** @deprecated use `AccountingBankFeedAccountsAllRequest$inboundSchema` instead. */
  export const inboundSchema =
    AccountingBankFeedAccountsAllRequest$inboundSchema;
  /** @deprecated use `AccountingBankFeedAccountsAllRequest$outboundSchema` instead. */
  export const outboundSchema =
    AccountingBankFeedAccountsAllRequest$outboundSchema;
  /** @deprecated use `AccountingBankFeedAccountsAllRequest$Outbound` instead. */
  export type Outbound = AccountingBankFeedAccountsAllRequest$Outbound;
}

export function accountingBankFeedAccountsAllRequestToJSON(
  accountingBankFeedAccountsAllRequest: AccountingBankFeedAccountsAllRequest,
): string {
  return JSON.stringify(
    AccountingBankFeedAccountsAllRequest$outboundSchema.parse(
      accountingBankFeedAccountsAllRequest,
    ),
  );
}

export function accountingBankFeedAccountsAllRequestFromJSON(
  jsonString: string,
): SafeParseResult<AccountingBankFeedAccountsAllRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      AccountingBankFeedAccountsAllRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AccountingBankFeedAccountsAllRequest' from JSON`,
  );
}

/** @internal */
export const AccountingBankFeedAccountsAllResponse$inboundSchema: z.ZodType<
  AccountingBankFeedAccountsAllResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  HttpMeta: components.HTTPMetadata$inboundSchema,
  GetBankFeedAccountsResponse: components
    .GetBankFeedAccountsResponse$inboundSchema.optional(),
  UnexpectedErrorResponse: components.UnexpectedErrorResponse$inboundSchema
    .optional(),
}).transform((v) => {
  return remap$(v, {
    "HttpMeta": "httpMeta",
    "GetBankFeedAccountsResponse": "getBankFeedAccountsResponse",
    "UnexpectedErrorResponse": "unexpectedErrorResponse",
  });
});

/** @internal */
export type AccountingBankFeedAccountsAllResponse$Outbound = {
  HttpMeta: components.HTTPMetadata$Outbound;
  GetBankFeedAccountsResponse?:
    | components.GetBankFeedAccountsResponse$Outbound
    | undefined;
  UnexpectedErrorResponse?:
    | components.UnexpectedErrorResponse$Outbound
    | undefined;
};

/** @internal */
export const AccountingBankFeedAccountsAllResponse$outboundSchema: z.ZodType<
  AccountingBankFeedAccountsAllResponse$Outbound,
  z.ZodTypeDef,
  AccountingBankFeedAccountsAllResponse
> = z.object({
  httpMeta: components.HTTPMetadata$outboundSchema,
  getBankFeedAccountsResponse: components
    .GetBankFeedAccountsResponse$outboundSchema.optional(),
  unexpectedErrorResponse: components.UnexpectedErrorResponse$outboundSchema
    .optional(),
}).transform((v) => {
  return remap$(v, {
    httpMeta: "HttpMeta",
    getBankFeedAccountsResponse: "GetBankFeedAccountsResponse",
    unexpectedErrorResponse: "UnexpectedErrorResponse",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AccountingBankFeedAccountsAllResponse$ {
  /** @deprecated use `AccountingBankFeedAccountsAllResponse$inboundSchema` instead. */
  export const inboundSchema =
    AccountingBankFeedAccountsAllResponse$inboundSchema;
  /** @deprecated use `AccountingBankFeedAccountsAllResponse$outboundSchema` instead. */
  export const outboundSchema =
    AccountingBankFeedAccountsAllResponse$outboundSchema;
  /** @deprecated use `AccountingBankFeedAccountsAllResponse$Outbound` instead. */
  export type Outbound = AccountingBankFeedAccountsAllResponse$Outbound;
}

export function accountingBankFeedAccountsAllResponseToJSON(
  accountingBankFeedAccountsAllResponse: AccountingBankFeedAccountsAllResponse,
): string {
  return JSON.stringify(
    AccountingBankFeedAccountsAllResponse$outboundSchema.parse(
      accountingBankFeedAccountsAllResponse,
    ),
  );
}

export function accountingBankFeedAccountsAllResponseFromJSON(
  jsonString: string,
): SafeParseResult<AccountingBankFeedAccountsAllResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      AccountingBankFeedAccountsAllResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AccountingBankFeedAccountsAllResponse' from JSON`,
  );
}

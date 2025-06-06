/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type AccountingBankFeedStatementsOneGlobals = {
  /**
   * ID of the consumer which you want to get or push data from
   */
  consumerId?: string | undefined;
  /**
   * The ID of your Unify application
   */
  appId?: string | undefined;
};

export type AccountingBankFeedStatementsOneRequest = {
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
  /**
   * The 'fields' parameter allows API users to specify the fields they want to include in the API response. If this parameter is not present, the API will return all available fields. If this parameter is present, only the fields specified in the comma-separated string will be included in the response. Nested properties can also be requested by using a dot notation. <br /><br />Example: `fields=name,email,addresses.city`<br /><br />In the example above, the response will only include the fields "name", "email" and "addresses.city". If any other fields are available, they will be excluded.
   */
  fields?: string | null | undefined;
};

export type AccountingBankFeedStatementsOneResponse = {
  httpMeta: components.HTTPMetadata;
  /**
   * Bank Feed Statements
   */
  getBankFeedStatementResponse?:
    | components.GetBankFeedStatementResponse
    | undefined;
  /**
   * Unexpected error
   */
  unexpectedErrorResponse?: components.UnexpectedErrorResponse | undefined;
};

/** @internal */
export const AccountingBankFeedStatementsOneGlobals$inboundSchema: z.ZodType<
  AccountingBankFeedStatementsOneGlobals,
  z.ZodTypeDef,
  unknown
> = z.object({
  consumerId: z.string().optional(),
  appId: z.string().optional(),
});

/** @internal */
export type AccountingBankFeedStatementsOneGlobals$Outbound = {
  consumerId?: string | undefined;
  appId?: string | undefined;
};

/** @internal */
export const AccountingBankFeedStatementsOneGlobals$outboundSchema: z.ZodType<
  AccountingBankFeedStatementsOneGlobals$Outbound,
  z.ZodTypeDef,
  AccountingBankFeedStatementsOneGlobals
> = z.object({
  consumerId: z.string().optional(),
  appId: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AccountingBankFeedStatementsOneGlobals$ {
  /** @deprecated use `AccountingBankFeedStatementsOneGlobals$inboundSchema` instead. */
  export const inboundSchema =
    AccountingBankFeedStatementsOneGlobals$inboundSchema;
  /** @deprecated use `AccountingBankFeedStatementsOneGlobals$outboundSchema` instead. */
  export const outboundSchema =
    AccountingBankFeedStatementsOneGlobals$outboundSchema;
  /** @deprecated use `AccountingBankFeedStatementsOneGlobals$Outbound` instead. */
  export type Outbound = AccountingBankFeedStatementsOneGlobals$Outbound;
}

export function accountingBankFeedStatementsOneGlobalsToJSON(
  accountingBankFeedStatementsOneGlobals:
    AccountingBankFeedStatementsOneGlobals,
): string {
  return JSON.stringify(
    AccountingBankFeedStatementsOneGlobals$outboundSchema.parse(
      accountingBankFeedStatementsOneGlobals,
    ),
  );
}

export function accountingBankFeedStatementsOneGlobalsFromJSON(
  jsonString: string,
): SafeParseResult<AccountingBankFeedStatementsOneGlobals, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      AccountingBankFeedStatementsOneGlobals$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AccountingBankFeedStatementsOneGlobals' from JSON`,
  );
}

/** @internal */
export const AccountingBankFeedStatementsOneRequest$inboundSchema: z.ZodType<
  AccountingBankFeedStatementsOneRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
  consumerId: z.string().optional(),
  appId: z.string().optional(),
  serviceId: z.string().optional(),
  raw: z.boolean().default(false),
  fields: z.nullable(z.string()).optional(),
});

/** @internal */
export type AccountingBankFeedStatementsOneRequest$Outbound = {
  id: string;
  consumerId?: string | undefined;
  appId?: string | undefined;
  serviceId?: string | undefined;
  raw: boolean;
  fields?: string | null | undefined;
};

/** @internal */
export const AccountingBankFeedStatementsOneRequest$outboundSchema: z.ZodType<
  AccountingBankFeedStatementsOneRequest$Outbound,
  z.ZodTypeDef,
  AccountingBankFeedStatementsOneRequest
> = z.object({
  id: z.string(),
  consumerId: z.string().optional(),
  appId: z.string().optional(),
  serviceId: z.string().optional(),
  raw: z.boolean().default(false),
  fields: z.nullable(z.string()).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AccountingBankFeedStatementsOneRequest$ {
  /** @deprecated use `AccountingBankFeedStatementsOneRequest$inboundSchema` instead. */
  export const inboundSchema =
    AccountingBankFeedStatementsOneRequest$inboundSchema;
  /** @deprecated use `AccountingBankFeedStatementsOneRequest$outboundSchema` instead. */
  export const outboundSchema =
    AccountingBankFeedStatementsOneRequest$outboundSchema;
  /** @deprecated use `AccountingBankFeedStatementsOneRequest$Outbound` instead. */
  export type Outbound = AccountingBankFeedStatementsOneRequest$Outbound;
}

export function accountingBankFeedStatementsOneRequestToJSON(
  accountingBankFeedStatementsOneRequest:
    AccountingBankFeedStatementsOneRequest,
): string {
  return JSON.stringify(
    AccountingBankFeedStatementsOneRequest$outboundSchema.parse(
      accountingBankFeedStatementsOneRequest,
    ),
  );
}

export function accountingBankFeedStatementsOneRequestFromJSON(
  jsonString: string,
): SafeParseResult<AccountingBankFeedStatementsOneRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      AccountingBankFeedStatementsOneRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AccountingBankFeedStatementsOneRequest' from JSON`,
  );
}

/** @internal */
export const AccountingBankFeedStatementsOneResponse$inboundSchema: z.ZodType<
  AccountingBankFeedStatementsOneResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  HttpMeta: components.HTTPMetadata$inboundSchema,
  GetBankFeedStatementResponse: components
    .GetBankFeedStatementResponse$inboundSchema.optional(),
  UnexpectedErrorResponse: components.UnexpectedErrorResponse$inboundSchema
    .optional(),
}).transform((v) => {
  return remap$(v, {
    "HttpMeta": "httpMeta",
    "GetBankFeedStatementResponse": "getBankFeedStatementResponse",
    "UnexpectedErrorResponse": "unexpectedErrorResponse",
  });
});

/** @internal */
export type AccountingBankFeedStatementsOneResponse$Outbound = {
  HttpMeta: components.HTTPMetadata$Outbound;
  GetBankFeedStatementResponse?:
    | components.GetBankFeedStatementResponse$Outbound
    | undefined;
  UnexpectedErrorResponse?:
    | components.UnexpectedErrorResponse$Outbound
    | undefined;
};

/** @internal */
export const AccountingBankFeedStatementsOneResponse$outboundSchema: z.ZodType<
  AccountingBankFeedStatementsOneResponse$Outbound,
  z.ZodTypeDef,
  AccountingBankFeedStatementsOneResponse
> = z.object({
  httpMeta: components.HTTPMetadata$outboundSchema,
  getBankFeedStatementResponse: components
    .GetBankFeedStatementResponse$outboundSchema.optional(),
  unexpectedErrorResponse: components.UnexpectedErrorResponse$outboundSchema
    .optional(),
}).transform((v) => {
  return remap$(v, {
    httpMeta: "HttpMeta",
    getBankFeedStatementResponse: "GetBankFeedStatementResponse",
    unexpectedErrorResponse: "UnexpectedErrorResponse",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AccountingBankFeedStatementsOneResponse$ {
  /** @deprecated use `AccountingBankFeedStatementsOneResponse$inboundSchema` instead. */
  export const inboundSchema =
    AccountingBankFeedStatementsOneResponse$inboundSchema;
  /** @deprecated use `AccountingBankFeedStatementsOneResponse$outboundSchema` instead. */
  export const outboundSchema =
    AccountingBankFeedStatementsOneResponse$outboundSchema;
  /** @deprecated use `AccountingBankFeedStatementsOneResponse$Outbound` instead. */
  export type Outbound = AccountingBankFeedStatementsOneResponse$Outbound;
}

export function accountingBankFeedStatementsOneResponseToJSON(
  accountingBankFeedStatementsOneResponse:
    AccountingBankFeedStatementsOneResponse,
): string {
  return JSON.stringify(
    AccountingBankFeedStatementsOneResponse$outboundSchema.parse(
      accountingBankFeedStatementsOneResponse,
    ),
  );
}

export function accountingBankFeedStatementsOneResponseFromJSON(
  jsonString: string,
): SafeParseResult<
  AccountingBankFeedStatementsOneResponse,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      AccountingBankFeedStatementsOneResponse$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'AccountingBankFeedStatementsOneResponse' from JSON`,
  );
}

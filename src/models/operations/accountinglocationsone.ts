/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type AccountingLocationsOneGlobals = {
  /**
   * ID of the consumer which you want to get or push data from
   */
  consumerId?: string | undefined;
  /**
   * The ID of your Unify application
   */
  appId?: string | undefined;
};

export type AccountingLocationsOneRequest = {
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

export type AccountingLocationsOneResponse = {
  httpMeta: components.HTTPMetadata;
  /**
   * Location
   */
  getAccountingLocationResponse?:
    | components.GetAccountingLocationResponse
    | undefined;
  /**
   * Unexpected error
   */
  unexpectedErrorResponse?: components.UnexpectedErrorResponse | undefined;
};

/** @internal */
export const AccountingLocationsOneGlobals$inboundSchema: z.ZodType<
  AccountingLocationsOneGlobals,
  z.ZodTypeDef,
  unknown
> = z.object({
  consumerId: z.string().optional(),
  appId: z.string().optional(),
});

/** @internal */
export type AccountingLocationsOneGlobals$Outbound = {
  consumerId?: string | undefined;
  appId?: string | undefined;
};

/** @internal */
export const AccountingLocationsOneGlobals$outboundSchema: z.ZodType<
  AccountingLocationsOneGlobals$Outbound,
  z.ZodTypeDef,
  AccountingLocationsOneGlobals
> = z.object({
  consumerId: z.string().optional(),
  appId: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AccountingLocationsOneGlobals$ {
  /** @deprecated use `AccountingLocationsOneGlobals$inboundSchema` instead. */
  export const inboundSchema = AccountingLocationsOneGlobals$inboundSchema;
  /** @deprecated use `AccountingLocationsOneGlobals$outboundSchema` instead. */
  export const outboundSchema = AccountingLocationsOneGlobals$outboundSchema;
  /** @deprecated use `AccountingLocationsOneGlobals$Outbound` instead. */
  export type Outbound = AccountingLocationsOneGlobals$Outbound;
}

export function accountingLocationsOneGlobalsToJSON(
  accountingLocationsOneGlobals: AccountingLocationsOneGlobals,
): string {
  return JSON.stringify(
    AccountingLocationsOneGlobals$outboundSchema.parse(
      accountingLocationsOneGlobals,
    ),
  );
}

export function accountingLocationsOneGlobalsFromJSON(
  jsonString: string,
): SafeParseResult<AccountingLocationsOneGlobals, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => AccountingLocationsOneGlobals$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AccountingLocationsOneGlobals' from JSON`,
  );
}

/** @internal */
export const AccountingLocationsOneRequest$inboundSchema: z.ZodType<
  AccountingLocationsOneRequest,
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
export type AccountingLocationsOneRequest$Outbound = {
  id: string;
  consumerId?: string | undefined;
  appId?: string | undefined;
  serviceId?: string | undefined;
  raw: boolean;
  fields?: string | null | undefined;
};

/** @internal */
export const AccountingLocationsOneRequest$outboundSchema: z.ZodType<
  AccountingLocationsOneRequest$Outbound,
  z.ZodTypeDef,
  AccountingLocationsOneRequest
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
export namespace AccountingLocationsOneRequest$ {
  /** @deprecated use `AccountingLocationsOneRequest$inboundSchema` instead. */
  export const inboundSchema = AccountingLocationsOneRequest$inboundSchema;
  /** @deprecated use `AccountingLocationsOneRequest$outboundSchema` instead. */
  export const outboundSchema = AccountingLocationsOneRequest$outboundSchema;
  /** @deprecated use `AccountingLocationsOneRequest$Outbound` instead. */
  export type Outbound = AccountingLocationsOneRequest$Outbound;
}

export function accountingLocationsOneRequestToJSON(
  accountingLocationsOneRequest: AccountingLocationsOneRequest,
): string {
  return JSON.stringify(
    AccountingLocationsOneRequest$outboundSchema.parse(
      accountingLocationsOneRequest,
    ),
  );
}

export function accountingLocationsOneRequestFromJSON(
  jsonString: string,
): SafeParseResult<AccountingLocationsOneRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => AccountingLocationsOneRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AccountingLocationsOneRequest' from JSON`,
  );
}

/** @internal */
export const AccountingLocationsOneResponse$inboundSchema: z.ZodType<
  AccountingLocationsOneResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  HttpMeta: components.HTTPMetadata$inboundSchema,
  GetAccountingLocationResponse: components
    .GetAccountingLocationResponse$inboundSchema.optional(),
  UnexpectedErrorResponse: components.UnexpectedErrorResponse$inboundSchema
    .optional(),
}).transform((v) => {
  return remap$(v, {
    "HttpMeta": "httpMeta",
    "GetAccountingLocationResponse": "getAccountingLocationResponse",
    "UnexpectedErrorResponse": "unexpectedErrorResponse",
  });
});

/** @internal */
export type AccountingLocationsOneResponse$Outbound = {
  HttpMeta: components.HTTPMetadata$Outbound;
  GetAccountingLocationResponse?:
    | components.GetAccountingLocationResponse$Outbound
    | undefined;
  UnexpectedErrorResponse?:
    | components.UnexpectedErrorResponse$Outbound
    | undefined;
};

/** @internal */
export const AccountingLocationsOneResponse$outboundSchema: z.ZodType<
  AccountingLocationsOneResponse$Outbound,
  z.ZodTypeDef,
  AccountingLocationsOneResponse
> = z.object({
  httpMeta: components.HTTPMetadata$outboundSchema,
  getAccountingLocationResponse: components
    .GetAccountingLocationResponse$outboundSchema.optional(),
  unexpectedErrorResponse: components.UnexpectedErrorResponse$outboundSchema
    .optional(),
}).transform((v) => {
  return remap$(v, {
    httpMeta: "HttpMeta",
    getAccountingLocationResponse: "GetAccountingLocationResponse",
    unexpectedErrorResponse: "UnexpectedErrorResponse",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AccountingLocationsOneResponse$ {
  /** @deprecated use `AccountingLocationsOneResponse$inboundSchema` instead. */
  export const inboundSchema = AccountingLocationsOneResponse$inboundSchema;
  /** @deprecated use `AccountingLocationsOneResponse$outboundSchema` instead. */
  export const outboundSchema = AccountingLocationsOneResponse$outboundSchema;
  /** @deprecated use `AccountingLocationsOneResponse$Outbound` instead. */
  export type Outbound = AccountingLocationsOneResponse$Outbound;
}

export function accountingLocationsOneResponseToJSON(
  accountingLocationsOneResponse: AccountingLocationsOneResponse,
): string {
  return JSON.stringify(
    AccountingLocationsOneResponse$outboundSchema.parse(
      accountingLocationsOneResponse,
    ),
  );
}

export function accountingLocationsOneResponseFromJSON(
  jsonString: string,
): SafeParseResult<AccountingLocationsOneResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => AccountingLocationsOneResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AccountingLocationsOneResponse' from JSON`,
  );
}

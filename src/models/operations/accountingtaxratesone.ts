/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type AccountingTaxRatesOneGlobals = {
  /**
   * ID of the consumer which you want to get or push data from
   */
  consumerId?: string | undefined;
  /**
   * The ID of your Unify application
   */
  appId?: string | undefined;
};

export type AccountingTaxRatesOneRequest = {
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

export type AccountingTaxRatesOneResponse = {
  httpMeta: components.HTTPMetadata;
  /**
   * TaxRate
   */
  getTaxRateResponse?: components.GetTaxRateResponse | undefined;
  /**
   * Unexpected error
   */
  unexpectedErrorResponse?: components.UnexpectedErrorResponse | undefined;
};

/** @internal */
export const AccountingTaxRatesOneGlobals$inboundSchema: z.ZodType<
  AccountingTaxRatesOneGlobals,
  z.ZodTypeDef,
  unknown
> = z.object({
  consumerId: z.string().optional(),
  appId: z.string().optional(),
});

/** @internal */
export type AccountingTaxRatesOneGlobals$Outbound = {
  consumerId?: string | undefined;
  appId?: string | undefined;
};

/** @internal */
export const AccountingTaxRatesOneGlobals$outboundSchema: z.ZodType<
  AccountingTaxRatesOneGlobals$Outbound,
  z.ZodTypeDef,
  AccountingTaxRatesOneGlobals
> = z.object({
  consumerId: z.string().optional(),
  appId: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AccountingTaxRatesOneGlobals$ {
  /** @deprecated use `AccountingTaxRatesOneGlobals$inboundSchema` instead. */
  export const inboundSchema = AccountingTaxRatesOneGlobals$inboundSchema;
  /** @deprecated use `AccountingTaxRatesOneGlobals$outboundSchema` instead. */
  export const outboundSchema = AccountingTaxRatesOneGlobals$outboundSchema;
  /** @deprecated use `AccountingTaxRatesOneGlobals$Outbound` instead. */
  export type Outbound = AccountingTaxRatesOneGlobals$Outbound;
}

export function accountingTaxRatesOneGlobalsToJSON(
  accountingTaxRatesOneGlobals: AccountingTaxRatesOneGlobals,
): string {
  return JSON.stringify(
    AccountingTaxRatesOneGlobals$outboundSchema.parse(
      accountingTaxRatesOneGlobals,
    ),
  );
}

export function accountingTaxRatesOneGlobalsFromJSON(
  jsonString: string,
): SafeParseResult<AccountingTaxRatesOneGlobals, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => AccountingTaxRatesOneGlobals$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AccountingTaxRatesOneGlobals' from JSON`,
  );
}

/** @internal */
export const AccountingTaxRatesOneRequest$inboundSchema: z.ZodType<
  AccountingTaxRatesOneRequest,
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
export type AccountingTaxRatesOneRequest$Outbound = {
  id: string;
  consumerId?: string | undefined;
  appId?: string | undefined;
  serviceId?: string | undefined;
  raw: boolean;
  fields?: string | null | undefined;
};

/** @internal */
export const AccountingTaxRatesOneRequest$outboundSchema: z.ZodType<
  AccountingTaxRatesOneRequest$Outbound,
  z.ZodTypeDef,
  AccountingTaxRatesOneRequest
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
export namespace AccountingTaxRatesOneRequest$ {
  /** @deprecated use `AccountingTaxRatesOneRequest$inboundSchema` instead. */
  export const inboundSchema = AccountingTaxRatesOneRequest$inboundSchema;
  /** @deprecated use `AccountingTaxRatesOneRequest$outboundSchema` instead. */
  export const outboundSchema = AccountingTaxRatesOneRequest$outboundSchema;
  /** @deprecated use `AccountingTaxRatesOneRequest$Outbound` instead. */
  export type Outbound = AccountingTaxRatesOneRequest$Outbound;
}

export function accountingTaxRatesOneRequestToJSON(
  accountingTaxRatesOneRequest: AccountingTaxRatesOneRequest,
): string {
  return JSON.stringify(
    AccountingTaxRatesOneRequest$outboundSchema.parse(
      accountingTaxRatesOneRequest,
    ),
  );
}

export function accountingTaxRatesOneRequestFromJSON(
  jsonString: string,
): SafeParseResult<AccountingTaxRatesOneRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => AccountingTaxRatesOneRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AccountingTaxRatesOneRequest' from JSON`,
  );
}

/** @internal */
export const AccountingTaxRatesOneResponse$inboundSchema: z.ZodType<
  AccountingTaxRatesOneResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  HttpMeta: components.HTTPMetadata$inboundSchema,
  GetTaxRateResponse: components.GetTaxRateResponse$inboundSchema.optional(),
  UnexpectedErrorResponse: components.UnexpectedErrorResponse$inboundSchema
    .optional(),
}).transform((v) => {
  return remap$(v, {
    "HttpMeta": "httpMeta",
    "GetTaxRateResponse": "getTaxRateResponse",
    "UnexpectedErrorResponse": "unexpectedErrorResponse",
  });
});

/** @internal */
export type AccountingTaxRatesOneResponse$Outbound = {
  HttpMeta: components.HTTPMetadata$Outbound;
  GetTaxRateResponse?: components.GetTaxRateResponse$Outbound | undefined;
  UnexpectedErrorResponse?:
    | components.UnexpectedErrorResponse$Outbound
    | undefined;
};

/** @internal */
export const AccountingTaxRatesOneResponse$outboundSchema: z.ZodType<
  AccountingTaxRatesOneResponse$Outbound,
  z.ZodTypeDef,
  AccountingTaxRatesOneResponse
> = z.object({
  httpMeta: components.HTTPMetadata$outboundSchema,
  getTaxRateResponse: components.GetTaxRateResponse$outboundSchema.optional(),
  unexpectedErrorResponse: components.UnexpectedErrorResponse$outboundSchema
    .optional(),
}).transform((v) => {
  return remap$(v, {
    httpMeta: "HttpMeta",
    getTaxRateResponse: "GetTaxRateResponse",
    unexpectedErrorResponse: "UnexpectedErrorResponse",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AccountingTaxRatesOneResponse$ {
  /** @deprecated use `AccountingTaxRatesOneResponse$inboundSchema` instead. */
  export const inboundSchema = AccountingTaxRatesOneResponse$inboundSchema;
  /** @deprecated use `AccountingTaxRatesOneResponse$outboundSchema` instead. */
  export const outboundSchema = AccountingTaxRatesOneResponse$outboundSchema;
  /** @deprecated use `AccountingTaxRatesOneResponse$Outbound` instead. */
  export type Outbound = AccountingTaxRatesOneResponse$Outbound;
}

export function accountingTaxRatesOneResponseToJSON(
  accountingTaxRatesOneResponse: AccountingTaxRatesOneResponse,
): string {
  return JSON.stringify(
    AccountingTaxRatesOneResponse$outboundSchema.parse(
      accountingTaxRatesOneResponse,
    ),
  );
}

export function accountingTaxRatesOneResponseFromJSON(
  jsonString: string,
): SafeParseResult<AccountingTaxRatesOneResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => AccountingTaxRatesOneResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AccountingTaxRatesOneResponse' from JSON`,
  );
}

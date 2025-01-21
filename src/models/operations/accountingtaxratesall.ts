/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type AccountingTaxRatesAllGlobals = {
  /**
   * ID of the consumer which you want to get or push data from
   */
  consumerId?: string | undefined;
  /**
   * The ID of your Unify application
   */
  appId?: string | undefined;
};

export type AccountingTaxRatesAllRequest = {
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
   * Apply filters
   */
  filter?: components.TaxRatesFilter | undefined;
  /**
   * Optional unmapped key/values that will be passed through to downstream as query parameters. Ie: ?pass_through[search]=leads becomes ?search=leads
   */
  passThrough?: { [k: string]: any } | undefined;
  /**
   * The 'fields' parameter allows API users to specify the fields they want to include in the API response. If this parameter is not present, the API will return all available fields. If this parameter is present, only the fields specified in the comma-separated string will be included in the response. Nested properties can also be requested by using a dot notation. <br /><br />Example: `fields=name,email,addresses.city`<br /><br />In the example above, the response will only include the fields "name", "email" and "addresses.city". If any other fields are available, they will be excluded.
   */
  fields?: string | null | undefined;
};

export type AccountingTaxRatesAllResponse = {
  httpMeta: components.HTTPMetadata;
  /**
   * TaxRates
   */
  getTaxRatesResponse?: components.GetTaxRatesResponse | undefined;
  /**
   * Unexpected error
   */
  unexpectedErrorResponse?: components.UnexpectedErrorResponse | undefined;
};

/** @internal */
export const AccountingTaxRatesAllGlobals$inboundSchema: z.ZodType<
  AccountingTaxRatesAllGlobals,
  z.ZodTypeDef,
  unknown
> = z.object({
  consumerId: z.string().optional(),
  appId: z.string().optional(),
});

/** @internal */
export type AccountingTaxRatesAllGlobals$Outbound = {
  consumerId?: string | undefined;
  appId?: string | undefined;
};

/** @internal */
export const AccountingTaxRatesAllGlobals$outboundSchema: z.ZodType<
  AccountingTaxRatesAllGlobals$Outbound,
  z.ZodTypeDef,
  AccountingTaxRatesAllGlobals
> = z.object({
  consumerId: z.string().optional(),
  appId: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AccountingTaxRatesAllGlobals$ {
  /** @deprecated use `AccountingTaxRatesAllGlobals$inboundSchema` instead. */
  export const inboundSchema = AccountingTaxRatesAllGlobals$inboundSchema;
  /** @deprecated use `AccountingTaxRatesAllGlobals$outboundSchema` instead. */
  export const outboundSchema = AccountingTaxRatesAllGlobals$outboundSchema;
  /** @deprecated use `AccountingTaxRatesAllGlobals$Outbound` instead. */
  export type Outbound = AccountingTaxRatesAllGlobals$Outbound;
}

export function accountingTaxRatesAllGlobalsToJSON(
  accountingTaxRatesAllGlobals: AccountingTaxRatesAllGlobals,
): string {
  return JSON.stringify(
    AccountingTaxRatesAllGlobals$outboundSchema.parse(
      accountingTaxRatesAllGlobals,
    ),
  );
}

export function accountingTaxRatesAllGlobalsFromJSON(
  jsonString: string,
): SafeParseResult<AccountingTaxRatesAllGlobals, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => AccountingTaxRatesAllGlobals$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AccountingTaxRatesAllGlobals' from JSON`,
  );
}

/** @internal */
export const AccountingTaxRatesAllRequest$inboundSchema: z.ZodType<
  AccountingTaxRatesAllRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  raw: z.boolean().default(false),
  consumerId: z.string().optional(),
  appId: z.string().optional(),
  serviceId: z.string().optional(),
  cursor: z.nullable(z.string()).optional(),
  limit: z.number().int().default(20),
  filter: components.TaxRatesFilter$inboundSchema.optional(),
  pass_through: z.record(z.any()).optional(),
  fields: z.nullable(z.string()).optional(),
}).transform((v) => {
  return remap$(v, {
    "pass_through": "passThrough",
  });
});

/** @internal */
export type AccountingTaxRatesAllRequest$Outbound = {
  raw: boolean;
  consumerId?: string | undefined;
  appId?: string | undefined;
  serviceId?: string | undefined;
  cursor?: string | null | undefined;
  limit: number;
  filter?: components.TaxRatesFilter$Outbound | undefined;
  pass_through?: { [k: string]: any } | undefined;
  fields?: string | null | undefined;
};

/** @internal */
export const AccountingTaxRatesAllRequest$outboundSchema: z.ZodType<
  AccountingTaxRatesAllRequest$Outbound,
  z.ZodTypeDef,
  AccountingTaxRatesAllRequest
> = z.object({
  raw: z.boolean().default(false),
  consumerId: z.string().optional(),
  appId: z.string().optional(),
  serviceId: z.string().optional(),
  cursor: z.nullable(z.string()).optional(),
  limit: z.number().int().default(20),
  filter: components.TaxRatesFilter$outboundSchema.optional(),
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
export namespace AccountingTaxRatesAllRequest$ {
  /** @deprecated use `AccountingTaxRatesAllRequest$inboundSchema` instead. */
  export const inboundSchema = AccountingTaxRatesAllRequest$inboundSchema;
  /** @deprecated use `AccountingTaxRatesAllRequest$outboundSchema` instead. */
  export const outboundSchema = AccountingTaxRatesAllRequest$outboundSchema;
  /** @deprecated use `AccountingTaxRatesAllRequest$Outbound` instead. */
  export type Outbound = AccountingTaxRatesAllRequest$Outbound;
}

export function accountingTaxRatesAllRequestToJSON(
  accountingTaxRatesAllRequest: AccountingTaxRatesAllRequest,
): string {
  return JSON.stringify(
    AccountingTaxRatesAllRequest$outboundSchema.parse(
      accountingTaxRatesAllRequest,
    ),
  );
}

export function accountingTaxRatesAllRequestFromJSON(
  jsonString: string,
): SafeParseResult<AccountingTaxRatesAllRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => AccountingTaxRatesAllRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AccountingTaxRatesAllRequest' from JSON`,
  );
}

/** @internal */
export const AccountingTaxRatesAllResponse$inboundSchema: z.ZodType<
  AccountingTaxRatesAllResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  HttpMeta: components.HTTPMetadata$inboundSchema,
  GetTaxRatesResponse: components.GetTaxRatesResponse$inboundSchema.optional(),
  UnexpectedErrorResponse: components.UnexpectedErrorResponse$inboundSchema
    .optional(),
}).transform((v) => {
  return remap$(v, {
    "HttpMeta": "httpMeta",
    "GetTaxRatesResponse": "getTaxRatesResponse",
    "UnexpectedErrorResponse": "unexpectedErrorResponse",
  });
});

/** @internal */
export type AccountingTaxRatesAllResponse$Outbound = {
  HttpMeta: components.HTTPMetadata$Outbound;
  GetTaxRatesResponse?: components.GetTaxRatesResponse$Outbound | undefined;
  UnexpectedErrorResponse?:
    | components.UnexpectedErrorResponse$Outbound
    | undefined;
};

/** @internal */
export const AccountingTaxRatesAllResponse$outboundSchema: z.ZodType<
  AccountingTaxRatesAllResponse$Outbound,
  z.ZodTypeDef,
  AccountingTaxRatesAllResponse
> = z.object({
  httpMeta: components.HTTPMetadata$outboundSchema,
  getTaxRatesResponse: components.GetTaxRatesResponse$outboundSchema.optional(),
  unexpectedErrorResponse: components.UnexpectedErrorResponse$outboundSchema
    .optional(),
}).transform((v) => {
  return remap$(v, {
    httpMeta: "HttpMeta",
    getTaxRatesResponse: "GetTaxRatesResponse",
    unexpectedErrorResponse: "UnexpectedErrorResponse",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AccountingTaxRatesAllResponse$ {
  /** @deprecated use `AccountingTaxRatesAllResponse$inboundSchema` instead. */
  export const inboundSchema = AccountingTaxRatesAllResponse$inboundSchema;
  /** @deprecated use `AccountingTaxRatesAllResponse$outboundSchema` instead. */
  export const outboundSchema = AccountingTaxRatesAllResponse$outboundSchema;
  /** @deprecated use `AccountingTaxRatesAllResponse$Outbound` instead. */
  export type Outbound = AccountingTaxRatesAllResponse$Outbound;
}

export function accountingTaxRatesAllResponseToJSON(
  accountingTaxRatesAllResponse: AccountingTaxRatesAllResponse,
): string {
  return JSON.stringify(
    AccountingTaxRatesAllResponse$outboundSchema.parse(
      accountingTaxRatesAllResponse,
    ),
  );
}

export function accountingTaxRatesAllResponseFromJSON(
  jsonString: string,
): SafeParseResult<AccountingTaxRatesAllResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => AccountingTaxRatesAllResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AccountingTaxRatesAllResponse' from JSON`,
  );
}

/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type AccountingTaxRatesDeleteGlobals = {
  /**
   * ID of the consumer which you want to get or push data from
   */
  consumerId?: string | undefined;
  /**
   * The ID of your Unify application
   */
  appId?: string | undefined;
};

export type AccountingTaxRatesDeleteRequest = {
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

export type AccountingTaxRatesDeleteResponse = {
  httpMeta: components.HTTPMetadata;
  /**
   * TaxRates deleted
   */
  deleteTaxRateResponse?: components.DeleteTaxRateResponse | undefined;
  /**
   * Unexpected error
   */
  unexpectedErrorResponse?: components.UnexpectedErrorResponse | undefined;
};

/** @internal */
export const AccountingTaxRatesDeleteGlobals$inboundSchema: z.ZodType<
  AccountingTaxRatesDeleteGlobals,
  z.ZodTypeDef,
  unknown
> = z.object({
  consumerId: z.string().optional(),
  appId: z.string().optional(),
});

/** @internal */
export type AccountingTaxRatesDeleteGlobals$Outbound = {
  consumerId?: string | undefined;
  appId?: string | undefined;
};

/** @internal */
export const AccountingTaxRatesDeleteGlobals$outboundSchema: z.ZodType<
  AccountingTaxRatesDeleteGlobals$Outbound,
  z.ZodTypeDef,
  AccountingTaxRatesDeleteGlobals
> = z.object({
  consumerId: z.string().optional(),
  appId: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AccountingTaxRatesDeleteGlobals$ {
  /** @deprecated use `AccountingTaxRatesDeleteGlobals$inboundSchema` instead. */
  export const inboundSchema = AccountingTaxRatesDeleteGlobals$inboundSchema;
  /** @deprecated use `AccountingTaxRatesDeleteGlobals$outboundSchema` instead. */
  export const outboundSchema = AccountingTaxRatesDeleteGlobals$outboundSchema;
  /** @deprecated use `AccountingTaxRatesDeleteGlobals$Outbound` instead. */
  export type Outbound = AccountingTaxRatesDeleteGlobals$Outbound;
}

export function accountingTaxRatesDeleteGlobalsToJSON(
  accountingTaxRatesDeleteGlobals: AccountingTaxRatesDeleteGlobals,
): string {
  return JSON.stringify(
    AccountingTaxRatesDeleteGlobals$outboundSchema.parse(
      accountingTaxRatesDeleteGlobals,
    ),
  );
}

export function accountingTaxRatesDeleteGlobalsFromJSON(
  jsonString: string,
): SafeParseResult<AccountingTaxRatesDeleteGlobals, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => AccountingTaxRatesDeleteGlobals$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AccountingTaxRatesDeleteGlobals' from JSON`,
  );
}

/** @internal */
export const AccountingTaxRatesDeleteRequest$inboundSchema: z.ZodType<
  AccountingTaxRatesDeleteRequest,
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
export type AccountingTaxRatesDeleteRequest$Outbound = {
  id: string;
  consumerId?: string | undefined;
  appId?: string | undefined;
  serviceId?: string | undefined;
  raw: boolean;
};

/** @internal */
export const AccountingTaxRatesDeleteRequest$outboundSchema: z.ZodType<
  AccountingTaxRatesDeleteRequest$Outbound,
  z.ZodTypeDef,
  AccountingTaxRatesDeleteRequest
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
export namespace AccountingTaxRatesDeleteRequest$ {
  /** @deprecated use `AccountingTaxRatesDeleteRequest$inboundSchema` instead. */
  export const inboundSchema = AccountingTaxRatesDeleteRequest$inboundSchema;
  /** @deprecated use `AccountingTaxRatesDeleteRequest$outboundSchema` instead. */
  export const outboundSchema = AccountingTaxRatesDeleteRequest$outboundSchema;
  /** @deprecated use `AccountingTaxRatesDeleteRequest$Outbound` instead. */
  export type Outbound = AccountingTaxRatesDeleteRequest$Outbound;
}

export function accountingTaxRatesDeleteRequestToJSON(
  accountingTaxRatesDeleteRequest: AccountingTaxRatesDeleteRequest,
): string {
  return JSON.stringify(
    AccountingTaxRatesDeleteRequest$outboundSchema.parse(
      accountingTaxRatesDeleteRequest,
    ),
  );
}

export function accountingTaxRatesDeleteRequestFromJSON(
  jsonString: string,
): SafeParseResult<AccountingTaxRatesDeleteRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => AccountingTaxRatesDeleteRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AccountingTaxRatesDeleteRequest' from JSON`,
  );
}

/** @internal */
export const AccountingTaxRatesDeleteResponse$inboundSchema: z.ZodType<
  AccountingTaxRatesDeleteResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  HttpMeta: components.HTTPMetadata$inboundSchema,
  DeleteTaxRateResponse: components.DeleteTaxRateResponse$inboundSchema
    .optional(),
  UnexpectedErrorResponse: components.UnexpectedErrorResponse$inboundSchema
    .optional(),
}).transform((v) => {
  return remap$(v, {
    "HttpMeta": "httpMeta",
    "DeleteTaxRateResponse": "deleteTaxRateResponse",
    "UnexpectedErrorResponse": "unexpectedErrorResponse",
  });
});

/** @internal */
export type AccountingTaxRatesDeleteResponse$Outbound = {
  HttpMeta: components.HTTPMetadata$Outbound;
  DeleteTaxRateResponse?: components.DeleteTaxRateResponse$Outbound | undefined;
  UnexpectedErrorResponse?:
    | components.UnexpectedErrorResponse$Outbound
    | undefined;
};

/** @internal */
export const AccountingTaxRatesDeleteResponse$outboundSchema: z.ZodType<
  AccountingTaxRatesDeleteResponse$Outbound,
  z.ZodTypeDef,
  AccountingTaxRatesDeleteResponse
> = z.object({
  httpMeta: components.HTTPMetadata$outboundSchema,
  deleteTaxRateResponse: components.DeleteTaxRateResponse$outboundSchema
    .optional(),
  unexpectedErrorResponse: components.UnexpectedErrorResponse$outboundSchema
    .optional(),
}).transform((v) => {
  return remap$(v, {
    httpMeta: "HttpMeta",
    deleteTaxRateResponse: "DeleteTaxRateResponse",
    unexpectedErrorResponse: "UnexpectedErrorResponse",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AccountingTaxRatesDeleteResponse$ {
  /** @deprecated use `AccountingTaxRatesDeleteResponse$inboundSchema` instead. */
  export const inboundSchema = AccountingTaxRatesDeleteResponse$inboundSchema;
  /** @deprecated use `AccountingTaxRatesDeleteResponse$outboundSchema` instead. */
  export const outboundSchema = AccountingTaxRatesDeleteResponse$outboundSchema;
  /** @deprecated use `AccountingTaxRatesDeleteResponse$Outbound` instead. */
  export type Outbound = AccountingTaxRatesDeleteResponse$Outbound;
}

export function accountingTaxRatesDeleteResponseToJSON(
  accountingTaxRatesDeleteResponse: AccountingTaxRatesDeleteResponse,
): string {
  return JSON.stringify(
    AccountingTaxRatesDeleteResponse$outboundSchema.parse(
      accountingTaxRatesDeleteResponse,
    ),
  );
}

export function accountingTaxRatesDeleteResponseFromJSON(
  jsonString: string,
): SafeParseResult<AccountingTaxRatesDeleteResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => AccountingTaxRatesDeleteResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AccountingTaxRatesDeleteResponse' from JSON`,
  );
}

/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type AccountingCustomersDeleteGlobals = {
  /**
   * ID of the consumer which you want to get or push data from
   */
  consumerId?: string | undefined;
  /**
   * The ID of your Unify application
   */
  appId?: string | undefined;
};

export type AccountingCustomersDeleteRequest = {
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

export type AccountingCustomersDeleteResponse = {
  httpMeta: components.HTTPMetadata;
  /**
   * Customers
   */
  deleteCustomerResponse?: components.DeleteCustomerResponse | undefined;
  /**
   * Unexpected error
   */
  unexpectedErrorResponse?: components.UnexpectedErrorResponse | undefined;
};

/** @internal */
export const AccountingCustomersDeleteGlobals$inboundSchema: z.ZodType<
  AccountingCustomersDeleteGlobals,
  z.ZodTypeDef,
  unknown
> = z.object({
  consumerId: z.string().optional(),
  appId: z.string().optional(),
});

/** @internal */
export type AccountingCustomersDeleteGlobals$Outbound = {
  consumerId?: string | undefined;
  appId?: string | undefined;
};

/** @internal */
export const AccountingCustomersDeleteGlobals$outboundSchema: z.ZodType<
  AccountingCustomersDeleteGlobals$Outbound,
  z.ZodTypeDef,
  AccountingCustomersDeleteGlobals
> = z.object({
  consumerId: z.string().optional(),
  appId: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AccountingCustomersDeleteGlobals$ {
  /** @deprecated use `AccountingCustomersDeleteGlobals$inboundSchema` instead. */
  export const inboundSchema = AccountingCustomersDeleteGlobals$inboundSchema;
  /** @deprecated use `AccountingCustomersDeleteGlobals$outboundSchema` instead. */
  export const outboundSchema = AccountingCustomersDeleteGlobals$outboundSchema;
  /** @deprecated use `AccountingCustomersDeleteGlobals$Outbound` instead. */
  export type Outbound = AccountingCustomersDeleteGlobals$Outbound;
}

export function accountingCustomersDeleteGlobalsToJSON(
  accountingCustomersDeleteGlobals: AccountingCustomersDeleteGlobals,
): string {
  return JSON.stringify(
    AccountingCustomersDeleteGlobals$outboundSchema.parse(
      accountingCustomersDeleteGlobals,
    ),
  );
}

export function accountingCustomersDeleteGlobalsFromJSON(
  jsonString: string,
): SafeParseResult<AccountingCustomersDeleteGlobals, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => AccountingCustomersDeleteGlobals$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AccountingCustomersDeleteGlobals' from JSON`,
  );
}

/** @internal */
export const AccountingCustomersDeleteRequest$inboundSchema: z.ZodType<
  AccountingCustomersDeleteRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
  serviceId: z.string().optional(),
  raw: z.boolean().default(false),
});

/** @internal */
export type AccountingCustomersDeleteRequest$Outbound = {
  id: string;
  serviceId?: string | undefined;
  raw: boolean;
};

/** @internal */
export const AccountingCustomersDeleteRequest$outboundSchema: z.ZodType<
  AccountingCustomersDeleteRequest$Outbound,
  z.ZodTypeDef,
  AccountingCustomersDeleteRequest
> = z.object({
  id: z.string(),
  serviceId: z.string().optional(),
  raw: z.boolean().default(false),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AccountingCustomersDeleteRequest$ {
  /** @deprecated use `AccountingCustomersDeleteRequest$inboundSchema` instead. */
  export const inboundSchema = AccountingCustomersDeleteRequest$inboundSchema;
  /** @deprecated use `AccountingCustomersDeleteRequest$outboundSchema` instead. */
  export const outboundSchema = AccountingCustomersDeleteRequest$outboundSchema;
  /** @deprecated use `AccountingCustomersDeleteRequest$Outbound` instead. */
  export type Outbound = AccountingCustomersDeleteRequest$Outbound;
}

export function accountingCustomersDeleteRequestToJSON(
  accountingCustomersDeleteRequest: AccountingCustomersDeleteRequest,
): string {
  return JSON.stringify(
    AccountingCustomersDeleteRequest$outboundSchema.parse(
      accountingCustomersDeleteRequest,
    ),
  );
}

export function accountingCustomersDeleteRequestFromJSON(
  jsonString: string,
): SafeParseResult<AccountingCustomersDeleteRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => AccountingCustomersDeleteRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AccountingCustomersDeleteRequest' from JSON`,
  );
}

/** @internal */
export const AccountingCustomersDeleteResponse$inboundSchema: z.ZodType<
  AccountingCustomersDeleteResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  HttpMeta: components.HTTPMetadata$inboundSchema,
  DeleteCustomerResponse: components.DeleteCustomerResponse$inboundSchema
    .optional(),
  UnexpectedErrorResponse: components.UnexpectedErrorResponse$inboundSchema
    .optional(),
}).transform((v) => {
  return remap$(v, {
    "HttpMeta": "httpMeta",
    "DeleteCustomerResponse": "deleteCustomerResponse",
    "UnexpectedErrorResponse": "unexpectedErrorResponse",
  });
});

/** @internal */
export type AccountingCustomersDeleteResponse$Outbound = {
  HttpMeta: components.HTTPMetadata$Outbound;
  DeleteCustomerResponse?:
    | components.DeleteCustomerResponse$Outbound
    | undefined;
  UnexpectedErrorResponse?:
    | components.UnexpectedErrorResponse$Outbound
    | undefined;
};

/** @internal */
export const AccountingCustomersDeleteResponse$outboundSchema: z.ZodType<
  AccountingCustomersDeleteResponse$Outbound,
  z.ZodTypeDef,
  AccountingCustomersDeleteResponse
> = z.object({
  httpMeta: components.HTTPMetadata$outboundSchema,
  deleteCustomerResponse: components.DeleteCustomerResponse$outboundSchema
    .optional(),
  unexpectedErrorResponse: components.UnexpectedErrorResponse$outboundSchema
    .optional(),
}).transform((v) => {
  return remap$(v, {
    httpMeta: "HttpMeta",
    deleteCustomerResponse: "DeleteCustomerResponse",
    unexpectedErrorResponse: "UnexpectedErrorResponse",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AccountingCustomersDeleteResponse$ {
  /** @deprecated use `AccountingCustomersDeleteResponse$inboundSchema` instead. */
  export const inboundSchema = AccountingCustomersDeleteResponse$inboundSchema;
  /** @deprecated use `AccountingCustomersDeleteResponse$outboundSchema` instead. */
  export const outboundSchema =
    AccountingCustomersDeleteResponse$outboundSchema;
  /** @deprecated use `AccountingCustomersDeleteResponse$Outbound` instead. */
  export type Outbound = AccountingCustomersDeleteResponse$Outbound;
}

export function accountingCustomersDeleteResponseToJSON(
  accountingCustomersDeleteResponse: AccountingCustomersDeleteResponse,
): string {
  return JSON.stringify(
    AccountingCustomersDeleteResponse$outboundSchema.parse(
      accountingCustomersDeleteResponse,
    ),
  );
}

export function accountingCustomersDeleteResponseFromJSON(
  jsonString: string,
): SafeParseResult<AccountingCustomersDeleteResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => AccountingCustomersDeleteResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AccountingCustomersDeleteResponse' from JSON`,
  );
}

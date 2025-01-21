/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type AccountingPurchaseOrdersOneGlobals = {
  /**
   * ID of the consumer which you want to get or push data from
   */
  consumerId?: string | undefined;
  /**
   * The ID of your Unify application
   */
  appId?: string | undefined;
};

export type AccountingPurchaseOrdersOneRequest = {
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

export type AccountingPurchaseOrdersOneResponse = {
  httpMeta: components.HTTPMetadata;
  /**
   * PurchaseOrders
   */
  getPurchaseOrderResponse?: components.GetPurchaseOrderResponse | undefined;
  /**
   * Unexpected error
   */
  unexpectedErrorResponse?: components.UnexpectedErrorResponse | undefined;
};

/** @internal */
export const AccountingPurchaseOrdersOneGlobals$inboundSchema: z.ZodType<
  AccountingPurchaseOrdersOneGlobals,
  z.ZodTypeDef,
  unknown
> = z.object({
  consumerId: z.string().optional(),
  appId: z.string().optional(),
});

/** @internal */
export type AccountingPurchaseOrdersOneGlobals$Outbound = {
  consumerId?: string | undefined;
  appId?: string | undefined;
};

/** @internal */
export const AccountingPurchaseOrdersOneGlobals$outboundSchema: z.ZodType<
  AccountingPurchaseOrdersOneGlobals$Outbound,
  z.ZodTypeDef,
  AccountingPurchaseOrdersOneGlobals
> = z.object({
  consumerId: z.string().optional(),
  appId: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AccountingPurchaseOrdersOneGlobals$ {
  /** @deprecated use `AccountingPurchaseOrdersOneGlobals$inboundSchema` instead. */
  export const inboundSchema = AccountingPurchaseOrdersOneGlobals$inboundSchema;
  /** @deprecated use `AccountingPurchaseOrdersOneGlobals$outboundSchema` instead. */
  export const outboundSchema =
    AccountingPurchaseOrdersOneGlobals$outboundSchema;
  /** @deprecated use `AccountingPurchaseOrdersOneGlobals$Outbound` instead. */
  export type Outbound = AccountingPurchaseOrdersOneGlobals$Outbound;
}

export function accountingPurchaseOrdersOneGlobalsToJSON(
  accountingPurchaseOrdersOneGlobals: AccountingPurchaseOrdersOneGlobals,
): string {
  return JSON.stringify(
    AccountingPurchaseOrdersOneGlobals$outboundSchema.parse(
      accountingPurchaseOrdersOneGlobals,
    ),
  );
}

export function accountingPurchaseOrdersOneGlobalsFromJSON(
  jsonString: string,
): SafeParseResult<AccountingPurchaseOrdersOneGlobals, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      AccountingPurchaseOrdersOneGlobals$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AccountingPurchaseOrdersOneGlobals' from JSON`,
  );
}

/** @internal */
export const AccountingPurchaseOrdersOneRequest$inboundSchema: z.ZodType<
  AccountingPurchaseOrdersOneRequest,
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
export type AccountingPurchaseOrdersOneRequest$Outbound = {
  id: string;
  consumerId?: string | undefined;
  appId?: string | undefined;
  serviceId?: string | undefined;
  raw: boolean;
};

/** @internal */
export const AccountingPurchaseOrdersOneRequest$outboundSchema: z.ZodType<
  AccountingPurchaseOrdersOneRequest$Outbound,
  z.ZodTypeDef,
  AccountingPurchaseOrdersOneRequest
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
export namespace AccountingPurchaseOrdersOneRequest$ {
  /** @deprecated use `AccountingPurchaseOrdersOneRequest$inboundSchema` instead. */
  export const inboundSchema = AccountingPurchaseOrdersOneRequest$inboundSchema;
  /** @deprecated use `AccountingPurchaseOrdersOneRequest$outboundSchema` instead. */
  export const outboundSchema =
    AccountingPurchaseOrdersOneRequest$outboundSchema;
  /** @deprecated use `AccountingPurchaseOrdersOneRequest$Outbound` instead. */
  export type Outbound = AccountingPurchaseOrdersOneRequest$Outbound;
}

export function accountingPurchaseOrdersOneRequestToJSON(
  accountingPurchaseOrdersOneRequest: AccountingPurchaseOrdersOneRequest,
): string {
  return JSON.stringify(
    AccountingPurchaseOrdersOneRequest$outboundSchema.parse(
      accountingPurchaseOrdersOneRequest,
    ),
  );
}

export function accountingPurchaseOrdersOneRequestFromJSON(
  jsonString: string,
): SafeParseResult<AccountingPurchaseOrdersOneRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      AccountingPurchaseOrdersOneRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AccountingPurchaseOrdersOneRequest' from JSON`,
  );
}

/** @internal */
export const AccountingPurchaseOrdersOneResponse$inboundSchema: z.ZodType<
  AccountingPurchaseOrdersOneResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  HttpMeta: components.HTTPMetadata$inboundSchema,
  GetPurchaseOrderResponse: components.GetPurchaseOrderResponse$inboundSchema
    .optional(),
  UnexpectedErrorResponse: components.UnexpectedErrorResponse$inboundSchema
    .optional(),
}).transform((v) => {
  return remap$(v, {
    "HttpMeta": "httpMeta",
    "GetPurchaseOrderResponse": "getPurchaseOrderResponse",
    "UnexpectedErrorResponse": "unexpectedErrorResponse",
  });
});

/** @internal */
export type AccountingPurchaseOrdersOneResponse$Outbound = {
  HttpMeta: components.HTTPMetadata$Outbound;
  GetPurchaseOrderResponse?:
    | components.GetPurchaseOrderResponse$Outbound
    | undefined;
  UnexpectedErrorResponse?:
    | components.UnexpectedErrorResponse$Outbound
    | undefined;
};

/** @internal */
export const AccountingPurchaseOrdersOneResponse$outboundSchema: z.ZodType<
  AccountingPurchaseOrdersOneResponse$Outbound,
  z.ZodTypeDef,
  AccountingPurchaseOrdersOneResponse
> = z.object({
  httpMeta: components.HTTPMetadata$outboundSchema,
  getPurchaseOrderResponse: components.GetPurchaseOrderResponse$outboundSchema
    .optional(),
  unexpectedErrorResponse: components.UnexpectedErrorResponse$outboundSchema
    .optional(),
}).transform((v) => {
  return remap$(v, {
    httpMeta: "HttpMeta",
    getPurchaseOrderResponse: "GetPurchaseOrderResponse",
    unexpectedErrorResponse: "UnexpectedErrorResponse",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AccountingPurchaseOrdersOneResponse$ {
  /** @deprecated use `AccountingPurchaseOrdersOneResponse$inboundSchema` instead. */
  export const inboundSchema =
    AccountingPurchaseOrdersOneResponse$inboundSchema;
  /** @deprecated use `AccountingPurchaseOrdersOneResponse$outboundSchema` instead. */
  export const outboundSchema =
    AccountingPurchaseOrdersOneResponse$outboundSchema;
  /** @deprecated use `AccountingPurchaseOrdersOneResponse$Outbound` instead. */
  export type Outbound = AccountingPurchaseOrdersOneResponse$Outbound;
}

export function accountingPurchaseOrdersOneResponseToJSON(
  accountingPurchaseOrdersOneResponse: AccountingPurchaseOrdersOneResponse,
): string {
  return JSON.stringify(
    AccountingPurchaseOrdersOneResponse$outboundSchema.parse(
      accountingPurchaseOrdersOneResponse,
    ),
  );
}

export function accountingPurchaseOrdersOneResponseFromJSON(
  jsonString: string,
): SafeParseResult<AccountingPurchaseOrdersOneResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      AccountingPurchaseOrdersOneResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AccountingPurchaseOrdersOneResponse' from JSON`,
  );
}

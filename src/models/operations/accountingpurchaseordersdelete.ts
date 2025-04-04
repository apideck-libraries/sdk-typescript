/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type AccountingPurchaseOrdersDeleteGlobals = {
  /**
   * ID of the consumer which you want to get or push data from
   */
  consumerId?: string | undefined;
  /**
   * The ID of your Unify application
   */
  appId?: string | undefined;
};

export type AccountingPurchaseOrdersDeleteRequest = {
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

export type AccountingPurchaseOrdersDeleteResponse = {
  httpMeta: components.HTTPMetadata;
  /**
   * PurchaseOrders
   */
  deletePurchaseOrderResponse?:
    | components.DeletePurchaseOrderResponse
    | undefined;
  /**
   * Unexpected error
   */
  unexpectedErrorResponse?: components.UnexpectedErrorResponse | undefined;
};

/** @internal */
export const AccountingPurchaseOrdersDeleteGlobals$inboundSchema: z.ZodType<
  AccountingPurchaseOrdersDeleteGlobals,
  z.ZodTypeDef,
  unknown
> = z.object({
  consumerId: z.string().optional(),
  appId: z.string().optional(),
});

/** @internal */
export type AccountingPurchaseOrdersDeleteGlobals$Outbound = {
  consumerId?: string | undefined;
  appId?: string | undefined;
};

/** @internal */
export const AccountingPurchaseOrdersDeleteGlobals$outboundSchema: z.ZodType<
  AccountingPurchaseOrdersDeleteGlobals$Outbound,
  z.ZodTypeDef,
  AccountingPurchaseOrdersDeleteGlobals
> = z.object({
  consumerId: z.string().optional(),
  appId: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AccountingPurchaseOrdersDeleteGlobals$ {
  /** @deprecated use `AccountingPurchaseOrdersDeleteGlobals$inboundSchema` instead. */
  export const inboundSchema =
    AccountingPurchaseOrdersDeleteGlobals$inboundSchema;
  /** @deprecated use `AccountingPurchaseOrdersDeleteGlobals$outboundSchema` instead. */
  export const outboundSchema =
    AccountingPurchaseOrdersDeleteGlobals$outboundSchema;
  /** @deprecated use `AccountingPurchaseOrdersDeleteGlobals$Outbound` instead. */
  export type Outbound = AccountingPurchaseOrdersDeleteGlobals$Outbound;
}

export function accountingPurchaseOrdersDeleteGlobalsToJSON(
  accountingPurchaseOrdersDeleteGlobals: AccountingPurchaseOrdersDeleteGlobals,
): string {
  return JSON.stringify(
    AccountingPurchaseOrdersDeleteGlobals$outboundSchema.parse(
      accountingPurchaseOrdersDeleteGlobals,
    ),
  );
}

export function accountingPurchaseOrdersDeleteGlobalsFromJSON(
  jsonString: string,
): SafeParseResult<AccountingPurchaseOrdersDeleteGlobals, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      AccountingPurchaseOrdersDeleteGlobals$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AccountingPurchaseOrdersDeleteGlobals' from JSON`,
  );
}

/** @internal */
export const AccountingPurchaseOrdersDeleteRequest$inboundSchema: z.ZodType<
  AccountingPurchaseOrdersDeleteRequest,
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
export type AccountingPurchaseOrdersDeleteRequest$Outbound = {
  id: string;
  consumerId?: string | undefined;
  appId?: string | undefined;
  serviceId?: string | undefined;
  raw: boolean;
};

/** @internal */
export const AccountingPurchaseOrdersDeleteRequest$outboundSchema: z.ZodType<
  AccountingPurchaseOrdersDeleteRequest$Outbound,
  z.ZodTypeDef,
  AccountingPurchaseOrdersDeleteRequest
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
export namespace AccountingPurchaseOrdersDeleteRequest$ {
  /** @deprecated use `AccountingPurchaseOrdersDeleteRequest$inboundSchema` instead. */
  export const inboundSchema =
    AccountingPurchaseOrdersDeleteRequest$inboundSchema;
  /** @deprecated use `AccountingPurchaseOrdersDeleteRequest$outboundSchema` instead. */
  export const outboundSchema =
    AccountingPurchaseOrdersDeleteRequest$outboundSchema;
  /** @deprecated use `AccountingPurchaseOrdersDeleteRequest$Outbound` instead. */
  export type Outbound = AccountingPurchaseOrdersDeleteRequest$Outbound;
}

export function accountingPurchaseOrdersDeleteRequestToJSON(
  accountingPurchaseOrdersDeleteRequest: AccountingPurchaseOrdersDeleteRequest,
): string {
  return JSON.stringify(
    AccountingPurchaseOrdersDeleteRequest$outboundSchema.parse(
      accountingPurchaseOrdersDeleteRequest,
    ),
  );
}

export function accountingPurchaseOrdersDeleteRequestFromJSON(
  jsonString: string,
): SafeParseResult<AccountingPurchaseOrdersDeleteRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      AccountingPurchaseOrdersDeleteRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AccountingPurchaseOrdersDeleteRequest' from JSON`,
  );
}

/** @internal */
export const AccountingPurchaseOrdersDeleteResponse$inboundSchema: z.ZodType<
  AccountingPurchaseOrdersDeleteResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  HttpMeta: components.HTTPMetadata$inboundSchema,
  DeletePurchaseOrderResponse: components
    .DeletePurchaseOrderResponse$inboundSchema.optional(),
  UnexpectedErrorResponse: components.UnexpectedErrorResponse$inboundSchema
    .optional(),
}).transform((v) => {
  return remap$(v, {
    "HttpMeta": "httpMeta",
    "DeletePurchaseOrderResponse": "deletePurchaseOrderResponse",
    "UnexpectedErrorResponse": "unexpectedErrorResponse",
  });
});

/** @internal */
export type AccountingPurchaseOrdersDeleteResponse$Outbound = {
  HttpMeta: components.HTTPMetadata$Outbound;
  DeletePurchaseOrderResponse?:
    | components.DeletePurchaseOrderResponse$Outbound
    | undefined;
  UnexpectedErrorResponse?:
    | components.UnexpectedErrorResponse$Outbound
    | undefined;
};

/** @internal */
export const AccountingPurchaseOrdersDeleteResponse$outboundSchema: z.ZodType<
  AccountingPurchaseOrdersDeleteResponse$Outbound,
  z.ZodTypeDef,
  AccountingPurchaseOrdersDeleteResponse
> = z.object({
  httpMeta: components.HTTPMetadata$outboundSchema,
  deletePurchaseOrderResponse: components
    .DeletePurchaseOrderResponse$outboundSchema.optional(),
  unexpectedErrorResponse: components.UnexpectedErrorResponse$outboundSchema
    .optional(),
}).transform((v) => {
  return remap$(v, {
    httpMeta: "HttpMeta",
    deletePurchaseOrderResponse: "DeletePurchaseOrderResponse",
    unexpectedErrorResponse: "UnexpectedErrorResponse",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AccountingPurchaseOrdersDeleteResponse$ {
  /** @deprecated use `AccountingPurchaseOrdersDeleteResponse$inboundSchema` instead. */
  export const inboundSchema =
    AccountingPurchaseOrdersDeleteResponse$inboundSchema;
  /** @deprecated use `AccountingPurchaseOrdersDeleteResponse$outboundSchema` instead. */
  export const outboundSchema =
    AccountingPurchaseOrdersDeleteResponse$outboundSchema;
  /** @deprecated use `AccountingPurchaseOrdersDeleteResponse$Outbound` instead. */
  export type Outbound = AccountingPurchaseOrdersDeleteResponse$Outbound;
}

export function accountingPurchaseOrdersDeleteResponseToJSON(
  accountingPurchaseOrdersDeleteResponse:
    AccountingPurchaseOrdersDeleteResponse,
): string {
  return JSON.stringify(
    AccountingPurchaseOrdersDeleteResponse$outboundSchema.parse(
      accountingPurchaseOrdersDeleteResponse,
    ),
  );
}

export function accountingPurchaseOrdersDeleteResponseFromJSON(
  jsonString: string,
): SafeParseResult<AccountingPurchaseOrdersDeleteResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      AccountingPurchaseOrdersDeleteResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AccountingPurchaseOrdersDeleteResponse' from JSON`,
  );
}

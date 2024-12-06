/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type AccountingPurchaseOrdersAllGlobals = {
  /**
   * ID of the consumer which you want to get or push data from
   */
  consumerId?: string | undefined;
  /**
   * The ID of your Unify application
   */
  appId?: string | undefined;
};

export type AccountingPurchaseOrdersAllRequest = {
  /**
   * Include raw response. Mostly used for debugging purposes
   */
  raw?: boolean | undefined;
  /**
   * Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API.
   */
  serviceId?: string | undefined;
  /**
   * Cursor to start from. You can find cursors for next/previous pages in the meta.cursors property of the response.
   */
  cursor?: string | null | undefined;
  /**
   * Optional unmapped key/values that will be passed through to downstream as query parameters. Ie: ?pass_through[search]=leads becomes ?search=leads
   */
  passThrough?: { [k: string]: any } | undefined;
  /**
   * Number of results to return. Minimum 1, Maximum 200, Default 20
   */
  limit?: number | undefined;
  /**
   * Apply filters
   */
  filter?: components.PurchaseOrdersFilter | undefined;
  /**
   * Apply sorting
   */
  sort?: components.PurchaseOrdersSort | undefined;
};

export type AccountingPurchaseOrdersAllResponse = {
  httpMeta: components.HTTPMetadata;
  /**
   * PurchaseOrders
   */
  getPurchaseOrdersResponse?: components.GetPurchaseOrdersResponse | undefined;
  /**
   * Unexpected error
   */
  unexpectedErrorResponse?: components.UnexpectedErrorResponse | undefined;
};

/** @internal */
export const AccountingPurchaseOrdersAllGlobals$inboundSchema: z.ZodType<
  AccountingPurchaseOrdersAllGlobals,
  z.ZodTypeDef,
  unknown
> = z.object({
  consumerId: z.string().optional(),
  appId: z.string().optional(),
});

/** @internal */
export type AccountingPurchaseOrdersAllGlobals$Outbound = {
  consumerId?: string | undefined;
  appId?: string | undefined;
};

/** @internal */
export const AccountingPurchaseOrdersAllGlobals$outboundSchema: z.ZodType<
  AccountingPurchaseOrdersAllGlobals$Outbound,
  z.ZodTypeDef,
  AccountingPurchaseOrdersAllGlobals
> = z.object({
  consumerId: z.string().optional(),
  appId: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AccountingPurchaseOrdersAllGlobals$ {
  /** @deprecated use `AccountingPurchaseOrdersAllGlobals$inboundSchema` instead. */
  export const inboundSchema = AccountingPurchaseOrdersAllGlobals$inboundSchema;
  /** @deprecated use `AccountingPurchaseOrdersAllGlobals$outboundSchema` instead. */
  export const outboundSchema =
    AccountingPurchaseOrdersAllGlobals$outboundSchema;
  /** @deprecated use `AccountingPurchaseOrdersAllGlobals$Outbound` instead. */
  export type Outbound = AccountingPurchaseOrdersAllGlobals$Outbound;
}

export function accountingPurchaseOrdersAllGlobalsToJSON(
  accountingPurchaseOrdersAllGlobals: AccountingPurchaseOrdersAllGlobals,
): string {
  return JSON.stringify(
    AccountingPurchaseOrdersAllGlobals$outboundSchema.parse(
      accountingPurchaseOrdersAllGlobals,
    ),
  );
}

export function accountingPurchaseOrdersAllGlobalsFromJSON(
  jsonString: string,
): SafeParseResult<AccountingPurchaseOrdersAllGlobals, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      AccountingPurchaseOrdersAllGlobals$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AccountingPurchaseOrdersAllGlobals' from JSON`,
  );
}

/** @internal */
export const AccountingPurchaseOrdersAllRequest$inboundSchema: z.ZodType<
  AccountingPurchaseOrdersAllRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  raw: z.boolean().default(false),
  serviceId: z.string().optional(),
  cursor: z.nullable(z.string()).optional(),
  pass_through: z.record(z.any()).optional(),
  limit: z.number().int().default(20),
  filter: components.PurchaseOrdersFilter$inboundSchema.optional(),
  sort: components.PurchaseOrdersSort$inboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    "pass_through": "passThrough",
  });
});

/** @internal */
export type AccountingPurchaseOrdersAllRequest$Outbound = {
  raw: boolean;
  serviceId?: string | undefined;
  cursor?: string | null | undefined;
  pass_through?: { [k: string]: any } | undefined;
  limit: number;
  filter?: components.PurchaseOrdersFilter$Outbound | undefined;
  sort?: components.PurchaseOrdersSort$Outbound | undefined;
};

/** @internal */
export const AccountingPurchaseOrdersAllRequest$outboundSchema: z.ZodType<
  AccountingPurchaseOrdersAllRequest$Outbound,
  z.ZodTypeDef,
  AccountingPurchaseOrdersAllRequest
> = z.object({
  raw: z.boolean().default(false),
  serviceId: z.string().optional(),
  cursor: z.nullable(z.string()).optional(),
  passThrough: z.record(z.any()).optional(),
  limit: z.number().int().default(20),
  filter: components.PurchaseOrdersFilter$outboundSchema.optional(),
  sort: components.PurchaseOrdersSort$outboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    passThrough: "pass_through",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AccountingPurchaseOrdersAllRequest$ {
  /** @deprecated use `AccountingPurchaseOrdersAllRequest$inboundSchema` instead. */
  export const inboundSchema = AccountingPurchaseOrdersAllRequest$inboundSchema;
  /** @deprecated use `AccountingPurchaseOrdersAllRequest$outboundSchema` instead. */
  export const outboundSchema =
    AccountingPurchaseOrdersAllRequest$outboundSchema;
  /** @deprecated use `AccountingPurchaseOrdersAllRequest$Outbound` instead. */
  export type Outbound = AccountingPurchaseOrdersAllRequest$Outbound;
}

export function accountingPurchaseOrdersAllRequestToJSON(
  accountingPurchaseOrdersAllRequest: AccountingPurchaseOrdersAllRequest,
): string {
  return JSON.stringify(
    AccountingPurchaseOrdersAllRequest$outboundSchema.parse(
      accountingPurchaseOrdersAllRequest,
    ),
  );
}

export function accountingPurchaseOrdersAllRequestFromJSON(
  jsonString: string,
): SafeParseResult<AccountingPurchaseOrdersAllRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      AccountingPurchaseOrdersAllRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AccountingPurchaseOrdersAllRequest' from JSON`,
  );
}

/** @internal */
export const AccountingPurchaseOrdersAllResponse$inboundSchema: z.ZodType<
  AccountingPurchaseOrdersAllResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  HttpMeta: components.HTTPMetadata$inboundSchema,
  GetPurchaseOrdersResponse: components.GetPurchaseOrdersResponse$inboundSchema
    .optional(),
  UnexpectedErrorResponse: components.UnexpectedErrorResponse$inboundSchema
    .optional(),
}).transform((v) => {
  return remap$(v, {
    "HttpMeta": "httpMeta",
    "GetPurchaseOrdersResponse": "getPurchaseOrdersResponse",
    "UnexpectedErrorResponse": "unexpectedErrorResponse",
  });
});

/** @internal */
export type AccountingPurchaseOrdersAllResponse$Outbound = {
  HttpMeta: components.HTTPMetadata$Outbound;
  GetPurchaseOrdersResponse?:
    | components.GetPurchaseOrdersResponse$Outbound
    | undefined;
  UnexpectedErrorResponse?:
    | components.UnexpectedErrorResponse$Outbound
    | undefined;
};

/** @internal */
export const AccountingPurchaseOrdersAllResponse$outboundSchema: z.ZodType<
  AccountingPurchaseOrdersAllResponse$Outbound,
  z.ZodTypeDef,
  AccountingPurchaseOrdersAllResponse
> = z.object({
  httpMeta: components.HTTPMetadata$outboundSchema,
  getPurchaseOrdersResponse: components.GetPurchaseOrdersResponse$outboundSchema
    .optional(),
  unexpectedErrorResponse: components.UnexpectedErrorResponse$outboundSchema
    .optional(),
}).transform((v) => {
  return remap$(v, {
    httpMeta: "HttpMeta",
    getPurchaseOrdersResponse: "GetPurchaseOrdersResponse",
    unexpectedErrorResponse: "UnexpectedErrorResponse",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AccountingPurchaseOrdersAllResponse$ {
  /** @deprecated use `AccountingPurchaseOrdersAllResponse$inboundSchema` instead. */
  export const inboundSchema =
    AccountingPurchaseOrdersAllResponse$inboundSchema;
  /** @deprecated use `AccountingPurchaseOrdersAllResponse$outboundSchema` instead. */
  export const outboundSchema =
    AccountingPurchaseOrdersAllResponse$outboundSchema;
  /** @deprecated use `AccountingPurchaseOrdersAllResponse$Outbound` instead. */
  export type Outbound = AccountingPurchaseOrdersAllResponse$Outbound;
}

export function accountingPurchaseOrdersAllResponseToJSON(
  accountingPurchaseOrdersAllResponse: AccountingPurchaseOrdersAllResponse,
): string {
  return JSON.stringify(
    AccountingPurchaseOrdersAllResponse$outboundSchema.parse(
      accountingPurchaseOrdersAllResponse,
    ),
  );
}

export function accountingPurchaseOrdersAllResponseFromJSON(
  jsonString: string,
): SafeParseResult<AccountingPurchaseOrdersAllResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      AccountingPurchaseOrdersAllResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AccountingPurchaseOrdersAllResponse' from JSON`,
  );
}

/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";

export type AccountingBillsAllGlobals = {
  /**
   * ID of the consumer which you want to get or push data from
   */
  customerId?: string | undefined;
  /**
   * The ID of your Unify application
   */
  appId?: string | undefined;
};

export type AccountingBillsAllRequest = {
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
   * Number of results to return. Minimum 1, Maximum 200, Default 20
   */
  limit?: number | undefined;
  /**
   * Apply filters
   */
  filter?: components.BillsFilter | undefined;
  /**
   * Apply sorting
   */
  sort?: components.BillsSort | undefined;
  /**
   * Optional unmapped key/values that will be passed through to downstream as query parameters. Ie: ?pass_through[search]=leads becomes ?search=leads
   */
  passThrough?: { [k: string]: any } | undefined;
  /**
   * The 'fields' parameter allows API users to specify the fields they want to include in the API response. If this parameter is not present, the API will return all available fields. If this parameter is present, only the fields specified in the comma-separated string will be included in the response. Nested properties can also be requested by using a dot notation. <br /><br />Example: `fields=name,email,addresses.city`<br /><br />In the example above, the response will only include the fields "name", "email" and "addresses.city". If any other fields are available, they will be excluded.
   */
  fields?: string | null | undefined;
};

export type AccountingBillsAllResponse = {
  httpMeta: components.HTTPMetadata;
  /**
   * Bills
   */
  getBillsResponse?: components.GetBillsResponse | undefined;
  /**
   * Unexpected error
   */
  unexpectedErrorResponse?: components.UnexpectedErrorResponse | undefined;
};

/** @internal */
export const AccountingBillsAllGlobals$inboundSchema: z.ZodType<
  AccountingBillsAllGlobals,
  z.ZodTypeDef,
  unknown
> = z.object({
  customerId: z.string().optional(),
  appId: z.string().optional(),
});

/** @internal */
export type AccountingBillsAllGlobals$Outbound = {
  customerId?: string | undefined;
  appId?: string | undefined;
};

/** @internal */
export const AccountingBillsAllGlobals$outboundSchema: z.ZodType<
  AccountingBillsAllGlobals$Outbound,
  z.ZodTypeDef,
  AccountingBillsAllGlobals
> = z.object({
  customerId: z.string().optional(),
  appId: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AccountingBillsAllGlobals$ {
  /** @deprecated use `AccountingBillsAllGlobals$inboundSchema` instead. */
  export const inboundSchema = AccountingBillsAllGlobals$inboundSchema;
  /** @deprecated use `AccountingBillsAllGlobals$outboundSchema` instead. */
  export const outboundSchema = AccountingBillsAllGlobals$outboundSchema;
  /** @deprecated use `AccountingBillsAllGlobals$Outbound` instead. */
  export type Outbound = AccountingBillsAllGlobals$Outbound;
}

/** @internal */
export const AccountingBillsAllRequest$inboundSchema: z.ZodType<
  AccountingBillsAllRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  raw: z.boolean().default(false),
  serviceId: z.string().optional(),
  cursor: z.nullable(z.string()).optional(),
  limit: z.number().int().default(20),
  filter: components.BillsFilter$inboundSchema.optional(),
  sort: components.BillsSort$inboundSchema.optional(),
  pass_through: z.record(z.any()).optional(),
  fields: z.nullable(z.string()).optional(),
}).transform((v) => {
  return remap$(v, {
    "pass_through": "passThrough",
  });
});

/** @internal */
export type AccountingBillsAllRequest$Outbound = {
  raw: boolean;
  serviceId?: string | undefined;
  cursor?: string | null | undefined;
  limit: number;
  filter?: components.BillsFilter$Outbound | undefined;
  sort?: components.BillsSort$Outbound | undefined;
  pass_through?: { [k: string]: any } | undefined;
  fields?: string | null | undefined;
};

/** @internal */
export const AccountingBillsAllRequest$outboundSchema: z.ZodType<
  AccountingBillsAllRequest$Outbound,
  z.ZodTypeDef,
  AccountingBillsAllRequest
> = z.object({
  raw: z.boolean().default(false),
  serviceId: z.string().optional(),
  cursor: z.nullable(z.string()).optional(),
  limit: z.number().int().default(20),
  filter: components.BillsFilter$outboundSchema.optional(),
  sort: components.BillsSort$outboundSchema.optional(),
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
export namespace AccountingBillsAllRequest$ {
  /** @deprecated use `AccountingBillsAllRequest$inboundSchema` instead. */
  export const inboundSchema = AccountingBillsAllRequest$inboundSchema;
  /** @deprecated use `AccountingBillsAllRequest$outboundSchema` instead. */
  export const outboundSchema = AccountingBillsAllRequest$outboundSchema;
  /** @deprecated use `AccountingBillsAllRequest$Outbound` instead. */
  export type Outbound = AccountingBillsAllRequest$Outbound;
}

/** @internal */
export const AccountingBillsAllResponse$inboundSchema: z.ZodType<
  AccountingBillsAllResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  HttpMeta: components.HTTPMetadata$inboundSchema,
  GetBillsResponse: components.GetBillsResponse$inboundSchema.optional(),
  UnexpectedErrorResponse: components.UnexpectedErrorResponse$inboundSchema
    .optional(),
}).transform((v) => {
  return remap$(v, {
    "HttpMeta": "httpMeta",
    "GetBillsResponse": "getBillsResponse",
    "UnexpectedErrorResponse": "unexpectedErrorResponse",
  });
});

/** @internal */
export type AccountingBillsAllResponse$Outbound = {
  HttpMeta: components.HTTPMetadata$Outbound;
  GetBillsResponse?: components.GetBillsResponse$Outbound | undefined;
  UnexpectedErrorResponse?:
    | components.UnexpectedErrorResponse$Outbound
    | undefined;
};

/** @internal */
export const AccountingBillsAllResponse$outboundSchema: z.ZodType<
  AccountingBillsAllResponse$Outbound,
  z.ZodTypeDef,
  AccountingBillsAllResponse
> = z.object({
  httpMeta: components.HTTPMetadata$outboundSchema,
  getBillsResponse: components.GetBillsResponse$outboundSchema.optional(),
  unexpectedErrorResponse: components.UnexpectedErrorResponse$outboundSchema
    .optional(),
}).transform((v) => {
  return remap$(v, {
    httpMeta: "HttpMeta",
    getBillsResponse: "GetBillsResponse",
    unexpectedErrorResponse: "UnexpectedErrorResponse",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AccountingBillsAllResponse$ {
  /** @deprecated use `AccountingBillsAllResponse$inboundSchema` instead. */
  export const inboundSchema = AccountingBillsAllResponse$inboundSchema;
  /** @deprecated use `AccountingBillsAllResponse$outboundSchema` instead. */
  export const outboundSchema = AccountingBillsAllResponse$outboundSchema;
  /** @deprecated use `AccountingBillsAllResponse$Outbound` instead. */
  export type Outbound = AccountingBillsAllResponse$Outbound;
}

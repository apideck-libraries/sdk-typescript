/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";

export type CrmContactsAllGlobals = {
  /**
   * ID of the consumer which you want to get or push data from
   */
  customerId?: string | undefined;
  /**
   * The ID of your Unify application
   */
  appId?: string | undefined;
};

export type CrmContactsAllRequest = {
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
  filter?: components.ContactsFilter | undefined;
  /**
   * Apply sorting
   */
  sort?: components.ContactsSort | undefined;
  /**
   * Optional unmapped key/values that will be passed through to downstream as query parameters. Ie: ?pass_through[search]=leads becomes ?search=leads
   */
  passThrough?: { [k: string]: any } | undefined;
  /**
   * The 'fields' parameter allows API users to specify the fields they want to include in the API response. If this parameter is not present, the API will return all available fields. If this parameter is present, only the fields specified in the comma-separated string will be included in the response. Nested properties can also be requested by using a dot notation. <br /><br />Example: `fields=name,email,addresses.city`<br /><br />In the example above, the response will only include the fields "name", "email" and "addresses.city". If any other fields are available, they will be excluded.
   */
  fields?: string | null | undefined;
};

export type CrmContactsAllResponse =
  | components.UnexpectedErrorResponse
  | components.GetContactsResponse;

/** @internal */
export const CrmContactsAllGlobals$inboundSchema: z.ZodType<
  CrmContactsAllGlobals,
  z.ZodTypeDef,
  unknown
> = z.object({
  customerId: z.string().optional(),
  appId: z.string().optional(),
});

/** @internal */
export type CrmContactsAllGlobals$Outbound = {
  customerId?: string | undefined;
  appId?: string | undefined;
};

/** @internal */
export const CrmContactsAllGlobals$outboundSchema: z.ZodType<
  CrmContactsAllGlobals$Outbound,
  z.ZodTypeDef,
  CrmContactsAllGlobals
> = z.object({
  customerId: z.string().optional(),
  appId: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CrmContactsAllGlobals$ {
  /** @deprecated use `CrmContactsAllGlobals$inboundSchema` instead. */
  export const inboundSchema = CrmContactsAllGlobals$inboundSchema;
  /** @deprecated use `CrmContactsAllGlobals$outboundSchema` instead. */
  export const outboundSchema = CrmContactsAllGlobals$outboundSchema;
  /** @deprecated use `CrmContactsAllGlobals$Outbound` instead. */
  export type Outbound = CrmContactsAllGlobals$Outbound;
}

/** @internal */
export const CrmContactsAllRequest$inboundSchema: z.ZodType<
  CrmContactsAllRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  raw: z.boolean().default(false),
  serviceId: z.string().optional(),
  cursor: z.nullable(z.string()).optional(),
  limit: z.number().int().default(20),
  filter: components.ContactsFilter$inboundSchema.optional(),
  sort: components.ContactsSort$inboundSchema.optional(),
  pass_through: z.record(z.any()).optional(),
  fields: z.nullable(z.string()).optional(),
}).transform((v) => {
  return remap$(v, {
    "pass_through": "passThrough",
  });
});

/** @internal */
export type CrmContactsAllRequest$Outbound = {
  raw: boolean;
  serviceId?: string | undefined;
  cursor?: string | null | undefined;
  limit: number;
  filter?: components.ContactsFilter$Outbound | undefined;
  sort?: components.ContactsSort$Outbound | undefined;
  pass_through?: { [k: string]: any } | undefined;
  fields?: string | null | undefined;
};

/** @internal */
export const CrmContactsAllRequest$outboundSchema: z.ZodType<
  CrmContactsAllRequest$Outbound,
  z.ZodTypeDef,
  CrmContactsAllRequest
> = z.object({
  raw: z.boolean().default(false),
  serviceId: z.string().optional(),
  cursor: z.nullable(z.string()).optional(),
  limit: z.number().int().default(20),
  filter: components.ContactsFilter$outboundSchema.optional(),
  sort: components.ContactsSort$outboundSchema.optional(),
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
export namespace CrmContactsAllRequest$ {
  /** @deprecated use `CrmContactsAllRequest$inboundSchema` instead. */
  export const inboundSchema = CrmContactsAllRequest$inboundSchema;
  /** @deprecated use `CrmContactsAllRequest$outboundSchema` instead. */
  export const outboundSchema = CrmContactsAllRequest$outboundSchema;
  /** @deprecated use `CrmContactsAllRequest$Outbound` instead. */
  export type Outbound = CrmContactsAllRequest$Outbound;
}

/** @internal */
export const CrmContactsAllResponse$inboundSchema: z.ZodType<
  CrmContactsAllResponse,
  z.ZodTypeDef,
  unknown
> = z.union([
  components.UnexpectedErrorResponse$inboundSchema,
  components.GetContactsResponse$inboundSchema,
]);

/** @internal */
export type CrmContactsAllResponse$Outbound =
  | components.UnexpectedErrorResponse$Outbound
  | components.GetContactsResponse$Outbound;

/** @internal */
export const CrmContactsAllResponse$outboundSchema: z.ZodType<
  CrmContactsAllResponse$Outbound,
  z.ZodTypeDef,
  CrmContactsAllResponse
> = z.union([
  components.UnexpectedErrorResponse$outboundSchema,
  components.GetContactsResponse$outboundSchema,
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CrmContactsAllResponse$ {
  /** @deprecated use `CrmContactsAllResponse$inboundSchema` instead. */
  export const inboundSchema = CrmContactsAllResponse$inboundSchema;
  /** @deprecated use `CrmContactsAllResponse$outboundSchema` instead. */
  export const outboundSchema = CrmContactsAllResponse$outboundSchema;
  /** @deprecated use `CrmContactsAllResponse$Outbound` instead. */
  export type Outbound = CrmContactsAllResponse$Outbound;
}

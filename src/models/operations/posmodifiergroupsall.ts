/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";

export type PosModifierGroupsAllGlobals = {
  /**
   * ID of the consumer which you want to get or push data from
   */
  customerId?: string | undefined;
  /**
   * The ID of your Unify application
   */
  appId?: string | undefined;
};

export type PosModifierGroupsAllRequest = {
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
   * The 'fields' parameter allows API users to specify the fields they want to include in the API response. If this parameter is not present, the API will return all available fields. If this parameter is present, only the fields specified in the comma-separated string will be included in the response. Nested properties can also be requested by using a dot notation. <br /><br />Example: `fields=name,email,addresses.city`<br /><br />In the example above, the response will only include the fields "name", "email" and "addresses.city". If any other fields are available, they will be excluded.
   */
  fields?: string | null | undefined;
};

export type PosModifierGroupsAllResponse = {
  httpMeta: components.HTTPMetadata;
  /**
   * ModifierGroups
   */
  getModifierGroupsResponse?: components.GetModifierGroupsResponse | undefined;
  /**
   * Unexpected error
   */
  unexpectedErrorResponse?: components.UnexpectedErrorResponse | undefined;
};

/** @internal */
export const PosModifierGroupsAllGlobals$inboundSchema: z.ZodType<
  PosModifierGroupsAllGlobals,
  z.ZodTypeDef,
  unknown
> = z.object({
  customerId: z.string().optional(),
  appId: z.string().optional(),
});

/** @internal */
export type PosModifierGroupsAllGlobals$Outbound = {
  customerId?: string | undefined;
  appId?: string | undefined;
};

/** @internal */
export const PosModifierGroupsAllGlobals$outboundSchema: z.ZodType<
  PosModifierGroupsAllGlobals$Outbound,
  z.ZodTypeDef,
  PosModifierGroupsAllGlobals
> = z.object({
  customerId: z.string().optional(),
  appId: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PosModifierGroupsAllGlobals$ {
  /** @deprecated use `PosModifierGroupsAllGlobals$inboundSchema` instead. */
  export const inboundSchema = PosModifierGroupsAllGlobals$inboundSchema;
  /** @deprecated use `PosModifierGroupsAllGlobals$outboundSchema` instead. */
  export const outboundSchema = PosModifierGroupsAllGlobals$outboundSchema;
  /** @deprecated use `PosModifierGroupsAllGlobals$Outbound` instead. */
  export type Outbound = PosModifierGroupsAllGlobals$Outbound;
}

/** @internal */
export const PosModifierGroupsAllRequest$inboundSchema: z.ZodType<
  PosModifierGroupsAllRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  raw: z.boolean().default(false),
  serviceId: z.string().optional(),
  cursor: z.nullable(z.string()).optional(),
  limit: z.number().int().default(20),
  fields: z.nullable(z.string()).optional(),
});

/** @internal */
export type PosModifierGroupsAllRequest$Outbound = {
  raw: boolean;
  serviceId?: string | undefined;
  cursor?: string | null | undefined;
  limit: number;
  fields?: string | null | undefined;
};

/** @internal */
export const PosModifierGroupsAllRequest$outboundSchema: z.ZodType<
  PosModifierGroupsAllRequest$Outbound,
  z.ZodTypeDef,
  PosModifierGroupsAllRequest
> = z.object({
  raw: z.boolean().default(false),
  serviceId: z.string().optional(),
  cursor: z.nullable(z.string()).optional(),
  limit: z.number().int().default(20),
  fields: z.nullable(z.string()).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PosModifierGroupsAllRequest$ {
  /** @deprecated use `PosModifierGroupsAllRequest$inboundSchema` instead. */
  export const inboundSchema = PosModifierGroupsAllRequest$inboundSchema;
  /** @deprecated use `PosModifierGroupsAllRequest$outboundSchema` instead. */
  export const outboundSchema = PosModifierGroupsAllRequest$outboundSchema;
  /** @deprecated use `PosModifierGroupsAllRequest$Outbound` instead. */
  export type Outbound = PosModifierGroupsAllRequest$Outbound;
}

/** @internal */
export const PosModifierGroupsAllResponse$inboundSchema: z.ZodType<
  PosModifierGroupsAllResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  HttpMeta: components.HTTPMetadata$inboundSchema,
  GetModifierGroupsResponse: components.GetModifierGroupsResponse$inboundSchema
    .optional(),
  UnexpectedErrorResponse: components.UnexpectedErrorResponse$inboundSchema
    .optional(),
}).transform((v) => {
  return remap$(v, {
    "HttpMeta": "httpMeta",
    "GetModifierGroupsResponse": "getModifierGroupsResponse",
    "UnexpectedErrorResponse": "unexpectedErrorResponse",
  });
});

/** @internal */
export type PosModifierGroupsAllResponse$Outbound = {
  HttpMeta: components.HTTPMetadata$Outbound;
  GetModifierGroupsResponse?:
    | components.GetModifierGroupsResponse$Outbound
    | undefined;
  UnexpectedErrorResponse?:
    | components.UnexpectedErrorResponse$Outbound
    | undefined;
};

/** @internal */
export const PosModifierGroupsAllResponse$outboundSchema: z.ZodType<
  PosModifierGroupsAllResponse$Outbound,
  z.ZodTypeDef,
  PosModifierGroupsAllResponse
> = z.object({
  httpMeta: components.HTTPMetadata$outboundSchema,
  getModifierGroupsResponse: components.GetModifierGroupsResponse$outboundSchema
    .optional(),
  unexpectedErrorResponse: components.UnexpectedErrorResponse$outboundSchema
    .optional(),
}).transform((v) => {
  return remap$(v, {
    httpMeta: "HttpMeta",
    getModifierGroupsResponse: "GetModifierGroupsResponse",
    unexpectedErrorResponse: "UnexpectedErrorResponse",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PosModifierGroupsAllResponse$ {
  /** @deprecated use `PosModifierGroupsAllResponse$inboundSchema` instead. */
  export const inboundSchema = PosModifierGroupsAllResponse$inboundSchema;
  /** @deprecated use `PosModifierGroupsAllResponse$outboundSchema` instead. */
  export const outboundSchema = PosModifierGroupsAllResponse$outboundSchema;
  /** @deprecated use `PosModifierGroupsAllResponse$Outbound` instead. */
  export type Outbound = PosModifierGroupsAllResponse$Outbound;
}

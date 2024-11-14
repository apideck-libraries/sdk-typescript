/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";

export type PosTendersOneGlobals = {
  /**
   * ID of the consumer which you want to get or push data from
   */
  customerId?: string | undefined;
  /**
   * The ID of your Unify application
   */
  appId?: string | undefined;
};

export type PosTendersOneRequest = {
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
  /**
   * The 'fields' parameter allows API users to specify the fields they want to include in the API response. If this parameter is not present, the API will return all available fields. If this parameter is present, only the fields specified in the comma-separated string will be included in the response. Nested properties can also be requested by using a dot notation. <br /><br />Example: `fields=name,email,addresses.city`<br /><br />In the example above, the response will only include the fields "name", "email" and "addresses.city". If any other fields are available, they will be excluded.
   */
  fields?: string | null | undefined;
};

export type PosTendersOneResponse = {
  httpMeta: components.HTTPMetadata;
  /**
   * Tenders
   */
  getTenderResponse?: components.GetTenderResponse | undefined;
  /**
   * Unexpected error
   */
  unexpectedErrorResponse?: components.UnexpectedErrorResponse | undefined;
};

/** @internal */
export const PosTendersOneGlobals$inboundSchema: z.ZodType<
  PosTendersOneGlobals,
  z.ZodTypeDef,
  unknown
> = z.object({
  customerId: z.string().optional(),
  appId: z.string().optional(),
});

/** @internal */
export type PosTendersOneGlobals$Outbound = {
  customerId?: string | undefined;
  appId?: string | undefined;
};

/** @internal */
export const PosTendersOneGlobals$outboundSchema: z.ZodType<
  PosTendersOneGlobals$Outbound,
  z.ZodTypeDef,
  PosTendersOneGlobals
> = z.object({
  customerId: z.string().optional(),
  appId: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PosTendersOneGlobals$ {
  /** @deprecated use `PosTendersOneGlobals$inboundSchema` instead. */
  export const inboundSchema = PosTendersOneGlobals$inboundSchema;
  /** @deprecated use `PosTendersOneGlobals$outboundSchema` instead. */
  export const outboundSchema = PosTendersOneGlobals$outboundSchema;
  /** @deprecated use `PosTendersOneGlobals$Outbound` instead. */
  export type Outbound = PosTendersOneGlobals$Outbound;
}

/** @internal */
export const PosTendersOneRequest$inboundSchema: z.ZodType<
  PosTendersOneRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
  serviceId: z.string().optional(),
  raw: z.boolean().default(false),
  fields: z.nullable(z.string()).optional(),
});

/** @internal */
export type PosTendersOneRequest$Outbound = {
  id: string;
  serviceId?: string | undefined;
  raw: boolean;
  fields?: string | null | undefined;
};

/** @internal */
export const PosTendersOneRequest$outboundSchema: z.ZodType<
  PosTendersOneRequest$Outbound,
  z.ZodTypeDef,
  PosTendersOneRequest
> = z.object({
  id: z.string(),
  serviceId: z.string().optional(),
  raw: z.boolean().default(false),
  fields: z.nullable(z.string()).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PosTendersOneRequest$ {
  /** @deprecated use `PosTendersOneRequest$inboundSchema` instead. */
  export const inboundSchema = PosTendersOneRequest$inboundSchema;
  /** @deprecated use `PosTendersOneRequest$outboundSchema` instead. */
  export const outboundSchema = PosTendersOneRequest$outboundSchema;
  /** @deprecated use `PosTendersOneRequest$Outbound` instead. */
  export type Outbound = PosTendersOneRequest$Outbound;
}

/** @internal */
export const PosTendersOneResponse$inboundSchema: z.ZodType<
  PosTendersOneResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  HttpMeta: components.HTTPMetadata$inboundSchema,
  GetTenderResponse: components.GetTenderResponse$inboundSchema.optional(),
  UnexpectedErrorResponse: components.UnexpectedErrorResponse$inboundSchema
    .optional(),
}).transform((v) => {
  return remap$(v, {
    "HttpMeta": "httpMeta",
    "GetTenderResponse": "getTenderResponse",
    "UnexpectedErrorResponse": "unexpectedErrorResponse",
  });
});

/** @internal */
export type PosTendersOneResponse$Outbound = {
  HttpMeta: components.HTTPMetadata$Outbound;
  GetTenderResponse?: components.GetTenderResponse$Outbound | undefined;
  UnexpectedErrorResponse?:
    | components.UnexpectedErrorResponse$Outbound
    | undefined;
};

/** @internal */
export const PosTendersOneResponse$outboundSchema: z.ZodType<
  PosTendersOneResponse$Outbound,
  z.ZodTypeDef,
  PosTendersOneResponse
> = z.object({
  httpMeta: components.HTTPMetadata$outboundSchema,
  getTenderResponse: components.GetTenderResponse$outboundSchema.optional(),
  unexpectedErrorResponse: components.UnexpectedErrorResponse$outboundSchema
    .optional(),
}).transform((v) => {
  return remap$(v, {
    httpMeta: "HttpMeta",
    getTenderResponse: "GetTenderResponse",
    unexpectedErrorResponse: "UnexpectedErrorResponse",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PosTendersOneResponse$ {
  /** @deprecated use `PosTendersOneResponse$inboundSchema` instead. */
  export const inboundSchema = PosTendersOneResponse$inboundSchema;
  /** @deprecated use `PosTendersOneResponse$outboundSchema` instead. */
  export const outboundSchema = PosTendersOneResponse$outboundSchema;
  /** @deprecated use `PosTendersOneResponse$Outbound` instead. */
  export type Outbound = PosTendersOneResponse$Outbound;
}

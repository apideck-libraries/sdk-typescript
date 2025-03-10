/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type EcommerceStoresOneGlobals = {
  /**
   * ID of the consumer which you want to get or push data from
   */
  consumerId?: string | undefined;
  /**
   * The ID of your Unify application
   */
  appId?: string | undefined;
};

export type EcommerceStoresOneRequest = {
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
  /**
   * The 'fields' parameter allows API users to specify the fields they want to include in the API response. If this parameter is not present, the API will return all available fields. If this parameter is present, only the fields specified in the comma-separated string will be included in the response. Nested properties can also be requested by using a dot notation. <br /><br />Example: `fields=name,email,addresses.city`<br /><br />In the example above, the response will only include the fields "name", "email" and "addresses.city". If any other fields are available, they will be excluded.
   */
  fields?: string | null | undefined;
};

export type EcommerceStoresOneResponse = {
  httpMeta: components.HTTPMetadata;
  /**
   * Stores
   */
  getStoreResponse?: components.GetStoreResponse | undefined;
  /**
   * Unexpected error
   */
  unexpectedErrorResponse?: components.UnexpectedErrorResponse | undefined;
};

/** @internal */
export const EcommerceStoresOneGlobals$inboundSchema: z.ZodType<
  EcommerceStoresOneGlobals,
  z.ZodTypeDef,
  unknown
> = z.object({
  consumerId: z.string().optional(),
  appId: z.string().optional(),
});

/** @internal */
export type EcommerceStoresOneGlobals$Outbound = {
  consumerId?: string | undefined;
  appId?: string | undefined;
};

/** @internal */
export const EcommerceStoresOneGlobals$outboundSchema: z.ZodType<
  EcommerceStoresOneGlobals$Outbound,
  z.ZodTypeDef,
  EcommerceStoresOneGlobals
> = z.object({
  consumerId: z.string().optional(),
  appId: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace EcommerceStoresOneGlobals$ {
  /** @deprecated use `EcommerceStoresOneGlobals$inboundSchema` instead. */
  export const inboundSchema = EcommerceStoresOneGlobals$inboundSchema;
  /** @deprecated use `EcommerceStoresOneGlobals$outboundSchema` instead. */
  export const outboundSchema = EcommerceStoresOneGlobals$outboundSchema;
  /** @deprecated use `EcommerceStoresOneGlobals$Outbound` instead. */
  export type Outbound = EcommerceStoresOneGlobals$Outbound;
}

export function ecommerceStoresOneGlobalsToJSON(
  ecommerceStoresOneGlobals: EcommerceStoresOneGlobals,
): string {
  return JSON.stringify(
    EcommerceStoresOneGlobals$outboundSchema.parse(ecommerceStoresOneGlobals),
  );
}

export function ecommerceStoresOneGlobalsFromJSON(
  jsonString: string,
): SafeParseResult<EcommerceStoresOneGlobals, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => EcommerceStoresOneGlobals$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'EcommerceStoresOneGlobals' from JSON`,
  );
}

/** @internal */
export const EcommerceStoresOneRequest$inboundSchema: z.ZodType<
  EcommerceStoresOneRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  consumerId: z.string().optional(),
  appId: z.string().optional(),
  serviceId: z.string().optional(),
  raw: z.boolean().default(false),
  fields: z.nullable(z.string()).optional(),
});

/** @internal */
export type EcommerceStoresOneRequest$Outbound = {
  consumerId?: string | undefined;
  appId?: string | undefined;
  serviceId?: string | undefined;
  raw: boolean;
  fields?: string | null | undefined;
};

/** @internal */
export const EcommerceStoresOneRequest$outboundSchema: z.ZodType<
  EcommerceStoresOneRequest$Outbound,
  z.ZodTypeDef,
  EcommerceStoresOneRequest
> = z.object({
  consumerId: z.string().optional(),
  appId: z.string().optional(),
  serviceId: z.string().optional(),
  raw: z.boolean().default(false),
  fields: z.nullable(z.string()).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace EcommerceStoresOneRequest$ {
  /** @deprecated use `EcommerceStoresOneRequest$inboundSchema` instead. */
  export const inboundSchema = EcommerceStoresOneRequest$inboundSchema;
  /** @deprecated use `EcommerceStoresOneRequest$outboundSchema` instead. */
  export const outboundSchema = EcommerceStoresOneRequest$outboundSchema;
  /** @deprecated use `EcommerceStoresOneRequest$Outbound` instead. */
  export type Outbound = EcommerceStoresOneRequest$Outbound;
}

export function ecommerceStoresOneRequestToJSON(
  ecommerceStoresOneRequest: EcommerceStoresOneRequest,
): string {
  return JSON.stringify(
    EcommerceStoresOneRequest$outboundSchema.parse(ecommerceStoresOneRequest),
  );
}

export function ecommerceStoresOneRequestFromJSON(
  jsonString: string,
): SafeParseResult<EcommerceStoresOneRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => EcommerceStoresOneRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'EcommerceStoresOneRequest' from JSON`,
  );
}

/** @internal */
export const EcommerceStoresOneResponse$inboundSchema: z.ZodType<
  EcommerceStoresOneResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  HttpMeta: components.HTTPMetadata$inboundSchema,
  GetStoreResponse: components.GetStoreResponse$inboundSchema.optional(),
  UnexpectedErrorResponse: components.UnexpectedErrorResponse$inboundSchema
    .optional(),
}).transform((v) => {
  return remap$(v, {
    "HttpMeta": "httpMeta",
    "GetStoreResponse": "getStoreResponse",
    "UnexpectedErrorResponse": "unexpectedErrorResponse",
  });
});

/** @internal */
export type EcommerceStoresOneResponse$Outbound = {
  HttpMeta: components.HTTPMetadata$Outbound;
  GetStoreResponse?: components.GetStoreResponse$Outbound | undefined;
  UnexpectedErrorResponse?:
    | components.UnexpectedErrorResponse$Outbound
    | undefined;
};

/** @internal */
export const EcommerceStoresOneResponse$outboundSchema: z.ZodType<
  EcommerceStoresOneResponse$Outbound,
  z.ZodTypeDef,
  EcommerceStoresOneResponse
> = z.object({
  httpMeta: components.HTTPMetadata$outboundSchema,
  getStoreResponse: components.GetStoreResponse$outboundSchema.optional(),
  unexpectedErrorResponse: components.UnexpectedErrorResponse$outboundSchema
    .optional(),
}).transform((v) => {
  return remap$(v, {
    httpMeta: "HttpMeta",
    getStoreResponse: "GetStoreResponse",
    unexpectedErrorResponse: "UnexpectedErrorResponse",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace EcommerceStoresOneResponse$ {
  /** @deprecated use `EcommerceStoresOneResponse$inboundSchema` instead. */
  export const inboundSchema = EcommerceStoresOneResponse$inboundSchema;
  /** @deprecated use `EcommerceStoresOneResponse$outboundSchema` instead. */
  export const outboundSchema = EcommerceStoresOneResponse$outboundSchema;
  /** @deprecated use `EcommerceStoresOneResponse$Outbound` instead. */
  export type Outbound = EcommerceStoresOneResponse$Outbound;
}

export function ecommerceStoresOneResponseToJSON(
  ecommerceStoresOneResponse: EcommerceStoresOneResponse,
): string {
  return JSON.stringify(
    EcommerceStoresOneResponse$outboundSchema.parse(ecommerceStoresOneResponse),
  );
}

export function ecommerceStoresOneResponseFromJSON(
  jsonString: string,
): SafeParseResult<EcommerceStoresOneResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => EcommerceStoresOneResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'EcommerceStoresOneResponse' from JSON`,
  );
}

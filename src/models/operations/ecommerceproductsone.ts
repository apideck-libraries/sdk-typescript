/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type EcommerceProductsOneGlobals = {
  /**
   * ID of the consumer which you want to get or push data from
   */
  consumerId?: string | undefined;
  /**
   * The ID of your Unify application
   */
  appId?: string | undefined;
};

export type EcommerceProductsOneRequest = {
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
  /**
   * The 'fields' parameter allows API users to specify the fields they want to include in the API response. If this parameter is not present, the API will return all available fields. If this parameter is present, only the fields specified in the comma-separated string will be included in the response. Nested properties can also be requested by using a dot notation. <br /><br />Example: `fields=name,email,addresses.city`<br /><br />In the example above, the response will only include the fields "name", "email" and "addresses.city". If any other fields are available, they will be excluded.
   */
  fields?: string | null | undefined;
};

export type EcommerceProductsOneResponse = {
  httpMeta: components.HTTPMetadata;
  /**
   * Products
   */
  getProductResponse?: components.GetProductResponse | undefined;
  /**
   * Unexpected error
   */
  unexpectedErrorResponse?: components.UnexpectedErrorResponse | undefined;
};

/** @internal */
export const EcommerceProductsOneGlobals$inboundSchema: z.ZodType<
  EcommerceProductsOneGlobals,
  z.ZodTypeDef,
  unknown
> = z.object({
  consumerId: z.string().optional(),
  appId: z.string().optional(),
});

/** @internal */
export type EcommerceProductsOneGlobals$Outbound = {
  consumerId?: string | undefined;
  appId?: string | undefined;
};

/** @internal */
export const EcommerceProductsOneGlobals$outboundSchema: z.ZodType<
  EcommerceProductsOneGlobals$Outbound,
  z.ZodTypeDef,
  EcommerceProductsOneGlobals
> = z.object({
  consumerId: z.string().optional(),
  appId: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace EcommerceProductsOneGlobals$ {
  /** @deprecated use `EcommerceProductsOneGlobals$inboundSchema` instead. */
  export const inboundSchema = EcommerceProductsOneGlobals$inboundSchema;
  /** @deprecated use `EcommerceProductsOneGlobals$outboundSchema` instead. */
  export const outboundSchema = EcommerceProductsOneGlobals$outboundSchema;
  /** @deprecated use `EcommerceProductsOneGlobals$Outbound` instead. */
  export type Outbound = EcommerceProductsOneGlobals$Outbound;
}

export function ecommerceProductsOneGlobalsToJSON(
  ecommerceProductsOneGlobals: EcommerceProductsOneGlobals,
): string {
  return JSON.stringify(
    EcommerceProductsOneGlobals$outboundSchema.parse(
      ecommerceProductsOneGlobals,
    ),
  );
}

export function ecommerceProductsOneGlobalsFromJSON(
  jsonString: string,
): SafeParseResult<EcommerceProductsOneGlobals, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => EcommerceProductsOneGlobals$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'EcommerceProductsOneGlobals' from JSON`,
  );
}

/** @internal */
export const EcommerceProductsOneRequest$inboundSchema: z.ZodType<
  EcommerceProductsOneRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
  consumerId: z.string().optional(),
  appId: z.string().optional(),
  serviceId: z.string().optional(),
  raw: z.boolean().default(false),
  fields: z.nullable(z.string()).optional(),
});

/** @internal */
export type EcommerceProductsOneRequest$Outbound = {
  id: string;
  consumerId?: string | undefined;
  appId?: string | undefined;
  serviceId?: string | undefined;
  raw: boolean;
  fields?: string | null | undefined;
};

/** @internal */
export const EcommerceProductsOneRequest$outboundSchema: z.ZodType<
  EcommerceProductsOneRequest$Outbound,
  z.ZodTypeDef,
  EcommerceProductsOneRequest
> = z.object({
  id: z.string(),
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
export namespace EcommerceProductsOneRequest$ {
  /** @deprecated use `EcommerceProductsOneRequest$inboundSchema` instead. */
  export const inboundSchema = EcommerceProductsOneRequest$inboundSchema;
  /** @deprecated use `EcommerceProductsOneRequest$outboundSchema` instead. */
  export const outboundSchema = EcommerceProductsOneRequest$outboundSchema;
  /** @deprecated use `EcommerceProductsOneRequest$Outbound` instead. */
  export type Outbound = EcommerceProductsOneRequest$Outbound;
}

export function ecommerceProductsOneRequestToJSON(
  ecommerceProductsOneRequest: EcommerceProductsOneRequest,
): string {
  return JSON.stringify(
    EcommerceProductsOneRequest$outboundSchema.parse(
      ecommerceProductsOneRequest,
    ),
  );
}

export function ecommerceProductsOneRequestFromJSON(
  jsonString: string,
): SafeParseResult<EcommerceProductsOneRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => EcommerceProductsOneRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'EcommerceProductsOneRequest' from JSON`,
  );
}

/** @internal */
export const EcommerceProductsOneResponse$inboundSchema: z.ZodType<
  EcommerceProductsOneResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  HttpMeta: components.HTTPMetadata$inboundSchema,
  GetProductResponse: components.GetProductResponse$inboundSchema.optional(),
  UnexpectedErrorResponse: components.UnexpectedErrorResponse$inboundSchema
    .optional(),
}).transform((v) => {
  return remap$(v, {
    "HttpMeta": "httpMeta",
    "GetProductResponse": "getProductResponse",
    "UnexpectedErrorResponse": "unexpectedErrorResponse",
  });
});

/** @internal */
export type EcommerceProductsOneResponse$Outbound = {
  HttpMeta: components.HTTPMetadata$Outbound;
  GetProductResponse?: components.GetProductResponse$Outbound | undefined;
  UnexpectedErrorResponse?:
    | components.UnexpectedErrorResponse$Outbound
    | undefined;
};

/** @internal */
export const EcommerceProductsOneResponse$outboundSchema: z.ZodType<
  EcommerceProductsOneResponse$Outbound,
  z.ZodTypeDef,
  EcommerceProductsOneResponse
> = z.object({
  httpMeta: components.HTTPMetadata$outboundSchema,
  getProductResponse: components.GetProductResponse$outboundSchema.optional(),
  unexpectedErrorResponse: components.UnexpectedErrorResponse$outboundSchema
    .optional(),
}).transform((v) => {
  return remap$(v, {
    httpMeta: "HttpMeta",
    getProductResponse: "GetProductResponse",
    unexpectedErrorResponse: "UnexpectedErrorResponse",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace EcommerceProductsOneResponse$ {
  /** @deprecated use `EcommerceProductsOneResponse$inboundSchema` instead. */
  export const inboundSchema = EcommerceProductsOneResponse$inboundSchema;
  /** @deprecated use `EcommerceProductsOneResponse$outboundSchema` instead. */
  export const outboundSchema = EcommerceProductsOneResponse$outboundSchema;
  /** @deprecated use `EcommerceProductsOneResponse$Outbound` instead. */
  export type Outbound = EcommerceProductsOneResponse$Outbound;
}

export function ecommerceProductsOneResponseToJSON(
  ecommerceProductsOneResponse: EcommerceProductsOneResponse,
): string {
  return JSON.stringify(
    EcommerceProductsOneResponse$outboundSchema.parse(
      ecommerceProductsOneResponse,
    ),
  );
}

export function ecommerceProductsOneResponseFromJSON(
  jsonString: string,
): SafeParseResult<EcommerceProductsOneResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => EcommerceProductsOneResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'EcommerceProductsOneResponse' from JSON`,
  );
}

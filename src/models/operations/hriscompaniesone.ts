/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";

export type HrisCompaniesOneGlobals = {
  /**
   * ID of the consumer which you want to get or push data from
   */
  customerId?: string | undefined;
  /**
   * The ID of your Unify application
   */
  appId?: string | undefined;
};

export type HrisCompaniesOneRequest = {
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

export type HrisCompaniesOneResponse = {
  httpMeta: components.HTTPMetadata;
  /**
   * Company
   */
  getHrisCompanyResponse?: components.GetHrisCompanyResponse | undefined;
  /**
   * Unexpected error
   */
  unexpectedErrorResponse?: components.UnexpectedErrorResponse | undefined;
};

/** @internal */
export const HrisCompaniesOneGlobals$inboundSchema: z.ZodType<
  HrisCompaniesOneGlobals,
  z.ZodTypeDef,
  unknown
> = z.object({
  customerId: z.string().optional(),
  appId: z.string().optional(),
});

/** @internal */
export type HrisCompaniesOneGlobals$Outbound = {
  customerId?: string | undefined;
  appId?: string | undefined;
};

/** @internal */
export const HrisCompaniesOneGlobals$outboundSchema: z.ZodType<
  HrisCompaniesOneGlobals$Outbound,
  z.ZodTypeDef,
  HrisCompaniesOneGlobals
> = z.object({
  customerId: z.string().optional(),
  appId: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace HrisCompaniesOneGlobals$ {
  /** @deprecated use `HrisCompaniesOneGlobals$inboundSchema` instead. */
  export const inboundSchema = HrisCompaniesOneGlobals$inboundSchema;
  /** @deprecated use `HrisCompaniesOneGlobals$outboundSchema` instead. */
  export const outboundSchema = HrisCompaniesOneGlobals$outboundSchema;
  /** @deprecated use `HrisCompaniesOneGlobals$Outbound` instead. */
  export type Outbound = HrisCompaniesOneGlobals$Outbound;
}

/** @internal */
export const HrisCompaniesOneRequest$inboundSchema: z.ZodType<
  HrisCompaniesOneRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
  serviceId: z.string().optional(),
  raw: z.boolean().default(false),
  fields: z.nullable(z.string()).optional(),
});

/** @internal */
export type HrisCompaniesOneRequest$Outbound = {
  id: string;
  serviceId?: string | undefined;
  raw: boolean;
  fields?: string | null | undefined;
};

/** @internal */
export const HrisCompaniesOneRequest$outboundSchema: z.ZodType<
  HrisCompaniesOneRequest$Outbound,
  z.ZodTypeDef,
  HrisCompaniesOneRequest
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
export namespace HrisCompaniesOneRequest$ {
  /** @deprecated use `HrisCompaniesOneRequest$inboundSchema` instead. */
  export const inboundSchema = HrisCompaniesOneRequest$inboundSchema;
  /** @deprecated use `HrisCompaniesOneRequest$outboundSchema` instead. */
  export const outboundSchema = HrisCompaniesOneRequest$outboundSchema;
  /** @deprecated use `HrisCompaniesOneRequest$Outbound` instead. */
  export type Outbound = HrisCompaniesOneRequest$Outbound;
}

/** @internal */
export const HrisCompaniesOneResponse$inboundSchema: z.ZodType<
  HrisCompaniesOneResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  HttpMeta: components.HTTPMetadata$inboundSchema,
  GetHrisCompanyResponse: components.GetHrisCompanyResponse$inboundSchema
    .optional(),
  UnexpectedErrorResponse: components.UnexpectedErrorResponse$inboundSchema
    .optional(),
}).transform((v) => {
  return remap$(v, {
    "HttpMeta": "httpMeta",
    "GetHrisCompanyResponse": "getHrisCompanyResponse",
    "UnexpectedErrorResponse": "unexpectedErrorResponse",
  });
});

/** @internal */
export type HrisCompaniesOneResponse$Outbound = {
  HttpMeta: components.HTTPMetadata$Outbound;
  GetHrisCompanyResponse?:
    | components.GetHrisCompanyResponse$Outbound
    | undefined;
  UnexpectedErrorResponse?:
    | components.UnexpectedErrorResponse$Outbound
    | undefined;
};

/** @internal */
export const HrisCompaniesOneResponse$outboundSchema: z.ZodType<
  HrisCompaniesOneResponse$Outbound,
  z.ZodTypeDef,
  HrisCompaniesOneResponse
> = z.object({
  httpMeta: components.HTTPMetadata$outboundSchema,
  getHrisCompanyResponse: components.GetHrisCompanyResponse$outboundSchema
    .optional(),
  unexpectedErrorResponse: components.UnexpectedErrorResponse$outboundSchema
    .optional(),
}).transform((v) => {
  return remap$(v, {
    httpMeta: "HttpMeta",
    getHrisCompanyResponse: "GetHrisCompanyResponse",
    unexpectedErrorResponse: "UnexpectedErrorResponse",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace HrisCompaniesOneResponse$ {
  /** @deprecated use `HrisCompaniesOneResponse$inboundSchema` instead. */
  export const inboundSchema = HrisCompaniesOneResponse$inboundSchema;
  /** @deprecated use `HrisCompaniesOneResponse$outboundSchema` instead. */
  export const outboundSchema = HrisCompaniesOneResponse$outboundSchema;
  /** @deprecated use `HrisCompaniesOneResponse$Outbound` instead. */
  export type Outbound = HrisCompaniesOneResponse$Outbound;
}

/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";

export type HrisDepartmentsAllGlobals = {
  /**
   * ID of the consumer which you want to get or push data from
   */
  customerId?: string | undefined;
  /**
   * The ID of your Unify application
   */
  appId?: string | undefined;
};

export type HrisDepartmentsAllRequest = {
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
   * Optional unmapped key/values that will be passed through to downstream as query parameters. Ie: ?pass_through[search]=leads becomes ?search=leads
   */
  passThrough?: { [k: string]: any } | undefined;
  /**
   * The 'fields' parameter allows API users to specify the fields they want to include in the API response. If this parameter is not present, the API will return all available fields. If this parameter is present, only the fields specified in the comma-separated string will be included in the response. Nested properties can also be requested by using a dot notation. <br /><br />Example: `fields=name,email,addresses.city`<br /><br />In the example above, the response will only include the fields "name", "email" and "addresses.city". If any other fields are available, they will be excluded.
   */
  fields?: string | null | undefined;
};

export type HrisDepartmentsAllResponse = {
  httpMeta: components.HTTPMetadata;
  /**
   * Departments
   */
  getDepartmentsResponse?: components.GetDepartmentsResponse | undefined;
  /**
   * Unexpected error
   */
  unexpectedErrorResponse?: components.UnexpectedErrorResponse | undefined;
};

/** @internal */
export const HrisDepartmentsAllGlobals$inboundSchema: z.ZodType<
  HrisDepartmentsAllGlobals,
  z.ZodTypeDef,
  unknown
> = z.object({
  customerId: z.string().optional(),
  appId: z.string().optional(),
});

/** @internal */
export type HrisDepartmentsAllGlobals$Outbound = {
  customerId?: string | undefined;
  appId?: string | undefined;
};

/** @internal */
export const HrisDepartmentsAllGlobals$outboundSchema: z.ZodType<
  HrisDepartmentsAllGlobals$Outbound,
  z.ZodTypeDef,
  HrisDepartmentsAllGlobals
> = z.object({
  customerId: z.string().optional(),
  appId: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace HrisDepartmentsAllGlobals$ {
  /** @deprecated use `HrisDepartmentsAllGlobals$inboundSchema` instead. */
  export const inboundSchema = HrisDepartmentsAllGlobals$inboundSchema;
  /** @deprecated use `HrisDepartmentsAllGlobals$outboundSchema` instead. */
  export const outboundSchema = HrisDepartmentsAllGlobals$outboundSchema;
  /** @deprecated use `HrisDepartmentsAllGlobals$Outbound` instead. */
  export type Outbound = HrisDepartmentsAllGlobals$Outbound;
}

/** @internal */
export const HrisDepartmentsAllRequest$inboundSchema: z.ZodType<
  HrisDepartmentsAllRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  raw: z.boolean().default(false),
  serviceId: z.string().optional(),
  cursor: z.nullable(z.string()).optional(),
  limit: z.number().int().default(20),
  pass_through: z.record(z.any()).optional(),
  fields: z.nullable(z.string()).optional(),
}).transform((v) => {
  return remap$(v, {
    "pass_through": "passThrough",
  });
});

/** @internal */
export type HrisDepartmentsAllRequest$Outbound = {
  raw: boolean;
  serviceId?: string | undefined;
  cursor?: string | null | undefined;
  limit: number;
  pass_through?: { [k: string]: any } | undefined;
  fields?: string | null | undefined;
};

/** @internal */
export const HrisDepartmentsAllRequest$outboundSchema: z.ZodType<
  HrisDepartmentsAllRequest$Outbound,
  z.ZodTypeDef,
  HrisDepartmentsAllRequest
> = z.object({
  raw: z.boolean().default(false),
  serviceId: z.string().optional(),
  cursor: z.nullable(z.string()).optional(),
  limit: z.number().int().default(20),
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
export namespace HrisDepartmentsAllRequest$ {
  /** @deprecated use `HrisDepartmentsAllRequest$inboundSchema` instead. */
  export const inboundSchema = HrisDepartmentsAllRequest$inboundSchema;
  /** @deprecated use `HrisDepartmentsAllRequest$outboundSchema` instead. */
  export const outboundSchema = HrisDepartmentsAllRequest$outboundSchema;
  /** @deprecated use `HrisDepartmentsAllRequest$Outbound` instead. */
  export type Outbound = HrisDepartmentsAllRequest$Outbound;
}

/** @internal */
export const HrisDepartmentsAllResponse$inboundSchema: z.ZodType<
  HrisDepartmentsAllResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  HttpMeta: components.HTTPMetadata$inboundSchema,
  GetDepartmentsResponse: components.GetDepartmentsResponse$inboundSchema
    .optional(),
  UnexpectedErrorResponse: components.UnexpectedErrorResponse$inboundSchema
    .optional(),
}).transform((v) => {
  return remap$(v, {
    "HttpMeta": "httpMeta",
    "GetDepartmentsResponse": "getDepartmentsResponse",
    "UnexpectedErrorResponse": "unexpectedErrorResponse",
  });
});

/** @internal */
export type HrisDepartmentsAllResponse$Outbound = {
  HttpMeta: components.HTTPMetadata$Outbound;
  GetDepartmentsResponse?:
    | components.GetDepartmentsResponse$Outbound
    | undefined;
  UnexpectedErrorResponse?:
    | components.UnexpectedErrorResponse$Outbound
    | undefined;
};

/** @internal */
export const HrisDepartmentsAllResponse$outboundSchema: z.ZodType<
  HrisDepartmentsAllResponse$Outbound,
  z.ZodTypeDef,
  HrisDepartmentsAllResponse
> = z.object({
  httpMeta: components.HTTPMetadata$outboundSchema,
  getDepartmentsResponse: components.GetDepartmentsResponse$outboundSchema
    .optional(),
  unexpectedErrorResponse: components.UnexpectedErrorResponse$outboundSchema
    .optional(),
}).transform((v) => {
  return remap$(v, {
    httpMeta: "HttpMeta",
    getDepartmentsResponse: "GetDepartmentsResponse",
    unexpectedErrorResponse: "UnexpectedErrorResponse",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace HrisDepartmentsAllResponse$ {
  /** @deprecated use `HrisDepartmentsAllResponse$inboundSchema` instead. */
  export const inboundSchema = HrisDepartmentsAllResponse$inboundSchema;
  /** @deprecated use `HrisDepartmentsAllResponse$outboundSchema` instead. */
  export const outboundSchema = HrisDepartmentsAllResponse$outboundSchema;
  /** @deprecated use `HrisDepartmentsAllResponse$Outbound` instead. */
  export type Outbound = HrisDepartmentsAllResponse$Outbound;
}

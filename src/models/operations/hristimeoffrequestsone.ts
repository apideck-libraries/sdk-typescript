/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";

export type HrisTimeOffRequestsOneGlobals = {
  /**
   * ID of the consumer which you want to get or push data from
   */
  customerId?: string | undefined;
  /**
   * The ID of your Unify application
   */
  appId?: string | undefined;
};

export type HrisTimeOffRequestsOneRequest = {
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
  /**
   * ID of the employee you are acting upon.
   */
  employeeId: string;
};

export type HrisTimeOffRequestsOneResponse = {
  httpMeta: components.HTTPMetadata;
  /**
   * TimeOffRequests
   */
  getTimeOffRequestResponse?: components.GetTimeOffRequestResponse | undefined;
  /**
   * Unexpected error
   */
  unexpectedErrorResponse?: components.UnexpectedErrorResponse | undefined;
};

/** @internal */
export const HrisTimeOffRequestsOneGlobals$inboundSchema: z.ZodType<
  HrisTimeOffRequestsOneGlobals,
  z.ZodTypeDef,
  unknown
> = z.object({
  customerId: z.string().optional(),
  appId: z.string().optional(),
});

/** @internal */
export type HrisTimeOffRequestsOneGlobals$Outbound = {
  customerId?: string | undefined;
  appId?: string | undefined;
};

/** @internal */
export const HrisTimeOffRequestsOneGlobals$outboundSchema: z.ZodType<
  HrisTimeOffRequestsOneGlobals$Outbound,
  z.ZodTypeDef,
  HrisTimeOffRequestsOneGlobals
> = z.object({
  customerId: z.string().optional(),
  appId: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace HrisTimeOffRequestsOneGlobals$ {
  /** @deprecated use `HrisTimeOffRequestsOneGlobals$inboundSchema` instead. */
  export const inboundSchema = HrisTimeOffRequestsOneGlobals$inboundSchema;
  /** @deprecated use `HrisTimeOffRequestsOneGlobals$outboundSchema` instead. */
  export const outboundSchema = HrisTimeOffRequestsOneGlobals$outboundSchema;
  /** @deprecated use `HrisTimeOffRequestsOneGlobals$Outbound` instead. */
  export type Outbound = HrisTimeOffRequestsOneGlobals$Outbound;
}

/** @internal */
export const HrisTimeOffRequestsOneRequest$inboundSchema: z.ZodType<
  HrisTimeOffRequestsOneRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
  serviceId: z.string().optional(),
  raw: z.boolean().default(false),
  fields: z.nullable(z.string()).optional(),
  employee_id: z.string(),
}).transform((v) => {
  return remap$(v, {
    "employee_id": "employeeId",
  });
});

/** @internal */
export type HrisTimeOffRequestsOneRequest$Outbound = {
  id: string;
  serviceId?: string | undefined;
  raw: boolean;
  fields?: string | null | undefined;
  employee_id: string;
};

/** @internal */
export const HrisTimeOffRequestsOneRequest$outboundSchema: z.ZodType<
  HrisTimeOffRequestsOneRequest$Outbound,
  z.ZodTypeDef,
  HrisTimeOffRequestsOneRequest
> = z.object({
  id: z.string(),
  serviceId: z.string().optional(),
  raw: z.boolean().default(false),
  fields: z.nullable(z.string()).optional(),
  employeeId: z.string(),
}).transform((v) => {
  return remap$(v, {
    employeeId: "employee_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace HrisTimeOffRequestsOneRequest$ {
  /** @deprecated use `HrisTimeOffRequestsOneRequest$inboundSchema` instead. */
  export const inboundSchema = HrisTimeOffRequestsOneRequest$inboundSchema;
  /** @deprecated use `HrisTimeOffRequestsOneRequest$outboundSchema` instead. */
  export const outboundSchema = HrisTimeOffRequestsOneRequest$outboundSchema;
  /** @deprecated use `HrisTimeOffRequestsOneRequest$Outbound` instead. */
  export type Outbound = HrisTimeOffRequestsOneRequest$Outbound;
}

/** @internal */
export const HrisTimeOffRequestsOneResponse$inboundSchema: z.ZodType<
  HrisTimeOffRequestsOneResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  HttpMeta: components.HTTPMetadata$inboundSchema,
  GetTimeOffRequestResponse: components.GetTimeOffRequestResponse$inboundSchema
    .optional(),
  UnexpectedErrorResponse: components.UnexpectedErrorResponse$inboundSchema
    .optional(),
}).transform((v) => {
  return remap$(v, {
    "HttpMeta": "httpMeta",
    "GetTimeOffRequestResponse": "getTimeOffRequestResponse",
    "UnexpectedErrorResponse": "unexpectedErrorResponse",
  });
});

/** @internal */
export type HrisTimeOffRequestsOneResponse$Outbound = {
  HttpMeta: components.HTTPMetadata$Outbound;
  GetTimeOffRequestResponse?:
    | components.GetTimeOffRequestResponse$Outbound
    | undefined;
  UnexpectedErrorResponse?:
    | components.UnexpectedErrorResponse$Outbound
    | undefined;
};

/** @internal */
export const HrisTimeOffRequestsOneResponse$outboundSchema: z.ZodType<
  HrisTimeOffRequestsOneResponse$Outbound,
  z.ZodTypeDef,
  HrisTimeOffRequestsOneResponse
> = z.object({
  httpMeta: components.HTTPMetadata$outboundSchema,
  getTimeOffRequestResponse: components.GetTimeOffRequestResponse$outboundSchema
    .optional(),
  unexpectedErrorResponse: components.UnexpectedErrorResponse$outboundSchema
    .optional(),
}).transform((v) => {
  return remap$(v, {
    httpMeta: "HttpMeta",
    getTimeOffRequestResponse: "GetTimeOffRequestResponse",
    unexpectedErrorResponse: "UnexpectedErrorResponse",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace HrisTimeOffRequestsOneResponse$ {
  /** @deprecated use `HrisTimeOffRequestsOneResponse$inboundSchema` instead. */
  export const inboundSchema = HrisTimeOffRequestsOneResponse$inboundSchema;
  /** @deprecated use `HrisTimeOffRequestsOneResponse$outboundSchema` instead. */
  export const outboundSchema = HrisTimeOffRequestsOneResponse$outboundSchema;
  /** @deprecated use `HrisTimeOffRequestsOneResponse$Outbound` instead. */
  export type Outbound = HrisTimeOffRequestsOneResponse$Outbound;
}

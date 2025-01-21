/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type HrisEmployeePayrollsAllGlobals = {
  /**
   * ID of the consumer which you want to get or push data from
   */
  consumerId?: string | undefined;
  /**
   * The ID of your Unify application
   */
  appId?: string | undefined;
};

export type HrisEmployeePayrollsAllRequest = {
  /**
   * ID of the employee you are acting upon.
   */
  employeeId: string;
  /**
   * Include raw response. Mostly used for debugging purposes
   */
  raw?: boolean | undefined;
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
   * Apply filters
   */
  filter?: components.PayrollsFilter | undefined;
  /**
   * Optional unmapped key/values that will be passed through to downstream as query parameters. Ie: ?pass_through[search]=leads becomes ?search=leads
   */
  passThrough?: { [k: string]: any } | undefined;
  /**
   * The 'fields' parameter allows API users to specify the fields they want to include in the API response. If this parameter is not present, the API will return all available fields. If this parameter is present, only the fields specified in the comma-separated string will be included in the response. Nested properties can also be requested by using a dot notation. <br /><br />Example: `fields=name,email,addresses.city`<br /><br />In the example above, the response will only include the fields "name", "email" and "addresses.city". If any other fields are available, they will be excluded.
   */
  fields?: string | null | undefined;
};

export type HrisEmployeePayrollsAllResponse = {
  httpMeta: components.HTTPMetadata;
  /**
   * EmployeePayrolls
   */
  getEmployeePayrollsResponse?:
    | components.GetEmployeePayrollsResponse
    | undefined;
  /**
   * Unexpected error
   */
  unexpectedErrorResponse?: components.UnexpectedErrorResponse | undefined;
};

/** @internal */
export const HrisEmployeePayrollsAllGlobals$inboundSchema: z.ZodType<
  HrisEmployeePayrollsAllGlobals,
  z.ZodTypeDef,
  unknown
> = z.object({
  consumerId: z.string().optional(),
  appId: z.string().optional(),
});

/** @internal */
export type HrisEmployeePayrollsAllGlobals$Outbound = {
  consumerId?: string | undefined;
  appId?: string | undefined;
};

/** @internal */
export const HrisEmployeePayrollsAllGlobals$outboundSchema: z.ZodType<
  HrisEmployeePayrollsAllGlobals$Outbound,
  z.ZodTypeDef,
  HrisEmployeePayrollsAllGlobals
> = z.object({
  consumerId: z.string().optional(),
  appId: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace HrisEmployeePayrollsAllGlobals$ {
  /** @deprecated use `HrisEmployeePayrollsAllGlobals$inboundSchema` instead. */
  export const inboundSchema = HrisEmployeePayrollsAllGlobals$inboundSchema;
  /** @deprecated use `HrisEmployeePayrollsAllGlobals$outboundSchema` instead. */
  export const outboundSchema = HrisEmployeePayrollsAllGlobals$outboundSchema;
  /** @deprecated use `HrisEmployeePayrollsAllGlobals$Outbound` instead. */
  export type Outbound = HrisEmployeePayrollsAllGlobals$Outbound;
}

export function hrisEmployeePayrollsAllGlobalsToJSON(
  hrisEmployeePayrollsAllGlobals: HrisEmployeePayrollsAllGlobals,
): string {
  return JSON.stringify(
    HrisEmployeePayrollsAllGlobals$outboundSchema.parse(
      hrisEmployeePayrollsAllGlobals,
    ),
  );
}

export function hrisEmployeePayrollsAllGlobalsFromJSON(
  jsonString: string,
): SafeParseResult<HrisEmployeePayrollsAllGlobals, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => HrisEmployeePayrollsAllGlobals$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'HrisEmployeePayrollsAllGlobals' from JSON`,
  );
}

/** @internal */
export const HrisEmployeePayrollsAllRequest$inboundSchema: z.ZodType<
  HrisEmployeePayrollsAllRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  employee_id: z.string(),
  raw: z.boolean().default(false),
  consumerId: z.string().optional(),
  appId: z.string().optional(),
  serviceId: z.string().optional(),
  filter: components.PayrollsFilter$inboundSchema.optional(),
  pass_through: z.record(z.any()).optional(),
  fields: z.nullable(z.string()).optional(),
}).transform((v) => {
  return remap$(v, {
    "employee_id": "employeeId",
    "pass_through": "passThrough",
  });
});

/** @internal */
export type HrisEmployeePayrollsAllRequest$Outbound = {
  employee_id: string;
  raw: boolean;
  consumerId?: string | undefined;
  appId?: string | undefined;
  serviceId?: string | undefined;
  filter?: components.PayrollsFilter$Outbound | undefined;
  pass_through?: { [k: string]: any } | undefined;
  fields?: string | null | undefined;
};

/** @internal */
export const HrisEmployeePayrollsAllRequest$outboundSchema: z.ZodType<
  HrisEmployeePayrollsAllRequest$Outbound,
  z.ZodTypeDef,
  HrisEmployeePayrollsAllRequest
> = z.object({
  employeeId: z.string(),
  raw: z.boolean().default(false),
  consumerId: z.string().optional(),
  appId: z.string().optional(),
  serviceId: z.string().optional(),
  filter: components.PayrollsFilter$outboundSchema.optional(),
  passThrough: z.record(z.any()).optional(),
  fields: z.nullable(z.string()).optional(),
}).transform((v) => {
  return remap$(v, {
    employeeId: "employee_id",
    passThrough: "pass_through",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace HrisEmployeePayrollsAllRequest$ {
  /** @deprecated use `HrisEmployeePayrollsAllRequest$inboundSchema` instead. */
  export const inboundSchema = HrisEmployeePayrollsAllRequest$inboundSchema;
  /** @deprecated use `HrisEmployeePayrollsAllRequest$outboundSchema` instead. */
  export const outboundSchema = HrisEmployeePayrollsAllRequest$outboundSchema;
  /** @deprecated use `HrisEmployeePayrollsAllRequest$Outbound` instead. */
  export type Outbound = HrisEmployeePayrollsAllRequest$Outbound;
}

export function hrisEmployeePayrollsAllRequestToJSON(
  hrisEmployeePayrollsAllRequest: HrisEmployeePayrollsAllRequest,
): string {
  return JSON.stringify(
    HrisEmployeePayrollsAllRequest$outboundSchema.parse(
      hrisEmployeePayrollsAllRequest,
    ),
  );
}

export function hrisEmployeePayrollsAllRequestFromJSON(
  jsonString: string,
): SafeParseResult<HrisEmployeePayrollsAllRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => HrisEmployeePayrollsAllRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'HrisEmployeePayrollsAllRequest' from JSON`,
  );
}

/** @internal */
export const HrisEmployeePayrollsAllResponse$inboundSchema: z.ZodType<
  HrisEmployeePayrollsAllResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  HttpMeta: components.HTTPMetadata$inboundSchema,
  GetEmployeePayrollsResponse: components
    .GetEmployeePayrollsResponse$inboundSchema.optional(),
  UnexpectedErrorResponse: components.UnexpectedErrorResponse$inboundSchema
    .optional(),
}).transform((v) => {
  return remap$(v, {
    "HttpMeta": "httpMeta",
    "GetEmployeePayrollsResponse": "getEmployeePayrollsResponse",
    "UnexpectedErrorResponse": "unexpectedErrorResponse",
  });
});

/** @internal */
export type HrisEmployeePayrollsAllResponse$Outbound = {
  HttpMeta: components.HTTPMetadata$Outbound;
  GetEmployeePayrollsResponse?:
    | components.GetEmployeePayrollsResponse$Outbound
    | undefined;
  UnexpectedErrorResponse?:
    | components.UnexpectedErrorResponse$Outbound
    | undefined;
};

/** @internal */
export const HrisEmployeePayrollsAllResponse$outboundSchema: z.ZodType<
  HrisEmployeePayrollsAllResponse$Outbound,
  z.ZodTypeDef,
  HrisEmployeePayrollsAllResponse
> = z.object({
  httpMeta: components.HTTPMetadata$outboundSchema,
  getEmployeePayrollsResponse: components
    .GetEmployeePayrollsResponse$outboundSchema.optional(),
  unexpectedErrorResponse: components.UnexpectedErrorResponse$outboundSchema
    .optional(),
}).transform((v) => {
  return remap$(v, {
    httpMeta: "HttpMeta",
    getEmployeePayrollsResponse: "GetEmployeePayrollsResponse",
    unexpectedErrorResponse: "UnexpectedErrorResponse",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace HrisEmployeePayrollsAllResponse$ {
  /** @deprecated use `HrisEmployeePayrollsAllResponse$inboundSchema` instead. */
  export const inboundSchema = HrisEmployeePayrollsAllResponse$inboundSchema;
  /** @deprecated use `HrisEmployeePayrollsAllResponse$outboundSchema` instead. */
  export const outboundSchema = HrisEmployeePayrollsAllResponse$outboundSchema;
  /** @deprecated use `HrisEmployeePayrollsAllResponse$Outbound` instead. */
  export type Outbound = HrisEmployeePayrollsAllResponse$Outbound;
}

export function hrisEmployeePayrollsAllResponseToJSON(
  hrisEmployeePayrollsAllResponse: HrisEmployeePayrollsAllResponse,
): string {
  return JSON.stringify(
    HrisEmployeePayrollsAllResponse$outboundSchema.parse(
      hrisEmployeePayrollsAllResponse,
    ),
  );
}

export function hrisEmployeePayrollsAllResponseFromJSON(
  jsonString: string,
): SafeParseResult<HrisEmployeePayrollsAllResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => HrisEmployeePayrollsAllResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'HrisEmployeePayrollsAllResponse' from JSON`,
  );
}

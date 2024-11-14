/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";

export type HrisEmployeePayrollsOneGlobals = {
  /**
   * ID of the consumer which you want to get or push data from
   */
  customerId?: string | undefined;
  /**
   * The ID of your Unify application
   */
  appId?: string | undefined;
};

export type HrisEmployeePayrollsOneRequest = {
  /**
   * ID of the payroll you are acting upon.
   */
  payrollId: string;
  /**
   * ID of the employee you are acting upon.
   */
  employeeId: string;
  /**
   * Include raw response. Mostly used for debugging purposes
   */
  raw?: boolean | undefined;
  /**
   * Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API.
   */
  serviceId?: string | undefined;
  /**
   * The 'fields' parameter allows API users to specify the fields they want to include in the API response. If this parameter is not present, the API will return all available fields. If this parameter is present, only the fields specified in the comma-separated string will be included in the response. Nested properties can also be requested by using a dot notation. <br /><br />Example: `fields=name,email,addresses.city`<br /><br />In the example above, the response will only include the fields "name", "email" and "addresses.city". If any other fields are available, they will be excluded.
   */
  fields?: string | null | undefined;
};

export type HrisEmployeePayrollsOneResponse = {
  httpMeta: components.HTTPMetadata;
  /**
   * Payrolls
   */
  getEmployeePayrollResponse?:
    | components.GetEmployeePayrollResponse
    | undefined;
  /**
   * Unexpected error
   */
  unexpectedErrorResponse?: components.UnexpectedErrorResponse | undefined;
};

/** @internal */
export const HrisEmployeePayrollsOneGlobals$inboundSchema: z.ZodType<
  HrisEmployeePayrollsOneGlobals,
  z.ZodTypeDef,
  unknown
> = z.object({
  customerId: z.string().optional(),
  appId: z.string().optional(),
});

/** @internal */
export type HrisEmployeePayrollsOneGlobals$Outbound = {
  customerId?: string | undefined;
  appId?: string | undefined;
};

/** @internal */
export const HrisEmployeePayrollsOneGlobals$outboundSchema: z.ZodType<
  HrisEmployeePayrollsOneGlobals$Outbound,
  z.ZodTypeDef,
  HrisEmployeePayrollsOneGlobals
> = z.object({
  customerId: z.string().optional(),
  appId: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace HrisEmployeePayrollsOneGlobals$ {
  /** @deprecated use `HrisEmployeePayrollsOneGlobals$inboundSchema` instead. */
  export const inboundSchema = HrisEmployeePayrollsOneGlobals$inboundSchema;
  /** @deprecated use `HrisEmployeePayrollsOneGlobals$outboundSchema` instead. */
  export const outboundSchema = HrisEmployeePayrollsOneGlobals$outboundSchema;
  /** @deprecated use `HrisEmployeePayrollsOneGlobals$Outbound` instead. */
  export type Outbound = HrisEmployeePayrollsOneGlobals$Outbound;
}

/** @internal */
export const HrisEmployeePayrollsOneRequest$inboundSchema: z.ZodType<
  HrisEmployeePayrollsOneRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  payroll_id: z.string(),
  employee_id: z.string(),
  raw: z.boolean().default(false),
  serviceId: z.string().optional(),
  fields: z.nullable(z.string()).optional(),
}).transform((v) => {
  return remap$(v, {
    "payroll_id": "payrollId",
    "employee_id": "employeeId",
  });
});

/** @internal */
export type HrisEmployeePayrollsOneRequest$Outbound = {
  payroll_id: string;
  employee_id: string;
  raw: boolean;
  serviceId?: string | undefined;
  fields?: string | null | undefined;
};

/** @internal */
export const HrisEmployeePayrollsOneRequest$outboundSchema: z.ZodType<
  HrisEmployeePayrollsOneRequest$Outbound,
  z.ZodTypeDef,
  HrisEmployeePayrollsOneRequest
> = z.object({
  payrollId: z.string(),
  employeeId: z.string(),
  raw: z.boolean().default(false),
  serviceId: z.string().optional(),
  fields: z.nullable(z.string()).optional(),
}).transform((v) => {
  return remap$(v, {
    payrollId: "payroll_id",
    employeeId: "employee_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace HrisEmployeePayrollsOneRequest$ {
  /** @deprecated use `HrisEmployeePayrollsOneRequest$inboundSchema` instead. */
  export const inboundSchema = HrisEmployeePayrollsOneRequest$inboundSchema;
  /** @deprecated use `HrisEmployeePayrollsOneRequest$outboundSchema` instead. */
  export const outboundSchema = HrisEmployeePayrollsOneRequest$outboundSchema;
  /** @deprecated use `HrisEmployeePayrollsOneRequest$Outbound` instead. */
  export type Outbound = HrisEmployeePayrollsOneRequest$Outbound;
}

/** @internal */
export const HrisEmployeePayrollsOneResponse$inboundSchema: z.ZodType<
  HrisEmployeePayrollsOneResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  HttpMeta: components.HTTPMetadata$inboundSchema,
  GetEmployeePayrollResponse: components
    .GetEmployeePayrollResponse$inboundSchema.optional(),
  UnexpectedErrorResponse: components.UnexpectedErrorResponse$inboundSchema
    .optional(),
}).transform((v) => {
  return remap$(v, {
    "HttpMeta": "httpMeta",
    "GetEmployeePayrollResponse": "getEmployeePayrollResponse",
    "UnexpectedErrorResponse": "unexpectedErrorResponse",
  });
});

/** @internal */
export type HrisEmployeePayrollsOneResponse$Outbound = {
  HttpMeta: components.HTTPMetadata$Outbound;
  GetEmployeePayrollResponse?:
    | components.GetEmployeePayrollResponse$Outbound
    | undefined;
  UnexpectedErrorResponse?:
    | components.UnexpectedErrorResponse$Outbound
    | undefined;
};

/** @internal */
export const HrisEmployeePayrollsOneResponse$outboundSchema: z.ZodType<
  HrisEmployeePayrollsOneResponse$Outbound,
  z.ZodTypeDef,
  HrisEmployeePayrollsOneResponse
> = z.object({
  httpMeta: components.HTTPMetadata$outboundSchema,
  getEmployeePayrollResponse: components
    .GetEmployeePayrollResponse$outboundSchema.optional(),
  unexpectedErrorResponse: components.UnexpectedErrorResponse$outboundSchema
    .optional(),
}).transform((v) => {
  return remap$(v, {
    httpMeta: "HttpMeta",
    getEmployeePayrollResponse: "GetEmployeePayrollResponse",
    unexpectedErrorResponse: "UnexpectedErrorResponse",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace HrisEmployeePayrollsOneResponse$ {
  /** @deprecated use `HrisEmployeePayrollsOneResponse$inboundSchema` instead. */
  export const inboundSchema = HrisEmployeePayrollsOneResponse$inboundSchema;
  /** @deprecated use `HrisEmployeePayrollsOneResponse$outboundSchema` instead. */
  export const outboundSchema = HrisEmployeePayrollsOneResponse$outboundSchema;
  /** @deprecated use `HrisEmployeePayrollsOneResponse$Outbound` instead. */
  export type Outbound = HrisEmployeePayrollsOneResponse$Outbound;
}

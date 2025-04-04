/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  Employee,
  Employee$inboundSchema,
  Employee$Outbound,
  Employee$outboundSchema,
} from "./employeeinput.js";
import {
  Links,
  Links$inboundSchema,
  Links$Outbound,
  Links$outboundSchema,
} from "./links.js";
import {
  Meta,
  Meta$inboundSchema,
  Meta$Outbound,
  Meta$outboundSchema,
} from "./meta.js";

/**
 * Employees
 */
export type GetEmployeesResponse = {
  /**
   * HTTP Response Status Code
   */
  statusCode: number;
  /**
   * HTTP Response Status
   */
  status: string;
  /**
   * Apideck ID of service provider
   */
  service: string;
  /**
   * Unified API resource name
   */
  resource: string;
  /**
   * Operation performed
   */
  operation: string;
  data: Array<Employee>;
  /**
   * Raw response from the integration when raw=true query param is provided
   */
  raw?: { [k: string]: any } | null | undefined;
  /**
   * Response metadata
   */
  meta?: Meta | undefined;
  /**
   * Links to navigate to previous or next pages through the API
   */
  links?: Links | undefined;
};

/** @internal */
export const GetEmployeesResponse$inboundSchema: z.ZodType<
  GetEmployeesResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  status_code: z.number().int(),
  status: z.string(),
  service: z.string(),
  resource: z.string(),
  operation: z.string(),
  data: z.array(Employee$inboundSchema),
  _raw: z.nullable(z.record(z.any())).optional(),
  meta: Meta$inboundSchema.optional(),
  links: Links$inboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    "status_code": "statusCode",
    "_raw": "raw",
  });
});

/** @internal */
export type GetEmployeesResponse$Outbound = {
  status_code: number;
  status: string;
  service: string;
  resource: string;
  operation: string;
  data: Array<Employee$Outbound>;
  _raw?: { [k: string]: any } | null | undefined;
  meta?: Meta$Outbound | undefined;
  links?: Links$Outbound | undefined;
};

/** @internal */
export const GetEmployeesResponse$outboundSchema: z.ZodType<
  GetEmployeesResponse$Outbound,
  z.ZodTypeDef,
  GetEmployeesResponse
> = z.object({
  statusCode: z.number().int(),
  status: z.string(),
  service: z.string(),
  resource: z.string(),
  operation: z.string(),
  data: z.array(Employee$outboundSchema),
  raw: z.nullable(z.record(z.any())).optional(),
  meta: Meta$outboundSchema.optional(),
  links: Links$outboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    statusCode: "status_code",
    raw: "_raw",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetEmployeesResponse$ {
  /** @deprecated use `GetEmployeesResponse$inboundSchema` instead. */
  export const inboundSchema = GetEmployeesResponse$inboundSchema;
  /** @deprecated use `GetEmployeesResponse$outboundSchema` instead. */
  export const outboundSchema = GetEmployeesResponse$outboundSchema;
  /** @deprecated use `GetEmployeesResponse$Outbound` instead. */
  export type Outbound = GetEmployeesResponse$Outbound;
}

export function getEmployeesResponseToJSON(
  getEmployeesResponse: GetEmployeesResponse,
): string {
  return JSON.stringify(
    GetEmployeesResponse$outboundSchema.parse(getEmployeesResponse),
  );
}

export function getEmployeesResponseFromJSON(
  jsonString: string,
): SafeParseResult<GetEmployeesResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetEmployeesResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetEmployeesResponse' from JSON`,
  );
}

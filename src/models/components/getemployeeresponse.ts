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
} from "./employee.js";

/**
 * Employees
 */
export type GetEmployeeResponse = {
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
  data: Employee;
  /**
   * Raw response from the integration when raw=true query param is provided
   */
  raw?: { [k: string]: any } | null | undefined;
};

/** @internal */
export const GetEmployeeResponse$inboundSchema: z.ZodType<
  GetEmployeeResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  status_code: z.number().int(),
  status: z.string(),
  service: z.string(),
  resource: z.string(),
  operation: z.string(),
  data: Employee$inboundSchema,
  _raw: z.nullable(z.record(z.any())).optional(),
}).transform((v) => {
  return remap$(v, {
    "status_code": "statusCode",
    "_raw": "raw",
  });
});

/** @internal */
export type GetEmployeeResponse$Outbound = {
  status_code: number;
  status: string;
  service: string;
  resource: string;
  operation: string;
  data: Employee$Outbound;
  _raw?: { [k: string]: any } | null | undefined;
};

/** @internal */
export const GetEmployeeResponse$outboundSchema: z.ZodType<
  GetEmployeeResponse$Outbound,
  z.ZodTypeDef,
  GetEmployeeResponse
> = z.object({
  statusCode: z.number().int(),
  status: z.string(),
  service: z.string(),
  resource: z.string(),
  operation: z.string(),
  data: Employee$outboundSchema,
  raw: z.nullable(z.record(z.any())).optional(),
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
export namespace GetEmployeeResponse$ {
  /** @deprecated use `GetEmployeeResponse$inboundSchema` instead. */
  export const inboundSchema = GetEmployeeResponse$inboundSchema;
  /** @deprecated use `GetEmployeeResponse$outboundSchema` instead. */
  export const outboundSchema = GetEmployeeResponse$outboundSchema;
  /** @deprecated use `GetEmployeeResponse$Outbound` instead. */
  export type Outbound = GetEmployeeResponse$Outbound;
}

export function getEmployeeResponseToJSON(
  getEmployeeResponse: GetEmployeeResponse,
): string {
  return JSON.stringify(
    GetEmployeeResponse$outboundSchema.parse(getEmployeeResponse),
  );
}

export function getEmployeeResponseFromJSON(
  jsonString: string,
): SafeParseResult<GetEmployeeResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetEmployeeResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetEmployeeResponse' from JSON`,
  );
}

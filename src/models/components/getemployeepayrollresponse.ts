/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  EmployeePayroll,
  EmployeePayroll$inboundSchema,
  EmployeePayroll$Outbound,
  EmployeePayroll$outboundSchema,
} from "./employeepayroll.js";

/**
 * Payrolls
 */
export type GetEmployeePayrollResponse = {
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
  data: EmployeePayroll;
};

/** @internal */
export const GetEmployeePayrollResponse$inboundSchema: z.ZodType<
  GetEmployeePayrollResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  status_code: z.number().int(),
  status: z.string(),
  service: z.string(),
  resource: z.string(),
  operation: z.string(),
  data: EmployeePayroll$inboundSchema,
}).transform((v) => {
  return remap$(v, {
    "status_code": "statusCode",
  });
});

/** @internal */
export type GetEmployeePayrollResponse$Outbound = {
  status_code: number;
  status: string;
  service: string;
  resource: string;
  operation: string;
  data: EmployeePayroll$Outbound;
};

/** @internal */
export const GetEmployeePayrollResponse$outboundSchema: z.ZodType<
  GetEmployeePayrollResponse$Outbound,
  z.ZodTypeDef,
  GetEmployeePayrollResponse
> = z.object({
  statusCode: z.number().int(),
  status: z.string(),
  service: z.string(),
  resource: z.string(),
  operation: z.string(),
  data: EmployeePayroll$outboundSchema,
}).transform((v) => {
  return remap$(v, {
    statusCode: "status_code",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetEmployeePayrollResponse$ {
  /** @deprecated use `GetEmployeePayrollResponse$inboundSchema` instead. */
  export const inboundSchema = GetEmployeePayrollResponse$inboundSchema;
  /** @deprecated use `GetEmployeePayrollResponse$outboundSchema` instead. */
  export const outboundSchema = GetEmployeePayrollResponse$outboundSchema;
  /** @deprecated use `GetEmployeePayrollResponse$Outbound` instead. */
  export type Outbound = GetEmployeePayrollResponse$Outbound;
}

export function getEmployeePayrollResponseToJSON(
  getEmployeePayrollResponse: GetEmployeePayrollResponse,
): string {
  return JSON.stringify(
    GetEmployeePayrollResponse$outboundSchema.parse(getEmployeePayrollResponse),
  );
}

export function getEmployeePayrollResponseFromJSON(
  jsonString: string,
): SafeParseResult<GetEmployeePayrollResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetEmployeePayrollResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetEmployeePayrollResponse' from JSON`,
  );
}

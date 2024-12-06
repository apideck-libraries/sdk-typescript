/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  EmployeeSchedules,
  EmployeeSchedules$inboundSchema,
  EmployeeSchedules$Outbound,
  EmployeeSchedules$outboundSchema,
} from "./employeeschedules.js";

/**
 * EmployeeSchedules
 */
export type GetEmployeeSchedulesResponse = {
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
  data: EmployeeSchedules;
};

/** @internal */
export const GetEmployeeSchedulesResponse$inboundSchema: z.ZodType<
  GetEmployeeSchedulesResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  status_code: z.number().int(),
  status: z.string(),
  service: z.string(),
  resource: z.string(),
  operation: z.string(),
  data: EmployeeSchedules$inboundSchema,
}).transform((v) => {
  return remap$(v, {
    "status_code": "statusCode",
  });
});

/** @internal */
export type GetEmployeeSchedulesResponse$Outbound = {
  status_code: number;
  status: string;
  service: string;
  resource: string;
  operation: string;
  data: EmployeeSchedules$Outbound;
};

/** @internal */
export const GetEmployeeSchedulesResponse$outboundSchema: z.ZodType<
  GetEmployeeSchedulesResponse$Outbound,
  z.ZodTypeDef,
  GetEmployeeSchedulesResponse
> = z.object({
  statusCode: z.number().int(),
  status: z.string(),
  service: z.string(),
  resource: z.string(),
  operation: z.string(),
  data: EmployeeSchedules$outboundSchema,
}).transform((v) => {
  return remap$(v, {
    statusCode: "status_code",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetEmployeeSchedulesResponse$ {
  /** @deprecated use `GetEmployeeSchedulesResponse$inboundSchema` instead. */
  export const inboundSchema = GetEmployeeSchedulesResponse$inboundSchema;
  /** @deprecated use `GetEmployeeSchedulesResponse$outboundSchema` instead. */
  export const outboundSchema = GetEmployeeSchedulesResponse$outboundSchema;
  /** @deprecated use `GetEmployeeSchedulesResponse$Outbound` instead. */
  export type Outbound = GetEmployeeSchedulesResponse$Outbound;
}

export function getEmployeeSchedulesResponseToJSON(
  getEmployeeSchedulesResponse: GetEmployeeSchedulesResponse,
): string {
  return JSON.stringify(
    GetEmployeeSchedulesResponse$outboundSchema.parse(
      getEmployeeSchedulesResponse,
    ),
  );
}

export function getEmployeeSchedulesResponseFromJSON(
  jsonString: string,
): SafeParseResult<GetEmployeeSchedulesResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetEmployeeSchedulesResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetEmployeeSchedulesResponse' from JSON`,
  );
}

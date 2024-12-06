/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  Department,
  Department$inboundSchema,
  Department$Outbound,
  Department$outboundSchema,
} from "./department.js";

/**
 * Departments
 */
export type GetDepartmentResponse = {
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
  data: Department;
};

/** @internal */
export const GetDepartmentResponse$inboundSchema: z.ZodType<
  GetDepartmentResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  status_code: z.number().int(),
  status: z.string(),
  service: z.string(),
  resource: z.string(),
  operation: z.string(),
  data: Department$inboundSchema,
}).transform((v) => {
  return remap$(v, {
    "status_code": "statusCode",
  });
});

/** @internal */
export type GetDepartmentResponse$Outbound = {
  status_code: number;
  status: string;
  service: string;
  resource: string;
  operation: string;
  data: Department$Outbound;
};

/** @internal */
export const GetDepartmentResponse$outboundSchema: z.ZodType<
  GetDepartmentResponse$Outbound,
  z.ZodTypeDef,
  GetDepartmentResponse
> = z.object({
  statusCode: z.number().int(),
  status: z.string(),
  service: z.string(),
  resource: z.string(),
  operation: z.string(),
  data: Department$outboundSchema,
}).transform((v) => {
  return remap$(v, {
    statusCode: "status_code",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetDepartmentResponse$ {
  /** @deprecated use `GetDepartmentResponse$inboundSchema` instead. */
  export const inboundSchema = GetDepartmentResponse$inboundSchema;
  /** @deprecated use `GetDepartmentResponse$outboundSchema` instead. */
  export const outboundSchema = GetDepartmentResponse$outboundSchema;
  /** @deprecated use `GetDepartmentResponse$Outbound` instead. */
  export type Outbound = GetDepartmentResponse$Outbound;
}

export function getDepartmentResponseToJSON(
  getDepartmentResponse: GetDepartmentResponse,
): string {
  return JSON.stringify(
    GetDepartmentResponse$outboundSchema.parse(getDepartmentResponse),
  );
}

export function getDepartmentResponseFromJSON(
  jsonString: string,
): SafeParseResult<GetDepartmentResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetDepartmentResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetDepartmentResponse' from JSON`,
  );
}

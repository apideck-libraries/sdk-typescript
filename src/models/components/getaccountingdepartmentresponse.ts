/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  AccountingDepartment,
  AccountingDepartment$inboundSchema,
  AccountingDepartment$Outbound,
  AccountingDepartment$outboundSchema,
} from "./accountingdepartment.js";

/**
 * Location
 */
export type GetAccountingDepartmentResponse = {
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
  data: AccountingDepartment;
};

/** @internal */
export const GetAccountingDepartmentResponse$inboundSchema: z.ZodType<
  GetAccountingDepartmentResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  status_code: z.number().int(),
  status: z.string(),
  service: z.string(),
  resource: z.string(),
  operation: z.string(),
  data: AccountingDepartment$inboundSchema,
}).transform((v) => {
  return remap$(v, {
    "status_code": "statusCode",
  });
});

/** @internal */
export type GetAccountingDepartmentResponse$Outbound = {
  status_code: number;
  status: string;
  service: string;
  resource: string;
  operation: string;
  data: AccountingDepartment$Outbound;
};

/** @internal */
export const GetAccountingDepartmentResponse$outboundSchema: z.ZodType<
  GetAccountingDepartmentResponse$Outbound,
  z.ZodTypeDef,
  GetAccountingDepartmentResponse
> = z.object({
  statusCode: z.number().int(),
  status: z.string(),
  service: z.string(),
  resource: z.string(),
  operation: z.string(),
  data: AccountingDepartment$outboundSchema,
}).transform((v) => {
  return remap$(v, {
    statusCode: "status_code",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetAccountingDepartmentResponse$ {
  /** @deprecated use `GetAccountingDepartmentResponse$inboundSchema` instead. */
  export const inboundSchema = GetAccountingDepartmentResponse$inboundSchema;
  /** @deprecated use `GetAccountingDepartmentResponse$outboundSchema` instead. */
  export const outboundSchema = GetAccountingDepartmentResponse$outboundSchema;
  /** @deprecated use `GetAccountingDepartmentResponse$Outbound` instead. */
  export type Outbound = GetAccountingDepartmentResponse$Outbound;
}

export function getAccountingDepartmentResponseToJSON(
  getAccountingDepartmentResponse: GetAccountingDepartmentResponse,
): string {
  return JSON.stringify(
    GetAccountingDepartmentResponse$outboundSchema.parse(
      getAccountingDepartmentResponse,
    ),
  );
}

export function getAccountingDepartmentResponseFromJSON(
  jsonString: string,
): SafeParseResult<GetAccountingDepartmentResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetAccountingDepartmentResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetAccountingDepartmentResponse' from JSON`,
  );
}

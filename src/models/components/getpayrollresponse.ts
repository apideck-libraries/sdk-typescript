/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import {
  Payroll,
  Payroll$inboundSchema,
  Payroll$Outbound,
  Payroll$outboundSchema,
} from "./payroll.js";

/**
 * Payrolls
 */
export type GetPayrollResponse = {
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
  data: Payroll;
};

/** @internal */
export const GetPayrollResponse$inboundSchema: z.ZodType<
  GetPayrollResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  status_code: z.number().int(),
  status: z.string(),
  service: z.string(),
  resource: z.string(),
  operation: z.string(),
  data: Payroll$inboundSchema,
}).transform((v) => {
  return remap$(v, {
    "status_code": "statusCode",
  });
});

/** @internal */
export type GetPayrollResponse$Outbound = {
  status_code: number;
  status: string;
  service: string;
  resource: string;
  operation: string;
  data: Payroll$Outbound;
};

/** @internal */
export const GetPayrollResponse$outboundSchema: z.ZodType<
  GetPayrollResponse$Outbound,
  z.ZodTypeDef,
  GetPayrollResponse
> = z.object({
  statusCode: z.number().int(),
  status: z.string(),
  service: z.string(),
  resource: z.string(),
  operation: z.string(),
  data: Payroll$outboundSchema,
}).transform((v) => {
  return remap$(v, {
    statusCode: "status_code",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetPayrollResponse$ {
  /** @deprecated use `GetPayrollResponse$inboundSchema` instead. */
  export const inboundSchema = GetPayrollResponse$inboundSchema;
  /** @deprecated use `GetPayrollResponse$outboundSchema` instead. */
  export const outboundSchema = GetPayrollResponse$outboundSchema;
  /** @deprecated use `GetPayrollResponse$Outbound` instead. */
  export type Outbound = GetPayrollResponse$Outbound;
}

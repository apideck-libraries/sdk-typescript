/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import {
  Expense,
  Expense$inboundSchema,
  Expense$Outbound,
  Expense$outboundSchema,
} from "./expense.js";

/**
 * Expenses
 */
export type GetExpenseResponse = {
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
  data: Expense;
};

/** @internal */
export const GetExpenseResponse$inboundSchema: z.ZodType<
  GetExpenseResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  status_code: z.number().int(),
  status: z.string(),
  service: z.string(),
  resource: z.string(),
  operation: z.string(),
  data: Expense$inboundSchema,
}).transform((v) => {
  return remap$(v, {
    "status_code": "statusCode",
  });
});

/** @internal */
export type GetExpenseResponse$Outbound = {
  status_code: number;
  status: string;
  service: string;
  resource: string;
  operation: string;
  data: Expense$Outbound;
};

/** @internal */
export const GetExpenseResponse$outboundSchema: z.ZodType<
  GetExpenseResponse$Outbound,
  z.ZodTypeDef,
  GetExpenseResponse
> = z.object({
  statusCode: z.number().int(),
  status: z.string(),
  service: z.string(),
  resource: z.string(),
  operation: z.string(),
  data: Expense$outboundSchema,
}).transform((v) => {
  return remap$(v, {
    statusCode: "status_code",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetExpenseResponse$ {
  /** @deprecated use `GetExpenseResponse$inboundSchema` instead. */
  export const inboundSchema = GetExpenseResponse$inboundSchema;
  /** @deprecated use `GetExpenseResponse$outboundSchema` instead. */
  export const outboundSchema = GetExpenseResponse$outboundSchema;
  /** @deprecated use `GetExpenseResponse$Outbound` instead. */
  export type Outbound = GetExpenseResponse$Outbound;
}

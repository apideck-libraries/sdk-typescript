/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type ProfitAndLossFilter = {
  /**
   * Filter by customer id
   */
  customerId?: string | undefined;
  /**
   * Filter by start date. If start date is given, end date is required.
   */
  startDate?: string | undefined;
  /**
   * Filter by end date. If end date is given, start date is required.
   */
  endDate?: string | undefined;
};

/** @internal */
export const ProfitAndLossFilter$inboundSchema: z.ZodType<
  ProfitAndLossFilter,
  z.ZodTypeDef,
  unknown
> = z.object({
  customer_id: z.string().optional(),
  start_date: z.string().optional(),
  end_date: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    "customer_id": "customerId",
    "start_date": "startDate",
    "end_date": "endDate",
  });
});

/** @internal */
export type ProfitAndLossFilter$Outbound = {
  customer_id?: string | undefined;
  start_date?: string | undefined;
  end_date?: string | undefined;
};

/** @internal */
export const ProfitAndLossFilter$outboundSchema: z.ZodType<
  ProfitAndLossFilter$Outbound,
  z.ZodTypeDef,
  ProfitAndLossFilter
> = z.object({
  customerId: z.string().optional(),
  startDate: z.string().optional(),
  endDate: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    customerId: "customer_id",
    startDate: "start_date",
    endDate: "end_date",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ProfitAndLossFilter$ {
  /** @deprecated use `ProfitAndLossFilter$inboundSchema` instead. */
  export const inboundSchema = ProfitAndLossFilter$inboundSchema;
  /** @deprecated use `ProfitAndLossFilter$outboundSchema` instead. */
  export const outboundSchema = ProfitAndLossFilter$outboundSchema;
  /** @deprecated use `ProfitAndLossFilter$Outbound` instead. */
  export type Outbound = ProfitAndLossFilter$Outbound;
}

export function profitAndLossFilterToJSON(
  profitAndLossFilter: ProfitAndLossFilter,
): string {
  return JSON.stringify(
    ProfitAndLossFilter$outboundSchema.parse(profitAndLossFilter),
  );
}

export function profitAndLossFilterFromJSON(
  jsonString: string,
): SafeParseResult<ProfitAndLossFilter, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ProfitAndLossFilter$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ProfitAndLossFilter' from JSON`,
  );
}

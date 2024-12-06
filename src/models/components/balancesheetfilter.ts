/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

/**
 * The type of period to include in the resource: month, quarter, year.
 */
export const PeriodType = {
  Month: "month",
  Quarter: "quarter",
  Year: "year",
} as const;
/**
 * The type of period to include in the resource: month, quarter, year.
 */
export type PeriodType = ClosedEnum<typeof PeriodType>;

export type BalanceSheetFilter = {
  /**
   * The start date of the period to include in the resource.
   */
  startDate?: string | undefined;
  /**
   * The end date of the period to include in the resource.
   */
  endDate?: string | undefined;
  /**
   * The number of periods to include in the resource.
   */
  periodCount?: number | undefined;
  /**
   * The type of period to include in the resource: month, quarter, year.
   */
  periodType?: PeriodType | undefined;
};

/** @internal */
export const PeriodType$inboundSchema: z.ZodNativeEnum<typeof PeriodType> = z
  .nativeEnum(PeriodType);

/** @internal */
export const PeriodType$outboundSchema: z.ZodNativeEnum<typeof PeriodType> =
  PeriodType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PeriodType$ {
  /** @deprecated use `PeriodType$inboundSchema` instead. */
  export const inboundSchema = PeriodType$inboundSchema;
  /** @deprecated use `PeriodType$outboundSchema` instead. */
  export const outboundSchema = PeriodType$outboundSchema;
}

/** @internal */
export const BalanceSheetFilter$inboundSchema: z.ZodType<
  BalanceSheetFilter,
  z.ZodTypeDef,
  unknown
> = z.object({
  start_date: z.string().optional(),
  end_date: z.string().optional(),
  period_count: z.number().int().optional(),
  period_type: PeriodType$inboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    "start_date": "startDate",
    "end_date": "endDate",
    "period_count": "periodCount",
    "period_type": "periodType",
  });
});

/** @internal */
export type BalanceSheetFilter$Outbound = {
  start_date?: string | undefined;
  end_date?: string | undefined;
  period_count?: number | undefined;
  period_type?: string | undefined;
};

/** @internal */
export const BalanceSheetFilter$outboundSchema: z.ZodType<
  BalanceSheetFilter$Outbound,
  z.ZodTypeDef,
  BalanceSheetFilter
> = z.object({
  startDate: z.string().optional(),
  endDate: z.string().optional(),
  periodCount: z.number().int().optional(),
  periodType: PeriodType$outboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    startDate: "start_date",
    endDate: "end_date",
    periodCount: "period_count",
    periodType: "period_type",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace BalanceSheetFilter$ {
  /** @deprecated use `BalanceSheetFilter$inboundSchema` instead. */
  export const inboundSchema = BalanceSheetFilter$inboundSchema;
  /** @deprecated use `BalanceSheetFilter$outboundSchema` instead. */
  export const outboundSchema = BalanceSheetFilter$outboundSchema;
  /** @deprecated use `BalanceSheetFilter$Outbound` instead. */
  export type Outbound = BalanceSheetFilter$Outbound;
}

export function balanceSheetFilterToJSON(
  balanceSheetFilter: BalanceSheetFilter,
): string {
  return JSON.stringify(
    BalanceSheetFilter$outboundSchema.parse(balanceSheetFilter),
  );
}

export function balanceSheetFilterFromJSON(
  jsonString: string,
): SafeParseResult<BalanceSheetFilter, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => BalanceSheetFilter$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'BalanceSheetFilter' from JSON`,
  );
}

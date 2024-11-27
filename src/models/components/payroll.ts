/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  Compensation,
  Compensation$inboundSchema,
  Compensation$Outbound,
  Compensation$outboundSchema,
} from "./compensation.js";
import {
  CustomMappings,
  CustomMappings$inboundSchema,
  CustomMappings$Outbound,
  CustomMappings$outboundSchema,
} from "./custommappings.js";
import {
  PayrollTotals,
  PayrollTotals$inboundSchema,
  PayrollTotals$Outbound,
  PayrollTotals$outboundSchema,
} from "./payrolltotals.js";

export type Payroll = {
  /**
   * A unique identifier for an object.
   */
  id: string | null;
  /**
   * The unique identifier of the company.
   */
  companyId?: string | null | undefined;
  /**
   * Whether or not the payroll has been successfully processed. Note that processed payrolls cannot be updated.
   */
  processed: boolean | null;
  /**
   * The date the payroll was processed.
   */
  processedDate?: string | null | undefined;
  /**
   * The date on which employees will be paid for the payroll.
   */
  checkDate: string | null;
  /**
   * The start date, inclusive, of the pay period.
   */
  startDate: string | null;
  /**
   * The end date, inclusive, of the pay period.
   */
  endDate: string | null;
  /**
   * The overview of the payroll totals.
   */
  totals?: PayrollTotals | undefined;
  /**
   * An array of compensations for the payroll.
   */
  compensations?: Array<Compensation> | undefined;
  /**
   * When custom mappings are configured on the resource, the result is included here.
   */
  customMappings?: CustomMappings | null | undefined;
};

/** @internal */
export const Payroll$inboundSchema: z.ZodType<Payroll, z.ZodTypeDef, unknown> =
  z.object({
    id: z.nullable(z.string()),
    company_id: z.nullable(z.string()).optional(),
    processed: z.nullable(z.boolean()),
    processed_date: z.nullable(z.string()).optional(),
    check_date: z.nullable(z.string()),
    start_date: z.nullable(z.string()),
    end_date: z.nullable(z.string()),
    totals: PayrollTotals$inboundSchema.optional(),
    compensations: z.array(Compensation$inboundSchema).optional(),
    custom_mappings: z.nullable(CustomMappings$inboundSchema).optional(),
  }).transform((v) => {
    return remap$(v, {
      "company_id": "companyId",
      "processed_date": "processedDate",
      "check_date": "checkDate",
      "start_date": "startDate",
      "end_date": "endDate",
      "custom_mappings": "customMappings",
    });
  });

/** @internal */
export type Payroll$Outbound = {
  id: string | null;
  company_id?: string | null | undefined;
  processed: boolean | null;
  processed_date?: string | null | undefined;
  check_date: string | null;
  start_date: string | null;
  end_date: string | null;
  totals?: PayrollTotals$Outbound | undefined;
  compensations?: Array<Compensation$Outbound> | undefined;
  custom_mappings?: CustomMappings$Outbound | null | undefined;
};

/** @internal */
export const Payroll$outboundSchema: z.ZodType<
  Payroll$Outbound,
  z.ZodTypeDef,
  Payroll
> = z.object({
  id: z.nullable(z.string()),
  companyId: z.nullable(z.string()).optional(),
  processed: z.nullable(z.boolean()),
  processedDate: z.nullable(z.string()).optional(),
  checkDate: z.nullable(z.string()),
  startDate: z.nullable(z.string()),
  endDate: z.nullable(z.string()),
  totals: PayrollTotals$outboundSchema.optional(),
  compensations: z.array(Compensation$outboundSchema).optional(),
  customMappings: z.nullable(CustomMappings$outboundSchema).optional(),
}).transform((v) => {
  return remap$(v, {
    companyId: "company_id",
    processedDate: "processed_date",
    checkDate: "check_date",
    startDate: "start_date",
    endDate: "end_date",
    customMappings: "custom_mappings",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Payroll$ {
  /** @deprecated use `Payroll$inboundSchema` instead. */
  export const inboundSchema = Payroll$inboundSchema;
  /** @deprecated use `Payroll$outboundSchema` instead. */
  export const outboundSchema = Payroll$outboundSchema;
  /** @deprecated use `Payroll$Outbound` instead. */
  export type Outbound = Payroll$Outbound;
}

export function payrollToJSON(payroll: Payroll): string {
  return JSON.stringify(Payroll$outboundSchema.parse(payroll));
}

export function payrollFromJSON(
  jsonString: string,
): SafeParseResult<Payroll, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Payroll$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Payroll' from JSON`,
  );
}

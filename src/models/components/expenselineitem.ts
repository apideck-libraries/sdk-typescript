/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  LinkedTaxRate,
  LinkedTaxRate$inboundSchema,
  LinkedTaxRate$Outbound,
  LinkedTaxRate$outboundSchema,
} from "./linkedtaxrate.js";
import {
  LinkedTrackingCategory,
  LinkedTrackingCategory$inboundSchema,
  LinkedTrackingCategory$Outbound,
  LinkedTrackingCategory$outboundSchema,
} from "./linkedtrackingcategory.js";

export type ExpenseLineItem = {
  /**
   * A unique identifier for an object.
   */
  id?: string | undefined;
  /**
   * A list of linked tracking categories.
   */
  trackingCategories?: Array<LinkedTrackingCategory | null> | null | undefined;
  /**
   * The unique identifier for the ledger account.
   */
  accountId?: string | undefined;
  /**
   * The ID of the customer this expense item is linked to.
   */
  customerId?: string | undefined;
  /**
   * The ID of the department
   */
  departmentId?: string | null | undefined;
  /**
   * The ID of the location
   */
  locationId?: string | null | undefined;
  /**
   * The ID of the subsidiary
   */
  subsidiaryId?: string | null | undefined;
  taxRate?: LinkedTaxRate | undefined;
  /**
   * The expense line item description
   */
  description?: string | null | undefined;
  /**
   * The total amount of the expense line item.
   */
  totalAmount: number | null;
  /**
   * Boolean that indicates if the line item is billable or not.
   */
  billable?: boolean | undefined;
  /**
   * Line number of the resource
   */
  lineNumber?: number | null | undefined;
};

/** @internal */
export const ExpenseLineItem$inboundSchema: z.ZodType<
  ExpenseLineItem,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string().optional(),
  tracking_categories: z.nullable(
    z.array(z.nullable(LinkedTrackingCategory$inboundSchema)),
  ).optional(),
  account_id: z.string().optional(),
  customer_id: z.string().optional(),
  department_id: z.nullable(z.string()).optional(),
  location_id: z.nullable(z.string()).optional(),
  subsidiary_id: z.nullable(z.string()).optional(),
  tax_rate: LinkedTaxRate$inboundSchema.optional(),
  description: z.nullable(z.string()).optional(),
  total_amount: z.nullable(z.number()),
  billable: z.boolean().optional(),
  line_number: z.nullable(z.number().int()).optional(),
}).transform((v) => {
  return remap$(v, {
    "tracking_categories": "trackingCategories",
    "account_id": "accountId",
    "customer_id": "customerId",
    "department_id": "departmentId",
    "location_id": "locationId",
    "subsidiary_id": "subsidiaryId",
    "tax_rate": "taxRate",
    "total_amount": "totalAmount",
    "line_number": "lineNumber",
  });
});

/** @internal */
export type ExpenseLineItem$Outbound = {
  id?: string | undefined;
  tracking_categories?:
    | Array<LinkedTrackingCategory$Outbound | null>
    | null
    | undefined;
  account_id?: string | undefined;
  customer_id?: string | undefined;
  department_id?: string | null | undefined;
  location_id?: string | null | undefined;
  subsidiary_id?: string | null | undefined;
  tax_rate?: LinkedTaxRate$Outbound | undefined;
  description?: string | null | undefined;
  total_amount: number | null;
  billable?: boolean | undefined;
  line_number?: number | null | undefined;
};

/** @internal */
export const ExpenseLineItem$outboundSchema: z.ZodType<
  ExpenseLineItem$Outbound,
  z.ZodTypeDef,
  ExpenseLineItem
> = z.object({
  id: z.string().optional(),
  trackingCategories: z.nullable(
    z.array(z.nullable(LinkedTrackingCategory$outboundSchema)),
  ).optional(),
  accountId: z.string().optional(),
  customerId: z.string().optional(),
  departmentId: z.nullable(z.string()).optional(),
  locationId: z.nullable(z.string()).optional(),
  subsidiaryId: z.nullable(z.string()).optional(),
  taxRate: LinkedTaxRate$outboundSchema.optional(),
  description: z.nullable(z.string()).optional(),
  totalAmount: z.nullable(z.number()),
  billable: z.boolean().optional(),
  lineNumber: z.nullable(z.number().int()).optional(),
}).transform((v) => {
  return remap$(v, {
    trackingCategories: "tracking_categories",
    accountId: "account_id",
    customerId: "customer_id",
    departmentId: "department_id",
    locationId: "location_id",
    subsidiaryId: "subsidiary_id",
    taxRate: "tax_rate",
    totalAmount: "total_amount",
    lineNumber: "line_number",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ExpenseLineItem$ {
  /** @deprecated use `ExpenseLineItem$inboundSchema` instead. */
  export const inboundSchema = ExpenseLineItem$inboundSchema;
  /** @deprecated use `ExpenseLineItem$outboundSchema` instead. */
  export const outboundSchema = ExpenseLineItem$outboundSchema;
  /** @deprecated use `ExpenseLineItem$Outbound` instead. */
  export type Outbound = ExpenseLineItem$Outbound;
}

export function expenseLineItemToJSON(
  expenseLineItem: ExpenseLineItem,
): string {
  return JSON.stringify(ExpenseLineItem$outboundSchema.parse(expenseLineItem));
}

export function expenseLineItemFromJSON(
  jsonString: string,
): SafeParseResult<ExpenseLineItem, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ExpenseLineItem$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ExpenseLineItem' from JSON`,
  );
}

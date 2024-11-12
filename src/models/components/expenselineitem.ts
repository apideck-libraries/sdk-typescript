/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
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
  trackingCategories?: Array<LinkedTrackingCategory> | null | undefined;
  /**
   * The unique identifier for the ledger account.
   */
  accountId?: string | undefined;
  /**
   * The ID of the customer this expense item is linked to.
   */
  customerId?: string | undefined;
  /**
   * The ID of the department this expense item is linked to.
   */
  departmentId?: string | undefined;
  /**
   * The ID of the location this expense item is linked to.
   */
  locationId?: string | undefined;
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
};

/** @internal */
export const ExpenseLineItem$inboundSchema: z.ZodType<
  ExpenseLineItem,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string().optional(),
  tracking_categories: z.nullable(z.array(LinkedTrackingCategory$inboundSchema))
    .optional(),
  account_id: z.string().optional(),
  customer_id: z.string().optional(),
  department_id: z.string().optional(),
  location_id: z.string().optional(),
  tax_rate: LinkedTaxRate$inboundSchema.optional(),
  description: z.nullable(z.string()).optional(),
  total_amount: z.nullable(z.number()),
  billable: z.boolean().optional(),
}).transform((v) => {
  return remap$(v, {
    "tracking_categories": "trackingCategories",
    "account_id": "accountId",
    "customer_id": "customerId",
    "department_id": "departmentId",
    "location_id": "locationId",
    "tax_rate": "taxRate",
    "total_amount": "totalAmount",
  });
});

/** @internal */
export type ExpenseLineItem$Outbound = {
  id?: string | undefined;
  tracking_categories?:
    | Array<LinkedTrackingCategory$Outbound>
    | null
    | undefined;
  account_id?: string | undefined;
  customer_id?: string | undefined;
  department_id?: string | undefined;
  location_id?: string | undefined;
  tax_rate?: LinkedTaxRate$Outbound | undefined;
  description?: string | null | undefined;
  total_amount: number | null;
  billable?: boolean | undefined;
};

/** @internal */
export const ExpenseLineItem$outboundSchema: z.ZodType<
  ExpenseLineItem$Outbound,
  z.ZodTypeDef,
  ExpenseLineItem
> = z.object({
  id: z.string().optional(),
  trackingCategories: z.nullable(z.array(LinkedTrackingCategory$outboundSchema))
    .optional(),
  accountId: z.string().optional(),
  customerId: z.string().optional(),
  departmentId: z.string().optional(),
  locationId: z.string().optional(),
  taxRate: LinkedTaxRate$outboundSchema.optional(),
  description: z.nullable(z.string()).optional(),
  totalAmount: z.nullable(z.number()),
  billable: z.boolean().optional(),
}).transform((v) => {
  return remap$(v, {
    trackingCategories: "tracking_categories",
    accountId: "account_id",
    customerId: "customer_id",
    departmentId: "department_id",
    locationId: "location_id",
    taxRate: "tax_rate",
    totalAmount: "total_amount",
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

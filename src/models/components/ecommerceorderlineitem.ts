/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  EcommerceDiscount,
  EcommerceDiscount$inboundSchema,
  EcommerceDiscount$Outbound,
  EcommerceDiscount$outboundSchema,
} from "./ecommercediscount.js";

export type Options = {
  /**
   * A unique identifier for the option.
   */
  id?: string | null | undefined;
  /**
   * The name of the option.
   */
  name?: string | null | undefined;
  /**
   * The value of the option.
   */
  value?: string | null | undefined;
};

/**
 * A single line item of an ecommerce order, representing a product or variant with associated options, quantity, and pricing information.
 */
export type EcommerceOrderLineItem = {
  /**
   * A unique identifier for an object.
   */
  id?: string | null | undefined;
  /**
   * A unique identifier for the product associated with the line item.
   */
  productId?: string | null | undefined;
  /**
   * A unique identifier for the variant of the product associated with the line item, if applicable.
   */
  variantId?: string | null | undefined;
  /**
   * The SKU of the product or variant associated with the line item.
   */
  sku?: string | null | undefined;
  /**
   * The name of the product or variant associated with the line item.
   */
  name: string | null;
  /**
   * The description of the product or variant associated with the line item.
   */
  description?: string | null | undefined;
  options?: Array<Options> | undefined;
  /**
   * The quantity of the product or variant associated with the line item.
   */
  quantity: string | null;
  /**
   * The unit price of the product or variant associated with the line item.
   */
  unitPrice?: string | null | undefined;
  /**
   * The tax rate applied to the product or variant associated with the line item.
   */
  taxRate?: string | null | undefined;
  /**
   * The total tax amount applied to the product or variant associated with the line item.
   */
  taxAmount?: string | null | undefined;
  /**
   * Whether the line item has been refunded.
   */
  isRefunded?: boolean | null | undefined;
  /**
   * The amount of the line item that has been refunded.
   */
  refundedAmount?: string | null | undefined;
  /**
   * The quantity of the line item that has been refunded.
   */
  refundedQuantity?: string | null | undefined;
  /**
   * The sub total for the product(s) or variant associated with the line item, excluding taxes and discounts.
   */
  subTotal?: string | null | undefined;
  /**
   * The total amount for the product(s) or variant associated with the line item, including taxes and discounts.
   */
  totalAmount: string | null;
  discounts?: Array<EcommerceDiscount> | undefined;
};

/** @internal */
export const Options$inboundSchema: z.ZodType<Options, z.ZodTypeDef, unknown> =
  z.object({
    id: z.nullable(z.string()).optional(),
    name: z.nullable(z.string()).optional(),
    value: z.nullable(z.string()).optional(),
  });

/** @internal */
export type Options$Outbound = {
  id?: string | null | undefined;
  name?: string | null | undefined;
  value?: string | null | undefined;
};

/** @internal */
export const Options$outboundSchema: z.ZodType<
  Options$Outbound,
  z.ZodTypeDef,
  Options
> = z.object({
  id: z.nullable(z.string()).optional(),
  name: z.nullable(z.string()).optional(),
  value: z.nullable(z.string()).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Options$ {
  /** @deprecated use `Options$inboundSchema` instead. */
  export const inboundSchema = Options$inboundSchema;
  /** @deprecated use `Options$outboundSchema` instead. */
  export const outboundSchema = Options$outboundSchema;
  /** @deprecated use `Options$Outbound` instead. */
  export type Outbound = Options$Outbound;
}

export function optionsToJSON(options: Options): string {
  return JSON.stringify(Options$outboundSchema.parse(options));
}

export function optionsFromJSON(
  jsonString: string,
): SafeParseResult<Options, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Options$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Options' from JSON`,
  );
}

/** @internal */
export const EcommerceOrderLineItem$inboundSchema: z.ZodType<
  EcommerceOrderLineItem,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.nullable(z.string()).optional(),
  product_id: z.nullable(z.string()).optional(),
  variant_id: z.nullable(z.string()).optional(),
  sku: z.nullable(z.string()).optional(),
  name: z.nullable(z.string()),
  description: z.nullable(z.string()).optional(),
  options: z.array(z.lazy(() => Options$inboundSchema)).optional(),
  quantity: z.nullable(z.string()),
  unit_price: z.nullable(z.string()).optional(),
  tax_rate: z.nullable(z.string()).optional(),
  tax_amount: z.nullable(z.string()).optional(),
  is_refunded: z.nullable(z.boolean()).optional(),
  refunded_amount: z.nullable(z.string()).optional(),
  refunded_quantity: z.nullable(z.string()).optional(),
  sub_total: z.nullable(z.string()).optional(),
  total_amount: z.nullable(z.string()),
  discounts: z.array(EcommerceDiscount$inboundSchema).optional(),
}).transform((v) => {
  return remap$(v, {
    "product_id": "productId",
    "variant_id": "variantId",
    "unit_price": "unitPrice",
    "tax_rate": "taxRate",
    "tax_amount": "taxAmount",
    "is_refunded": "isRefunded",
    "refunded_amount": "refundedAmount",
    "refunded_quantity": "refundedQuantity",
    "sub_total": "subTotal",
    "total_amount": "totalAmount",
  });
});

/** @internal */
export type EcommerceOrderLineItem$Outbound = {
  id?: string | null | undefined;
  product_id?: string | null | undefined;
  variant_id?: string | null | undefined;
  sku?: string | null | undefined;
  name: string | null;
  description?: string | null | undefined;
  options?: Array<Options$Outbound> | undefined;
  quantity: string | null;
  unit_price?: string | null | undefined;
  tax_rate?: string | null | undefined;
  tax_amount?: string | null | undefined;
  is_refunded?: boolean | null | undefined;
  refunded_amount?: string | null | undefined;
  refunded_quantity?: string | null | undefined;
  sub_total?: string | null | undefined;
  total_amount: string | null;
  discounts?: Array<EcommerceDiscount$Outbound> | undefined;
};

/** @internal */
export const EcommerceOrderLineItem$outboundSchema: z.ZodType<
  EcommerceOrderLineItem$Outbound,
  z.ZodTypeDef,
  EcommerceOrderLineItem
> = z.object({
  id: z.nullable(z.string()).optional(),
  productId: z.nullable(z.string()).optional(),
  variantId: z.nullable(z.string()).optional(),
  sku: z.nullable(z.string()).optional(),
  name: z.nullable(z.string()),
  description: z.nullable(z.string()).optional(),
  options: z.array(z.lazy(() => Options$outboundSchema)).optional(),
  quantity: z.nullable(z.string()),
  unitPrice: z.nullable(z.string()).optional(),
  taxRate: z.nullable(z.string()).optional(),
  taxAmount: z.nullable(z.string()).optional(),
  isRefunded: z.nullable(z.boolean()).optional(),
  refundedAmount: z.nullable(z.string()).optional(),
  refundedQuantity: z.nullable(z.string()).optional(),
  subTotal: z.nullable(z.string()).optional(),
  totalAmount: z.nullable(z.string()),
  discounts: z.array(EcommerceDiscount$outboundSchema).optional(),
}).transform((v) => {
  return remap$(v, {
    productId: "product_id",
    variantId: "variant_id",
    unitPrice: "unit_price",
    taxRate: "tax_rate",
    taxAmount: "tax_amount",
    isRefunded: "is_refunded",
    refundedAmount: "refunded_amount",
    refundedQuantity: "refunded_quantity",
    subTotal: "sub_total",
    totalAmount: "total_amount",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace EcommerceOrderLineItem$ {
  /** @deprecated use `EcommerceOrderLineItem$inboundSchema` instead. */
  export const inboundSchema = EcommerceOrderLineItem$inboundSchema;
  /** @deprecated use `EcommerceOrderLineItem$outboundSchema` instead. */
  export const outboundSchema = EcommerceOrderLineItem$outboundSchema;
  /** @deprecated use `EcommerceOrderLineItem$Outbound` instead. */
  export type Outbound = EcommerceOrderLineItem$Outbound;
}

export function ecommerceOrderLineItemToJSON(
  ecommerceOrderLineItem: EcommerceOrderLineItem,
): string {
  return JSON.stringify(
    EcommerceOrderLineItem$outboundSchema.parse(ecommerceOrderLineItem),
  );
}

export function ecommerceOrderLineItemFromJSON(
  jsonString: string,
): SafeParseResult<EcommerceOrderLineItem, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => EcommerceOrderLineItem$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'EcommerceOrderLineItem' from JSON`,
  );
}

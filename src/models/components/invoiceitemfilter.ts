/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

/**
 * The type of invoice item, indicating whether it is an inventory item, a service, or another type.
 */
export const InvoiceItemFilterInvoiceItemType = {
  Inventory: "inventory",
  Service: "service",
  Other: "other",
} as const;
/**
 * The type of invoice item, indicating whether it is an inventory item, a service, or another type.
 */
export type InvoiceItemFilterInvoiceItemType = ClosedEnum<
  typeof InvoiceItemFilterInvoiceItemType
>;

export type InvoiceItemFilter = {
  /**
   * The type of invoice item, indicating whether it is an inventory item, a service, or another type.
   */
  type?: InvoiceItemFilterInvoiceItemType | null | undefined;
};

/** @internal */
export const InvoiceItemFilterInvoiceItemType$inboundSchema: z.ZodNativeEnum<
  typeof InvoiceItemFilterInvoiceItemType
> = z.nativeEnum(InvoiceItemFilterInvoiceItemType);

/** @internal */
export const InvoiceItemFilterInvoiceItemType$outboundSchema: z.ZodNativeEnum<
  typeof InvoiceItemFilterInvoiceItemType
> = InvoiceItemFilterInvoiceItemType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace InvoiceItemFilterInvoiceItemType$ {
  /** @deprecated use `InvoiceItemFilterInvoiceItemType$inboundSchema` instead. */
  export const inboundSchema = InvoiceItemFilterInvoiceItemType$inboundSchema;
  /** @deprecated use `InvoiceItemFilterInvoiceItemType$outboundSchema` instead. */
  export const outboundSchema = InvoiceItemFilterInvoiceItemType$outboundSchema;
}

/** @internal */
export const InvoiceItemFilter$inboundSchema: z.ZodType<
  InvoiceItemFilter,
  z.ZodTypeDef,
  unknown
> = z.object({
  type: z.nullable(InvoiceItemFilterInvoiceItemType$inboundSchema).optional(),
});

/** @internal */
export type InvoiceItemFilter$Outbound = {
  type?: string | null | undefined;
};

/** @internal */
export const InvoiceItemFilter$outboundSchema: z.ZodType<
  InvoiceItemFilter$Outbound,
  z.ZodTypeDef,
  InvoiceItemFilter
> = z.object({
  type: z.nullable(InvoiceItemFilterInvoiceItemType$outboundSchema).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace InvoiceItemFilter$ {
  /** @deprecated use `InvoiceItemFilter$inboundSchema` instead. */
  export const inboundSchema = InvoiceItemFilter$inboundSchema;
  /** @deprecated use `InvoiceItemFilter$outboundSchema` instead. */
  export const outboundSchema = InvoiceItemFilter$outboundSchema;
  /** @deprecated use `InvoiceItemFilter$Outbound` instead. */
  export type Outbound = InvoiceItemFilter$Outbound;
}

export function invoiceItemFilterToJSON(
  invoiceItemFilter: InvoiceItemFilter,
): string {
  return JSON.stringify(
    InvoiceItemFilter$outboundSchema.parse(invoiceItemFilter),
  );
}

export function invoiceItemFilterFromJSON(
  jsonString: string,
): SafeParseResult<InvoiceItemFilter, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => InvoiceItemFilter$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'InvoiceItemFilter' from JSON`,
  );
}

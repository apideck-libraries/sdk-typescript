/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";
import {
  SortDirection,
  SortDirection$inboundSchema,
  SortDirection$outboundSchema,
} from "./sortdirection.js";

/**
 * The field on which to sort the Invoices
 */
export const InvoicesSortBy = {
  CreatedAt: "created_at",
  UpdatedAt: "updated_at",
} as const;
/**
 * The field on which to sort the Invoices
 */
export type InvoicesSortBy = ClosedEnum<typeof InvoicesSortBy>;

export type InvoicesSort = {
  /**
   * The field on which to sort the Invoices
   */
  by?: InvoicesSortBy | undefined;
  /**
   * The direction in which to sort the results
   */
  direction?: SortDirection | undefined;
};

/** @internal */
export const InvoicesSortBy$inboundSchema: z.ZodNativeEnum<
  typeof InvoicesSortBy
> = z.nativeEnum(InvoicesSortBy);

/** @internal */
export const InvoicesSortBy$outboundSchema: z.ZodNativeEnum<
  typeof InvoicesSortBy
> = InvoicesSortBy$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace InvoicesSortBy$ {
  /** @deprecated use `InvoicesSortBy$inboundSchema` instead. */
  export const inboundSchema = InvoicesSortBy$inboundSchema;
  /** @deprecated use `InvoicesSortBy$outboundSchema` instead. */
  export const outboundSchema = InvoicesSortBy$outboundSchema;
}

/** @internal */
export const InvoicesSort$inboundSchema: z.ZodType<
  InvoicesSort,
  z.ZodTypeDef,
  unknown
> = z.object({
  by: InvoicesSortBy$inboundSchema.optional(),
  direction: SortDirection$inboundSchema.default("asc"),
});

/** @internal */
export type InvoicesSort$Outbound = {
  by?: string | undefined;
  direction: string;
};

/** @internal */
export const InvoicesSort$outboundSchema: z.ZodType<
  InvoicesSort$Outbound,
  z.ZodTypeDef,
  InvoicesSort
> = z.object({
  by: InvoicesSortBy$outboundSchema.optional(),
  direction: SortDirection$outboundSchema.default("asc"),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace InvoicesSort$ {
  /** @deprecated use `InvoicesSort$inboundSchema` instead. */
  export const inboundSchema = InvoicesSort$inboundSchema;
  /** @deprecated use `InvoicesSort$outboundSchema` instead. */
  export const outboundSchema = InvoicesSort$outboundSchema;
  /** @deprecated use `InvoicesSort$Outbound` instead. */
  export type Outbound = InvoicesSort$Outbound;
}

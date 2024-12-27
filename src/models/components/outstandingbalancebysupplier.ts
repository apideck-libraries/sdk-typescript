/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  OutstandingBalanceByCurrency,
  OutstandingBalanceByCurrency$inboundSchema,
  OutstandingBalanceByCurrency$Outbound,
  OutstandingBalanceByCurrency$outboundSchema,
} from "./outstandingbalancebycurrency.js";

export type OutstandingBalanceBySupplier = {
  /**
   * Unique identifier for the supplier.
   */
  supplierId?: string | undefined;
  /**
   * Full name of the supplier.
   */
  supplierName?: string | undefined;
  outstandingBalancesByCurrency?:
    | Array<OutstandingBalanceByCurrency>
    | undefined;
};

/** @internal */
export const OutstandingBalanceBySupplier$inboundSchema: z.ZodType<
  OutstandingBalanceBySupplier,
  z.ZodTypeDef,
  unknown
> = z.object({
  supplier_id: z.string().optional(),
  supplier_name: z.string().optional(),
  outstanding_balances_by_currency: z.array(
    OutstandingBalanceByCurrency$inboundSchema,
  ).optional(),
}).transform((v) => {
  return remap$(v, {
    "supplier_id": "supplierId",
    "supplier_name": "supplierName",
    "outstanding_balances_by_currency": "outstandingBalancesByCurrency",
  });
});

/** @internal */
export type OutstandingBalanceBySupplier$Outbound = {
  supplier_id?: string | undefined;
  supplier_name?: string | undefined;
  outstanding_balances_by_currency?:
    | Array<OutstandingBalanceByCurrency$Outbound>
    | undefined;
};

/** @internal */
export const OutstandingBalanceBySupplier$outboundSchema: z.ZodType<
  OutstandingBalanceBySupplier$Outbound,
  z.ZodTypeDef,
  OutstandingBalanceBySupplier
> = z.object({
  supplierId: z.string().optional(),
  supplierName: z.string().optional(),
  outstandingBalancesByCurrency: z.array(
    OutstandingBalanceByCurrency$outboundSchema,
  ).optional(),
}).transform((v) => {
  return remap$(v, {
    supplierId: "supplier_id",
    supplierName: "supplier_name",
    outstandingBalancesByCurrency: "outstanding_balances_by_currency",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace OutstandingBalanceBySupplier$ {
  /** @deprecated use `OutstandingBalanceBySupplier$inboundSchema` instead. */
  export const inboundSchema = OutstandingBalanceBySupplier$inboundSchema;
  /** @deprecated use `OutstandingBalanceBySupplier$outboundSchema` instead. */
  export const outboundSchema = OutstandingBalanceBySupplier$outboundSchema;
  /** @deprecated use `OutstandingBalanceBySupplier$Outbound` instead. */
  export type Outbound = OutstandingBalanceBySupplier$Outbound;
}

export function outstandingBalanceBySupplierToJSON(
  outstandingBalanceBySupplier: OutstandingBalanceBySupplier,
): string {
  return JSON.stringify(
    OutstandingBalanceBySupplier$outboundSchema.parse(
      outstandingBalanceBySupplier,
    ),
  );
}

export function outstandingBalanceBySupplierFromJSON(
  jsonString: string,
): SafeParseResult<OutstandingBalanceBySupplier, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => OutstandingBalanceBySupplier$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'OutstandingBalanceBySupplier' from JSON`,
  );
}

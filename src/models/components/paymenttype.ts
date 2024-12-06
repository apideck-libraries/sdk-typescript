/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";

/**
 * Type of payment
 */
export const PaymentType = {
  AccountsReceivable: "accounts_receivable",
  AccountsPayable: "accounts_payable",
  AccountsReceivableCredit: "accounts_receivable_credit",
  AccountsPayableCredit: "accounts_payable_credit",
  AccountsReceivableOverpayment: "accounts_receivable_overpayment",
  AccountsPayableOverpayment: "accounts_payable_overpayment",
  AccountsReceivablePrepayment: "accounts_receivable_prepayment",
  AccountsPayablePrepayment: "accounts_payable_prepayment",
} as const;
/**
 * Type of payment
 */
export type PaymentType = ClosedEnum<typeof PaymentType>;

/** @internal */
export const PaymentType$inboundSchema: z.ZodNativeEnum<typeof PaymentType> = z
  .nativeEnum(PaymentType);

/** @internal */
export const PaymentType$outboundSchema: z.ZodNativeEnum<typeof PaymentType> =
  PaymentType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PaymentType$ {
  /** @deprecated use `PaymentType$inboundSchema` instead. */
  export const inboundSchema = PaymentType$inboundSchema;
  /** @deprecated use `PaymentType$outboundSchema` instead. */
  export const outboundSchema = PaymentType$outboundSchema;
}

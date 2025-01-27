/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";

/**
 * Status of payment
 */
export const PaymentStatus = {
  Draft: "draft",
  Authorised: "authorised",
  Rejected: "rejected",
  Paid: "paid",
  Voided: "voided",
  Deleted: "deleted",
} as const;
/**
 * Status of payment
 */
export type PaymentStatus = ClosedEnum<typeof PaymentStatus>;

/** @internal */
export const PaymentStatus$inboundSchema: z.ZodNativeEnum<
  typeof PaymentStatus
> = z.nativeEnum(PaymentStatus);

/** @internal */
export const PaymentStatus$outboundSchema: z.ZodNativeEnum<
  typeof PaymentStatus
> = PaymentStatus$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PaymentStatus$ {
  /** @deprecated use `PaymentStatus$inboundSchema` instead. */
  export const inboundSchema = PaymentStatus$inboundSchema;
  /** @deprecated use `PaymentStatus$outboundSchema` instead. */
  export const outboundSchema = PaymentStatus$outboundSchema;
}

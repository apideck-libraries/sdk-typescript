/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";

/**
 * Frequency of employee compensation.
 */
export const PaymentFrequency = {
  Weekly: "weekly",
  Biweekly: "biweekly",
  Monthly: "monthly",
  ProRata: "pro-rata",
  Other: "other",
} as const;
/**
 * Frequency of employee compensation.
 */
export type PaymentFrequency = ClosedEnum<typeof PaymentFrequency>;

/** @internal */
export const PaymentFrequency$inboundSchema: z.ZodNativeEnum<
  typeof PaymentFrequency
> = z.nativeEnum(PaymentFrequency);

/** @internal */
export const PaymentFrequency$outboundSchema: z.ZodNativeEnum<
  typeof PaymentFrequency
> = PaymentFrequency$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PaymentFrequency$ {
  /** @deprecated use `PaymentFrequency$inboundSchema` instead. */
  export const inboundSchema = PaymentFrequency$inboundSchema;
  /** @deprecated use `PaymentFrequency$outboundSchema` instead. */
  export const outboundSchema = PaymentFrequency$outboundSchema;
}

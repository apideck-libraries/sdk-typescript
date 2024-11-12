/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";

/**
 * An object representing a shipping or billing address.
 */
export type EcommerceAddress = {
  /**
   * Address line 1 of the billing address.
   */
  line1?: string | null | undefined;
  /**
   * Address line 2 of the billing address.
   */
  line2?: string | null | undefined;
  /**
   * Company name of the customer
   */
  companyName?: string | null | undefined;
  /**
   * City of the billing address.
   */
  city?: string | null | undefined;
  /**
   * State/province of the billing address.
   */
  state?: string | null | undefined;
  /**
   * Postal/ZIP code of the billing address.
   */
  postalCode?: string | null | undefined;
  /**
   * Country of the billing address.
   */
  country?: string | null | undefined;
};

/** @internal */
export const EcommerceAddress$inboundSchema: z.ZodType<
  EcommerceAddress,
  z.ZodTypeDef,
  unknown
> = z.object({
  line1: z.nullable(z.string()).optional(),
  line2: z.nullable(z.string()).optional(),
  company_name: z.nullable(z.string()).optional(),
  city: z.nullable(z.string()).optional(),
  state: z.nullable(z.string()).optional(),
  postal_code: z.nullable(z.string()).optional(),
  country: z.nullable(z.string()).optional(),
}).transform((v) => {
  return remap$(v, {
    "company_name": "companyName",
    "postal_code": "postalCode",
  });
});

/** @internal */
export type EcommerceAddress$Outbound = {
  line1?: string | null | undefined;
  line2?: string | null | undefined;
  company_name?: string | null | undefined;
  city?: string | null | undefined;
  state?: string | null | undefined;
  postal_code?: string | null | undefined;
  country?: string | null | undefined;
};

/** @internal */
export const EcommerceAddress$outboundSchema: z.ZodType<
  EcommerceAddress$Outbound,
  z.ZodTypeDef,
  EcommerceAddress
> = z.object({
  line1: z.nullable(z.string()).optional(),
  line2: z.nullable(z.string()).optional(),
  companyName: z.nullable(z.string()).optional(),
  city: z.nullable(z.string()).optional(),
  state: z.nullable(z.string()).optional(),
  postalCode: z.nullable(z.string()).optional(),
  country: z.nullable(z.string()).optional(),
}).transform((v) => {
  return remap$(v, {
    companyName: "company_name",
    postalCode: "postal_code",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace EcommerceAddress$ {
  /** @deprecated use `EcommerceAddress$inboundSchema` instead. */
  export const inboundSchema = EcommerceAddress$inboundSchema;
  /** @deprecated use `EcommerceAddress$outboundSchema` instead. */
  export const outboundSchema = EcommerceAddress$outboundSchema;
  /** @deprecated use `EcommerceAddress$Outbound` instead. */
  export type Outbound = EcommerceAddress$Outbound;
}

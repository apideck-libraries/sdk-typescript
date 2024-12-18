/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type LinkedTaxRate = {
  /**
   * The ID of the object.
   */
  id?: string | null | undefined;
  /**
   * Tax rate code
   */
  code?: string | null | undefined;
  /**
   * Name of the tax rate
   */
  name?: string | null | undefined;
  /**
   * Rate of the tax rate
   */
  rate?: number | null | undefined;
};

/** @internal */
export const LinkedTaxRate$inboundSchema: z.ZodType<
  LinkedTaxRate,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.nullable(z.string()).optional(),
  code: z.nullable(z.string()).optional(),
  name: z.nullable(z.string()).optional(),
  rate: z.nullable(z.number()).optional(),
});

/** @internal */
export type LinkedTaxRate$Outbound = {
  id?: string | null | undefined;
  code?: string | null | undefined;
  name?: string | null | undefined;
  rate?: number | null | undefined;
};

/** @internal */
export const LinkedTaxRate$outboundSchema: z.ZodType<
  LinkedTaxRate$Outbound,
  z.ZodTypeDef,
  LinkedTaxRate
> = z.object({
  id: z.nullable(z.string()).optional(),
  code: z.nullable(z.string()).optional(),
  name: z.nullable(z.string()).optional(),
  rate: z.nullable(z.number()).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace LinkedTaxRate$ {
  /** @deprecated use `LinkedTaxRate$inboundSchema` instead. */
  export const inboundSchema = LinkedTaxRate$inboundSchema;
  /** @deprecated use `LinkedTaxRate$outboundSchema` instead. */
  export const outboundSchema = LinkedTaxRate$outboundSchema;
  /** @deprecated use `LinkedTaxRate$Outbound` instead. */
  export type Outbound = LinkedTaxRate$Outbound;
}

export function linkedTaxRateToJSON(linkedTaxRate: LinkedTaxRate): string {
  return JSON.stringify(LinkedTaxRate$outboundSchema.parse(linkedTaxRate));
}

export function linkedTaxRateFromJSON(
  jsonString: string,
): SafeParseResult<LinkedTaxRate, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => LinkedTaxRate$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'LinkedTaxRate' from JSON`,
  );
}

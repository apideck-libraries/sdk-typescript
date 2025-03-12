/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";

/**
 * The type of profit and loss
 */
export const ProfitAndLossType = {
  Section: "Section",
  Record: "Record",
} as const;
/**
 * The type of profit and loss
 */
export type ProfitAndLossType = ClosedEnum<typeof ProfitAndLossType>;

/** @internal */
export const ProfitAndLossType$inboundSchema: z.ZodNativeEnum<
  typeof ProfitAndLossType
> = z.nativeEnum(ProfitAndLossType);

/** @internal */
export const ProfitAndLossType$outboundSchema: z.ZodNativeEnum<
  typeof ProfitAndLossType
> = ProfitAndLossType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ProfitAndLossType$ {
  /** @deprecated use `ProfitAndLossType$inboundSchema` instead. */
  export const inboundSchema = ProfitAndLossType$inboundSchema;
  /** @deprecated use `ProfitAndLossType$outboundSchema` instead. */
  export const outboundSchema = ProfitAndLossType$outboundSchema;
}

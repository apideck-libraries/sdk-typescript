/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  SortDirection,
  SortDirection$inboundSchema,
  SortDirection$outboundSchema,
} from "./sortdirection.js";

/**
 * The field on which to sort the Opportunities
 */
export const OpportunitiesSortBy = {
  CreatedAt: "created_at",
  UpdatedAt: "updated_at",
  Title: "title",
  WinProbability: "win_probability",
  MonetaryAmount: "monetary_amount",
  Status: "status",
} as const;
/**
 * The field on which to sort the Opportunities
 */
export type OpportunitiesSortBy = ClosedEnum<typeof OpportunitiesSortBy>;

export type OpportunitiesSort = {
  /**
   * The field on which to sort the Opportunities
   */
  by?: OpportunitiesSortBy | undefined;
  /**
   * The direction in which to sort the results
   */
  direction?: SortDirection | undefined;
};

/** @internal */
export const OpportunitiesSortBy$inboundSchema: z.ZodNativeEnum<
  typeof OpportunitiesSortBy
> = z.nativeEnum(OpportunitiesSortBy);

/** @internal */
export const OpportunitiesSortBy$outboundSchema: z.ZodNativeEnum<
  typeof OpportunitiesSortBy
> = OpportunitiesSortBy$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace OpportunitiesSortBy$ {
  /** @deprecated use `OpportunitiesSortBy$inboundSchema` instead. */
  export const inboundSchema = OpportunitiesSortBy$inboundSchema;
  /** @deprecated use `OpportunitiesSortBy$outboundSchema` instead. */
  export const outboundSchema = OpportunitiesSortBy$outboundSchema;
}

/** @internal */
export const OpportunitiesSort$inboundSchema: z.ZodType<
  OpportunitiesSort,
  z.ZodTypeDef,
  unknown
> = z.object({
  by: OpportunitiesSortBy$inboundSchema.optional(),
  direction: SortDirection$inboundSchema.default("asc"),
});

/** @internal */
export type OpportunitiesSort$Outbound = {
  by?: string | undefined;
  direction: string;
};

/** @internal */
export const OpportunitiesSort$outboundSchema: z.ZodType<
  OpportunitiesSort$Outbound,
  z.ZodTypeDef,
  OpportunitiesSort
> = z.object({
  by: OpportunitiesSortBy$outboundSchema.optional(),
  direction: SortDirection$outboundSchema.default("asc"),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace OpportunitiesSort$ {
  /** @deprecated use `OpportunitiesSort$inboundSchema` instead. */
  export const inboundSchema = OpportunitiesSort$inboundSchema;
  /** @deprecated use `OpportunitiesSort$outboundSchema` instead. */
  export const outboundSchema = OpportunitiesSort$outboundSchema;
  /** @deprecated use `OpportunitiesSort$Outbound` instead. */
  export type Outbound = OpportunitiesSort$Outbound;
}

export function opportunitiesSortToJSON(
  opportunitiesSort: OpportunitiesSort,
): string {
  return JSON.stringify(
    OpportunitiesSort$outboundSchema.parse(opportunitiesSort),
  );
}

export function opportunitiesSortFromJSON(
  jsonString: string,
): SafeParseResult<OpportunitiesSort, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => OpportunitiesSort$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'OpportunitiesSort' from JSON`,
  );
}

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
 * The field on which to sort the Companies
 */
export const CompaniesSortBy = {
  CreatedAt: "created_at",
  UpdatedAt: "updated_at",
  Name: "name",
} as const;
/**
 * The field on which to sort the Companies
 */
export type CompaniesSortBy = ClosedEnum<typeof CompaniesSortBy>;

export type CompaniesSort = {
  /**
   * The field on which to sort the Companies
   */
  by?: CompaniesSortBy | undefined;
  /**
   * The direction in which to sort the results
   */
  direction?: SortDirection | undefined;
};

/** @internal */
export const CompaniesSortBy$inboundSchema: z.ZodNativeEnum<
  typeof CompaniesSortBy
> = z.nativeEnum(CompaniesSortBy);

/** @internal */
export const CompaniesSortBy$outboundSchema: z.ZodNativeEnum<
  typeof CompaniesSortBy
> = CompaniesSortBy$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CompaniesSortBy$ {
  /** @deprecated use `CompaniesSortBy$inboundSchema` instead. */
  export const inboundSchema = CompaniesSortBy$inboundSchema;
  /** @deprecated use `CompaniesSortBy$outboundSchema` instead. */
  export const outboundSchema = CompaniesSortBy$outboundSchema;
}

/** @internal */
export const CompaniesSort$inboundSchema: z.ZodType<
  CompaniesSort,
  z.ZodTypeDef,
  unknown
> = z.object({
  by: CompaniesSortBy$inboundSchema.optional(),
  direction: SortDirection$inboundSchema.default("asc"),
});

/** @internal */
export type CompaniesSort$Outbound = {
  by?: string | undefined;
  direction: string;
};

/** @internal */
export const CompaniesSort$outboundSchema: z.ZodType<
  CompaniesSort$Outbound,
  z.ZodTypeDef,
  CompaniesSort
> = z.object({
  by: CompaniesSortBy$outboundSchema.optional(),
  direction: SortDirection$outboundSchema.default("asc"),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CompaniesSort$ {
  /** @deprecated use `CompaniesSort$inboundSchema` instead. */
  export const inboundSchema = CompaniesSort$inboundSchema;
  /** @deprecated use `CompaniesSort$outboundSchema` instead. */
  export const outboundSchema = CompaniesSort$outboundSchema;
  /** @deprecated use `CompaniesSort$Outbound` instead. */
  export type Outbound = CompaniesSort$Outbound;
}

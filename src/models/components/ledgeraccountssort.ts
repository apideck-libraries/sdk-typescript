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
 * The field on which to sort the Ledger Accounts
 */
export const LedgerAccountsSortBy = {
  CreatedAt: "created_at",
  UpdatedAt: "updated_at",
} as const;
/**
 * The field on which to sort the Ledger Accounts
 */
export type LedgerAccountsSortBy = ClosedEnum<typeof LedgerAccountsSortBy>;

export type LedgerAccountsSort = {
  /**
   * The field on which to sort the Ledger Accounts
   */
  by?: LedgerAccountsSortBy | undefined;
  /**
   * The direction in which to sort the results
   */
  direction?: SortDirection | undefined;
};

/** @internal */
export const LedgerAccountsSortBy$inboundSchema: z.ZodNativeEnum<
  typeof LedgerAccountsSortBy
> = z.nativeEnum(LedgerAccountsSortBy);

/** @internal */
export const LedgerAccountsSortBy$outboundSchema: z.ZodNativeEnum<
  typeof LedgerAccountsSortBy
> = LedgerAccountsSortBy$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace LedgerAccountsSortBy$ {
  /** @deprecated use `LedgerAccountsSortBy$inboundSchema` instead. */
  export const inboundSchema = LedgerAccountsSortBy$inboundSchema;
  /** @deprecated use `LedgerAccountsSortBy$outboundSchema` instead. */
  export const outboundSchema = LedgerAccountsSortBy$outboundSchema;
}

/** @internal */
export const LedgerAccountsSort$inboundSchema: z.ZodType<
  LedgerAccountsSort,
  z.ZodTypeDef,
  unknown
> = z.object({
  by: LedgerAccountsSortBy$inboundSchema.optional(),
  direction: SortDirection$inboundSchema.default("asc"),
});

/** @internal */
export type LedgerAccountsSort$Outbound = {
  by?: string | undefined;
  direction: string;
};

/** @internal */
export const LedgerAccountsSort$outboundSchema: z.ZodType<
  LedgerAccountsSort$Outbound,
  z.ZodTypeDef,
  LedgerAccountsSort
> = z.object({
  by: LedgerAccountsSortBy$outboundSchema.optional(),
  direction: SortDirection$outboundSchema.default("asc"),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace LedgerAccountsSort$ {
  /** @deprecated use `LedgerAccountsSort$inboundSchema` instead. */
  export const inboundSchema = LedgerAccountsSort$inboundSchema;
  /** @deprecated use `LedgerAccountsSort$outboundSchema` instead. */
  export const outboundSchema = LedgerAccountsSort$outboundSchema;
  /** @deprecated use `LedgerAccountsSort$Outbound` instead. */
  export type Outbound = LedgerAccountsSort$Outbound;
}

export function ledgerAccountsSortToJSON(
  ledgerAccountsSort: LedgerAccountsSort,
): string {
  return JSON.stringify(
    LedgerAccountsSort$outboundSchema.parse(ledgerAccountsSort),
  );
}

export function ledgerAccountsSortFromJSON(
  jsonString: string,
): SafeParseResult<LedgerAccountsSort, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => LedgerAccountsSort$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'LedgerAccountsSort' from JSON`,
  );
}

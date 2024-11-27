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
 * The field on which to sort the Tickets
 */
export const TicketsSortBy = {
  CreatedAt: "created_at",
  UpdatedAt: "updated_at",
} as const;
/**
 * The field on which to sort the Tickets
 */
export type TicketsSortBy = ClosedEnum<typeof TicketsSortBy>;

export type TicketsSort = {
  /**
   * The field on which to sort the Tickets
   */
  by?: TicketsSortBy | undefined;
  /**
   * The direction in which to sort the results
   */
  direction?: SortDirection | undefined;
};

/** @internal */
export const TicketsSortBy$inboundSchema: z.ZodNativeEnum<
  typeof TicketsSortBy
> = z.nativeEnum(TicketsSortBy);

/** @internal */
export const TicketsSortBy$outboundSchema: z.ZodNativeEnum<
  typeof TicketsSortBy
> = TicketsSortBy$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace TicketsSortBy$ {
  /** @deprecated use `TicketsSortBy$inboundSchema` instead. */
  export const inboundSchema = TicketsSortBy$inboundSchema;
  /** @deprecated use `TicketsSortBy$outboundSchema` instead. */
  export const outboundSchema = TicketsSortBy$outboundSchema;
}

/** @internal */
export const TicketsSort$inboundSchema: z.ZodType<
  TicketsSort,
  z.ZodTypeDef,
  unknown
> = z.object({
  by: TicketsSortBy$inboundSchema.optional(),
  direction: SortDirection$inboundSchema.default("asc"),
});

/** @internal */
export type TicketsSort$Outbound = {
  by?: string | undefined;
  direction: string;
};

/** @internal */
export const TicketsSort$outboundSchema: z.ZodType<
  TicketsSort$Outbound,
  z.ZodTypeDef,
  TicketsSort
> = z.object({
  by: TicketsSortBy$outboundSchema.optional(),
  direction: SortDirection$outboundSchema.default("asc"),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace TicketsSort$ {
  /** @deprecated use `TicketsSort$inboundSchema` instead. */
  export const inboundSchema = TicketsSort$inboundSchema;
  /** @deprecated use `TicketsSort$outboundSchema` instead. */
  export const outboundSchema = TicketsSort$outboundSchema;
  /** @deprecated use `TicketsSort$Outbound` instead. */
  export type Outbound = TicketsSort$Outbound;
}

export function ticketsSortToJSON(ticketsSort: TicketsSort): string {
  return JSON.stringify(TicketsSort$outboundSchema.parse(ticketsSort));
}

export function ticketsSortFromJSON(
  jsonString: string,
): SafeParseResult<TicketsSort, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => TicketsSort$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'TicketsSort' from JSON`,
  );
}

/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

/**
 * Status of customer to filter on
 */
export const CustomersFilterStatus = {
  Active: "active",
  Inactive: "inactive",
  Archived: "archived",
  All: "all",
} as const;
/**
 * Status of customer to filter on
 */
export type CustomersFilterStatus = ClosedEnum<typeof CustomersFilterStatus>;

export type CustomersFilter = {
  /**
   * Company Name of customer to search for
   */
  companyName?: string | undefined;
  /**
   * Display Name of customer to search for
   */
  displayName?: string | undefined;
  /**
   * First name of customer to search for
   */
  firstName?: string | undefined;
  /**
   * Last name of customer to search for
   */
  lastName?: string | undefined;
  /**
   * Email of customer to search for
   */
  email?: string | undefined;
  /**
   * Status of customer to filter on
   */
  status?: CustomersFilterStatus | null | undefined;
  updatedSince?: Date | undefined;
};

/** @internal */
export const CustomersFilterStatus$inboundSchema: z.ZodNativeEnum<
  typeof CustomersFilterStatus
> = z.nativeEnum(CustomersFilterStatus);

/** @internal */
export const CustomersFilterStatus$outboundSchema: z.ZodNativeEnum<
  typeof CustomersFilterStatus
> = CustomersFilterStatus$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CustomersFilterStatus$ {
  /** @deprecated use `CustomersFilterStatus$inboundSchema` instead. */
  export const inboundSchema = CustomersFilterStatus$inboundSchema;
  /** @deprecated use `CustomersFilterStatus$outboundSchema` instead. */
  export const outboundSchema = CustomersFilterStatus$outboundSchema;
}

/** @internal */
export const CustomersFilter$inboundSchema: z.ZodType<
  CustomersFilter,
  z.ZodTypeDef,
  unknown
> = z.object({
  company_name: z.string().optional(),
  display_name: z.string().optional(),
  first_name: z.string().optional(),
  last_name: z.string().optional(),
  email: z.string().optional(),
  status: z.nullable(CustomersFilterStatus$inboundSchema).optional(),
  updated_since: z.string().datetime({ offset: true }).transform(v =>
    new Date(v)
  ).optional(),
}).transform((v) => {
  return remap$(v, {
    "company_name": "companyName",
    "display_name": "displayName",
    "first_name": "firstName",
    "last_name": "lastName",
    "updated_since": "updatedSince",
  });
});

/** @internal */
export type CustomersFilter$Outbound = {
  company_name?: string | undefined;
  display_name?: string | undefined;
  first_name?: string | undefined;
  last_name?: string | undefined;
  email?: string | undefined;
  status?: string | null | undefined;
  updated_since?: string | undefined;
};

/** @internal */
export const CustomersFilter$outboundSchema: z.ZodType<
  CustomersFilter$Outbound,
  z.ZodTypeDef,
  CustomersFilter
> = z.object({
  companyName: z.string().optional(),
  displayName: z.string().optional(),
  firstName: z.string().optional(),
  lastName: z.string().optional(),
  email: z.string().optional(),
  status: z.nullable(CustomersFilterStatus$outboundSchema).optional(),
  updatedSince: z.date().transform(v => v.toISOString()).optional(),
}).transform((v) => {
  return remap$(v, {
    companyName: "company_name",
    displayName: "display_name",
    firstName: "first_name",
    lastName: "last_name",
    updatedSince: "updated_since",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CustomersFilter$ {
  /** @deprecated use `CustomersFilter$inboundSchema` instead. */
  export const inboundSchema = CustomersFilter$inboundSchema;
  /** @deprecated use `CustomersFilter$outboundSchema` instead. */
  export const outboundSchema = CustomersFilter$outboundSchema;
  /** @deprecated use `CustomersFilter$Outbound` instead. */
  export type Outbound = CustomersFilter$Outbound;
}

export function customersFilterToJSON(
  customersFilter: CustomersFilter,
): string {
  return JSON.stringify(CustomersFilter$outboundSchema.parse(customersFilter));
}

export function customersFilterFromJSON(
  jsonString: string,
): SafeParseResult<CustomersFilter, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CustomersFilter$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CustomersFilter' from JSON`,
  );
}

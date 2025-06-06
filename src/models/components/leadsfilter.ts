/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type LeadsFilter = {
  /**
   * Name of the lead to filter on
   */
  name?: string | undefined;
  /**
   * First name of the lead to filter on
   */
  firstName?: string | undefined;
  /**
   * Last name of the lead to filter on
   */
  lastName?: string | undefined;
  /**
   * E-mail of the lead to filter on
   */
  email?: string | undefined;
  /**
   * Phone number of the lead to filter on
   */
  phoneNumber?: string | undefined;
};

/** @internal */
export const LeadsFilter$inboundSchema: z.ZodType<
  LeadsFilter,
  z.ZodTypeDef,
  unknown
> = z.object({
  name: z.string().optional(),
  first_name: z.string().optional(),
  last_name: z.string().optional(),
  email: z.string().optional(),
  phone_number: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    "first_name": "firstName",
    "last_name": "lastName",
    "phone_number": "phoneNumber",
  });
});

/** @internal */
export type LeadsFilter$Outbound = {
  name?: string | undefined;
  first_name?: string | undefined;
  last_name?: string | undefined;
  email?: string | undefined;
  phone_number?: string | undefined;
};

/** @internal */
export const LeadsFilter$outboundSchema: z.ZodType<
  LeadsFilter$Outbound,
  z.ZodTypeDef,
  LeadsFilter
> = z.object({
  name: z.string().optional(),
  firstName: z.string().optional(),
  lastName: z.string().optional(),
  email: z.string().optional(),
  phoneNumber: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    firstName: "first_name",
    lastName: "last_name",
    phoneNumber: "phone_number",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace LeadsFilter$ {
  /** @deprecated use `LeadsFilter$inboundSchema` instead. */
  export const inboundSchema = LeadsFilter$inboundSchema;
  /** @deprecated use `LeadsFilter$outboundSchema` instead. */
  export const outboundSchema = LeadsFilter$outboundSchema;
  /** @deprecated use `LeadsFilter$Outbound` instead. */
  export type Outbound = LeadsFilter$Outbound;
}

export function leadsFilterToJSON(leadsFilter: LeadsFilter): string {
  return JSON.stringify(LeadsFilter$outboundSchema.parse(leadsFilter));
}

export function leadsFilterFromJSON(
  jsonString: string,
): SafeParseResult<LeadsFilter, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => LeadsFilter$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'LeadsFilter' from JSON`,
  );
}

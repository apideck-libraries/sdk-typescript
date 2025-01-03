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
 * The type of phone number
 */
export const PhoneNumberType = {
  Primary: "primary",
  Secondary: "secondary",
  Home: "home",
  Work: "work",
  Office: "office",
  Mobile: "mobile",
  Assistant: "assistant",
  Fax: "fax",
  DirectDialIn: "direct-dial-in",
  Personal: "personal",
  Other: "other",
} as const;
/**
 * The type of phone number
 */
export type PhoneNumberType = ClosedEnum<typeof PhoneNumberType>;

export type PhoneNumber = {
  /**
   * Unique identifier of the phone number
   */
  id?: string | null | undefined;
  /**
   * The country code of the phone number, e.g. +1
   */
  countryCode?: string | null | undefined;
  /**
   * The area code of the phone number, e.g. 323
   */
  areaCode?: string | null | undefined;
  /**
   * The phone number
   */
  number: string;
  /**
   * The extension of the phone number
   */
  extension?: string | null | undefined;
  /**
   * The type of phone number
   */
  type?: PhoneNumberType | null | undefined;
};

/** @internal */
export const PhoneNumberType$inboundSchema: z.ZodNativeEnum<
  typeof PhoneNumberType
> = z.nativeEnum(PhoneNumberType);

/** @internal */
export const PhoneNumberType$outboundSchema: z.ZodNativeEnum<
  typeof PhoneNumberType
> = PhoneNumberType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PhoneNumberType$ {
  /** @deprecated use `PhoneNumberType$inboundSchema` instead. */
  export const inboundSchema = PhoneNumberType$inboundSchema;
  /** @deprecated use `PhoneNumberType$outboundSchema` instead. */
  export const outboundSchema = PhoneNumberType$outboundSchema;
}

/** @internal */
export const PhoneNumber$inboundSchema: z.ZodType<
  PhoneNumber,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.nullable(z.string()).optional(),
  country_code: z.nullable(z.string()).optional(),
  area_code: z.nullable(z.string()).optional(),
  number: z.string(),
  extension: z.nullable(z.string()).optional(),
  type: z.nullable(PhoneNumberType$inboundSchema).optional(),
}).transform((v) => {
  return remap$(v, {
    "country_code": "countryCode",
    "area_code": "areaCode",
  });
});

/** @internal */
export type PhoneNumber$Outbound = {
  id?: string | null | undefined;
  country_code?: string | null | undefined;
  area_code?: string | null | undefined;
  number: string;
  extension?: string | null | undefined;
  type?: string | null | undefined;
};

/** @internal */
export const PhoneNumber$outboundSchema: z.ZodType<
  PhoneNumber$Outbound,
  z.ZodTypeDef,
  PhoneNumber
> = z.object({
  id: z.nullable(z.string()).optional(),
  countryCode: z.nullable(z.string()).optional(),
  areaCode: z.nullable(z.string()).optional(),
  number: z.string(),
  extension: z.nullable(z.string()).optional(),
  type: z.nullable(PhoneNumberType$outboundSchema).optional(),
}).transform((v) => {
  return remap$(v, {
    countryCode: "country_code",
    areaCode: "area_code",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PhoneNumber$ {
  /** @deprecated use `PhoneNumber$inboundSchema` instead. */
  export const inboundSchema = PhoneNumber$inboundSchema;
  /** @deprecated use `PhoneNumber$outboundSchema` instead. */
  export const outboundSchema = PhoneNumber$outboundSchema;
  /** @deprecated use `PhoneNumber$Outbound` instead. */
  export type Outbound = PhoneNumber$Outbound;
}

export function phoneNumberToJSON(phoneNumber: PhoneNumber): string {
  return JSON.stringify(PhoneNumber$outboundSchema.parse(phoneNumber));
}

export function phoneNumberFromJSON(
  jsonString: string,
): SafeParseResult<PhoneNumber, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => PhoneNumber$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'PhoneNumber' from JSON`,
  );
}

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
 * The type of address.
 */
export const AddressType = {
  Primary: "primary",
  Secondary: "secondary",
  Home: "home",
  Office: "office",
  Shipping: "shipping",
  Billing: "billing",
  Other: "other",
} as const;
/**
 * The type of address.
 */
export type AddressType = ClosedEnum<typeof AddressType>;

export type Address = {
  /**
   * Unique identifier for the address.
   */
  id?: string | null | undefined;
  /**
   * The type of address.
   */
  type?: AddressType | null | undefined;
  /**
   * The address string. Some APIs don't provide structured address data.
   */
  string?: string | null | undefined;
  /**
   * The name of the address.
   */
  name?: string | null | undefined;
  /**
   * Line 1 of the address e.g. number, street, suite, apt #, etc.
   */
  line1?: string | null | undefined;
  /**
   * Line 2 of the address
   */
  line2?: string | null | undefined;
  /**
   * Line 3 of the address
   */
  line3?: string | null | undefined;
  /**
   * Line 4 of the address
   */
  line4?: string | null | undefined;
  /**
   * Street number
   */
  streetNumber?: string | null | undefined;
  /**
   * Name of city.
   */
  city?: string | null | undefined;
  /**
   * Name of state
   */
  state?: string | null | undefined;
  /**
   * Zip code or equivalent.
   */
  postalCode?: string | null | undefined;
  /**
   * country code according to ISO 3166-1 alpha-2.
   */
  country?: string | null | undefined;
  /**
   * Latitude of the address
   */
  latitude?: string | null | undefined;
  /**
   * Longitude of the address
   */
  longitude?: string | null | undefined;
  /**
   * Address field that holds a sublocality, such as a county
   */
  county?: string | null | undefined;
  /**
   * Name of the contact person at the address
   */
  contactName?: string | null | undefined;
  /**
   * Salutation of the contact person at the address
   */
  salutation?: string | null | undefined;
  /**
   * Phone number of the address
   */
  phoneNumber?: string | null | undefined;
  /**
   * Fax number of the address
   */
  fax?: string | null | undefined;
  /**
   * Email address of the address
   */
  email?: string | null | undefined;
  /**
   * Website of the address
   */
  website?: string | null | undefined;
  /**
   * Additional notes
   */
  notes?: string | null | undefined;
  /**
   * A binary value used to detect updates to a object and prevent data conflicts. It is incremented each time an update is made to the object.
   */
  rowVersion?: string | null | undefined;
};

/** @internal */
export const AddressType$inboundSchema: z.ZodNativeEnum<typeof AddressType> = z
  .nativeEnum(AddressType);

/** @internal */
export const AddressType$outboundSchema: z.ZodNativeEnum<typeof AddressType> =
  AddressType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AddressType$ {
  /** @deprecated use `AddressType$inboundSchema` instead. */
  export const inboundSchema = AddressType$inboundSchema;
  /** @deprecated use `AddressType$outboundSchema` instead. */
  export const outboundSchema = AddressType$outboundSchema;
}

/** @internal */
export const Address$inboundSchema: z.ZodType<Address, z.ZodTypeDef, unknown> =
  z.object({
    id: z.nullable(z.string()).optional(),
    type: z.nullable(AddressType$inboundSchema).optional(),
    string: z.nullable(z.string()).optional(),
    name: z.nullable(z.string()).optional(),
    line1: z.nullable(z.string()).optional(),
    line2: z.nullable(z.string()).optional(),
    line3: z.nullable(z.string()).optional(),
    line4: z.nullable(z.string()).optional(),
    street_number: z.nullable(z.string()).optional(),
    city: z.nullable(z.string()).optional(),
    state: z.nullable(z.string()).optional(),
    postal_code: z.nullable(z.string()).optional(),
    country: z.nullable(z.string()).optional(),
    latitude: z.nullable(z.string()).optional(),
    longitude: z.nullable(z.string()).optional(),
    county: z.nullable(z.string()).optional(),
    contact_name: z.nullable(z.string()).optional(),
    salutation: z.nullable(z.string()).optional(),
    phone_number: z.nullable(z.string()).optional(),
    fax: z.nullable(z.string()).optional(),
    email: z.nullable(z.string()).optional(),
    website: z.nullable(z.string()).optional(),
    notes: z.nullable(z.string()).optional(),
    row_version: z.nullable(z.string()).optional(),
  }).transform((v) => {
    return remap$(v, {
      "street_number": "streetNumber",
      "postal_code": "postalCode",
      "contact_name": "contactName",
      "phone_number": "phoneNumber",
      "row_version": "rowVersion",
    });
  });

/** @internal */
export type Address$Outbound = {
  id?: string | null | undefined;
  type?: string | null | undefined;
  string?: string | null | undefined;
  name?: string | null | undefined;
  line1?: string | null | undefined;
  line2?: string | null | undefined;
  line3?: string | null | undefined;
  line4?: string | null | undefined;
  street_number?: string | null | undefined;
  city?: string | null | undefined;
  state?: string | null | undefined;
  postal_code?: string | null | undefined;
  country?: string | null | undefined;
  latitude?: string | null | undefined;
  longitude?: string | null | undefined;
  county?: string | null | undefined;
  contact_name?: string | null | undefined;
  salutation?: string | null | undefined;
  phone_number?: string | null | undefined;
  fax?: string | null | undefined;
  email?: string | null | undefined;
  website?: string | null | undefined;
  notes?: string | null | undefined;
  row_version?: string | null | undefined;
};

/** @internal */
export const Address$outboundSchema: z.ZodType<
  Address$Outbound,
  z.ZodTypeDef,
  Address
> = z.object({
  id: z.nullable(z.string()).optional(),
  type: z.nullable(AddressType$outboundSchema).optional(),
  string: z.nullable(z.string()).optional(),
  name: z.nullable(z.string()).optional(),
  line1: z.nullable(z.string()).optional(),
  line2: z.nullable(z.string()).optional(),
  line3: z.nullable(z.string()).optional(),
  line4: z.nullable(z.string()).optional(),
  streetNumber: z.nullable(z.string()).optional(),
  city: z.nullable(z.string()).optional(),
  state: z.nullable(z.string()).optional(),
  postalCode: z.nullable(z.string()).optional(),
  country: z.nullable(z.string()).optional(),
  latitude: z.nullable(z.string()).optional(),
  longitude: z.nullable(z.string()).optional(),
  county: z.nullable(z.string()).optional(),
  contactName: z.nullable(z.string()).optional(),
  salutation: z.nullable(z.string()).optional(),
  phoneNumber: z.nullable(z.string()).optional(),
  fax: z.nullable(z.string()).optional(),
  email: z.nullable(z.string()).optional(),
  website: z.nullable(z.string()).optional(),
  notes: z.nullable(z.string()).optional(),
  rowVersion: z.nullable(z.string()).optional(),
}).transform((v) => {
  return remap$(v, {
    streetNumber: "street_number",
    postalCode: "postal_code",
    contactName: "contact_name",
    phoneNumber: "phone_number",
    rowVersion: "row_version",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Address$ {
  /** @deprecated use `Address$inboundSchema` instead. */
  export const inboundSchema = Address$inboundSchema;
  /** @deprecated use `Address$outboundSchema` instead. */
  export const outboundSchema = Address$outboundSchema;
  /** @deprecated use `Address$Outbound` instead. */
  export type Outbound = Address$Outbound;
}

export function addressToJSON(address: Address): string {
  return JSON.stringify(Address$outboundSchema.parse(address));
}

export function addressFromJSON(
  jsonString: string,
): SafeParseResult<Address, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Address$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Address' from JSON`,
  );
}

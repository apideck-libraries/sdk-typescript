/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  Currency,
  Currency$inboundSchema,
  Currency$outboundSchema,
} from "./currency.js";
import {
  CustomMappings,
  CustomMappings$inboundSchema,
  CustomMappings$Outbound,
  CustomMappings$outboundSchema,
} from "./custommappings.js";
import {
  Email,
  Email$inboundSchema,
  Email$Outbound,
  Email$outboundSchema,
} from "./email.js";
import {
  LinkedEcommerceOrder,
  LinkedEcommerceOrder$inboundSchema,
  LinkedEcommerceOrder$Outbound,
  LinkedEcommerceOrder$outboundSchema,
} from "./linkedecommerceorder.js";
import {
  PhoneNumber,
  PhoneNumber$inboundSchema,
  PhoneNumber$Outbound,
  PhoneNumber$outboundSchema,
} from "./phonenumber.js";

/**
 * The current status of the customer
 */
export const CustomerStatus = {
  Active: "active",
  Archived: "archived",
} as const;
/**
 * The current status of the customer
 */
export type CustomerStatus = ClosedEnum<typeof CustomerStatus>;

export const EcommerceCustomerType = {
  Billing: "billing",
  Shipping: "shipping",
  Other: "other",
} as const;
export type EcommerceCustomerType = ClosedEnum<typeof EcommerceCustomerType>;

export type Addresses = {
  type?: EcommerceCustomerType | undefined;
  /**
   * A unique identifier for an object.
   */
  id?: string | null | undefined;
  /**
   * First line of the street address of the customer
   */
  line1?: string | null | undefined;
  /**
   * Second line of the street address of the customer
   */
  line2?: string | null | undefined;
  /**
   * City of the customer
   */
  city?: string | null | undefined;
  /**
   * State of the customer
   */
  state?: string | null | undefined;
  /**
   * Postal code of the customer
   */
  postalCode?: string | null | undefined;
  /**
   * Country of the customer
   */
  country?: string | null | undefined;
};

export type EcommerceCustomer = {
  /**
   * A unique identifier for an object.
   */
  id: string;
  /**
   * Full name of the customer
   */
  name?: string | null | undefined;
  /**
   * First name of the customer
   */
  firstName?: string | null | undefined;
  /**
   * Last name of the customer
   */
  lastName?: string | null | undefined;
  /**
   * Company name of the customer
   */
  companyName?: string | null | undefined;
  /**
   * The current status of the customer
   */
  status?: CustomerStatus | null | undefined;
  /**
   * Indicates the associated currency for an amount of money. Values correspond to [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217).
   */
  currency?: Currency | null | undefined;
  /**
   * An array of email addresses for the customer.
   */
  emails?: Array<Email> | null | undefined;
  /**
   * An array of phone numbers for the customer.
   */
  phoneNumbers?: Array<PhoneNumber> | null | undefined;
  /**
   * An array of addresses for the customer.
   */
  addresses?: Array<Addresses> | undefined;
  orders?: Array<LinkedEcommerceOrder> | undefined;
  /**
   * When custom mappings are configured on the resource, the result is included here.
   */
  customMappings?: CustomMappings | null | undefined;
  /**
   * The date and time when the object was created.
   */
  createdAt?: Date | null | undefined;
  /**
   * The date and time when the object was last updated.
   */
  updatedAt?: Date | null | undefined;
};

/** @internal */
export const CustomerStatus$inboundSchema: z.ZodNativeEnum<
  typeof CustomerStatus
> = z.nativeEnum(CustomerStatus);

/** @internal */
export const CustomerStatus$outboundSchema: z.ZodNativeEnum<
  typeof CustomerStatus
> = CustomerStatus$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CustomerStatus$ {
  /** @deprecated use `CustomerStatus$inboundSchema` instead. */
  export const inboundSchema = CustomerStatus$inboundSchema;
  /** @deprecated use `CustomerStatus$outboundSchema` instead. */
  export const outboundSchema = CustomerStatus$outboundSchema;
}

/** @internal */
export const EcommerceCustomerType$inboundSchema: z.ZodNativeEnum<
  typeof EcommerceCustomerType
> = z.nativeEnum(EcommerceCustomerType);

/** @internal */
export const EcommerceCustomerType$outboundSchema: z.ZodNativeEnum<
  typeof EcommerceCustomerType
> = EcommerceCustomerType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace EcommerceCustomerType$ {
  /** @deprecated use `EcommerceCustomerType$inboundSchema` instead. */
  export const inboundSchema = EcommerceCustomerType$inboundSchema;
  /** @deprecated use `EcommerceCustomerType$outboundSchema` instead. */
  export const outboundSchema = EcommerceCustomerType$outboundSchema;
}

/** @internal */
export const Addresses$inboundSchema: z.ZodType<
  Addresses,
  z.ZodTypeDef,
  unknown
> = z.object({
  type: EcommerceCustomerType$inboundSchema.optional(),
  id: z.nullable(z.string()).optional(),
  line1: z.nullable(z.string()).optional(),
  line2: z.nullable(z.string()).optional(),
  city: z.nullable(z.string()).optional(),
  state: z.nullable(z.string()).optional(),
  postal_code: z.nullable(z.string()).optional(),
  country: z.nullable(z.string()).optional(),
}).transform((v) => {
  return remap$(v, {
    "postal_code": "postalCode",
  });
});

/** @internal */
export type Addresses$Outbound = {
  type?: string | undefined;
  id?: string | null | undefined;
  line1?: string | null | undefined;
  line2?: string | null | undefined;
  city?: string | null | undefined;
  state?: string | null | undefined;
  postal_code?: string | null | undefined;
  country?: string | null | undefined;
};

/** @internal */
export const Addresses$outboundSchema: z.ZodType<
  Addresses$Outbound,
  z.ZodTypeDef,
  Addresses
> = z.object({
  type: EcommerceCustomerType$outboundSchema.optional(),
  id: z.nullable(z.string()).optional(),
  line1: z.nullable(z.string()).optional(),
  line2: z.nullable(z.string()).optional(),
  city: z.nullable(z.string()).optional(),
  state: z.nullable(z.string()).optional(),
  postalCode: z.nullable(z.string()).optional(),
  country: z.nullable(z.string()).optional(),
}).transform((v) => {
  return remap$(v, {
    postalCode: "postal_code",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Addresses$ {
  /** @deprecated use `Addresses$inboundSchema` instead. */
  export const inboundSchema = Addresses$inboundSchema;
  /** @deprecated use `Addresses$outboundSchema` instead. */
  export const outboundSchema = Addresses$outboundSchema;
  /** @deprecated use `Addresses$Outbound` instead. */
  export type Outbound = Addresses$Outbound;
}

export function addressesToJSON(addresses: Addresses): string {
  return JSON.stringify(Addresses$outboundSchema.parse(addresses));
}

export function addressesFromJSON(
  jsonString: string,
): SafeParseResult<Addresses, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Addresses$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Addresses' from JSON`,
  );
}

/** @internal */
export const EcommerceCustomer$inboundSchema: z.ZodType<
  EcommerceCustomer,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
  name: z.nullable(z.string()).optional(),
  first_name: z.nullable(z.string()).optional(),
  last_name: z.nullable(z.string()).optional(),
  company_name: z.nullable(z.string()).optional(),
  status: z.nullable(CustomerStatus$inboundSchema).optional(),
  currency: z.nullable(Currency$inboundSchema).optional(),
  emails: z.nullable(z.array(Email$inboundSchema)).optional(),
  phone_numbers: z.nullable(z.array(PhoneNumber$inboundSchema)).optional(),
  addresses: z.array(z.lazy(() => Addresses$inboundSchema)).optional(),
  orders: z.array(LinkedEcommerceOrder$inboundSchema).optional(),
  custom_mappings: z.nullable(CustomMappings$inboundSchema).optional(),
  created_at: z.nullable(
    z.string().datetime({ offset: true }).transform(v => new Date(v)),
  ).optional(),
  updated_at: z.nullable(
    z.string().datetime({ offset: true }).transform(v => new Date(v)),
  ).optional(),
}).transform((v) => {
  return remap$(v, {
    "first_name": "firstName",
    "last_name": "lastName",
    "company_name": "companyName",
    "phone_numbers": "phoneNumbers",
    "custom_mappings": "customMappings",
    "created_at": "createdAt",
    "updated_at": "updatedAt",
  });
});

/** @internal */
export type EcommerceCustomer$Outbound = {
  id: string;
  name?: string | null | undefined;
  first_name?: string | null | undefined;
  last_name?: string | null | undefined;
  company_name?: string | null | undefined;
  status?: string | null | undefined;
  currency?: string | null | undefined;
  emails?: Array<Email$Outbound> | null | undefined;
  phone_numbers?: Array<PhoneNumber$Outbound> | null | undefined;
  addresses?: Array<Addresses$Outbound> | undefined;
  orders?: Array<LinkedEcommerceOrder$Outbound> | undefined;
  custom_mappings?: CustomMappings$Outbound | null | undefined;
  created_at?: string | null | undefined;
  updated_at?: string | null | undefined;
};

/** @internal */
export const EcommerceCustomer$outboundSchema: z.ZodType<
  EcommerceCustomer$Outbound,
  z.ZodTypeDef,
  EcommerceCustomer
> = z.object({
  id: z.string(),
  name: z.nullable(z.string()).optional(),
  firstName: z.nullable(z.string()).optional(),
  lastName: z.nullable(z.string()).optional(),
  companyName: z.nullable(z.string()).optional(),
  status: z.nullable(CustomerStatus$outboundSchema).optional(),
  currency: z.nullable(Currency$outboundSchema).optional(),
  emails: z.nullable(z.array(Email$outboundSchema)).optional(),
  phoneNumbers: z.nullable(z.array(PhoneNumber$outboundSchema)).optional(),
  addresses: z.array(z.lazy(() => Addresses$outboundSchema)).optional(),
  orders: z.array(LinkedEcommerceOrder$outboundSchema).optional(),
  customMappings: z.nullable(CustomMappings$outboundSchema).optional(),
  createdAt: z.nullable(z.date().transform(v => v.toISOString())).optional(),
  updatedAt: z.nullable(z.date().transform(v => v.toISOString())).optional(),
}).transform((v) => {
  return remap$(v, {
    firstName: "first_name",
    lastName: "last_name",
    companyName: "company_name",
    phoneNumbers: "phone_numbers",
    customMappings: "custom_mappings",
    createdAt: "created_at",
    updatedAt: "updated_at",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace EcommerceCustomer$ {
  /** @deprecated use `EcommerceCustomer$inboundSchema` instead. */
  export const inboundSchema = EcommerceCustomer$inboundSchema;
  /** @deprecated use `EcommerceCustomer$outboundSchema` instead. */
  export const outboundSchema = EcommerceCustomer$outboundSchema;
  /** @deprecated use `EcommerceCustomer$Outbound` instead. */
  export type Outbound = EcommerceCustomer$Outbound;
}

export function ecommerceCustomerToJSON(
  ecommerceCustomer: EcommerceCustomer,
): string {
  return JSON.stringify(
    EcommerceCustomer$outboundSchema.parse(ecommerceCustomer),
  );
}

export function ecommerceCustomerFromJSON(
  jsonString: string,
): SafeParseResult<EcommerceCustomer, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => EcommerceCustomer$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'EcommerceCustomer' from JSON`,
  );
}

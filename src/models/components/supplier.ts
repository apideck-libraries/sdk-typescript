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
  Address,
  Address$inboundSchema,
  Address$Outbound,
  Address$outboundSchema,
} from "./address.js";
import {
  BankAccount,
  BankAccount$inboundSchema,
  BankAccount$Outbound,
  BankAccount$outboundSchema,
} from "./bankaccount.js";
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
  LinkedLedgerAccount,
  LinkedLedgerAccount$inboundSchema,
  LinkedLedgerAccount$Outbound,
  LinkedLedgerAccount$outboundSchema,
} from "./linkedledgeraccount.js";
import {
  LinkedLedgerAccountInput,
  LinkedLedgerAccountInput$inboundSchema,
  LinkedLedgerAccountInput$Outbound,
  LinkedLedgerAccountInput$outboundSchema,
} from "./linkedledgeraccountinput.js";
import {
  LinkedTaxRate,
  LinkedTaxRate$inboundSchema,
  LinkedTaxRate$Outbound,
  LinkedTaxRate$outboundSchema,
} from "./linkedtaxrate.js";
import {
  LinkedTaxRateInput,
  LinkedTaxRateInput$inboundSchema,
  LinkedTaxRateInput$Outbound,
  LinkedTaxRateInput$outboundSchema,
} from "./linkedtaxrateinput.js";
import {
  PassThroughBody,
  PassThroughBody$inboundSchema,
  PassThroughBody$Outbound,
  PassThroughBody$outboundSchema,
} from "./passthroughbody.js";
import {
  PhoneNumber,
  PhoneNumber$inboundSchema,
  PhoneNumber$Outbound,
  PhoneNumber$outboundSchema,
} from "./phonenumber.js";
import {
  Website,
  Website$inboundSchema,
  Website$Outbound,
  Website$outboundSchema,
} from "./website.js";

/**
 * Supplier status
 */
export const SupplierStatus = {
  Active: "active",
  Inactive: "inactive",
  Archived: "archived",
  GdprErasureRequest: "gdpr-erasure-request",
  Unknown: "unknown",
} as const;
/**
 * Supplier status
 */
export type SupplierStatus = ClosedEnum<typeof SupplierStatus>;

export type Supplier = {
  /**
   * A unique identifier for an object.
   */
  id: string;
  /**
   * The third-party API ID of original entity
   */
  downstreamId?: string | null | undefined;
  /**
   * Display ID
   */
  displayId?: string | null | undefined;
  /**
   * Display name
   */
  displayName?: string | null | undefined;
  /**
   * The name of the company.
   */
  companyName?: string | null | undefined;
  /**
   * The company or subsidiary id the transaction belongs to
   */
  companyId?: string | null | undefined;
  /**
   * The job title of the person.
   */
  title?: string | null | undefined;
  /**
   * The first name of the person.
   */
  firstName?: string | null | undefined;
  /**
   * Middle name of the person.
   */
  middleName?: string | null | undefined;
  /**
   * The last name of the person.
   */
  lastName?: string | null | undefined;
  suffix?: string | null | undefined;
  /**
   * Is this an individual or business supplier
   */
  individual?: boolean | null | undefined;
  addresses?: Array<Address> | undefined;
  phoneNumbers?: Array<PhoneNumber> | undefined;
  emails?: Array<Email> | undefined;
  websites?: Array<Website> | undefined;
  bankAccounts?: Array<BankAccount> | undefined;
  /**
   * Some notes about this supplier
   */
  notes?: string | null | undefined;
  taxRate?: LinkedTaxRate | undefined;
  taxNumber?: string | null | undefined;
  /**
   * Indicates the associated currency for an amount of money. Values correspond to [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217).
   */
  currency?: Currency | null | undefined;
  account?: LinkedLedgerAccount | null | undefined;
  /**
   * Supplier status
   */
  status?: SupplierStatus | null | undefined;
  /**
   * Payment method used for the transaction, such as cash, credit card, bank transfer, or check
   */
  paymentMethod?: string | null | undefined;
  /**
   * The channel through which the transaction is processed.
   */
  channel?: string | null | undefined;
  /**
   * When custom mappings are configured on the resource, the result is included here.
   */
  customMappings?: CustomMappings | null | undefined;
  /**
   * The user who last updated the object.
   */
  updatedBy?: string | null | undefined;
  /**
   * The user who created the object.
   */
  createdBy?: string | null | undefined;
  /**
   * The date and time when the object was last updated.
   */
  updatedAt?: Date | null | undefined;
  /**
   * The date and time when the object was created.
   */
  createdAt?: Date | null | undefined;
  /**
   * A binary value used to detect updates to a object and prevent data conflicts. It is incremented each time an update is made to the object.
   */
  rowVersion?: string | null | undefined;
  /**
   * The pass_through property allows passing service-specific, custom data or structured modifications in request body when creating or updating resources.
   */
  passThrough?: Array<PassThroughBody> | undefined;
};

export type SupplierInput = {
  /**
   * Display ID
   */
  displayId?: string | null | undefined;
  /**
   * Display name
   */
  displayName?: string | null | undefined;
  /**
   * The name of the company.
   */
  companyName?: string | null | undefined;
  /**
   * The company or subsidiary id the transaction belongs to
   */
  companyId?: string | null | undefined;
  /**
   * The job title of the person.
   */
  title?: string | null | undefined;
  /**
   * The first name of the person.
   */
  firstName?: string | null | undefined;
  /**
   * Middle name of the person.
   */
  middleName?: string | null | undefined;
  /**
   * The last name of the person.
   */
  lastName?: string | null | undefined;
  suffix?: string | null | undefined;
  /**
   * Is this an individual or business supplier
   */
  individual?: boolean | null | undefined;
  addresses?: Array<Address> | undefined;
  phoneNumbers?: Array<PhoneNumber> | undefined;
  emails?: Array<Email> | undefined;
  websites?: Array<Website> | undefined;
  bankAccounts?: Array<BankAccount> | undefined;
  /**
   * Some notes about this supplier
   */
  notes?: string | null | undefined;
  taxRate?: LinkedTaxRateInput | undefined;
  taxNumber?: string | null | undefined;
  /**
   * Indicates the associated currency for an amount of money. Values correspond to [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217).
   */
  currency?: Currency | null | undefined;
  account?: LinkedLedgerAccountInput | null | undefined;
  /**
   * Supplier status
   */
  status?: SupplierStatus | null | undefined;
  /**
   * Payment method used for the transaction, such as cash, credit card, bank transfer, or check
   */
  paymentMethod?: string | null | undefined;
  /**
   * The channel through which the transaction is processed.
   */
  channel?: string | null | undefined;
  /**
   * A binary value used to detect updates to a object and prevent data conflicts. It is incremented each time an update is made to the object.
   */
  rowVersion?: string | null | undefined;
  /**
   * The pass_through property allows passing service-specific, custom data or structured modifications in request body when creating or updating resources.
   */
  passThrough?: Array<PassThroughBody> | undefined;
};

/** @internal */
export const SupplierStatus$inboundSchema: z.ZodNativeEnum<
  typeof SupplierStatus
> = z.nativeEnum(SupplierStatus);

/** @internal */
export const SupplierStatus$outboundSchema: z.ZodNativeEnum<
  typeof SupplierStatus
> = SupplierStatus$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace SupplierStatus$ {
  /** @deprecated use `SupplierStatus$inboundSchema` instead. */
  export const inboundSchema = SupplierStatus$inboundSchema;
  /** @deprecated use `SupplierStatus$outboundSchema` instead. */
  export const outboundSchema = SupplierStatus$outboundSchema;
}

/** @internal */
export const Supplier$inboundSchema: z.ZodType<
  Supplier,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
  downstream_id: z.nullable(z.string()).optional(),
  display_id: z.nullable(z.string()).optional(),
  display_name: z.nullable(z.string()).optional(),
  company_name: z.nullable(z.string()).optional(),
  company_id: z.nullable(z.string()).optional(),
  title: z.nullable(z.string()).optional(),
  first_name: z.nullable(z.string()).optional(),
  middle_name: z.nullable(z.string()).optional(),
  last_name: z.nullable(z.string()).optional(),
  suffix: z.nullable(z.string()).optional(),
  individual: z.nullable(z.boolean()).optional(),
  addresses: z.array(Address$inboundSchema).optional(),
  phone_numbers: z.array(PhoneNumber$inboundSchema).optional(),
  emails: z.array(Email$inboundSchema).optional(),
  websites: z.array(Website$inboundSchema).optional(),
  bank_accounts: z.array(BankAccount$inboundSchema).optional(),
  notes: z.nullable(z.string()).optional(),
  tax_rate: LinkedTaxRate$inboundSchema.optional(),
  tax_number: z.nullable(z.string()).optional(),
  currency: z.nullable(Currency$inboundSchema).optional(),
  account: z.nullable(LinkedLedgerAccount$inboundSchema).optional(),
  status: z.nullable(SupplierStatus$inboundSchema).optional(),
  payment_method: z.nullable(z.string()).optional(),
  channel: z.nullable(z.string()).optional(),
  custom_mappings: z.nullable(CustomMappings$inboundSchema).optional(),
  updated_by: z.nullable(z.string()).optional(),
  created_by: z.nullable(z.string()).optional(),
  updated_at: z.nullable(
    z.string().datetime({ offset: true }).transform(v => new Date(v)),
  ).optional(),
  created_at: z.nullable(
    z.string().datetime({ offset: true }).transform(v => new Date(v)),
  ).optional(),
  row_version: z.nullable(z.string()).optional(),
  pass_through: z.array(PassThroughBody$inboundSchema).optional(),
}).transform((v) => {
  return remap$(v, {
    "downstream_id": "downstreamId",
    "display_id": "displayId",
    "display_name": "displayName",
    "company_name": "companyName",
    "company_id": "companyId",
    "first_name": "firstName",
    "middle_name": "middleName",
    "last_name": "lastName",
    "phone_numbers": "phoneNumbers",
    "bank_accounts": "bankAccounts",
    "tax_rate": "taxRate",
    "tax_number": "taxNumber",
    "payment_method": "paymentMethod",
    "custom_mappings": "customMappings",
    "updated_by": "updatedBy",
    "created_by": "createdBy",
    "updated_at": "updatedAt",
    "created_at": "createdAt",
    "row_version": "rowVersion",
    "pass_through": "passThrough",
  });
});

/** @internal */
export type Supplier$Outbound = {
  id: string;
  downstream_id?: string | null | undefined;
  display_id?: string | null | undefined;
  display_name?: string | null | undefined;
  company_name?: string | null | undefined;
  company_id?: string | null | undefined;
  title?: string | null | undefined;
  first_name?: string | null | undefined;
  middle_name?: string | null | undefined;
  last_name?: string | null | undefined;
  suffix?: string | null | undefined;
  individual?: boolean | null | undefined;
  addresses?: Array<Address$Outbound> | undefined;
  phone_numbers?: Array<PhoneNumber$Outbound> | undefined;
  emails?: Array<Email$Outbound> | undefined;
  websites?: Array<Website$Outbound> | undefined;
  bank_accounts?: Array<BankAccount$Outbound> | undefined;
  notes?: string | null | undefined;
  tax_rate?: LinkedTaxRate$Outbound | undefined;
  tax_number?: string | null | undefined;
  currency?: string | null | undefined;
  account?: LinkedLedgerAccount$Outbound | null | undefined;
  status?: string | null | undefined;
  payment_method?: string | null | undefined;
  channel?: string | null | undefined;
  custom_mappings?: CustomMappings$Outbound | null | undefined;
  updated_by?: string | null | undefined;
  created_by?: string | null | undefined;
  updated_at?: string | null | undefined;
  created_at?: string | null | undefined;
  row_version?: string | null | undefined;
  pass_through?: Array<PassThroughBody$Outbound> | undefined;
};

/** @internal */
export const Supplier$outboundSchema: z.ZodType<
  Supplier$Outbound,
  z.ZodTypeDef,
  Supplier
> = z.object({
  id: z.string(),
  downstreamId: z.nullable(z.string()).optional(),
  displayId: z.nullable(z.string()).optional(),
  displayName: z.nullable(z.string()).optional(),
  companyName: z.nullable(z.string()).optional(),
  companyId: z.nullable(z.string()).optional(),
  title: z.nullable(z.string()).optional(),
  firstName: z.nullable(z.string()).optional(),
  middleName: z.nullable(z.string()).optional(),
  lastName: z.nullable(z.string()).optional(),
  suffix: z.nullable(z.string()).optional(),
  individual: z.nullable(z.boolean()).optional(),
  addresses: z.array(Address$outboundSchema).optional(),
  phoneNumbers: z.array(PhoneNumber$outboundSchema).optional(),
  emails: z.array(Email$outboundSchema).optional(),
  websites: z.array(Website$outboundSchema).optional(),
  bankAccounts: z.array(BankAccount$outboundSchema).optional(),
  notes: z.nullable(z.string()).optional(),
  taxRate: LinkedTaxRate$outboundSchema.optional(),
  taxNumber: z.nullable(z.string()).optional(),
  currency: z.nullable(Currency$outboundSchema).optional(),
  account: z.nullable(LinkedLedgerAccount$outboundSchema).optional(),
  status: z.nullable(SupplierStatus$outboundSchema).optional(),
  paymentMethod: z.nullable(z.string()).optional(),
  channel: z.nullable(z.string()).optional(),
  customMappings: z.nullable(CustomMappings$outboundSchema).optional(),
  updatedBy: z.nullable(z.string()).optional(),
  createdBy: z.nullable(z.string()).optional(),
  updatedAt: z.nullable(z.date().transform(v => v.toISOString())).optional(),
  createdAt: z.nullable(z.date().transform(v => v.toISOString())).optional(),
  rowVersion: z.nullable(z.string()).optional(),
  passThrough: z.array(PassThroughBody$outboundSchema).optional(),
}).transform((v) => {
  return remap$(v, {
    downstreamId: "downstream_id",
    displayId: "display_id",
    displayName: "display_name",
    companyName: "company_name",
    companyId: "company_id",
    firstName: "first_name",
    middleName: "middle_name",
    lastName: "last_name",
    phoneNumbers: "phone_numbers",
    bankAccounts: "bank_accounts",
    taxRate: "tax_rate",
    taxNumber: "tax_number",
    paymentMethod: "payment_method",
    customMappings: "custom_mappings",
    updatedBy: "updated_by",
    createdBy: "created_by",
    updatedAt: "updated_at",
    createdAt: "created_at",
    rowVersion: "row_version",
    passThrough: "pass_through",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Supplier$ {
  /** @deprecated use `Supplier$inboundSchema` instead. */
  export const inboundSchema = Supplier$inboundSchema;
  /** @deprecated use `Supplier$outboundSchema` instead. */
  export const outboundSchema = Supplier$outboundSchema;
  /** @deprecated use `Supplier$Outbound` instead. */
  export type Outbound = Supplier$Outbound;
}

export function supplierToJSON(supplier: Supplier): string {
  return JSON.stringify(Supplier$outboundSchema.parse(supplier));
}

export function supplierFromJSON(
  jsonString: string,
): SafeParseResult<Supplier, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Supplier$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Supplier' from JSON`,
  );
}

/** @internal */
export const SupplierInput$inboundSchema: z.ZodType<
  SupplierInput,
  z.ZodTypeDef,
  unknown
> = z.object({
  display_id: z.nullable(z.string()).optional(),
  display_name: z.nullable(z.string()).optional(),
  company_name: z.nullable(z.string()).optional(),
  company_id: z.nullable(z.string()).optional(),
  title: z.nullable(z.string()).optional(),
  first_name: z.nullable(z.string()).optional(),
  middle_name: z.nullable(z.string()).optional(),
  last_name: z.nullable(z.string()).optional(),
  suffix: z.nullable(z.string()).optional(),
  individual: z.nullable(z.boolean()).optional(),
  addresses: z.array(Address$inboundSchema).optional(),
  phone_numbers: z.array(PhoneNumber$inboundSchema).optional(),
  emails: z.array(Email$inboundSchema).optional(),
  websites: z.array(Website$inboundSchema).optional(),
  bank_accounts: z.array(BankAccount$inboundSchema).optional(),
  notes: z.nullable(z.string()).optional(),
  tax_rate: LinkedTaxRateInput$inboundSchema.optional(),
  tax_number: z.nullable(z.string()).optional(),
  currency: z.nullable(Currency$inboundSchema).optional(),
  account: z.nullable(LinkedLedgerAccountInput$inboundSchema).optional(),
  status: z.nullable(SupplierStatus$inboundSchema).optional(),
  payment_method: z.nullable(z.string()).optional(),
  channel: z.nullable(z.string()).optional(),
  row_version: z.nullable(z.string()).optional(),
  pass_through: z.array(PassThroughBody$inboundSchema).optional(),
}).transform((v) => {
  return remap$(v, {
    "display_id": "displayId",
    "display_name": "displayName",
    "company_name": "companyName",
    "company_id": "companyId",
    "first_name": "firstName",
    "middle_name": "middleName",
    "last_name": "lastName",
    "phone_numbers": "phoneNumbers",
    "bank_accounts": "bankAccounts",
    "tax_rate": "taxRate",
    "tax_number": "taxNumber",
    "payment_method": "paymentMethod",
    "row_version": "rowVersion",
    "pass_through": "passThrough",
  });
});

/** @internal */
export type SupplierInput$Outbound = {
  display_id?: string | null | undefined;
  display_name?: string | null | undefined;
  company_name?: string | null | undefined;
  company_id?: string | null | undefined;
  title?: string | null | undefined;
  first_name?: string | null | undefined;
  middle_name?: string | null | undefined;
  last_name?: string | null | undefined;
  suffix?: string | null | undefined;
  individual?: boolean | null | undefined;
  addresses?: Array<Address$Outbound> | undefined;
  phone_numbers?: Array<PhoneNumber$Outbound> | undefined;
  emails?: Array<Email$Outbound> | undefined;
  websites?: Array<Website$Outbound> | undefined;
  bank_accounts?: Array<BankAccount$Outbound> | undefined;
  notes?: string | null | undefined;
  tax_rate?: LinkedTaxRateInput$Outbound | undefined;
  tax_number?: string | null | undefined;
  currency?: string | null | undefined;
  account?: LinkedLedgerAccountInput$Outbound | null | undefined;
  status?: string | null | undefined;
  payment_method?: string | null | undefined;
  channel?: string | null | undefined;
  row_version?: string | null | undefined;
  pass_through?: Array<PassThroughBody$Outbound> | undefined;
};

/** @internal */
export const SupplierInput$outboundSchema: z.ZodType<
  SupplierInput$Outbound,
  z.ZodTypeDef,
  SupplierInput
> = z.object({
  displayId: z.nullable(z.string()).optional(),
  displayName: z.nullable(z.string()).optional(),
  companyName: z.nullable(z.string()).optional(),
  companyId: z.nullable(z.string()).optional(),
  title: z.nullable(z.string()).optional(),
  firstName: z.nullable(z.string()).optional(),
  middleName: z.nullable(z.string()).optional(),
  lastName: z.nullable(z.string()).optional(),
  suffix: z.nullable(z.string()).optional(),
  individual: z.nullable(z.boolean()).optional(),
  addresses: z.array(Address$outboundSchema).optional(),
  phoneNumbers: z.array(PhoneNumber$outboundSchema).optional(),
  emails: z.array(Email$outboundSchema).optional(),
  websites: z.array(Website$outboundSchema).optional(),
  bankAccounts: z.array(BankAccount$outboundSchema).optional(),
  notes: z.nullable(z.string()).optional(),
  taxRate: LinkedTaxRateInput$outboundSchema.optional(),
  taxNumber: z.nullable(z.string()).optional(),
  currency: z.nullable(Currency$outboundSchema).optional(),
  account: z.nullable(LinkedLedgerAccountInput$outboundSchema).optional(),
  status: z.nullable(SupplierStatus$outboundSchema).optional(),
  paymentMethod: z.nullable(z.string()).optional(),
  channel: z.nullable(z.string()).optional(),
  rowVersion: z.nullable(z.string()).optional(),
  passThrough: z.array(PassThroughBody$outboundSchema).optional(),
}).transform((v) => {
  return remap$(v, {
    displayId: "display_id",
    displayName: "display_name",
    companyName: "company_name",
    companyId: "company_id",
    firstName: "first_name",
    middleName: "middle_name",
    lastName: "last_name",
    phoneNumbers: "phone_numbers",
    bankAccounts: "bank_accounts",
    taxRate: "tax_rate",
    taxNumber: "tax_number",
    paymentMethod: "payment_method",
    rowVersion: "row_version",
    passThrough: "pass_through",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace SupplierInput$ {
  /** @deprecated use `SupplierInput$inboundSchema` instead. */
  export const inboundSchema = SupplierInput$inboundSchema;
  /** @deprecated use `SupplierInput$outboundSchema` instead. */
  export const outboundSchema = SupplierInput$outboundSchema;
  /** @deprecated use `SupplierInput$Outbound` instead. */
  export type Outbound = SupplierInput$Outbound;
}

export function supplierInputToJSON(supplierInput: SupplierInput): string {
  return JSON.stringify(SupplierInput$outboundSchema.parse(supplierInput));
}

export function supplierInputFromJSON(
  jsonString: string,
): SafeParseResult<SupplierInput, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => SupplierInput$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'SupplierInput' from JSON`,
  );
}

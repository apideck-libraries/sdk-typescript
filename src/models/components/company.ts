/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { RFCDate } from "../../types/rfcdate.js";
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
  CustomField,
  CustomField$inboundSchema,
  CustomField$Outbound,
  CustomField$outboundSchema,
} from "./customfield.js";
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
  SocialLink,
  SocialLink$inboundSchema,
  SocialLink$Outbound,
  SocialLink$outboundSchema,
} from "./sociallink.js";
import {
  Website,
  Website$inboundSchema,
  Website$Outbound,
  Website$outboundSchema,
} from "./website.js";

export type CompanyRowType = {
  id?: string | null | undefined;
  name?: string | null | undefined;
};

export type Company = {
  /**
   * Unique identifier for the company
   */
  id?: string | undefined;
  /**
   * Name of the company
   */
  name: string | null;
  /**
   * Number of interactions
   */
  interactionCount?: number | null | undefined;
  /**
   * Owner ID
   */
  ownerId?: string | null | undefined;
  /**
   * The Image URL of the company
   */
  image?: string | null | undefined;
  /**
   * A description of the company
   */
  description?: string | null | undefined;
  /**
   * The VAT number of the company
   */
  vatNumber?: string | null | undefined;
  /**
   * Indicates the associated currency for an amount of money. Values correspond to [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217).
   */
  currency?: Currency | null | undefined;
  /**
   * The status of the company
   */
  status?: string | null | undefined;
  /**
   * The fax number of the company
   */
  fax?: string | null | undefined;
  /**
   * The annual revenue of the company
   */
  annualRevenue?: string | null | undefined;
  /**
   * Number of employees
   */
  numberOfEmployees?: string | null | undefined;
  /**
   * The industry represents the type of business the company is in.
   */
  industry?: string | null | undefined;
  /**
   * The ownership indicates the type of ownership of the company.
   */
  ownership?: string | null | undefined;
  /**
   * A sales tax number is a unique number that identifies a company for tax purposes.
   */
  salesTaxNumber?: string | null | undefined;
  /**
   * A payee number is a unique number that identifies a payee for tax purposes.
   */
  payeeNumber?: string | null | undefined;
  /**
   * An ABN is necessary for operating a business, while a TFN (Tax File Number) is required for any person working in Australia.
   */
  abnOrTfn?: string | null | undefined;
  /**
   * An ABN Branch (also known as a GST Branch) is used if part of your business needs to account for GST separately from its parent entity.
   */
  abnBranch?: string | null | undefined;
  /**
   * The Australian Company Number (ACN) is a nine digit number with the last digit being a check digit calculated using a modified modulus 10 calculation. ASIC has adopted a convention of always printing and displaying the ACN in the format XXX XXX XXX; three blocks of three characters, each block separated by a blank.
   */
  acn?: string | null | undefined;
  /**
   * The first name of the person.
   */
  firstName?: string | null | undefined;
  /**
   * The last name of the person.
   */
  lastName?: string | null | undefined;
  /**
   * Parent ID
   */
  parentId?: string | null | undefined;
  bankAccounts?: Array<BankAccount> | undefined;
  websites?: Array<Website> | undefined;
  addresses?: Array<Address> | undefined;
  socialLinks?: Array<SocialLink> | undefined;
  phoneNumbers?: Array<PhoneNumber> | undefined;
  emails?: Array<Email> | undefined;
  rowType?: CompanyRowType | undefined;
  customFields?: Array<CustomField> | undefined;
  tags?: Array<string> | null | undefined;
  /**
   * Whether the company is read-only or not
   */
  readOnly?: boolean | null | undefined;
  /**
   * Last activity date
   */
  lastActivityAt?: Date | null | undefined;
  /**
   * Whether the company is deleted or not
   */
  deleted?: boolean | undefined;
  /**
   * A formal salutation for the person. For example, 'Mr', 'Mrs'
   */
  salutation?: string | null | undefined;
  /**
   * The date of birth of the person.
   */
  birthday?: RFCDate | null | undefined;
  /**
   * When custom mappings are configured on the resource, the result is included here.
   */
  customMappings?: CustomMappings | null | undefined;
  /**
   * Updated by user ID
   */
  updatedBy?: string | null | undefined;
  /**
   * Created by user ID
   */
  createdBy?: string | null | undefined;
  /**
   * Last updated date
   */
  updatedAt?: Date | null | undefined;
  /**
   * Creation date
   */
  createdAt?: Date | null | undefined;
  /**
   * The pass_through property allows passing service-specific, custom data or structured modifications in request body when creating or updating resources.
   */
  passThrough?: Array<PassThroughBody> | undefined;
};

export type CompanyInput = {
  /**
   * Name of the company
   */
  name: string | null;
  /**
   * Owner ID
   */
  ownerId?: string | null | undefined;
  /**
   * The Image URL of the company
   */
  image?: string | null | undefined;
  /**
   * A description of the company
   */
  description?: string | null | undefined;
  /**
   * The VAT number of the company
   */
  vatNumber?: string | null | undefined;
  /**
   * Indicates the associated currency for an amount of money. Values correspond to [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217).
   */
  currency?: Currency | null | undefined;
  /**
   * The status of the company
   */
  status?: string | null | undefined;
  /**
   * The fax number of the company
   */
  fax?: string | null | undefined;
  /**
   * The annual revenue of the company
   */
  annualRevenue?: string | null | undefined;
  /**
   * Number of employees
   */
  numberOfEmployees?: string | null | undefined;
  /**
   * The industry represents the type of business the company is in.
   */
  industry?: string | null | undefined;
  /**
   * The ownership indicates the type of ownership of the company.
   */
  ownership?: string | null | undefined;
  /**
   * A sales tax number is a unique number that identifies a company for tax purposes.
   */
  salesTaxNumber?: string | null | undefined;
  /**
   * A payee number is a unique number that identifies a payee for tax purposes.
   */
  payeeNumber?: string | null | undefined;
  /**
   * An ABN is necessary for operating a business, while a TFN (Tax File Number) is required for any person working in Australia.
   */
  abnOrTfn?: string | null | undefined;
  /**
   * An ABN Branch (also known as a GST Branch) is used if part of your business needs to account for GST separately from its parent entity.
   */
  abnBranch?: string | null | undefined;
  /**
   * The Australian Company Number (ACN) is a nine digit number with the last digit being a check digit calculated using a modified modulus 10 calculation. ASIC has adopted a convention of always printing and displaying the ACN in the format XXX XXX XXX; three blocks of three characters, each block separated by a blank.
   */
  acn?: string | null | undefined;
  /**
   * The first name of the person.
   */
  firstName?: string | null | undefined;
  /**
   * The last name of the person.
   */
  lastName?: string | null | undefined;
  bankAccounts?: Array<BankAccount> | undefined;
  websites?: Array<Website> | undefined;
  addresses?: Array<Address> | undefined;
  socialLinks?: Array<SocialLink> | undefined;
  phoneNumbers?: Array<PhoneNumber> | undefined;
  emails?: Array<Email> | undefined;
  rowType?: CompanyRowType | undefined;
  customFields?: Array<CustomField> | undefined;
  tags?: Array<string> | null | undefined;
  /**
   * Whether the company is read-only or not
   */
  readOnly?: boolean | null | undefined;
  /**
   * A formal salutation for the person. For example, 'Mr', 'Mrs'
   */
  salutation?: string | null | undefined;
  /**
   * The date of birth of the person.
   */
  birthday?: RFCDate | null | undefined;
  /**
   * The pass_through property allows passing service-specific, custom data or structured modifications in request body when creating or updating resources.
   */
  passThrough?: Array<PassThroughBody> | undefined;
};

/** @internal */
export const CompanyRowType$inboundSchema: z.ZodType<
  CompanyRowType,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.nullable(z.string()).optional(),
  name: z.nullable(z.string()).optional(),
});

/** @internal */
export type CompanyRowType$Outbound = {
  id?: string | null | undefined;
  name?: string | null | undefined;
};

/** @internal */
export const CompanyRowType$outboundSchema: z.ZodType<
  CompanyRowType$Outbound,
  z.ZodTypeDef,
  CompanyRowType
> = z.object({
  id: z.nullable(z.string()).optional(),
  name: z.nullable(z.string()).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CompanyRowType$ {
  /** @deprecated use `CompanyRowType$inboundSchema` instead. */
  export const inboundSchema = CompanyRowType$inboundSchema;
  /** @deprecated use `CompanyRowType$outboundSchema` instead. */
  export const outboundSchema = CompanyRowType$outboundSchema;
  /** @deprecated use `CompanyRowType$Outbound` instead. */
  export type Outbound = CompanyRowType$Outbound;
}

export function companyRowTypeToJSON(companyRowType: CompanyRowType): string {
  return JSON.stringify(CompanyRowType$outboundSchema.parse(companyRowType));
}

export function companyRowTypeFromJSON(
  jsonString: string,
): SafeParseResult<CompanyRowType, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CompanyRowType$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CompanyRowType' from JSON`,
  );
}

/** @internal */
export const Company$inboundSchema: z.ZodType<Company, z.ZodTypeDef, unknown> =
  z.object({
    id: z.string().optional(),
    name: z.nullable(z.string()),
    interaction_count: z.nullable(z.number().int()).optional(),
    owner_id: z.nullable(z.string()).optional(),
    image: z.nullable(z.string()).optional(),
    description: z.nullable(z.string()).optional(),
    vat_number: z.nullable(z.string()).optional(),
    currency: z.nullable(Currency$inboundSchema).optional(),
    status: z.nullable(z.string()).optional(),
    fax: z.nullable(z.string()).optional(),
    annual_revenue: z.nullable(z.string()).optional(),
    number_of_employees: z.nullable(z.string()).optional(),
    industry: z.nullable(z.string()).optional(),
    ownership: z.nullable(z.string()).optional(),
    sales_tax_number: z.nullable(z.string()).optional(),
    payee_number: z.nullable(z.string()).optional(),
    abn_or_tfn: z.nullable(z.string()).optional(),
    abn_branch: z.nullable(z.string()).optional(),
    acn: z.nullable(z.string()).optional(),
    first_name: z.nullable(z.string()).optional(),
    last_name: z.nullable(z.string()).optional(),
    parent_id: z.nullable(z.string()).optional(),
    bank_accounts: z.array(BankAccount$inboundSchema).optional(),
    websites: z.array(Website$inboundSchema).optional(),
    addresses: z.array(Address$inboundSchema).optional(),
    social_links: z.array(SocialLink$inboundSchema).optional(),
    phone_numbers: z.array(PhoneNumber$inboundSchema).optional(),
    emails: z.array(Email$inboundSchema).optional(),
    row_type: z.lazy(() => CompanyRowType$inboundSchema).optional(),
    custom_fields: z.array(CustomField$inboundSchema).optional(),
    tags: z.nullable(z.array(z.string())).optional(),
    read_only: z.nullable(z.boolean()).optional(),
    last_activity_at: z.nullable(
      z.string().datetime({ offset: true }).transform(v => new Date(v)),
    ).optional(),
    deleted: z.boolean().optional(),
    salutation: z.nullable(z.string()).optional(),
    birthday: z.nullable(z.string().transform(v => new RFCDate(v))).optional(),
    custom_mappings: z.nullable(CustomMappings$inboundSchema).optional(),
    updated_by: z.nullable(z.string()).optional(),
    created_by: z.nullable(z.string()).optional(),
    updated_at: z.nullable(
      z.string().datetime({ offset: true }).transform(v => new Date(v)),
    ).optional(),
    created_at: z.nullable(
      z.string().datetime({ offset: true }).transform(v => new Date(v)),
    ).optional(),
    pass_through: z.array(PassThroughBody$inboundSchema).optional(),
  }).transform((v) => {
    return remap$(v, {
      "interaction_count": "interactionCount",
      "owner_id": "ownerId",
      "vat_number": "vatNumber",
      "annual_revenue": "annualRevenue",
      "number_of_employees": "numberOfEmployees",
      "sales_tax_number": "salesTaxNumber",
      "payee_number": "payeeNumber",
      "abn_or_tfn": "abnOrTfn",
      "abn_branch": "abnBranch",
      "first_name": "firstName",
      "last_name": "lastName",
      "parent_id": "parentId",
      "bank_accounts": "bankAccounts",
      "social_links": "socialLinks",
      "phone_numbers": "phoneNumbers",
      "row_type": "rowType",
      "custom_fields": "customFields",
      "read_only": "readOnly",
      "last_activity_at": "lastActivityAt",
      "custom_mappings": "customMappings",
      "updated_by": "updatedBy",
      "created_by": "createdBy",
      "updated_at": "updatedAt",
      "created_at": "createdAt",
      "pass_through": "passThrough",
    });
  });

/** @internal */
export type Company$Outbound = {
  id?: string | undefined;
  name: string | null;
  interaction_count?: number | null | undefined;
  owner_id?: string | null | undefined;
  image?: string | null | undefined;
  description?: string | null | undefined;
  vat_number?: string | null | undefined;
  currency?: string | null | undefined;
  status?: string | null | undefined;
  fax?: string | null | undefined;
  annual_revenue?: string | null | undefined;
  number_of_employees?: string | null | undefined;
  industry?: string | null | undefined;
  ownership?: string | null | undefined;
  sales_tax_number?: string | null | undefined;
  payee_number?: string | null | undefined;
  abn_or_tfn?: string | null | undefined;
  abn_branch?: string | null | undefined;
  acn?: string | null | undefined;
  first_name?: string | null | undefined;
  last_name?: string | null | undefined;
  parent_id?: string | null | undefined;
  bank_accounts?: Array<BankAccount$Outbound> | undefined;
  websites?: Array<Website$Outbound> | undefined;
  addresses?: Array<Address$Outbound> | undefined;
  social_links?: Array<SocialLink$Outbound> | undefined;
  phone_numbers?: Array<PhoneNumber$Outbound> | undefined;
  emails?: Array<Email$Outbound> | undefined;
  row_type?: CompanyRowType$Outbound | undefined;
  custom_fields?: Array<CustomField$Outbound> | undefined;
  tags?: Array<string> | null | undefined;
  read_only?: boolean | null | undefined;
  last_activity_at?: string | null | undefined;
  deleted?: boolean | undefined;
  salutation?: string | null | undefined;
  birthday?: string | null | undefined;
  custom_mappings?: CustomMappings$Outbound | null | undefined;
  updated_by?: string | null | undefined;
  created_by?: string | null | undefined;
  updated_at?: string | null | undefined;
  created_at?: string | null | undefined;
  pass_through?: Array<PassThroughBody$Outbound> | undefined;
};

/** @internal */
export const Company$outboundSchema: z.ZodType<
  Company$Outbound,
  z.ZodTypeDef,
  Company
> = z.object({
  id: z.string().optional(),
  name: z.nullable(z.string()),
  interactionCount: z.nullable(z.number().int()).optional(),
  ownerId: z.nullable(z.string()).optional(),
  image: z.nullable(z.string()).optional(),
  description: z.nullable(z.string()).optional(),
  vatNumber: z.nullable(z.string()).optional(),
  currency: z.nullable(Currency$outboundSchema).optional(),
  status: z.nullable(z.string()).optional(),
  fax: z.nullable(z.string()).optional(),
  annualRevenue: z.nullable(z.string()).optional(),
  numberOfEmployees: z.nullable(z.string()).optional(),
  industry: z.nullable(z.string()).optional(),
  ownership: z.nullable(z.string()).optional(),
  salesTaxNumber: z.nullable(z.string()).optional(),
  payeeNumber: z.nullable(z.string()).optional(),
  abnOrTfn: z.nullable(z.string()).optional(),
  abnBranch: z.nullable(z.string()).optional(),
  acn: z.nullable(z.string()).optional(),
  firstName: z.nullable(z.string()).optional(),
  lastName: z.nullable(z.string()).optional(),
  parentId: z.nullable(z.string()).optional(),
  bankAccounts: z.array(BankAccount$outboundSchema).optional(),
  websites: z.array(Website$outboundSchema).optional(),
  addresses: z.array(Address$outboundSchema).optional(),
  socialLinks: z.array(SocialLink$outboundSchema).optional(),
  phoneNumbers: z.array(PhoneNumber$outboundSchema).optional(),
  emails: z.array(Email$outboundSchema).optional(),
  rowType: z.lazy(() => CompanyRowType$outboundSchema).optional(),
  customFields: z.array(CustomField$outboundSchema).optional(),
  tags: z.nullable(z.array(z.string())).optional(),
  readOnly: z.nullable(z.boolean()).optional(),
  lastActivityAt: z.nullable(z.date().transform(v => v.toISOString()))
    .optional(),
  deleted: z.boolean().optional(),
  salutation: z.nullable(z.string()).optional(),
  birthday: z.nullable(z.instanceof(RFCDate).transform(v => v.toString()))
    .optional(),
  customMappings: z.nullable(CustomMappings$outboundSchema).optional(),
  updatedBy: z.nullable(z.string()).optional(),
  createdBy: z.nullable(z.string()).optional(),
  updatedAt: z.nullable(z.date().transform(v => v.toISOString())).optional(),
  createdAt: z.nullable(z.date().transform(v => v.toISOString())).optional(),
  passThrough: z.array(PassThroughBody$outboundSchema).optional(),
}).transform((v) => {
  return remap$(v, {
    interactionCount: "interaction_count",
    ownerId: "owner_id",
    vatNumber: "vat_number",
    annualRevenue: "annual_revenue",
    numberOfEmployees: "number_of_employees",
    salesTaxNumber: "sales_tax_number",
    payeeNumber: "payee_number",
    abnOrTfn: "abn_or_tfn",
    abnBranch: "abn_branch",
    firstName: "first_name",
    lastName: "last_name",
    parentId: "parent_id",
    bankAccounts: "bank_accounts",
    socialLinks: "social_links",
    phoneNumbers: "phone_numbers",
    rowType: "row_type",
    customFields: "custom_fields",
    readOnly: "read_only",
    lastActivityAt: "last_activity_at",
    customMappings: "custom_mappings",
    updatedBy: "updated_by",
    createdBy: "created_by",
    updatedAt: "updated_at",
    createdAt: "created_at",
    passThrough: "pass_through",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Company$ {
  /** @deprecated use `Company$inboundSchema` instead. */
  export const inboundSchema = Company$inboundSchema;
  /** @deprecated use `Company$outboundSchema` instead. */
  export const outboundSchema = Company$outboundSchema;
  /** @deprecated use `Company$Outbound` instead. */
  export type Outbound = Company$Outbound;
}

export function companyToJSON(company: Company): string {
  return JSON.stringify(Company$outboundSchema.parse(company));
}

export function companyFromJSON(
  jsonString: string,
): SafeParseResult<Company, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Company$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Company' from JSON`,
  );
}

/** @internal */
export const CompanyInput$inboundSchema: z.ZodType<
  CompanyInput,
  z.ZodTypeDef,
  unknown
> = z.object({
  name: z.nullable(z.string()),
  owner_id: z.nullable(z.string()).optional(),
  image: z.nullable(z.string()).optional(),
  description: z.nullable(z.string()).optional(),
  vat_number: z.nullable(z.string()).optional(),
  currency: z.nullable(Currency$inboundSchema).optional(),
  status: z.nullable(z.string()).optional(),
  fax: z.nullable(z.string()).optional(),
  annual_revenue: z.nullable(z.string()).optional(),
  number_of_employees: z.nullable(z.string()).optional(),
  industry: z.nullable(z.string()).optional(),
  ownership: z.nullable(z.string()).optional(),
  sales_tax_number: z.nullable(z.string()).optional(),
  payee_number: z.nullable(z.string()).optional(),
  abn_or_tfn: z.nullable(z.string()).optional(),
  abn_branch: z.nullable(z.string()).optional(),
  acn: z.nullable(z.string()).optional(),
  first_name: z.nullable(z.string()).optional(),
  last_name: z.nullable(z.string()).optional(),
  bank_accounts: z.array(BankAccount$inboundSchema).optional(),
  websites: z.array(Website$inboundSchema).optional(),
  addresses: z.array(Address$inboundSchema).optional(),
  social_links: z.array(SocialLink$inboundSchema).optional(),
  phone_numbers: z.array(PhoneNumber$inboundSchema).optional(),
  emails: z.array(Email$inboundSchema).optional(),
  row_type: z.lazy(() => CompanyRowType$inboundSchema).optional(),
  custom_fields: z.array(CustomField$inboundSchema).optional(),
  tags: z.nullable(z.array(z.string())).optional(),
  read_only: z.nullable(z.boolean()).optional(),
  salutation: z.nullable(z.string()).optional(),
  birthday: z.nullable(z.string().transform(v => new RFCDate(v))).optional(),
  pass_through: z.array(PassThroughBody$inboundSchema).optional(),
}).transform((v) => {
  return remap$(v, {
    "owner_id": "ownerId",
    "vat_number": "vatNumber",
    "annual_revenue": "annualRevenue",
    "number_of_employees": "numberOfEmployees",
    "sales_tax_number": "salesTaxNumber",
    "payee_number": "payeeNumber",
    "abn_or_tfn": "abnOrTfn",
    "abn_branch": "abnBranch",
    "first_name": "firstName",
    "last_name": "lastName",
    "bank_accounts": "bankAccounts",
    "social_links": "socialLinks",
    "phone_numbers": "phoneNumbers",
    "row_type": "rowType",
    "custom_fields": "customFields",
    "read_only": "readOnly",
    "pass_through": "passThrough",
  });
});

/** @internal */
export type CompanyInput$Outbound = {
  name: string | null;
  owner_id?: string | null | undefined;
  image?: string | null | undefined;
  description?: string | null | undefined;
  vat_number?: string | null | undefined;
  currency?: string | null | undefined;
  status?: string | null | undefined;
  fax?: string | null | undefined;
  annual_revenue?: string | null | undefined;
  number_of_employees?: string | null | undefined;
  industry?: string | null | undefined;
  ownership?: string | null | undefined;
  sales_tax_number?: string | null | undefined;
  payee_number?: string | null | undefined;
  abn_or_tfn?: string | null | undefined;
  abn_branch?: string | null | undefined;
  acn?: string | null | undefined;
  first_name?: string | null | undefined;
  last_name?: string | null | undefined;
  bank_accounts?: Array<BankAccount$Outbound> | undefined;
  websites?: Array<Website$Outbound> | undefined;
  addresses?: Array<Address$Outbound> | undefined;
  social_links?: Array<SocialLink$Outbound> | undefined;
  phone_numbers?: Array<PhoneNumber$Outbound> | undefined;
  emails?: Array<Email$Outbound> | undefined;
  row_type?: CompanyRowType$Outbound | undefined;
  custom_fields?: Array<CustomField$Outbound> | undefined;
  tags?: Array<string> | null | undefined;
  read_only?: boolean | null | undefined;
  salutation?: string | null | undefined;
  birthday?: string | null | undefined;
  pass_through?: Array<PassThroughBody$Outbound> | undefined;
};

/** @internal */
export const CompanyInput$outboundSchema: z.ZodType<
  CompanyInput$Outbound,
  z.ZodTypeDef,
  CompanyInput
> = z.object({
  name: z.nullable(z.string()),
  ownerId: z.nullable(z.string()).optional(),
  image: z.nullable(z.string()).optional(),
  description: z.nullable(z.string()).optional(),
  vatNumber: z.nullable(z.string()).optional(),
  currency: z.nullable(Currency$outboundSchema).optional(),
  status: z.nullable(z.string()).optional(),
  fax: z.nullable(z.string()).optional(),
  annualRevenue: z.nullable(z.string()).optional(),
  numberOfEmployees: z.nullable(z.string()).optional(),
  industry: z.nullable(z.string()).optional(),
  ownership: z.nullable(z.string()).optional(),
  salesTaxNumber: z.nullable(z.string()).optional(),
  payeeNumber: z.nullable(z.string()).optional(),
  abnOrTfn: z.nullable(z.string()).optional(),
  abnBranch: z.nullable(z.string()).optional(),
  acn: z.nullable(z.string()).optional(),
  firstName: z.nullable(z.string()).optional(),
  lastName: z.nullable(z.string()).optional(),
  bankAccounts: z.array(BankAccount$outboundSchema).optional(),
  websites: z.array(Website$outboundSchema).optional(),
  addresses: z.array(Address$outboundSchema).optional(),
  socialLinks: z.array(SocialLink$outboundSchema).optional(),
  phoneNumbers: z.array(PhoneNumber$outboundSchema).optional(),
  emails: z.array(Email$outboundSchema).optional(),
  rowType: z.lazy(() => CompanyRowType$outboundSchema).optional(),
  customFields: z.array(CustomField$outboundSchema).optional(),
  tags: z.nullable(z.array(z.string())).optional(),
  readOnly: z.nullable(z.boolean()).optional(),
  salutation: z.nullable(z.string()).optional(),
  birthday: z.nullable(z.instanceof(RFCDate).transform(v => v.toString()))
    .optional(),
  passThrough: z.array(PassThroughBody$outboundSchema).optional(),
}).transform((v) => {
  return remap$(v, {
    ownerId: "owner_id",
    vatNumber: "vat_number",
    annualRevenue: "annual_revenue",
    numberOfEmployees: "number_of_employees",
    salesTaxNumber: "sales_tax_number",
    payeeNumber: "payee_number",
    abnOrTfn: "abn_or_tfn",
    abnBranch: "abn_branch",
    firstName: "first_name",
    lastName: "last_name",
    bankAccounts: "bank_accounts",
    socialLinks: "social_links",
    phoneNumbers: "phone_numbers",
    rowType: "row_type",
    customFields: "custom_fields",
    readOnly: "read_only",
    passThrough: "pass_through",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CompanyInput$ {
  /** @deprecated use `CompanyInput$inboundSchema` instead. */
  export const inboundSchema = CompanyInput$inboundSchema;
  /** @deprecated use `CompanyInput$outboundSchema` instead. */
  export const outboundSchema = CompanyInput$outboundSchema;
  /** @deprecated use `CompanyInput$Outbound` instead. */
  export type Outbound = CompanyInput$Outbound;
}

export function companyInputToJSON(companyInput: CompanyInput): string {
  return JSON.stringify(CompanyInput$outboundSchema.parse(companyInput));
}

export function companyInputFromJSON(
  jsonString: string,
): SafeParseResult<CompanyInput, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CompanyInput$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CompanyInput' from JSON`,
  );
}

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

/**
 * The type of the contact.
 */
export const Type = {
  Customer: "customer",
  Supplier: "supplier",
  Employee: "employee",
  Personal: "personal",
} as const;
/**
 * The type of the contact.
 */
export type Type = ClosedEnum<typeof Type>;

/**
 * The gender of the contact.
 */
export const ContactGender = {
  Male: "male",
  Female: "female",
  Unisex: "unisex",
} as const;
/**
 * The gender of the contact.
 */
export type ContactGender = ClosedEnum<typeof ContactGender>;

export type Contact = {
  /**
   * Unique identifier for the contact.
   */
  id?: string | undefined;
  /**
   * Full name of the contact.
   */
  name: string | null;
  /**
   * The owner of the contact.
   */
  ownerId?: string | null | undefined;
  /**
   * The type of the contact.
   */
  type?: Type | null | undefined;
  /**
   * The company the contact is associated with.
   */
  companyId?: string | null | undefined;
  /**
   * The name of the company the contact is associated with.
   */
  companyName?: string | null | undefined;
  /**
   * The lead the contact is associated with.
   */
  leadId?: string | null | undefined;
  /**
   * The first name of the contact.
   */
  firstName?: string | null | undefined;
  /**
   * The middle name of the contact.
   */
  middleName?: string | null | undefined;
  /**
   * The last name of the contact.
   */
  lastName?: string | null | undefined;
  /**
   * The prefix of the contact.
   */
  prefix?: string | null | undefined;
  /**
   * The suffix of the contact.
   */
  suffix?: string | null | undefined;
  /**
   * The job title of the contact.
   */
  title?: string | null | undefined;
  /**
   * The department of the contact.
   */
  department?: string | null | undefined;
  /**
   * language code according to ISO 639-1. For the United States - EN
   */
  language?: string | null | undefined;
  /**
   * The gender of the contact.
   */
  gender?: ContactGender | null | undefined;
  /**
   * The birthday of the contact.
   */
  birthday?: string | null | undefined;
  /**
   * @deprecated field: This will be removed in a future release, please migrate away from it as soon as possible.
   */
  image?: string | null | undefined;
  /**
   * The URL of the photo of a person.
   */
  photoUrl?: string | null | undefined;
  /**
   * The lead source of the contact.
   */
  leadSource?: string | null | undefined;
  /**
   * The fax number of the contact.
   */
  fax?: string | null | undefined;
  /**
   * The description of the contact.
   */
  description?: string | null | undefined;
  /**
   * The current balance of the contact.
   */
  currentBalance?: number | null | undefined;
  /**
   * The status of the contact.
   */
  status?: string | null | undefined;
  /**
   * The active status of the contact.
   */
  active?: boolean | null | undefined;
  websites?: Array<Website> | undefined;
  addresses?: Array<Address> | undefined;
  socialLinks?: Array<SocialLink> | undefined;
  phoneNumbers?: Array<PhoneNumber> | undefined;
  emails?: Array<Email> | undefined;
  emailDomain?: string | null | undefined;
  customFields?: Array<CustomField> | undefined;
  tags?: Array<string> | null | undefined;
  /**
   * The first call date of the contact.
   */
  firstCallAt?: Date | null | undefined;
  /**
   * The first email date of the contact.
   */
  firstEmailAt?: Date | null | undefined;
  /**
   * The last activity date of the contact.
   */
  lastActivityAt?: Date | null | undefined;
  /**
   * When custom mappings are configured on the resource, the result is included here.
   */
  customMappings?: CustomMappings | null | undefined;
  /**
   * The last update date of the contact.
   */
  updatedAt?: Date | null | undefined;
  /**
   * The creation date of the contact.
   */
  createdAt?: Date | null | undefined;
  /**
   * The opportunity ids of the contact.
   */
  opportunityIds?: Array<string> | undefined;
  /**
   * The pass_through property allows passing service-specific, custom data or structured modifications in request body when creating or updating resources.
   */
  passThrough?: Array<PassThroughBody> | undefined;
};

export type ContactInput = {
  /**
   * Full name of the contact.
   */
  name: string | null;
  /**
   * The owner of the contact.
   */
  ownerId?: string | null | undefined;
  /**
   * The type of the contact.
   */
  type?: Type | null | undefined;
  /**
   * The company the contact is associated with.
   */
  companyId?: string | null | undefined;
  /**
   * The name of the company the contact is associated with.
   */
  companyName?: string | null | undefined;
  /**
   * The lead the contact is associated with.
   */
  leadId?: string | null | undefined;
  /**
   * The first name of the contact.
   */
  firstName?: string | null | undefined;
  /**
   * The middle name of the contact.
   */
  middleName?: string | null | undefined;
  /**
   * The last name of the contact.
   */
  lastName?: string | null | undefined;
  /**
   * The prefix of the contact.
   */
  prefix?: string | null | undefined;
  /**
   * The suffix of the contact.
   */
  suffix?: string | null | undefined;
  /**
   * The job title of the contact.
   */
  title?: string | null | undefined;
  /**
   * The department of the contact.
   */
  department?: string | null | undefined;
  /**
   * language code according to ISO 639-1. For the United States - EN
   */
  language?: string | null | undefined;
  /**
   * The gender of the contact.
   */
  gender?: ContactGender | null | undefined;
  /**
   * The birthday of the contact.
   */
  birthday?: string | null | undefined;
  /**
   * @deprecated field: This will be removed in a future release, please migrate away from it as soon as possible.
   */
  image?: string | null | undefined;
  /**
   * The URL of the photo of a person.
   */
  photoUrl?: string | null | undefined;
  /**
   * The lead source of the contact.
   */
  leadSource?: string | null | undefined;
  /**
   * The fax number of the contact.
   */
  fax?: string | null | undefined;
  /**
   * The description of the contact.
   */
  description?: string | null | undefined;
  /**
   * The current balance of the contact.
   */
  currentBalance?: number | null | undefined;
  /**
   * The status of the contact.
   */
  status?: string | null | undefined;
  /**
   * The active status of the contact.
   */
  active?: boolean | null | undefined;
  websites?: Array<Website> | undefined;
  addresses?: Array<Address> | undefined;
  socialLinks?: Array<SocialLink> | undefined;
  phoneNumbers?: Array<PhoneNumber> | undefined;
  emails?: Array<Email> | undefined;
  emailDomain?: string | null | undefined;
  customFields?: Array<CustomField> | undefined;
  tags?: Array<string> | null | undefined;
  /**
   * The opportunity ids of the contact.
   */
  opportunityIds?: Array<string> | undefined;
  /**
   * The pass_through property allows passing service-specific, custom data or structured modifications in request body when creating or updating resources.
   */
  passThrough?: Array<PassThroughBody> | undefined;
};

/** @internal */
export const Type$inboundSchema: z.ZodNativeEnum<typeof Type> = z.nativeEnum(
  Type,
);

/** @internal */
export const Type$outboundSchema: z.ZodNativeEnum<typeof Type> =
  Type$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Type$ {
  /** @deprecated use `Type$inboundSchema` instead. */
  export const inboundSchema = Type$inboundSchema;
  /** @deprecated use `Type$outboundSchema` instead. */
  export const outboundSchema = Type$outboundSchema;
}

/** @internal */
export const ContactGender$inboundSchema: z.ZodNativeEnum<
  typeof ContactGender
> = z.nativeEnum(ContactGender);

/** @internal */
export const ContactGender$outboundSchema: z.ZodNativeEnum<
  typeof ContactGender
> = ContactGender$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ContactGender$ {
  /** @deprecated use `ContactGender$inboundSchema` instead. */
  export const inboundSchema = ContactGender$inboundSchema;
  /** @deprecated use `ContactGender$outboundSchema` instead. */
  export const outboundSchema = ContactGender$outboundSchema;
}

/** @internal */
export const Contact$inboundSchema: z.ZodType<Contact, z.ZodTypeDef, unknown> =
  z.object({
    id: z.string().optional(),
    name: z.nullable(z.string()),
    owner_id: z.nullable(z.string()).optional(),
    type: z.nullable(Type$inboundSchema).optional(),
    company_id: z.nullable(z.string()).optional(),
    company_name: z.nullable(z.string()).optional(),
    lead_id: z.nullable(z.string()).optional(),
    first_name: z.nullable(z.string()).optional(),
    middle_name: z.nullable(z.string()).optional(),
    last_name: z.nullable(z.string()).optional(),
    prefix: z.nullable(z.string()).optional(),
    suffix: z.nullable(z.string()).optional(),
    title: z.nullable(z.string()).optional(),
    department: z.nullable(z.string()).optional(),
    language: z.nullable(z.string()).optional(),
    gender: z.nullable(ContactGender$inboundSchema).optional(),
    birthday: z.nullable(z.string()).optional(),
    image: z.nullable(z.string()).optional(),
    photo_url: z.nullable(z.string()).optional(),
    lead_source: z.nullable(z.string()).optional(),
    fax: z.nullable(z.string()).optional(),
    description: z.nullable(z.string()).optional(),
    current_balance: z.nullable(z.number()).optional(),
    status: z.nullable(z.string()).optional(),
    active: z.nullable(z.boolean()).optional(),
    websites: z.array(Website$inboundSchema).optional(),
    addresses: z.array(Address$inboundSchema).optional(),
    social_links: z.array(SocialLink$inboundSchema).optional(),
    phone_numbers: z.array(PhoneNumber$inboundSchema).optional(),
    emails: z.array(Email$inboundSchema).optional(),
    email_domain: z.nullable(z.string()).optional(),
    custom_fields: z.array(CustomField$inboundSchema).optional(),
    tags: z.nullable(z.array(z.string())).optional(),
    first_call_at: z.nullable(
      z.string().datetime({ offset: true }).transform(v => new Date(v)),
    ).optional(),
    first_email_at: z.nullable(
      z.string().datetime({ offset: true }).transform(v => new Date(v)),
    ).optional(),
    last_activity_at: z.nullable(
      z.string().datetime({ offset: true }).transform(v => new Date(v)),
    ).optional(),
    custom_mappings: z.nullable(CustomMappings$inboundSchema).optional(),
    updated_at: z.nullable(
      z.string().datetime({ offset: true }).transform(v => new Date(v)),
    ).optional(),
    created_at: z.nullable(
      z.string().datetime({ offset: true }).transform(v => new Date(v)),
    ).optional(),
    opportunity_ids: z.array(z.string()).optional(),
    pass_through: z.array(PassThroughBody$inboundSchema).optional(),
  }).transform((v) => {
    return remap$(v, {
      "owner_id": "ownerId",
      "company_id": "companyId",
      "company_name": "companyName",
      "lead_id": "leadId",
      "first_name": "firstName",
      "middle_name": "middleName",
      "last_name": "lastName",
      "photo_url": "photoUrl",
      "lead_source": "leadSource",
      "current_balance": "currentBalance",
      "social_links": "socialLinks",
      "phone_numbers": "phoneNumbers",
      "email_domain": "emailDomain",
      "custom_fields": "customFields",
      "first_call_at": "firstCallAt",
      "first_email_at": "firstEmailAt",
      "last_activity_at": "lastActivityAt",
      "custom_mappings": "customMappings",
      "updated_at": "updatedAt",
      "created_at": "createdAt",
      "opportunity_ids": "opportunityIds",
      "pass_through": "passThrough",
    });
  });

/** @internal */
export type Contact$Outbound = {
  id?: string | undefined;
  name: string | null;
  owner_id?: string | null | undefined;
  type?: string | null | undefined;
  company_id?: string | null | undefined;
  company_name?: string | null | undefined;
  lead_id?: string | null | undefined;
  first_name?: string | null | undefined;
  middle_name?: string | null | undefined;
  last_name?: string | null | undefined;
  prefix?: string | null | undefined;
  suffix?: string | null | undefined;
  title?: string | null | undefined;
  department?: string | null | undefined;
  language?: string | null | undefined;
  gender?: string | null | undefined;
  birthday?: string | null | undefined;
  image?: string | null | undefined;
  photo_url?: string | null | undefined;
  lead_source?: string | null | undefined;
  fax?: string | null | undefined;
  description?: string | null | undefined;
  current_balance?: number | null | undefined;
  status?: string | null | undefined;
  active?: boolean | null | undefined;
  websites?: Array<Website$Outbound> | undefined;
  addresses?: Array<Address$Outbound> | undefined;
  social_links?: Array<SocialLink$Outbound> | undefined;
  phone_numbers?: Array<PhoneNumber$Outbound> | undefined;
  emails?: Array<Email$Outbound> | undefined;
  email_domain?: string | null | undefined;
  custom_fields?: Array<CustomField$Outbound> | undefined;
  tags?: Array<string> | null | undefined;
  first_call_at?: string | null | undefined;
  first_email_at?: string | null | undefined;
  last_activity_at?: string | null | undefined;
  custom_mappings?: CustomMappings$Outbound | null | undefined;
  updated_at?: string | null | undefined;
  created_at?: string | null | undefined;
  opportunity_ids?: Array<string> | undefined;
  pass_through?: Array<PassThroughBody$Outbound> | undefined;
};

/** @internal */
export const Contact$outboundSchema: z.ZodType<
  Contact$Outbound,
  z.ZodTypeDef,
  Contact
> = z.object({
  id: z.string().optional(),
  name: z.nullable(z.string()),
  ownerId: z.nullable(z.string()).optional(),
  type: z.nullable(Type$outboundSchema).optional(),
  companyId: z.nullable(z.string()).optional(),
  companyName: z.nullable(z.string()).optional(),
  leadId: z.nullable(z.string()).optional(),
  firstName: z.nullable(z.string()).optional(),
  middleName: z.nullable(z.string()).optional(),
  lastName: z.nullable(z.string()).optional(),
  prefix: z.nullable(z.string()).optional(),
  suffix: z.nullable(z.string()).optional(),
  title: z.nullable(z.string()).optional(),
  department: z.nullable(z.string()).optional(),
  language: z.nullable(z.string()).optional(),
  gender: z.nullable(ContactGender$outboundSchema).optional(),
  birthday: z.nullable(z.string()).optional(),
  image: z.nullable(z.string()).optional(),
  photoUrl: z.nullable(z.string()).optional(),
  leadSource: z.nullable(z.string()).optional(),
  fax: z.nullable(z.string()).optional(),
  description: z.nullable(z.string()).optional(),
  currentBalance: z.nullable(z.number()).optional(),
  status: z.nullable(z.string()).optional(),
  active: z.nullable(z.boolean()).optional(),
  websites: z.array(Website$outboundSchema).optional(),
  addresses: z.array(Address$outboundSchema).optional(),
  socialLinks: z.array(SocialLink$outboundSchema).optional(),
  phoneNumbers: z.array(PhoneNumber$outboundSchema).optional(),
  emails: z.array(Email$outboundSchema).optional(),
  emailDomain: z.nullable(z.string()).optional(),
  customFields: z.array(CustomField$outboundSchema).optional(),
  tags: z.nullable(z.array(z.string())).optional(),
  firstCallAt: z.nullable(z.date().transform(v => v.toISOString())).optional(),
  firstEmailAt: z.nullable(z.date().transform(v => v.toISOString())).optional(),
  lastActivityAt: z.nullable(z.date().transform(v => v.toISOString()))
    .optional(),
  customMappings: z.nullable(CustomMappings$outboundSchema).optional(),
  updatedAt: z.nullable(z.date().transform(v => v.toISOString())).optional(),
  createdAt: z.nullable(z.date().transform(v => v.toISOString())).optional(),
  opportunityIds: z.array(z.string()).optional(),
  passThrough: z.array(PassThroughBody$outboundSchema).optional(),
}).transform((v) => {
  return remap$(v, {
    ownerId: "owner_id",
    companyId: "company_id",
    companyName: "company_name",
    leadId: "lead_id",
    firstName: "first_name",
    middleName: "middle_name",
    lastName: "last_name",
    photoUrl: "photo_url",
    leadSource: "lead_source",
    currentBalance: "current_balance",
    socialLinks: "social_links",
    phoneNumbers: "phone_numbers",
    emailDomain: "email_domain",
    customFields: "custom_fields",
    firstCallAt: "first_call_at",
    firstEmailAt: "first_email_at",
    lastActivityAt: "last_activity_at",
    customMappings: "custom_mappings",
    updatedAt: "updated_at",
    createdAt: "created_at",
    opportunityIds: "opportunity_ids",
    passThrough: "pass_through",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Contact$ {
  /** @deprecated use `Contact$inboundSchema` instead. */
  export const inboundSchema = Contact$inboundSchema;
  /** @deprecated use `Contact$outboundSchema` instead. */
  export const outboundSchema = Contact$outboundSchema;
  /** @deprecated use `Contact$Outbound` instead. */
  export type Outbound = Contact$Outbound;
}

export function contactToJSON(contact: Contact): string {
  return JSON.stringify(Contact$outboundSchema.parse(contact));
}

export function contactFromJSON(
  jsonString: string,
): SafeParseResult<Contact, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Contact$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Contact' from JSON`,
  );
}

/** @internal */
export const ContactInput$inboundSchema: z.ZodType<
  ContactInput,
  z.ZodTypeDef,
  unknown
> = z.object({
  name: z.nullable(z.string()),
  owner_id: z.nullable(z.string()).optional(),
  type: z.nullable(Type$inboundSchema).optional(),
  company_id: z.nullable(z.string()).optional(),
  company_name: z.nullable(z.string()).optional(),
  lead_id: z.nullable(z.string()).optional(),
  first_name: z.nullable(z.string()).optional(),
  middle_name: z.nullable(z.string()).optional(),
  last_name: z.nullable(z.string()).optional(),
  prefix: z.nullable(z.string()).optional(),
  suffix: z.nullable(z.string()).optional(),
  title: z.nullable(z.string()).optional(),
  department: z.nullable(z.string()).optional(),
  language: z.nullable(z.string()).optional(),
  gender: z.nullable(ContactGender$inboundSchema).optional(),
  birthday: z.nullable(z.string()).optional(),
  image: z.nullable(z.string()).optional(),
  photo_url: z.nullable(z.string()).optional(),
  lead_source: z.nullable(z.string()).optional(),
  fax: z.nullable(z.string()).optional(),
  description: z.nullable(z.string()).optional(),
  current_balance: z.nullable(z.number()).optional(),
  status: z.nullable(z.string()).optional(),
  active: z.nullable(z.boolean()).optional(),
  websites: z.array(Website$inboundSchema).optional(),
  addresses: z.array(Address$inboundSchema).optional(),
  social_links: z.array(SocialLink$inboundSchema).optional(),
  phone_numbers: z.array(PhoneNumber$inboundSchema).optional(),
  emails: z.array(Email$inboundSchema).optional(),
  email_domain: z.nullable(z.string()).optional(),
  custom_fields: z.array(CustomField$inboundSchema).optional(),
  tags: z.nullable(z.array(z.string())).optional(),
  opportunity_ids: z.array(z.string()).optional(),
  pass_through: z.array(PassThroughBody$inboundSchema).optional(),
}).transform((v) => {
  return remap$(v, {
    "owner_id": "ownerId",
    "company_id": "companyId",
    "company_name": "companyName",
    "lead_id": "leadId",
    "first_name": "firstName",
    "middle_name": "middleName",
    "last_name": "lastName",
    "photo_url": "photoUrl",
    "lead_source": "leadSource",
    "current_balance": "currentBalance",
    "social_links": "socialLinks",
    "phone_numbers": "phoneNumbers",
    "email_domain": "emailDomain",
    "custom_fields": "customFields",
    "opportunity_ids": "opportunityIds",
    "pass_through": "passThrough",
  });
});

/** @internal */
export type ContactInput$Outbound = {
  name: string | null;
  owner_id?: string | null | undefined;
  type?: string | null | undefined;
  company_id?: string | null | undefined;
  company_name?: string | null | undefined;
  lead_id?: string | null | undefined;
  first_name?: string | null | undefined;
  middle_name?: string | null | undefined;
  last_name?: string | null | undefined;
  prefix?: string | null | undefined;
  suffix?: string | null | undefined;
  title?: string | null | undefined;
  department?: string | null | undefined;
  language?: string | null | undefined;
  gender?: string | null | undefined;
  birthday?: string | null | undefined;
  image?: string | null | undefined;
  photo_url?: string | null | undefined;
  lead_source?: string | null | undefined;
  fax?: string | null | undefined;
  description?: string | null | undefined;
  current_balance?: number | null | undefined;
  status?: string | null | undefined;
  active?: boolean | null | undefined;
  websites?: Array<Website$Outbound> | undefined;
  addresses?: Array<Address$Outbound> | undefined;
  social_links?: Array<SocialLink$Outbound> | undefined;
  phone_numbers?: Array<PhoneNumber$Outbound> | undefined;
  emails?: Array<Email$Outbound> | undefined;
  email_domain?: string | null | undefined;
  custom_fields?: Array<CustomField$Outbound> | undefined;
  tags?: Array<string> | null | undefined;
  opportunity_ids?: Array<string> | undefined;
  pass_through?: Array<PassThroughBody$Outbound> | undefined;
};

/** @internal */
export const ContactInput$outboundSchema: z.ZodType<
  ContactInput$Outbound,
  z.ZodTypeDef,
  ContactInput
> = z.object({
  name: z.nullable(z.string()),
  ownerId: z.nullable(z.string()).optional(),
  type: z.nullable(Type$outboundSchema).optional(),
  companyId: z.nullable(z.string()).optional(),
  companyName: z.nullable(z.string()).optional(),
  leadId: z.nullable(z.string()).optional(),
  firstName: z.nullable(z.string()).optional(),
  middleName: z.nullable(z.string()).optional(),
  lastName: z.nullable(z.string()).optional(),
  prefix: z.nullable(z.string()).optional(),
  suffix: z.nullable(z.string()).optional(),
  title: z.nullable(z.string()).optional(),
  department: z.nullable(z.string()).optional(),
  language: z.nullable(z.string()).optional(),
  gender: z.nullable(ContactGender$outboundSchema).optional(),
  birthday: z.nullable(z.string()).optional(),
  image: z.nullable(z.string()).optional(),
  photoUrl: z.nullable(z.string()).optional(),
  leadSource: z.nullable(z.string()).optional(),
  fax: z.nullable(z.string()).optional(),
  description: z.nullable(z.string()).optional(),
  currentBalance: z.nullable(z.number()).optional(),
  status: z.nullable(z.string()).optional(),
  active: z.nullable(z.boolean()).optional(),
  websites: z.array(Website$outboundSchema).optional(),
  addresses: z.array(Address$outboundSchema).optional(),
  socialLinks: z.array(SocialLink$outboundSchema).optional(),
  phoneNumbers: z.array(PhoneNumber$outboundSchema).optional(),
  emails: z.array(Email$outboundSchema).optional(),
  emailDomain: z.nullable(z.string()).optional(),
  customFields: z.array(CustomField$outboundSchema).optional(),
  tags: z.nullable(z.array(z.string())).optional(),
  opportunityIds: z.array(z.string()).optional(),
  passThrough: z.array(PassThroughBody$outboundSchema).optional(),
}).transform((v) => {
  return remap$(v, {
    ownerId: "owner_id",
    companyId: "company_id",
    companyName: "company_name",
    leadId: "lead_id",
    firstName: "first_name",
    middleName: "middle_name",
    lastName: "last_name",
    photoUrl: "photo_url",
    leadSource: "lead_source",
    currentBalance: "current_balance",
    socialLinks: "social_links",
    phoneNumbers: "phone_numbers",
    emailDomain: "email_domain",
    customFields: "custom_fields",
    opportunityIds: "opportunity_ids",
    passThrough: "pass_through",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ContactInput$ {
  /** @deprecated use `ContactInput$inboundSchema` instead. */
  export const inboundSchema = ContactInput$inboundSchema;
  /** @deprecated use `ContactInput$outboundSchema` instead. */
  export const outboundSchema = ContactInput$outboundSchema;
  /** @deprecated use `ContactInput$Outbound` instead. */
  export type Outbound = ContactInput$Outbound;
}

export function contactInputToJSON(contactInput: ContactInput): string {
  return JSON.stringify(ContactInput$outboundSchema.parse(contactInput));
}

export function contactInputFromJSON(
  jsonString: string,
): SafeParseResult<ContactInput, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ContactInput$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ContactInput' from JSON`,
  );
}

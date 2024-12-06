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
  CustomMappings,
  CustomMappings$inboundSchema,
  CustomMappings$Outbound,
  CustomMappings$outboundSchema,
} from "./custommappings.js";
import {
  Gender,
  Gender$inboundSchema,
  Gender$outboundSchema,
} from "./gender.js";

export type Person = {
  /**
   * A unique identifier for an object.
   */
  id?: string | null | undefined;
  /**
   * The first name of the person.
   */
  firstName?: string | null | undefined;
  /**
   * The last name of the person.
   */
  lastName?: string | null | undefined;
  /**
   * Middle name of the person.
   */
  middleName?: string | null | undefined;
  /**
   * The gender represents the gender identity of a person.
   */
  gender?: Gender | null | undefined;
  /**
   * Initials of the person
   */
  initials?: string | null | undefined;
  /**
   * Date of birth
   */
  birthday?: RFCDate | null | undefined;
  /**
   * Date of death
   */
  deceasedOn?: RFCDate | null | undefined;
  /**
   * When custom mappings are configured on the resource, the result is included here.
   */
  customMappings?: CustomMappings | null | undefined;
};

/** @internal */
export const Person$inboundSchema: z.ZodType<Person, z.ZodTypeDef, unknown> = z
  .object({
    id: z.nullable(z.string()).optional(),
    first_name: z.nullable(z.string()).optional(),
    last_name: z.nullable(z.string()).optional(),
    middle_name: z.nullable(z.string()).optional(),
    gender: z.nullable(Gender$inboundSchema).optional(),
    initials: z.nullable(z.string()).optional(),
    birthday: z.nullable(z.string().transform(v => new RFCDate(v))).optional(),
    deceased_on: z.nullable(z.string().transform(v => new RFCDate(v)))
      .optional(),
    custom_mappings: z.nullable(CustomMappings$inboundSchema).optional(),
  }).transform((v) => {
    return remap$(v, {
      "first_name": "firstName",
      "last_name": "lastName",
      "middle_name": "middleName",
      "deceased_on": "deceasedOn",
      "custom_mappings": "customMappings",
    });
  });

/** @internal */
export type Person$Outbound = {
  id?: string | null | undefined;
  first_name?: string | null | undefined;
  last_name?: string | null | undefined;
  middle_name?: string | null | undefined;
  gender?: string | null | undefined;
  initials?: string | null | undefined;
  birthday?: string | null | undefined;
  deceased_on?: string | null | undefined;
  custom_mappings?: CustomMappings$Outbound | null | undefined;
};

/** @internal */
export const Person$outboundSchema: z.ZodType<
  Person$Outbound,
  z.ZodTypeDef,
  Person
> = z.object({
  id: z.nullable(z.string()).optional(),
  firstName: z.nullable(z.string()).optional(),
  lastName: z.nullable(z.string()).optional(),
  middleName: z.nullable(z.string()).optional(),
  gender: z.nullable(Gender$outboundSchema).optional(),
  initials: z.nullable(z.string()).optional(),
  birthday: z.nullable(z.instanceof(RFCDate).transform(v => v.toString()))
    .optional(),
  deceasedOn: z.nullable(z.instanceof(RFCDate).transform(v => v.toString()))
    .optional(),
  customMappings: z.nullable(CustomMappings$outboundSchema).optional(),
}).transform((v) => {
  return remap$(v, {
    firstName: "first_name",
    lastName: "last_name",
    middleName: "middle_name",
    deceasedOn: "deceased_on",
    customMappings: "custom_mappings",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Person$ {
  /** @deprecated use `Person$inboundSchema` instead. */
  export const inboundSchema = Person$inboundSchema;
  /** @deprecated use `Person$outboundSchema` instead. */
  export const outboundSchema = Person$outboundSchema;
  /** @deprecated use `Person$Outbound` instead. */
  export type Outbound = Person$Outbound;
}

export function personToJSON(person: Person): string {
  return JSON.stringify(Person$outboundSchema.parse(person));
}

export function personFromJSON(
  jsonString: string,
): SafeParseResult<Person, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Person$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Person' from JSON`,
  );
}

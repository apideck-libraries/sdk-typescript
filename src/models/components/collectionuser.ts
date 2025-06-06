/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type CollectionUser = {
  /**
   * A unique identifier for an object.
   */
  id?: string | null | undefined;
  /**
   * Full name of the user
   */
  name?: string | null | undefined;
  /**
   * First name of the user
   */
  firstName?: string | null | undefined;
  /**
   * Last name of the user
   */
  lastName?: string | null | undefined;
  /**
   * Email address of the user
   */
  email?: string | null | undefined;
  /**
   * The URL of the photo of a person.
   */
  photoUrl?: string | null | undefined;
  /**
   * When custom mappings are configured on the resource, the result is included here.
   */
  customMappings?: { [k: string]: any } | null | undefined;
  /**
   * The date and time when the object was last updated.
   */
  updatedAt?: Date | null | undefined;
  /**
   * The date and time when the object was created.
   */
  createdAt?: Date | null | undefined;
};

/** @internal */
export const CollectionUser$inboundSchema: z.ZodType<
  CollectionUser,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.nullable(z.string()).optional(),
  name: z.nullable(z.string()).optional(),
  first_name: z.nullable(z.string()).optional(),
  last_name: z.nullable(z.string()).optional(),
  email: z.nullable(z.string()).optional(),
  photo_url: z.nullable(z.string()).optional(),
  custom_mappings: z.nullable(z.record(z.any())).optional(),
  updated_at: z.nullable(
    z.string().datetime({ offset: true }).transform(v => new Date(v)),
  ).optional(),
  created_at: z.nullable(
    z.string().datetime({ offset: true }).transform(v => new Date(v)),
  ).optional(),
}).transform((v) => {
  return remap$(v, {
    "first_name": "firstName",
    "last_name": "lastName",
    "photo_url": "photoUrl",
    "custom_mappings": "customMappings",
    "updated_at": "updatedAt",
    "created_at": "createdAt",
  });
});

/** @internal */
export type CollectionUser$Outbound = {
  id?: string | null | undefined;
  name?: string | null | undefined;
  first_name?: string | null | undefined;
  last_name?: string | null | undefined;
  email?: string | null | undefined;
  photo_url?: string | null | undefined;
  custom_mappings?: { [k: string]: any } | null | undefined;
  updated_at?: string | null | undefined;
  created_at?: string | null | undefined;
};

/** @internal */
export const CollectionUser$outboundSchema: z.ZodType<
  CollectionUser$Outbound,
  z.ZodTypeDef,
  CollectionUser
> = z.object({
  id: z.nullable(z.string()).optional(),
  name: z.nullable(z.string()).optional(),
  firstName: z.nullable(z.string()).optional(),
  lastName: z.nullable(z.string()).optional(),
  email: z.nullable(z.string()).optional(),
  photoUrl: z.nullable(z.string()).optional(),
  customMappings: z.nullable(z.record(z.any())).optional(),
  updatedAt: z.nullable(z.date().transform(v => v.toISOString())).optional(),
  createdAt: z.nullable(z.date().transform(v => v.toISOString())).optional(),
}).transform((v) => {
  return remap$(v, {
    firstName: "first_name",
    lastName: "last_name",
    photoUrl: "photo_url",
    customMappings: "custom_mappings",
    updatedAt: "updated_at",
    createdAt: "created_at",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CollectionUser$ {
  /** @deprecated use `CollectionUser$inboundSchema` instead. */
  export const inboundSchema = CollectionUser$inboundSchema;
  /** @deprecated use `CollectionUser$outboundSchema` instead. */
  export const outboundSchema = CollectionUser$outboundSchema;
  /** @deprecated use `CollectionUser$Outbound` instead. */
  export type Outbound = CollectionUser$Outbound;
}

export function collectionUserToJSON(collectionUser: CollectionUser): string {
  return JSON.stringify(CollectionUser$outboundSchema.parse(collectionUser));
}

export function collectionUserFromJSON(
  jsonString: string,
): SafeParseResult<CollectionUser, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CollectionUser$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CollectionUser' from JSON`,
  );
}

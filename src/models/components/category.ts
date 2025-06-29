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
  PassThroughBody,
  PassThroughBody$inboundSchema,
  PassThroughBody$Outbound,
  PassThroughBody$outboundSchema,
} from "./passthroughbody.js";

/**
 * Based on the status some functionality is enabled or disabled.
 */
export const CategoryStatus = {
  Active: "active",
  Inactive: "inactive",
} as const;
/**
 * Based on the status some functionality is enabled or disabled.
 */
export type CategoryStatus = ClosedEnum<typeof CategoryStatus>;

export type Category = {
  /**
   * A unique identifier for an object.
   */
  id?: string | undefined;
  /**
   * The name of the category.
   */
  name?: string | undefined;
  /**
   * Based on the status some functionality is enabled or disabled.
   */
  status?: CategoryStatus | undefined;
  /**
   * When custom mappings are configured on the resource, the result is included here.
   */
  customMappings?: { [k: string]: any } | null | undefined;
  /**
   * A binary value used to detect updates to a object and prevent data conflicts. It is incremented each time an update is made to the object.
   */
  rowVersion?: string | null | undefined;
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
   * The pass_through property allows passing service-specific, custom data or structured modifications in request body when creating or updating resources.
   */
  passThrough?: Array<PassThroughBody> | undefined;
};

/** @internal */
export const CategoryStatus$inboundSchema: z.ZodNativeEnum<
  typeof CategoryStatus
> = z.nativeEnum(CategoryStatus);

/** @internal */
export const CategoryStatus$outboundSchema: z.ZodNativeEnum<
  typeof CategoryStatus
> = CategoryStatus$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CategoryStatus$ {
  /** @deprecated use `CategoryStatus$inboundSchema` instead. */
  export const inboundSchema = CategoryStatus$inboundSchema;
  /** @deprecated use `CategoryStatus$outboundSchema` instead. */
  export const outboundSchema = CategoryStatus$outboundSchema;
}

/** @internal */
export const Category$inboundSchema: z.ZodType<
  Category,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string().optional(),
  name: z.string().optional(),
  status: CategoryStatus$inboundSchema.optional(),
  custom_mappings: z.nullable(z.record(z.any())).optional(),
  row_version: z.nullable(z.string()).optional(),
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
    "custom_mappings": "customMappings",
    "row_version": "rowVersion",
    "updated_by": "updatedBy",
    "created_by": "createdBy",
    "updated_at": "updatedAt",
    "created_at": "createdAt",
    "pass_through": "passThrough",
  });
});

/** @internal */
export type Category$Outbound = {
  id?: string | undefined;
  name?: string | undefined;
  status?: string | undefined;
  custom_mappings?: { [k: string]: any } | null | undefined;
  row_version?: string | null | undefined;
  updated_by?: string | null | undefined;
  created_by?: string | null | undefined;
  updated_at?: string | null | undefined;
  created_at?: string | null | undefined;
  pass_through?: Array<PassThroughBody$Outbound> | undefined;
};

/** @internal */
export const Category$outboundSchema: z.ZodType<
  Category$Outbound,
  z.ZodTypeDef,
  Category
> = z.object({
  id: z.string().optional(),
  name: z.string().optional(),
  status: CategoryStatus$outboundSchema.optional(),
  customMappings: z.nullable(z.record(z.any())).optional(),
  rowVersion: z.nullable(z.string()).optional(),
  updatedBy: z.nullable(z.string()).optional(),
  createdBy: z.nullable(z.string()).optional(),
  updatedAt: z.nullable(z.date().transform(v => v.toISOString())).optional(),
  createdAt: z.nullable(z.date().transform(v => v.toISOString())).optional(),
  passThrough: z.array(PassThroughBody$outboundSchema).optional(),
}).transform((v) => {
  return remap$(v, {
    customMappings: "custom_mappings",
    rowVersion: "row_version",
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
export namespace Category$ {
  /** @deprecated use `Category$inboundSchema` instead. */
  export const inboundSchema = Category$inboundSchema;
  /** @deprecated use `Category$outboundSchema` instead. */
  export const outboundSchema = Category$outboundSchema;
  /** @deprecated use `Category$Outbound` instead. */
  export type Outbound = Category$Outbound;
}

export function categoryToJSON(category: Category): string {
  return JSON.stringify(Category$outboundSchema.parse(category));
}

export function categoryFromJSON(
  jsonString: string,
): SafeParseResult<Category, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Category$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Category' from JSON`,
  );
}

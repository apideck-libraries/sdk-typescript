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
  CustomMappings,
  CustomMappings$inboundSchema,
  CustomMappings$Outbound,
  CustomMappings$outboundSchema,
} from "./custommappings.js";
import {
  PassThroughBody,
  PassThroughBody$inboundSchema,
  PassThroughBody$Outbound,
  PassThroughBody$outboundSchema,
} from "./passthroughbody.js";

/**
 * Based on the status some functionality is enabled or disabled.
 */
export const SubsidiaryStatus = {
  Active: "active",
  Inactive: "inactive",
} as const;
/**
 * Based on the status some functionality is enabled or disabled.
 */
export type SubsidiaryStatus = ClosedEnum<typeof SubsidiaryStatus>;

export type Subsidiary = {
  /**
   * A unique identifier for an object.
   */
  id?: string | undefined;
  /**
   * A unique identifier for an object.
   */
  parentId?: string | null | undefined;
  /**
   * The name of the company.
   */
  name?: string | null | undefined;
  /**
   * Based on the status some functionality is enabled or disabled.
   */
  status?: SubsidiaryStatus | undefined;
  /**
   * When custom mappings are configured on the resource, the result is included here.
   */
  customMappings?: CustomMappings | null | undefined;
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

export type SubsidiaryInput = {
  /**
   * A unique identifier for an object.
   */
  parentId?: string | null | undefined;
  /**
   * The name of the company.
   */
  name?: string | null | undefined;
  /**
   * Based on the status some functionality is enabled or disabled.
   */
  status?: SubsidiaryStatus | undefined;
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
export const SubsidiaryStatus$inboundSchema: z.ZodNativeEnum<
  typeof SubsidiaryStatus
> = z.nativeEnum(SubsidiaryStatus);

/** @internal */
export const SubsidiaryStatus$outboundSchema: z.ZodNativeEnum<
  typeof SubsidiaryStatus
> = SubsidiaryStatus$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace SubsidiaryStatus$ {
  /** @deprecated use `SubsidiaryStatus$inboundSchema` instead. */
  export const inboundSchema = SubsidiaryStatus$inboundSchema;
  /** @deprecated use `SubsidiaryStatus$outboundSchema` instead. */
  export const outboundSchema = SubsidiaryStatus$outboundSchema;
}

/** @internal */
export const Subsidiary$inboundSchema: z.ZodType<
  Subsidiary,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string().optional(),
  parent_id: z.nullable(z.string()).optional(),
  name: z.nullable(z.string()).optional(),
  status: SubsidiaryStatus$inboundSchema.optional(),
  custom_mappings: z.nullable(CustomMappings$inboundSchema).optional(),
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
    "parent_id": "parentId",
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
export type Subsidiary$Outbound = {
  id?: string | undefined;
  parent_id?: string | null | undefined;
  name?: string | null | undefined;
  status?: string | undefined;
  custom_mappings?: CustomMappings$Outbound | null | undefined;
  row_version?: string | null | undefined;
  updated_by?: string | null | undefined;
  created_by?: string | null | undefined;
  updated_at?: string | null | undefined;
  created_at?: string | null | undefined;
  pass_through?: Array<PassThroughBody$Outbound> | undefined;
};

/** @internal */
export const Subsidiary$outboundSchema: z.ZodType<
  Subsidiary$Outbound,
  z.ZodTypeDef,
  Subsidiary
> = z.object({
  id: z.string().optional(),
  parentId: z.nullable(z.string()).optional(),
  name: z.nullable(z.string()).optional(),
  status: SubsidiaryStatus$outboundSchema.optional(),
  customMappings: z.nullable(CustomMappings$outboundSchema).optional(),
  rowVersion: z.nullable(z.string()).optional(),
  updatedBy: z.nullable(z.string()).optional(),
  createdBy: z.nullable(z.string()).optional(),
  updatedAt: z.nullable(z.date().transform(v => v.toISOString())).optional(),
  createdAt: z.nullable(z.date().transform(v => v.toISOString())).optional(),
  passThrough: z.array(PassThroughBody$outboundSchema).optional(),
}).transform((v) => {
  return remap$(v, {
    parentId: "parent_id",
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
export namespace Subsidiary$ {
  /** @deprecated use `Subsidiary$inboundSchema` instead. */
  export const inboundSchema = Subsidiary$inboundSchema;
  /** @deprecated use `Subsidiary$outboundSchema` instead. */
  export const outboundSchema = Subsidiary$outboundSchema;
  /** @deprecated use `Subsidiary$Outbound` instead. */
  export type Outbound = Subsidiary$Outbound;
}

export function subsidiaryToJSON(subsidiary: Subsidiary): string {
  return JSON.stringify(Subsidiary$outboundSchema.parse(subsidiary));
}

export function subsidiaryFromJSON(
  jsonString: string,
): SafeParseResult<Subsidiary, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Subsidiary$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Subsidiary' from JSON`,
  );
}

/** @internal */
export const SubsidiaryInput$inboundSchema: z.ZodType<
  SubsidiaryInput,
  z.ZodTypeDef,
  unknown
> = z.object({
  parent_id: z.nullable(z.string()).optional(),
  name: z.nullable(z.string()).optional(),
  status: SubsidiaryStatus$inboundSchema.optional(),
  row_version: z.nullable(z.string()).optional(),
  pass_through: z.array(PassThroughBody$inboundSchema).optional(),
}).transform((v) => {
  return remap$(v, {
    "parent_id": "parentId",
    "row_version": "rowVersion",
    "pass_through": "passThrough",
  });
});

/** @internal */
export type SubsidiaryInput$Outbound = {
  parent_id?: string | null | undefined;
  name?: string | null | undefined;
  status?: string | undefined;
  row_version?: string | null | undefined;
  pass_through?: Array<PassThroughBody$Outbound> | undefined;
};

/** @internal */
export const SubsidiaryInput$outboundSchema: z.ZodType<
  SubsidiaryInput$Outbound,
  z.ZodTypeDef,
  SubsidiaryInput
> = z.object({
  parentId: z.nullable(z.string()).optional(),
  name: z.nullable(z.string()).optional(),
  status: SubsidiaryStatus$outboundSchema.optional(),
  rowVersion: z.nullable(z.string()).optional(),
  passThrough: z.array(PassThroughBody$outboundSchema).optional(),
}).transform((v) => {
  return remap$(v, {
    parentId: "parent_id",
    rowVersion: "row_version",
    passThrough: "pass_through",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace SubsidiaryInput$ {
  /** @deprecated use `SubsidiaryInput$inboundSchema` instead. */
  export const inboundSchema = SubsidiaryInput$inboundSchema;
  /** @deprecated use `SubsidiaryInput$outboundSchema` instead. */
  export const outboundSchema = SubsidiaryInput$outboundSchema;
  /** @deprecated use `SubsidiaryInput$Outbound` instead. */
  export type Outbound = SubsidiaryInput$Outbound;
}

export function subsidiaryInputToJSON(
  subsidiaryInput: SubsidiaryInput,
): string {
  return JSON.stringify(SubsidiaryInput$outboundSchema.parse(subsidiaryInput));
}

export function subsidiaryInputFromJSON(
  jsonString: string,
): SafeParseResult<SubsidiaryInput, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => SubsidiaryInput$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'SubsidiaryInput' from JSON`,
  );
}

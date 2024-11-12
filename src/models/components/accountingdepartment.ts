/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { ClosedEnum } from "../../types/enums.js";
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
import {
  SubsidiaryReference,
  SubsidiaryReference$inboundSchema,
  SubsidiaryReference$Outbound,
  SubsidiaryReference$outboundSchema,
} from "./subsidiaryreference.js";
import {
  SubsidiaryReferenceInput,
  SubsidiaryReferenceInput$inboundSchema,
  SubsidiaryReferenceInput$Outbound,
  SubsidiaryReferenceInput$outboundSchema,
} from "./subsidiaryreferenceinput.js";

/**
 * Based on the status some functionality is enabled or disabled.
 */
export const DepartmentStatus = {
  Active: "active",
  Inactive: "inactive",
} as const;
/**
 * Based on the status some functionality is enabled or disabled.
 */
export type DepartmentStatus = ClosedEnum<typeof DepartmentStatus>;

export type AccountingDepartment = {
  /**
   * A unique identifier for an object.
   */
  id?: string | undefined;
  /**
   * A unique identifier for an object.
   */
  parentId?: string | null | undefined;
  /**
   * The name of the department.
   */
  name?: string | null | undefined;
  /**
   * Based on the status some functionality is enabled or disabled.
   */
  status?: DepartmentStatus | undefined;
  subsidiaries?: Array<SubsidiaryReference> | undefined;
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

export type AccountingDepartmentInput = {
  /**
   * A unique identifier for an object.
   */
  parentId?: string | null | undefined;
  /**
   * The name of the department.
   */
  name?: string | null | undefined;
  /**
   * Based on the status some functionality is enabled or disabled.
   */
  status?: DepartmentStatus | undefined;
  subsidiaries?: Array<SubsidiaryReferenceInput> | undefined;
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
export const DepartmentStatus$inboundSchema: z.ZodNativeEnum<
  typeof DepartmentStatus
> = z.nativeEnum(DepartmentStatus);

/** @internal */
export const DepartmentStatus$outboundSchema: z.ZodNativeEnum<
  typeof DepartmentStatus
> = DepartmentStatus$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DepartmentStatus$ {
  /** @deprecated use `DepartmentStatus$inboundSchema` instead. */
  export const inboundSchema = DepartmentStatus$inboundSchema;
  /** @deprecated use `DepartmentStatus$outboundSchema` instead. */
  export const outboundSchema = DepartmentStatus$outboundSchema;
}

/** @internal */
export const AccountingDepartment$inboundSchema: z.ZodType<
  AccountingDepartment,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string().optional(),
  parent_id: z.nullable(z.string()).optional(),
  name: z.nullable(z.string()).optional(),
  status: DepartmentStatus$inboundSchema.optional(),
  subsidiaries: z.array(SubsidiaryReference$inboundSchema).optional(),
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
export type AccountingDepartment$Outbound = {
  id?: string | undefined;
  parent_id?: string | null | undefined;
  name?: string | null | undefined;
  status?: string | undefined;
  subsidiaries?: Array<SubsidiaryReference$Outbound> | undefined;
  custom_mappings?: CustomMappings$Outbound | null | undefined;
  row_version?: string | null | undefined;
  updated_by?: string | null | undefined;
  created_by?: string | null | undefined;
  updated_at?: string | null | undefined;
  created_at?: string | null | undefined;
  pass_through?: Array<PassThroughBody$Outbound> | undefined;
};

/** @internal */
export const AccountingDepartment$outboundSchema: z.ZodType<
  AccountingDepartment$Outbound,
  z.ZodTypeDef,
  AccountingDepartment
> = z.object({
  id: z.string().optional(),
  parentId: z.nullable(z.string()).optional(),
  name: z.nullable(z.string()).optional(),
  status: DepartmentStatus$outboundSchema.optional(),
  subsidiaries: z.array(SubsidiaryReference$outboundSchema).optional(),
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
export namespace AccountingDepartment$ {
  /** @deprecated use `AccountingDepartment$inboundSchema` instead. */
  export const inboundSchema = AccountingDepartment$inboundSchema;
  /** @deprecated use `AccountingDepartment$outboundSchema` instead. */
  export const outboundSchema = AccountingDepartment$outboundSchema;
  /** @deprecated use `AccountingDepartment$Outbound` instead. */
  export type Outbound = AccountingDepartment$Outbound;
}

/** @internal */
export const AccountingDepartmentInput$inboundSchema: z.ZodType<
  AccountingDepartmentInput,
  z.ZodTypeDef,
  unknown
> = z.object({
  parent_id: z.nullable(z.string()).optional(),
  name: z.nullable(z.string()).optional(),
  status: DepartmentStatus$inboundSchema.optional(),
  subsidiaries: z.array(SubsidiaryReferenceInput$inboundSchema).optional(),
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
export type AccountingDepartmentInput$Outbound = {
  parent_id?: string | null | undefined;
  name?: string | null | undefined;
  status?: string | undefined;
  subsidiaries?: Array<SubsidiaryReferenceInput$Outbound> | undefined;
  row_version?: string | null | undefined;
  pass_through?: Array<PassThroughBody$Outbound> | undefined;
};

/** @internal */
export const AccountingDepartmentInput$outboundSchema: z.ZodType<
  AccountingDepartmentInput$Outbound,
  z.ZodTypeDef,
  AccountingDepartmentInput
> = z.object({
  parentId: z.nullable(z.string()).optional(),
  name: z.nullable(z.string()).optional(),
  status: DepartmentStatus$outboundSchema.optional(),
  subsidiaries: z.array(SubsidiaryReferenceInput$outboundSchema).optional(),
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
export namespace AccountingDepartmentInput$ {
  /** @deprecated use `AccountingDepartmentInput$inboundSchema` instead. */
  export const inboundSchema = AccountingDepartmentInput$inboundSchema;
  /** @deprecated use `AccountingDepartmentInput$outboundSchema` instead. */
  export const outboundSchema = AccountingDepartmentInput$outboundSchema;
  /** @deprecated use `AccountingDepartmentInput$Outbound` instead. */
  export type Outbound = AccountingDepartmentInput$Outbound;
}

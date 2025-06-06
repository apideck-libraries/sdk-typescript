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
export const TrackingCategoryStatus = {
  Active: "active",
  Inactive: "inactive",
} as const;
/**
 * Based on the status some functionality is enabled or disabled.
 */
export type TrackingCategoryStatus = ClosedEnum<typeof TrackingCategoryStatus>;

export type TrackingCategorySubsidiaries = {
  /**
   * The ID of the subsidiary.
   */
  id?: string | undefined;
};

export type TrackingCategory = {
  /**
   * A unique identifier for an object.
   */
  id?: string | undefined;
  /**
   * A unique identifier for an object.
   */
  parentId?: string | null | undefined;
  /**
   * The name of the tracking category.
   */
  name?: string | undefined;
  /**
   * The code of the tracking category.
   */
  code?: string | null | undefined;
  /**
   * Based on the status some functionality is enabled or disabled.
   */
  status?: TrackingCategoryStatus | undefined;
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
  /**
   * The subsidiaries the account belongs to.
   */
  subsidiaries?: Array<TrackingCategorySubsidiaries> | undefined;
};

export type TrackingCategoryInput = {
  /**
   * A unique identifier for an object.
   */
  parentId?: string | null | undefined;
  /**
   * The name of the tracking category.
   */
  name?: string | undefined;
  /**
   * The code of the tracking category.
   */
  code?: string | null | undefined;
  /**
   * Based on the status some functionality is enabled or disabled.
   */
  status?: TrackingCategoryStatus | undefined;
  /**
   * A binary value used to detect updates to a object and prevent data conflicts. It is incremented each time an update is made to the object.
   */
  rowVersion?: string | null | undefined;
  /**
   * The pass_through property allows passing service-specific, custom data or structured modifications in request body when creating or updating resources.
   */
  passThrough?: Array<PassThroughBody> | undefined;
  /**
   * The subsidiaries the account belongs to.
   */
  subsidiaries?: Array<TrackingCategorySubsidiaries> | undefined;
};

/** @internal */
export const TrackingCategoryStatus$inboundSchema: z.ZodNativeEnum<
  typeof TrackingCategoryStatus
> = z.nativeEnum(TrackingCategoryStatus);

/** @internal */
export const TrackingCategoryStatus$outboundSchema: z.ZodNativeEnum<
  typeof TrackingCategoryStatus
> = TrackingCategoryStatus$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace TrackingCategoryStatus$ {
  /** @deprecated use `TrackingCategoryStatus$inboundSchema` instead. */
  export const inboundSchema = TrackingCategoryStatus$inboundSchema;
  /** @deprecated use `TrackingCategoryStatus$outboundSchema` instead. */
  export const outboundSchema = TrackingCategoryStatus$outboundSchema;
}

/** @internal */
export const TrackingCategorySubsidiaries$inboundSchema: z.ZodType<
  TrackingCategorySubsidiaries,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string().optional(),
});

/** @internal */
export type TrackingCategorySubsidiaries$Outbound = {
  id?: string | undefined;
};

/** @internal */
export const TrackingCategorySubsidiaries$outboundSchema: z.ZodType<
  TrackingCategorySubsidiaries$Outbound,
  z.ZodTypeDef,
  TrackingCategorySubsidiaries
> = z.object({
  id: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace TrackingCategorySubsidiaries$ {
  /** @deprecated use `TrackingCategorySubsidiaries$inboundSchema` instead. */
  export const inboundSchema = TrackingCategorySubsidiaries$inboundSchema;
  /** @deprecated use `TrackingCategorySubsidiaries$outboundSchema` instead. */
  export const outboundSchema = TrackingCategorySubsidiaries$outboundSchema;
  /** @deprecated use `TrackingCategorySubsidiaries$Outbound` instead. */
  export type Outbound = TrackingCategorySubsidiaries$Outbound;
}

export function trackingCategorySubsidiariesToJSON(
  trackingCategorySubsidiaries: TrackingCategorySubsidiaries,
): string {
  return JSON.stringify(
    TrackingCategorySubsidiaries$outboundSchema.parse(
      trackingCategorySubsidiaries,
    ),
  );
}

export function trackingCategorySubsidiariesFromJSON(
  jsonString: string,
): SafeParseResult<TrackingCategorySubsidiaries, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => TrackingCategorySubsidiaries$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'TrackingCategorySubsidiaries' from JSON`,
  );
}

/** @internal */
export const TrackingCategory$inboundSchema: z.ZodType<
  TrackingCategory,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string().optional(),
  parent_id: z.nullable(z.string()).optional(),
  name: z.string().optional(),
  code: z.nullable(z.string()).optional(),
  status: TrackingCategoryStatus$inboundSchema.optional(),
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
  subsidiaries: z.array(
    z.lazy(() => TrackingCategorySubsidiaries$inboundSchema),
  ).optional(),
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
export type TrackingCategory$Outbound = {
  id?: string | undefined;
  parent_id?: string | null | undefined;
  name?: string | undefined;
  code?: string | null | undefined;
  status?: string | undefined;
  custom_mappings?: { [k: string]: any } | null | undefined;
  row_version?: string | null | undefined;
  updated_by?: string | null | undefined;
  created_by?: string | null | undefined;
  updated_at?: string | null | undefined;
  created_at?: string | null | undefined;
  pass_through?: Array<PassThroughBody$Outbound> | undefined;
  subsidiaries?: Array<TrackingCategorySubsidiaries$Outbound> | undefined;
};

/** @internal */
export const TrackingCategory$outboundSchema: z.ZodType<
  TrackingCategory$Outbound,
  z.ZodTypeDef,
  TrackingCategory
> = z.object({
  id: z.string().optional(),
  parentId: z.nullable(z.string()).optional(),
  name: z.string().optional(),
  code: z.nullable(z.string()).optional(),
  status: TrackingCategoryStatus$outboundSchema.optional(),
  customMappings: z.nullable(z.record(z.any())).optional(),
  rowVersion: z.nullable(z.string()).optional(),
  updatedBy: z.nullable(z.string()).optional(),
  createdBy: z.nullable(z.string()).optional(),
  updatedAt: z.nullable(z.date().transform(v => v.toISOString())).optional(),
  createdAt: z.nullable(z.date().transform(v => v.toISOString())).optional(),
  passThrough: z.array(PassThroughBody$outboundSchema).optional(),
  subsidiaries: z.array(
    z.lazy(() => TrackingCategorySubsidiaries$outboundSchema),
  ).optional(),
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
export namespace TrackingCategory$ {
  /** @deprecated use `TrackingCategory$inboundSchema` instead. */
  export const inboundSchema = TrackingCategory$inboundSchema;
  /** @deprecated use `TrackingCategory$outboundSchema` instead. */
  export const outboundSchema = TrackingCategory$outboundSchema;
  /** @deprecated use `TrackingCategory$Outbound` instead. */
  export type Outbound = TrackingCategory$Outbound;
}

export function trackingCategoryToJSON(
  trackingCategory: TrackingCategory,
): string {
  return JSON.stringify(
    TrackingCategory$outboundSchema.parse(trackingCategory),
  );
}

export function trackingCategoryFromJSON(
  jsonString: string,
): SafeParseResult<TrackingCategory, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => TrackingCategory$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'TrackingCategory' from JSON`,
  );
}

/** @internal */
export const TrackingCategoryInput$inboundSchema: z.ZodType<
  TrackingCategoryInput,
  z.ZodTypeDef,
  unknown
> = z.object({
  parent_id: z.nullable(z.string()).optional(),
  name: z.string().optional(),
  code: z.nullable(z.string()).optional(),
  status: TrackingCategoryStatus$inboundSchema.optional(),
  row_version: z.nullable(z.string()).optional(),
  pass_through: z.array(PassThroughBody$inboundSchema).optional(),
  subsidiaries: z.array(
    z.lazy(() => TrackingCategorySubsidiaries$inboundSchema),
  ).optional(),
}).transform((v) => {
  return remap$(v, {
    "parent_id": "parentId",
    "row_version": "rowVersion",
    "pass_through": "passThrough",
  });
});

/** @internal */
export type TrackingCategoryInput$Outbound = {
  parent_id?: string | null | undefined;
  name?: string | undefined;
  code?: string | null | undefined;
  status?: string | undefined;
  row_version?: string | null | undefined;
  pass_through?: Array<PassThroughBody$Outbound> | undefined;
  subsidiaries?: Array<TrackingCategorySubsidiaries$Outbound> | undefined;
};

/** @internal */
export const TrackingCategoryInput$outboundSchema: z.ZodType<
  TrackingCategoryInput$Outbound,
  z.ZodTypeDef,
  TrackingCategoryInput
> = z.object({
  parentId: z.nullable(z.string()).optional(),
  name: z.string().optional(),
  code: z.nullable(z.string()).optional(),
  status: TrackingCategoryStatus$outboundSchema.optional(),
  rowVersion: z.nullable(z.string()).optional(),
  passThrough: z.array(PassThroughBody$outboundSchema).optional(),
  subsidiaries: z.array(
    z.lazy(() => TrackingCategorySubsidiaries$outboundSchema),
  ).optional(),
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
export namespace TrackingCategoryInput$ {
  /** @deprecated use `TrackingCategoryInput$inboundSchema` instead. */
  export const inboundSchema = TrackingCategoryInput$inboundSchema;
  /** @deprecated use `TrackingCategoryInput$outboundSchema` instead. */
  export const outboundSchema = TrackingCategoryInput$outboundSchema;
  /** @deprecated use `TrackingCategoryInput$Outbound` instead. */
  export type Outbound = TrackingCategoryInput$Outbound;
}

export function trackingCategoryInputToJSON(
  trackingCategoryInput: TrackingCategoryInput,
): string {
  return JSON.stringify(
    TrackingCategoryInput$outboundSchema.parse(trackingCategoryInput),
  );
}

export function trackingCategoryInputFromJSON(
  jsonString: string,
): SafeParseResult<TrackingCategoryInput, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => TrackingCategoryInput$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'TrackingCategoryInput' from JSON`,
  );
}

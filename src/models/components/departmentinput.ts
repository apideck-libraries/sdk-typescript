/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  PassThroughBody,
  PassThroughBody$inboundSchema,
  PassThroughBody$Outbound,
  PassThroughBody$outboundSchema,
} from "./passthroughbody.js";

export type DepartmentInput = {
  /**
   * Department name
   */
  name?: string | null | undefined;
  code?: string | null | undefined;
  description?: string | null | undefined;
  /**
   * The pass_through property allows passing service-specific, custom data or structured modifications in request body when creating or updating resources.
   */
  passThrough?: Array<PassThroughBody> | undefined;
};

/** @internal */
export const DepartmentInput$inboundSchema: z.ZodType<
  DepartmentInput,
  z.ZodTypeDef,
  unknown
> = z.object({
  name: z.nullable(z.string()).optional(),
  code: z.nullable(z.string()).optional(),
  description: z.nullable(z.string()).optional(),
  pass_through: z.array(PassThroughBody$inboundSchema).optional(),
}).transform((v) => {
  return remap$(v, {
    "pass_through": "passThrough",
  });
});

/** @internal */
export type DepartmentInput$Outbound = {
  name?: string | null | undefined;
  code?: string | null | undefined;
  description?: string | null | undefined;
  pass_through?: Array<PassThroughBody$Outbound> | undefined;
};

/** @internal */
export const DepartmentInput$outboundSchema: z.ZodType<
  DepartmentInput$Outbound,
  z.ZodTypeDef,
  DepartmentInput
> = z.object({
  name: z.nullable(z.string()).optional(),
  code: z.nullable(z.string()).optional(),
  description: z.nullable(z.string()).optional(),
  passThrough: z.array(PassThroughBody$outboundSchema).optional(),
}).transform((v) => {
  return remap$(v, {
    passThrough: "pass_through",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DepartmentInput$ {
  /** @deprecated use `DepartmentInput$inboundSchema` instead. */
  export const inboundSchema = DepartmentInput$inboundSchema;
  /** @deprecated use `DepartmentInput$outboundSchema` instead. */
  export const outboundSchema = DepartmentInput$outboundSchema;
  /** @deprecated use `DepartmentInput$Outbound` instead. */
  export type Outbound = DepartmentInput$Outbound;
}

export function departmentInputToJSON(
  departmentInput: DepartmentInput,
): string {
  return JSON.stringify(DepartmentInput$outboundSchema.parse(departmentInput));
}

export function departmentInputFromJSON(
  jsonString: string,
): SafeParseResult<DepartmentInput, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => DepartmentInput$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'DepartmentInput' from JSON`,
  );
}

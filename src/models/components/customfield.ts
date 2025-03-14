/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type Six = {};

export type Four = {};

export type Value =
  | Four
  | string
  | number
  | boolean
  | Array<string>
  | Array<Six>;

export type CustomField = {
  /**
   * Unique identifier for the custom field.
   */
  id: string | null;
  /**
   * Name of the custom field.
   */
  name?: string | null | undefined;
  /**
   * More information about the custom field
   */
  description?: string | null | undefined;
  value?:
    | Four
    | string
    | number
    | boolean
    | Array<string>
    | Array<Six>
    | null
    | undefined;
};

/** @internal */
export const Six$inboundSchema: z.ZodType<Six, z.ZodTypeDef, unknown> = z
  .object({});

/** @internal */
export type Six$Outbound = {};

/** @internal */
export const Six$outboundSchema: z.ZodType<Six$Outbound, z.ZodTypeDef, Six> = z
  .object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Six$ {
  /** @deprecated use `Six$inboundSchema` instead. */
  export const inboundSchema = Six$inboundSchema;
  /** @deprecated use `Six$outboundSchema` instead. */
  export const outboundSchema = Six$outboundSchema;
  /** @deprecated use `Six$Outbound` instead. */
  export type Outbound = Six$Outbound;
}

export function sixToJSON(six: Six): string {
  return JSON.stringify(Six$outboundSchema.parse(six));
}

export function sixFromJSON(
  jsonString: string,
): SafeParseResult<Six, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Six$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Six' from JSON`,
  );
}

/** @internal */
export const Four$inboundSchema: z.ZodType<Four, z.ZodTypeDef, unknown> = z
  .object({});

/** @internal */
export type Four$Outbound = {};

/** @internal */
export const Four$outboundSchema: z.ZodType<Four$Outbound, z.ZodTypeDef, Four> =
  z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Four$ {
  /** @deprecated use `Four$inboundSchema` instead. */
  export const inboundSchema = Four$inboundSchema;
  /** @deprecated use `Four$outboundSchema` instead. */
  export const outboundSchema = Four$outboundSchema;
  /** @deprecated use `Four$Outbound` instead. */
  export type Outbound = Four$Outbound;
}

export function fourToJSON(four: Four): string {
  return JSON.stringify(Four$outboundSchema.parse(four));
}

export function fourFromJSON(
  jsonString: string,
): SafeParseResult<Four, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Four$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Four' from JSON`,
  );
}

/** @internal */
export const Value$inboundSchema: z.ZodType<Value, z.ZodTypeDef, unknown> = z
  .union([
    z.lazy(() => Four$inboundSchema),
    z.string(),
    z.number(),
    z.boolean(),
    z.array(z.string()),
    z.array(z.lazy(() => Six$inboundSchema)),
  ]);

/** @internal */
export type Value$Outbound =
  | Four$Outbound
  | string
  | number
  | boolean
  | Array<string>
  | Array<Six$Outbound>;

/** @internal */
export const Value$outboundSchema: z.ZodType<
  Value$Outbound,
  z.ZodTypeDef,
  Value
> = z.union([
  z.lazy(() => Four$outboundSchema),
  z.string(),
  z.number(),
  z.boolean(),
  z.array(z.string()),
  z.array(z.lazy(() => Six$outboundSchema)),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Value$ {
  /** @deprecated use `Value$inboundSchema` instead. */
  export const inboundSchema = Value$inboundSchema;
  /** @deprecated use `Value$outboundSchema` instead. */
  export const outboundSchema = Value$outboundSchema;
  /** @deprecated use `Value$Outbound` instead. */
  export type Outbound = Value$Outbound;
}

export function valueToJSON(value: Value): string {
  return JSON.stringify(Value$outboundSchema.parse(value));
}

export function valueFromJSON(
  jsonString: string,
): SafeParseResult<Value, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Value$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Value' from JSON`,
  );
}

/** @internal */
export const CustomField$inboundSchema: z.ZodType<
  CustomField,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.nullable(z.string()),
  name: z.nullable(z.string()).optional(),
  description: z.nullable(z.string()).optional(),
  value: z.nullable(
    z.union([
      z.lazy(() => Four$inboundSchema),
      z.string(),
      z.number(),
      z.boolean(),
      z.array(z.string()),
      z.array(z.lazy(() => Six$inboundSchema)),
    ]),
  ).optional(),
});

/** @internal */
export type CustomField$Outbound = {
  id: string | null;
  name?: string | null | undefined;
  description?: string | null | undefined;
  value?:
    | Four$Outbound
    | string
    | number
    | boolean
    | Array<string>
    | Array<Six$Outbound>
    | null
    | undefined;
};

/** @internal */
export const CustomField$outboundSchema: z.ZodType<
  CustomField$Outbound,
  z.ZodTypeDef,
  CustomField
> = z.object({
  id: z.nullable(z.string()),
  name: z.nullable(z.string()).optional(),
  description: z.nullable(z.string()).optional(),
  value: z.nullable(
    z.union([
      z.lazy(() => Four$outboundSchema),
      z.string(),
      z.number(),
      z.boolean(),
      z.array(z.string()),
      z.array(z.lazy(() => Six$outboundSchema)),
    ]),
  ).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CustomField$ {
  /** @deprecated use `CustomField$inboundSchema` instead. */
  export const inboundSchema = CustomField$inboundSchema;
  /** @deprecated use `CustomField$outboundSchema` instead. */
  export const outboundSchema = CustomField$outboundSchema;
  /** @deprecated use `CustomField$Outbound` instead. */
  export type Outbound = CustomField$Outbound;
}

export function customFieldToJSON(customField: CustomField): string {
  return JSON.stringify(CustomField$outboundSchema.parse(customField));
}

export function customFieldFromJSON(
  jsonString: string,
): SafeParseResult<CustomField, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CustomField$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CustomField' from JSON`,
  );
}

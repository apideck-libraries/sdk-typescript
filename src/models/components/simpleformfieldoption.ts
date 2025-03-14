/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type Five = string | number | number;

export type SimpleFormFieldOptionValue =
  | string
  | number
  | number
  | boolean
  | Array<string | number | number>;

export type SimpleFormFieldOption = {
  label?: string | undefined;
  value?:
    | string
    | number
    | number
    | boolean
    | Array<string | number | number>
    | undefined;
};

/** @internal */
export const Five$inboundSchema: z.ZodType<Five, z.ZodTypeDef, unknown> = z
  .union([z.string(), z.number().int(), z.number()]);

/** @internal */
export type Five$Outbound = string | number | number;

/** @internal */
export const Five$outboundSchema: z.ZodType<Five$Outbound, z.ZodTypeDef, Five> =
  z.union([z.string(), z.number().int(), z.number()]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Five$ {
  /** @deprecated use `Five$inboundSchema` instead. */
  export const inboundSchema = Five$inboundSchema;
  /** @deprecated use `Five$outboundSchema` instead. */
  export const outboundSchema = Five$outboundSchema;
  /** @deprecated use `Five$Outbound` instead. */
  export type Outbound = Five$Outbound;
}

export function fiveToJSON(five: Five): string {
  return JSON.stringify(Five$outboundSchema.parse(five));
}

export function fiveFromJSON(
  jsonString: string,
): SafeParseResult<Five, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Five$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Five' from JSON`,
  );
}

/** @internal */
export const SimpleFormFieldOptionValue$inboundSchema: z.ZodType<
  SimpleFormFieldOptionValue,
  z.ZodTypeDef,
  unknown
> = z.union([
  z.string(),
  z.number().int(),
  z.number(),
  z.boolean(),
  z.array(z.union([z.string(), z.number().int(), z.number()])),
]);

/** @internal */
export type SimpleFormFieldOptionValue$Outbound =
  | string
  | number
  | number
  | boolean
  | Array<string | number | number>;

/** @internal */
export const SimpleFormFieldOptionValue$outboundSchema: z.ZodType<
  SimpleFormFieldOptionValue$Outbound,
  z.ZodTypeDef,
  SimpleFormFieldOptionValue
> = z.union([
  z.string(),
  z.number().int(),
  z.number(),
  z.boolean(),
  z.array(z.union([z.string(), z.number().int(), z.number()])),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace SimpleFormFieldOptionValue$ {
  /** @deprecated use `SimpleFormFieldOptionValue$inboundSchema` instead. */
  export const inboundSchema = SimpleFormFieldOptionValue$inboundSchema;
  /** @deprecated use `SimpleFormFieldOptionValue$outboundSchema` instead. */
  export const outboundSchema = SimpleFormFieldOptionValue$outboundSchema;
  /** @deprecated use `SimpleFormFieldOptionValue$Outbound` instead. */
  export type Outbound = SimpleFormFieldOptionValue$Outbound;
}

export function simpleFormFieldOptionValueToJSON(
  simpleFormFieldOptionValue: SimpleFormFieldOptionValue,
): string {
  return JSON.stringify(
    SimpleFormFieldOptionValue$outboundSchema.parse(simpleFormFieldOptionValue),
  );
}

export function simpleFormFieldOptionValueFromJSON(
  jsonString: string,
): SafeParseResult<SimpleFormFieldOptionValue, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => SimpleFormFieldOptionValue$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'SimpleFormFieldOptionValue' from JSON`,
  );
}

/** @internal */
export const SimpleFormFieldOption$inboundSchema: z.ZodType<
  SimpleFormFieldOption,
  z.ZodTypeDef,
  unknown
> = z.object({
  label: z.string().optional(),
  value: z.union([
    z.string(),
    z.number().int(),
    z.number(),
    z.boolean(),
    z.array(z.union([z.string(), z.number().int(), z.number()])),
  ]).optional(),
});

/** @internal */
export type SimpleFormFieldOption$Outbound = {
  label?: string | undefined;
  value?:
    | string
    | number
    | number
    | boolean
    | Array<string | number | number>
    | undefined;
};

/** @internal */
export const SimpleFormFieldOption$outboundSchema: z.ZodType<
  SimpleFormFieldOption$Outbound,
  z.ZodTypeDef,
  SimpleFormFieldOption
> = z.object({
  label: z.string().optional(),
  value: z.union([
    z.string(),
    z.number().int(),
    z.number(),
    z.boolean(),
    z.array(z.union([z.string(), z.number().int(), z.number()])),
  ]).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace SimpleFormFieldOption$ {
  /** @deprecated use `SimpleFormFieldOption$inboundSchema` instead. */
  export const inboundSchema = SimpleFormFieldOption$inboundSchema;
  /** @deprecated use `SimpleFormFieldOption$outboundSchema` instead. */
  export const outboundSchema = SimpleFormFieldOption$outboundSchema;
  /** @deprecated use `SimpleFormFieldOption$Outbound` instead. */
  export type Outbound = SimpleFormFieldOption$Outbound;
}

export function simpleFormFieldOptionToJSON(
  simpleFormFieldOption: SimpleFormFieldOption,
): string {
  return JSON.stringify(
    SimpleFormFieldOption$outboundSchema.parse(simpleFormFieldOption),
  );
}

export function simpleFormFieldOptionFromJSON(
  jsonString: string,
): SafeParseResult<SimpleFormFieldOption, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => SimpleFormFieldOption$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'SimpleFormFieldOption' from JSON`,
  );
}

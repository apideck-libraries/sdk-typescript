/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

/**
 * Cursors to navigate to previous or next pages through the API
 */
export type Cursors = {
  /**
   * Cursor to navigate to the previous page of results through the API
   */
  previous?: string | null | undefined;
  /**
   * Cursor to navigate to the current page of results through the API
   */
  current?: string | null | undefined;
  /**
   * Cursor to navigate to the next page of results through the API
   */
  next?: string | null | undefined;
};

/**
 * Response metadata
 */
export type Meta = {
  /**
   * Number of items returned in the data property of the response
   */
  itemsOnPage?: number | undefined;
  /**
   * Cursors to navigate to previous or next pages through the API
   */
  cursors?: Cursors | undefined;
};

/** @internal */
export const Cursors$inboundSchema: z.ZodType<Cursors, z.ZodTypeDef, unknown> =
  z.object({
    previous: z.nullable(z.string()).optional(),
    current: z.nullable(z.string()).optional(),
    next: z.nullable(z.string()).optional(),
  });

/** @internal */
export type Cursors$Outbound = {
  previous?: string | null | undefined;
  current?: string | null | undefined;
  next?: string | null | undefined;
};

/** @internal */
export const Cursors$outboundSchema: z.ZodType<
  Cursors$Outbound,
  z.ZodTypeDef,
  Cursors
> = z.object({
  previous: z.nullable(z.string()).optional(),
  current: z.nullable(z.string()).optional(),
  next: z.nullable(z.string()).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Cursors$ {
  /** @deprecated use `Cursors$inboundSchema` instead. */
  export const inboundSchema = Cursors$inboundSchema;
  /** @deprecated use `Cursors$outboundSchema` instead. */
  export const outboundSchema = Cursors$outboundSchema;
  /** @deprecated use `Cursors$Outbound` instead. */
  export type Outbound = Cursors$Outbound;
}

export function cursorsToJSON(cursors: Cursors): string {
  return JSON.stringify(Cursors$outboundSchema.parse(cursors));
}

export function cursorsFromJSON(
  jsonString: string,
): SafeParseResult<Cursors, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Cursors$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Cursors' from JSON`,
  );
}

/** @internal */
export const Meta$inboundSchema: z.ZodType<Meta, z.ZodTypeDef, unknown> = z
  .object({
    items_on_page: z.number().int().optional(),
    cursors: z.lazy(() => Cursors$inboundSchema).optional(),
  }).transform((v) => {
    return remap$(v, {
      "items_on_page": "itemsOnPage",
    });
  });

/** @internal */
export type Meta$Outbound = {
  items_on_page?: number | undefined;
  cursors?: Cursors$Outbound | undefined;
};

/** @internal */
export const Meta$outboundSchema: z.ZodType<Meta$Outbound, z.ZodTypeDef, Meta> =
  z.object({
    itemsOnPage: z.number().int().optional(),
    cursors: z.lazy(() => Cursors$outboundSchema).optional(),
  }).transform((v) => {
    return remap$(v, {
      itemsOnPage: "items_on_page",
    });
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Meta$ {
  /** @deprecated use `Meta$inboundSchema` instead. */
  export const inboundSchema = Meta$inboundSchema;
  /** @deprecated use `Meta$outboundSchema` instead. */
  export const outboundSchema = Meta$outboundSchema;
  /** @deprecated use `Meta$Outbound` instead. */
  export type Outbound = Meta$Outbound;
}

export function metaToJSON(meta: Meta): string {
  return JSON.stringify(Meta$outboundSchema.parse(meta));
}

export function metaFromJSON(
  jsonString: string,
): SafeParseResult<Meta, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Meta$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Meta' from JSON`,
  );
}

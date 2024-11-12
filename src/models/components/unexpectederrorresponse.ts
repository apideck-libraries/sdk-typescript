/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";

export type Two = {};

/**
 * Contains parameter or domain specific information related to the error and why it occurred.
 */
export type Detail = Two | string;

/**
 * Unexpected error
 */
export type UnexpectedErrorResponse = {
  /**
   * HTTP status code
   */
  statusCode?: number | undefined;
  /**
   * Contains an explanation of the status_code as defined in HTTP/1.1 standard (RFC 7231)
   */
  error?: string | undefined;
  /**
   * The type of error returned
   */
  typeName?: string | undefined;
  /**
   * A human-readable message providing more details about the error.
   */
  message?: string | undefined;
  /**
   * Contains parameter or domain specific information related to the error and why it occurred.
   */
  detail?: Two | string | undefined;
  /**
   * Link to documentation of error type
   */
  ref?: string | undefined;
};

/** @internal */
export const Two$inboundSchema: z.ZodType<Two, z.ZodTypeDef, unknown> = z
  .object({});

/** @internal */
export type Two$Outbound = {};

/** @internal */
export const Two$outboundSchema: z.ZodType<Two$Outbound, z.ZodTypeDef, Two> = z
  .object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Two$ {
  /** @deprecated use `Two$inboundSchema` instead. */
  export const inboundSchema = Two$inboundSchema;
  /** @deprecated use `Two$outboundSchema` instead. */
  export const outboundSchema = Two$outboundSchema;
  /** @deprecated use `Two$Outbound` instead. */
  export type Outbound = Two$Outbound;
}

/** @internal */
export const Detail$inboundSchema: z.ZodType<Detail, z.ZodTypeDef, unknown> = z
  .union([z.lazy(() => Two$inboundSchema), z.string()]);

/** @internal */
export type Detail$Outbound = Two$Outbound | string;

/** @internal */
export const Detail$outboundSchema: z.ZodType<
  Detail$Outbound,
  z.ZodTypeDef,
  Detail
> = z.union([z.lazy(() => Two$outboundSchema), z.string()]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Detail$ {
  /** @deprecated use `Detail$inboundSchema` instead. */
  export const inboundSchema = Detail$inboundSchema;
  /** @deprecated use `Detail$outboundSchema` instead. */
  export const outboundSchema = Detail$outboundSchema;
  /** @deprecated use `Detail$Outbound` instead. */
  export type Outbound = Detail$Outbound;
}

/** @internal */
export const UnexpectedErrorResponse$inboundSchema: z.ZodType<
  UnexpectedErrorResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  status_code: z.number().optional(),
  error: z.string().optional(),
  type_name: z.string().optional(),
  message: z.string().optional(),
  detail: z.union([z.lazy(() => Two$inboundSchema), z.string()]).optional(),
  ref: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    "status_code": "statusCode",
    "type_name": "typeName",
  });
});

/** @internal */
export type UnexpectedErrorResponse$Outbound = {
  status_code?: number | undefined;
  error?: string | undefined;
  type_name?: string | undefined;
  message?: string | undefined;
  detail?: Two$Outbound | string | undefined;
  ref?: string | undefined;
};

/** @internal */
export const UnexpectedErrorResponse$outboundSchema: z.ZodType<
  UnexpectedErrorResponse$Outbound,
  z.ZodTypeDef,
  UnexpectedErrorResponse
> = z.object({
  statusCode: z.number().optional(),
  error: z.string().optional(),
  typeName: z.string().optional(),
  message: z.string().optional(),
  detail: z.union([z.lazy(() => Two$outboundSchema), z.string()]).optional(),
  ref: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    statusCode: "status_code",
    typeName: "type_name",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UnexpectedErrorResponse$ {
  /** @deprecated use `UnexpectedErrorResponse$inboundSchema` instead. */
  export const inboundSchema = UnexpectedErrorResponse$inboundSchema;
  /** @deprecated use `UnexpectedErrorResponse$outboundSchema` instead. */
  export const outboundSchema = UnexpectedErrorResponse$outboundSchema;
  /** @deprecated use `UnexpectedErrorResponse$Outbound` instead. */
  export type Outbound = UnexpectedErrorResponse$Outbound;
}

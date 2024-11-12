/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";

export type CreateCallbackStateResponseData = {
  /**
   * Callback state
   */
  state?: string | undefined;
};

/**
 * Callback state created
 */
export type CreateCallbackStateResponse = {
  /**
   * HTTP Response Status Code
   */
  statusCode: number;
  /**
   * HTTP Response Status
   */
  status: string;
  data: CreateCallbackStateResponseData;
};

/** @internal */
export const CreateCallbackStateResponseData$inboundSchema: z.ZodType<
  CreateCallbackStateResponseData,
  z.ZodTypeDef,
  unknown
> = z.object({
  state: z.string().optional(),
});

/** @internal */
export type CreateCallbackStateResponseData$Outbound = {
  state?: string | undefined;
};

/** @internal */
export const CreateCallbackStateResponseData$outboundSchema: z.ZodType<
  CreateCallbackStateResponseData$Outbound,
  z.ZodTypeDef,
  CreateCallbackStateResponseData
> = z.object({
  state: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateCallbackStateResponseData$ {
  /** @deprecated use `CreateCallbackStateResponseData$inboundSchema` instead. */
  export const inboundSchema = CreateCallbackStateResponseData$inboundSchema;
  /** @deprecated use `CreateCallbackStateResponseData$outboundSchema` instead. */
  export const outboundSchema = CreateCallbackStateResponseData$outboundSchema;
  /** @deprecated use `CreateCallbackStateResponseData$Outbound` instead. */
  export type Outbound = CreateCallbackStateResponseData$Outbound;
}

/** @internal */
export const CreateCallbackStateResponse$inboundSchema: z.ZodType<
  CreateCallbackStateResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  status_code: z.number().int(),
  status: z.string(),
  data: z.lazy(() => CreateCallbackStateResponseData$inboundSchema),
}).transform((v) => {
  return remap$(v, {
    "status_code": "statusCode",
  });
});

/** @internal */
export type CreateCallbackStateResponse$Outbound = {
  status_code: number;
  status: string;
  data: CreateCallbackStateResponseData$Outbound;
};

/** @internal */
export const CreateCallbackStateResponse$outboundSchema: z.ZodType<
  CreateCallbackStateResponse$Outbound,
  z.ZodTypeDef,
  CreateCallbackStateResponse
> = z.object({
  statusCode: z.number().int(),
  status: z.string(),
  data: z.lazy(() => CreateCallbackStateResponseData$outboundSchema),
}).transform((v) => {
  return remap$(v, {
    statusCode: "status_code",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateCallbackStateResponse$ {
  /** @deprecated use `CreateCallbackStateResponse$inboundSchema` instead. */
  export const inboundSchema = CreateCallbackStateResponse$inboundSchema;
  /** @deprecated use `CreateCallbackStateResponse$outboundSchema` instead. */
  export const outboundSchema = CreateCallbackStateResponse$outboundSchema;
  /** @deprecated use `CreateCallbackStateResponse$Outbound` instead. */
  export type Outbound = CreateCallbackStateResponse$Outbound;
}

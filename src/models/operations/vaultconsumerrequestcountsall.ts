/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";

export type VaultConsumerRequestCountsAllGlobals = {
  /**
   * The ID of your Unify application
   */
  appId?: string | undefined;
};

export type VaultConsumerRequestCountsAllRequest = {
  /**
   * ID of the consumer to return
   */
  consumerId: string;
  /**
   * Scopes results to requests that happened after datetime
   */
  startDatetime: string;
  /**
   * Scopes results to requests that happened before datetime
   */
  endDatetime: string;
};

export type VaultConsumerRequestCountsAllResponse =
  | components.ConsumerRequestCountsInDateRangeResponse
  | components.UnexpectedErrorResponse;

/** @internal */
export const VaultConsumerRequestCountsAllGlobals$inboundSchema: z.ZodType<
  VaultConsumerRequestCountsAllGlobals,
  z.ZodTypeDef,
  unknown
> = z.object({
  appId: z.string().optional(),
});

/** @internal */
export type VaultConsumerRequestCountsAllGlobals$Outbound = {
  appId?: string | undefined;
};

/** @internal */
export const VaultConsumerRequestCountsAllGlobals$outboundSchema: z.ZodType<
  VaultConsumerRequestCountsAllGlobals$Outbound,
  z.ZodTypeDef,
  VaultConsumerRequestCountsAllGlobals
> = z.object({
  appId: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace VaultConsumerRequestCountsAllGlobals$ {
  /** @deprecated use `VaultConsumerRequestCountsAllGlobals$inboundSchema` instead. */
  export const inboundSchema =
    VaultConsumerRequestCountsAllGlobals$inboundSchema;
  /** @deprecated use `VaultConsumerRequestCountsAllGlobals$outboundSchema` instead. */
  export const outboundSchema =
    VaultConsumerRequestCountsAllGlobals$outboundSchema;
  /** @deprecated use `VaultConsumerRequestCountsAllGlobals$Outbound` instead. */
  export type Outbound = VaultConsumerRequestCountsAllGlobals$Outbound;
}

/** @internal */
export const VaultConsumerRequestCountsAllRequest$inboundSchema: z.ZodType<
  VaultConsumerRequestCountsAllRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  consumer_id: z.string(),
  start_datetime: z.string(),
  end_datetime: z.string(),
}).transform((v) => {
  return remap$(v, {
    "consumer_id": "consumerId",
    "start_datetime": "startDatetime",
    "end_datetime": "endDatetime",
  });
});

/** @internal */
export type VaultConsumerRequestCountsAllRequest$Outbound = {
  consumer_id: string;
  start_datetime: string;
  end_datetime: string;
};

/** @internal */
export const VaultConsumerRequestCountsAllRequest$outboundSchema: z.ZodType<
  VaultConsumerRequestCountsAllRequest$Outbound,
  z.ZodTypeDef,
  VaultConsumerRequestCountsAllRequest
> = z.object({
  consumerId: z.string(),
  startDatetime: z.string(),
  endDatetime: z.string(),
}).transform((v) => {
  return remap$(v, {
    consumerId: "consumer_id",
    startDatetime: "start_datetime",
    endDatetime: "end_datetime",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace VaultConsumerRequestCountsAllRequest$ {
  /** @deprecated use `VaultConsumerRequestCountsAllRequest$inboundSchema` instead. */
  export const inboundSchema =
    VaultConsumerRequestCountsAllRequest$inboundSchema;
  /** @deprecated use `VaultConsumerRequestCountsAllRequest$outboundSchema` instead. */
  export const outboundSchema =
    VaultConsumerRequestCountsAllRequest$outboundSchema;
  /** @deprecated use `VaultConsumerRequestCountsAllRequest$Outbound` instead. */
  export type Outbound = VaultConsumerRequestCountsAllRequest$Outbound;
}

/** @internal */
export const VaultConsumerRequestCountsAllResponse$inboundSchema: z.ZodType<
  VaultConsumerRequestCountsAllResponse,
  z.ZodTypeDef,
  unknown
> = z.union([
  components.ConsumerRequestCountsInDateRangeResponse$inboundSchema,
  components.UnexpectedErrorResponse$inboundSchema,
]);

/** @internal */
export type VaultConsumerRequestCountsAllResponse$Outbound =
  | components.ConsumerRequestCountsInDateRangeResponse$Outbound
  | components.UnexpectedErrorResponse$Outbound;

/** @internal */
export const VaultConsumerRequestCountsAllResponse$outboundSchema: z.ZodType<
  VaultConsumerRequestCountsAllResponse$Outbound,
  z.ZodTypeDef,
  VaultConsumerRequestCountsAllResponse
> = z.union([
  components.ConsumerRequestCountsInDateRangeResponse$outboundSchema,
  components.UnexpectedErrorResponse$outboundSchema,
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace VaultConsumerRequestCountsAllResponse$ {
  /** @deprecated use `VaultConsumerRequestCountsAllResponse$inboundSchema` instead. */
  export const inboundSchema =
    VaultConsumerRequestCountsAllResponse$inboundSchema;
  /** @deprecated use `VaultConsumerRequestCountsAllResponse$outboundSchema` instead. */
  export const outboundSchema =
    VaultConsumerRequestCountsAllResponse$outboundSchema;
  /** @deprecated use `VaultConsumerRequestCountsAllResponse$Outbound` instead. */
  export type Outbound = VaultConsumerRequestCountsAllResponse$Outbound;
}

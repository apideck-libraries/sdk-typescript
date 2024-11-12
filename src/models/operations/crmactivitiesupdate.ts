/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";

export type CrmActivitiesUpdateGlobals = {
  /**
   * ID of the consumer which you want to get or push data from
   */
  customerId?: string | undefined;
  /**
   * The ID of your Unify application
   */
  appId?: string | undefined;
};

export type CrmActivitiesUpdateRequest = {
  /**
   * ID of the record you are acting upon.
   */
  id: string;
  /**
   * Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API.
   */
  serviceId?: string | undefined;
  /**
   * Include raw response. Mostly used for debugging purposes
   */
  raw?: boolean | undefined;
  activity: components.ActivityInput;
};

export type CrmActivitiesUpdateResponse =
  | components.UpdateActivityResponse
  | components.UnexpectedErrorResponse;

/** @internal */
export const CrmActivitiesUpdateGlobals$inboundSchema: z.ZodType<
  CrmActivitiesUpdateGlobals,
  z.ZodTypeDef,
  unknown
> = z.object({
  customerId: z.string().optional(),
  appId: z.string().optional(),
});

/** @internal */
export type CrmActivitiesUpdateGlobals$Outbound = {
  customerId?: string | undefined;
  appId?: string | undefined;
};

/** @internal */
export const CrmActivitiesUpdateGlobals$outboundSchema: z.ZodType<
  CrmActivitiesUpdateGlobals$Outbound,
  z.ZodTypeDef,
  CrmActivitiesUpdateGlobals
> = z.object({
  customerId: z.string().optional(),
  appId: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CrmActivitiesUpdateGlobals$ {
  /** @deprecated use `CrmActivitiesUpdateGlobals$inboundSchema` instead. */
  export const inboundSchema = CrmActivitiesUpdateGlobals$inboundSchema;
  /** @deprecated use `CrmActivitiesUpdateGlobals$outboundSchema` instead. */
  export const outboundSchema = CrmActivitiesUpdateGlobals$outboundSchema;
  /** @deprecated use `CrmActivitiesUpdateGlobals$Outbound` instead. */
  export type Outbound = CrmActivitiesUpdateGlobals$Outbound;
}

/** @internal */
export const CrmActivitiesUpdateRequest$inboundSchema: z.ZodType<
  CrmActivitiesUpdateRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
  serviceId: z.string().optional(),
  raw: z.boolean().default(false),
  Activity: components.ActivityInput$inboundSchema,
}).transform((v) => {
  return remap$(v, {
    "Activity": "activity",
  });
});

/** @internal */
export type CrmActivitiesUpdateRequest$Outbound = {
  id: string;
  serviceId?: string | undefined;
  raw: boolean;
  Activity: components.ActivityInput$Outbound;
};

/** @internal */
export const CrmActivitiesUpdateRequest$outboundSchema: z.ZodType<
  CrmActivitiesUpdateRequest$Outbound,
  z.ZodTypeDef,
  CrmActivitiesUpdateRequest
> = z.object({
  id: z.string(),
  serviceId: z.string().optional(),
  raw: z.boolean().default(false),
  activity: components.ActivityInput$outboundSchema,
}).transform((v) => {
  return remap$(v, {
    activity: "Activity",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CrmActivitiesUpdateRequest$ {
  /** @deprecated use `CrmActivitiesUpdateRequest$inboundSchema` instead. */
  export const inboundSchema = CrmActivitiesUpdateRequest$inboundSchema;
  /** @deprecated use `CrmActivitiesUpdateRequest$outboundSchema` instead. */
  export const outboundSchema = CrmActivitiesUpdateRequest$outboundSchema;
  /** @deprecated use `CrmActivitiesUpdateRequest$Outbound` instead. */
  export type Outbound = CrmActivitiesUpdateRequest$Outbound;
}

/** @internal */
export const CrmActivitiesUpdateResponse$inboundSchema: z.ZodType<
  CrmActivitiesUpdateResponse,
  z.ZodTypeDef,
  unknown
> = z.union([
  components.UpdateActivityResponse$inboundSchema,
  components.UnexpectedErrorResponse$inboundSchema,
]);

/** @internal */
export type CrmActivitiesUpdateResponse$Outbound =
  | components.UpdateActivityResponse$Outbound
  | components.UnexpectedErrorResponse$Outbound;

/** @internal */
export const CrmActivitiesUpdateResponse$outboundSchema: z.ZodType<
  CrmActivitiesUpdateResponse$Outbound,
  z.ZodTypeDef,
  CrmActivitiesUpdateResponse
> = z.union([
  components.UpdateActivityResponse$outboundSchema,
  components.UnexpectedErrorResponse$outboundSchema,
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CrmActivitiesUpdateResponse$ {
  /** @deprecated use `CrmActivitiesUpdateResponse$inboundSchema` instead. */
  export const inboundSchema = CrmActivitiesUpdateResponse$inboundSchema;
  /** @deprecated use `CrmActivitiesUpdateResponse$outboundSchema` instead. */
  export const outboundSchema = CrmActivitiesUpdateResponse$outboundSchema;
  /** @deprecated use `CrmActivitiesUpdateResponse$Outbound` instead. */
  export type Outbound = CrmActivitiesUpdateResponse$Outbound;
}

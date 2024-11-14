/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";

export type HrisTimeOffRequestsUpdateGlobals = {
  /**
   * ID of the consumer which you want to get or push data from
   */
  customerId?: string | undefined;
  /**
   * The ID of your Unify application
   */
  appId?: string | undefined;
};

export type HrisTimeOffRequestsUpdateRequest = {
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
  /**
   * ID of the employee you are acting upon.
   */
  employeeId: string;
  timeOffRequest: components.TimeOffRequestInput;
};

export type HrisTimeOffRequestsUpdateResponse = {
  httpMeta: components.HTTPMetadata;
  /**
   * TimeOffRequests
   */
  updateTimeOffRequestResponse?:
    | components.UpdateTimeOffRequestResponse
    | undefined;
  /**
   * Unexpected error
   */
  unexpectedErrorResponse?: components.UnexpectedErrorResponse | undefined;
};

/** @internal */
export const HrisTimeOffRequestsUpdateGlobals$inboundSchema: z.ZodType<
  HrisTimeOffRequestsUpdateGlobals,
  z.ZodTypeDef,
  unknown
> = z.object({
  customerId: z.string().optional(),
  appId: z.string().optional(),
});

/** @internal */
export type HrisTimeOffRequestsUpdateGlobals$Outbound = {
  customerId?: string | undefined;
  appId?: string | undefined;
};

/** @internal */
export const HrisTimeOffRequestsUpdateGlobals$outboundSchema: z.ZodType<
  HrisTimeOffRequestsUpdateGlobals$Outbound,
  z.ZodTypeDef,
  HrisTimeOffRequestsUpdateGlobals
> = z.object({
  customerId: z.string().optional(),
  appId: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace HrisTimeOffRequestsUpdateGlobals$ {
  /** @deprecated use `HrisTimeOffRequestsUpdateGlobals$inboundSchema` instead. */
  export const inboundSchema = HrisTimeOffRequestsUpdateGlobals$inboundSchema;
  /** @deprecated use `HrisTimeOffRequestsUpdateGlobals$outboundSchema` instead. */
  export const outboundSchema = HrisTimeOffRequestsUpdateGlobals$outboundSchema;
  /** @deprecated use `HrisTimeOffRequestsUpdateGlobals$Outbound` instead. */
  export type Outbound = HrisTimeOffRequestsUpdateGlobals$Outbound;
}

/** @internal */
export const HrisTimeOffRequestsUpdateRequest$inboundSchema: z.ZodType<
  HrisTimeOffRequestsUpdateRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
  serviceId: z.string().optional(),
  raw: z.boolean().default(false),
  employee_id: z.string(),
  TimeOffRequest: components.TimeOffRequestInput$inboundSchema,
}).transform((v) => {
  return remap$(v, {
    "employee_id": "employeeId",
    "TimeOffRequest": "timeOffRequest",
  });
});

/** @internal */
export type HrisTimeOffRequestsUpdateRequest$Outbound = {
  id: string;
  serviceId?: string | undefined;
  raw: boolean;
  employee_id: string;
  TimeOffRequest: components.TimeOffRequestInput$Outbound;
};

/** @internal */
export const HrisTimeOffRequestsUpdateRequest$outboundSchema: z.ZodType<
  HrisTimeOffRequestsUpdateRequest$Outbound,
  z.ZodTypeDef,
  HrisTimeOffRequestsUpdateRequest
> = z.object({
  id: z.string(),
  serviceId: z.string().optional(),
  raw: z.boolean().default(false),
  employeeId: z.string(),
  timeOffRequest: components.TimeOffRequestInput$outboundSchema,
}).transform((v) => {
  return remap$(v, {
    employeeId: "employee_id",
    timeOffRequest: "TimeOffRequest",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace HrisTimeOffRequestsUpdateRequest$ {
  /** @deprecated use `HrisTimeOffRequestsUpdateRequest$inboundSchema` instead. */
  export const inboundSchema = HrisTimeOffRequestsUpdateRequest$inboundSchema;
  /** @deprecated use `HrisTimeOffRequestsUpdateRequest$outboundSchema` instead. */
  export const outboundSchema = HrisTimeOffRequestsUpdateRequest$outboundSchema;
  /** @deprecated use `HrisTimeOffRequestsUpdateRequest$Outbound` instead. */
  export type Outbound = HrisTimeOffRequestsUpdateRequest$Outbound;
}

/** @internal */
export const HrisTimeOffRequestsUpdateResponse$inboundSchema: z.ZodType<
  HrisTimeOffRequestsUpdateResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  HttpMeta: components.HTTPMetadata$inboundSchema,
  UpdateTimeOffRequestResponse: components
    .UpdateTimeOffRequestResponse$inboundSchema.optional(),
  UnexpectedErrorResponse: components.UnexpectedErrorResponse$inboundSchema
    .optional(),
}).transform((v) => {
  return remap$(v, {
    "HttpMeta": "httpMeta",
    "UpdateTimeOffRequestResponse": "updateTimeOffRequestResponse",
    "UnexpectedErrorResponse": "unexpectedErrorResponse",
  });
});

/** @internal */
export type HrisTimeOffRequestsUpdateResponse$Outbound = {
  HttpMeta: components.HTTPMetadata$Outbound;
  UpdateTimeOffRequestResponse?:
    | components.UpdateTimeOffRequestResponse$Outbound
    | undefined;
  UnexpectedErrorResponse?:
    | components.UnexpectedErrorResponse$Outbound
    | undefined;
};

/** @internal */
export const HrisTimeOffRequestsUpdateResponse$outboundSchema: z.ZodType<
  HrisTimeOffRequestsUpdateResponse$Outbound,
  z.ZodTypeDef,
  HrisTimeOffRequestsUpdateResponse
> = z.object({
  httpMeta: components.HTTPMetadata$outboundSchema,
  updateTimeOffRequestResponse: components
    .UpdateTimeOffRequestResponse$outboundSchema.optional(),
  unexpectedErrorResponse: components.UnexpectedErrorResponse$outboundSchema
    .optional(),
}).transform((v) => {
  return remap$(v, {
    httpMeta: "HttpMeta",
    updateTimeOffRequestResponse: "UpdateTimeOffRequestResponse",
    unexpectedErrorResponse: "UnexpectedErrorResponse",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace HrisTimeOffRequestsUpdateResponse$ {
  /** @deprecated use `HrisTimeOffRequestsUpdateResponse$inboundSchema` instead. */
  export const inboundSchema = HrisTimeOffRequestsUpdateResponse$inboundSchema;
  /** @deprecated use `HrisTimeOffRequestsUpdateResponse$outboundSchema` instead. */
  export const outboundSchema =
    HrisTimeOffRequestsUpdateResponse$outboundSchema;
  /** @deprecated use `HrisTimeOffRequestsUpdateResponse$Outbound` instead. */
  export type Outbound = HrisTimeOffRequestsUpdateResponse$Outbound;
}

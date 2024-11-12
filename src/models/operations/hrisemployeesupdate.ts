/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";

export type HrisEmployeesUpdateGlobals = {
  /**
   * ID of the consumer which you want to get or push data from
   */
  customerId?: string | undefined;
  /**
   * The ID of your Unify application
   */
  appId?: string | undefined;
};

export type HrisEmployeesUpdateRequest = {
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
  employee: components.EmployeeInput;
};

export type HrisEmployeesUpdateResponse =
  | components.UpdateEmployeeResponse
  | components.UnexpectedErrorResponse;

/** @internal */
export const HrisEmployeesUpdateGlobals$inboundSchema: z.ZodType<
  HrisEmployeesUpdateGlobals,
  z.ZodTypeDef,
  unknown
> = z.object({
  customerId: z.string().optional(),
  appId: z.string().optional(),
});

/** @internal */
export type HrisEmployeesUpdateGlobals$Outbound = {
  customerId?: string | undefined;
  appId?: string | undefined;
};

/** @internal */
export const HrisEmployeesUpdateGlobals$outboundSchema: z.ZodType<
  HrisEmployeesUpdateGlobals$Outbound,
  z.ZodTypeDef,
  HrisEmployeesUpdateGlobals
> = z.object({
  customerId: z.string().optional(),
  appId: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace HrisEmployeesUpdateGlobals$ {
  /** @deprecated use `HrisEmployeesUpdateGlobals$inboundSchema` instead. */
  export const inboundSchema = HrisEmployeesUpdateGlobals$inboundSchema;
  /** @deprecated use `HrisEmployeesUpdateGlobals$outboundSchema` instead. */
  export const outboundSchema = HrisEmployeesUpdateGlobals$outboundSchema;
  /** @deprecated use `HrisEmployeesUpdateGlobals$Outbound` instead. */
  export type Outbound = HrisEmployeesUpdateGlobals$Outbound;
}

/** @internal */
export const HrisEmployeesUpdateRequest$inboundSchema: z.ZodType<
  HrisEmployeesUpdateRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
  serviceId: z.string().optional(),
  raw: z.boolean().default(false),
  Employee: components.EmployeeInput$inboundSchema,
}).transform((v) => {
  return remap$(v, {
    "Employee": "employee",
  });
});

/** @internal */
export type HrisEmployeesUpdateRequest$Outbound = {
  id: string;
  serviceId?: string | undefined;
  raw: boolean;
  Employee: components.EmployeeInput$Outbound;
};

/** @internal */
export const HrisEmployeesUpdateRequest$outboundSchema: z.ZodType<
  HrisEmployeesUpdateRequest$Outbound,
  z.ZodTypeDef,
  HrisEmployeesUpdateRequest
> = z.object({
  id: z.string(),
  serviceId: z.string().optional(),
  raw: z.boolean().default(false),
  employee: components.EmployeeInput$outboundSchema,
}).transform((v) => {
  return remap$(v, {
    employee: "Employee",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace HrisEmployeesUpdateRequest$ {
  /** @deprecated use `HrisEmployeesUpdateRequest$inboundSchema` instead. */
  export const inboundSchema = HrisEmployeesUpdateRequest$inboundSchema;
  /** @deprecated use `HrisEmployeesUpdateRequest$outboundSchema` instead. */
  export const outboundSchema = HrisEmployeesUpdateRequest$outboundSchema;
  /** @deprecated use `HrisEmployeesUpdateRequest$Outbound` instead. */
  export type Outbound = HrisEmployeesUpdateRequest$Outbound;
}

/** @internal */
export const HrisEmployeesUpdateResponse$inboundSchema: z.ZodType<
  HrisEmployeesUpdateResponse,
  z.ZodTypeDef,
  unknown
> = z.union([
  components.UpdateEmployeeResponse$inboundSchema,
  components.UnexpectedErrorResponse$inboundSchema,
]);

/** @internal */
export type HrisEmployeesUpdateResponse$Outbound =
  | components.UpdateEmployeeResponse$Outbound
  | components.UnexpectedErrorResponse$Outbound;

/** @internal */
export const HrisEmployeesUpdateResponse$outboundSchema: z.ZodType<
  HrisEmployeesUpdateResponse$Outbound,
  z.ZodTypeDef,
  HrisEmployeesUpdateResponse
> = z.union([
  components.UpdateEmployeeResponse$outboundSchema,
  components.UnexpectedErrorResponse$outboundSchema,
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace HrisEmployeesUpdateResponse$ {
  /** @deprecated use `HrisEmployeesUpdateResponse$inboundSchema` instead. */
  export const inboundSchema = HrisEmployeesUpdateResponse$inboundSchema;
  /** @deprecated use `HrisEmployeesUpdateResponse$outboundSchema` instead. */
  export const outboundSchema = HrisEmployeesUpdateResponse$outboundSchema;
  /** @deprecated use `HrisEmployeesUpdateResponse$Outbound` instead. */
  export type Outbound = HrisEmployeesUpdateResponse$Outbound;
}

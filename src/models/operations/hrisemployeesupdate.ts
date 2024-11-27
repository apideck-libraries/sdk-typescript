/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type HrisEmployeesUpdateGlobals = {
  /**
   * ID of the consumer which you want to get or push data from
   */
  consumerId?: string | undefined;
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

export type HrisEmployeesUpdateResponse = {
  httpMeta: components.HTTPMetadata;
  /**
   * Employees
   */
  updateEmployeeResponse?: components.UpdateEmployeeResponse | undefined;
  /**
   * Unexpected error
   */
  unexpectedErrorResponse?: components.UnexpectedErrorResponse | undefined;
};

/** @internal */
export const HrisEmployeesUpdateGlobals$inboundSchema: z.ZodType<
  HrisEmployeesUpdateGlobals,
  z.ZodTypeDef,
  unknown
> = z.object({
  consumerId: z.string().optional(),
  appId: z.string().optional(),
});

/** @internal */
export type HrisEmployeesUpdateGlobals$Outbound = {
  consumerId?: string | undefined;
  appId?: string | undefined;
};

/** @internal */
export const HrisEmployeesUpdateGlobals$outboundSchema: z.ZodType<
  HrisEmployeesUpdateGlobals$Outbound,
  z.ZodTypeDef,
  HrisEmployeesUpdateGlobals
> = z.object({
  consumerId: z.string().optional(),
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

export function hrisEmployeesUpdateGlobalsToJSON(
  hrisEmployeesUpdateGlobals: HrisEmployeesUpdateGlobals,
): string {
  return JSON.stringify(
    HrisEmployeesUpdateGlobals$outboundSchema.parse(hrisEmployeesUpdateGlobals),
  );
}

export function hrisEmployeesUpdateGlobalsFromJSON(
  jsonString: string,
): SafeParseResult<HrisEmployeesUpdateGlobals, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => HrisEmployeesUpdateGlobals$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'HrisEmployeesUpdateGlobals' from JSON`,
  );
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

export function hrisEmployeesUpdateRequestToJSON(
  hrisEmployeesUpdateRequest: HrisEmployeesUpdateRequest,
): string {
  return JSON.stringify(
    HrisEmployeesUpdateRequest$outboundSchema.parse(hrisEmployeesUpdateRequest),
  );
}

export function hrisEmployeesUpdateRequestFromJSON(
  jsonString: string,
): SafeParseResult<HrisEmployeesUpdateRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => HrisEmployeesUpdateRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'HrisEmployeesUpdateRequest' from JSON`,
  );
}

/** @internal */
export const HrisEmployeesUpdateResponse$inboundSchema: z.ZodType<
  HrisEmployeesUpdateResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  HttpMeta: components.HTTPMetadata$inboundSchema,
  UpdateEmployeeResponse: components.UpdateEmployeeResponse$inboundSchema
    .optional(),
  UnexpectedErrorResponse: components.UnexpectedErrorResponse$inboundSchema
    .optional(),
}).transform((v) => {
  return remap$(v, {
    "HttpMeta": "httpMeta",
    "UpdateEmployeeResponse": "updateEmployeeResponse",
    "UnexpectedErrorResponse": "unexpectedErrorResponse",
  });
});

/** @internal */
export type HrisEmployeesUpdateResponse$Outbound = {
  HttpMeta: components.HTTPMetadata$Outbound;
  UpdateEmployeeResponse?:
    | components.UpdateEmployeeResponse$Outbound
    | undefined;
  UnexpectedErrorResponse?:
    | components.UnexpectedErrorResponse$Outbound
    | undefined;
};

/** @internal */
export const HrisEmployeesUpdateResponse$outboundSchema: z.ZodType<
  HrisEmployeesUpdateResponse$Outbound,
  z.ZodTypeDef,
  HrisEmployeesUpdateResponse
> = z.object({
  httpMeta: components.HTTPMetadata$outboundSchema,
  updateEmployeeResponse: components.UpdateEmployeeResponse$outboundSchema
    .optional(),
  unexpectedErrorResponse: components.UnexpectedErrorResponse$outboundSchema
    .optional(),
}).transform((v) => {
  return remap$(v, {
    httpMeta: "HttpMeta",
    updateEmployeeResponse: "UpdateEmployeeResponse",
    unexpectedErrorResponse: "UnexpectedErrorResponse",
  });
});

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

export function hrisEmployeesUpdateResponseToJSON(
  hrisEmployeesUpdateResponse: HrisEmployeesUpdateResponse,
): string {
  return JSON.stringify(
    HrisEmployeesUpdateResponse$outboundSchema.parse(
      hrisEmployeesUpdateResponse,
    ),
  );
}

export function hrisEmployeesUpdateResponseFromJSON(
  jsonString: string,
): SafeParseResult<HrisEmployeesUpdateResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => HrisEmployeesUpdateResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'HrisEmployeesUpdateResponse' from JSON`,
  );
}

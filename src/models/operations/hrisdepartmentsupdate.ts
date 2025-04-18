/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type HrisDepartmentsUpdateGlobals = {
  /**
   * ID of the consumer which you want to get or push data from
   */
  consumerId?: string | undefined;
  /**
   * The ID of your Unify application
   */
  appId?: string | undefined;
};

export type HrisDepartmentsUpdateRequest = {
  /**
   * ID of the record you are acting upon.
   */
  id: string;
  /**
   * ID of the consumer which you want to get or push data from
   */
  consumerId?: string | undefined;
  /**
   * The ID of your Unify application
   */
  appId?: string | undefined;
  /**
   * Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API.
   */
  serviceId?: string | undefined;
  /**
   * Include raw response. Mostly used for debugging purposes
   */
  raw?: boolean | undefined;
  department: components.DepartmentInput;
};

export type HrisDepartmentsUpdateResponse = {
  httpMeta: components.HTTPMetadata;
  /**
   * Departments
   */
  updateDepartmentResponse?: components.UpdateDepartmentResponse | undefined;
  /**
   * Unexpected error
   */
  unexpectedErrorResponse?: components.UnexpectedErrorResponse | undefined;
};

/** @internal */
export const HrisDepartmentsUpdateGlobals$inboundSchema: z.ZodType<
  HrisDepartmentsUpdateGlobals,
  z.ZodTypeDef,
  unknown
> = z.object({
  consumerId: z.string().optional(),
  appId: z.string().optional(),
});

/** @internal */
export type HrisDepartmentsUpdateGlobals$Outbound = {
  consumerId?: string | undefined;
  appId?: string | undefined;
};

/** @internal */
export const HrisDepartmentsUpdateGlobals$outboundSchema: z.ZodType<
  HrisDepartmentsUpdateGlobals$Outbound,
  z.ZodTypeDef,
  HrisDepartmentsUpdateGlobals
> = z.object({
  consumerId: z.string().optional(),
  appId: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace HrisDepartmentsUpdateGlobals$ {
  /** @deprecated use `HrisDepartmentsUpdateGlobals$inboundSchema` instead. */
  export const inboundSchema = HrisDepartmentsUpdateGlobals$inboundSchema;
  /** @deprecated use `HrisDepartmentsUpdateGlobals$outboundSchema` instead. */
  export const outboundSchema = HrisDepartmentsUpdateGlobals$outboundSchema;
  /** @deprecated use `HrisDepartmentsUpdateGlobals$Outbound` instead. */
  export type Outbound = HrisDepartmentsUpdateGlobals$Outbound;
}

export function hrisDepartmentsUpdateGlobalsToJSON(
  hrisDepartmentsUpdateGlobals: HrisDepartmentsUpdateGlobals,
): string {
  return JSON.stringify(
    HrisDepartmentsUpdateGlobals$outboundSchema.parse(
      hrisDepartmentsUpdateGlobals,
    ),
  );
}

export function hrisDepartmentsUpdateGlobalsFromJSON(
  jsonString: string,
): SafeParseResult<HrisDepartmentsUpdateGlobals, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => HrisDepartmentsUpdateGlobals$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'HrisDepartmentsUpdateGlobals' from JSON`,
  );
}

/** @internal */
export const HrisDepartmentsUpdateRequest$inboundSchema: z.ZodType<
  HrisDepartmentsUpdateRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
  consumerId: z.string().optional(),
  appId: z.string().optional(),
  serviceId: z.string().optional(),
  raw: z.boolean().default(false),
  Department: components.DepartmentInput$inboundSchema,
}).transform((v) => {
  return remap$(v, {
    "Department": "department",
  });
});

/** @internal */
export type HrisDepartmentsUpdateRequest$Outbound = {
  id: string;
  consumerId?: string | undefined;
  appId?: string | undefined;
  serviceId?: string | undefined;
  raw: boolean;
  Department: components.DepartmentInput$Outbound;
};

/** @internal */
export const HrisDepartmentsUpdateRequest$outboundSchema: z.ZodType<
  HrisDepartmentsUpdateRequest$Outbound,
  z.ZodTypeDef,
  HrisDepartmentsUpdateRequest
> = z.object({
  id: z.string(),
  consumerId: z.string().optional(),
  appId: z.string().optional(),
  serviceId: z.string().optional(),
  raw: z.boolean().default(false),
  department: components.DepartmentInput$outboundSchema,
}).transform((v) => {
  return remap$(v, {
    department: "Department",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace HrisDepartmentsUpdateRequest$ {
  /** @deprecated use `HrisDepartmentsUpdateRequest$inboundSchema` instead. */
  export const inboundSchema = HrisDepartmentsUpdateRequest$inboundSchema;
  /** @deprecated use `HrisDepartmentsUpdateRequest$outboundSchema` instead. */
  export const outboundSchema = HrisDepartmentsUpdateRequest$outboundSchema;
  /** @deprecated use `HrisDepartmentsUpdateRequest$Outbound` instead. */
  export type Outbound = HrisDepartmentsUpdateRequest$Outbound;
}

export function hrisDepartmentsUpdateRequestToJSON(
  hrisDepartmentsUpdateRequest: HrisDepartmentsUpdateRequest,
): string {
  return JSON.stringify(
    HrisDepartmentsUpdateRequest$outboundSchema.parse(
      hrisDepartmentsUpdateRequest,
    ),
  );
}

export function hrisDepartmentsUpdateRequestFromJSON(
  jsonString: string,
): SafeParseResult<HrisDepartmentsUpdateRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => HrisDepartmentsUpdateRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'HrisDepartmentsUpdateRequest' from JSON`,
  );
}

/** @internal */
export const HrisDepartmentsUpdateResponse$inboundSchema: z.ZodType<
  HrisDepartmentsUpdateResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  HttpMeta: components.HTTPMetadata$inboundSchema,
  UpdateDepartmentResponse: components.UpdateDepartmentResponse$inboundSchema
    .optional(),
  UnexpectedErrorResponse: components.UnexpectedErrorResponse$inboundSchema
    .optional(),
}).transform((v) => {
  return remap$(v, {
    "HttpMeta": "httpMeta",
    "UpdateDepartmentResponse": "updateDepartmentResponse",
    "UnexpectedErrorResponse": "unexpectedErrorResponse",
  });
});

/** @internal */
export type HrisDepartmentsUpdateResponse$Outbound = {
  HttpMeta: components.HTTPMetadata$Outbound;
  UpdateDepartmentResponse?:
    | components.UpdateDepartmentResponse$Outbound
    | undefined;
  UnexpectedErrorResponse?:
    | components.UnexpectedErrorResponse$Outbound
    | undefined;
};

/** @internal */
export const HrisDepartmentsUpdateResponse$outboundSchema: z.ZodType<
  HrisDepartmentsUpdateResponse$Outbound,
  z.ZodTypeDef,
  HrisDepartmentsUpdateResponse
> = z.object({
  httpMeta: components.HTTPMetadata$outboundSchema,
  updateDepartmentResponse: components.UpdateDepartmentResponse$outboundSchema
    .optional(),
  unexpectedErrorResponse: components.UnexpectedErrorResponse$outboundSchema
    .optional(),
}).transform((v) => {
  return remap$(v, {
    httpMeta: "HttpMeta",
    updateDepartmentResponse: "UpdateDepartmentResponse",
    unexpectedErrorResponse: "UnexpectedErrorResponse",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace HrisDepartmentsUpdateResponse$ {
  /** @deprecated use `HrisDepartmentsUpdateResponse$inboundSchema` instead. */
  export const inboundSchema = HrisDepartmentsUpdateResponse$inboundSchema;
  /** @deprecated use `HrisDepartmentsUpdateResponse$outboundSchema` instead. */
  export const outboundSchema = HrisDepartmentsUpdateResponse$outboundSchema;
  /** @deprecated use `HrisDepartmentsUpdateResponse$Outbound` instead. */
  export type Outbound = HrisDepartmentsUpdateResponse$Outbound;
}

export function hrisDepartmentsUpdateResponseToJSON(
  hrisDepartmentsUpdateResponse: HrisDepartmentsUpdateResponse,
): string {
  return JSON.stringify(
    HrisDepartmentsUpdateResponse$outboundSchema.parse(
      hrisDepartmentsUpdateResponse,
    ),
  );
}

export function hrisDepartmentsUpdateResponseFromJSON(
  jsonString: string,
): SafeParseResult<HrisDepartmentsUpdateResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => HrisDepartmentsUpdateResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'HrisDepartmentsUpdateResponse' from JSON`,
  );
}

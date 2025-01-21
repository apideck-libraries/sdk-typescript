/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type CrmUsersDeleteGlobals = {
  /**
   * ID of the consumer which you want to get or push data from
   */
  consumerId?: string | undefined;
  /**
   * The ID of your Unify application
   */
  appId?: string | undefined;
};

export type CrmUsersDeleteRequest = {
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
};

export type CrmUsersDeleteResponse = {
  httpMeta: components.HTTPMetadata;
  /**
   * User deleted
   */
  deleteUserResponse?: components.DeleteUserResponse | undefined;
  /**
   * Unexpected error
   */
  unexpectedErrorResponse?: components.UnexpectedErrorResponse | undefined;
};

/** @internal */
export const CrmUsersDeleteGlobals$inboundSchema: z.ZodType<
  CrmUsersDeleteGlobals,
  z.ZodTypeDef,
  unknown
> = z.object({
  consumerId: z.string().optional(),
  appId: z.string().optional(),
});

/** @internal */
export type CrmUsersDeleteGlobals$Outbound = {
  consumerId?: string | undefined;
  appId?: string | undefined;
};

/** @internal */
export const CrmUsersDeleteGlobals$outboundSchema: z.ZodType<
  CrmUsersDeleteGlobals$Outbound,
  z.ZodTypeDef,
  CrmUsersDeleteGlobals
> = z.object({
  consumerId: z.string().optional(),
  appId: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CrmUsersDeleteGlobals$ {
  /** @deprecated use `CrmUsersDeleteGlobals$inboundSchema` instead. */
  export const inboundSchema = CrmUsersDeleteGlobals$inboundSchema;
  /** @deprecated use `CrmUsersDeleteGlobals$outboundSchema` instead. */
  export const outboundSchema = CrmUsersDeleteGlobals$outboundSchema;
  /** @deprecated use `CrmUsersDeleteGlobals$Outbound` instead. */
  export type Outbound = CrmUsersDeleteGlobals$Outbound;
}

export function crmUsersDeleteGlobalsToJSON(
  crmUsersDeleteGlobals: CrmUsersDeleteGlobals,
): string {
  return JSON.stringify(
    CrmUsersDeleteGlobals$outboundSchema.parse(crmUsersDeleteGlobals),
  );
}

export function crmUsersDeleteGlobalsFromJSON(
  jsonString: string,
): SafeParseResult<CrmUsersDeleteGlobals, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CrmUsersDeleteGlobals$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CrmUsersDeleteGlobals' from JSON`,
  );
}

/** @internal */
export const CrmUsersDeleteRequest$inboundSchema: z.ZodType<
  CrmUsersDeleteRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
  consumerId: z.string().optional(),
  appId: z.string().optional(),
  serviceId: z.string().optional(),
  raw: z.boolean().default(false),
});

/** @internal */
export type CrmUsersDeleteRequest$Outbound = {
  id: string;
  consumerId?: string | undefined;
  appId?: string | undefined;
  serviceId?: string | undefined;
  raw: boolean;
};

/** @internal */
export const CrmUsersDeleteRequest$outboundSchema: z.ZodType<
  CrmUsersDeleteRequest$Outbound,
  z.ZodTypeDef,
  CrmUsersDeleteRequest
> = z.object({
  id: z.string(),
  consumerId: z.string().optional(),
  appId: z.string().optional(),
  serviceId: z.string().optional(),
  raw: z.boolean().default(false),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CrmUsersDeleteRequest$ {
  /** @deprecated use `CrmUsersDeleteRequest$inboundSchema` instead. */
  export const inboundSchema = CrmUsersDeleteRequest$inboundSchema;
  /** @deprecated use `CrmUsersDeleteRequest$outboundSchema` instead. */
  export const outboundSchema = CrmUsersDeleteRequest$outboundSchema;
  /** @deprecated use `CrmUsersDeleteRequest$Outbound` instead. */
  export type Outbound = CrmUsersDeleteRequest$Outbound;
}

export function crmUsersDeleteRequestToJSON(
  crmUsersDeleteRequest: CrmUsersDeleteRequest,
): string {
  return JSON.stringify(
    CrmUsersDeleteRequest$outboundSchema.parse(crmUsersDeleteRequest),
  );
}

export function crmUsersDeleteRequestFromJSON(
  jsonString: string,
): SafeParseResult<CrmUsersDeleteRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CrmUsersDeleteRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CrmUsersDeleteRequest' from JSON`,
  );
}

/** @internal */
export const CrmUsersDeleteResponse$inboundSchema: z.ZodType<
  CrmUsersDeleteResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  HttpMeta: components.HTTPMetadata$inboundSchema,
  DeleteUserResponse: components.DeleteUserResponse$inboundSchema.optional(),
  UnexpectedErrorResponse: components.UnexpectedErrorResponse$inboundSchema
    .optional(),
}).transform((v) => {
  return remap$(v, {
    "HttpMeta": "httpMeta",
    "DeleteUserResponse": "deleteUserResponse",
    "UnexpectedErrorResponse": "unexpectedErrorResponse",
  });
});

/** @internal */
export type CrmUsersDeleteResponse$Outbound = {
  HttpMeta: components.HTTPMetadata$Outbound;
  DeleteUserResponse?: components.DeleteUserResponse$Outbound | undefined;
  UnexpectedErrorResponse?:
    | components.UnexpectedErrorResponse$Outbound
    | undefined;
};

/** @internal */
export const CrmUsersDeleteResponse$outboundSchema: z.ZodType<
  CrmUsersDeleteResponse$Outbound,
  z.ZodTypeDef,
  CrmUsersDeleteResponse
> = z.object({
  httpMeta: components.HTTPMetadata$outboundSchema,
  deleteUserResponse: components.DeleteUserResponse$outboundSchema.optional(),
  unexpectedErrorResponse: components.UnexpectedErrorResponse$outboundSchema
    .optional(),
}).transform((v) => {
  return remap$(v, {
    httpMeta: "HttpMeta",
    deleteUserResponse: "DeleteUserResponse",
    unexpectedErrorResponse: "UnexpectedErrorResponse",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CrmUsersDeleteResponse$ {
  /** @deprecated use `CrmUsersDeleteResponse$inboundSchema` instead. */
  export const inboundSchema = CrmUsersDeleteResponse$inboundSchema;
  /** @deprecated use `CrmUsersDeleteResponse$outboundSchema` instead. */
  export const outboundSchema = CrmUsersDeleteResponse$outboundSchema;
  /** @deprecated use `CrmUsersDeleteResponse$Outbound` instead. */
  export type Outbound = CrmUsersDeleteResponse$Outbound;
}

export function crmUsersDeleteResponseToJSON(
  crmUsersDeleteResponse: CrmUsersDeleteResponse,
): string {
  return JSON.stringify(
    CrmUsersDeleteResponse$outboundSchema.parse(crmUsersDeleteResponse),
  );
}

export function crmUsersDeleteResponseFromJSON(
  jsonString: string,
): SafeParseResult<CrmUsersDeleteResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CrmUsersDeleteResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CrmUsersDeleteResponse' from JSON`,
  );
}

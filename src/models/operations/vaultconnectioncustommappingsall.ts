/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type VaultConnectionCustomMappingsAllGlobals = {
  /**
   * ID of the consumer which you want to get or push data from
   */
  consumerId?: string | undefined;
  /**
   * The ID of your Unify application
   */
  appId?: string | undefined;
};

export type VaultConnectionCustomMappingsAllRequest = {
  /**
   * ID of the consumer which you want to get or push data from
   */
  consumerId?: string | undefined;
  /**
   * The ID of your Unify application
   */
  appId?: string | undefined;
  /**
   * Unified API
   */
  unifiedApi: string;
  /**
   * Service ID of the resource to return
   */
  serviceId: string;
  /**
   * Name of the resource (plural)
   */
  resource: string;
  /**
   * This is the id of the resource you want to fetch when listing custom fields. For example, if you want to fetch custom fields for a specific contact, you would use the contact id.
   */
  resourceId?: string | undefined;
};

export type VaultConnectionCustomMappingsAllResponse = {
  httpMeta: components.HTTPMetadata;
  /**
   * Custom mapping
   */
  getCustomMappingsResponse?: components.GetCustomMappingsResponse | undefined;
  /**
   * Unexpected error
   */
  unexpectedErrorResponse?: components.UnexpectedErrorResponse | undefined;
};

/** @internal */
export const VaultConnectionCustomMappingsAllGlobals$inboundSchema: z.ZodType<
  VaultConnectionCustomMappingsAllGlobals,
  z.ZodTypeDef,
  unknown
> = z.object({
  consumerId: z.string().optional(),
  appId: z.string().optional(),
});

/** @internal */
export type VaultConnectionCustomMappingsAllGlobals$Outbound = {
  consumerId?: string | undefined;
  appId?: string | undefined;
};

/** @internal */
export const VaultConnectionCustomMappingsAllGlobals$outboundSchema: z.ZodType<
  VaultConnectionCustomMappingsAllGlobals$Outbound,
  z.ZodTypeDef,
  VaultConnectionCustomMappingsAllGlobals
> = z.object({
  consumerId: z.string().optional(),
  appId: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace VaultConnectionCustomMappingsAllGlobals$ {
  /** @deprecated use `VaultConnectionCustomMappingsAllGlobals$inboundSchema` instead. */
  export const inboundSchema =
    VaultConnectionCustomMappingsAllGlobals$inboundSchema;
  /** @deprecated use `VaultConnectionCustomMappingsAllGlobals$outboundSchema` instead. */
  export const outboundSchema =
    VaultConnectionCustomMappingsAllGlobals$outboundSchema;
  /** @deprecated use `VaultConnectionCustomMappingsAllGlobals$Outbound` instead. */
  export type Outbound = VaultConnectionCustomMappingsAllGlobals$Outbound;
}

export function vaultConnectionCustomMappingsAllGlobalsToJSON(
  vaultConnectionCustomMappingsAllGlobals:
    VaultConnectionCustomMappingsAllGlobals,
): string {
  return JSON.stringify(
    VaultConnectionCustomMappingsAllGlobals$outboundSchema.parse(
      vaultConnectionCustomMappingsAllGlobals,
    ),
  );
}

export function vaultConnectionCustomMappingsAllGlobalsFromJSON(
  jsonString: string,
): SafeParseResult<
  VaultConnectionCustomMappingsAllGlobals,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      VaultConnectionCustomMappingsAllGlobals$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'VaultConnectionCustomMappingsAllGlobals' from JSON`,
  );
}

/** @internal */
export const VaultConnectionCustomMappingsAllRequest$inboundSchema: z.ZodType<
  VaultConnectionCustomMappingsAllRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  consumerId: z.string().optional(),
  appId: z.string().optional(),
  unified_api: z.string(),
  service_id: z.string(),
  resource: z.string(),
  resource_id: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    "unified_api": "unifiedApi",
    "service_id": "serviceId",
    "resource_id": "resourceId",
  });
});

/** @internal */
export type VaultConnectionCustomMappingsAllRequest$Outbound = {
  consumerId?: string | undefined;
  appId?: string | undefined;
  unified_api: string;
  service_id: string;
  resource: string;
  resource_id?: string | undefined;
};

/** @internal */
export const VaultConnectionCustomMappingsAllRequest$outboundSchema: z.ZodType<
  VaultConnectionCustomMappingsAllRequest$Outbound,
  z.ZodTypeDef,
  VaultConnectionCustomMappingsAllRequest
> = z.object({
  consumerId: z.string().optional(),
  appId: z.string().optional(),
  unifiedApi: z.string(),
  serviceId: z.string(),
  resource: z.string(),
  resourceId: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    unifiedApi: "unified_api",
    serviceId: "service_id",
    resourceId: "resource_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace VaultConnectionCustomMappingsAllRequest$ {
  /** @deprecated use `VaultConnectionCustomMappingsAllRequest$inboundSchema` instead. */
  export const inboundSchema =
    VaultConnectionCustomMappingsAllRequest$inboundSchema;
  /** @deprecated use `VaultConnectionCustomMappingsAllRequest$outboundSchema` instead. */
  export const outboundSchema =
    VaultConnectionCustomMappingsAllRequest$outboundSchema;
  /** @deprecated use `VaultConnectionCustomMappingsAllRequest$Outbound` instead. */
  export type Outbound = VaultConnectionCustomMappingsAllRequest$Outbound;
}

export function vaultConnectionCustomMappingsAllRequestToJSON(
  vaultConnectionCustomMappingsAllRequest:
    VaultConnectionCustomMappingsAllRequest,
): string {
  return JSON.stringify(
    VaultConnectionCustomMappingsAllRequest$outboundSchema.parse(
      vaultConnectionCustomMappingsAllRequest,
    ),
  );
}

export function vaultConnectionCustomMappingsAllRequestFromJSON(
  jsonString: string,
): SafeParseResult<
  VaultConnectionCustomMappingsAllRequest,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      VaultConnectionCustomMappingsAllRequest$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'VaultConnectionCustomMappingsAllRequest' from JSON`,
  );
}

/** @internal */
export const VaultConnectionCustomMappingsAllResponse$inboundSchema: z.ZodType<
  VaultConnectionCustomMappingsAllResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  HttpMeta: components.HTTPMetadata$inboundSchema,
  GetCustomMappingsResponse: components.GetCustomMappingsResponse$inboundSchema
    .optional(),
  UnexpectedErrorResponse: components.UnexpectedErrorResponse$inboundSchema
    .optional(),
}).transform((v) => {
  return remap$(v, {
    "HttpMeta": "httpMeta",
    "GetCustomMappingsResponse": "getCustomMappingsResponse",
    "UnexpectedErrorResponse": "unexpectedErrorResponse",
  });
});

/** @internal */
export type VaultConnectionCustomMappingsAllResponse$Outbound = {
  HttpMeta: components.HTTPMetadata$Outbound;
  GetCustomMappingsResponse?:
    | components.GetCustomMappingsResponse$Outbound
    | undefined;
  UnexpectedErrorResponse?:
    | components.UnexpectedErrorResponse$Outbound
    | undefined;
};

/** @internal */
export const VaultConnectionCustomMappingsAllResponse$outboundSchema: z.ZodType<
  VaultConnectionCustomMappingsAllResponse$Outbound,
  z.ZodTypeDef,
  VaultConnectionCustomMappingsAllResponse
> = z.object({
  httpMeta: components.HTTPMetadata$outboundSchema,
  getCustomMappingsResponse: components.GetCustomMappingsResponse$outboundSchema
    .optional(),
  unexpectedErrorResponse: components.UnexpectedErrorResponse$outboundSchema
    .optional(),
}).transform((v) => {
  return remap$(v, {
    httpMeta: "HttpMeta",
    getCustomMappingsResponse: "GetCustomMappingsResponse",
    unexpectedErrorResponse: "UnexpectedErrorResponse",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace VaultConnectionCustomMappingsAllResponse$ {
  /** @deprecated use `VaultConnectionCustomMappingsAllResponse$inboundSchema` instead. */
  export const inboundSchema =
    VaultConnectionCustomMappingsAllResponse$inboundSchema;
  /** @deprecated use `VaultConnectionCustomMappingsAllResponse$outboundSchema` instead. */
  export const outboundSchema =
    VaultConnectionCustomMappingsAllResponse$outboundSchema;
  /** @deprecated use `VaultConnectionCustomMappingsAllResponse$Outbound` instead. */
  export type Outbound = VaultConnectionCustomMappingsAllResponse$Outbound;
}

export function vaultConnectionCustomMappingsAllResponseToJSON(
  vaultConnectionCustomMappingsAllResponse:
    VaultConnectionCustomMappingsAllResponse,
): string {
  return JSON.stringify(
    VaultConnectionCustomMappingsAllResponse$outboundSchema.parse(
      vaultConnectionCustomMappingsAllResponse,
    ),
  );
}

export function vaultConnectionCustomMappingsAllResponseFromJSON(
  jsonString: string,
): SafeParseResult<
  VaultConnectionCustomMappingsAllResponse,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      VaultConnectionCustomMappingsAllResponse$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'VaultConnectionCustomMappingsAllResponse' from JSON`,
  );
}

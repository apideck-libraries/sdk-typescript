/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type VaultConnectionSettingsAllGlobals = {
  /**
   * ID of the consumer which you want to get or push data from
   */
  consumerId?: string | undefined;
  /**
   * The ID of your Unify application
   */
  appId?: string | undefined;
};

export type VaultConnectionSettingsAllRequest = {
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
};

export type VaultConnectionSettingsAllResponse = {
  httpMeta: components.HTTPMetadata;
  /**
   * Connection
   */
  getConnectionResponse?: components.GetConnectionResponse | undefined;
  /**
   * Unexpected error
   */
  unexpectedErrorResponse?: components.UnexpectedErrorResponse | undefined;
};

/** @internal */
export const VaultConnectionSettingsAllGlobals$inboundSchema: z.ZodType<
  VaultConnectionSettingsAllGlobals,
  z.ZodTypeDef,
  unknown
> = z.object({
  consumerId: z.string().optional(),
  appId: z.string().optional(),
});

/** @internal */
export type VaultConnectionSettingsAllGlobals$Outbound = {
  consumerId?: string | undefined;
  appId?: string | undefined;
};

/** @internal */
export const VaultConnectionSettingsAllGlobals$outboundSchema: z.ZodType<
  VaultConnectionSettingsAllGlobals$Outbound,
  z.ZodTypeDef,
  VaultConnectionSettingsAllGlobals
> = z.object({
  consumerId: z.string().optional(),
  appId: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace VaultConnectionSettingsAllGlobals$ {
  /** @deprecated use `VaultConnectionSettingsAllGlobals$inboundSchema` instead. */
  export const inboundSchema = VaultConnectionSettingsAllGlobals$inboundSchema;
  /** @deprecated use `VaultConnectionSettingsAllGlobals$outboundSchema` instead. */
  export const outboundSchema =
    VaultConnectionSettingsAllGlobals$outboundSchema;
  /** @deprecated use `VaultConnectionSettingsAllGlobals$Outbound` instead. */
  export type Outbound = VaultConnectionSettingsAllGlobals$Outbound;
}

export function vaultConnectionSettingsAllGlobalsToJSON(
  vaultConnectionSettingsAllGlobals: VaultConnectionSettingsAllGlobals,
): string {
  return JSON.stringify(
    VaultConnectionSettingsAllGlobals$outboundSchema.parse(
      vaultConnectionSettingsAllGlobals,
    ),
  );
}

export function vaultConnectionSettingsAllGlobalsFromJSON(
  jsonString: string,
): SafeParseResult<VaultConnectionSettingsAllGlobals, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => VaultConnectionSettingsAllGlobals$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'VaultConnectionSettingsAllGlobals' from JSON`,
  );
}

/** @internal */
export const VaultConnectionSettingsAllRequest$inboundSchema: z.ZodType<
  VaultConnectionSettingsAllRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  unified_api: z.string(),
  service_id: z.string(),
  resource: z.string(),
}).transform((v) => {
  return remap$(v, {
    "unified_api": "unifiedApi",
    "service_id": "serviceId",
  });
});

/** @internal */
export type VaultConnectionSettingsAllRequest$Outbound = {
  unified_api: string;
  service_id: string;
  resource: string;
};

/** @internal */
export const VaultConnectionSettingsAllRequest$outboundSchema: z.ZodType<
  VaultConnectionSettingsAllRequest$Outbound,
  z.ZodTypeDef,
  VaultConnectionSettingsAllRequest
> = z.object({
  unifiedApi: z.string(),
  serviceId: z.string(),
  resource: z.string(),
}).transform((v) => {
  return remap$(v, {
    unifiedApi: "unified_api",
    serviceId: "service_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace VaultConnectionSettingsAllRequest$ {
  /** @deprecated use `VaultConnectionSettingsAllRequest$inboundSchema` instead. */
  export const inboundSchema = VaultConnectionSettingsAllRequest$inboundSchema;
  /** @deprecated use `VaultConnectionSettingsAllRequest$outboundSchema` instead. */
  export const outboundSchema =
    VaultConnectionSettingsAllRequest$outboundSchema;
  /** @deprecated use `VaultConnectionSettingsAllRequest$Outbound` instead. */
  export type Outbound = VaultConnectionSettingsAllRequest$Outbound;
}

export function vaultConnectionSettingsAllRequestToJSON(
  vaultConnectionSettingsAllRequest: VaultConnectionSettingsAllRequest,
): string {
  return JSON.stringify(
    VaultConnectionSettingsAllRequest$outboundSchema.parse(
      vaultConnectionSettingsAllRequest,
    ),
  );
}

export function vaultConnectionSettingsAllRequestFromJSON(
  jsonString: string,
): SafeParseResult<VaultConnectionSettingsAllRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => VaultConnectionSettingsAllRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'VaultConnectionSettingsAllRequest' from JSON`,
  );
}

/** @internal */
export const VaultConnectionSettingsAllResponse$inboundSchema: z.ZodType<
  VaultConnectionSettingsAllResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  HttpMeta: components.HTTPMetadata$inboundSchema,
  GetConnectionResponse: components.GetConnectionResponse$inboundSchema
    .optional(),
  UnexpectedErrorResponse: components.UnexpectedErrorResponse$inboundSchema
    .optional(),
}).transform((v) => {
  return remap$(v, {
    "HttpMeta": "httpMeta",
    "GetConnectionResponse": "getConnectionResponse",
    "UnexpectedErrorResponse": "unexpectedErrorResponse",
  });
});

/** @internal */
export type VaultConnectionSettingsAllResponse$Outbound = {
  HttpMeta: components.HTTPMetadata$Outbound;
  GetConnectionResponse?: components.GetConnectionResponse$Outbound | undefined;
  UnexpectedErrorResponse?:
    | components.UnexpectedErrorResponse$Outbound
    | undefined;
};

/** @internal */
export const VaultConnectionSettingsAllResponse$outboundSchema: z.ZodType<
  VaultConnectionSettingsAllResponse$Outbound,
  z.ZodTypeDef,
  VaultConnectionSettingsAllResponse
> = z.object({
  httpMeta: components.HTTPMetadata$outboundSchema,
  getConnectionResponse: components.GetConnectionResponse$outboundSchema
    .optional(),
  unexpectedErrorResponse: components.UnexpectedErrorResponse$outboundSchema
    .optional(),
}).transform((v) => {
  return remap$(v, {
    httpMeta: "HttpMeta",
    getConnectionResponse: "GetConnectionResponse",
    unexpectedErrorResponse: "UnexpectedErrorResponse",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace VaultConnectionSettingsAllResponse$ {
  /** @deprecated use `VaultConnectionSettingsAllResponse$inboundSchema` instead. */
  export const inboundSchema = VaultConnectionSettingsAllResponse$inboundSchema;
  /** @deprecated use `VaultConnectionSettingsAllResponse$outboundSchema` instead. */
  export const outboundSchema =
    VaultConnectionSettingsAllResponse$outboundSchema;
  /** @deprecated use `VaultConnectionSettingsAllResponse$Outbound` instead. */
  export type Outbound = VaultConnectionSettingsAllResponse$Outbound;
}

export function vaultConnectionSettingsAllResponseToJSON(
  vaultConnectionSettingsAllResponse: VaultConnectionSettingsAllResponse,
): string {
  return JSON.stringify(
    VaultConnectionSettingsAllResponse$outboundSchema.parse(
      vaultConnectionSettingsAllResponse,
    ),
  );
}

export function vaultConnectionSettingsAllResponseFromJSON(
  jsonString: string,
): SafeParseResult<VaultConnectionSettingsAllResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      VaultConnectionSettingsAllResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'VaultConnectionSettingsAllResponse' from JSON`,
  );
}

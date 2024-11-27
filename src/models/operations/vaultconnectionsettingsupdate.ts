/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type VaultConnectionSettingsUpdateGlobals = {
  /**
   * ID of the consumer which you want to get or push data from
   */
  consumerId?: string | undefined;
  /**
   * The ID of your Unify application
   */
  appId?: string | undefined;
};

export type VaultConnectionSettingsUpdateRequest = {
  /**
   * Service ID of the resource to return
   */
  serviceId: string;
  /**
   * Unified API
   */
  unifiedApi: string;
  /**
   * Name of the resource (plural)
   */
  resource: string;
  /**
   * Fields that need to be updated on the resource
   */
  connection: components.ConnectionInput;
};

export type VaultConnectionSettingsUpdateResponse = {
  httpMeta: components.HTTPMetadata;
  /**
   * Connection updated
   */
  updateConnectionResponse?: components.UpdateConnectionResponse | undefined;
  /**
   * Unexpected error
   */
  unexpectedErrorResponse?: components.UnexpectedErrorResponse | undefined;
};

/** @internal */
export const VaultConnectionSettingsUpdateGlobals$inboundSchema: z.ZodType<
  VaultConnectionSettingsUpdateGlobals,
  z.ZodTypeDef,
  unknown
> = z.object({
  consumerId: z.string().optional(),
  appId: z.string().optional(),
});

/** @internal */
export type VaultConnectionSettingsUpdateGlobals$Outbound = {
  consumerId?: string | undefined;
  appId?: string | undefined;
};

/** @internal */
export const VaultConnectionSettingsUpdateGlobals$outboundSchema: z.ZodType<
  VaultConnectionSettingsUpdateGlobals$Outbound,
  z.ZodTypeDef,
  VaultConnectionSettingsUpdateGlobals
> = z.object({
  consumerId: z.string().optional(),
  appId: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace VaultConnectionSettingsUpdateGlobals$ {
  /** @deprecated use `VaultConnectionSettingsUpdateGlobals$inboundSchema` instead. */
  export const inboundSchema =
    VaultConnectionSettingsUpdateGlobals$inboundSchema;
  /** @deprecated use `VaultConnectionSettingsUpdateGlobals$outboundSchema` instead. */
  export const outboundSchema =
    VaultConnectionSettingsUpdateGlobals$outboundSchema;
  /** @deprecated use `VaultConnectionSettingsUpdateGlobals$Outbound` instead. */
  export type Outbound = VaultConnectionSettingsUpdateGlobals$Outbound;
}

export function vaultConnectionSettingsUpdateGlobalsToJSON(
  vaultConnectionSettingsUpdateGlobals: VaultConnectionSettingsUpdateGlobals,
): string {
  return JSON.stringify(
    VaultConnectionSettingsUpdateGlobals$outboundSchema.parse(
      vaultConnectionSettingsUpdateGlobals,
    ),
  );
}

export function vaultConnectionSettingsUpdateGlobalsFromJSON(
  jsonString: string,
): SafeParseResult<VaultConnectionSettingsUpdateGlobals, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      VaultConnectionSettingsUpdateGlobals$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'VaultConnectionSettingsUpdateGlobals' from JSON`,
  );
}

/** @internal */
export const VaultConnectionSettingsUpdateRequest$inboundSchema: z.ZodType<
  VaultConnectionSettingsUpdateRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  service_id: z.string(),
  unified_api: z.string(),
  resource: z.string(),
  Connection: components.ConnectionInput$inboundSchema,
}).transform((v) => {
  return remap$(v, {
    "service_id": "serviceId",
    "unified_api": "unifiedApi",
    "Connection": "connection",
  });
});

/** @internal */
export type VaultConnectionSettingsUpdateRequest$Outbound = {
  service_id: string;
  unified_api: string;
  resource: string;
  Connection: components.ConnectionInput$Outbound;
};

/** @internal */
export const VaultConnectionSettingsUpdateRequest$outboundSchema: z.ZodType<
  VaultConnectionSettingsUpdateRequest$Outbound,
  z.ZodTypeDef,
  VaultConnectionSettingsUpdateRequest
> = z.object({
  serviceId: z.string(),
  unifiedApi: z.string(),
  resource: z.string(),
  connection: components.ConnectionInput$outboundSchema,
}).transform((v) => {
  return remap$(v, {
    serviceId: "service_id",
    unifiedApi: "unified_api",
    connection: "Connection",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace VaultConnectionSettingsUpdateRequest$ {
  /** @deprecated use `VaultConnectionSettingsUpdateRequest$inboundSchema` instead. */
  export const inboundSchema =
    VaultConnectionSettingsUpdateRequest$inboundSchema;
  /** @deprecated use `VaultConnectionSettingsUpdateRequest$outboundSchema` instead. */
  export const outboundSchema =
    VaultConnectionSettingsUpdateRequest$outboundSchema;
  /** @deprecated use `VaultConnectionSettingsUpdateRequest$Outbound` instead. */
  export type Outbound = VaultConnectionSettingsUpdateRequest$Outbound;
}

export function vaultConnectionSettingsUpdateRequestToJSON(
  vaultConnectionSettingsUpdateRequest: VaultConnectionSettingsUpdateRequest,
): string {
  return JSON.stringify(
    VaultConnectionSettingsUpdateRequest$outboundSchema.parse(
      vaultConnectionSettingsUpdateRequest,
    ),
  );
}

export function vaultConnectionSettingsUpdateRequestFromJSON(
  jsonString: string,
): SafeParseResult<VaultConnectionSettingsUpdateRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      VaultConnectionSettingsUpdateRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'VaultConnectionSettingsUpdateRequest' from JSON`,
  );
}

/** @internal */
export const VaultConnectionSettingsUpdateResponse$inboundSchema: z.ZodType<
  VaultConnectionSettingsUpdateResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  HttpMeta: components.HTTPMetadata$inboundSchema,
  UpdateConnectionResponse: components.UpdateConnectionResponse$inboundSchema
    .optional(),
  UnexpectedErrorResponse: components.UnexpectedErrorResponse$inboundSchema
    .optional(),
}).transform((v) => {
  return remap$(v, {
    "HttpMeta": "httpMeta",
    "UpdateConnectionResponse": "updateConnectionResponse",
    "UnexpectedErrorResponse": "unexpectedErrorResponse",
  });
});

/** @internal */
export type VaultConnectionSettingsUpdateResponse$Outbound = {
  HttpMeta: components.HTTPMetadata$Outbound;
  UpdateConnectionResponse?:
    | components.UpdateConnectionResponse$Outbound
    | undefined;
  UnexpectedErrorResponse?:
    | components.UnexpectedErrorResponse$Outbound
    | undefined;
};

/** @internal */
export const VaultConnectionSettingsUpdateResponse$outboundSchema: z.ZodType<
  VaultConnectionSettingsUpdateResponse$Outbound,
  z.ZodTypeDef,
  VaultConnectionSettingsUpdateResponse
> = z.object({
  httpMeta: components.HTTPMetadata$outboundSchema,
  updateConnectionResponse: components.UpdateConnectionResponse$outboundSchema
    .optional(),
  unexpectedErrorResponse: components.UnexpectedErrorResponse$outboundSchema
    .optional(),
}).transform((v) => {
  return remap$(v, {
    httpMeta: "HttpMeta",
    updateConnectionResponse: "UpdateConnectionResponse",
    unexpectedErrorResponse: "UnexpectedErrorResponse",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace VaultConnectionSettingsUpdateResponse$ {
  /** @deprecated use `VaultConnectionSettingsUpdateResponse$inboundSchema` instead. */
  export const inboundSchema =
    VaultConnectionSettingsUpdateResponse$inboundSchema;
  /** @deprecated use `VaultConnectionSettingsUpdateResponse$outboundSchema` instead. */
  export const outboundSchema =
    VaultConnectionSettingsUpdateResponse$outboundSchema;
  /** @deprecated use `VaultConnectionSettingsUpdateResponse$Outbound` instead. */
  export type Outbound = VaultConnectionSettingsUpdateResponse$Outbound;
}

export function vaultConnectionSettingsUpdateResponseToJSON(
  vaultConnectionSettingsUpdateResponse: VaultConnectionSettingsUpdateResponse,
): string {
  return JSON.stringify(
    VaultConnectionSettingsUpdateResponse$outboundSchema.parse(
      vaultConnectionSettingsUpdateResponse,
    ),
  );
}

export function vaultConnectionSettingsUpdateResponseFromJSON(
  jsonString: string,
): SafeParseResult<VaultConnectionSettingsUpdateResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      VaultConnectionSettingsUpdateResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'VaultConnectionSettingsUpdateResponse' from JSON`,
  );
}

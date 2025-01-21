/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type VaultConnectionsImportGlobals = {
  /**
   * ID of the consumer which you want to get or push data from
   */
  consumerId?: string | undefined;
  /**
   * The ID of your Unify application
   */
  appId?: string | undefined;
};

export type VaultConnectionsImportRequest = {
  /**
   * ID of the consumer which you want to get or push data from
   */
  consumerId?: string | undefined;
  /**
   * The ID of your Unify application
   */
  appId?: string | undefined;
  /**
   * Service ID of the resource to return
   */
  serviceId: string;
  /**
   * Unified API
   */
  unifiedApi: string;
  /**
   * Fields that need to be persisted on the resource
   */
  connectionImportData: components.ConnectionImportData;
};

export type VaultConnectionsImportResponse = {
  httpMeta: components.HTTPMetadata;
  /**
   * Connection created
   */
  createConnectionResponse?: components.CreateConnectionResponse | undefined;
  /**
   * Unexpected error
   */
  unexpectedErrorResponse?: components.UnexpectedErrorResponse | undefined;
};

/** @internal */
export const VaultConnectionsImportGlobals$inboundSchema: z.ZodType<
  VaultConnectionsImportGlobals,
  z.ZodTypeDef,
  unknown
> = z.object({
  consumerId: z.string().optional(),
  appId: z.string().optional(),
});

/** @internal */
export type VaultConnectionsImportGlobals$Outbound = {
  consumerId?: string | undefined;
  appId?: string | undefined;
};

/** @internal */
export const VaultConnectionsImportGlobals$outboundSchema: z.ZodType<
  VaultConnectionsImportGlobals$Outbound,
  z.ZodTypeDef,
  VaultConnectionsImportGlobals
> = z.object({
  consumerId: z.string().optional(),
  appId: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace VaultConnectionsImportGlobals$ {
  /** @deprecated use `VaultConnectionsImportGlobals$inboundSchema` instead. */
  export const inboundSchema = VaultConnectionsImportGlobals$inboundSchema;
  /** @deprecated use `VaultConnectionsImportGlobals$outboundSchema` instead. */
  export const outboundSchema = VaultConnectionsImportGlobals$outboundSchema;
  /** @deprecated use `VaultConnectionsImportGlobals$Outbound` instead. */
  export type Outbound = VaultConnectionsImportGlobals$Outbound;
}

export function vaultConnectionsImportGlobalsToJSON(
  vaultConnectionsImportGlobals: VaultConnectionsImportGlobals,
): string {
  return JSON.stringify(
    VaultConnectionsImportGlobals$outboundSchema.parse(
      vaultConnectionsImportGlobals,
    ),
  );
}

export function vaultConnectionsImportGlobalsFromJSON(
  jsonString: string,
): SafeParseResult<VaultConnectionsImportGlobals, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => VaultConnectionsImportGlobals$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'VaultConnectionsImportGlobals' from JSON`,
  );
}

/** @internal */
export const VaultConnectionsImportRequest$inboundSchema: z.ZodType<
  VaultConnectionsImportRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  consumerId: z.string().optional(),
  appId: z.string().optional(),
  service_id: z.string(),
  unified_api: z.string(),
  ConnectionImportData: components.ConnectionImportData$inboundSchema,
}).transform((v) => {
  return remap$(v, {
    "service_id": "serviceId",
    "unified_api": "unifiedApi",
    "ConnectionImportData": "connectionImportData",
  });
});

/** @internal */
export type VaultConnectionsImportRequest$Outbound = {
  consumerId?: string | undefined;
  appId?: string | undefined;
  service_id: string;
  unified_api: string;
  ConnectionImportData: components.ConnectionImportData$Outbound;
};

/** @internal */
export const VaultConnectionsImportRequest$outboundSchema: z.ZodType<
  VaultConnectionsImportRequest$Outbound,
  z.ZodTypeDef,
  VaultConnectionsImportRequest
> = z.object({
  consumerId: z.string().optional(),
  appId: z.string().optional(),
  serviceId: z.string(),
  unifiedApi: z.string(),
  connectionImportData: components.ConnectionImportData$outboundSchema,
}).transform((v) => {
  return remap$(v, {
    serviceId: "service_id",
    unifiedApi: "unified_api",
    connectionImportData: "ConnectionImportData",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace VaultConnectionsImportRequest$ {
  /** @deprecated use `VaultConnectionsImportRequest$inboundSchema` instead. */
  export const inboundSchema = VaultConnectionsImportRequest$inboundSchema;
  /** @deprecated use `VaultConnectionsImportRequest$outboundSchema` instead. */
  export const outboundSchema = VaultConnectionsImportRequest$outboundSchema;
  /** @deprecated use `VaultConnectionsImportRequest$Outbound` instead. */
  export type Outbound = VaultConnectionsImportRequest$Outbound;
}

export function vaultConnectionsImportRequestToJSON(
  vaultConnectionsImportRequest: VaultConnectionsImportRequest,
): string {
  return JSON.stringify(
    VaultConnectionsImportRequest$outboundSchema.parse(
      vaultConnectionsImportRequest,
    ),
  );
}

export function vaultConnectionsImportRequestFromJSON(
  jsonString: string,
): SafeParseResult<VaultConnectionsImportRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => VaultConnectionsImportRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'VaultConnectionsImportRequest' from JSON`,
  );
}

/** @internal */
export const VaultConnectionsImportResponse$inboundSchema: z.ZodType<
  VaultConnectionsImportResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  HttpMeta: components.HTTPMetadata$inboundSchema,
  CreateConnectionResponse: components.CreateConnectionResponse$inboundSchema
    .optional(),
  UnexpectedErrorResponse: components.UnexpectedErrorResponse$inboundSchema
    .optional(),
}).transform((v) => {
  return remap$(v, {
    "HttpMeta": "httpMeta",
    "CreateConnectionResponse": "createConnectionResponse",
    "UnexpectedErrorResponse": "unexpectedErrorResponse",
  });
});

/** @internal */
export type VaultConnectionsImportResponse$Outbound = {
  HttpMeta: components.HTTPMetadata$Outbound;
  CreateConnectionResponse?:
    | components.CreateConnectionResponse$Outbound
    | undefined;
  UnexpectedErrorResponse?:
    | components.UnexpectedErrorResponse$Outbound
    | undefined;
};

/** @internal */
export const VaultConnectionsImportResponse$outboundSchema: z.ZodType<
  VaultConnectionsImportResponse$Outbound,
  z.ZodTypeDef,
  VaultConnectionsImportResponse
> = z.object({
  httpMeta: components.HTTPMetadata$outboundSchema,
  createConnectionResponse: components.CreateConnectionResponse$outboundSchema
    .optional(),
  unexpectedErrorResponse: components.UnexpectedErrorResponse$outboundSchema
    .optional(),
}).transform((v) => {
  return remap$(v, {
    httpMeta: "HttpMeta",
    createConnectionResponse: "CreateConnectionResponse",
    unexpectedErrorResponse: "UnexpectedErrorResponse",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace VaultConnectionsImportResponse$ {
  /** @deprecated use `VaultConnectionsImportResponse$inboundSchema` instead. */
  export const inboundSchema = VaultConnectionsImportResponse$inboundSchema;
  /** @deprecated use `VaultConnectionsImportResponse$outboundSchema` instead. */
  export const outboundSchema = VaultConnectionsImportResponse$outboundSchema;
  /** @deprecated use `VaultConnectionsImportResponse$Outbound` instead. */
  export type Outbound = VaultConnectionsImportResponse$Outbound;
}

export function vaultConnectionsImportResponseToJSON(
  vaultConnectionsImportResponse: VaultConnectionsImportResponse,
): string {
  return JSON.stringify(
    VaultConnectionsImportResponse$outboundSchema.parse(
      vaultConnectionsImportResponse,
    ),
  );
}

export function vaultConnectionsImportResponseFromJSON(
  jsonString: string,
): SafeParseResult<VaultConnectionsImportResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => VaultConnectionsImportResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'VaultConnectionsImportResponse' from JSON`,
  );
}

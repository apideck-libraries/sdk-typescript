/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type VaultValidateConnectionStateGlobals = {
  /**
   * ID of the consumer which you want to get or push data from
   */
  consumerId?: string | undefined;
  /**
   * The ID of your Unify application
   */
  appId?: string | undefined;
};

export type VaultValidateConnectionStateRequestBody = {};

export type VaultValidateConnectionStateRequest = {
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
  requestBody?: VaultValidateConnectionStateRequestBody | undefined;
};

export type VaultValidateConnectionStateResponse = {
  httpMeta: components.HTTPMetadata;
  /**
   * Connection access token refreshed
   */
  validateConnectionStateResponse?:
    | components.ValidateConnectionStateResponse
    | undefined;
  /**
   * Unexpected error
   */
  unexpectedErrorResponse?: components.UnexpectedErrorResponse | undefined;
};

/** @internal */
export const VaultValidateConnectionStateGlobals$inboundSchema: z.ZodType<
  VaultValidateConnectionStateGlobals,
  z.ZodTypeDef,
  unknown
> = z.object({
  consumerId: z.string().optional(),
  appId: z.string().optional(),
});

/** @internal */
export type VaultValidateConnectionStateGlobals$Outbound = {
  consumerId?: string | undefined;
  appId?: string | undefined;
};

/** @internal */
export const VaultValidateConnectionStateGlobals$outboundSchema: z.ZodType<
  VaultValidateConnectionStateGlobals$Outbound,
  z.ZodTypeDef,
  VaultValidateConnectionStateGlobals
> = z.object({
  consumerId: z.string().optional(),
  appId: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace VaultValidateConnectionStateGlobals$ {
  /** @deprecated use `VaultValidateConnectionStateGlobals$inboundSchema` instead. */
  export const inboundSchema =
    VaultValidateConnectionStateGlobals$inboundSchema;
  /** @deprecated use `VaultValidateConnectionStateGlobals$outboundSchema` instead. */
  export const outboundSchema =
    VaultValidateConnectionStateGlobals$outboundSchema;
  /** @deprecated use `VaultValidateConnectionStateGlobals$Outbound` instead. */
  export type Outbound = VaultValidateConnectionStateGlobals$Outbound;
}

export function vaultValidateConnectionStateGlobalsToJSON(
  vaultValidateConnectionStateGlobals: VaultValidateConnectionStateGlobals,
): string {
  return JSON.stringify(
    VaultValidateConnectionStateGlobals$outboundSchema.parse(
      vaultValidateConnectionStateGlobals,
    ),
  );
}

export function vaultValidateConnectionStateGlobalsFromJSON(
  jsonString: string,
): SafeParseResult<VaultValidateConnectionStateGlobals, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      VaultValidateConnectionStateGlobals$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'VaultValidateConnectionStateGlobals' from JSON`,
  );
}

/** @internal */
export const VaultValidateConnectionStateRequestBody$inboundSchema: z.ZodType<
  VaultValidateConnectionStateRequestBody,
  z.ZodTypeDef,
  unknown
> = z.object({});

/** @internal */
export type VaultValidateConnectionStateRequestBody$Outbound = {};

/** @internal */
export const VaultValidateConnectionStateRequestBody$outboundSchema: z.ZodType<
  VaultValidateConnectionStateRequestBody$Outbound,
  z.ZodTypeDef,
  VaultValidateConnectionStateRequestBody
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace VaultValidateConnectionStateRequestBody$ {
  /** @deprecated use `VaultValidateConnectionStateRequestBody$inboundSchema` instead. */
  export const inboundSchema =
    VaultValidateConnectionStateRequestBody$inboundSchema;
  /** @deprecated use `VaultValidateConnectionStateRequestBody$outboundSchema` instead. */
  export const outboundSchema =
    VaultValidateConnectionStateRequestBody$outboundSchema;
  /** @deprecated use `VaultValidateConnectionStateRequestBody$Outbound` instead. */
  export type Outbound = VaultValidateConnectionStateRequestBody$Outbound;
}

export function vaultValidateConnectionStateRequestBodyToJSON(
  vaultValidateConnectionStateRequestBody:
    VaultValidateConnectionStateRequestBody,
): string {
  return JSON.stringify(
    VaultValidateConnectionStateRequestBody$outboundSchema.parse(
      vaultValidateConnectionStateRequestBody,
    ),
  );
}

export function vaultValidateConnectionStateRequestBodyFromJSON(
  jsonString: string,
): SafeParseResult<
  VaultValidateConnectionStateRequestBody,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      VaultValidateConnectionStateRequestBody$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'VaultValidateConnectionStateRequestBody' from JSON`,
  );
}

/** @internal */
export const VaultValidateConnectionStateRequest$inboundSchema: z.ZodType<
  VaultValidateConnectionStateRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  consumerId: z.string().optional(),
  appId: z.string().optional(),
  service_id: z.string(),
  unified_api: z.string(),
  RequestBody: z.lazy(() =>
    VaultValidateConnectionStateRequestBody$inboundSchema
  ).optional(),
}).transform((v) => {
  return remap$(v, {
    "service_id": "serviceId",
    "unified_api": "unifiedApi",
    "RequestBody": "requestBody",
  });
});

/** @internal */
export type VaultValidateConnectionStateRequest$Outbound = {
  consumerId?: string | undefined;
  appId?: string | undefined;
  service_id: string;
  unified_api: string;
  RequestBody?: VaultValidateConnectionStateRequestBody$Outbound | undefined;
};

/** @internal */
export const VaultValidateConnectionStateRequest$outboundSchema: z.ZodType<
  VaultValidateConnectionStateRequest$Outbound,
  z.ZodTypeDef,
  VaultValidateConnectionStateRequest
> = z.object({
  consumerId: z.string().optional(),
  appId: z.string().optional(),
  serviceId: z.string(),
  unifiedApi: z.string(),
  requestBody: z.lazy(() =>
    VaultValidateConnectionStateRequestBody$outboundSchema
  ).optional(),
}).transform((v) => {
  return remap$(v, {
    serviceId: "service_id",
    unifiedApi: "unified_api",
    requestBody: "RequestBody",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace VaultValidateConnectionStateRequest$ {
  /** @deprecated use `VaultValidateConnectionStateRequest$inboundSchema` instead. */
  export const inboundSchema =
    VaultValidateConnectionStateRequest$inboundSchema;
  /** @deprecated use `VaultValidateConnectionStateRequest$outboundSchema` instead. */
  export const outboundSchema =
    VaultValidateConnectionStateRequest$outboundSchema;
  /** @deprecated use `VaultValidateConnectionStateRequest$Outbound` instead. */
  export type Outbound = VaultValidateConnectionStateRequest$Outbound;
}

export function vaultValidateConnectionStateRequestToJSON(
  vaultValidateConnectionStateRequest: VaultValidateConnectionStateRequest,
): string {
  return JSON.stringify(
    VaultValidateConnectionStateRequest$outboundSchema.parse(
      vaultValidateConnectionStateRequest,
    ),
  );
}

export function vaultValidateConnectionStateRequestFromJSON(
  jsonString: string,
): SafeParseResult<VaultValidateConnectionStateRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      VaultValidateConnectionStateRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'VaultValidateConnectionStateRequest' from JSON`,
  );
}

/** @internal */
export const VaultValidateConnectionStateResponse$inboundSchema: z.ZodType<
  VaultValidateConnectionStateResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  HttpMeta: components.HTTPMetadata$inboundSchema,
  ValidateConnectionStateResponse: components
    .ValidateConnectionStateResponse$inboundSchema.optional(),
  UnexpectedErrorResponse: components.UnexpectedErrorResponse$inboundSchema
    .optional(),
}).transform((v) => {
  return remap$(v, {
    "HttpMeta": "httpMeta",
    "ValidateConnectionStateResponse": "validateConnectionStateResponse",
    "UnexpectedErrorResponse": "unexpectedErrorResponse",
  });
});

/** @internal */
export type VaultValidateConnectionStateResponse$Outbound = {
  HttpMeta: components.HTTPMetadata$Outbound;
  ValidateConnectionStateResponse?:
    | components.ValidateConnectionStateResponse$Outbound
    | undefined;
  UnexpectedErrorResponse?:
    | components.UnexpectedErrorResponse$Outbound
    | undefined;
};

/** @internal */
export const VaultValidateConnectionStateResponse$outboundSchema: z.ZodType<
  VaultValidateConnectionStateResponse$Outbound,
  z.ZodTypeDef,
  VaultValidateConnectionStateResponse
> = z.object({
  httpMeta: components.HTTPMetadata$outboundSchema,
  validateConnectionStateResponse: components
    .ValidateConnectionStateResponse$outboundSchema.optional(),
  unexpectedErrorResponse: components.UnexpectedErrorResponse$outboundSchema
    .optional(),
}).transform((v) => {
  return remap$(v, {
    httpMeta: "HttpMeta",
    validateConnectionStateResponse: "ValidateConnectionStateResponse",
    unexpectedErrorResponse: "UnexpectedErrorResponse",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace VaultValidateConnectionStateResponse$ {
  /** @deprecated use `VaultValidateConnectionStateResponse$inboundSchema` instead. */
  export const inboundSchema =
    VaultValidateConnectionStateResponse$inboundSchema;
  /** @deprecated use `VaultValidateConnectionStateResponse$outboundSchema` instead. */
  export const outboundSchema =
    VaultValidateConnectionStateResponse$outboundSchema;
  /** @deprecated use `VaultValidateConnectionStateResponse$Outbound` instead. */
  export type Outbound = VaultValidateConnectionStateResponse$Outbound;
}

export function vaultValidateConnectionStateResponseToJSON(
  vaultValidateConnectionStateResponse: VaultValidateConnectionStateResponse,
): string {
  return JSON.stringify(
    VaultValidateConnectionStateResponse$outboundSchema.parse(
      vaultValidateConnectionStateResponse,
    ),
  );
}

export function vaultValidateConnectionStateResponseFromJSON(
  jsonString: string,
): SafeParseResult<VaultValidateConnectionStateResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      VaultValidateConnectionStateResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'VaultValidateConnectionStateResponse' from JSON`,
  );
}

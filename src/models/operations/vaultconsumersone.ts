/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type VaultConsumersOneGlobals = {
  /**
   * The ID of your Unify application
   */
  appId?: string | undefined;
};

export type VaultConsumersOneRequest = {
  /**
   * The ID of your Unify application
   */
  appId?: string | undefined;
  /**
   * ID of the consumer to return
   */
  consumerId: string;
};

export type VaultConsumersOneResponse = {
  httpMeta: components.HTTPMetadata;
  /**
   * Consumer
   */
  getConsumerResponse?: components.GetConsumerResponse | undefined;
  /**
   * Unexpected error
   */
  unexpectedErrorResponse?: components.UnexpectedErrorResponse | undefined;
};

/** @internal */
export const VaultConsumersOneGlobals$inboundSchema: z.ZodType<
  VaultConsumersOneGlobals,
  z.ZodTypeDef,
  unknown
> = z.object({
  appId: z.string().optional(),
});

/** @internal */
export type VaultConsumersOneGlobals$Outbound = {
  appId?: string | undefined;
};

/** @internal */
export const VaultConsumersOneGlobals$outboundSchema: z.ZodType<
  VaultConsumersOneGlobals$Outbound,
  z.ZodTypeDef,
  VaultConsumersOneGlobals
> = z.object({
  appId: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace VaultConsumersOneGlobals$ {
  /** @deprecated use `VaultConsumersOneGlobals$inboundSchema` instead. */
  export const inboundSchema = VaultConsumersOneGlobals$inboundSchema;
  /** @deprecated use `VaultConsumersOneGlobals$outboundSchema` instead. */
  export const outboundSchema = VaultConsumersOneGlobals$outboundSchema;
  /** @deprecated use `VaultConsumersOneGlobals$Outbound` instead. */
  export type Outbound = VaultConsumersOneGlobals$Outbound;
}

export function vaultConsumersOneGlobalsToJSON(
  vaultConsumersOneGlobals: VaultConsumersOneGlobals,
): string {
  return JSON.stringify(
    VaultConsumersOneGlobals$outboundSchema.parse(vaultConsumersOneGlobals),
  );
}

export function vaultConsumersOneGlobalsFromJSON(
  jsonString: string,
): SafeParseResult<VaultConsumersOneGlobals, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => VaultConsumersOneGlobals$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'VaultConsumersOneGlobals' from JSON`,
  );
}

/** @internal */
export const VaultConsumersOneRequest$inboundSchema: z.ZodType<
  VaultConsumersOneRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  appId: z.string().optional(),
  consumer_id: z.string(),
}).transform((v) => {
  return remap$(v, {
    "consumer_id": "consumerId",
  });
});

/** @internal */
export type VaultConsumersOneRequest$Outbound = {
  appId?: string | undefined;
  consumer_id: string;
};

/** @internal */
export const VaultConsumersOneRequest$outboundSchema: z.ZodType<
  VaultConsumersOneRequest$Outbound,
  z.ZodTypeDef,
  VaultConsumersOneRequest
> = z.object({
  appId: z.string().optional(),
  consumerId: z.string(),
}).transform((v) => {
  return remap$(v, {
    consumerId: "consumer_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace VaultConsumersOneRequest$ {
  /** @deprecated use `VaultConsumersOneRequest$inboundSchema` instead. */
  export const inboundSchema = VaultConsumersOneRequest$inboundSchema;
  /** @deprecated use `VaultConsumersOneRequest$outboundSchema` instead. */
  export const outboundSchema = VaultConsumersOneRequest$outboundSchema;
  /** @deprecated use `VaultConsumersOneRequest$Outbound` instead. */
  export type Outbound = VaultConsumersOneRequest$Outbound;
}

export function vaultConsumersOneRequestToJSON(
  vaultConsumersOneRequest: VaultConsumersOneRequest,
): string {
  return JSON.stringify(
    VaultConsumersOneRequest$outboundSchema.parse(vaultConsumersOneRequest),
  );
}

export function vaultConsumersOneRequestFromJSON(
  jsonString: string,
): SafeParseResult<VaultConsumersOneRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => VaultConsumersOneRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'VaultConsumersOneRequest' from JSON`,
  );
}

/** @internal */
export const VaultConsumersOneResponse$inboundSchema: z.ZodType<
  VaultConsumersOneResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  HttpMeta: components.HTTPMetadata$inboundSchema,
  GetConsumerResponse: components.GetConsumerResponse$inboundSchema.optional(),
  UnexpectedErrorResponse: components.UnexpectedErrorResponse$inboundSchema
    .optional(),
}).transform((v) => {
  return remap$(v, {
    "HttpMeta": "httpMeta",
    "GetConsumerResponse": "getConsumerResponse",
    "UnexpectedErrorResponse": "unexpectedErrorResponse",
  });
});

/** @internal */
export type VaultConsumersOneResponse$Outbound = {
  HttpMeta: components.HTTPMetadata$Outbound;
  GetConsumerResponse?: components.GetConsumerResponse$Outbound | undefined;
  UnexpectedErrorResponse?:
    | components.UnexpectedErrorResponse$Outbound
    | undefined;
};

/** @internal */
export const VaultConsumersOneResponse$outboundSchema: z.ZodType<
  VaultConsumersOneResponse$Outbound,
  z.ZodTypeDef,
  VaultConsumersOneResponse
> = z.object({
  httpMeta: components.HTTPMetadata$outboundSchema,
  getConsumerResponse: components.GetConsumerResponse$outboundSchema.optional(),
  unexpectedErrorResponse: components.UnexpectedErrorResponse$outboundSchema
    .optional(),
}).transform((v) => {
  return remap$(v, {
    httpMeta: "HttpMeta",
    getConsumerResponse: "GetConsumerResponse",
    unexpectedErrorResponse: "UnexpectedErrorResponse",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace VaultConsumersOneResponse$ {
  /** @deprecated use `VaultConsumersOneResponse$inboundSchema` instead. */
  export const inboundSchema = VaultConsumersOneResponse$inboundSchema;
  /** @deprecated use `VaultConsumersOneResponse$outboundSchema` instead. */
  export const outboundSchema = VaultConsumersOneResponse$outboundSchema;
  /** @deprecated use `VaultConsumersOneResponse$Outbound` instead. */
  export type Outbound = VaultConsumersOneResponse$Outbound;
}

export function vaultConsumersOneResponseToJSON(
  vaultConsumersOneResponse: VaultConsumersOneResponse,
): string {
  return JSON.stringify(
    VaultConsumersOneResponse$outboundSchema.parse(vaultConsumersOneResponse),
  );
}

export function vaultConsumersOneResponseFromJSON(
  jsonString: string,
): SafeParseResult<VaultConsumersOneResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => VaultConsumersOneResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'VaultConsumersOneResponse' from JSON`,
  );
}

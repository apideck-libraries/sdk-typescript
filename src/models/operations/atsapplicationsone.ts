/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type AtsApplicationsOneGlobals = {
  /**
   * ID of the consumer which you want to get or push data from
   */
  consumerId?: string | undefined;
  /**
   * The ID of your Unify application
   */
  appId?: string | undefined;
};

export type AtsApplicationsOneRequest = {
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
};

export type AtsApplicationsOneResponse = {
  httpMeta: components.HTTPMetadata;
  /**
   * Applications
   */
  getApplicationResponse?: components.GetApplicationResponse | undefined;
  /**
   * Unexpected error
   */
  unexpectedErrorResponse?: components.UnexpectedErrorResponse | undefined;
};

/** @internal */
export const AtsApplicationsOneGlobals$inboundSchema: z.ZodType<
  AtsApplicationsOneGlobals,
  z.ZodTypeDef,
  unknown
> = z.object({
  consumerId: z.string().optional(),
  appId: z.string().optional(),
});

/** @internal */
export type AtsApplicationsOneGlobals$Outbound = {
  consumerId?: string | undefined;
  appId?: string | undefined;
};

/** @internal */
export const AtsApplicationsOneGlobals$outboundSchema: z.ZodType<
  AtsApplicationsOneGlobals$Outbound,
  z.ZodTypeDef,
  AtsApplicationsOneGlobals
> = z.object({
  consumerId: z.string().optional(),
  appId: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AtsApplicationsOneGlobals$ {
  /** @deprecated use `AtsApplicationsOneGlobals$inboundSchema` instead. */
  export const inboundSchema = AtsApplicationsOneGlobals$inboundSchema;
  /** @deprecated use `AtsApplicationsOneGlobals$outboundSchema` instead. */
  export const outboundSchema = AtsApplicationsOneGlobals$outboundSchema;
  /** @deprecated use `AtsApplicationsOneGlobals$Outbound` instead. */
  export type Outbound = AtsApplicationsOneGlobals$Outbound;
}

export function atsApplicationsOneGlobalsToJSON(
  atsApplicationsOneGlobals: AtsApplicationsOneGlobals,
): string {
  return JSON.stringify(
    AtsApplicationsOneGlobals$outboundSchema.parse(atsApplicationsOneGlobals),
  );
}

export function atsApplicationsOneGlobalsFromJSON(
  jsonString: string,
): SafeParseResult<AtsApplicationsOneGlobals, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => AtsApplicationsOneGlobals$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AtsApplicationsOneGlobals' from JSON`,
  );
}

/** @internal */
export const AtsApplicationsOneRequest$inboundSchema: z.ZodType<
  AtsApplicationsOneRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
  serviceId: z.string().optional(),
  raw: z.boolean().default(false),
});

/** @internal */
export type AtsApplicationsOneRequest$Outbound = {
  id: string;
  serviceId?: string | undefined;
  raw: boolean;
};

/** @internal */
export const AtsApplicationsOneRequest$outboundSchema: z.ZodType<
  AtsApplicationsOneRequest$Outbound,
  z.ZodTypeDef,
  AtsApplicationsOneRequest
> = z.object({
  id: z.string(),
  serviceId: z.string().optional(),
  raw: z.boolean().default(false),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AtsApplicationsOneRequest$ {
  /** @deprecated use `AtsApplicationsOneRequest$inboundSchema` instead. */
  export const inboundSchema = AtsApplicationsOneRequest$inboundSchema;
  /** @deprecated use `AtsApplicationsOneRequest$outboundSchema` instead. */
  export const outboundSchema = AtsApplicationsOneRequest$outboundSchema;
  /** @deprecated use `AtsApplicationsOneRequest$Outbound` instead. */
  export type Outbound = AtsApplicationsOneRequest$Outbound;
}

export function atsApplicationsOneRequestToJSON(
  atsApplicationsOneRequest: AtsApplicationsOneRequest,
): string {
  return JSON.stringify(
    AtsApplicationsOneRequest$outboundSchema.parse(atsApplicationsOneRequest),
  );
}

export function atsApplicationsOneRequestFromJSON(
  jsonString: string,
): SafeParseResult<AtsApplicationsOneRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => AtsApplicationsOneRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AtsApplicationsOneRequest' from JSON`,
  );
}

/** @internal */
export const AtsApplicationsOneResponse$inboundSchema: z.ZodType<
  AtsApplicationsOneResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  HttpMeta: components.HTTPMetadata$inboundSchema,
  GetApplicationResponse: components.GetApplicationResponse$inboundSchema
    .optional(),
  UnexpectedErrorResponse: components.UnexpectedErrorResponse$inboundSchema
    .optional(),
}).transform((v) => {
  return remap$(v, {
    "HttpMeta": "httpMeta",
    "GetApplicationResponse": "getApplicationResponse",
    "UnexpectedErrorResponse": "unexpectedErrorResponse",
  });
});

/** @internal */
export type AtsApplicationsOneResponse$Outbound = {
  HttpMeta: components.HTTPMetadata$Outbound;
  GetApplicationResponse?:
    | components.GetApplicationResponse$Outbound
    | undefined;
  UnexpectedErrorResponse?:
    | components.UnexpectedErrorResponse$Outbound
    | undefined;
};

/** @internal */
export const AtsApplicationsOneResponse$outboundSchema: z.ZodType<
  AtsApplicationsOneResponse$Outbound,
  z.ZodTypeDef,
  AtsApplicationsOneResponse
> = z.object({
  httpMeta: components.HTTPMetadata$outboundSchema,
  getApplicationResponse: components.GetApplicationResponse$outboundSchema
    .optional(),
  unexpectedErrorResponse: components.UnexpectedErrorResponse$outboundSchema
    .optional(),
}).transform((v) => {
  return remap$(v, {
    httpMeta: "HttpMeta",
    getApplicationResponse: "GetApplicationResponse",
    unexpectedErrorResponse: "UnexpectedErrorResponse",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AtsApplicationsOneResponse$ {
  /** @deprecated use `AtsApplicationsOneResponse$inboundSchema` instead. */
  export const inboundSchema = AtsApplicationsOneResponse$inboundSchema;
  /** @deprecated use `AtsApplicationsOneResponse$outboundSchema` instead. */
  export const outboundSchema = AtsApplicationsOneResponse$outboundSchema;
  /** @deprecated use `AtsApplicationsOneResponse$Outbound` instead. */
  export type Outbound = AtsApplicationsOneResponse$Outbound;
}

export function atsApplicationsOneResponseToJSON(
  atsApplicationsOneResponse: AtsApplicationsOneResponse,
): string {
  return JSON.stringify(
    AtsApplicationsOneResponse$outboundSchema.parse(atsApplicationsOneResponse),
  );
}

export function atsApplicationsOneResponseFromJSON(
  jsonString: string,
): SafeParseResult<AtsApplicationsOneResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => AtsApplicationsOneResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AtsApplicationsOneResponse' from JSON`,
  );
}

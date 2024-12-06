/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type ConnectorApiResourceCoverageOneGlobals = {
  /**
   * The ID of your Unify application
   */
  appId?: string | undefined;
};

export type ConnectorApiResourceCoverageOneRequest = {
  /**
   * ID of the record you are acting upon.
   */
  id: string;
  /**
   * ID of the resource you are acting upon.
   */
  resourceId: string;
};

export type ConnectorApiResourceCoverageOneResponse = {
  httpMeta: components.HTTPMetadata;
  /**
   * ApiResources
   */
  getApiResourceCoverageResponse?:
    | components.GetApiResourceCoverageResponse
    | undefined;
  /**
   * Unexpected error
   */
  unexpectedErrorResponse?: components.UnexpectedErrorResponse | undefined;
};

/** @internal */
export const ConnectorApiResourceCoverageOneGlobals$inboundSchema: z.ZodType<
  ConnectorApiResourceCoverageOneGlobals,
  z.ZodTypeDef,
  unknown
> = z.object({
  appId: z.string().optional(),
});

/** @internal */
export type ConnectorApiResourceCoverageOneGlobals$Outbound = {
  appId?: string | undefined;
};

/** @internal */
export const ConnectorApiResourceCoverageOneGlobals$outboundSchema: z.ZodType<
  ConnectorApiResourceCoverageOneGlobals$Outbound,
  z.ZodTypeDef,
  ConnectorApiResourceCoverageOneGlobals
> = z.object({
  appId: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ConnectorApiResourceCoverageOneGlobals$ {
  /** @deprecated use `ConnectorApiResourceCoverageOneGlobals$inboundSchema` instead. */
  export const inboundSchema =
    ConnectorApiResourceCoverageOneGlobals$inboundSchema;
  /** @deprecated use `ConnectorApiResourceCoverageOneGlobals$outboundSchema` instead. */
  export const outboundSchema =
    ConnectorApiResourceCoverageOneGlobals$outboundSchema;
  /** @deprecated use `ConnectorApiResourceCoverageOneGlobals$Outbound` instead. */
  export type Outbound = ConnectorApiResourceCoverageOneGlobals$Outbound;
}

export function connectorApiResourceCoverageOneGlobalsToJSON(
  connectorApiResourceCoverageOneGlobals:
    ConnectorApiResourceCoverageOneGlobals,
): string {
  return JSON.stringify(
    ConnectorApiResourceCoverageOneGlobals$outboundSchema.parse(
      connectorApiResourceCoverageOneGlobals,
    ),
  );
}

export function connectorApiResourceCoverageOneGlobalsFromJSON(
  jsonString: string,
): SafeParseResult<ConnectorApiResourceCoverageOneGlobals, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      ConnectorApiResourceCoverageOneGlobals$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ConnectorApiResourceCoverageOneGlobals' from JSON`,
  );
}

/** @internal */
export const ConnectorApiResourceCoverageOneRequest$inboundSchema: z.ZodType<
  ConnectorApiResourceCoverageOneRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
  resource_id: z.string(),
}).transform((v) => {
  return remap$(v, {
    "resource_id": "resourceId",
  });
});

/** @internal */
export type ConnectorApiResourceCoverageOneRequest$Outbound = {
  id: string;
  resource_id: string;
};

/** @internal */
export const ConnectorApiResourceCoverageOneRequest$outboundSchema: z.ZodType<
  ConnectorApiResourceCoverageOneRequest$Outbound,
  z.ZodTypeDef,
  ConnectorApiResourceCoverageOneRequest
> = z.object({
  id: z.string(),
  resourceId: z.string(),
}).transform((v) => {
  return remap$(v, {
    resourceId: "resource_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ConnectorApiResourceCoverageOneRequest$ {
  /** @deprecated use `ConnectorApiResourceCoverageOneRequest$inboundSchema` instead. */
  export const inboundSchema =
    ConnectorApiResourceCoverageOneRequest$inboundSchema;
  /** @deprecated use `ConnectorApiResourceCoverageOneRequest$outboundSchema` instead. */
  export const outboundSchema =
    ConnectorApiResourceCoverageOneRequest$outboundSchema;
  /** @deprecated use `ConnectorApiResourceCoverageOneRequest$Outbound` instead. */
  export type Outbound = ConnectorApiResourceCoverageOneRequest$Outbound;
}

export function connectorApiResourceCoverageOneRequestToJSON(
  connectorApiResourceCoverageOneRequest:
    ConnectorApiResourceCoverageOneRequest,
): string {
  return JSON.stringify(
    ConnectorApiResourceCoverageOneRequest$outboundSchema.parse(
      connectorApiResourceCoverageOneRequest,
    ),
  );
}

export function connectorApiResourceCoverageOneRequestFromJSON(
  jsonString: string,
): SafeParseResult<ConnectorApiResourceCoverageOneRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      ConnectorApiResourceCoverageOneRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ConnectorApiResourceCoverageOneRequest' from JSON`,
  );
}

/** @internal */
export const ConnectorApiResourceCoverageOneResponse$inboundSchema: z.ZodType<
  ConnectorApiResourceCoverageOneResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  HttpMeta: components.HTTPMetadata$inboundSchema,
  GetApiResourceCoverageResponse: components
    .GetApiResourceCoverageResponse$inboundSchema.optional(),
  UnexpectedErrorResponse: components.UnexpectedErrorResponse$inboundSchema
    .optional(),
}).transform((v) => {
  return remap$(v, {
    "HttpMeta": "httpMeta",
    "GetApiResourceCoverageResponse": "getApiResourceCoverageResponse",
    "UnexpectedErrorResponse": "unexpectedErrorResponse",
  });
});

/** @internal */
export type ConnectorApiResourceCoverageOneResponse$Outbound = {
  HttpMeta: components.HTTPMetadata$Outbound;
  GetApiResourceCoverageResponse?:
    | components.GetApiResourceCoverageResponse$Outbound
    | undefined;
  UnexpectedErrorResponse?:
    | components.UnexpectedErrorResponse$Outbound
    | undefined;
};

/** @internal */
export const ConnectorApiResourceCoverageOneResponse$outboundSchema: z.ZodType<
  ConnectorApiResourceCoverageOneResponse$Outbound,
  z.ZodTypeDef,
  ConnectorApiResourceCoverageOneResponse
> = z.object({
  httpMeta: components.HTTPMetadata$outboundSchema,
  getApiResourceCoverageResponse: components
    .GetApiResourceCoverageResponse$outboundSchema.optional(),
  unexpectedErrorResponse: components.UnexpectedErrorResponse$outboundSchema
    .optional(),
}).transform((v) => {
  return remap$(v, {
    httpMeta: "HttpMeta",
    getApiResourceCoverageResponse: "GetApiResourceCoverageResponse",
    unexpectedErrorResponse: "UnexpectedErrorResponse",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ConnectorApiResourceCoverageOneResponse$ {
  /** @deprecated use `ConnectorApiResourceCoverageOneResponse$inboundSchema` instead. */
  export const inboundSchema =
    ConnectorApiResourceCoverageOneResponse$inboundSchema;
  /** @deprecated use `ConnectorApiResourceCoverageOneResponse$outboundSchema` instead. */
  export const outboundSchema =
    ConnectorApiResourceCoverageOneResponse$outboundSchema;
  /** @deprecated use `ConnectorApiResourceCoverageOneResponse$Outbound` instead. */
  export type Outbound = ConnectorApiResourceCoverageOneResponse$Outbound;
}

export function connectorApiResourceCoverageOneResponseToJSON(
  connectorApiResourceCoverageOneResponse:
    ConnectorApiResourceCoverageOneResponse,
): string {
  return JSON.stringify(
    ConnectorApiResourceCoverageOneResponse$outboundSchema.parse(
      connectorApiResourceCoverageOneResponse,
    ),
  );
}

export function connectorApiResourceCoverageOneResponseFromJSON(
  jsonString: string,
): SafeParseResult<
  ConnectorApiResourceCoverageOneResponse,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      ConnectorApiResourceCoverageOneResponse$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'ConnectorApiResourceCoverageOneResponse' from JSON`,
  );
}

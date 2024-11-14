/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";

export type ConnectorConnectorDocsOneGlobals = {
  /**
   * The ID of your Unify application
   */
  appId?: string | undefined;
};

export type ConnectorConnectorDocsOneRequest = {
  /**
   * ID of the record you are acting upon.
   */
  id: string;
  /**
   * ID of the Doc
   */
  docId: string;
};

export type ConnectorConnectorDocsOneResponse = {
  httpMeta: components.HTTPMetadata;
  /**
   * Connectors
   */
  getConnectorDocResponse?: string | undefined;
  /**
   * Unexpected error
   */
  unexpectedErrorResponse?: components.UnexpectedErrorResponse | undefined;
};

/** @internal */
export const ConnectorConnectorDocsOneGlobals$inboundSchema: z.ZodType<
  ConnectorConnectorDocsOneGlobals,
  z.ZodTypeDef,
  unknown
> = z.object({
  appId: z.string().optional(),
});

/** @internal */
export type ConnectorConnectorDocsOneGlobals$Outbound = {
  appId?: string | undefined;
};

/** @internal */
export const ConnectorConnectorDocsOneGlobals$outboundSchema: z.ZodType<
  ConnectorConnectorDocsOneGlobals$Outbound,
  z.ZodTypeDef,
  ConnectorConnectorDocsOneGlobals
> = z.object({
  appId: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ConnectorConnectorDocsOneGlobals$ {
  /** @deprecated use `ConnectorConnectorDocsOneGlobals$inboundSchema` instead. */
  export const inboundSchema = ConnectorConnectorDocsOneGlobals$inboundSchema;
  /** @deprecated use `ConnectorConnectorDocsOneGlobals$outboundSchema` instead. */
  export const outboundSchema = ConnectorConnectorDocsOneGlobals$outboundSchema;
  /** @deprecated use `ConnectorConnectorDocsOneGlobals$Outbound` instead. */
  export type Outbound = ConnectorConnectorDocsOneGlobals$Outbound;
}

/** @internal */
export const ConnectorConnectorDocsOneRequest$inboundSchema: z.ZodType<
  ConnectorConnectorDocsOneRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
  doc_id: z.string(),
}).transform((v) => {
  return remap$(v, {
    "doc_id": "docId",
  });
});

/** @internal */
export type ConnectorConnectorDocsOneRequest$Outbound = {
  id: string;
  doc_id: string;
};

/** @internal */
export const ConnectorConnectorDocsOneRequest$outboundSchema: z.ZodType<
  ConnectorConnectorDocsOneRequest$Outbound,
  z.ZodTypeDef,
  ConnectorConnectorDocsOneRequest
> = z.object({
  id: z.string(),
  docId: z.string(),
}).transform((v) => {
  return remap$(v, {
    docId: "doc_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ConnectorConnectorDocsOneRequest$ {
  /** @deprecated use `ConnectorConnectorDocsOneRequest$inboundSchema` instead. */
  export const inboundSchema = ConnectorConnectorDocsOneRequest$inboundSchema;
  /** @deprecated use `ConnectorConnectorDocsOneRequest$outboundSchema` instead. */
  export const outboundSchema = ConnectorConnectorDocsOneRequest$outboundSchema;
  /** @deprecated use `ConnectorConnectorDocsOneRequest$Outbound` instead. */
  export type Outbound = ConnectorConnectorDocsOneRequest$Outbound;
}

/** @internal */
export const ConnectorConnectorDocsOneResponse$inboundSchema: z.ZodType<
  ConnectorConnectorDocsOneResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  HttpMeta: components.HTTPMetadata$inboundSchema,
  GetConnectorDocResponse: z.string().optional(),
  UnexpectedErrorResponse: components.UnexpectedErrorResponse$inboundSchema
    .optional(),
}).transform((v) => {
  return remap$(v, {
    "HttpMeta": "httpMeta",
    "GetConnectorDocResponse": "getConnectorDocResponse",
    "UnexpectedErrorResponse": "unexpectedErrorResponse",
  });
});

/** @internal */
export type ConnectorConnectorDocsOneResponse$Outbound = {
  HttpMeta: components.HTTPMetadata$Outbound;
  GetConnectorDocResponse?: string | undefined;
  UnexpectedErrorResponse?:
    | components.UnexpectedErrorResponse$Outbound
    | undefined;
};

/** @internal */
export const ConnectorConnectorDocsOneResponse$outboundSchema: z.ZodType<
  ConnectorConnectorDocsOneResponse$Outbound,
  z.ZodTypeDef,
  ConnectorConnectorDocsOneResponse
> = z.object({
  httpMeta: components.HTTPMetadata$outboundSchema,
  getConnectorDocResponse: z.string().optional(),
  unexpectedErrorResponse: components.UnexpectedErrorResponse$outboundSchema
    .optional(),
}).transform((v) => {
  return remap$(v, {
    httpMeta: "HttpMeta",
    getConnectorDocResponse: "GetConnectorDocResponse",
    unexpectedErrorResponse: "UnexpectedErrorResponse",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ConnectorConnectorDocsOneResponse$ {
  /** @deprecated use `ConnectorConnectorDocsOneResponse$inboundSchema` instead. */
  export const inboundSchema = ConnectorConnectorDocsOneResponse$inboundSchema;
  /** @deprecated use `ConnectorConnectorDocsOneResponse$outboundSchema` instead. */
  export const outboundSchema =
    ConnectorConnectorDocsOneResponse$outboundSchema;
  /** @deprecated use `ConnectorConnectorDocsOneResponse$Outbound` instead. */
  export type Outbound = ConnectorConnectorDocsOneResponse$Outbound;
}

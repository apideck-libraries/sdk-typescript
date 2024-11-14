/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";

export type WebhookWebhooksDeleteGlobals = {
  /**
   * The ID of your Unify application
   */
  appId?: string | undefined;
};

export type WebhookWebhooksDeleteRequest = {
  /**
   * JWT Webhook token that represents the unifiedApi and applicationId associated to the event source.
   */
  id: string;
};

export type WebhookWebhooksDeleteResponse = {
  httpMeta: components.HTTPMetadata;
  /**
   * Webhooks
   */
  deleteWebhookResponse?: components.DeleteWebhookResponse | undefined;
  /**
   * Unexpected error
   */
  unexpectedErrorResponse?: components.UnexpectedErrorResponse | undefined;
};

/** @internal */
export const WebhookWebhooksDeleteGlobals$inboundSchema: z.ZodType<
  WebhookWebhooksDeleteGlobals,
  z.ZodTypeDef,
  unknown
> = z.object({
  appId: z.string().optional(),
});

/** @internal */
export type WebhookWebhooksDeleteGlobals$Outbound = {
  appId?: string | undefined;
};

/** @internal */
export const WebhookWebhooksDeleteGlobals$outboundSchema: z.ZodType<
  WebhookWebhooksDeleteGlobals$Outbound,
  z.ZodTypeDef,
  WebhookWebhooksDeleteGlobals
> = z.object({
  appId: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace WebhookWebhooksDeleteGlobals$ {
  /** @deprecated use `WebhookWebhooksDeleteGlobals$inboundSchema` instead. */
  export const inboundSchema = WebhookWebhooksDeleteGlobals$inboundSchema;
  /** @deprecated use `WebhookWebhooksDeleteGlobals$outboundSchema` instead. */
  export const outboundSchema = WebhookWebhooksDeleteGlobals$outboundSchema;
  /** @deprecated use `WebhookWebhooksDeleteGlobals$Outbound` instead. */
  export type Outbound = WebhookWebhooksDeleteGlobals$Outbound;
}

/** @internal */
export const WebhookWebhooksDeleteRequest$inboundSchema: z.ZodType<
  WebhookWebhooksDeleteRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
});

/** @internal */
export type WebhookWebhooksDeleteRequest$Outbound = {
  id: string;
};

/** @internal */
export const WebhookWebhooksDeleteRequest$outboundSchema: z.ZodType<
  WebhookWebhooksDeleteRequest$Outbound,
  z.ZodTypeDef,
  WebhookWebhooksDeleteRequest
> = z.object({
  id: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace WebhookWebhooksDeleteRequest$ {
  /** @deprecated use `WebhookWebhooksDeleteRequest$inboundSchema` instead. */
  export const inboundSchema = WebhookWebhooksDeleteRequest$inboundSchema;
  /** @deprecated use `WebhookWebhooksDeleteRequest$outboundSchema` instead. */
  export const outboundSchema = WebhookWebhooksDeleteRequest$outboundSchema;
  /** @deprecated use `WebhookWebhooksDeleteRequest$Outbound` instead. */
  export type Outbound = WebhookWebhooksDeleteRequest$Outbound;
}

/** @internal */
export const WebhookWebhooksDeleteResponse$inboundSchema: z.ZodType<
  WebhookWebhooksDeleteResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  HttpMeta: components.HTTPMetadata$inboundSchema,
  DeleteWebhookResponse: components.DeleteWebhookResponse$inboundSchema
    .optional(),
  UnexpectedErrorResponse: components.UnexpectedErrorResponse$inboundSchema
    .optional(),
}).transform((v) => {
  return remap$(v, {
    "HttpMeta": "httpMeta",
    "DeleteWebhookResponse": "deleteWebhookResponse",
    "UnexpectedErrorResponse": "unexpectedErrorResponse",
  });
});

/** @internal */
export type WebhookWebhooksDeleteResponse$Outbound = {
  HttpMeta: components.HTTPMetadata$Outbound;
  DeleteWebhookResponse?: components.DeleteWebhookResponse$Outbound | undefined;
  UnexpectedErrorResponse?:
    | components.UnexpectedErrorResponse$Outbound
    | undefined;
};

/** @internal */
export const WebhookWebhooksDeleteResponse$outboundSchema: z.ZodType<
  WebhookWebhooksDeleteResponse$Outbound,
  z.ZodTypeDef,
  WebhookWebhooksDeleteResponse
> = z.object({
  httpMeta: components.HTTPMetadata$outboundSchema,
  deleteWebhookResponse: components.DeleteWebhookResponse$outboundSchema
    .optional(),
  unexpectedErrorResponse: components.UnexpectedErrorResponse$outboundSchema
    .optional(),
}).transform((v) => {
  return remap$(v, {
    httpMeta: "HttpMeta",
    deleteWebhookResponse: "DeleteWebhookResponse",
    unexpectedErrorResponse: "UnexpectedErrorResponse",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace WebhookWebhooksDeleteResponse$ {
  /** @deprecated use `WebhookWebhooksDeleteResponse$inboundSchema` instead. */
  export const inboundSchema = WebhookWebhooksDeleteResponse$inboundSchema;
  /** @deprecated use `WebhookWebhooksDeleteResponse$outboundSchema` instead. */
  export const outboundSchema = WebhookWebhooksDeleteResponse$outboundSchema;
  /** @deprecated use `WebhookWebhooksDeleteResponse$Outbound` instead. */
  export type Outbound = WebhookWebhooksDeleteResponse$Outbound;
}

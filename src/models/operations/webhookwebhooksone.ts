/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type WebhookWebhooksOneGlobals = {
  /**
   * The ID of your Unify application
   */
  appId?: string | undefined;
};

export type WebhookWebhooksOneRequest = {
  /**
   * JWT Webhook token that represents the unifiedApi and applicationId associated to the event source.
   */
  id: string;
};

export type WebhookWebhooksOneResponse = {
  httpMeta: components.HTTPMetadata;
  /**
   * Webhooks
   */
  getWebhookResponse?: components.GetWebhookResponse | undefined;
  /**
   * Unexpected error
   */
  unexpectedErrorResponse?: components.UnexpectedErrorResponse | undefined;
};

/** @internal */
export const WebhookWebhooksOneGlobals$inboundSchema: z.ZodType<
  WebhookWebhooksOneGlobals,
  z.ZodTypeDef,
  unknown
> = z.object({
  appId: z.string().optional(),
});

/** @internal */
export type WebhookWebhooksOneGlobals$Outbound = {
  appId?: string | undefined;
};

/** @internal */
export const WebhookWebhooksOneGlobals$outboundSchema: z.ZodType<
  WebhookWebhooksOneGlobals$Outbound,
  z.ZodTypeDef,
  WebhookWebhooksOneGlobals
> = z.object({
  appId: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace WebhookWebhooksOneGlobals$ {
  /** @deprecated use `WebhookWebhooksOneGlobals$inboundSchema` instead. */
  export const inboundSchema = WebhookWebhooksOneGlobals$inboundSchema;
  /** @deprecated use `WebhookWebhooksOneGlobals$outboundSchema` instead. */
  export const outboundSchema = WebhookWebhooksOneGlobals$outboundSchema;
  /** @deprecated use `WebhookWebhooksOneGlobals$Outbound` instead. */
  export type Outbound = WebhookWebhooksOneGlobals$Outbound;
}

export function webhookWebhooksOneGlobalsToJSON(
  webhookWebhooksOneGlobals: WebhookWebhooksOneGlobals,
): string {
  return JSON.stringify(
    WebhookWebhooksOneGlobals$outboundSchema.parse(webhookWebhooksOneGlobals),
  );
}

export function webhookWebhooksOneGlobalsFromJSON(
  jsonString: string,
): SafeParseResult<WebhookWebhooksOneGlobals, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => WebhookWebhooksOneGlobals$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'WebhookWebhooksOneGlobals' from JSON`,
  );
}

/** @internal */
export const WebhookWebhooksOneRequest$inboundSchema: z.ZodType<
  WebhookWebhooksOneRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
});

/** @internal */
export type WebhookWebhooksOneRequest$Outbound = {
  id: string;
};

/** @internal */
export const WebhookWebhooksOneRequest$outboundSchema: z.ZodType<
  WebhookWebhooksOneRequest$Outbound,
  z.ZodTypeDef,
  WebhookWebhooksOneRequest
> = z.object({
  id: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace WebhookWebhooksOneRequest$ {
  /** @deprecated use `WebhookWebhooksOneRequest$inboundSchema` instead. */
  export const inboundSchema = WebhookWebhooksOneRequest$inboundSchema;
  /** @deprecated use `WebhookWebhooksOneRequest$outboundSchema` instead. */
  export const outboundSchema = WebhookWebhooksOneRequest$outboundSchema;
  /** @deprecated use `WebhookWebhooksOneRequest$Outbound` instead. */
  export type Outbound = WebhookWebhooksOneRequest$Outbound;
}

export function webhookWebhooksOneRequestToJSON(
  webhookWebhooksOneRequest: WebhookWebhooksOneRequest,
): string {
  return JSON.stringify(
    WebhookWebhooksOneRequest$outboundSchema.parse(webhookWebhooksOneRequest),
  );
}

export function webhookWebhooksOneRequestFromJSON(
  jsonString: string,
): SafeParseResult<WebhookWebhooksOneRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => WebhookWebhooksOneRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'WebhookWebhooksOneRequest' from JSON`,
  );
}

/** @internal */
export const WebhookWebhooksOneResponse$inboundSchema: z.ZodType<
  WebhookWebhooksOneResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  HttpMeta: components.HTTPMetadata$inboundSchema,
  GetWebhookResponse: components.GetWebhookResponse$inboundSchema.optional(),
  UnexpectedErrorResponse: components.UnexpectedErrorResponse$inboundSchema
    .optional(),
}).transform((v) => {
  return remap$(v, {
    "HttpMeta": "httpMeta",
    "GetWebhookResponse": "getWebhookResponse",
    "UnexpectedErrorResponse": "unexpectedErrorResponse",
  });
});

/** @internal */
export type WebhookWebhooksOneResponse$Outbound = {
  HttpMeta: components.HTTPMetadata$Outbound;
  GetWebhookResponse?: components.GetWebhookResponse$Outbound | undefined;
  UnexpectedErrorResponse?:
    | components.UnexpectedErrorResponse$Outbound
    | undefined;
};

/** @internal */
export const WebhookWebhooksOneResponse$outboundSchema: z.ZodType<
  WebhookWebhooksOneResponse$Outbound,
  z.ZodTypeDef,
  WebhookWebhooksOneResponse
> = z.object({
  httpMeta: components.HTTPMetadata$outboundSchema,
  getWebhookResponse: components.GetWebhookResponse$outboundSchema.optional(),
  unexpectedErrorResponse: components.UnexpectedErrorResponse$outboundSchema
    .optional(),
}).transform((v) => {
  return remap$(v, {
    httpMeta: "HttpMeta",
    getWebhookResponse: "GetWebhookResponse",
    unexpectedErrorResponse: "UnexpectedErrorResponse",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace WebhookWebhooksOneResponse$ {
  /** @deprecated use `WebhookWebhooksOneResponse$inboundSchema` instead. */
  export const inboundSchema = WebhookWebhooksOneResponse$inboundSchema;
  /** @deprecated use `WebhookWebhooksOneResponse$outboundSchema` instead. */
  export const outboundSchema = WebhookWebhooksOneResponse$outboundSchema;
  /** @deprecated use `WebhookWebhooksOneResponse$Outbound` instead. */
  export type Outbound = WebhookWebhooksOneResponse$Outbound;
}

export function webhookWebhooksOneResponseToJSON(
  webhookWebhooksOneResponse: WebhookWebhooksOneResponse,
): string {
  return JSON.stringify(
    WebhookWebhooksOneResponse$outboundSchema.parse(webhookWebhooksOneResponse),
  );
}

export function webhookWebhooksOneResponseFromJSON(
  jsonString: string,
): SafeParseResult<WebhookWebhooksOneResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => WebhookWebhooksOneResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'WebhookWebhooksOneResponse' from JSON`,
  );
}

/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import {
  Status,
  Status$inboundSchema,
  Status$outboundSchema,
} from "./status.js";
import {
  UnifiedApiId,
  UnifiedApiId$inboundSchema,
  UnifiedApiId$outboundSchema,
} from "./unifiedapiid.js";
import {
  WebhookEventType,
  WebhookEventType$inboundSchema,
  WebhookEventType$outboundSchema,
} from "./webhookeventtype.js";

export type CreateWebhookRequest = {
  /**
   * A description of the object.
   */
  description?: string | null | undefined;
  /**
   * Name of Apideck Unified API
   */
  unifiedApi: UnifiedApiId;
  /**
   * The status of the webhook.
   */
  status: Status;
  /**
   * The delivery url of the webhook endpoint.
   */
  deliveryUrl: string;
  /**
   * The list of subscribed events for this webhook. [`*`] indicates that all events are enabled.
   */
  events: Array<WebhookEventType>;
};

/** @internal */
export const CreateWebhookRequest$inboundSchema: z.ZodType<
  CreateWebhookRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  description: z.nullable(z.string()).optional(),
  unified_api: UnifiedApiId$inboundSchema,
  status: Status$inboundSchema,
  delivery_url: z.string(),
  events: z.array(WebhookEventType$inboundSchema),
}).transform((v) => {
  return remap$(v, {
    "unified_api": "unifiedApi",
    "delivery_url": "deliveryUrl",
  });
});

/** @internal */
export type CreateWebhookRequest$Outbound = {
  description?: string | null | undefined;
  unified_api: string;
  status: string;
  delivery_url: string;
  events: Array<string>;
};

/** @internal */
export const CreateWebhookRequest$outboundSchema: z.ZodType<
  CreateWebhookRequest$Outbound,
  z.ZodTypeDef,
  CreateWebhookRequest
> = z.object({
  description: z.nullable(z.string()).optional(),
  unifiedApi: UnifiedApiId$outboundSchema,
  status: Status$outboundSchema,
  deliveryUrl: z.string(),
  events: z.array(WebhookEventType$outboundSchema),
}).transform((v) => {
  return remap$(v, {
    unifiedApi: "unified_api",
    deliveryUrl: "delivery_url",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateWebhookRequest$ {
  /** @deprecated use `CreateWebhookRequest$inboundSchema` instead. */
  export const inboundSchema = CreateWebhookRequest$inboundSchema;
  /** @deprecated use `CreateWebhookRequest$outboundSchema` instead. */
  export const outboundSchema = CreateWebhookRequest$outboundSchema;
  /** @deprecated use `CreateWebhookRequest$Outbound` instead. */
  export type Outbound = CreateWebhookRequest$Outbound;
}

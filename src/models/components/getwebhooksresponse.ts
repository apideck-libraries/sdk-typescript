/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import {
  Links,
  Links$inboundSchema,
  Links$Outbound,
  Links$outboundSchema,
} from "./links.js";
import {
  Meta,
  Meta$inboundSchema,
  Meta$Outbound,
  Meta$outboundSchema,
} from "./meta.js";
import {
  Webhook,
  Webhook$inboundSchema,
  Webhook$Outbound,
  Webhook$outboundSchema,
} from "./webhook.js";

/**
 * Webhooks
 */
export type GetWebhooksResponse = {
  /**
   * HTTP Response Status Code
   */
  statusCode: number;
  /**
   * HTTP Response Status
   */
  status: string;
  data: Array<Webhook>;
  /**
   * Response metadata
   */
  meta?: Meta | undefined;
  /**
   * Links to navigate to previous or next pages through the API
   */
  links?: Links | undefined;
};

/** @internal */
export const GetWebhooksResponse$inboundSchema: z.ZodType<
  GetWebhooksResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  status_code: z.number().int(),
  status: z.string(),
  data: z.array(Webhook$inboundSchema),
  meta: Meta$inboundSchema.optional(),
  links: Links$inboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    "status_code": "statusCode",
  });
});

/** @internal */
export type GetWebhooksResponse$Outbound = {
  status_code: number;
  status: string;
  data: Array<Webhook$Outbound>;
  meta?: Meta$Outbound | undefined;
  links?: Links$Outbound | undefined;
};

/** @internal */
export const GetWebhooksResponse$outboundSchema: z.ZodType<
  GetWebhooksResponse$Outbound,
  z.ZodTypeDef,
  GetWebhooksResponse
> = z.object({
  statusCode: z.number().int(),
  status: z.string(),
  data: z.array(Webhook$outboundSchema),
  meta: Meta$outboundSchema.optional(),
  links: Links$outboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    statusCode: "status_code",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetWebhooksResponse$ {
  /** @deprecated use `GetWebhooksResponse$inboundSchema` instead. */
  export const inboundSchema = GetWebhooksResponse$inboundSchema;
  /** @deprecated use `GetWebhooksResponse$outboundSchema` instead. */
  export const outboundSchema = GetWebhooksResponse$outboundSchema;
  /** @deprecated use `GetWebhooksResponse$Outbound` instead. */
  export type Outbound = GetWebhooksResponse$Outbound;
}

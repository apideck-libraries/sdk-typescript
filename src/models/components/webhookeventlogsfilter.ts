/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type WebhookEventLogsFilterService = {
  id?: string | undefined;
};

export type WebhookEventLogsFilter = {
  excludeApis?: string | null | undefined;
  service?: WebhookEventLogsFilterService | null | undefined;
  consumerId?: string | null | undefined;
  entityType?: string | null | undefined;
  eventType?: string | null | undefined;
};

/** @internal */
export const WebhookEventLogsFilterService$inboundSchema: z.ZodType<
  WebhookEventLogsFilterService,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string().optional(),
});

/** @internal */
export type WebhookEventLogsFilterService$Outbound = {
  id?: string | undefined;
};

/** @internal */
export const WebhookEventLogsFilterService$outboundSchema: z.ZodType<
  WebhookEventLogsFilterService$Outbound,
  z.ZodTypeDef,
  WebhookEventLogsFilterService
> = z.object({
  id: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace WebhookEventLogsFilterService$ {
  /** @deprecated use `WebhookEventLogsFilterService$inboundSchema` instead. */
  export const inboundSchema = WebhookEventLogsFilterService$inboundSchema;
  /** @deprecated use `WebhookEventLogsFilterService$outboundSchema` instead. */
  export const outboundSchema = WebhookEventLogsFilterService$outboundSchema;
  /** @deprecated use `WebhookEventLogsFilterService$Outbound` instead. */
  export type Outbound = WebhookEventLogsFilterService$Outbound;
}

export function webhookEventLogsFilterServiceToJSON(
  webhookEventLogsFilterService: WebhookEventLogsFilterService,
): string {
  return JSON.stringify(
    WebhookEventLogsFilterService$outboundSchema.parse(
      webhookEventLogsFilterService,
    ),
  );
}

export function webhookEventLogsFilterServiceFromJSON(
  jsonString: string,
): SafeParseResult<WebhookEventLogsFilterService, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => WebhookEventLogsFilterService$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'WebhookEventLogsFilterService' from JSON`,
  );
}

/** @internal */
export const WebhookEventLogsFilter$inboundSchema: z.ZodType<
  WebhookEventLogsFilter,
  z.ZodTypeDef,
  unknown
> = z.object({
  exclude_apis: z.nullable(z.string()).optional(),
  service: z.nullable(z.lazy(() => WebhookEventLogsFilterService$inboundSchema))
    .optional(),
  consumer_id: z.nullable(z.string()).optional(),
  entity_type: z.nullable(z.string()).optional(),
  event_type: z.nullable(z.string()).optional(),
}).transform((v) => {
  return remap$(v, {
    "exclude_apis": "excludeApis",
    "consumer_id": "consumerId",
    "entity_type": "entityType",
    "event_type": "eventType",
  });
});

/** @internal */
export type WebhookEventLogsFilter$Outbound = {
  exclude_apis?: string | null | undefined;
  service?: WebhookEventLogsFilterService$Outbound | null | undefined;
  consumer_id?: string | null | undefined;
  entity_type?: string | null | undefined;
  event_type?: string | null | undefined;
};

/** @internal */
export const WebhookEventLogsFilter$outboundSchema: z.ZodType<
  WebhookEventLogsFilter$Outbound,
  z.ZodTypeDef,
  WebhookEventLogsFilter
> = z.object({
  excludeApis: z.nullable(z.string()).optional(),
  service: z.nullable(
    z.lazy(() => WebhookEventLogsFilterService$outboundSchema),
  ).optional(),
  consumerId: z.nullable(z.string()).optional(),
  entityType: z.nullable(z.string()).optional(),
  eventType: z.nullable(z.string()).optional(),
}).transform((v) => {
  return remap$(v, {
    excludeApis: "exclude_apis",
    consumerId: "consumer_id",
    entityType: "entity_type",
    eventType: "event_type",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace WebhookEventLogsFilter$ {
  /** @deprecated use `WebhookEventLogsFilter$inboundSchema` instead. */
  export const inboundSchema = WebhookEventLogsFilter$inboundSchema;
  /** @deprecated use `WebhookEventLogsFilter$outboundSchema` instead. */
  export const outboundSchema = WebhookEventLogsFilter$outboundSchema;
  /** @deprecated use `WebhookEventLogsFilter$Outbound` instead. */
  export type Outbound = WebhookEventLogsFilter$Outbound;
}

export function webhookEventLogsFilterToJSON(
  webhookEventLogsFilter: WebhookEventLogsFilter,
): string {
  return JSON.stringify(
    WebhookEventLogsFilter$outboundSchema.parse(webhookEventLogsFilter),
  );
}

export function webhookEventLogsFilterFromJSON(
  jsonString: string,
): SafeParseResult<WebhookEventLogsFilter, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => WebhookEventLogsFilter$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'WebhookEventLogsFilter' from JSON`,
  );
}

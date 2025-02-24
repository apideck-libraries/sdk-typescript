/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  Webhook,
  Webhook$inboundSchema,
  Webhook$Outbound,
  Webhook$outboundSchema,
} from "./webhook.js";

/**
 * Webhooks
 */
export type UpdateWebhookResponse = {
  /**
   * HTTP Response Status Code
   */
  statusCode: number;
  /**
   * HTTP Response Status
   */
  status: string;
  data: Webhook;
  /**
   * Raw response from the integration when raw=true query param is provided
   */
  raw?: { [k: string]: any } | null | undefined;
};

/** @internal */
export const UpdateWebhookResponse$inboundSchema: z.ZodType<
  UpdateWebhookResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  status_code: z.number().int(),
  status: z.string(),
  data: Webhook$inboundSchema,
  _raw: z.nullable(z.record(z.any())).optional(),
}).transform((v) => {
  return remap$(v, {
    "status_code": "statusCode",
    "_raw": "raw",
  });
});

/** @internal */
export type UpdateWebhookResponse$Outbound = {
  status_code: number;
  status: string;
  data: Webhook$Outbound;
  _raw?: { [k: string]: any } | null | undefined;
};

/** @internal */
export const UpdateWebhookResponse$outboundSchema: z.ZodType<
  UpdateWebhookResponse$Outbound,
  z.ZodTypeDef,
  UpdateWebhookResponse
> = z.object({
  statusCode: z.number().int(),
  status: z.string(),
  data: Webhook$outboundSchema,
  raw: z.nullable(z.record(z.any())).optional(),
}).transform((v) => {
  return remap$(v, {
    statusCode: "status_code",
    raw: "_raw",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UpdateWebhookResponse$ {
  /** @deprecated use `UpdateWebhookResponse$inboundSchema` instead. */
  export const inboundSchema = UpdateWebhookResponse$inboundSchema;
  /** @deprecated use `UpdateWebhookResponse$outboundSchema` instead. */
  export const outboundSchema = UpdateWebhookResponse$outboundSchema;
  /** @deprecated use `UpdateWebhookResponse$Outbound` instead. */
  export type Outbound = UpdateWebhookResponse$Outbound;
}

export function updateWebhookResponseToJSON(
  updateWebhookResponse: UpdateWebhookResponse,
): string {
  return JSON.stringify(
    UpdateWebhookResponse$outboundSchema.parse(updateWebhookResponse),
  );
}

export function updateWebhookResponseFromJSON(
  jsonString: string,
): SafeParseResult<UpdateWebhookResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => UpdateWebhookResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'UpdateWebhookResponse' from JSON`,
  );
}

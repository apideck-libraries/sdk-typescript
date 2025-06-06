/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  UnifiedId,
  UnifiedId$inboundSchema,
  UnifiedId$Outbound,
  UnifiedId$outboundSchema,
} from "./unifiedid.js";

/**
 * Messages
 */
export type CreateMessageResponse = {
  /**
   * HTTP Response Status Code
   */
  statusCode: number;
  /**
   * HTTP Response Status
   */
  status: string;
  /**
   * Apideck ID of service provider
   */
  service: string;
  /**
   * Unified API resource name
   */
  resource: string;
  /**
   * Operation performed
   */
  operation: string;
  /**
   * A object containing a unique identifier for the resource that was created, updated, or deleted.
   */
  data: UnifiedId;
  /**
   * Raw response from the integration when raw=true query param is provided
   */
  raw?: { [k: string]: any } | null | undefined;
};

/** @internal */
export const CreateMessageResponse$inboundSchema: z.ZodType<
  CreateMessageResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  status_code: z.number().int(),
  status: z.string(),
  service: z.string(),
  resource: z.string(),
  operation: z.string(),
  data: UnifiedId$inboundSchema,
  _raw: z.nullable(z.record(z.any())).optional(),
}).transform((v) => {
  return remap$(v, {
    "status_code": "statusCode",
    "_raw": "raw",
  });
});

/** @internal */
export type CreateMessageResponse$Outbound = {
  status_code: number;
  status: string;
  service: string;
  resource: string;
  operation: string;
  data: UnifiedId$Outbound;
  _raw?: { [k: string]: any } | null | undefined;
};

/** @internal */
export const CreateMessageResponse$outboundSchema: z.ZodType<
  CreateMessageResponse$Outbound,
  z.ZodTypeDef,
  CreateMessageResponse
> = z.object({
  statusCode: z.number().int(),
  status: z.string(),
  service: z.string(),
  resource: z.string(),
  operation: z.string(),
  data: UnifiedId$outboundSchema,
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
export namespace CreateMessageResponse$ {
  /** @deprecated use `CreateMessageResponse$inboundSchema` instead. */
  export const inboundSchema = CreateMessageResponse$inboundSchema;
  /** @deprecated use `CreateMessageResponse$outboundSchema` instead. */
  export const outboundSchema = CreateMessageResponse$outboundSchema;
  /** @deprecated use `CreateMessageResponse$Outbound` instead. */
  export type Outbound = CreateMessageResponse$Outbound;
}

export function createMessageResponseToJSON(
  createMessageResponse: CreateMessageResponse,
): string {
  return JSON.stringify(
    CreateMessageResponse$outboundSchema.parse(createMessageResponse),
  );
}

export function createMessageResponseFromJSON(
  jsonString: string,
): SafeParseResult<CreateMessageResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CreateMessageResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreateMessageResponse' from JSON`,
  );
}

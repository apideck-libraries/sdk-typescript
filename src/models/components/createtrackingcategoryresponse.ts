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
 * Tracking category created
 */
export type CreateTrackingCategoryResponse = {
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
export const CreateTrackingCategoryResponse$inboundSchema: z.ZodType<
  CreateTrackingCategoryResponse,
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
export type CreateTrackingCategoryResponse$Outbound = {
  status_code: number;
  status: string;
  service: string;
  resource: string;
  operation: string;
  data: UnifiedId$Outbound;
  _raw?: { [k: string]: any } | null | undefined;
};

/** @internal */
export const CreateTrackingCategoryResponse$outboundSchema: z.ZodType<
  CreateTrackingCategoryResponse$Outbound,
  z.ZodTypeDef,
  CreateTrackingCategoryResponse
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
export namespace CreateTrackingCategoryResponse$ {
  /** @deprecated use `CreateTrackingCategoryResponse$inboundSchema` instead. */
  export const inboundSchema = CreateTrackingCategoryResponse$inboundSchema;
  /** @deprecated use `CreateTrackingCategoryResponse$outboundSchema` instead. */
  export const outboundSchema = CreateTrackingCategoryResponse$outboundSchema;
  /** @deprecated use `CreateTrackingCategoryResponse$Outbound` instead. */
  export type Outbound = CreateTrackingCategoryResponse$Outbound;
}

export function createTrackingCategoryResponseToJSON(
  createTrackingCategoryResponse: CreateTrackingCategoryResponse,
): string {
  return JSON.stringify(
    CreateTrackingCategoryResponse$outboundSchema.parse(
      createTrackingCategoryResponse,
    ),
  );
}

export function createTrackingCategoryResponseFromJSON(
  jsonString: string,
): SafeParseResult<CreateTrackingCategoryResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CreateTrackingCategoryResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreateTrackingCategoryResponse' from JSON`,
  );
}

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
 * Applications
 */
export type CreateApplicationResponse = {
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
};

/** @internal */
export const CreateApplicationResponse$inboundSchema: z.ZodType<
  CreateApplicationResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  status_code: z.number().int(),
  status: z.string(),
  service: z.string(),
  resource: z.string(),
  operation: z.string(),
  data: UnifiedId$inboundSchema,
}).transform((v) => {
  return remap$(v, {
    "status_code": "statusCode",
  });
});

/** @internal */
export type CreateApplicationResponse$Outbound = {
  status_code: number;
  status: string;
  service: string;
  resource: string;
  operation: string;
  data: UnifiedId$Outbound;
};

/** @internal */
export const CreateApplicationResponse$outboundSchema: z.ZodType<
  CreateApplicationResponse$Outbound,
  z.ZodTypeDef,
  CreateApplicationResponse
> = z.object({
  statusCode: z.number().int(),
  status: z.string(),
  service: z.string(),
  resource: z.string(),
  operation: z.string(),
  data: UnifiedId$outboundSchema,
}).transform((v) => {
  return remap$(v, {
    statusCode: "status_code",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateApplicationResponse$ {
  /** @deprecated use `CreateApplicationResponse$inboundSchema` instead. */
  export const inboundSchema = CreateApplicationResponse$inboundSchema;
  /** @deprecated use `CreateApplicationResponse$outboundSchema` instead. */
  export const outboundSchema = CreateApplicationResponse$outboundSchema;
  /** @deprecated use `CreateApplicationResponse$Outbound` instead. */
  export type Outbound = CreateApplicationResponse$Outbound;
}

export function createApplicationResponseToJSON(
  createApplicationResponse: CreateApplicationResponse,
): string {
  return JSON.stringify(
    CreateApplicationResponse$outboundSchema.parse(createApplicationResponse),
  );
}

export function createApplicationResponseFromJSON(
  jsonString: string,
): SafeParseResult<CreateApplicationResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CreateApplicationResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreateApplicationResponse' from JSON`,
  );
}

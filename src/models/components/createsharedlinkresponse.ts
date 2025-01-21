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
 * Shared Links
 */
export type CreateSharedLinkResponse = {
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
export const CreateSharedLinkResponse$inboundSchema: z.ZodType<
  CreateSharedLinkResponse,
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
export type CreateSharedLinkResponse$Outbound = {
  status_code: number;
  status: string;
  service: string;
  resource: string;
  operation: string;
  data: UnifiedId$Outbound;
};

/** @internal */
export const CreateSharedLinkResponse$outboundSchema: z.ZodType<
  CreateSharedLinkResponse$Outbound,
  z.ZodTypeDef,
  CreateSharedLinkResponse
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
export namespace CreateSharedLinkResponse$ {
  /** @deprecated use `CreateSharedLinkResponse$inboundSchema` instead. */
  export const inboundSchema = CreateSharedLinkResponse$inboundSchema;
  /** @deprecated use `CreateSharedLinkResponse$outboundSchema` instead. */
  export const outboundSchema = CreateSharedLinkResponse$outboundSchema;
  /** @deprecated use `CreateSharedLinkResponse$Outbound` instead. */
  export type Outbound = CreateSharedLinkResponse$Outbound;
}

export function createSharedLinkResponseToJSON(
  createSharedLinkResponse: CreateSharedLinkResponse,
): string {
  return JSON.stringify(
    CreateSharedLinkResponse$outboundSchema.parse(createSharedLinkResponse),
  );
}

export function createSharedLinkResponseFromJSON(
  jsonString: string,
): SafeParseResult<CreateSharedLinkResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CreateSharedLinkResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreateSharedLinkResponse' from JSON`,
  );
}

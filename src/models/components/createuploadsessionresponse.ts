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
 * UploadSessions
 */
export type CreateUploadSessionResponse = {
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
  data: UnifiedId;
};

/** @internal */
export const CreateUploadSessionResponse$inboundSchema: z.ZodType<
  CreateUploadSessionResponse,
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
export type CreateUploadSessionResponse$Outbound = {
  status_code: number;
  status: string;
  service: string;
  resource: string;
  operation: string;
  data: UnifiedId$Outbound;
};

/** @internal */
export const CreateUploadSessionResponse$outboundSchema: z.ZodType<
  CreateUploadSessionResponse$Outbound,
  z.ZodTypeDef,
  CreateUploadSessionResponse
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
export namespace CreateUploadSessionResponse$ {
  /** @deprecated use `CreateUploadSessionResponse$inboundSchema` instead. */
  export const inboundSchema = CreateUploadSessionResponse$inboundSchema;
  /** @deprecated use `CreateUploadSessionResponse$outboundSchema` instead. */
  export const outboundSchema = CreateUploadSessionResponse$outboundSchema;
  /** @deprecated use `CreateUploadSessionResponse$Outbound` instead. */
  export type Outbound = CreateUploadSessionResponse$Outbound;
}

export function createUploadSessionResponseToJSON(
  createUploadSessionResponse: CreateUploadSessionResponse,
): string {
  return JSON.stringify(
    CreateUploadSessionResponse$outboundSchema.parse(
      createUploadSessionResponse,
    ),
  );
}

export function createUploadSessionResponseFromJSON(
  jsonString: string,
): SafeParseResult<CreateUploadSessionResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CreateUploadSessionResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreateUploadSessionResponse' from JSON`,
  );
}

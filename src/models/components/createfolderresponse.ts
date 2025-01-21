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
 * Folders
 */
export type CreateFolderResponse = {
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
export const CreateFolderResponse$inboundSchema: z.ZodType<
  CreateFolderResponse,
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
export type CreateFolderResponse$Outbound = {
  status_code: number;
  status: string;
  service: string;
  resource: string;
  operation: string;
  data: UnifiedId$Outbound;
};

/** @internal */
export const CreateFolderResponse$outboundSchema: z.ZodType<
  CreateFolderResponse$Outbound,
  z.ZodTypeDef,
  CreateFolderResponse
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
export namespace CreateFolderResponse$ {
  /** @deprecated use `CreateFolderResponse$inboundSchema` instead. */
  export const inboundSchema = CreateFolderResponse$inboundSchema;
  /** @deprecated use `CreateFolderResponse$outboundSchema` instead. */
  export const outboundSchema = CreateFolderResponse$outboundSchema;
  /** @deprecated use `CreateFolderResponse$Outbound` instead. */
  export type Outbound = CreateFolderResponse$Outbound;
}

export function createFolderResponseToJSON(
  createFolderResponse: CreateFolderResponse,
): string {
  return JSON.stringify(
    CreateFolderResponse$outboundSchema.parse(createFolderResponse),
  );
}

export function createFolderResponseFromJSON(
  jsonString: string,
): SafeParseResult<CreateFolderResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CreateFolderResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreateFolderResponse' from JSON`,
  );
}

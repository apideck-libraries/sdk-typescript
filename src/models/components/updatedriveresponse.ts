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
 * Drives
 */
export type UpdateDriveResponse = {
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
export const UpdateDriveResponse$inboundSchema: z.ZodType<
  UpdateDriveResponse,
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
export type UpdateDriveResponse$Outbound = {
  status_code: number;
  status: string;
  service: string;
  resource: string;
  operation: string;
  data: UnifiedId$Outbound;
};

/** @internal */
export const UpdateDriveResponse$outboundSchema: z.ZodType<
  UpdateDriveResponse$Outbound,
  z.ZodTypeDef,
  UpdateDriveResponse
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
export namespace UpdateDriveResponse$ {
  /** @deprecated use `UpdateDriveResponse$inboundSchema` instead. */
  export const inboundSchema = UpdateDriveResponse$inboundSchema;
  /** @deprecated use `UpdateDriveResponse$outboundSchema` instead. */
  export const outboundSchema = UpdateDriveResponse$outboundSchema;
  /** @deprecated use `UpdateDriveResponse$Outbound` instead. */
  export type Outbound = UpdateDriveResponse$Outbound;
}

export function updateDriveResponseToJSON(
  updateDriveResponse: UpdateDriveResponse,
): string {
  return JSON.stringify(
    UpdateDriveResponse$outboundSchema.parse(updateDriveResponse),
  );
}

export function updateDriveResponseFromJSON(
  jsonString: string,
): SafeParseResult<UpdateDriveResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => UpdateDriveResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'UpdateDriveResponse' from JSON`,
  );
}

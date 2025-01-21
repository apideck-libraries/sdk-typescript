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
 * DriveGroups
 */
export type UpdateDriveGroupResponse = {
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
export const UpdateDriveGroupResponse$inboundSchema: z.ZodType<
  UpdateDriveGroupResponse,
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
export type UpdateDriveGroupResponse$Outbound = {
  status_code: number;
  status: string;
  service: string;
  resource: string;
  operation: string;
  data: UnifiedId$Outbound;
};

/** @internal */
export const UpdateDriveGroupResponse$outboundSchema: z.ZodType<
  UpdateDriveGroupResponse$Outbound,
  z.ZodTypeDef,
  UpdateDriveGroupResponse
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
export namespace UpdateDriveGroupResponse$ {
  /** @deprecated use `UpdateDriveGroupResponse$inboundSchema` instead. */
  export const inboundSchema = UpdateDriveGroupResponse$inboundSchema;
  /** @deprecated use `UpdateDriveGroupResponse$outboundSchema` instead. */
  export const outboundSchema = UpdateDriveGroupResponse$outboundSchema;
  /** @deprecated use `UpdateDriveGroupResponse$Outbound` instead. */
  export type Outbound = UpdateDriveGroupResponse$Outbound;
}

export function updateDriveGroupResponseToJSON(
  updateDriveGroupResponse: UpdateDriveGroupResponse,
): string {
  return JSON.stringify(
    UpdateDriveGroupResponse$outboundSchema.parse(updateDriveGroupResponse),
  );
}

export function updateDriveGroupResponseFromJSON(
  jsonString: string,
): SafeParseResult<UpdateDriveGroupResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => UpdateDriveGroupResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'UpdateDriveGroupResponse' from JSON`,
  );
}

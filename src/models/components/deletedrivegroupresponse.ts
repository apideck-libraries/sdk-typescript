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
export type DeleteDriveGroupResponse = {
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
export const DeleteDriveGroupResponse$inboundSchema: z.ZodType<
  DeleteDriveGroupResponse,
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
export type DeleteDriveGroupResponse$Outbound = {
  status_code: number;
  status: string;
  service: string;
  resource: string;
  operation: string;
  data: UnifiedId$Outbound;
};

/** @internal */
export const DeleteDriveGroupResponse$outboundSchema: z.ZodType<
  DeleteDriveGroupResponse$Outbound,
  z.ZodTypeDef,
  DeleteDriveGroupResponse
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
export namespace DeleteDriveGroupResponse$ {
  /** @deprecated use `DeleteDriveGroupResponse$inboundSchema` instead. */
  export const inboundSchema = DeleteDriveGroupResponse$inboundSchema;
  /** @deprecated use `DeleteDriveGroupResponse$outboundSchema` instead. */
  export const outboundSchema = DeleteDriveGroupResponse$outboundSchema;
  /** @deprecated use `DeleteDriveGroupResponse$Outbound` instead. */
  export type Outbound = DeleteDriveGroupResponse$Outbound;
}

export function deleteDriveGroupResponseToJSON(
  deleteDriveGroupResponse: DeleteDriveGroupResponse,
): string {
  return JSON.stringify(
    DeleteDriveGroupResponse$outboundSchema.parse(deleteDriveGroupResponse),
  );
}

export function deleteDriveGroupResponseFromJSON(
  jsonString: string,
): SafeParseResult<DeleteDriveGroupResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => DeleteDriveGroupResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'DeleteDriveGroupResponse' from JSON`,
  );
}

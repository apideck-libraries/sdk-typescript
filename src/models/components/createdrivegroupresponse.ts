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
export type CreateDriveGroupResponse = {
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
export const CreateDriveGroupResponse$inboundSchema: z.ZodType<
  CreateDriveGroupResponse,
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
export type CreateDriveGroupResponse$Outbound = {
  status_code: number;
  status: string;
  service: string;
  resource: string;
  operation: string;
  data: UnifiedId$Outbound;
};

/** @internal */
export const CreateDriveGroupResponse$outboundSchema: z.ZodType<
  CreateDriveGroupResponse$Outbound,
  z.ZodTypeDef,
  CreateDriveGroupResponse
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
export namespace CreateDriveGroupResponse$ {
  /** @deprecated use `CreateDriveGroupResponse$inboundSchema` instead. */
  export const inboundSchema = CreateDriveGroupResponse$inboundSchema;
  /** @deprecated use `CreateDriveGroupResponse$outboundSchema` instead. */
  export const outboundSchema = CreateDriveGroupResponse$outboundSchema;
  /** @deprecated use `CreateDriveGroupResponse$Outbound` instead. */
  export type Outbound = CreateDriveGroupResponse$Outbound;
}

export function createDriveGroupResponseToJSON(
  createDriveGroupResponse: CreateDriveGroupResponse,
): string {
  return JSON.stringify(
    CreateDriveGroupResponse$outboundSchema.parse(createDriveGroupResponse),
  );
}

export function createDriveGroupResponseFromJSON(
  jsonString: string,
): SafeParseResult<CreateDriveGroupResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CreateDriveGroupResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreateDriveGroupResponse' from JSON`,
  );
}

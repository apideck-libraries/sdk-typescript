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
 * TimeOffRequests
 */
export type DeleteTimeOffRequestResponse = {
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
export const DeleteTimeOffRequestResponse$inboundSchema: z.ZodType<
  DeleteTimeOffRequestResponse,
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
export type DeleteTimeOffRequestResponse$Outbound = {
  status_code: number;
  status: string;
  service: string;
  resource: string;
  operation: string;
  data: UnifiedId$Outbound;
  _raw?: { [k: string]: any } | null | undefined;
};

/** @internal */
export const DeleteTimeOffRequestResponse$outboundSchema: z.ZodType<
  DeleteTimeOffRequestResponse$Outbound,
  z.ZodTypeDef,
  DeleteTimeOffRequestResponse
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
export namespace DeleteTimeOffRequestResponse$ {
  /** @deprecated use `DeleteTimeOffRequestResponse$inboundSchema` instead. */
  export const inboundSchema = DeleteTimeOffRequestResponse$inboundSchema;
  /** @deprecated use `DeleteTimeOffRequestResponse$outboundSchema` instead. */
  export const outboundSchema = DeleteTimeOffRequestResponse$outboundSchema;
  /** @deprecated use `DeleteTimeOffRequestResponse$Outbound` instead. */
  export type Outbound = DeleteTimeOffRequestResponse$Outbound;
}

export function deleteTimeOffRequestResponseToJSON(
  deleteTimeOffRequestResponse: DeleteTimeOffRequestResponse,
): string {
  return JSON.stringify(
    DeleteTimeOffRequestResponse$outboundSchema.parse(
      deleteTimeOffRequestResponse,
    ),
  );
}

export function deleteTimeOffRequestResponseFromJSON(
  jsonString: string,
): SafeParseResult<DeleteTimeOffRequestResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => DeleteTimeOffRequestResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'DeleteTimeOffRequestResponse' from JSON`,
  );
}

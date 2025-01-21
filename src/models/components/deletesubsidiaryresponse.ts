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
 * Subsidiarys
 */
export type DeleteSubsidiaryResponse = {
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
export const DeleteSubsidiaryResponse$inboundSchema: z.ZodType<
  DeleteSubsidiaryResponse,
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
export type DeleteSubsidiaryResponse$Outbound = {
  status_code: number;
  status: string;
  service: string;
  resource: string;
  operation: string;
  data: UnifiedId$Outbound;
};

/** @internal */
export const DeleteSubsidiaryResponse$outboundSchema: z.ZodType<
  DeleteSubsidiaryResponse$Outbound,
  z.ZodTypeDef,
  DeleteSubsidiaryResponse
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
export namespace DeleteSubsidiaryResponse$ {
  /** @deprecated use `DeleteSubsidiaryResponse$inboundSchema` instead. */
  export const inboundSchema = DeleteSubsidiaryResponse$inboundSchema;
  /** @deprecated use `DeleteSubsidiaryResponse$outboundSchema` instead. */
  export const outboundSchema = DeleteSubsidiaryResponse$outboundSchema;
  /** @deprecated use `DeleteSubsidiaryResponse$Outbound` instead. */
  export type Outbound = DeleteSubsidiaryResponse$Outbound;
}

export function deleteSubsidiaryResponseToJSON(
  deleteSubsidiaryResponse: DeleteSubsidiaryResponse,
): string {
  return JSON.stringify(
    DeleteSubsidiaryResponse$outboundSchema.parse(deleteSubsidiaryResponse),
  );
}

export function deleteSubsidiaryResponseFromJSON(
  jsonString: string,
): SafeParseResult<DeleteSubsidiaryResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => DeleteSubsidiaryResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'DeleteSubsidiaryResponse' from JSON`,
  );
}

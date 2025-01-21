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
 * Department deleted
 */
export type DeleteAccountingDepartmentResponse = {
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
export const DeleteAccountingDepartmentResponse$inboundSchema: z.ZodType<
  DeleteAccountingDepartmentResponse,
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
export type DeleteAccountingDepartmentResponse$Outbound = {
  status_code: number;
  status: string;
  service: string;
  resource: string;
  operation: string;
  data: UnifiedId$Outbound;
};

/** @internal */
export const DeleteAccountingDepartmentResponse$outboundSchema: z.ZodType<
  DeleteAccountingDepartmentResponse$Outbound,
  z.ZodTypeDef,
  DeleteAccountingDepartmentResponse
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
export namespace DeleteAccountingDepartmentResponse$ {
  /** @deprecated use `DeleteAccountingDepartmentResponse$inboundSchema` instead. */
  export const inboundSchema = DeleteAccountingDepartmentResponse$inboundSchema;
  /** @deprecated use `DeleteAccountingDepartmentResponse$outboundSchema` instead. */
  export const outboundSchema =
    DeleteAccountingDepartmentResponse$outboundSchema;
  /** @deprecated use `DeleteAccountingDepartmentResponse$Outbound` instead. */
  export type Outbound = DeleteAccountingDepartmentResponse$Outbound;
}

export function deleteAccountingDepartmentResponseToJSON(
  deleteAccountingDepartmentResponse: DeleteAccountingDepartmentResponse,
): string {
  return JSON.stringify(
    DeleteAccountingDepartmentResponse$outboundSchema.parse(
      deleteAccountingDepartmentResponse,
    ),
  );
}

export function deleteAccountingDepartmentResponseFromJSON(
  jsonString: string,
): SafeParseResult<DeleteAccountingDepartmentResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      DeleteAccountingDepartmentResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'DeleteAccountingDepartmentResponse' from JSON`,
  );
}

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
 * Payment deleted
 */
export type DeletePaymentResponse = {
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
export const DeletePaymentResponse$inboundSchema: z.ZodType<
  DeletePaymentResponse,
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
export type DeletePaymentResponse$Outbound = {
  status_code: number;
  status: string;
  service: string;
  resource: string;
  operation: string;
  data: UnifiedId$Outbound;
};

/** @internal */
export const DeletePaymentResponse$outboundSchema: z.ZodType<
  DeletePaymentResponse$Outbound,
  z.ZodTypeDef,
  DeletePaymentResponse
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
export namespace DeletePaymentResponse$ {
  /** @deprecated use `DeletePaymentResponse$inboundSchema` instead. */
  export const inboundSchema = DeletePaymentResponse$inboundSchema;
  /** @deprecated use `DeletePaymentResponse$outboundSchema` instead. */
  export const outboundSchema = DeletePaymentResponse$outboundSchema;
  /** @deprecated use `DeletePaymentResponse$Outbound` instead. */
  export type Outbound = DeletePaymentResponse$Outbound;
}

export function deletePaymentResponseToJSON(
  deletePaymentResponse: DeletePaymentResponse,
): string {
  return JSON.stringify(
    DeletePaymentResponse$outboundSchema.parse(deletePaymentResponse),
  );
}

export function deletePaymentResponseFromJSON(
  jsonString: string,
): SafeParseResult<DeletePaymentResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => DeletePaymentResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'DeletePaymentResponse' from JSON`,
  );
}

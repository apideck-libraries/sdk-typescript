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
 * Bill Payment updated
 */
export type UpdateBillPaymentResponse = {
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
export const UpdateBillPaymentResponse$inboundSchema: z.ZodType<
  UpdateBillPaymentResponse,
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
export type UpdateBillPaymentResponse$Outbound = {
  status_code: number;
  status: string;
  service: string;
  resource: string;
  operation: string;
  data: UnifiedId$Outbound;
};

/** @internal */
export const UpdateBillPaymentResponse$outboundSchema: z.ZodType<
  UpdateBillPaymentResponse$Outbound,
  z.ZodTypeDef,
  UpdateBillPaymentResponse
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
export namespace UpdateBillPaymentResponse$ {
  /** @deprecated use `UpdateBillPaymentResponse$inboundSchema` instead. */
  export const inboundSchema = UpdateBillPaymentResponse$inboundSchema;
  /** @deprecated use `UpdateBillPaymentResponse$outboundSchema` instead. */
  export const outboundSchema = UpdateBillPaymentResponse$outboundSchema;
  /** @deprecated use `UpdateBillPaymentResponse$Outbound` instead. */
  export type Outbound = UpdateBillPaymentResponse$Outbound;
}

export function updateBillPaymentResponseToJSON(
  updateBillPaymentResponse: UpdateBillPaymentResponse,
): string {
  return JSON.stringify(
    UpdateBillPaymentResponse$outboundSchema.parse(updateBillPaymentResponse),
  );
}

export function updateBillPaymentResponseFromJSON(
  jsonString: string,
): SafeParseResult<UpdateBillPaymentResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => UpdateBillPaymentResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'UpdateBillPaymentResponse' from JSON`,
  );
}

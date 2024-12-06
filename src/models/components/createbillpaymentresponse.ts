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
 * Bill Payment created
 */
export type CreateBillPaymentResponse = {
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
export const CreateBillPaymentResponse$inboundSchema: z.ZodType<
  CreateBillPaymentResponse,
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
export type CreateBillPaymentResponse$Outbound = {
  status_code: number;
  status: string;
  service: string;
  resource: string;
  operation: string;
  data: UnifiedId$Outbound;
};

/** @internal */
export const CreateBillPaymentResponse$outboundSchema: z.ZodType<
  CreateBillPaymentResponse$Outbound,
  z.ZodTypeDef,
  CreateBillPaymentResponse
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
export namespace CreateBillPaymentResponse$ {
  /** @deprecated use `CreateBillPaymentResponse$inboundSchema` instead. */
  export const inboundSchema = CreateBillPaymentResponse$inboundSchema;
  /** @deprecated use `CreateBillPaymentResponse$outboundSchema` instead. */
  export const outboundSchema = CreateBillPaymentResponse$outboundSchema;
  /** @deprecated use `CreateBillPaymentResponse$Outbound` instead. */
  export type Outbound = CreateBillPaymentResponse$Outbound;
}

export function createBillPaymentResponseToJSON(
  createBillPaymentResponse: CreateBillPaymentResponse,
): string {
  return JSON.stringify(
    CreateBillPaymentResponse$outboundSchema.parse(createBillPaymentResponse),
  );
}

export function createBillPaymentResponseFromJSON(
  jsonString: string,
): SafeParseResult<CreateBillPaymentResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CreateBillPaymentResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreateBillPaymentResponse' from JSON`,
  );
}

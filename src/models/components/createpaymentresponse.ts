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
 * Payment created
 */
export type CreatePaymentResponse = {
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
export const CreatePaymentResponse$inboundSchema: z.ZodType<
  CreatePaymentResponse,
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
export type CreatePaymentResponse$Outbound = {
  status_code: number;
  status: string;
  service: string;
  resource: string;
  operation: string;
  data: UnifiedId$Outbound;
};

/** @internal */
export const CreatePaymentResponse$outboundSchema: z.ZodType<
  CreatePaymentResponse$Outbound,
  z.ZodTypeDef,
  CreatePaymentResponse
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
export namespace CreatePaymentResponse$ {
  /** @deprecated use `CreatePaymentResponse$inboundSchema` instead. */
  export const inboundSchema = CreatePaymentResponse$inboundSchema;
  /** @deprecated use `CreatePaymentResponse$outboundSchema` instead. */
  export const outboundSchema = CreatePaymentResponse$outboundSchema;
  /** @deprecated use `CreatePaymentResponse$Outbound` instead. */
  export type Outbound = CreatePaymentResponse$Outbound;
}

export function createPaymentResponseToJSON(
  createPaymentResponse: CreatePaymentResponse,
): string {
  return JSON.stringify(
    CreatePaymentResponse$outboundSchema.parse(createPaymentResponse),
  );
}

export function createPaymentResponseFromJSON(
  jsonString: string,
): SafeParseResult<CreatePaymentResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CreatePaymentResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreatePaymentResponse' from JSON`,
  );
}

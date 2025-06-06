/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  Payment,
  Payment$inboundSchema,
  Payment$Outbound,
  Payment$outboundSchema,
} from "./payment.js";

/**
 * Payment
 */
export type GetPaymentResponse = {
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
  data: Payment;
  /**
   * Raw response from the integration when raw=true query param is provided
   */
  raw?: { [k: string]: any } | null | undefined;
};

/** @internal */
export const GetPaymentResponse$inboundSchema: z.ZodType<
  GetPaymentResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  status_code: z.number().int(),
  status: z.string(),
  service: z.string(),
  resource: z.string(),
  operation: z.string(),
  data: Payment$inboundSchema,
  _raw: z.nullable(z.record(z.any())).optional(),
}).transform((v) => {
  return remap$(v, {
    "status_code": "statusCode",
    "_raw": "raw",
  });
});

/** @internal */
export type GetPaymentResponse$Outbound = {
  status_code: number;
  status: string;
  service: string;
  resource: string;
  operation: string;
  data: Payment$Outbound;
  _raw?: { [k: string]: any } | null | undefined;
};

/** @internal */
export const GetPaymentResponse$outboundSchema: z.ZodType<
  GetPaymentResponse$Outbound,
  z.ZodTypeDef,
  GetPaymentResponse
> = z.object({
  statusCode: z.number().int(),
  status: z.string(),
  service: z.string(),
  resource: z.string(),
  operation: z.string(),
  data: Payment$outboundSchema,
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
export namespace GetPaymentResponse$ {
  /** @deprecated use `GetPaymentResponse$inboundSchema` instead. */
  export const inboundSchema = GetPaymentResponse$inboundSchema;
  /** @deprecated use `GetPaymentResponse$outboundSchema` instead. */
  export const outboundSchema = GetPaymentResponse$outboundSchema;
  /** @deprecated use `GetPaymentResponse$Outbound` instead. */
  export type Outbound = GetPaymentResponse$Outbound;
}

export function getPaymentResponseToJSON(
  getPaymentResponse: GetPaymentResponse,
): string {
  return JSON.stringify(
    GetPaymentResponse$outboundSchema.parse(getPaymentResponse),
  );
}

export function getPaymentResponseFromJSON(
  jsonString: string,
): SafeParseResult<GetPaymentResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetPaymentResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetPaymentResponse' from JSON`,
  );
}

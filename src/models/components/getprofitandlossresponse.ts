/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  ProfitAndLoss,
  ProfitAndLoss$inboundSchema,
  ProfitAndLoss$Outbound,
  ProfitAndLoss$outboundSchema,
} from "./profitandloss.js";

/**
 * Profit & Loss Report
 */
export type GetProfitAndLossResponse = {
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
  data: ProfitAndLoss;
  /**
   * Raw response from the integration when raw=true query param is provided
   */
  raw?: { [k: string]: any } | null | undefined;
};

/** @internal */
export const GetProfitAndLossResponse$inboundSchema: z.ZodType<
  GetProfitAndLossResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  status_code: z.number().int(),
  status: z.string(),
  service: z.string(),
  resource: z.string(),
  operation: z.string(),
  data: ProfitAndLoss$inboundSchema,
  _raw: z.nullable(z.record(z.any())).optional(),
}).transform((v) => {
  return remap$(v, {
    "status_code": "statusCode",
    "_raw": "raw",
  });
});

/** @internal */
export type GetProfitAndLossResponse$Outbound = {
  status_code: number;
  status: string;
  service: string;
  resource: string;
  operation: string;
  data: ProfitAndLoss$Outbound;
  _raw?: { [k: string]: any } | null | undefined;
};

/** @internal */
export const GetProfitAndLossResponse$outboundSchema: z.ZodType<
  GetProfitAndLossResponse$Outbound,
  z.ZodTypeDef,
  GetProfitAndLossResponse
> = z.object({
  statusCode: z.number().int(),
  status: z.string(),
  service: z.string(),
  resource: z.string(),
  operation: z.string(),
  data: ProfitAndLoss$outboundSchema,
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
export namespace GetProfitAndLossResponse$ {
  /** @deprecated use `GetProfitAndLossResponse$inboundSchema` instead. */
  export const inboundSchema = GetProfitAndLossResponse$inboundSchema;
  /** @deprecated use `GetProfitAndLossResponse$outboundSchema` instead. */
  export const outboundSchema = GetProfitAndLossResponse$outboundSchema;
  /** @deprecated use `GetProfitAndLossResponse$Outbound` instead. */
  export type Outbound = GetProfitAndLossResponse$Outbound;
}

export function getProfitAndLossResponseToJSON(
  getProfitAndLossResponse: GetProfitAndLossResponse,
): string {
  return JSON.stringify(
    GetProfitAndLossResponse$outboundSchema.parse(getProfitAndLossResponse),
  );
}

export function getProfitAndLossResponseFromJSON(
  jsonString: string,
): SafeParseResult<GetProfitAndLossResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetProfitAndLossResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetProfitAndLossResponse' from JSON`,
  );
}

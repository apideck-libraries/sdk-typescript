/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import {
  Merchant,
  Merchant$inboundSchema,
  Merchant$Outbound,
  Merchant$outboundSchema,
} from "./merchant.js";

/**
 * Merchants
 */
export type GetMerchantResponse = {
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
  data: Merchant;
};

/** @internal */
export const GetMerchantResponse$inboundSchema: z.ZodType<
  GetMerchantResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  status_code: z.number().int(),
  status: z.string(),
  service: z.string(),
  resource: z.string(),
  operation: z.string(),
  data: Merchant$inboundSchema,
}).transform((v) => {
  return remap$(v, {
    "status_code": "statusCode",
  });
});

/** @internal */
export type GetMerchantResponse$Outbound = {
  status_code: number;
  status: string;
  service: string;
  resource: string;
  operation: string;
  data: Merchant$Outbound;
};

/** @internal */
export const GetMerchantResponse$outboundSchema: z.ZodType<
  GetMerchantResponse$Outbound,
  z.ZodTypeDef,
  GetMerchantResponse
> = z.object({
  statusCode: z.number().int(),
  status: z.string(),
  service: z.string(),
  resource: z.string(),
  operation: z.string(),
  data: Merchant$outboundSchema,
}).transform((v) => {
  return remap$(v, {
    statusCode: "status_code",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetMerchantResponse$ {
  /** @deprecated use `GetMerchantResponse$inboundSchema` instead. */
  export const inboundSchema = GetMerchantResponse$inboundSchema;
  /** @deprecated use `GetMerchantResponse$outboundSchema` instead. */
  export const outboundSchema = GetMerchantResponse$outboundSchema;
  /** @deprecated use `GetMerchantResponse$Outbound` instead. */
  export type Outbound = GetMerchantResponse$Outbound;
}

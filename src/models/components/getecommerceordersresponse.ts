/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import {
  EcommerceOrder,
  EcommerceOrder$inboundSchema,
  EcommerceOrder$Outbound,
  EcommerceOrder$outboundSchema,
} from "./ecommerceorder.js";
import {
  Links,
  Links$inboundSchema,
  Links$Outbound,
  Links$outboundSchema,
} from "./links.js";
import {
  Meta,
  Meta$inboundSchema,
  Meta$Outbound,
  Meta$outboundSchema,
} from "./meta.js";

/**
 * Orders
 */
export type GetEcommerceOrdersResponse = {
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
  data: Array<EcommerceOrder>;
  /**
   * Response metadata
   */
  meta?: Meta | undefined;
  /**
   * Links to navigate to previous or next pages through the API
   */
  links?: Links | undefined;
};

/** @internal */
export const GetEcommerceOrdersResponse$inboundSchema: z.ZodType<
  GetEcommerceOrdersResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  status_code: z.number().int(),
  status: z.string(),
  service: z.string(),
  resource: z.string(),
  operation: z.string(),
  data: z.array(EcommerceOrder$inboundSchema),
  meta: Meta$inboundSchema.optional(),
  links: Links$inboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    "status_code": "statusCode",
  });
});

/** @internal */
export type GetEcommerceOrdersResponse$Outbound = {
  status_code: number;
  status: string;
  service: string;
  resource: string;
  operation: string;
  data: Array<EcommerceOrder$Outbound>;
  meta?: Meta$Outbound | undefined;
  links?: Links$Outbound | undefined;
};

/** @internal */
export const GetEcommerceOrdersResponse$outboundSchema: z.ZodType<
  GetEcommerceOrdersResponse$Outbound,
  z.ZodTypeDef,
  GetEcommerceOrdersResponse
> = z.object({
  statusCode: z.number().int(),
  status: z.string(),
  service: z.string(),
  resource: z.string(),
  operation: z.string(),
  data: z.array(EcommerceOrder$outboundSchema),
  meta: Meta$outboundSchema.optional(),
  links: Links$outboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    statusCode: "status_code",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetEcommerceOrdersResponse$ {
  /** @deprecated use `GetEcommerceOrdersResponse$inboundSchema` instead. */
  export const inboundSchema = GetEcommerceOrdersResponse$inboundSchema;
  /** @deprecated use `GetEcommerceOrdersResponse$outboundSchema` instead. */
  export const outboundSchema = GetEcommerceOrdersResponse$outboundSchema;
  /** @deprecated use `GetEcommerceOrdersResponse$Outbound` instead. */
  export type Outbound = GetEcommerceOrdersResponse$Outbound;
}

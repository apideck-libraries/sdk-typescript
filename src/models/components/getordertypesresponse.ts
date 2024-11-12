/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
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
import {
  OrderType,
  OrderType$inboundSchema,
  OrderType$Outbound,
  OrderType$outboundSchema,
} from "./ordertype.js";

/**
 * OrderTypes
 */
export type GetOrderTypesResponse = {
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
  data: Array<OrderType>;
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
export const GetOrderTypesResponse$inboundSchema: z.ZodType<
  GetOrderTypesResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  status_code: z.number().int(),
  status: z.string(),
  service: z.string(),
  resource: z.string(),
  operation: z.string(),
  data: z.array(OrderType$inboundSchema),
  meta: Meta$inboundSchema.optional(),
  links: Links$inboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    "status_code": "statusCode",
  });
});

/** @internal */
export type GetOrderTypesResponse$Outbound = {
  status_code: number;
  status: string;
  service: string;
  resource: string;
  operation: string;
  data: Array<OrderType$Outbound>;
  meta?: Meta$Outbound | undefined;
  links?: Links$Outbound | undefined;
};

/** @internal */
export const GetOrderTypesResponse$outboundSchema: z.ZodType<
  GetOrderTypesResponse$Outbound,
  z.ZodTypeDef,
  GetOrderTypesResponse
> = z.object({
  statusCode: z.number().int(),
  status: z.string(),
  service: z.string(),
  resource: z.string(),
  operation: z.string(),
  data: z.array(OrderType$outboundSchema),
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
export namespace GetOrderTypesResponse$ {
  /** @deprecated use `GetOrderTypesResponse$inboundSchema` instead. */
  export const inboundSchema = GetOrderTypesResponse$inboundSchema;
  /** @deprecated use `GetOrderTypesResponse$outboundSchema` instead. */
  export const outboundSchema = GetOrderTypesResponse$outboundSchema;
  /** @deprecated use `GetOrderTypesResponse$Outbound` instead. */
  export type Outbound = GetOrderTypesResponse$Outbound;
}

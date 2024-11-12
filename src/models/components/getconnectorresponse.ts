/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import {
  Connector,
  Connector$inboundSchema,
  Connector$Outbound,
  Connector$outboundSchema,
} from "./connector.js";
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
 * Connectors
 */
export type GetConnectorResponse = {
  /**
   * HTTP Response Status Code
   */
  statusCode: number;
  /**
   * HTTP Response Status
   */
  status: string;
  data: Connector;
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
export const GetConnectorResponse$inboundSchema: z.ZodType<
  GetConnectorResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  status_code: z.number().int(),
  status: z.string(),
  data: Connector$inboundSchema,
  meta: Meta$inboundSchema.optional(),
  links: Links$inboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    "status_code": "statusCode",
  });
});

/** @internal */
export type GetConnectorResponse$Outbound = {
  status_code: number;
  status: string;
  data: Connector$Outbound;
  meta?: Meta$Outbound | undefined;
  links?: Links$Outbound | undefined;
};

/** @internal */
export const GetConnectorResponse$outboundSchema: z.ZodType<
  GetConnectorResponse$Outbound,
  z.ZodTypeDef,
  GetConnectorResponse
> = z.object({
  statusCode: z.number().int(),
  status: z.string(),
  data: Connector$outboundSchema,
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
export namespace GetConnectorResponse$ {
  /** @deprecated use `GetConnectorResponse$inboundSchema` instead. */
  export const inboundSchema = GetConnectorResponse$inboundSchema;
  /** @deprecated use `GetConnectorResponse$outboundSchema` instead. */
  export const outboundSchema = GetConnectorResponse$outboundSchema;
  /** @deprecated use `GetConnectorResponse$Outbound` instead. */
  export type Outbound = GetConnectorResponse$Outbound;
}

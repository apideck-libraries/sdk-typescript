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
  SharedLink,
  SharedLink$inboundSchema,
  SharedLink$Outbound,
  SharedLink$outboundSchema,
} from "./sharedlink.js";

/**
 * Shared Links
 */
export type GetSharedLinksResponse = {
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
  data: Array<SharedLink>;
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
export const GetSharedLinksResponse$inboundSchema: z.ZodType<
  GetSharedLinksResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  status_code: z.number().int(),
  status: z.string(),
  service: z.string(),
  resource: z.string(),
  operation: z.string(),
  data: z.array(SharedLink$inboundSchema),
  meta: Meta$inboundSchema.optional(),
  links: Links$inboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    "status_code": "statusCode",
  });
});

/** @internal */
export type GetSharedLinksResponse$Outbound = {
  status_code: number;
  status: string;
  service: string;
  resource: string;
  operation: string;
  data: Array<SharedLink$Outbound>;
  meta?: Meta$Outbound | undefined;
  links?: Links$Outbound | undefined;
};

/** @internal */
export const GetSharedLinksResponse$outboundSchema: z.ZodType<
  GetSharedLinksResponse$Outbound,
  z.ZodTypeDef,
  GetSharedLinksResponse
> = z.object({
  statusCode: z.number().int(),
  status: z.string(),
  service: z.string(),
  resource: z.string(),
  operation: z.string(),
  data: z.array(SharedLink$outboundSchema),
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
export namespace GetSharedLinksResponse$ {
  /** @deprecated use `GetSharedLinksResponse$inboundSchema` instead. */
  export const inboundSchema = GetSharedLinksResponse$inboundSchema;
  /** @deprecated use `GetSharedLinksResponse$outboundSchema` instead. */
  export const outboundSchema = GetSharedLinksResponse$outboundSchema;
  /** @deprecated use `GetSharedLinksResponse$Outbound` instead. */
  export type Outbound = GetSharedLinksResponse$Outbound;
}

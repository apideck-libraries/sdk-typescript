/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
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
  TrackingCategory,
  TrackingCategory$inboundSchema,
  TrackingCategory$Outbound,
  TrackingCategory$outboundSchema,
} from "./trackingcategory.js";

/**
 * Tracking categories
 */
export type GetTrackingCategoriesResponse = {
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
  data: Array<TrackingCategory>;
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
export const GetTrackingCategoriesResponse$inboundSchema: z.ZodType<
  GetTrackingCategoriesResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  status_code: z.number().int(),
  status: z.string(),
  service: z.string(),
  resource: z.string(),
  operation: z.string(),
  data: z.array(TrackingCategory$inboundSchema),
  meta: Meta$inboundSchema.optional(),
  links: Links$inboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    "status_code": "statusCode",
  });
});

/** @internal */
export type GetTrackingCategoriesResponse$Outbound = {
  status_code: number;
  status: string;
  service: string;
  resource: string;
  operation: string;
  data: Array<TrackingCategory$Outbound>;
  meta?: Meta$Outbound | undefined;
  links?: Links$Outbound | undefined;
};

/** @internal */
export const GetTrackingCategoriesResponse$outboundSchema: z.ZodType<
  GetTrackingCategoriesResponse$Outbound,
  z.ZodTypeDef,
  GetTrackingCategoriesResponse
> = z.object({
  statusCode: z.number().int(),
  status: z.string(),
  service: z.string(),
  resource: z.string(),
  operation: z.string(),
  data: z.array(TrackingCategory$outboundSchema),
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
export namespace GetTrackingCategoriesResponse$ {
  /** @deprecated use `GetTrackingCategoriesResponse$inboundSchema` instead. */
  export const inboundSchema = GetTrackingCategoriesResponse$inboundSchema;
  /** @deprecated use `GetTrackingCategoriesResponse$outboundSchema` instead. */
  export const outboundSchema = GetTrackingCategoriesResponse$outboundSchema;
  /** @deprecated use `GetTrackingCategoriesResponse$Outbound` instead. */
  export type Outbound = GetTrackingCategoriesResponse$Outbound;
}

export function getTrackingCategoriesResponseToJSON(
  getTrackingCategoriesResponse: GetTrackingCategoriesResponse,
): string {
  return JSON.stringify(
    GetTrackingCategoriesResponse$outboundSchema.parse(
      getTrackingCategoriesResponse,
    ),
  );
}

export function getTrackingCategoriesResponseFromJSON(
  jsonString: string,
): SafeParseResult<GetTrackingCategoriesResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetTrackingCategoriesResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetTrackingCategoriesResponse' from JSON`,
  );
}

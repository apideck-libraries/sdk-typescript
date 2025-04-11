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
  TimeOffRequest,
  TimeOffRequest$inboundSchema,
  TimeOffRequest$Outbound,
  TimeOffRequest$outboundSchema,
} from "./timeoffrequest.js";

/**
 * TimeOffRequests
 */
export type GetTimeOffRequestsResponse = {
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
  data: Array<TimeOffRequest>;
  /**
   * Raw response from the integration when raw=true query param is provided
   */
  raw?: { [k: string]: any } | null | undefined;
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
export const GetTimeOffRequestsResponse$inboundSchema: z.ZodType<
  GetTimeOffRequestsResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  status_code: z.number().int(),
  status: z.string(),
  service: z.string(),
  resource: z.string(),
  operation: z.string(),
  data: z.array(TimeOffRequest$inboundSchema),
  _raw: z.nullable(z.record(z.any())).optional(),
  meta: Meta$inboundSchema.optional(),
  links: Links$inboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    "status_code": "statusCode",
    "_raw": "raw",
  });
});

/** @internal */
export type GetTimeOffRequestsResponse$Outbound = {
  status_code: number;
  status: string;
  service: string;
  resource: string;
  operation: string;
  data: Array<TimeOffRequest$Outbound>;
  _raw?: { [k: string]: any } | null | undefined;
  meta?: Meta$Outbound | undefined;
  links?: Links$Outbound | undefined;
};

/** @internal */
export const GetTimeOffRequestsResponse$outboundSchema: z.ZodType<
  GetTimeOffRequestsResponse$Outbound,
  z.ZodTypeDef,
  GetTimeOffRequestsResponse
> = z.object({
  statusCode: z.number().int(),
  status: z.string(),
  service: z.string(),
  resource: z.string(),
  operation: z.string(),
  data: z.array(TimeOffRequest$outboundSchema),
  raw: z.nullable(z.record(z.any())).optional(),
  meta: Meta$outboundSchema.optional(),
  links: Links$outboundSchema.optional(),
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
export namespace GetTimeOffRequestsResponse$ {
  /** @deprecated use `GetTimeOffRequestsResponse$inboundSchema` instead. */
  export const inboundSchema = GetTimeOffRequestsResponse$inboundSchema;
  /** @deprecated use `GetTimeOffRequestsResponse$outboundSchema` instead. */
  export const outboundSchema = GetTimeOffRequestsResponse$outboundSchema;
  /** @deprecated use `GetTimeOffRequestsResponse$Outbound` instead. */
  export type Outbound = GetTimeOffRequestsResponse$Outbound;
}

export function getTimeOffRequestsResponseToJSON(
  getTimeOffRequestsResponse: GetTimeOffRequestsResponse,
): string {
  return JSON.stringify(
    GetTimeOffRequestsResponse$outboundSchema.parse(getTimeOffRequestsResponse),
  );
}

export function getTimeOffRequestsResponseFromJSON(
  jsonString: string,
): SafeParseResult<GetTimeOffRequestsResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetTimeOffRequestsResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetTimeOffRequestsResponse' from JSON`,
  );
}

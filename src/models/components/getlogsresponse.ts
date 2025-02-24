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
  Log,
  Log$inboundSchema,
  Log$Outbound,
  Log$outboundSchema,
} from "./log.js";
import {
  Meta,
  Meta$inboundSchema,
  Meta$Outbound,
  Meta$outboundSchema,
} from "./meta.js";

/**
 * Logs
 */
export type GetLogsResponse = {
  /**
   * HTTP Response Status Code
   */
  statusCode: number;
  /**
   * HTTP Response Status
   */
  status: string;
  data: Array<Log>;
  /**
   * Response metadata
   */
  meta?: Meta | undefined;
  /**
   * Links to navigate to previous or next pages through the API
   */
  links?: Links | undefined;
  /**
   * Raw response from the integration when raw=true query param is provided
   */
  raw?: { [k: string]: any } | null | undefined;
};

/** @internal */
export const GetLogsResponse$inboundSchema: z.ZodType<
  GetLogsResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  status_code: z.number().int(),
  status: z.string(),
  data: z.array(Log$inboundSchema),
  meta: Meta$inboundSchema.optional(),
  links: Links$inboundSchema.optional(),
  _raw: z.nullable(z.record(z.any())).optional(),
}).transform((v) => {
  return remap$(v, {
    "status_code": "statusCode",
    "_raw": "raw",
  });
});

/** @internal */
export type GetLogsResponse$Outbound = {
  status_code: number;
  status: string;
  data: Array<Log$Outbound>;
  meta?: Meta$Outbound | undefined;
  links?: Links$Outbound | undefined;
  _raw?: { [k: string]: any } | null | undefined;
};

/** @internal */
export const GetLogsResponse$outboundSchema: z.ZodType<
  GetLogsResponse$Outbound,
  z.ZodTypeDef,
  GetLogsResponse
> = z.object({
  statusCode: z.number().int(),
  status: z.string(),
  data: z.array(Log$outboundSchema),
  meta: Meta$outboundSchema.optional(),
  links: Links$outboundSchema.optional(),
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
export namespace GetLogsResponse$ {
  /** @deprecated use `GetLogsResponse$inboundSchema` instead. */
  export const inboundSchema = GetLogsResponse$inboundSchema;
  /** @deprecated use `GetLogsResponse$outboundSchema` instead. */
  export const outboundSchema = GetLogsResponse$outboundSchema;
  /** @deprecated use `GetLogsResponse$Outbound` instead. */
  export type Outbound = GetLogsResponse$Outbound;
}

export function getLogsResponseToJSON(
  getLogsResponse: GetLogsResponse,
): string {
  return JSON.stringify(GetLogsResponse$outboundSchema.parse(getLogsResponse));
}

export function getLogsResponseFromJSON(
  jsonString: string,
): SafeParseResult<GetLogsResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetLogsResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetLogsResponse' from JSON`,
  );
}

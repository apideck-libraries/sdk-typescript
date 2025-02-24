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
  Opportunity,
  Opportunity$inboundSchema,
  Opportunity$Outbound,
  Opportunity$outboundSchema,
} from "./opportunity.js";

/**
 * Opportunities
 */
export type GetOpportunitiesResponse = {
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
  data: Array<Opportunity>;
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
export const GetOpportunitiesResponse$inboundSchema: z.ZodType<
  GetOpportunitiesResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  status_code: z.number().int(),
  status: z.string(),
  service: z.string(),
  resource: z.string(),
  operation: z.string(),
  data: z.array(Opportunity$inboundSchema),
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
export type GetOpportunitiesResponse$Outbound = {
  status_code: number;
  status: string;
  service: string;
  resource: string;
  operation: string;
  data: Array<Opportunity$Outbound>;
  _raw?: { [k: string]: any } | null | undefined;
  meta?: Meta$Outbound | undefined;
  links?: Links$Outbound | undefined;
};

/** @internal */
export const GetOpportunitiesResponse$outboundSchema: z.ZodType<
  GetOpportunitiesResponse$Outbound,
  z.ZodTypeDef,
  GetOpportunitiesResponse
> = z.object({
  statusCode: z.number().int(),
  status: z.string(),
  service: z.string(),
  resource: z.string(),
  operation: z.string(),
  data: z.array(Opportunity$outboundSchema),
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
export namespace GetOpportunitiesResponse$ {
  /** @deprecated use `GetOpportunitiesResponse$inboundSchema` instead. */
  export const inboundSchema = GetOpportunitiesResponse$inboundSchema;
  /** @deprecated use `GetOpportunitiesResponse$outboundSchema` instead. */
  export const outboundSchema = GetOpportunitiesResponse$outboundSchema;
  /** @deprecated use `GetOpportunitiesResponse$Outbound` instead. */
  export type Outbound = GetOpportunitiesResponse$Outbound;
}

export function getOpportunitiesResponseToJSON(
  getOpportunitiesResponse: GetOpportunitiesResponse,
): string {
  return JSON.stringify(
    GetOpportunitiesResponse$outboundSchema.parse(getOpportunitiesResponse),
  );
}

export function getOpportunitiesResponseFromJSON(
  jsonString: string,
): SafeParseResult<GetOpportunitiesResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetOpportunitiesResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetOpportunitiesResponse' from JSON`,
  );
}

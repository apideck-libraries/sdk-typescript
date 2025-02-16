/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  ApiResourceCoverage,
  ApiResourceCoverage$inboundSchema,
  ApiResourceCoverage$Outbound,
  ApiResourceCoverage$outboundSchema,
} from "./apiresourcecoverage.js";
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
 * ApiResources
 */
export type GetApiResourceCoverageResponse = {
  /**
   * HTTP Response Status Code
   */
  statusCode: number;
  /**
   * HTTP Response Status
   */
  status: string;
  data: ApiResourceCoverage;
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
export const GetApiResourceCoverageResponse$inboundSchema: z.ZodType<
  GetApiResourceCoverageResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  status_code: z.number().int(),
  status: z.string(),
  data: ApiResourceCoverage$inboundSchema,
  meta: Meta$inboundSchema.optional(),
  links: Links$inboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    "status_code": "statusCode",
  });
});

/** @internal */
export type GetApiResourceCoverageResponse$Outbound = {
  status_code: number;
  status: string;
  data: ApiResourceCoverage$Outbound;
  meta?: Meta$Outbound | undefined;
  links?: Links$Outbound | undefined;
};

/** @internal */
export const GetApiResourceCoverageResponse$outboundSchema: z.ZodType<
  GetApiResourceCoverageResponse$Outbound,
  z.ZodTypeDef,
  GetApiResourceCoverageResponse
> = z.object({
  statusCode: z.number().int(),
  status: z.string(),
  data: ApiResourceCoverage$outboundSchema,
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
export namespace GetApiResourceCoverageResponse$ {
  /** @deprecated use `GetApiResourceCoverageResponse$inboundSchema` instead. */
  export const inboundSchema = GetApiResourceCoverageResponse$inboundSchema;
  /** @deprecated use `GetApiResourceCoverageResponse$outboundSchema` instead. */
  export const outboundSchema = GetApiResourceCoverageResponse$outboundSchema;
  /** @deprecated use `GetApiResourceCoverageResponse$Outbound` instead. */
  export type Outbound = GetApiResourceCoverageResponse$Outbound;
}

export function getApiResourceCoverageResponseToJSON(
  getApiResourceCoverageResponse: GetApiResourceCoverageResponse,
): string {
  return JSON.stringify(
    GetApiResourceCoverageResponse$outboundSchema.parse(
      getApiResourceCoverageResponse,
    ),
  );
}

export function getApiResourceCoverageResponseFromJSON(
  jsonString: string,
): SafeParseResult<GetApiResourceCoverageResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetApiResourceCoverageResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetApiResourceCoverageResponse' from JSON`,
  );
}

/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  Pipeline,
  Pipeline$inboundSchema,
  Pipeline$Outbound,
  Pipeline$outboundSchema,
} from "./pipeline.js";

/**
 * Pipeline
 */
export type GetPipelineResponse = {
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
  data: Pipeline;
};

/** @internal */
export const GetPipelineResponse$inboundSchema: z.ZodType<
  GetPipelineResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  status_code: z.number().int(),
  status: z.string(),
  service: z.string(),
  resource: z.string(),
  operation: z.string(),
  data: Pipeline$inboundSchema,
}).transform((v) => {
  return remap$(v, {
    "status_code": "statusCode",
  });
});

/** @internal */
export type GetPipelineResponse$Outbound = {
  status_code: number;
  status: string;
  service: string;
  resource: string;
  operation: string;
  data: Pipeline$Outbound;
};

/** @internal */
export const GetPipelineResponse$outboundSchema: z.ZodType<
  GetPipelineResponse$Outbound,
  z.ZodTypeDef,
  GetPipelineResponse
> = z.object({
  statusCode: z.number().int(),
  status: z.string(),
  service: z.string(),
  resource: z.string(),
  operation: z.string(),
  data: Pipeline$outboundSchema,
}).transform((v) => {
  return remap$(v, {
    statusCode: "status_code",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetPipelineResponse$ {
  /** @deprecated use `GetPipelineResponse$inboundSchema` instead. */
  export const inboundSchema = GetPipelineResponse$inboundSchema;
  /** @deprecated use `GetPipelineResponse$outboundSchema` instead. */
  export const outboundSchema = GetPipelineResponse$outboundSchema;
  /** @deprecated use `GetPipelineResponse$Outbound` instead. */
  export type Outbound = GetPipelineResponse$Outbound;
}

export function getPipelineResponseToJSON(
  getPipelineResponse: GetPipelineResponse,
): string {
  return JSON.stringify(
    GetPipelineResponse$outboundSchema.parse(getPipelineResponse),
  );
}

export function getPipelineResponseFromJSON(
  jsonString: string,
): SafeParseResult<GetPipelineResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetPipelineResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetPipelineResponse' from JSON`,
  );
}

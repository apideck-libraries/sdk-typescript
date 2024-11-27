/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  UnifiedId,
  UnifiedId$inboundSchema,
  UnifiedId$Outbound,
  UnifiedId$outboundSchema,
} from "./unifiedid.js";

/**
 * Pipeline deleted
 */
export type DeletePipelineResponse = {
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
  data: UnifiedId;
};

/** @internal */
export const DeletePipelineResponse$inboundSchema: z.ZodType<
  DeletePipelineResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  status_code: z.number().int(),
  status: z.string(),
  service: z.string(),
  resource: z.string(),
  operation: z.string(),
  data: UnifiedId$inboundSchema,
}).transform((v) => {
  return remap$(v, {
    "status_code": "statusCode",
  });
});

/** @internal */
export type DeletePipelineResponse$Outbound = {
  status_code: number;
  status: string;
  service: string;
  resource: string;
  operation: string;
  data: UnifiedId$Outbound;
};

/** @internal */
export const DeletePipelineResponse$outboundSchema: z.ZodType<
  DeletePipelineResponse$Outbound,
  z.ZodTypeDef,
  DeletePipelineResponse
> = z.object({
  statusCode: z.number().int(),
  status: z.string(),
  service: z.string(),
  resource: z.string(),
  operation: z.string(),
  data: UnifiedId$outboundSchema,
}).transform((v) => {
  return remap$(v, {
    statusCode: "status_code",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DeletePipelineResponse$ {
  /** @deprecated use `DeletePipelineResponse$inboundSchema` instead. */
  export const inboundSchema = DeletePipelineResponse$inboundSchema;
  /** @deprecated use `DeletePipelineResponse$outboundSchema` instead. */
  export const outboundSchema = DeletePipelineResponse$outboundSchema;
  /** @deprecated use `DeletePipelineResponse$Outbound` instead. */
  export type Outbound = DeletePipelineResponse$Outbound;
}

export function deletePipelineResponseToJSON(
  deletePipelineResponse: DeletePipelineResponse,
): string {
  return JSON.stringify(
    DeletePipelineResponse$outboundSchema.parse(deletePipelineResponse),
  );
}

export function deletePipelineResponseFromJSON(
  jsonString: string,
): SafeParseResult<DeletePipelineResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => DeletePipelineResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'DeletePipelineResponse' from JSON`,
  );
}

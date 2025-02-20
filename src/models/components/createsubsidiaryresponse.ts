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
 * Subsidiaries
 */
export type CreateSubsidiaryResponse = {
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
  /**
   * A object containing a unique identifier for the resource that was created, updated, or deleted.
   */
  data: UnifiedId;
};

/** @internal */
export const CreateSubsidiaryResponse$inboundSchema: z.ZodType<
  CreateSubsidiaryResponse,
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
export type CreateSubsidiaryResponse$Outbound = {
  status_code: number;
  status: string;
  service: string;
  resource: string;
  operation: string;
  data: UnifiedId$Outbound;
};

/** @internal */
export const CreateSubsidiaryResponse$outboundSchema: z.ZodType<
  CreateSubsidiaryResponse$Outbound,
  z.ZodTypeDef,
  CreateSubsidiaryResponse
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
export namespace CreateSubsidiaryResponse$ {
  /** @deprecated use `CreateSubsidiaryResponse$inboundSchema` instead. */
  export const inboundSchema = CreateSubsidiaryResponse$inboundSchema;
  /** @deprecated use `CreateSubsidiaryResponse$outboundSchema` instead. */
  export const outboundSchema = CreateSubsidiaryResponse$outboundSchema;
  /** @deprecated use `CreateSubsidiaryResponse$Outbound` instead. */
  export type Outbound = CreateSubsidiaryResponse$Outbound;
}

export function createSubsidiaryResponseToJSON(
  createSubsidiaryResponse: CreateSubsidiaryResponse,
): string {
  return JSON.stringify(
    CreateSubsidiaryResponse$outboundSchema.parse(createSubsidiaryResponse),
  );
}

export function createSubsidiaryResponseFromJSON(
  jsonString: string,
): SafeParseResult<CreateSubsidiaryResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CreateSubsidiaryResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreateSubsidiaryResponse' from JSON`,
  );
}

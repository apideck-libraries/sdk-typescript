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
 * Credit Note created
 */
export type CreateCreditNoteResponse = {
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
  /**
   * Raw response from the integration when raw=true query param is provided
   */
  raw?: { [k: string]: any } | null | undefined;
};

/** @internal */
export const CreateCreditNoteResponse$inboundSchema: z.ZodType<
  CreateCreditNoteResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  status_code: z.number().int(),
  status: z.string(),
  service: z.string(),
  resource: z.string(),
  operation: z.string(),
  data: UnifiedId$inboundSchema,
  _raw: z.nullable(z.record(z.any())).optional(),
}).transform((v) => {
  return remap$(v, {
    "status_code": "statusCode",
    "_raw": "raw",
  });
});

/** @internal */
export type CreateCreditNoteResponse$Outbound = {
  status_code: number;
  status: string;
  service: string;
  resource: string;
  operation: string;
  data: UnifiedId$Outbound;
  _raw?: { [k: string]: any } | null | undefined;
};

/** @internal */
export const CreateCreditNoteResponse$outboundSchema: z.ZodType<
  CreateCreditNoteResponse$Outbound,
  z.ZodTypeDef,
  CreateCreditNoteResponse
> = z.object({
  statusCode: z.number().int(),
  status: z.string(),
  service: z.string(),
  resource: z.string(),
  operation: z.string(),
  data: UnifiedId$outboundSchema,
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
export namespace CreateCreditNoteResponse$ {
  /** @deprecated use `CreateCreditNoteResponse$inboundSchema` instead. */
  export const inboundSchema = CreateCreditNoteResponse$inboundSchema;
  /** @deprecated use `CreateCreditNoteResponse$outboundSchema` instead. */
  export const outboundSchema = CreateCreditNoteResponse$outboundSchema;
  /** @deprecated use `CreateCreditNoteResponse$Outbound` instead. */
  export type Outbound = CreateCreditNoteResponse$Outbound;
}

export function createCreditNoteResponseToJSON(
  createCreditNoteResponse: CreateCreditNoteResponse,
): string {
  return JSON.stringify(
    CreateCreditNoteResponse$outboundSchema.parse(createCreditNoteResponse),
  );
}

export function createCreditNoteResponseFromJSON(
  jsonString: string,
): SafeParseResult<CreateCreditNoteResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CreateCreditNoteResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreateCreditNoteResponse' from JSON`,
  );
}

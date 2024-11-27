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
 * JournalEntries
 */
export type DeleteJournalEntryResponse = {
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
export const DeleteJournalEntryResponse$inboundSchema: z.ZodType<
  DeleteJournalEntryResponse,
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
export type DeleteJournalEntryResponse$Outbound = {
  status_code: number;
  status: string;
  service: string;
  resource: string;
  operation: string;
  data: UnifiedId$Outbound;
};

/** @internal */
export const DeleteJournalEntryResponse$outboundSchema: z.ZodType<
  DeleteJournalEntryResponse$Outbound,
  z.ZodTypeDef,
  DeleteJournalEntryResponse
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
export namespace DeleteJournalEntryResponse$ {
  /** @deprecated use `DeleteJournalEntryResponse$inboundSchema` instead. */
  export const inboundSchema = DeleteJournalEntryResponse$inboundSchema;
  /** @deprecated use `DeleteJournalEntryResponse$outboundSchema` instead. */
  export const outboundSchema = DeleteJournalEntryResponse$outboundSchema;
  /** @deprecated use `DeleteJournalEntryResponse$Outbound` instead. */
  export type Outbound = DeleteJournalEntryResponse$Outbound;
}

export function deleteJournalEntryResponseToJSON(
  deleteJournalEntryResponse: DeleteJournalEntryResponse,
): string {
  return JSON.stringify(
    DeleteJournalEntryResponse$outboundSchema.parse(deleteJournalEntryResponse),
  );
}

export function deleteJournalEntryResponseFromJSON(
  jsonString: string,
): SafeParseResult<DeleteJournalEntryResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => DeleteJournalEntryResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'DeleteJournalEntryResponse' from JSON`,
  );
}

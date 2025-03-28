/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  JournalEntry,
  JournalEntry$inboundSchema,
  JournalEntry$Outbound,
  JournalEntry$outboundSchema,
} from "./journalentry.js";

/**
 * JournalEntries
 */
export type GetJournalEntryResponse = {
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
  data: JournalEntry;
  /**
   * Raw response from the integration when raw=true query param is provided
   */
  raw?: { [k: string]: any } | null | undefined;
};

/** @internal */
export const GetJournalEntryResponse$inboundSchema: z.ZodType<
  GetJournalEntryResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  status_code: z.number().int(),
  status: z.string(),
  service: z.string(),
  resource: z.string(),
  operation: z.string(),
  data: JournalEntry$inboundSchema,
  _raw: z.nullable(z.record(z.any())).optional(),
}).transform((v) => {
  return remap$(v, {
    "status_code": "statusCode",
    "_raw": "raw",
  });
});

/** @internal */
export type GetJournalEntryResponse$Outbound = {
  status_code: number;
  status: string;
  service: string;
  resource: string;
  operation: string;
  data: JournalEntry$Outbound;
  _raw?: { [k: string]: any } | null | undefined;
};

/** @internal */
export const GetJournalEntryResponse$outboundSchema: z.ZodType<
  GetJournalEntryResponse$Outbound,
  z.ZodTypeDef,
  GetJournalEntryResponse
> = z.object({
  statusCode: z.number().int(),
  status: z.string(),
  service: z.string(),
  resource: z.string(),
  operation: z.string(),
  data: JournalEntry$outboundSchema,
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
export namespace GetJournalEntryResponse$ {
  /** @deprecated use `GetJournalEntryResponse$inboundSchema` instead. */
  export const inboundSchema = GetJournalEntryResponse$inboundSchema;
  /** @deprecated use `GetJournalEntryResponse$outboundSchema` instead. */
  export const outboundSchema = GetJournalEntryResponse$outboundSchema;
  /** @deprecated use `GetJournalEntryResponse$Outbound` instead. */
  export type Outbound = GetJournalEntryResponse$Outbound;
}

export function getJournalEntryResponseToJSON(
  getJournalEntryResponse: GetJournalEntryResponse,
): string {
  return JSON.stringify(
    GetJournalEntryResponse$outboundSchema.parse(getJournalEntryResponse),
  );
}

export function getJournalEntryResponseFromJSON(
  jsonString: string,
): SafeParseResult<GetJournalEntryResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetJournalEntryResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetJournalEntryResponse' from JSON`,
  );
}

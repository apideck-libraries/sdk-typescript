/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  Note,
  Note$inboundSchema,
  Note$Outbound,
  Note$outboundSchema,
} from "./note.js";

/**
 * Note
 */
export type GetNoteResponse = {
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
  data: Note;
};

/** @internal */
export const GetNoteResponse$inboundSchema: z.ZodType<
  GetNoteResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  status_code: z.number().int(),
  status: z.string(),
  service: z.string(),
  resource: z.string(),
  operation: z.string(),
  data: Note$inboundSchema,
}).transform((v) => {
  return remap$(v, {
    "status_code": "statusCode",
  });
});

/** @internal */
export type GetNoteResponse$Outbound = {
  status_code: number;
  status: string;
  service: string;
  resource: string;
  operation: string;
  data: Note$Outbound;
};

/** @internal */
export const GetNoteResponse$outboundSchema: z.ZodType<
  GetNoteResponse$Outbound,
  z.ZodTypeDef,
  GetNoteResponse
> = z.object({
  statusCode: z.number().int(),
  status: z.string(),
  service: z.string(),
  resource: z.string(),
  operation: z.string(),
  data: Note$outboundSchema,
}).transform((v) => {
  return remap$(v, {
    statusCode: "status_code",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetNoteResponse$ {
  /** @deprecated use `GetNoteResponse$inboundSchema` instead. */
  export const inboundSchema = GetNoteResponse$inboundSchema;
  /** @deprecated use `GetNoteResponse$outboundSchema` instead. */
  export const outboundSchema = GetNoteResponse$outboundSchema;
  /** @deprecated use `GetNoteResponse$Outbound` instead. */
  export type Outbound = GetNoteResponse$Outbound;
}

export function getNoteResponseToJSON(
  getNoteResponse: GetNoteResponse,
): string {
  return JSON.stringify(GetNoteResponse$outboundSchema.parse(getNoteResponse));
}

export function getNoteResponseFromJSON(
  jsonString: string,
): SafeParseResult<GetNoteResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetNoteResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetNoteResponse' from JSON`,
  );
}

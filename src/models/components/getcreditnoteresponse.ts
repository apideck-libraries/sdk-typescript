/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  CreditNote,
  CreditNote$inboundSchema,
  CreditNote$Outbound,
  CreditNote$outboundSchema,
} from "./creditnote.js";

/**
 * Credit Note
 */
export type GetCreditNoteResponse = {
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
  data: CreditNote;
};

/** @internal */
export const GetCreditNoteResponse$inboundSchema: z.ZodType<
  GetCreditNoteResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  status_code: z.number().int(),
  status: z.string(),
  service: z.string(),
  resource: z.string(),
  operation: z.string(),
  data: CreditNote$inboundSchema,
}).transform((v) => {
  return remap$(v, {
    "status_code": "statusCode",
  });
});

/** @internal */
export type GetCreditNoteResponse$Outbound = {
  status_code: number;
  status: string;
  service: string;
  resource: string;
  operation: string;
  data: CreditNote$Outbound;
};

/** @internal */
export const GetCreditNoteResponse$outboundSchema: z.ZodType<
  GetCreditNoteResponse$Outbound,
  z.ZodTypeDef,
  GetCreditNoteResponse
> = z.object({
  statusCode: z.number().int(),
  status: z.string(),
  service: z.string(),
  resource: z.string(),
  operation: z.string(),
  data: CreditNote$outboundSchema,
}).transform((v) => {
  return remap$(v, {
    statusCode: "status_code",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetCreditNoteResponse$ {
  /** @deprecated use `GetCreditNoteResponse$inboundSchema` instead. */
  export const inboundSchema = GetCreditNoteResponse$inboundSchema;
  /** @deprecated use `GetCreditNoteResponse$outboundSchema` instead. */
  export const outboundSchema = GetCreditNoteResponse$outboundSchema;
  /** @deprecated use `GetCreditNoteResponse$Outbound` instead. */
  export type Outbound = GetCreditNoteResponse$Outbound;
}

export function getCreditNoteResponseToJSON(
  getCreditNoteResponse: GetCreditNoteResponse,
): string {
  return JSON.stringify(
    GetCreditNoteResponse$outboundSchema.parse(getCreditNoteResponse),
  );
}

export function getCreditNoteResponseFromJSON(
  jsonString: string,
): SafeParseResult<GetCreditNoteResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetCreditNoteResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetCreditNoteResponse' from JSON`,
  );
}

/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  Ticket,
  Ticket$inboundSchema,
  Ticket$Outbound,
  Ticket$outboundSchema,
} from "./ticket.js";

/**
 * Get a Ticket
 */
export type GetTicketResponse = {
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
  data: Ticket;
  /**
   * Raw response from the integration when raw=true query param is provided
   */
  raw?: { [k: string]: any } | null | undefined;
};

/** @internal */
export const GetTicketResponse$inboundSchema: z.ZodType<
  GetTicketResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  status_code: z.number().int(),
  status: z.string(),
  service: z.string(),
  resource: z.string(),
  operation: z.string(),
  data: Ticket$inboundSchema,
  _raw: z.nullable(z.record(z.any())).optional(),
}).transform((v) => {
  return remap$(v, {
    "status_code": "statusCode",
    "_raw": "raw",
  });
});

/** @internal */
export type GetTicketResponse$Outbound = {
  status_code: number;
  status: string;
  service: string;
  resource: string;
  operation: string;
  data: Ticket$Outbound;
  _raw?: { [k: string]: any } | null | undefined;
};

/** @internal */
export const GetTicketResponse$outboundSchema: z.ZodType<
  GetTicketResponse$Outbound,
  z.ZodTypeDef,
  GetTicketResponse
> = z.object({
  statusCode: z.number().int(),
  status: z.string(),
  service: z.string(),
  resource: z.string(),
  operation: z.string(),
  data: Ticket$outboundSchema,
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
export namespace GetTicketResponse$ {
  /** @deprecated use `GetTicketResponse$inboundSchema` instead. */
  export const inboundSchema = GetTicketResponse$inboundSchema;
  /** @deprecated use `GetTicketResponse$outboundSchema` instead. */
  export const outboundSchema = GetTicketResponse$outboundSchema;
  /** @deprecated use `GetTicketResponse$Outbound` instead. */
  export type Outbound = GetTicketResponse$Outbound;
}

export function getTicketResponseToJSON(
  getTicketResponse: GetTicketResponse,
): string {
  return JSON.stringify(
    GetTicketResponse$outboundSchema.parse(getTicketResponse),
  );
}

export function getTicketResponseFromJSON(
  jsonString: string,
): SafeParseResult<GetTicketResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetTicketResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetTicketResponse' from JSON`,
  );
}

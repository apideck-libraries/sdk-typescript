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
 * Create a Ticket
 */
export type CreateTicketResponse = {
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
export const CreateTicketResponse$inboundSchema: z.ZodType<
  CreateTicketResponse,
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
export type CreateTicketResponse$Outbound = {
  status_code: number;
  status: string;
  service: string;
  resource: string;
  operation: string;
  data: UnifiedId$Outbound;
};

/** @internal */
export const CreateTicketResponse$outboundSchema: z.ZodType<
  CreateTicketResponse$Outbound,
  z.ZodTypeDef,
  CreateTicketResponse
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
export namespace CreateTicketResponse$ {
  /** @deprecated use `CreateTicketResponse$inboundSchema` instead. */
  export const inboundSchema = CreateTicketResponse$inboundSchema;
  /** @deprecated use `CreateTicketResponse$outboundSchema` instead. */
  export const outboundSchema = CreateTicketResponse$outboundSchema;
  /** @deprecated use `CreateTicketResponse$Outbound` instead. */
  export type Outbound = CreateTicketResponse$Outbound;
}

export function createTicketResponseToJSON(
  createTicketResponse: CreateTicketResponse,
): string {
  return JSON.stringify(
    CreateTicketResponse$outboundSchema.parse(createTicketResponse),
  );
}

export function createTicketResponseFromJSON(
  jsonString: string,
): SafeParseResult<CreateTicketResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CreateTicketResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreateTicketResponse' from JSON`,
  );
}

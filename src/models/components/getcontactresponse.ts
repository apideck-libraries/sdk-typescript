/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  Contact,
  Contact$inboundSchema,
  Contact$Outbound,
  Contact$outboundSchema,
} from "./contact.js";

/**
 * Contact
 */
export type GetContactResponse = {
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
  data: Contact;
};

/** @internal */
export const GetContactResponse$inboundSchema: z.ZodType<
  GetContactResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  status_code: z.number().int(),
  status: z.string(),
  service: z.string(),
  resource: z.string(),
  operation: z.string(),
  data: Contact$inboundSchema,
}).transform((v) => {
  return remap$(v, {
    "status_code": "statusCode",
  });
});

/** @internal */
export type GetContactResponse$Outbound = {
  status_code: number;
  status: string;
  service: string;
  resource: string;
  operation: string;
  data: Contact$Outbound;
};

/** @internal */
export const GetContactResponse$outboundSchema: z.ZodType<
  GetContactResponse$Outbound,
  z.ZodTypeDef,
  GetContactResponse
> = z.object({
  statusCode: z.number().int(),
  status: z.string(),
  service: z.string(),
  resource: z.string(),
  operation: z.string(),
  data: Contact$outboundSchema,
}).transform((v) => {
  return remap$(v, {
    statusCode: "status_code",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetContactResponse$ {
  /** @deprecated use `GetContactResponse$inboundSchema` instead. */
  export const inboundSchema = GetContactResponse$inboundSchema;
  /** @deprecated use `GetContactResponse$outboundSchema` instead. */
  export const outboundSchema = GetContactResponse$outboundSchema;
  /** @deprecated use `GetContactResponse$Outbound` instead. */
  export type Outbound = GetContactResponse$Outbound;
}

export function getContactResponseToJSON(
  getContactResponse: GetContactResponse,
): string {
  return JSON.stringify(
    GetContactResponse$outboundSchema.parse(getContactResponse),
  );
}

export function getContactResponseFromJSON(
  jsonString: string,
): SafeParseResult<GetContactResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetContactResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetContactResponse' from JSON`,
  );
}

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
} from "./contactinput.js";
import {
  Links,
  Links$inboundSchema,
  Links$Outbound,
  Links$outboundSchema,
} from "./links.js";
import {
  Meta,
  Meta$inboundSchema,
  Meta$Outbound,
  Meta$outboundSchema,
} from "./meta.js";

/**
 * Contacts
 */
export type GetContactsResponse = {
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
  data: Array<Contact>;
  /**
   * Response metadata
   */
  meta?: Meta | undefined;
  /**
   * Links to navigate to previous or next pages through the API
   */
  links?: Links | undefined;
  /**
   * Raw response from the integration when raw=true query param is provided
   */
  raw?: { [k: string]: any } | null | undefined;
};

/** @internal */
export const GetContactsResponse$inboundSchema: z.ZodType<
  GetContactsResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  status_code: z.number().int(),
  status: z.string(),
  service: z.string(),
  resource: z.string(),
  operation: z.string(),
  data: z.array(Contact$inboundSchema),
  meta: Meta$inboundSchema.optional(),
  links: Links$inboundSchema.optional(),
  _raw: z.nullable(z.record(z.any())).optional(),
}).transform((v) => {
  return remap$(v, {
    "status_code": "statusCode",
    "_raw": "raw",
  });
});

/** @internal */
export type GetContactsResponse$Outbound = {
  status_code: number;
  status: string;
  service: string;
  resource: string;
  operation: string;
  data: Array<Contact$Outbound>;
  meta?: Meta$Outbound | undefined;
  links?: Links$Outbound | undefined;
  _raw?: { [k: string]: any } | null | undefined;
};

/** @internal */
export const GetContactsResponse$outboundSchema: z.ZodType<
  GetContactsResponse$Outbound,
  z.ZodTypeDef,
  GetContactsResponse
> = z.object({
  statusCode: z.number().int(),
  status: z.string(),
  service: z.string(),
  resource: z.string(),
  operation: z.string(),
  data: z.array(Contact$outboundSchema),
  meta: Meta$outboundSchema.optional(),
  links: Links$outboundSchema.optional(),
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
export namespace GetContactsResponse$ {
  /** @deprecated use `GetContactsResponse$inboundSchema` instead. */
  export const inboundSchema = GetContactsResponse$inboundSchema;
  /** @deprecated use `GetContactsResponse$outboundSchema` instead. */
  export const outboundSchema = GetContactsResponse$outboundSchema;
  /** @deprecated use `GetContactsResponse$Outbound` instead. */
  export type Outbound = GetContactsResponse$Outbound;
}

export function getContactsResponseToJSON(
  getContactsResponse: GetContactsResponse,
): string {
  return JSON.stringify(
    GetContactsResponse$outboundSchema.parse(getContactsResponse),
  );
}

export function getContactsResponseFromJSON(
  jsonString: string,
): SafeParseResult<GetContactsResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetContactsResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetContactsResponse' from JSON`,
  );
}

/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type SmsMessagesAllGlobals = {
  /**
   * ID of the consumer which you want to get or push data from
   */
  consumerId?: string | undefined;
  /**
   * The ID of your Unify application
   */
  appId?: string | undefined;
};

export type SmsMessagesAllRequest = {
  /**
   * Include raw response. Mostly used for debugging purposes
   */
  raw?: boolean | undefined;
  /**
   * Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API.
   */
  serviceId?: string | undefined;
  /**
   * Cursor to start from. You can find cursors for next/previous pages in the meta.cursors property of the response.
   */
  cursor?: string | null | undefined;
  /**
   * Number of results to return. Minimum 1, Maximum 200, Default 20
   */
  limit?: number | undefined;
  /**
   * The 'fields' parameter allows API users to specify the fields they want to include in the API response. If this parameter is not present, the API will return all available fields. If this parameter is present, only the fields specified in the comma-separated string will be included in the response. Nested properties can also be requested by using a dot notation. <br /><br />Example: `fields=name,email,addresses.city`<br /><br />In the example above, the response will only include the fields "name", "email" and "addresses.city". If any other fields are available, they will be excluded.
   */
  fields?: string | null | undefined;
};

export type SmsMessagesAllResponse = {
  httpMeta: components.HTTPMetadata;
  /**
   * Messages
   */
  getMessagesResponse?: components.GetMessagesResponse | undefined;
  /**
   * Unexpected error
   */
  unexpectedErrorResponse?: components.UnexpectedErrorResponse | undefined;
};

/** @internal */
export const SmsMessagesAllGlobals$inboundSchema: z.ZodType<
  SmsMessagesAllGlobals,
  z.ZodTypeDef,
  unknown
> = z.object({
  consumerId: z.string().optional(),
  appId: z.string().optional(),
});

/** @internal */
export type SmsMessagesAllGlobals$Outbound = {
  consumerId?: string | undefined;
  appId?: string | undefined;
};

/** @internal */
export const SmsMessagesAllGlobals$outboundSchema: z.ZodType<
  SmsMessagesAllGlobals$Outbound,
  z.ZodTypeDef,
  SmsMessagesAllGlobals
> = z.object({
  consumerId: z.string().optional(),
  appId: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace SmsMessagesAllGlobals$ {
  /** @deprecated use `SmsMessagesAllGlobals$inboundSchema` instead. */
  export const inboundSchema = SmsMessagesAllGlobals$inboundSchema;
  /** @deprecated use `SmsMessagesAllGlobals$outboundSchema` instead. */
  export const outboundSchema = SmsMessagesAllGlobals$outboundSchema;
  /** @deprecated use `SmsMessagesAllGlobals$Outbound` instead. */
  export type Outbound = SmsMessagesAllGlobals$Outbound;
}

export function smsMessagesAllGlobalsToJSON(
  smsMessagesAllGlobals: SmsMessagesAllGlobals,
): string {
  return JSON.stringify(
    SmsMessagesAllGlobals$outboundSchema.parse(smsMessagesAllGlobals),
  );
}

export function smsMessagesAllGlobalsFromJSON(
  jsonString: string,
): SafeParseResult<SmsMessagesAllGlobals, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => SmsMessagesAllGlobals$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'SmsMessagesAllGlobals' from JSON`,
  );
}

/** @internal */
export const SmsMessagesAllRequest$inboundSchema: z.ZodType<
  SmsMessagesAllRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  raw: z.boolean().default(false),
  serviceId: z.string().optional(),
  cursor: z.nullable(z.string()).optional(),
  limit: z.number().int().default(20),
  fields: z.nullable(z.string()).optional(),
});

/** @internal */
export type SmsMessagesAllRequest$Outbound = {
  raw: boolean;
  serviceId?: string | undefined;
  cursor?: string | null | undefined;
  limit: number;
  fields?: string | null | undefined;
};

/** @internal */
export const SmsMessagesAllRequest$outboundSchema: z.ZodType<
  SmsMessagesAllRequest$Outbound,
  z.ZodTypeDef,
  SmsMessagesAllRequest
> = z.object({
  raw: z.boolean().default(false),
  serviceId: z.string().optional(),
  cursor: z.nullable(z.string()).optional(),
  limit: z.number().int().default(20),
  fields: z.nullable(z.string()).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace SmsMessagesAllRequest$ {
  /** @deprecated use `SmsMessagesAllRequest$inboundSchema` instead. */
  export const inboundSchema = SmsMessagesAllRequest$inboundSchema;
  /** @deprecated use `SmsMessagesAllRequest$outboundSchema` instead. */
  export const outboundSchema = SmsMessagesAllRequest$outboundSchema;
  /** @deprecated use `SmsMessagesAllRequest$Outbound` instead. */
  export type Outbound = SmsMessagesAllRequest$Outbound;
}

export function smsMessagesAllRequestToJSON(
  smsMessagesAllRequest: SmsMessagesAllRequest,
): string {
  return JSON.stringify(
    SmsMessagesAllRequest$outboundSchema.parse(smsMessagesAllRequest),
  );
}

export function smsMessagesAllRequestFromJSON(
  jsonString: string,
): SafeParseResult<SmsMessagesAllRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => SmsMessagesAllRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'SmsMessagesAllRequest' from JSON`,
  );
}

/** @internal */
export const SmsMessagesAllResponse$inboundSchema: z.ZodType<
  SmsMessagesAllResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  HttpMeta: components.HTTPMetadata$inboundSchema,
  GetMessagesResponse: components.GetMessagesResponse$inboundSchema.optional(),
  UnexpectedErrorResponse: components.UnexpectedErrorResponse$inboundSchema
    .optional(),
}).transform((v) => {
  return remap$(v, {
    "HttpMeta": "httpMeta",
    "GetMessagesResponse": "getMessagesResponse",
    "UnexpectedErrorResponse": "unexpectedErrorResponse",
  });
});

/** @internal */
export type SmsMessagesAllResponse$Outbound = {
  HttpMeta: components.HTTPMetadata$Outbound;
  GetMessagesResponse?: components.GetMessagesResponse$Outbound | undefined;
  UnexpectedErrorResponse?:
    | components.UnexpectedErrorResponse$Outbound
    | undefined;
};

/** @internal */
export const SmsMessagesAllResponse$outboundSchema: z.ZodType<
  SmsMessagesAllResponse$Outbound,
  z.ZodTypeDef,
  SmsMessagesAllResponse
> = z.object({
  httpMeta: components.HTTPMetadata$outboundSchema,
  getMessagesResponse: components.GetMessagesResponse$outboundSchema.optional(),
  unexpectedErrorResponse: components.UnexpectedErrorResponse$outboundSchema
    .optional(),
}).transform((v) => {
  return remap$(v, {
    httpMeta: "HttpMeta",
    getMessagesResponse: "GetMessagesResponse",
    unexpectedErrorResponse: "UnexpectedErrorResponse",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace SmsMessagesAllResponse$ {
  /** @deprecated use `SmsMessagesAllResponse$inboundSchema` instead. */
  export const inboundSchema = SmsMessagesAllResponse$inboundSchema;
  /** @deprecated use `SmsMessagesAllResponse$outboundSchema` instead. */
  export const outboundSchema = SmsMessagesAllResponse$outboundSchema;
  /** @deprecated use `SmsMessagesAllResponse$Outbound` instead. */
  export type Outbound = SmsMessagesAllResponse$Outbound;
}

export function smsMessagesAllResponseToJSON(
  smsMessagesAllResponse: SmsMessagesAllResponse,
): string {
  return JSON.stringify(
    SmsMessagesAllResponse$outboundSchema.parse(smsMessagesAllResponse),
  );
}

export function smsMessagesAllResponseFromJSON(
  jsonString: string,
): SafeParseResult<SmsMessagesAllResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => SmsMessagesAllResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'SmsMessagesAllResponse' from JSON`,
  );
}

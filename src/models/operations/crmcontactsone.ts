/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type CrmContactsOneGlobals = {
  /**
   * ID of the consumer which you want to get or push data from
   */
  consumerId?: string | undefined;
  /**
   * The ID of your Unify application
   */
  appId?: string | undefined;
};

export type CrmContactsOneRequest = {
  /**
   * ID of the record you are acting upon.
   */
  id: string;
  /**
   * ID of the consumer which you want to get or push data from
   */
  consumerId?: string | undefined;
  /**
   * The ID of your Unify application
   */
  appId?: string | undefined;
  /**
   * Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API.
   */
  serviceId?: string | undefined;
  /**
   * Include raw response. Mostly used for debugging purposes
   */
  raw?: boolean | undefined;
  /**
   * The 'fields' parameter allows API users to specify the fields they want to include in the API response. If this parameter is not present, the API will return all available fields. If this parameter is present, only the fields specified in the comma-separated string will be included in the response. Nested properties can also be requested by using a dot notation. <br /><br />Example: `fields=name,email,addresses.city`<br /><br />In the example above, the response will only include the fields "name", "email" and "addresses.city". If any other fields are available, they will be excluded.
   */
  fields?: string | null | undefined;
  /**
   * Apply filters
   */
  filter?: components.ContactsFilter | undefined;
};

export type CrmContactsOneResponse = {
  httpMeta: components.HTTPMetadata;
  /**
   * Contact
   */
  getContactResponse?: components.GetContactResponse | undefined;
  /**
   * Unexpected error
   */
  unexpectedErrorResponse?: components.UnexpectedErrorResponse | undefined;
};

/** @internal */
export const CrmContactsOneGlobals$inboundSchema: z.ZodType<
  CrmContactsOneGlobals,
  z.ZodTypeDef,
  unknown
> = z.object({
  consumerId: z.string().optional(),
  appId: z.string().optional(),
});

/** @internal */
export type CrmContactsOneGlobals$Outbound = {
  consumerId?: string | undefined;
  appId?: string | undefined;
};

/** @internal */
export const CrmContactsOneGlobals$outboundSchema: z.ZodType<
  CrmContactsOneGlobals$Outbound,
  z.ZodTypeDef,
  CrmContactsOneGlobals
> = z.object({
  consumerId: z.string().optional(),
  appId: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CrmContactsOneGlobals$ {
  /** @deprecated use `CrmContactsOneGlobals$inboundSchema` instead. */
  export const inboundSchema = CrmContactsOneGlobals$inboundSchema;
  /** @deprecated use `CrmContactsOneGlobals$outboundSchema` instead. */
  export const outboundSchema = CrmContactsOneGlobals$outboundSchema;
  /** @deprecated use `CrmContactsOneGlobals$Outbound` instead. */
  export type Outbound = CrmContactsOneGlobals$Outbound;
}

export function crmContactsOneGlobalsToJSON(
  crmContactsOneGlobals: CrmContactsOneGlobals,
): string {
  return JSON.stringify(
    CrmContactsOneGlobals$outboundSchema.parse(crmContactsOneGlobals),
  );
}

export function crmContactsOneGlobalsFromJSON(
  jsonString: string,
): SafeParseResult<CrmContactsOneGlobals, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CrmContactsOneGlobals$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CrmContactsOneGlobals' from JSON`,
  );
}

/** @internal */
export const CrmContactsOneRequest$inboundSchema: z.ZodType<
  CrmContactsOneRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
  consumerId: z.string().optional(),
  appId: z.string().optional(),
  serviceId: z.string().optional(),
  raw: z.boolean().default(false),
  fields: z.nullable(z.string()).optional(),
  filter: components.ContactsFilter$inboundSchema.optional(),
});

/** @internal */
export type CrmContactsOneRequest$Outbound = {
  id: string;
  consumerId?: string | undefined;
  appId?: string | undefined;
  serviceId?: string | undefined;
  raw: boolean;
  fields?: string | null | undefined;
  filter?: components.ContactsFilter$Outbound | undefined;
};

/** @internal */
export const CrmContactsOneRequest$outboundSchema: z.ZodType<
  CrmContactsOneRequest$Outbound,
  z.ZodTypeDef,
  CrmContactsOneRequest
> = z.object({
  id: z.string(),
  consumerId: z.string().optional(),
  appId: z.string().optional(),
  serviceId: z.string().optional(),
  raw: z.boolean().default(false),
  fields: z.nullable(z.string()).optional(),
  filter: components.ContactsFilter$outboundSchema.optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CrmContactsOneRequest$ {
  /** @deprecated use `CrmContactsOneRequest$inboundSchema` instead. */
  export const inboundSchema = CrmContactsOneRequest$inboundSchema;
  /** @deprecated use `CrmContactsOneRequest$outboundSchema` instead. */
  export const outboundSchema = CrmContactsOneRequest$outboundSchema;
  /** @deprecated use `CrmContactsOneRequest$Outbound` instead. */
  export type Outbound = CrmContactsOneRequest$Outbound;
}

export function crmContactsOneRequestToJSON(
  crmContactsOneRequest: CrmContactsOneRequest,
): string {
  return JSON.stringify(
    CrmContactsOneRequest$outboundSchema.parse(crmContactsOneRequest),
  );
}

export function crmContactsOneRequestFromJSON(
  jsonString: string,
): SafeParseResult<CrmContactsOneRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CrmContactsOneRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CrmContactsOneRequest' from JSON`,
  );
}

/** @internal */
export const CrmContactsOneResponse$inboundSchema: z.ZodType<
  CrmContactsOneResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  HttpMeta: components.HTTPMetadata$inboundSchema,
  GetContactResponse: components.GetContactResponse$inboundSchema.optional(),
  UnexpectedErrorResponse: components.UnexpectedErrorResponse$inboundSchema
    .optional(),
}).transform((v) => {
  return remap$(v, {
    "HttpMeta": "httpMeta",
    "GetContactResponse": "getContactResponse",
    "UnexpectedErrorResponse": "unexpectedErrorResponse",
  });
});

/** @internal */
export type CrmContactsOneResponse$Outbound = {
  HttpMeta: components.HTTPMetadata$Outbound;
  GetContactResponse?: components.GetContactResponse$Outbound | undefined;
  UnexpectedErrorResponse?:
    | components.UnexpectedErrorResponse$Outbound
    | undefined;
};

/** @internal */
export const CrmContactsOneResponse$outboundSchema: z.ZodType<
  CrmContactsOneResponse$Outbound,
  z.ZodTypeDef,
  CrmContactsOneResponse
> = z.object({
  httpMeta: components.HTTPMetadata$outboundSchema,
  getContactResponse: components.GetContactResponse$outboundSchema.optional(),
  unexpectedErrorResponse: components.UnexpectedErrorResponse$outboundSchema
    .optional(),
}).transform((v) => {
  return remap$(v, {
    httpMeta: "HttpMeta",
    getContactResponse: "GetContactResponse",
    unexpectedErrorResponse: "UnexpectedErrorResponse",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CrmContactsOneResponse$ {
  /** @deprecated use `CrmContactsOneResponse$inboundSchema` instead. */
  export const inboundSchema = CrmContactsOneResponse$inboundSchema;
  /** @deprecated use `CrmContactsOneResponse$outboundSchema` instead. */
  export const outboundSchema = CrmContactsOneResponse$outboundSchema;
  /** @deprecated use `CrmContactsOneResponse$Outbound` instead. */
  export type Outbound = CrmContactsOneResponse$Outbound;
}

export function crmContactsOneResponseToJSON(
  crmContactsOneResponse: CrmContactsOneResponse,
): string {
  return JSON.stringify(
    CrmContactsOneResponse$outboundSchema.parse(crmContactsOneResponse),
  );
}

export function crmContactsOneResponseFromJSON(
  jsonString: string,
): SafeParseResult<CrmContactsOneResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CrmContactsOneResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CrmContactsOneResponse' from JSON`,
  );
}

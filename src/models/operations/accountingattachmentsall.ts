/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type AccountingAttachmentsAllGlobals = {
  /**
   * ID of the consumer which you want to get or push data from
   */
  consumerId?: string | undefined;
  /**
   * The ID of your Unify application
   */
  appId?: string | undefined;
};

export type AccountingAttachmentsAllRequest = {
  /**
   * The reference type of the document.
   */
  referenceType: components.AttachmentReferenceType;
  /**
   * The reference id of the object to retrieve.
   */
  referenceId: string;
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

export type AccountingAttachmentsAllResponse = {
  httpMeta: components.HTTPMetadata;
  /**
   * Attachments
   */
  getAttachmentsResponse?: components.GetAttachmentsResponse | undefined;
  /**
   * Unexpected error
   */
  unexpectedErrorResponse?: components.UnexpectedErrorResponse | undefined;
};

/** @internal */
export const AccountingAttachmentsAllGlobals$inboundSchema: z.ZodType<
  AccountingAttachmentsAllGlobals,
  z.ZodTypeDef,
  unknown
> = z.object({
  consumerId: z.string().optional(),
  appId: z.string().optional(),
});

/** @internal */
export type AccountingAttachmentsAllGlobals$Outbound = {
  consumerId?: string | undefined;
  appId?: string | undefined;
};

/** @internal */
export const AccountingAttachmentsAllGlobals$outboundSchema: z.ZodType<
  AccountingAttachmentsAllGlobals$Outbound,
  z.ZodTypeDef,
  AccountingAttachmentsAllGlobals
> = z.object({
  consumerId: z.string().optional(),
  appId: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AccountingAttachmentsAllGlobals$ {
  /** @deprecated use `AccountingAttachmentsAllGlobals$inboundSchema` instead. */
  export const inboundSchema = AccountingAttachmentsAllGlobals$inboundSchema;
  /** @deprecated use `AccountingAttachmentsAllGlobals$outboundSchema` instead. */
  export const outboundSchema = AccountingAttachmentsAllGlobals$outboundSchema;
  /** @deprecated use `AccountingAttachmentsAllGlobals$Outbound` instead. */
  export type Outbound = AccountingAttachmentsAllGlobals$Outbound;
}

export function accountingAttachmentsAllGlobalsToJSON(
  accountingAttachmentsAllGlobals: AccountingAttachmentsAllGlobals,
): string {
  return JSON.stringify(
    AccountingAttachmentsAllGlobals$outboundSchema.parse(
      accountingAttachmentsAllGlobals,
    ),
  );
}

export function accountingAttachmentsAllGlobalsFromJSON(
  jsonString: string,
): SafeParseResult<AccountingAttachmentsAllGlobals, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => AccountingAttachmentsAllGlobals$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AccountingAttachmentsAllGlobals' from JSON`,
  );
}

/** @internal */
export const AccountingAttachmentsAllRequest$inboundSchema: z.ZodType<
  AccountingAttachmentsAllRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  reference_type: components.AttachmentReferenceType$inboundSchema,
  reference_id: z.string(),
  raw: z.boolean().default(false),
  serviceId: z.string().optional(),
  cursor: z.nullable(z.string()).optional(),
  limit: z.number().int().default(20),
  fields: z.nullable(z.string()).optional(),
}).transform((v) => {
  return remap$(v, {
    "reference_type": "referenceType",
    "reference_id": "referenceId",
  });
});

/** @internal */
export type AccountingAttachmentsAllRequest$Outbound = {
  reference_type: string;
  reference_id: string;
  raw: boolean;
  serviceId?: string | undefined;
  cursor?: string | null | undefined;
  limit: number;
  fields?: string | null | undefined;
};

/** @internal */
export const AccountingAttachmentsAllRequest$outboundSchema: z.ZodType<
  AccountingAttachmentsAllRequest$Outbound,
  z.ZodTypeDef,
  AccountingAttachmentsAllRequest
> = z.object({
  referenceType: components.AttachmentReferenceType$outboundSchema,
  referenceId: z.string(),
  raw: z.boolean().default(false),
  serviceId: z.string().optional(),
  cursor: z.nullable(z.string()).optional(),
  limit: z.number().int().default(20),
  fields: z.nullable(z.string()).optional(),
}).transform((v) => {
  return remap$(v, {
    referenceType: "reference_type",
    referenceId: "reference_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AccountingAttachmentsAllRequest$ {
  /** @deprecated use `AccountingAttachmentsAllRequest$inboundSchema` instead. */
  export const inboundSchema = AccountingAttachmentsAllRequest$inboundSchema;
  /** @deprecated use `AccountingAttachmentsAllRequest$outboundSchema` instead. */
  export const outboundSchema = AccountingAttachmentsAllRequest$outboundSchema;
  /** @deprecated use `AccountingAttachmentsAllRequest$Outbound` instead. */
  export type Outbound = AccountingAttachmentsAllRequest$Outbound;
}

export function accountingAttachmentsAllRequestToJSON(
  accountingAttachmentsAllRequest: AccountingAttachmentsAllRequest,
): string {
  return JSON.stringify(
    AccountingAttachmentsAllRequest$outboundSchema.parse(
      accountingAttachmentsAllRequest,
    ),
  );
}

export function accountingAttachmentsAllRequestFromJSON(
  jsonString: string,
): SafeParseResult<AccountingAttachmentsAllRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => AccountingAttachmentsAllRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AccountingAttachmentsAllRequest' from JSON`,
  );
}

/** @internal */
export const AccountingAttachmentsAllResponse$inboundSchema: z.ZodType<
  AccountingAttachmentsAllResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  HttpMeta: components.HTTPMetadata$inboundSchema,
  GetAttachmentsResponse: components.GetAttachmentsResponse$inboundSchema
    .optional(),
  UnexpectedErrorResponse: components.UnexpectedErrorResponse$inboundSchema
    .optional(),
}).transform((v) => {
  return remap$(v, {
    "HttpMeta": "httpMeta",
    "GetAttachmentsResponse": "getAttachmentsResponse",
    "UnexpectedErrorResponse": "unexpectedErrorResponse",
  });
});

/** @internal */
export type AccountingAttachmentsAllResponse$Outbound = {
  HttpMeta: components.HTTPMetadata$Outbound;
  GetAttachmentsResponse?:
    | components.GetAttachmentsResponse$Outbound
    | undefined;
  UnexpectedErrorResponse?:
    | components.UnexpectedErrorResponse$Outbound
    | undefined;
};

/** @internal */
export const AccountingAttachmentsAllResponse$outboundSchema: z.ZodType<
  AccountingAttachmentsAllResponse$Outbound,
  z.ZodTypeDef,
  AccountingAttachmentsAllResponse
> = z.object({
  httpMeta: components.HTTPMetadata$outboundSchema,
  getAttachmentsResponse: components.GetAttachmentsResponse$outboundSchema
    .optional(),
  unexpectedErrorResponse: components.UnexpectedErrorResponse$outboundSchema
    .optional(),
}).transform((v) => {
  return remap$(v, {
    httpMeta: "HttpMeta",
    getAttachmentsResponse: "GetAttachmentsResponse",
    unexpectedErrorResponse: "UnexpectedErrorResponse",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AccountingAttachmentsAllResponse$ {
  /** @deprecated use `AccountingAttachmentsAllResponse$inboundSchema` instead. */
  export const inboundSchema = AccountingAttachmentsAllResponse$inboundSchema;
  /** @deprecated use `AccountingAttachmentsAllResponse$outboundSchema` instead. */
  export const outboundSchema = AccountingAttachmentsAllResponse$outboundSchema;
  /** @deprecated use `AccountingAttachmentsAllResponse$Outbound` instead. */
  export type Outbound = AccountingAttachmentsAllResponse$Outbound;
}

export function accountingAttachmentsAllResponseToJSON(
  accountingAttachmentsAllResponse: AccountingAttachmentsAllResponse,
): string {
  return JSON.stringify(
    AccountingAttachmentsAllResponse$outboundSchema.parse(
      accountingAttachmentsAllResponse,
    ),
  );
}

export function accountingAttachmentsAllResponseFromJSON(
  jsonString: string,
): SafeParseResult<AccountingAttachmentsAllResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => AccountingAttachmentsAllResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AccountingAttachmentsAllResponse' from JSON`,
  );
}

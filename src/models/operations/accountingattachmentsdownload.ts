/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type AccountingAttachmentsDownloadGlobals = {
  /**
   * ID of the consumer which you want to get or push data from
   */
  consumerId?: string | undefined;
  /**
   * The ID of your Unify application
   */
  appId?: string | undefined;
};

export type AccountingAttachmentsDownloadRequest = {
  /**
   * The reference type of the document.
   */
  referenceType: components.AttachmentReferenceType;
  /**
   * The reference id of the object to retrieve.
   */
  referenceId: string;
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
   * The 'fields' parameter allows API users to specify the fields they want to include in the API response. If this parameter is not present, the API will return all available fields. If this parameter is present, only the fields specified in the comma-separated string will be included in the response. Nested properties can also be requested by using a dot notation. <br /><br />Example: `fields=name,email,addresses.city`<br /><br />In the example above, the response will only include the fields "name", "email" and "addresses.city". If any other fields are available, they will be excluded.
   */
  fields?: string | null | undefined;
};

export type AccountingAttachmentsDownloadResponse = {
  httpMeta: components.HTTPMetadata;
  /**
   * Attachment Download
   */
  getAttachmentDownloadResponse?: ReadableStream<Uint8Array> | undefined;
  /**
   * Unexpected error
   */
  unexpectedErrorResponse?: components.UnexpectedErrorResponse | undefined;
};

/** @internal */
export const AccountingAttachmentsDownloadGlobals$inboundSchema: z.ZodType<
  AccountingAttachmentsDownloadGlobals,
  z.ZodTypeDef,
  unknown
> = z.object({
  consumerId: z.string().optional(),
  appId: z.string().optional(),
});

/** @internal */
export type AccountingAttachmentsDownloadGlobals$Outbound = {
  consumerId?: string | undefined;
  appId?: string | undefined;
};

/** @internal */
export const AccountingAttachmentsDownloadGlobals$outboundSchema: z.ZodType<
  AccountingAttachmentsDownloadGlobals$Outbound,
  z.ZodTypeDef,
  AccountingAttachmentsDownloadGlobals
> = z.object({
  consumerId: z.string().optional(),
  appId: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AccountingAttachmentsDownloadGlobals$ {
  /** @deprecated use `AccountingAttachmentsDownloadGlobals$inboundSchema` instead. */
  export const inboundSchema =
    AccountingAttachmentsDownloadGlobals$inboundSchema;
  /** @deprecated use `AccountingAttachmentsDownloadGlobals$outboundSchema` instead. */
  export const outboundSchema =
    AccountingAttachmentsDownloadGlobals$outboundSchema;
  /** @deprecated use `AccountingAttachmentsDownloadGlobals$Outbound` instead. */
  export type Outbound = AccountingAttachmentsDownloadGlobals$Outbound;
}

export function accountingAttachmentsDownloadGlobalsToJSON(
  accountingAttachmentsDownloadGlobals: AccountingAttachmentsDownloadGlobals,
): string {
  return JSON.stringify(
    AccountingAttachmentsDownloadGlobals$outboundSchema.parse(
      accountingAttachmentsDownloadGlobals,
    ),
  );
}

export function accountingAttachmentsDownloadGlobalsFromJSON(
  jsonString: string,
): SafeParseResult<AccountingAttachmentsDownloadGlobals, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      AccountingAttachmentsDownloadGlobals$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AccountingAttachmentsDownloadGlobals' from JSON`,
  );
}

/** @internal */
export const AccountingAttachmentsDownloadRequest$inboundSchema: z.ZodType<
  AccountingAttachmentsDownloadRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  reference_type: components.AttachmentReferenceType$inboundSchema,
  reference_id: z.string(),
  id: z.string(),
  consumerId: z.string().optional(),
  appId: z.string().optional(),
  serviceId: z.string().optional(),
  fields: z.nullable(z.string()).optional(),
}).transform((v) => {
  return remap$(v, {
    "reference_type": "referenceType",
    "reference_id": "referenceId",
  });
});

/** @internal */
export type AccountingAttachmentsDownloadRequest$Outbound = {
  reference_type: string;
  reference_id: string;
  id: string;
  consumerId?: string | undefined;
  appId?: string | undefined;
  serviceId?: string | undefined;
  fields?: string | null | undefined;
};

/** @internal */
export const AccountingAttachmentsDownloadRequest$outboundSchema: z.ZodType<
  AccountingAttachmentsDownloadRequest$Outbound,
  z.ZodTypeDef,
  AccountingAttachmentsDownloadRequest
> = z.object({
  referenceType: components.AttachmentReferenceType$outboundSchema,
  referenceId: z.string(),
  id: z.string(),
  consumerId: z.string().optional(),
  appId: z.string().optional(),
  serviceId: z.string().optional(),
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
export namespace AccountingAttachmentsDownloadRequest$ {
  /** @deprecated use `AccountingAttachmentsDownloadRequest$inboundSchema` instead. */
  export const inboundSchema =
    AccountingAttachmentsDownloadRequest$inboundSchema;
  /** @deprecated use `AccountingAttachmentsDownloadRequest$outboundSchema` instead. */
  export const outboundSchema =
    AccountingAttachmentsDownloadRequest$outboundSchema;
  /** @deprecated use `AccountingAttachmentsDownloadRequest$Outbound` instead. */
  export type Outbound = AccountingAttachmentsDownloadRequest$Outbound;
}

export function accountingAttachmentsDownloadRequestToJSON(
  accountingAttachmentsDownloadRequest: AccountingAttachmentsDownloadRequest,
): string {
  return JSON.stringify(
    AccountingAttachmentsDownloadRequest$outboundSchema.parse(
      accountingAttachmentsDownloadRequest,
    ),
  );
}

export function accountingAttachmentsDownloadRequestFromJSON(
  jsonString: string,
): SafeParseResult<AccountingAttachmentsDownloadRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      AccountingAttachmentsDownloadRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AccountingAttachmentsDownloadRequest' from JSON`,
  );
}

/** @internal */
export const AccountingAttachmentsDownloadResponse$inboundSchema: z.ZodType<
  AccountingAttachmentsDownloadResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  HttpMeta: components.HTTPMetadata$inboundSchema,
  GetAttachmentDownloadResponse: z.instanceof(ReadableStream<Uint8Array>)
    .optional(),
  UnexpectedErrorResponse: components.UnexpectedErrorResponse$inboundSchema
    .optional(),
}).transform((v) => {
  return remap$(v, {
    "HttpMeta": "httpMeta",
    "GetAttachmentDownloadResponse": "getAttachmentDownloadResponse",
    "UnexpectedErrorResponse": "unexpectedErrorResponse",
  });
});

/** @internal */
export type AccountingAttachmentsDownloadResponse$Outbound = {
  HttpMeta: components.HTTPMetadata$Outbound;
  GetAttachmentDownloadResponse?: ReadableStream<Uint8Array> | undefined;
  UnexpectedErrorResponse?:
    | components.UnexpectedErrorResponse$Outbound
    | undefined;
};

/** @internal */
export const AccountingAttachmentsDownloadResponse$outboundSchema: z.ZodType<
  AccountingAttachmentsDownloadResponse$Outbound,
  z.ZodTypeDef,
  AccountingAttachmentsDownloadResponse
> = z.object({
  httpMeta: components.HTTPMetadata$outboundSchema,
  getAttachmentDownloadResponse: z.instanceof(ReadableStream<Uint8Array>)
    .optional(),
  unexpectedErrorResponse: components.UnexpectedErrorResponse$outboundSchema
    .optional(),
}).transform((v) => {
  return remap$(v, {
    httpMeta: "HttpMeta",
    getAttachmentDownloadResponse: "GetAttachmentDownloadResponse",
    unexpectedErrorResponse: "UnexpectedErrorResponse",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AccountingAttachmentsDownloadResponse$ {
  /** @deprecated use `AccountingAttachmentsDownloadResponse$inboundSchema` instead. */
  export const inboundSchema =
    AccountingAttachmentsDownloadResponse$inboundSchema;
  /** @deprecated use `AccountingAttachmentsDownloadResponse$outboundSchema` instead. */
  export const outboundSchema =
    AccountingAttachmentsDownloadResponse$outboundSchema;
  /** @deprecated use `AccountingAttachmentsDownloadResponse$Outbound` instead. */
  export type Outbound = AccountingAttachmentsDownloadResponse$Outbound;
}

export function accountingAttachmentsDownloadResponseToJSON(
  accountingAttachmentsDownloadResponse: AccountingAttachmentsDownloadResponse,
): string {
  return JSON.stringify(
    AccountingAttachmentsDownloadResponse$outboundSchema.parse(
      accountingAttachmentsDownloadResponse,
    ),
  );
}

export function accountingAttachmentsDownloadResponseFromJSON(
  jsonString: string,
): SafeParseResult<AccountingAttachmentsDownloadResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      AccountingAttachmentsDownloadResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AccountingAttachmentsDownloadResponse' from JSON`,
  );
}

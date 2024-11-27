/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type FileStorageSharedLinksOneGlobals = {
  /**
   * ID of the consumer which you want to get or push data from
   */
  consumerId?: string | undefined;
  /**
   * The ID of your Unify application
   */
  appId?: string | undefined;
};

export type FileStorageSharedLinksOneRequest = {
  /**
   * ID of the record you are acting upon.
   */
  id: string;
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
};

export type FileStorageSharedLinksOneResponse = {
  httpMeta: components.HTTPMetadata;
  /**
   * Shared Link
   */
  getSharedLinkResponse?: components.GetSharedLinkResponse | undefined;
  /**
   * Unexpected error
   */
  unexpectedErrorResponse?: components.UnexpectedErrorResponse | undefined;
};

/** @internal */
export const FileStorageSharedLinksOneGlobals$inboundSchema: z.ZodType<
  FileStorageSharedLinksOneGlobals,
  z.ZodTypeDef,
  unknown
> = z.object({
  consumerId: z.string().optional(),
  appId: z.string().optional(),
});

/** @internal */
export type FileStorageSharedLinksOneGlobals$Outbound = {
  consumerId?: string | undefined;
  appId?: string | undefined;
};

/** @internal */
export const FileStorageSharedLinksOneGlobals$outboundSchema: z.ZodType<
  FileStorageSharedLinksOneGlobals$Outbound,
  z.ZodTypeDef,
  FileStorageSharedLinksOneGlobals
> = z.object({
  consumerId: z.string().optional(),
  appId: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace FileStorageSharedLinksOneGlobals$ {
  /** @deprecated use `FileStorageSharedLinksOneGlobals$inboundSchema` instead. */
  export const inboundSchema = FileStorageSharedLinksOneGlobals$inboundSchema;
  /** @deprecated use `FileStorageSharedLinksOneGlobals$outboundSchema` instead. */
  export const outboundSchema = FileStorageSharedLinksOneGlobals$outboundSchema;
  /** @deprecated use `FileStorageSharedLinksOneGlobals$Outbound` instead. */
  export type Outbound = FileStorageSharedLinksOneGlobals$Outbound;
}

export function fileStorageSharedLinksOneGlobalsToJSON(
  fileStorageSharedLinksOneGlobals: FileStorageSharedLinksOneGlobals,
): string {
  return JSON.stringify(
    FileStorageSharedLinksOneGlobals$outboundSchema.parse(
      fileStorageSharedLinksOneGlobals,
    ),
  );
}

export function fileStorageSharedLinksOneGlobalsFromJSON(
  jsonString: string,
): SafeParseResult<FileStorageSharedLinksOneGlobals, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => FileStorageSharedLinksOneGlobals$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'FileStorageSharedLinksOneGlobals' from JSON`,
  );
}

/** @internal */
export const FileStorageSharedLinksOneRequest$inboundSchema: z.ZodType<
  FileStorageSharedLinksOneRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
  serviceId: z.string().optional(),
  raw: z.boolean().default(false),
  fields: z.nullable(z.string()).optional(),
});

/** @internal */
export type FileStorageSharedLinksOneRequest$Outbound = {
  id: string;
  serviceId?: string | undefined;
  raw: boolean;
  fields?: string | null | undefined;
};

/** @internal */
export const FileStorageSharedLinksOneRequest$outboundSchema: z.ZodType<
  FileStorageSharedLinksOneRequest$Outbound,
  z.ZodTypeDef,
  FileStorageSharedLinksOneRequest
> = z.object({
  id: z.string(),
  serviceId: z.string().optional(),
  raw: z.boolean().default(false),
  fields: z.nullable(z.string()).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace FileStorageSharedLinksOneRequest$ {
  /** @deprecated use `FileStorageSharedLinksOneRequest$inboundSchema` instead. */
  export const inboundSchema = FileStorageSharedLinksOneRequest$inboundSchema;
  /** @deprecated use `FileStorageSharedLinksOneRequest$outboundSchema` instead. */
  export const outboundSchema = FileStorageSharedLinksOneRequest$outboundSchema;
  /** @deprecated use `FileStorageSharedLinksOneRequest$Outbound` instead. */
  export type Outbound = FileStorageSharedLinksOneRequest$Outbound;
}

export function fileStorageSharedLinksOneRequestToJSON(
  fileStorageSharedLinksOneRequest: FileStorageSharedLinksOneRequest,
): string {
  return JSON.stringify(
    FileStorageSharedLinksOneRequest$outboundSchema.parse(
      fileStorageSharedLinksOneRequest,
    ),
  );
}

export function fileStorageSharedLinksOneRequestFromJSON(
  jsonString: string,
): SafeParseResult<FileStorageSharedLinksOneRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => FileStorageSharedLinksOneRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'FileStorageSharedLinksOneRequest' from JSON`,
  );
}

/** @internal */
export const FileStorageSharedLinksOneResponse$inboundSchema: z.ZodType<
  FileStorageSharedLinksOneResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  HttpMeta: components.HTTPMetadata$inboundSchema,
  GetSharedLinkResponse: components.GetSharedLinkResponse$inboundSchema
    .optional(),
  UnexpectedErrorResponse: components.UnexpectedErrorResponse$inboundSchema
    .optional(),
}).transform((v) => {
  return remap$(v, {
    "HttpMeta": "httpMeta",
    "GetSharedLinkResponse": "getSharedLinkResponse",
    "UnexpectedErrorResponse": "unexpectedErrorResponse",
  });
});

/** @internal */
export type FileStorageSharedLinksOneResponse$Outbound = {
  HttpMeta: components.HTTPMetadata$Outbound;
  GetSharedLinkResponse?: components.GetSharedLinkResponse$Outbound | undefined;
  UnexpectedErrorResponse?:
    | components.UnexpectedErrorResponse$Outbound
    | undefined;
};

/** @internal */
export const FileStorageSharedLinksOneResponse$outboundSchema: z.ZodType<
  FileStorageSharedLinksOneResponse$Outbound,
  z.ZodTypeDef,
  FileStorageSharedLinksOneResponse
> = z.object({
  httpMeta: components.HTTPMetadata$outboundSchema,
  getSharedLinkResponse: components.GetSharedLinkResponse$outboundSchema
    .optional(),
  unexpectedErrorResponse: components.UnexpectedErrorResponse$outboundSchema
    .optional(),
}).transform((v) => {
  return remap$(v, {
    httpMeta: "HttpMeta",
    getSharedLinkResponse: "GetSharedLinkResponse",
    unexpectedErrorResponse: "UnexpectedErrorResponse",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace FileStorageSharedLinksOneResponse$ {
  /** @deprecated use `FileStorageSharedLinksOneResponse$inboundSchema` instead. */
  export const inboundSchema = FileStorageSharedLinksOneResponse$inboundSchema;
  /** @deprecated use `FileStorageSharedLinksOneResponse$outboundSchema` instead. */
  export const outboundSchema =
    FileStorageSharedLinksOneResponse$outboundSchema;
  /** @deprecated use `FileStorageSharedLinksOneResponse$Outbound` instead. */
  export type Outbound = FileStorageSharedLinksOneResponse$Outbound;
}

export function fileStorageSharedLinksOneResponseToJSON(
  fileStorageSharedLinksOneResponse: FileStorageSharedLinksOneResponse,
): string {
  return JSON.stringify(
    FileStorageSharedLinksOneResponse$outboundSchema.parse(
      fileStorageSharedLinksOneResponse,
    ),
  );
}

export function fileStorageSharedLinksOneResponseFromJSON(
  jsonString: string,
): SafeParseResult<FileStorageSharedLinksOneResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => FileStorageSharedLinksOneResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'FileStorageSharedLinksOneResponse' from JSON`,
  );
}

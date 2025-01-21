/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type FileStorageFilesDownloadGlobals = {
  /**
   * ID of the consumer which you want to get or push data from
   */
  consumerId?: string | undefined;
  /**
   * The ID of your Unify application
   */
  appId?: string | undefined;
};

export type FileStorageFilesDownloadRequest = {
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

export type FileStorageFilesDownloadResponse = {
  httpMeta: components.HTTPMetadata;
  /**
   * File Download
   */
  getFileDownloadResponse?: ReadableStream<Uint8Array> | undefined;
  /**
   * Unexpected error
   */
  unexpectedErrorResponse?: components.UnexpectedErrorResponse | undefined;
};

/** @internal */
export const FileStorageFilesDownloadGlobals$inboundSchema: z.ZodType<
  FileStorageFilesDownloadGlobals,
  z.ZodTypeDef,
  unknown
> = z.object({
  consumerId: z.string().optional(),
  appId: z.string().optional(),
});

/** @internal */
export type FileStorageFilesDownloadGlobals$Outbound = {
  consumerId?: string | undefined;
  appId?: string | undefined;
};

/** @internal */
export const FileStorageFilesDownloadGlobals$outboundSchema: z.ZodType<
  FileStorageFilesDownloadGlobals$Outbound,
  z.ZodTypeDef,
  FileStorageFilesDownloadGlobals
> = z.object({
  consumerId: z.string().optional(),
  appId: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace FileStorageFilesDownloadGlobals$ {
  /** @deprecated use `FileStorageFilesDownloadGlobals$inboundSchema` instead. */
  export const inboundSchema = FileStorageFilesDownloadGlobals$inboundSchema;
  /** @deprecated use `FileStorageFilesDownloadGlobals$outboundSchema` instead. */
  export const outboundSchema = FileStorageFilesDownloadGlobals$outboundSchema;
  /** @deprecated use `FileStorageFilesDownloadGlobals$Outbound` instead. */
  export type Outbound = FileStorageFilesDownloadGlobals$Outbound;
}

export function fileStorageFilesDownloadGlobalsToJSON(
  fileStorageFilesDownloadGlobals: FileStorageFilesDownloadGlobals,
): string {
  return JSON.stringify(
    FileStorageFilesDownloadGlobals$outboundSchema.parse(
      fileStorageFilesDownloadGlobals,
    ),
  );
}

export function fileStorageFilesDownloadGlobalsFromJSON(
  jsonString: string,
): SafeParseResult<FileStorageFilesDownloadGlobals, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => FileStorageFilesDownloadGlobals$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'FileStorageFilesDownloadGlobals' from JSON`,
  );
}

/** @internal */
export const FileStorageFilesDownloadRequest$inboundSchema: z.ZodType<
  FileStorageFilesDownloadRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
  consumerId: z.string().optional(),
  appId: z.string().optional(),
  serviceId: z.string().optional(),
  fields: z.nullable(z.string()).optional(),
});

/** @internal */
export type FileStorageFilesDownloadRequest$Outbound = {
  id: string;
  consumerId?: string | undefined;
  appId?: string | undefined;
  serviceId?: string | undefined;
  fields?: string | null | undefined;
};

/** @internal */
export const FileStorageFilesDownloadRequest$outboundSchema: z.ZodType<
  FileStorageFilesDownloadRequest$Outbound,
  z.ZodTypeDef,
  FileStorageFilesDownloadRequest
> = z.object({
  id: z.string(),
  consumerId: z.string().optional(),
  appId: z.string().optional(),
  serviceId: z.string().optional(),
  fields: z.nullable(z.string()).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace FileStorageFilesDownloadRequest$ {
  /** @deprecated use `FileStorageFilesDownloadRequest$inboundSchema` instead. */
  export const inboundSchema = FileStorageFilesDownloadRequest$inboundSchema;
  /** @deprecated use `FileStorageFilesDownloadRequest$outboundSchema` instead. */
  export const outboundSchema = FileStorageFilesDownloadRequest$outboundSchema;
  /** @deprecated use `FileStorageFilesDownloadRequest$Outbound` instead. */
  export type Outbound = FileStorageFilesDownloadRequest$Outbound;
}

export function fileStorageFilesDownloadRequestToJSON(
  fileStorageFilesDownloadRequest: FileStorageFilesDownloadRequest,
): string {
  return JSON.stringify(
    FileStorageFilesDownloadRequest$outboundSchema.parse(
      fileStorageFilesDownloadRequest,
    ),
  );
}

export function fileStorageFilesDownloadRequestFromJSON(
  jsonString: string,
): SafeParseResult<FileStorageFilesDownloadRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => FileStorageFilesDownloadRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'FileStorageFilesDownloadRequest' from JSON`,
  );
}

/** @internal */
export const FileStorageFilesDownloadResponse$inboundSchema: z.ZodType<
  FileStorageFilesDownloadResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  HttpMeta: components.HTTPMetadata$inboundSchema,
  GetFileDownloadResponse: z.instanceof(ReadableStream<Uint8Array>).optional(),
  UnexpectedErrorResponse: components.UnexpectedErrorResponse$inboundSchema
    .optional(),
}).transform((v) => {
  return remap$(v, {
    "HttpMeta": "httpMeta",
    "GetFileDownloadResponse": "getFileDownloadResponse",
    "UnexpectedErrorResponse": "unexpectedErrorResponse",
  });
});

/** @internal */
export type FileStorageFilesDownloadResponse$Outbound = {
  HttpMeta: components.HTTPMetadata$Outbound;
  GetFileDownloadResponse?: ReadableStream<Uint8Array> | undefined;
  UnexpectedErrorResponse?:
    | components.UnexpectedErrorResponse$Outbound
    | undefined;
};

/** @internal */
export const FileStorageFilesDownloadResponse$outboundSchema: z.ZodType<
  FileStorageFilesDownloadResponse$Outbound,
  z.ZodTypeDef,
  FileStorageFilesDownloadResponse
> = z.object({
  httpMeta: components.HTTPMetadata$outboundSchema,
  getFileDownloadResponse: z.instanceof(ReadableStream<Uint8Array>).optional(),
  unexpectedErrorResponse: components.UnexpectedErrorResponse$outboundSchema
    .optional(),
}).transform((v) => {
  return remap$(v, {
    httpMeta: "HttpMeta",
    getFileDownloadResponse: "GetFileDownloadResponse",
    unexpectedErrorResponse: "UnexpectedErrorResponse",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace FileStorageFilesDownloadResponse$ {
  /** @deprecated use `FileStorageFilesDownloadResponse$inboundSchema` instead. */
  export const inboundSchema = FileStorageFilesDownloadResponse$inboundSchema;
  /** @deprecated use `FileStorageFilesDownloadResponse$outboundSchema` instead. */
  export const outboundSchema = FileStorageFilesDownloadResponse$outboundSchema;
  /** @deprecated use `FileStorageFilesDownloadResponse$Outbound` instead. */
  export type Outbound = FileStorageFilesDownloadResponse$Outbound;
}

export function fileStorageFilesDownloadResponseToJSON(
  fileStorageFilesDownloadResponse: FileStorageFilesDownloadResponse,
): string {
  return JSON.stringify(
    FileStorageFilesDownloadResponse$outboundSchema.parse(
      fileStorageFilesDownloadResponse,
    ),
  );
}

export function fileStorageFilesDownloadResponseFromJSON(
  jsonString: string,
): SafeParseResult<FileStorageFilesDownloadResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => FileStorageFilesDownloadResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'FileStorageFilesDownloadResponse' from JSON`,
  );
}

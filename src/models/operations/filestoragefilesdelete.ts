/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type FileStorageFilesDeleteGlobals = {
  /**
   * ID of the consumer which you want to get or push data from
   */
  consumerId?: string | undefined;
  /**
   * The ID of your Unify application
   */
  appId?: string | undefined;
};

export type FileStorageFilesDeleteRequest = {
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
};

export type FileStorageFilesDeleteResponse = {
  httpMeta: components.HTTPMetadata;
  /**
   * Files
   */
  deleteFileResponse?: components.DeleteFileResponse | undefined;
  /**
   * Unexpected error
   */
  unexpectedErrorResponse?: components.UnexpectedErrorResponse | undefined;
};

/** @internal */
export const FileStorageFilesDeleteGlobals$inboundSchema: z.ZodType<
  FileStorageFilesDeleteGlobals,
  z.ZodTypeDef,
  unknown
> = z.object({
  consumerId: z.string().optional(),
  appId: z.string().optional(),
});

/** @internal */
export type FileStorageFilesDeleteGlobals$Outbound = {
  consumerId?: string | undefined;
  appId?: string | undefined;
};

/** @internal */
export const FileStorageFilesDeleteGlobals$outboundSchema: z.ZodType<
  FileStorageFilesDeleteGlobals$Outbound,
  z.ZodTypeDef,
  FileStorageFilesDeleteGlobals
> = z.object({
  consumerId: z.string().optional(),
  appId: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace FileStorageFilesDeleteGlobals$ {
  /** @deprecated use `FileStorageFilesDeleteGlobals$inboundSchema` instead. */
  export const inboundSchema = FileStorageFilesDeleteGlobals$inboundSchema;
  /** @deprecated use `FileStorageFilesDeleteGlobals$outboundSchema` instead. */
  export const outboundSchema = FileStorageFilesDeleteGlobals$outboundSchema;
  /** @deprecated use `FileStorageFilesDeleteGlobals$Outbound` instead. */
  export type Outbound = FileStorageFilesDeleteGlobals$Outbound;
}

export function fileStorageFilesDeleteGlobalsToJSON(
  fileStorageFilesDeleteGlobals: FileStorageFilesDeleteGlobals,
): string {
  return JSON.stringify(
    FileStorageFilesDeleteGlobals$outboundSchema.parse(
      fileStorageFilesDeleteGlobals,
    ),
  );
}

export function fileStorageFilesDeleteGlobalsFromJSON(
  jsonString: string,
): SafeParseResult<FileStorageFilesDeleteGlobals, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => FileStorageFilesDeleteGlobals$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'FileStorageFilesDeleteGlobals' from JSON`,
  );
}

/** @internal */
export const FileStorageFilesDeleteRequest$inboundSchema: z.ZodType<
  FileStorageFilesDeleteRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
  serviceId: z.string().optional(),
  raw: z.boolean().default(false),
});

/** @internal */
export type FileStorageFilesDeleteRequest$Outbound = {
  id: string;
  serviceId?: string | undefined;
  raw: boolean;
};

/** @internal */
export const FileStorageFilesDeleteRequest$outboundSchema: z.ZodType<
  FileStorageFilesDeleteRequest$Outbound,
  z.ZodTypeDef,
  FileStorageFilesDeleteRequest
> = z.object({
  id: z.string(),
  serviceId: z.string().optional(),
  raw: z.boolean().default(false),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace FileStorageFilesDeleteRequest$ {
  /** @deprecated use `FileStorageFilesDeleteRequest$inboundSchema` instead. */
  export const inboundSchema = FileStorageFilesDeleteRequest$inboundSchema;
  /** @deprecated use `FileStorageFilesDeleteRequest$outboundSchema` instead. */
  export const outboundSchema = FileStorageFilesDeleteRequest$outboundSchema;
  /** @deprecated use `FileStorageFilesDeleteRequest$Outbound` instead. */
  export type Outbound = FileStorageFilesDeleteRequest$Outbound;
}

export function fileStorageFilesDeleteRequestToJSON(
  fileStorageFilesDeleteRequest: FileStorageFilesDeleteRequest,
): string {
  return JSON.stringify(
    FileStorageFilesDeleteRequest$outboundSchema.parse(
      fileStorageFilesDeleteRequest,
    ),
  );
}

export function fileStorageFilesDeleteRequestFromJSON(
  jsonString: string,
): SafeParseResult<FileStorageFilesDeleteRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => FileStorageFilesDeleteRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'FileStorageFilesDeleteRequest' from JSON`,
  );
}

/** @internal */
export const FileStorageFilesDeleteResponse$inboundSchema: z.ZodType<
  FileStorageFilesDeleteResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  HttpMeta: components.HTTPMetadata$inboundSchema,
  DeleteFileResponse: components.DeleteFileResponse$inboundSchema.optional(),
  UnexpectedErrorResponse: components.UnexpectedErrorResponse$inboundSchema
    .optional(),
}).transform((v) => {
  return remap$(v, {
    "HttpMeta": "httpMeta",
    "DeleteFileResponse": "deleteFileResponse",
    "UnexpectedErrorResponse": "unexpectedErrorResponse",
  });
});

/** @internal */
export type FileStorageFilesDeleteResponse$Outbound = {
  HttpMeta: components.HTTPMetadata$Outbound;
  DeleteFileResponse?: components.DeleteFileResponse$Outbound | undefined;
  UnexpectedErrorResponse?:
    | components.UnexpectedErrorResponse$Outbound
    | undefined;
};

/** @internal */
export const FileStorageFilesDeleteResponse$outboundSchema: z.ZodType<
  FileStorageFilesDeleteResponse$Outbound,
  z.ZodTypeDef,
  FileStorageFilesDeleteResponse
> = z.object({
  httpMeta: components.HTTPMetadata$outboundSchema,
  deleteFileResponse: components.DeleteFileResponse$outboundSchema.optional(),
  unexpectedErrorResponse: components.UnexpectedErrorResponse$outboundSchema
    .optional(),
}).transform((v) => {
  return remap$(v, {
    httpMeta: "HttpMeta",
    deleteFileResponse: "DeleteFileResponse",
    unexpectedErrorResponse: "UnexpectedErrorResponse",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace FileStorageFilesDeleteResponse$ {
  /** @deprecated use `FileStorageFilesDeleteResponse$inboundSchema` instead. */
  export const inboundSchema = FileStorageFilesDeleteResponse$inboundSchema;
  /** @deprecated use `FileStorageFilesDeleteResponse$outboundSchema` instead. */
  export const outboundSchema = FileStorageFilesDeleteResponse$outboundSchema;
  /** @deprecated use `FileStorageFilesDeleteResponse$Outbound` instead. */
  export type Outbound = FileStorageFilesDeleteResponse$Outbound;
}

export function fileStorageFilesDeleteResponseToJSON(
  fileStorageFilesDeleteResponse: FileStorageFilesDeleteResponse,
): string {
  return JSON.stringify(
    FileStorageFilesDeleteResponse$outboundSchema.parse(
      fileStorageFilesDeleteResponse,
    ),
  );
}

export function fileStorageFilesDeleteResponseFromJSON(
  jsonString: string,
): SafeParseResult<FileStorageFilesDeleteResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => FileStorageFilesDeleteResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'FileStorageFilesDeleteResponse' from JSON`,
  );
}

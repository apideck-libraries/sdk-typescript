/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type FileStorageFoldersUpdateGlobals = {
  /**
   * ID of the consumer which you want to get or push data from
   */
  consumerId?: string | undefined;
  /**
   * The ID of your Unify application
   */
  appId?: string | undefined;
};

export type FileStorageFoldersUpdateRequest = {
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
  updateFolderRequest: components.UpdateFolderRequest;
};

export type FileStorageFoldersUpdateResponse = {
  httpMeta: components.HTTPMetadata;
  /**
   * Folders
   */
  updateFolderResponse?: components.UpdateFolderResponse | undefined;
  /**
   * Unexpected error
   */
  unexpectedErrorResponse?: components.UnexpectedErrorResponse | undefined;
};

/** @internal */
export const FileStorageFoldersUpdateGlobals$inboundSchema: z.ZodType<
  FileStorageFoldersUpdateGlobals,
  z.ZodTypeDef,
  unknown
> = z.object({
  consumerId: z.string().optional(),
  appId: z.string().optional(),
});

/** @internal */
export type FileStorageFoldersUpdateGlobals$Outbound = {
  consumerId?: string | undefined;
  appId?: string | undefined;
};

/** @internal */
export const FileStorageFoldersUpdateGlobals$outboundSchema: z.ZodType<
  FileStorageFoldersUpdateGlobals$Outbound,
  z.ZodTypeDef,
  FileStorageFoldersUpdateGlobals
> = z.object({
  consumerId: z.string().optional(),
  appId: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace FileStorageFoldersUpdateGlobals$ {
  /** @deprecated use `FileStorageFoldersUpdateGlobals$inboundSchema` instead. */
  export const inboundSchema = FileStorageFoldersUpdateGlobals$inboundSchema;
  /** @deprecated use `FileStorageFoldersUpdateGlobals$outboundSchema` instead. */
  export const outboundSchema = FileStorageFoldersUpdateGlobals$outboundSchema;
  /** @deprecated use `FileStorageFoldersUpdateGlobals$Outbound` instead. */
  export type Outbound = FileStorageFoldersUpdateGlobals$Outbound;
}

export function fileStorageFoldersUpdateGlobalsToJSON(
  fileStorageFoldersUpdateGlobals: FileStorageFoldersUpdateGlobals,
): string {
  return JSON.stringify(
    FileStorageFoldersUpdateGlobals$outboundSchema.parse(
      fileStorageFoldersUpdateGlobals,
    ),
  );
}

export function fileStorageFoldersUpdateGlobalsFromJSON(
  jsonString: string,
): SafeParseResult<FileStorageFoldersUpdateGlobals, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => FileStorageFoldersUpdateGlobals$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'FileStorageFoldersUpdateGlobals' from JSON`,
  );
}

/** @internal */
export const FileStorageFoldersUpdateRequest$inboundSchema: z.ZodType<
  FileStorageFoldersUpdateRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
  consumerId: z.string().optional(),
  appId: z.string().optional(),
  serviceId: z.string().optional(),
  raw: z.boolean().default(false),
  UpdateFolderRequest: components.UpdateFolderRequest$inboundSchema,
}).transform((v) => {
  return remap$(v, {
    "UpdateFolderRequest": "updateFolderRequest",
  });
});

/** @internal */
export type FileStorageFoldersUpdateRequest$Outbound = {
  id: string;
  consumerId?: string | undefined;
  appId?: string | undefined;
  serviceId?: string | undefined;
  raw: boolean;
  UpdateFolderRequest: components.UpdateFolderRequest$Outbound;
};

/** @internal */
export const FileStorageFoldersUpdateRequest$outboundSchema: z.ZodType<
  FileStorageFoldersUpdateRequest$Outbound,
  z.ZodTypeDef,
  FileStorageFoldersUpdateRequest
> = z.object({
  id: z.string(),
  consumerId: z.string().optional(),
  appId: z.string().optional(),
  serviceId: z.string().optional(),
  raw: z.boolean().default(false),
  updateFolderRequest: components.UpdateFolderRequest$outboundSchema,
}).transform((v) => {
  return remap$(v, {
    updateFolderRequest: "UpdateFolderRequest",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace FileStorageFoldersUpdateRequest$ {
  /** @deprecated use `FileStorageFoldersUpdateRequest$inboundSchema` instead. */
  export const inboundSchema = FileStorageFoldersUpdateRequest$inboundSchema;
  /** @deprecated use `FileStorageFoldersUpdateRequest$outboundSchema` instead. */
  export const outboundSchema = FileStorageFoldersUpdateRequest$outboundSchema;
  /** @deprecated use `FileStorageFoldersUpdateRequest$Outbound` instead. */
  export type Outbound = FileStorageFoldersUpdateRequest$Outbound;
}

export function fileStorageFoldersUpdateRequestToJSON(
  fileStorageFoldersUpdateRequest: FileStorageFoldersUpdateRequest,
): string {
  return JSON.stringify(
    FileStorageFoldersUpdateRequest$outboundSchema.parse(
      fileStorageFoldersUpdateRequest,
    ),
  );
}

export function fileStorageFoldersUpdateRequestFromJSON(
  jsonString: string,
): SafeParseResult<FileStorageFoldersUpdateRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => FileStorageFoldersUpdateRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'FileStorageFoldersUpdateRequest' from JSON`,
  );
}

/** @internal */
export const FileStorageFoldersUpdateResponse$inboundSchema: z.ZodType<
  FileStorageFoldersUpdateResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  HttpMeta: components.HTTPMetadata$inboundSchema,
  UpdateFolderResponse: components.UpdateFolderResponse$inboundSchema
    .optional(),
  UnexpectedErrorResponse: components.UnexpectedErrorResponse$inboundSchema
    .optional(),
}).transform((v) => {
  return remap$(v, {
    "HttpMeta": "httpMeta",
    "UpdateFolderResponse": "updateFolderResponse",
    "UnexpectedErrorResponse": "unexpectedErrorResponse",
  });
});

/** @internal */
export type FileStorageFoldersUpdateResponse$Outbound = {
  HttpMeta: components.HTTPMetadata$Outbound;
  UpdateFolderResponse?: components.UpdateFolderResponse$Outbound | undefined;
  UnexpectedErrorResponse?:
    | components.UnexpectedErrorResponse$Outbound
    | undefined;
};

/** @internal */
export const FileStorageFoldersUpdateResponse$outboundSchema: z.ZodType<
  FileStorageFoldersUpdateResponse$Outbound,
  z.ZodTypeDef,
  FileStorageFoldersUpdateResponse
> = z.object({
  httpMeta: components.HTTPMetadata$outboundSchema,
  updateFolderResponse: components.UpdateFolderResponse$outboundSchema
    .optional(),
  unexpectedErrorResponse: components.UnexpectedErrorResponse$outboundSchema
    .optional(),
}).transform((v) => {
  return remap$(v, {
    httpMeta: "HttpMeta",
    updateFolderResponse: "UpdateFolderResponse",
    unexpectedErrorResponse: "UnexpectedErrorResponse",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace FileStorageFoldersUpdateResponse$ {
  /** @deprecated use `FileStorageFoldersUpdateResponse$inboundSchema` instead. */
  export const inboundSchema = FileStorageFoldersUpdateResponse$inboundSchema;
  /** @deprecated use `FileStorageFoldersUpdateResponse$outboundSchema` instead. */
  export const outboundSchema = FileStorageFoldersUpdateResponse$outboundSchema;
  /** @deprecated use `FileStorageFoldersUpdateResponse$Outbound` instead. */
  export type Outbound = FileStorageFoldersUpdateResponse$Outbound;
}

export function fileStorageFoldersUpdateResponseToJSON(
  fileStorageFoldersUpdateResponse: FileStorageFoldersUpdateResponse,
): string {
  return JSON.stringify(
    FileStorageFoldersUpdateResponse$outboundSchema.parse(
      fileStorageFoldersUpdateResponse,
    ),
  );
}

export function fileStorageFoldersUpdateResponseFromJSON(
  jsonString: string,
): SafeParseResult<FileStorageFoldersUpdateResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => FileStorageFoldersUpdateResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'FileStorageFoldersUpdateResponse' from JSON`,
  );
}

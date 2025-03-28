/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type FileStorageFoldersCopyGlobals = {
  /**
   * ID of the consumer which you want to get or push data from
   */
  consumerId?: string | undefined;
  /**
   * The ID of your Unify application
   */
  appId?: string | undefined;
};

export type FileStorageFoldersCopyRequest = {
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
  copyFolderRequest: components.CopyFolderRequest;
};

export type FileStorageFoldersCopyResponse = {
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
export const FileStorageFoldersCopyGlobals$inboundSchema: z.ZodType<
  FileStorageFoldersCopyGlobals,
  z.ZodTypeDef,
  unknown
> = z.object({
  consumerId: z.string().optional(),
  appId: z.string().optional(),
});

/** @internal */
export type FileStorageFoldersCopyGlobals$Outbound = {
  consumerId?: string | undefined;
  appId?: string | undefined;
};

/** @internal */
export const FileStorageFoldersCopyGlobals$outboundSchema: z.ZodType<
  FileStorageFoldersCopyGlobals$Outbound,
  z.ZodTypeDef,
  FileStorageFoldersCopyGlobals
> = z.object({
  consumerId: z.string().optional(),
  appId: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace FileStorageFoldersCopyGlobals$ {
  /** @deprecated use `FileStorageFoldersCopyGlobals$inboundSchema` instead. */
  export const inboundSchema = FileStorageFoldersCopyGlobals$inboundSchema;
  /** @deprecated use `FileStorageFoldersCopyGlobals$outboundSchema` instead. */
  export const outboundSchema = FileStorageFoldersCopyGlobals$outboundSchema;
  /** @deprecated use `FileStorageFoldersCopyGlobals$Outbound` instead. */
  export type Outbound = FileStorageFoldersCopyGlobals$Outbound;
}

export function fileStorageFoldersCopyGlobalsToJSON(
  fileStorageFoldersCopyGlobals: FileStorageFoldersCopyGlobals,
): string {
  return JSON.stringify(
    FileStorageFoldersCopyGlobals$outboundSchema.parse(
      fileStorageFoldersCopyGlobals,
    ),
  );
}

export function fileStorageFoldersCopyGlobalsFromJSON(
  jsonString: string,
): SafeParseResult<FileStorageFoldersCopyGlobals, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => FileStorageFoldersCopyGlobals$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'FileStorageFoldersCopyGlobals' from JSON`,
  );
}

/** @internal */
export const FileStorageFoldersCopyRequest$inboundSchema: z.ZodType<
  FileStorageFoldersCopyRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
  consumerId: z.string().optional(),
  appId: z.string().optional(),
  serviceId: z.string().optional(),
  raw: z.boolean().default(false),
  fields: z.nullable(z.string()).optional(),
  CopyFolderRequest: components.CopyFolderRequest$inboundSchema,
}).transform((v) => {
  return remap$(v, {
    "CopyFolderRequest": "copyFolderRequest",
  });
});

/** @internal */
export type FileStorageFoldersCopyRequest$Outbound = {
  id: string;
  consumerId?: string | undefined;
  appId?: string | undefined;
  serviceId?: string | undefined;
  raw: boolean;
  fields?: string | null | undefined;
  CopyFolderRequest: components.CopyFolderRequest$Outbound;
};

/** @internal */
export const FileStorageFoldersCopyRequest$outboundSchema: z.ZodType<
  FileStorageFoldersCopyRequest$Outbound,
  z.ZodTypeDef,
  FileStorageFoldersCopyRequest
> = z.object({
  id: z.string(),
  consumerId: z.string().optional(),
  appId: z.string().optional(),
  serviceId: z.string().optional(),
  raw: z.boolean().default(false),
  fields: z.nullable(z.string()).optional(),
  copyFolderRequest: components.CopyFolderRequest$outboundSchema,
}).transform((v) => {
  return remap$(v, {
    copyFolderRequest: "CopyFolderRequest",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace FileStorageFoldersCopyRequest$ {
  /** @deprecated use `FileStorageFoldersCopyRequest$inboundSchema` instead. */
  export const inboundSchema = FileStorageFoldersCopyRequest$inboundSchema;
  /** @deprecated use `FileStorageFoldersCopyRequest$outboundSchema` instead. */
  export const outboundSchema = FileStorageFoldersCopyRequest$outboundSchema;
  /** @deprecated use `FileStorageFoldersCopyRequest$Outbound` instead. */
  export type Outbound = FileStorageFoldersCopyRequest$Outbound;
}

export function fileStorageFoldersCopyRequestToJSON(
  fileStorageFoldersCopyRequest: FileStorageFoldersCopyRequest,
): string {
  return JSON.stringify(
    FileStorageFoldersCopyRequest$outboundSchema.parse(
      fileStorageFoldersCopyRequest,
    ),
  );
}

export function fileStorageFoldersCopyRequestFromJSON(
  jsonString: string,
): SafeParseResult<FileStorageFoldersCopyRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => FileStorageFoldersCopyRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'FileStorageFoldersCopyRequest' from JSON`,
  );
}

/** @internal */
export const FileStorageFoldersCopyResponse$inboundSchema: z.ZodType<
  FileStorageFoldersCopyResponse,
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
export type FileStorageFoldersCopyResponse$Outbound = {
  HttpMeta: components.HTTPMetadata$Outbound;
  UpdateFolderResponse?: components.UpdateFolderResponse$Outbound | undefined;
  UnexpectedErrorResponse?:
    | components.UnexpectedErrorResponse$Outbound
    | undefined;
};

/** @internal */
export const FileStorageFoldersCopyResponse$outboundSchema: z.ZodType<
  FileStorageFoldersCopyResponse$Outbound,
  z.ZodTypeDef,
  FileStorageFoldersCopyResponse
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
export namespace FileStorageFoldersCopyResponse$ {
  /** @deprecated use `FileStorageFoldersCopyResponse$inboundSchema` instead. */
  export const inboundSchema = FileStorageFoldersCopyResponse$inboundSchema;
  /** @deprecated use `FileStorageFoldersCopyResponse$outboundSchema` instead. */
  export const outboundSchema = FileStorageFoldersCopyResponse$outboundSchema;
  /** @deprecated use `FileStorageFoldersCopyResponse$Outbound` instead. */
  export type Outbound = FileStorageFoldersCopyResponse$Outbound;
}

export function fileStorageFoldersCopyResponseToJSON(
  fileStorageFoldersCopyResponse: FileStorageFoldersCopyResponse,
): string {
  return JSON.stringify(
    FileStorageFoldersCopyResponse$outboundSchema.parse(
      fileStorageFoldersCopyResponse,
    ),
  );
}

export function fileStorageFoldersCopyResponseFromJSON(
  jsonString: string,
): SafeParseResult<FileStorageFoldersCopyResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => FileStorageFoldersCopyResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'FileStorageFoldersCopyResponse' from JSON`,
  );
}

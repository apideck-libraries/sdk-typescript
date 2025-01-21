/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type FileStorageFoldersOneGlobals = {
  /**
   * ID of the consumer which you want to get or push data from
   */
  consumerId?: string | undefined;
  /**
   * The ID of your Unify application
   */
  appId?: string | undefined;
};

export type FileStorageFoldersOneRequest = {
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
};

export type FileStorageFoldersOneResponse = {
  httpMeta: components.HTTPMetadata;
  /**
   * Folders
   */
  getFolderResponse?: components.GetFolderResponse | undefined;
  /**
   * Unexpected error
   */
  unexpectedErrorResponse?: components.UnexpectedErrorResponse | undefined;
};

/** @internal */
export const FileStorageFoldersOneGlobals$inboundSchema: z.ZodType<
  FileStorageFoldersOneGlobals,
  z.ZodTypeDef,
  unknown
> = z.object({
  consumerId: z.string().optional(),
  appId: z.string().optional(),
});

/** @internal */
export type FileStorageFoldersOneGlobals$Outbound = {
  consumerId?: string | undefined;
  appId?: string | undefined;
};

/** @internal */
export const FileStorageFoldersOneGlobals$outboundSchema: z.ZodType<
  FileStorageFoldersOneGlobals$Outbound,
  z.ZodTypeDef,
  FileStorageFoldersOneGlobals
> = z.object({
  consumerId: z.string().optional(),
  appId: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace FileStorageFoldersOneGlobals$ {
  /** @deprecated use `FileStorageFoldersOneGlobals$inboundSchema` instead. */
  export const inboundSchema = FileStorageFoldersOneGlobals$inboundSchema;
  /** @deprecated use `FileStorageFoldersOneGlobals$outboundSchema` instead. */
  export const outboundSchema = FileStorageFoldersOneGlobals$outboundSchema;
  /** @deprecated use `FileStorageFoldersOneGlobals$Outbound` instead. */
  export type Outbound = FileStorageFoldersOneGlobals$Outbound;
}

export function fileStorageFoldersOneGlobalsToJSON(
  fileStorageFoldersOneGlobals: FileStorageFoldersOneGlobals,
): string {
  return JSON.stringify(
    FileStorageFoldersOneGlobals$outboundSchema.parse(
      fileStorageFoldersOneGlobals,
    ),
  );
}

export function fileStorageFoldersOneGlobalsFromJSON(
  jsonString: string,
): SafeParseResult<FileStorageFoldersOneGlobals, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => FileStorageFoldersOneGlobals$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'FileStorageFoldersOneGlobals' from JSON`,
  );
}

/** @internal */
export const FileStorageFoldersOneRequest$inboundSchema: z.ZodType<
  FileStorageFoldersOneRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
  consumerId: z.string().optional(),
  appId: z.string().optional(),
  serviceId: z.string().optional(),
  raw: z.boolean().default(false),
  fields: z.nullable(z.string()).optional(),
});

/** @internal */
export type FileStorageFoldersOneRequest$Outbound = {
  id: string;
  consumerId?: string | undefined;
  appId?: string | undefined;
  serviceId?: string | undefined;
  raw: boolean;
  fields?: string | null | undefined;
};

/** @internal */
export const FileStorageFoldersOneRequest$outboundSchema: z.ZodType<
  FileStorageFoldersOneRequest$Outbound,
  z.ZodTypeDef,
  FileStorageFoldersOneRequest
> = z.object({
  id: z.string(),
  consumerId: z.string().optional(),
  appId: z.string().optional(),
  serviceId: z.string().optional(),
  raw: z.boolean().default(false),
  fields: z.nullable(z.string()).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace FileStorageFoldersOneRequest$ {
  /** @deprecated use `FileStorageFoldersOneRequest$inboundSchema` instead. */
  export const inboundSchema = FileStorageFoldersOneRequest$inboundSchema;
  /** @deprecated use `FileStorageFoldersOneRequest$outboundSchema` instead. */
  export const outboundSchema = FileStorageFoldersOneRequest$outboundSchema;
  /** @deprecated use `FileStorageFoldersOneRequest$Outbound` instead. */
  export type Outbound = FileStorageFoldersOneRequest$Outbound;
}

export function fileStorageFoldersOneRequestToJSON(
  fileStorageFoldersOneRequest: FileStorageFoldersOneRequest,
): string {
  return JSON.stringify(
    FileStorageFoldersOneRequest$outboundSchema.parse(
      fileStorageFoldersOneRequest,
    ),
  );
}

export function fileStorageFoldersOneRequestFromJSON(
  jsonString: string,
): SafeParseResult<FileStorageFoldersOneRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => FileStorageFoldersOneRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'FileStorageFoldersOneRequest' from JSON`,
  );
}

/** @internal */
export const FileStorageFoldersOneResponse$inboundSchema: z.ZodType<
  FileStorageFoldersOneResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  HttpMeta: components.HTTPMetadata$inboundSchema,
  GetFolderResponse: components.GetFolderResponse$inboundSchema.optional(),
  UnexpectedErrorResponse: components.UnexpectedErrorResponse$inboundSchema
    .optional(),
}).transform((v) => {
  return remap$(v, {
    "HttpMeta": "httpMeta",
    "GetFolderResponse": "getFolderResponse",
    "UnexpectedErrorResponse": "unexpectedErrorResponse",
  });
});

/** @internal */
export type FileStorageFoldersOneResponse$Outbound = {
  HttpMeta: components.HTTPMetadata$Outbound;
  GetFolderResponse?: components.GetFolderResponse$Outbound | undefined;
  UnexpectedErrorResponse?:
    | components.UnexpectedErrorResponse$Outbound
    | undefined;
};

/** @internal */
export const FileStorageFoldersOneResponse$outboundSchema: z.ZodType<
  FileStorageFoldersOneResponse$Outbound,
  z.ZodTypeDef,
  FileStorageFoldersOneResponse
> = z.object({
  httpMeta: components.HTTPMetadata$outboundSchema,
  getFolderResponse: components.GetFolderResponse$outboundSchema.optional(),
  unexpectedErrorResponse: components.UnexpectedErrorResponse$outboundSchema
    .optional(),
}).transform((v) => {
  return remap$(v, {
    httpMeta: "HttpMeta",
    getFolderResponse: "GetFolderResponse",
    unexpectedErrorResponse: "UnexpectedErrorResponse",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace FileStorageFoldersOneResponse$ {
  /** @deprecated use `FileStorageFoldersOneResponse$inboundSchema` instead. */
  export const inboundSchema = FileStorageFoldersOneResponse$inboundSchema;
  /** @deprecated use `FileStorageFoldersOneResponse$outboundSchema` instead. */
  export const outboundSchema = FileStorageFoldersOneResponse$outboundSchema;
  /** @deprecated use `FileStorageFoldersOneResponse$Outbound` instead. */
  export type Outbound = FileStorageFoldersOneResponse$Outbound;
}

export function fileStorageFoldersOneResponseToJSON(
  fileStorageFoldersOneResponse: FileStorageFoldersOneResponse,
): string {
  return JSON.stringify(
    FileStorageFoldersOneResponse$outboundSchema.parse(
      fileStorageFoldersOneResponse,
    ),
  );
}

export function fileStorageFoldersOneResponseFromJSON(
  jsonString: string,
): SafeParseResult<FileStorageFoldersOneResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => FileStorageFoldersOneResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'FileStorageFoldersOneResponse' from JSON`,
  );
}

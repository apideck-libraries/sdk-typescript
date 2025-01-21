/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export const FileStorageUploadSessionsAddServerList = [
  "https://upload.apideck.com",
] as const;

export type FileStorageUploadSessionsAddGlobals = {
  /**
   * ID of the consumer which you want to get or push data from
   */
  consumerId?: string | undefined;
  /**
   * The ID of your Unify application
   */
  appId?: string | undefined;
};

export type FileStorageUploadSessionsAddRequest = {
  /**
   * Include raw response. Mostly used for debugging purposes
   */
  raw?: boolean | undefined;
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
  createUploadSessionRequest: components.CreateUploadSessionRequest;
};

export type FileStorageUploadSessionsAddResponse = {
  httpMeta: components.HTTPMetadata;
  /**
   * UploadSessions
   */
  createUploadSessionResponse?:
    | components.CreateUploadSessionResponse
    | undefined;
  /**
   * Unexpected error
   */
  unexpectedErrorResponse?: components.UnexpectedErrorResponse | undefined;
};

/** @internal */
export const FileStorageUploadSessionsAddGlobals$inboundSchema: z.ZodType<
  FileStorageUploadSessionsAddGlobals,
  z.ZodTypeDef,
  unknown
> = z.object({
  consumerId: z.string().optional(),
  appId: z.string().optional(),
});

/** @internal */
export type FileStorageUploadSessionsAddGlobals$Outbound = {
  consumerId?: string | undefined;
  appId?: string | undefined;
};

/** @internal */
export const FileStorageUploadSessionsAddGlobals$outboundSchema: z.ZodType<
  FileStorageUploadSessionsAddGlobals$Outbound,
  z.ZodTypeDef,
  FileStorageUploadSessionsAddGlobals
> = z.object({
  consumerId: z.string().optional(),
  appId: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace FileStorageUploadSessionsAddGlobals$ {
  /** @deprecated use `FileStorageUploadSessionsAddGlobals$inboundSchema` instead. */
  export const inboundSchema =
    FileStorageUploadSessionsAddGlobals$inboundSchema;
  /** @deprecated use `FileStorageUploadSessionsAddGlobals$outboundSchema` instead. */
  export const outboundSchema =
    FileStorageUploadSessionsAddGlobals$outboundSchema;
  /** @deprecated use `FileStorageUploadSessionsAddGlobals$Outbound` instead. */
  export type Outbound = FileStorageUploadSessionsAddGlobals$Outbound;
}

export function fileStorageUploadSessionsAddGlobalsToJSON(
  fileStorageUploadSessionsAddGlobals: FileStorageUploadSessionsAddGlobals,
): string {
  return JSON.stringify(
    FileStorageUploadSessionsAddGlobals$outboundSchema.parse(
      fileStorageUploadSessionsAddGlobals,
    ),
  );
}

export function fileStorageUploadSessionsAddGlobalsFromJSON(
  jsonString: string,
): SafeParseResult<FileStorageUploadSessionsAddGlobals, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      FileStorageUploadSessionsAddGlobals$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'FileStorageUploadSessionsAddGlobals' from JSON`,
  );
}

/** @internal */
export const FileStorageUploadSessionsAddRequest$inboundSchema: z.ZodType<
  FileStorageUploadSessionsAddRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  raw: z.boolean().default(false),
  consumerId: z.string().optional(),
  appId: z.string().optional(),
  serviceId: z.string().optional(),
  CreateUploadSessionRequest:
    components.CreateUploadSessionRequest$inboundSchema,
}).transform((v) => {
  return remap$(v, {
    "CreateUploadSessionRequest": "createUploadSessionRequest",
  });
});

/** @internal */
export type FileStorageUploadSessionsAddRequest$Outbound = {
  raw: boolean;
  consumerId?: string | undefined;
  appId?: string | undefined;
  serviceId?: string | undefined;
  CreateUploadSessionRequest: components.CreateUploadSessionRequest$Outbound;
};

/** @internal */
export const FileStorageUploadSessionsAddRequest$outboundSchema: z.ZodType<
  FileStorageUploadSessionsAddRequest$Outbound,
  z.ZodTypeDef,
  FileStorageUploadSessionsAddRequest
> = z.object({
  raw: z.boolean().default(false),
  consumerId: z.string().optional(),
  appId: z.string().optional(),
  serviceId: z.string().optional(),
  createUploadSessionRequest:
    components.CreateUploadSessionRequest$outboundSchema,
}).transform((v) => {
  return remap$(v, {
    createUploadSessionRequest: "CreateUploadSessionRequest",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace FileStorageUploadSessionsAddRequest$ {
  /** @deprecated use `FileStorageUploadSessionsAddRequest$inboundSchema` instead. */
  export const inboundSchema =
    FileStorageUploadSessionsAddRequest$inboundSchema;
  /** @deprecated use `FileStorageUploadSessionsAddRequest$outboundSchema` instead. */
  export const outboundSchema =
    FileStorageUploadSessionsAddRequest$outboundSchema;
  /** @deprecated use `FileStorageUploadSessionsAddRequest$Outbound` instead. */
  export type Outbound = FileStorageUploadSessionsAddRequest$Outbound;
}

export function fileStorageUploadSessionsAddRequestToJSON(
  fileStorageUploadSessionsAddRequest: FileStorageUploadSessionsAddRequest,
): string {
  return JSON.stringify(
    FileStorageUploadSessionsAddRequest$outboundSchema.parse(
      fileStorageUploadSessionsAddRequest,
    ),
  );
}

export function fileStorageUploadSessionsAddRequestFromJSON(
  jsonString: string,
): SafeParseResult<FileStorageUploadSessionsAddRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      FileStorageUploadSessionsAddRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'FileStorageUploadSessionsAddRequest' from JSON`,
  );
}

/** @internal */
export const FileStorageUploadSessionsAddResponse$inboundSchema: z.ZodType<
  FileStorageUploadSessionsAddResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  HttpMeta: components.HTTPMetadata$inboundSchema,
  CreateUploadSessionResponse: components
    .CreateUploadSessionResponse$inboundSchema.optional(),
  UnexpectedErrorResponse: components.UnexpectedErrorResponse$inboundSchema
    .optional(),
}).transform((v) => {
  return remap$(v, {
    "HttpMeta": "httpMeta",
    "CreateUploadSessionResponse": "createUploadSessionResponse",
    "UnexpectedErrorResponse": "unexpectedErrorResponse",
  });
});

/** @internal */
export type FileStorageUploadSessionsAddResponse$Outbound = {
  HttpMeta: components.HTTPMetadata$Outbound;
  CreateUploadSessionResponse?:
    | components.CreateUploadSessionResponse$Outbound
    | undefined;
  UnexpectedErrorResponse?:
    | components.UnexpectedErrorResponse$Outbound
    | undefined;
};

/** @internal */
export const FileStorageUploadSessionsAddResponse$outboundSchema: z.ZodType<
  FileStorageUploadSessionsAddResponse$Outbound,
  z.ZodTypeDef,
  FileStorageUploadSessionsAddResponse
> = z.object({
  httpMeta: components.HTTPMetadata$outboundSchema,
  createUploadSessionResponse: components
    .CreateUploadSessionResponse$outboundSchema.optional(),
  unexpectedErrorResponse: components.UnexpectedErrorResponse$outboundSchema
    .optional(),
}).transform((v) => {
  return remap$(v, {
    httpMeta: "HttpMeta",
    createUploadSessionResponse: "CreateUploadSessionResponse",
    unexpectedErrorResponse: "UnexpectedErrorResponse",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace FileStorageUploadSessionsAddResponse$ {
  /** @deprecated use `FileStorageUploadSessionsAddResponse$inboundSchema` instead. */
  export const inboundSchema =
    FileStorageUploadSessionsAddResponse$inboundSchema;
  /** @deprecated use `FileStorageUploadSessionsAddResponse$outboundSchema` instead. */
  export const outboundSchema =
    FileStorageUploadSessionsAddResponse$outboundSchema;
  /** @deprecated use `FileStorageUploadSessionsAddResponse$Outbound` instead. */
  export type Outbound = FileStorageUploadSessionsAddResponse$Outbound;
}

export function fileStorageUploadSessionsAddResponseToJSON(
  fileStorageUploadSessionsAddResponse: FileStorageUploadSessionsAddResponse,
): string {
  return JSON.stringify(
    FileStorageUploadSessionsAddResponse$outboundSchema.parse(
      fileStorageUploadSessionsAddResponse,
    ),
  );
}

export function fileStorageUploadSessionsAddResponseFromJSON(
  jsonString: string,
): SafeParseResult<FileStorageUploadSessionsAddResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      FileStorageUploadSessionsAddResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'FileStorageUploadSessionsAddResponse' from JSON`,
  );
}

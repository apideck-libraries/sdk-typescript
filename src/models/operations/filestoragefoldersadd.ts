/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";

export type FileStorageFoldersAddGlobals = {
  /**
   * ID of the consumer which you want to get or push data from
   */
  customerId?: string | undefined;
  /**
   * The ID of your Unify application
   */
  appId?: string | undefined;
};

export type FileStorageFoldersAddRequest = {
  /**
   * Include raw response. Mostly used for debugging purposes
   */
  raw?: boolean | undefined;
  /**
   * Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API.
   */
  serviceId?: string | undefined;
  /**
   * The 'fields' parameter allows API users to specify the fields they want to include in the API response. If this parameter is not present, the API will return all available fields. If this parameter is present, only the fields specified in the comma-separated string will be included in the response. Nested properties can also be requested by using a dot notation. <br /><br />Example: `fields=name,email,addresses.city`<br /><br />In the example above, the response will only include the fields "name", "email" and "addresses.city". If any other fields are available, they will be excluded.
   */
  fields?: string | null | undefined;
  createFolderRequest: components.CreateFolderRequest;
};

export type FileStorageFoldersAddResponse = {
  httpMeta: components.HTTPMetadata;
  /**
   * Folders
   */
  createFolderResponse?: components.CreateFolderResponse | undefined;
  /**
   * Unexpected error
   */
  unexpectedErrorResponse?: components.UnexpectedErrorResponse | undefined;
};

/** @internal */
export const FileStorageFoldersAddGlobals$inboundSchema: z.ZodType<
  FileStorageFoldersAddGlobals,
  z.ZodTypeDef,
  unknown
> = z.object({
  customerId: z.string().optional(),
  appId: z.string().optional(),
});

/** @internal */
export type FileStorageFoldersAddGlobals$Outbound = {
  customerId?: string | undefined;
  appId?: string | undefined;
};

/** @internal */
export const FileStorageFoldersAddGlobals$outboundSchema: z.ZodType<
  FileStorageFoldersAddGlobals$Outbound,
  z.ZodTypeDef,
  FileStorageFoldersAddGlobals
> = z.object({
  customerId: z.string().optional(),
  appId: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace FileStorageFoldersAddGlobals$ {
  /** @deprecated use `FileStorageFoldersAddGlobals$inboundSchema` instead. */
  export const inboundSchema = FileStorageFoldersAddGlobals$inboundSchema;
  /** @deprecated use `FileStorageFoldersAddGlobals$outboundSchema` instead. */
  export const outboundSchema = FileStorageFoldersAddGlobals$outboundSchema;
  /** @deprecated use `FileStorageFoldersAddGlobals$Outbound` instead. */
  export type Outbound = FileStorageFoldersAddGlobals$Outbound;
}

/** @internal */
export const FileStorageFoldersAddRequest$inboundSchema: z.ZodType<
  FileStorageFoldersAddRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  raw: z.boolean().default(false),
  serviceId: z.string().optional(),
  fields: z.nullable(z.string()).optional(),
  CreateFolderRequest: components.CreateFolderRequest$inboundSchema,
}).transform((v) => {
  return remap$(v, {
    "CreateFolderRequest": "createFolderRequest",
  });
});

/** @internal */
export type FileStorageFoldersAddRequest$Outbound = {
  raw: boolean;
  serviceId?: string | undefined;
  fields?: string | null | undefined;
  CreateFolderRequest: components.CreateFolderRequest$Outbound;
};

/** @internal */
export const FileStorageFoldersAddRequest$outboundSchema: z.ZodType<
  FileStorageFoldersAddRequest$Outbound,
  z.ZodTypeDef,
  FileStorageFoldersAddRequest
> = z.object({
  raw: z.boolean().default(false),
  serviceId: z.string().optional(),
  fields: z.nullable(z.string()).optional(),
  createFolderRequest: components.CreateFolderRequest$outboundSchema,
}).transform((v) => {
  return remap$(v, {
    createFolderRequest: "CreateFolderRequest",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace FileStorageFoldersAddRequest$ {
  /** @deprecated use `FileStorageFoldersAddRequest$inboundSchema` instead. */
  export const inboundSchema = FileStorageFoldersAddRequest$inboundSchema;
  /** @deprecated use `FileStorageFoldersAddRequest$outboundSchema` instead. */
  export const outboundSchema = FileStorageFoldersAddRequest$outboundSchema;
  /** @deprecated use `FileStorageFoldersAddRequest$Outbound` instead. */
  export type Outbound = FileStorageFoldersAddRequest$Outbound;
}

/** @internal */
export const FileStorageFoldersAddResponse$inboundSchema: z.ZodType<
  FileStorageFoldersAddResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  HttpMeta: components.HTTPMetadata$inboundSchema,
  CreateFolderResponse: components.CreateFolderResponse$inboundSchema
    .optional(),
  UnexpectedErrorResponse: components.UnexpectedErrorResponse$inboundSchema
    .optional(),
}).transform((v) => {
  return remap$(v, {
    "HttpMeta": "httpMeta",
    "CreateFolderResponse": "createFolderResponse",
    "UnexpectedErrorResponse": "unexpectedErrorResponse",
  });
});

/** @internal */
export type FileStorageFoldersAddResponse$Outbound = {
  HttpMeta: components.HTTPMetadata$Outbound;
  CreateFolderResponse?: components.CreateFolderResponse$Outbound | undefined;
  UnexpectedErrorResponse?:
    | components.UnexpectedErrorResponse$Outbound
    | undefined;
};

/** @internal */
export const FileStorageFoldersAddResponse$outboundSchema: z.ZodType<
  FileStorageFoldersAddResponse$Outbound,
  z.ZodTypeDef,
  FileStorageFoldersAddResponse
> = z.object({
  httpMeta: components.HTTPMetadata$outboundSchema,
  createFolderResponse: components.CreateFolderResponse$outboundSchema
    .optional(),
  unexpectedErrorResponse: components.UnexpectedErrorResponse$outboundSchema
    .optional(),
}).transform((v) => {
  return remap$(v, {
    httpMeta: "HttpMeta",
    createFolderResponse: "CreateFolderResponse",
    unexpectedErrorResponse: "UnexpectedErrorResponse",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace FileStorageFoldersAddResponse$ {
  /** @deprecated use `FileStorageFoldersAddResponse$inboundSchema` instead. */
  export const inboundSchema = FileStorageFoldersAddResponse$inboundSchema;
  /** @deprecated use `FileStorageFoldersAddResponse$outboundSchema` instead. */
  export const outboundSchema = FileStorageFoldersAddResponse$outboundSchema;
  /** @deprecated use `FileStorageFoldersAddResponse$Outbound` instead. */
  export type Outbound = FileStorageFoldersAddResponse$Outbound;
}

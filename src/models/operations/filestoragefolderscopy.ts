/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";

export type FileStorageFoldersCopyGlobals = {
  /**
   * ID of the consumer which you want to get or push data from
   */
  customerId?: string | undefined;
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

export type FileStorageFoldersCopyResponse =
  | components.UpdateFolderResponse
  | components.UnexpectedErrorResponse;

/** @internal */
export const FileStorageFoldersCopyGlobals$inboundSchema: z.ZodType<
  FileStorageFoldersCopyGlobals,
  z.ZodTypeDef,
  unknown
> = z.object({
  customerId: z.string().optional(),
  appId: z.string().optional(),
});

/** @internal */
export type FileStorageFoldersCopyGlobals$Outbound = {
  customerId?: string | undefined;
  appId?: string | undefined;
};

/** @internal */
export const FileStorageFoldersCopyGlobals$outboundSchema: z.ZodType<
  FileStorageFoldersCopyGlobals$Outbound,
  z.ZodTypeDef,
  FileStorageFoldersCopyGlobals
> = z.object({
  customerId: z.string().optional(),
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

/** @internal */
export const FileStorageFoldersCopyRequest$inboundSchema: z.ZodType<
  FileStorageFoldersCopyRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
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

/** @internal */
export const FileStorageFoldersCopyResponse$inboundSchema: z.ZodType<
  FileStorageFoldersCopyResponse,
  z.ZodTypeDef,
  unknown
> = z.union([
  components.UpdateFolderResponse$inboundSchema,
  components.UnexpectedErrorResponse$inboundSchema,
]);

/** @internal */
export type FileStorageFoldersCopyResponse$Outbound =
  | components.UpdateFolderResponse$Outbound
  | components.UnexpectedErrorResponse$Outbound;

/** @internal */
export const FileStorageFoldersCopyResponse$outboundSchema: z.ZodType<
  FileStorageFoldersCopyResponse$Outbound,
  z.ZodTypeDef,
  FileStorageFoldersCopyResponse
> = z.union([
  components.UpdateFolderResponse$outboundSchema,
  components.UnexpectedErrorResponse$outboundSchema,
]);

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

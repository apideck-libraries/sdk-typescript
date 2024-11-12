/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import * as components from "../components/index.js";

export type FileStorageUploadSessionsDeleteGlobals = {
  /**
   * ID of the consumer which you want to get or push data from
   */
  customerId?: string | undefined;
  /**
   * The ID of your Unify application
   */
  appId?: string | undefined;
};

export type FileStorageUploadSessionsDeleteRequest = {
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

export type FileStorageUploadSessionsDeleteResponse =
  | components.DeleteUploadSessionResponse
  | components.UnexpectedErrorResponse;

/** @internal */
export const FileStorageUploadSessionsDeleteGlobals$inboundSchema: z.ZodType<
  FileStorageUploadSessionsDeleteGlobals,
  z.ZodTypeDef,
  unknown
> = z.object({
  customerId: z.string().optional(),
  appId: z.string().optional(),
});

/** @internal */
export type FileStorageUploadSessionsDeleteGlobals$Outbound = {
  customerId?: string | undefined;
  appId?: string | undefined;
};

/** @internal */
export const FileStorageUploadSessionsDeleteGlobals$outboundSchema: z.ZodType<
  FileStorageUploadSessionsDeleteGlobals$Outbound,
  z.ZodTypeDef,
  FileStorageUploadSessionsDeleteGlobals
> = z.object({
  customerId: z.string().optional(),
  appId: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace FileStorageUploadSessionsDeleteGlobals$ {
  /** @deprecated use `FileStorageUploadSessionsDeleteGlobals$inboundSchema` instead. */
  export const inboundSchema =
    FileStorageUploadSessionsDeleteGlobals$inboundSchema;
  /** @deprecated use `FileStorageUploadSessionsDeleteGlobals$outboundSchema` instead. */
  export const outboundSchema =
    FileStorageUploadSessionsDeleteGlobals$outboundSchema;
  /** @deprecated use `FileStorageUploadSessionsDeleteGlobals$Outbound` instead. */
  export type Outbound = FileStorageUploadSessionsDeleteGlobals$Outbound;
}

/** @internal */
export const FileStorageUploadSessionsDeleteRequest$inboundSchema: z.ZodType<
  FileStorageUploadSessionsDeleteRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
  serviceId: z.string().optional(),
  raw: z.boolean().default(false),
});

/** @internal */
export type FileStorageUploadSessionsDeleteRequest$Outbound = {
  id: string;
  serviceId?: string | undefined;
  raw: boolean;
};

/** @internal */
export const FileStorageUploadSessionsDeleteRequest$outboundSchema: z.ZodType<
  FileStorageUploadSessionsDeleteRequest$Outbound,
  z.ZodTypeDef,
  FileStorageUploadSessionsDeleteRequest
> = z.object({
  id: z.string(),
  serviceId: z.string().optional(),
  raw: z.boolean().default(false),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace FileStorageUploadSessionsDeleteRequest$ {
  /** @deprecated use `FileStorageUploadSessionsDeleteRequest$inboundSchema` instead. */
  export const inboundSchema =
    FileStorageUploadSessionsDeleteRequest$inboundSchema;
  /** @deprecated use `FileStorageUploadSessionsDeleteRequest$outboundSchema` instead. */
  export const outboundSchema =
    FileStorageUploadSessionsDeleteRequest$outboundSchema;
  /** @deprecated use `FileStorageUploadSessionsDeleteRequest$Outbound` instead. */
  export type Outbound = FileStorageUploadSessionsDeleteRequest$Outbound;
}

/** @internal */
export const FileStorageUploadSessionsDeleteResponse$inboundSchema: z.ZodType<
  FileStorageUploadSessionsDeleteResponse,
  z.ZodTypeDef,
  unknown
> = z.union([
  components.DeleteUploadSessionResponse$inboundSchema,
  components.UnexpectedErrorResponse$inboundSchema,
]);

/** @internal */
export type FileStorageUploadSessionsDeleteResponse$Outbound =
  | components.DeleteUploadSessionResponse$Outbound
  | components.UnexpectedErrorResponse$Outbound;

/** @internal */
export const FileStorageUploadSessionsDeleteResponse$outboundSchema: z.ZodType<
  FileStorageUploadSessionsDeleteResponse$Outbound,
  z.ZodTypeDef,
  FileStorageUploadSessionsDeleteResponse
> = z.union([
  components.DeleteUploadSessionResponse$outboundSchema,
  components.UnexpectedErrorResponse$outboundSchema,
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace FileStorageUploadSessionsDeleteResponse$ {
  /** @deprecated use `FileStorageUploadSessionsDeleteResponse$inboundSchema` instead. */
  export const inboundSchema =
    FileStorageUploadSessionsDeleteResponse$inboundSchema;
  /** @deprecated use `FileStorageUploadSessionsDeleteResponse$outboundSchema` instead. */
  export const outboundSchema =
    FileStorageUploadSessionsDeleteResponse$outboundSchema;
  /** @deprecated use `FileStorageUploadSessionsDeleteResponse$Outbound` instead. */
  export type Outbound = FileStorageUploadSessionsDeleteResponse$Outbound;
}

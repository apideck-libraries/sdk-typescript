/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import * as components from "../components/index.js";

export type FileStorageDrivesDeleteGlobals = {
  /**
   * ID of the consumer which you want to get or push data from
   */
  customerId?: string | undefined;
  /**
   * The ID of your Unify application
   */
  appId?: string | undefined;
};

export type FileStorageDrivesDeleteRequest = {
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

export type FileStorageDrivesDeleteResponse =
  | components.DeleteDriveResponse
  | components.UnexpectedErrorResponse;

/** @internal */
export const FileStorageDrivesDeleteGlobals$inboundSchema: z.ZodType<
  FileStorageDrivesDeleteGlobals,
  z.ZodTypeDef,
  unknown
> = z.object({
  customerId: z.string().optional(),
  appId: z.string().optional(),
});

/** @internal */
export type FileStorageDrivesDeleteGlobals$Outbound = {
  customerId?: string | undefined;
  appId?: string | undefined;
};

/** @internal */
export const FileStorageDrivesDeleteGlobals$outboundSchema: z.ZodType<
  FileStorageDrivesDeleteGlobals$Outbound,
  z.ZodTypeDef,
  FileStorageDrivesDeleteGlobals
> = z.object({
  customerId: z.string().optional(),
  appId: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace FileStorageDrivesDeleteGlobals$ {
  /** @deprecated use `FileStorageDrivesDeleteGlobals$inboundSchema` instead. */
  export const inboundSchema = FileStorageDrivesDeleteGlobals$inboundSchema;
  /** @deprecated use `FileStorageDrivesDeleteGlobals$outboundSchema` instead. */
  export const outboundSchema = FileStorageDrivesDeleteGlobals$outboundSchema;
  /** @deprecated use `FileStorageDrivesDeleteGlobals$Outbound` instead. */
  export type Outbound = FileStorageDrivesDeleteGlobals$Outbound;
}

/** @internal */
export const FileStorageDrivesDeleteRequest$inboundSchema: z.ZodType<
  FileStorageDrivesDeleteRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
  serviceId: z.string().optional(),
  raw: z.boolean().default(false),
});

/** @internal */
export type FileStorageDrivesDeleteRequest$Outbound = {
  id: string;
  serviceId?: string | undefined;
  raw: boolean;
};

/** @internal */
export const FileStorageDrivesDeleteRequest$outboundSchema: z.ZodType<
  FileStorageDrivesDeleteRequest$Outbound,
  z.ZodTypeDef,
  FileStorageDrivesDeleteRequest
> = z.object({
  id: z.string(),
  serviceId: z.string().optional(),
  raw: z.boolean().default(false),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace FileStorageDrivesDeleteRequest$ {
  /** @deprecated use `FileStorageDrivesDeleteRequest$inboundSchema` instead. */
  export const inboundSchema = FileStorageDrivesDeleteRequest$inboundSchema;
  /** @deprecated use `FileStorageDrivesDeleteRequest$outboundSchema` instead. */
  export const outboundSchema = FileStorageDrivesDeleteRequest$outboundSchema;
  /** @deprecated use `FileStorageDrivesDeleteRequest$Outbound` instead. */
  export type Outbound = FileStorageDrivesDeleteRequest$Outbound;
}

/** @internal */
export const FileStorageDrivesDeleteResponse$inboundSchema: z.ZodType<
  FileStorageDrivesDeleteResponse,
  z.ZodTypeDef,
  unknown
> = z.union([
  components.DeleteDriveResponse$inboundSchema,
  components.UnexpectedErrorResponse$inboundSchema,
]);

/** @internal */
export type FileStorageDrivesDeleteResponse$Outbound =
  | components.DeleteDriveResponse$Outbound
  | components.UnexpectedErrorResponse$Outbound;

/** @internal */
export const FileStorageDrivesDeleteResponse$outboundSchema: z.ZodType<
  FileStorageDrivesDeleteResponse$Outbound,
  z.ZodTypeDef,
  FileStorageDrivesDeleteResponse
> = z.union([
  components.DeleteDriveResponse$outboundSchema,
  components.UnexpectedErrorResponse$outboundSchema,
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace FileStorageDrivesDeleteResponse$ {
  /** @deprecated use `FileStorageDrivesDeleteResponse$inboundSchema` instead. */
  export const inboundSchema = FileStorageDrivesDeleteResponse$inboundSchema;
  /** @deprecated use `FileStorageDrivesDeleteResponse$outboundSchema` instead. */
  export const outboundSchema = FileStorageDrivesDeleteResponse$outboundSchema;
  /** @deprecated use `FileStorageDrivesDeleteResponse$Outbound` instead. */
  export type Outbound = FileStorageDrivesDeleteResponse$Outbound;
}

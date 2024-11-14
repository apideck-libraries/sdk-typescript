/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";

export type FileStorageSharedLinksUpdateGlobals = {
  /**
   * ID of the consumer which you want to get or push data from
   */
  customerId?: string | undefined;
  /**
   * The ID of your Unify application
   */
  appId?: string | undefined;
};

export type FileStorageSharedLinksUpdateRequest = {
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
  sharedLink: components.SharedLinkInput;
};

export type FileStorageSharedLinksUpdateResponse = {
  httpMeta: components.HTTPMetadata;
  /**
   * Shared Links
   */
  updateSharedLinkResponse?: components.UpdateSharedLinkResponse | undefined;
  /**
   * Unexpected error
   */
  unexpectedErrorResponse?: components.UnexpectedErrorResponse | undefined;
};

/** @internal */
export const FileStorageSharedLinksUpdateGlobals$inboundSchema: z.ZodType<
  FileStorageSharedLinksUpdateGlobals,
  z.ZodTypeDef,
  unknown
> = z.object({
  customerId: z.string().optional(),
  appId: z.string().optional(),
});

/** @internal */
export type FileStorageSharedLinksUpdateGlobals$Outbound = {
  customerId?: string | undefined;
  appId?: string | undefined;
};

/** @internal */
export const FileStorageSharedLinksUpdateGlobals$outboundSchema: z.ZodType<
  FileStorageSharedLinksUpdateGlobals$Outbound,
  z.ZodTypeDef,
  FileStorageSharedLinksUpdateGlobals
> = z.object({
  customerId: z.string().optional(),
  appId: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace FileStorageSharedLinksUpdateGlobals$ {
  /** @deprecated use `FileStorageSharedLinksUpdateGlobals$inboundSchema` instead. */
  export const inboundSchema =
    FileStorageSharedLinksUpdateGlobals$inboundSchema;
  /** @deprecated use `FileStorageSharedLinksUpdateGlobals$outboundSchema` instead. */
  export const outboundSchema =
    FileStorageSharedLinksUpdateGlobals$outboundSchema;
  /** @deprecated use `FileStorageSharedLinksUpdateGlobals$Outbound` instead. */
  export type Outbound = FileStorageSharedLinksUpdateGlobals$Outbound;
}

/** @internal */
export const FileStorageSharedLinksUpdateRequest$inboundSchema: z.ZodType<
  FileStorageSharedLinksUpdateRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
  serviceId: z.string().optional(),
  raw: z.boolean().default(false),
  SharedLink: components.SharedLinkInput$inboundSchema,
}).transform((v) => {
  return remap$(v, {
    "SharedLink": "sharedLink",
  });
});

/** @internal */
export type FileStorageSharedLinksUpdateRequest$Outbound = {
  id: string;
  serviceId?: string | undefined;
  raw: boolean;
  SharedLink: components.SharedLinkInput$Outbound;
};

/** @internal */
export const FileStorageSharedLinksUpdateRequest$outboundSchema: z.ZodType<
  FileStorageSharedLinksUpdateRequest$Outbound,
  z.ZodTypeDef,
  FileStorageSharedLinksUpdateRequest
> = z.object({
  id: z.string(),
  serviceId: z.string().optional(),
  raw: z.boolean().default(false),
  sharedLink: components.SharedLinkInput$outboundSchema,
}).transform((v) => {
  return remap$(v, {
    sharedLink: "SharedLink",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace FileStorageSharedLinksUpdateRequest$ {
  /** @deprecated use `FileStorageSharedLinksUpdateRequest$inboundSchema` instead. */
  export const inboundSchema =
    FileStorageSharedLinksUpdateRequest$inboundSchema;
  /** @deprecated use `FileStorageSharedLinksUpdateRequest$outboundSchema` instead. */
  export const outboundSchema =
    FileStorageSharedLinksUpdateRequest$outboundSchema;
  /** @deprecated use `FileStorageSharedLinksUpdateRequest$Outbound` instead. */
  export type Outbound = FileStorageSharedLinksUpdateRequest$Outbound;
}

/** @internal */
export const FileStorageSharedLinksUpdateResponse$inboundSchema: z.ZodType<
  FileStorageSharedLinksUpdateResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  HttpMeta: components.HTTPMetadata$inboundSchema,
  UpdateSharedLinkResponse: components.UpdateSharedLinkResponse$inboundSchema
    .optional(),
  UnexpectedErrorResponse: components.UnexpectedErrorResponse$inboundSchema
    .optional(),
}).transform((v) => {
  return remap$(v, {
    "HttpMeta": "httpMeta",
    "UpdateSharedLinkResponse": "updateSharedLinkResponse",
    "UnexpectedErrorResponse": "unexpectedErrorResponse",
  });
});

/** @internal */
export type FileStorageSharedLinksUpdateResponse$Outbound = {
  HttpMeta: components.HTTPMetadata$Outbound;
  UpdateSharedLinkResponse?:
    | components.UpdateSharedLinkResponse$Outbound
    | undefined;
  UnexpectedErrorResponse?:
    | components.UnexpectedErrorResponse$Outbound
    | undefined;
};

/** @internal */
export const FileStorageSharedLinksUpdateResponse$outboundSchema: z.ZodType<
  FileStorageSharedLinksUpdateResponse$Outbound,
  z.ZodTypeDef,
  FileStorageSharedLinksUpdateResponse
> = z.object({
  httpMeta: components.HTTPMetadata$outboundSchema,
  updateSharedLinkResponse: components.UpdateSharedLinkResponse$outboundSchema
    .optional(),
  unexpectedErrorResponse: components.UnexpectedErrorResponse$outboundSchema
    .optional(),
}).transform((v) => {
  return remap$(v, {
    httpMeta: "HttpMeta",
    updateSharedLinkResponse: "UpdateSharedLinkResponse",
    unexpectedErrorResponse: "UnexpectedErrorResponse",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace FileStorageSharedLinksUpdateResponse$ {
  /** @deprecated use `FileStorageSharedLinksUpdateResponse$inboundSchema` instead. */
  export const inboundSchema =
    FileStorageSharedLinksUpdateResponse$inboundSchema;
  /** @deprecated use `FileStorageSharedLinksUpdateResponse$outboundSchema` instead. */
  export const outboundSchema =
    FileStorageSharedLinksUpdateResponse$outboundSchema;
  /** @deprecated use `FileStorageSharedLinksUpdateResponse$Outbound` instead. */
  export type Outbound = FileStorageSharedLinksUpdateResponse$Outbound;
}

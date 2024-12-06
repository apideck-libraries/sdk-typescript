/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type FileStorageDriveGroupsAllGlobals = {
  /**
   * ID of the consumer which you want to get or push data from
   */
  consumerId?: string | undefined;
  /**
   * The ID of your Unify application
   */
  appId?: string | undefined;
};

export type FileStorageDriveGroupsAllRequest = {
  /**
   * Include raw response. Mostly used for debugging purposes
   */
  raw?: boolean | undefined;
  /**
   * Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API.
   */
  serviceId?: string | undefined;
  /**
   * Cursor to start from. You can find cursors for next/previous pages in the meta.cursors property of the response.
   */
  cursor?: string | null | undefined;
  /**
   * Number of results to return. Minimum 1, Maximum 200, Default 20
   */
  limit?: number | undefined;
  /**
   * Apply filters
   */
  filter?: components.DriveGroupsFilter | undefined;
  /**
   * Optional unmapped key/values that will be passed through to downstream as query parameters. Ie: ?pass_through[search]=leads becomes ?search=leads
   */
  passThrough?: { [k: string]: any } | undefined;
  /**
   * The 'fields' parameter allows API users to specify the fields they want to include in the API response. If this parameter is not present, the API will return all available fields. If this parameter is present, only the fields specified in the comma-separated string will be included in the response. Nested properties can also be requested by using a dot notation. <br /><br />Example: `fields=name,email,addresses.city`<br /><br />In the example above, the response will only include the fields "name", "email" and "addresses.city". If any other fields are available, they will be excluded.
   */
  fields?: string | null | undefined;
};

export type FileStorageDriveGroupsAllResponse = {
  httpMeta: components.HTTPMetadata;
  /**
   * DriveGroups
   */
  getDriveGroupsResponse?: components.GetDriveGroupsResponse | undefined;
  /**
   * Unexpected error
   */
  unexpectedErrorResponse?: components.UnexpectedErrorResponse | undefined;
};

/** @internal */
export const FileStorageDriveGroupsAllGlobals$inboundSchema: z.ZodType<
  FileStorageDriveGroupsAllGlobals,
  z.ZodTypeDef,
  unknown
> = z.object({
  consumerId: z.string().optional(),
  appId: z.string().optional(),
});

/** @internal */
export type FileStorageDriveGroupsAllGlobals$Outbound = {
  consumerId?: string | undefined;
  appId?: string | undefined;
};

/** @internal */
export const FileStorageDriveGroupsAllGlobals$outboundSchema: z.ZodType<
  FileStorageDriveGroupsAllGlobals$Outbound,
  z.ZodTypeDef,
  FileStorageDriveGroupsAllGlobals
> = z.object({
  consumerId: z.string().optional(),
  appId: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace FileStorageDriveGroupsAllGlobals$ {
  /** @deprecated use `FileStorageDriveGroupsAllGlobals$inboundSchema` instead. */
  export const inboundSchema = FileStorageDriveGroupsAllGlobals$inboundSchema;
  /** @deprecated use `FileStorageDriveGroupsAllGlobals$outboundSchema` instead. */
  export const outboundSchema = FileStorageDriveGroupsAllGlobals$outboundSchema;
  /** @deprecated use `FileStorageDriveGroupsAllGlobals$Outbound` instead. */
  export type Outbound = FileStorageDriveGroupsAllGlobals$Outbound;
}

export function fileStorageDriveGroupsAllGlobalsToJSON(
  fileStorageDriveGroupsAllGlobals: FileStorageDriveGroupsAllGlobals,
): string {
  return JSON.stringify(
    FileStorageDriveGroupsAllGlobals$outboundSchema.parse(
      fileStorageDriveGroupsAllGlobals,
    ),
  );
}

export function fileStorageDriveGroupsAllGlobalsFromJSON(
  jsonString: string,
): SafeParseResult<FileStorageDriveGroupsAllGlobals, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => FileStorageDriveGroupsAllGlobals$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'FileStorageDriveGroupsAllGlobals' from JSON`,
  );
}

/** @internal */
export const FileStorageDriveGroupsAllRequest$inboundSchema: z.ZodType<
  FileStorageDriveGroupsAllRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  raw: z.boolean().default(false),
  serviceId: z.string().optional(),
  cursor: z.nullable(z.string()).optional(),
  limit: z.number().int().default(20),
  filter: components.DriveGroupsFilter$inboundSchema.optional(),
  pass_through: z.record(z.any()).optional(),
  fields: z.nullable(z.string()).optional(),
}).transform((v) => {
  return remap$(v, {
    "pass_through": "passThrough",
  });
});

/** @internal */
export type FileStorageDriveGroupsAllRequest$Outbound = {
  raw: boolean;
  serviceId?: string | undefined;
  cursor?: string | null | undefined;
  limit: number;
  filter?: components.DriveGroupsFilter$Outbound | undefined;
  pass_through?: { [k: string]: any } | undefined;
  fields?: string | null | undefined;
};

/** @internal */
export const FileStorageDriveGroupsAllRequest$outboundSchema: z.ZodType<
  FileStorageDriveGroupsAllRequest$Outbound,
  z.ZodTypeDef,
  FileStorageDriveGroupsAllRequest
> = z.object({
  raw: z.boolean().default(false),
  serviceId: z.string().optional(),
  cursor: z.nullable(z.string()).optional(),
  limit: z.number().int().default(20),
  filter: components.DriveGroupsFilter$outboundSchema.optional(),
  passThrough: z.record(z.any()).optional(),
  fields: z.nullable(z.string()).optional(),
}).transform((v) => {
  return remap$(v, {
    passThrough: "pass_through",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace FileStorageDriveGroupsAllRequest$ {
  /** @deprecated use `FileStorageDriveGroupsAllRequest$inboundSchema` instead. */
  export const inboundSchema = FileStorageDriveGroupsAllRequest$inboundSchema;
  /** @deprecated use `FileStorageDriveGroupsAllRequest$outboundSchema` instead. */
  export const outboundSchema = FileStorageDriveGroupsAllRequest$outboundSchema;
  /** @deprecated use `FileStorageDriveGroupsAllRequest$Outbound` instead. */
  export type Outbound = FileStorageDriveGroupsAllRequest$Outbound;
}

export function fileStorageDriveGroupsAllRequestToJSON(
  fileStorageDriveGroupsAllRequest: FileStorageDriveGroupsAllRequest,
): string {
  return JSON.stringify(
    FileStorageDriveGroupsAllRequest$outboundSchema.parse(
      fileStorageDriveGroupsAllRequest,
    ),
  );
}

export function fileStorageDriveGroupsAllRequestFromJSON(
  jsonString: string,
): SafeParseResult<FileStorageDriveGroupsAllRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => FileStorageDriveGroupsAllRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'FileStorageDriveGroupsAllRequest' from JSON`,
  );
}

/** @internal */
export const FileStorageDriveGroupsAllResponse$inboundSchema: z.ZodType<
  FileStorageDriveGroupsAllResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  HttpMeta: components.HTTPMetadata$inboundSchema,
  GetDriveGroupsResponse: components.GetDriveGroupsResponse$inboundSchema
    .optional(),
  UnexpectedErrorResponse: components.UnexpectedErrorResponse$inboundSchema
    .optional(),
}).transform((v) => {
  return remap$(v, {
    "HttpMeta": "httpMeta",
    "GetDriveGroupsResponse": "getDriveGroupsResponse",
    "UnexpectedErrorResponse": "unexpectedErrorResponse",
  });
});

/** @internal */
export type FileStorageDriveGroupsAllResponse$Outbound = {
  HttpMeta: components.HTTPMetadata$Outbound;
  GetDriveGroupsResponse?:
    | components.GetDriveGroupsResponse$Outbound
    | undefined;
  UnexpectedErrorResponse?:
    | components.UnexpectedErrorResponse$Outbound
    | undefined;
};

/** @internal */
export const FileStorageDriveGroupsAllResponse$outboundSchema: z.ZodType<
  FileStorageDriveGroupsAllResponse$Outbound,
  z.ZodTypeDef,
  FileStorageDriveGroupsAllResponse
> = z.object({
  httpMeta: components.HTTPMetadata$outboundSchema,
  getDriveGroupsResponse: components.GetDriveGroupsResponse$outboundSchema
    .optional(),
  unexpectedErrorResponse: components.UnexpectedErrorResponse$outboundSchema
    .optional(),
}).transform((v) => {
  return remap$(v, {
    httpMeta: "HttpMeta",
    getDriveGroupsResponse: "GetDriveGroupsResponse",
    unexpectedErrorResponse: "UnexpectedErrorResponse",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace FileStorageDriveGroupsAllResponse$ {
  /** @deprecated use `FileStorageDriveGroupsAllResponse$inboundSchema` instead. */
  export const inboundSchema = FileStorageDriveGroupsAllResponse$inboundSchema;
  /** @deprecated use `FileStorageDriveGroupsAllResponse$outboundSchema` instead. */
  export const outboundSchema =
    FileStorageDriveGroupsAllResponse$outboundSchema;
  /** @deprecated use `FileStorageDriveGroupsAllResponse$Outbound` instead. */
  export type Outbound = FileStorageDriveGroupsAllResponse$Outbound;
}

export function fileStorageDriveGroupsAllResponseToJSON(
  fileStorageDriveGroupsAllResponse: FileStorageDriveGroupsAllResponse,
): string {
  return JSON.stringify(
    FileStorageDriveGroupsAllResponse$outboundSchema.parse(
      fileStorageDriveGroupsAllResponse,
    ),
  );
}

export function fileStorageDriveGroupsAllResponseFromJSON(
  jsonString: string,
): SafeParseResult<FileStorageDriveGroupsAllResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => FileStorageDriveGroupsAllResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'FileStorageDriveGroupsAllResponse' from JSON`,
  );
}

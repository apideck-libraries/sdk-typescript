/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  Folder,
  Folder$inboundSchema,
  Folder$Outbound,
  Folder$outboundSchema,
} from "./folder.js";

/**
 * Folders
 */
export type GetFolderResponse = {
  /**
   * HTTP Response Status Code
   */
  statusCode: number;
  /**
   * HTTP Response Status
   */
  status: string;
  /**
   * Apideck ID of service provider
   */
  service: string;
  /**
   * Unified API resource name
   */
  resource: string;
  /**
   * Operation performed
   */
  operation: string;
  data: Folder;
};

/** @internal */
export const GetFolderResponse$inboundSchema: z.ZodType<
  GetFolderResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  status_code: z.number().int(),
  status: z.string(),
  service: z.string(),
  resource: z.string(),
  operation: z.string(),
  data: Folder$inboundSchema,
}).transform((v) => {
  return remap$(v, {
    "status_code": "statusCode",
  });
});

/** @internal */
export type GetFolderResponse$Outbound = {
  status_code: number;
  status: string;
  service: string;
  resource: string;
  operation: string;
  data: Folder$Outbound;
};

/** @internal */
export const GetFolderResponse$outboundSchema: z.ZodType<
  GetFolderResponse$Outbound,
  z.ZodTypeDef,
  GetFolderResponse
> = z.object({
  statusCode: z.number().int(),
  status: z.string(),
  service: z.string(),
  resource: z.string(),
  operation: z.string(),
  data: Folder$outboundSchema,
}).transform((v) => {
  return remap$(v, {
    statusCode: "status_code",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetFolderResponse$ {
  /** @deprecated use `GetFolderResponse$inboundSchema` instead. */
  export const inboundSchema = GetFolderResponse$inboundSchema;
  /** @deprecated use `GetFolderResponse$outboundSchema` instead. */
  export const outboundSchema = GetFolderResponse$outboundSchema;
  /** @deprecated use `GetFolderResponse$Outbound` instead. */
  export type Outbound = GetFolderResponse$Outbound;
}

export function getFolderResponseToJSON(
  getFolderResponse: GetFolderResponse,
): string {
  return JSON.stringify(
    GetFolderResponse$outboundSchema.parse(getFolderResponse),
  );
}

export function getFolderResponseFromJSON(
  jsonString: string,
): SafeParseResult<GetFolderResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetFolderResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetFolderResponse' from JSON`,
  );
}

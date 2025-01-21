/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type CrmNotesDeleteGlobals = {
  /**
   * ID of the consumer which you want to get or push data from
   */
  consumerId?: string | undefined;
  /**
   * The ID of your Unify application
   */
  appId?: string | undefined;
};

export type CrmNotesDeleteRequest = {
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
};

export type CrmNotesDeleteResponse = {
  httpMeta: components.HTTPMetadata;
  /**
   * Note deleted
   */
  deleteNoteResponse?: components.DeleteNoteResponse | undefined;
  /**
   * Unexpected error
   */
  unexpectedErrorResponse?: components.UnexpectedErrorResponse | undefined;
};

/** @internal */
export const CrmNotesDeleteGlobals$inboundSchema: z.ZodType<
  CrmNotesDeleteGlobals,
  z.ZodTypeDef,
  unknown
> = z.object({
  consumerId: z.string().optional(),
  appId: z.string().optional(),
});

/** @internal */
export type CrmNotesDeleteGlobals$Outbound = {
  consumerId?: string | undefined;
  appId?: string | undefined;
};

/** @internal */
export const CrmNotesDeleteGlobals$outboundSchema: z.ZodType<
  CrmNotesDeleteGlobals$Outbound,
  z.ZodTypeDef,
  CrmNotesDeleteGlobals
> = z.object({
  consumerId: z.string().optional(),
  appId: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CrmNotesDeleteGlobals$ {
  /** @deprecated use `CrmNotesDeleteGlobals$inboundSchema` instead. */
  export const inboundSchema = CrmNotesDeleteGlobals$inboundSchema;
  /** @deprecated use `CrmNotesDeleteGlobals$outboundSchema` instead. */
  export const outboundSchema = CrmNotesDeleteGlobals$outboundSchema;
  /** @deprecated use `CrmNotesDeleteGlobals$Outbound` instead. */
  export type Outbound = CrmNotesDeleteGlobals$Outbound;
}

export function crmNotesDeleteGlobalsToJSON(
  crmNotesDeleteGlobals: CrmNotesDeleteGlobals,
): string {
  return JSON.stringify(
    CrmNotesDeleteGlobals$outboundSchema.parse(crmNotesDeleteGlobals),
  );
}

export function crmNotesDeleteGlobalsFromJSON(
  jsonString: string,
): SafeParseResult<CrmNotesDeleteGlobals, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CrmNotesDeleteGlobals$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CrmNotesDeleteGlobals' from JSON`,
  );
}

/** @internal */
export const CrmNotesDeleteRequest$inboundSchema: z.ZodType<
  CrmNotesDeleteRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
  consumerId: z.string().optional(),
  appId: z.string().optional(),
  serviceId: z.string().optional(),
  raw: z.boolean().default(false),
});

/** @internal */
export type CrmNotesDeleteRequest$Outbound = {
  id: string;
  consumerId?: string | undefined;
  appId?: string | undefined;
  serviceId?: string | undefined;
  raw: boolean;
};

/** @internal */
export const CrmNotesDeleteRequest$outboundSchema: z.ZodType<
  CrmNotesDeleteRequest$Outbound,
  z.ZodTypeDef,
  CrmNotesDeleteRequest
> = z.object({
  id: z.string(),
  consumerId: z.string().optional(),
  appId: z.string().optional(),
  serviceId: z.string().optional(),
  raw: z.boolean().default(false),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CrmNotesDeleteRequest$ {
  /** @deprecated use `CrmNotesDeleteRequest$inboundSchema` instead. */
  export const inboundSchema = CrmNotesDeleteRequest$inboundSchema;
  /** @deprecated use `CrmNotesDeleteRequest$outboundSchema` instead. */
  export const outboundSchema = CrmNotesDeleteRequest$outboundSchema;
  /** @deprecated use `CrmNotesDeleteRequest$Outbound` instead. */
  export type Outbound = CrmNotesDeleteRequest$Outbound;
}

export function crmNotesDeleteRequestToJSON(
  crmNotesDeleteRequest: CrmNotesDeleteRequest,
): string {
  return JSON.stringify(
    CrmNotesDeleteRequest$outboundSchema.parse(crmNotesDeleteRequest),
  );
}

export function crmNotesDeleteRequestFromJSON(
  jsonString: string,
): SafeParseResult<CrmNotesDeleteRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CrmNotesDeleteRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CrmNotesDeleteRequest' from JSON`,
  );
}

/** @internal */
export const CrmNotesDeleteResponse$inboundSchema: z.ZodType<
  CrmNotesDeleteResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  HttpMeta: components.HTTPMetadata$inboundSchema,
  DeleteNoteResponse: components.DeleteNoteResponse$inboundSchema.optional(),
  UnexpectedErrorResponse: components.UnexpectedErrorResponse$inboundSchema
    .optional(),
}).transform((v) => {
  return remap$(v, {
    "HttpMeta": "httpMeta",
    "DeleteNoteResponse": "deleteNoteResponse",
    "UnexpectedErrorResponse": "unexpectedErrorResponse",
  });
});

/** @internal */
export type CrmNotesDeleteResponse$Outbound = {
  HttpMeta: components.HTTPMetadata$Outbound;
  DeleteNoteResponse?: components.DeleteNoteResponse$Outbound | undefined;
  UnexpectedErrorResponse?:
    | components.UnexpectedErrorResponse$Outbound
    | undefined;
};

/** @internal */
export const CrmNotesDeleteResponse$outboundSchema: z.ZodType<
  CrmNotesDeleteResponse$Outbound,
  z.ZodTypeDef,
  CrmNotesDeleteResponse
> = z.object({
  httpMeta: components.HTTPMetadata$outboundSchema,
  deleteNoteResponse: components.DeleteNoteResponse$outboundSchema.optional(),
  unexpectedErrorResponse: components.UnexpectedErrorResponse$outboundSchema
    .optional(),
}).transform((v) => {
  return remap$(v, {
    httpMeta: "HttpMeta",
    deleteNoteResponse: "DeleteNoteResponse",
    unexpectedErrorResponse: "UnexpectedErrorResponse",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CrmNotesDeleteResponse$ {
  /** @deprecated use `CrmNotesDeleteResponse$inboundSchema` instead. */
  export const inboundSchema = CrmNotesDeleteResponse$inboundSchema;
  /** @deprecated use `CrmNotesDeleteResponse$outboundSchema` instead. */
  export const outboundSchema = CrmNotesDeleteResponse$outboundSchema;
  /** @deprecated use `CrmNotesDeleteResponse$Outbound` instead. */
  export type Outbound = CrmNotesDeleteResponse$Outbound;
}

export function crmNotesDeleteResponseToJSON(
  crmNotesDeleteResponse: CrmNotesDeleteResponse,
): string {
  return JSON.stringify(
    CrmNotesDeleteResponse$outboundSchema.parse(crmNotesDeleteResponse),
  );
}

export function crmNotesDeleteResponseFromJSON(
  jsonString: string,
): SafeParseResult<CrmNotesDeleteResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CrmNotesDeleteResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CrmNotesDeleteResponse' from JSON`,
  );
}

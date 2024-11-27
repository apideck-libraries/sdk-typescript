/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type IssueTrackingCollectionsOneGlobals = {
  /**
   * ID of the consumer which you want to get or push data from
   */
  consumerId?: string | undefined;
  /**
   * The ID of your Unify application
   */
  appId?: string | undefined;
};

export type IssueTrackingCollectionsOneRequest = {
  /**
   * The collection ID
   */
  collectionId: string;
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

export type IssueTrackingCollectionsOneResponse = {
  httpMeta: components.HTTPMetadata;
  /**
   * Get a Collection
   */
  getCollectionResponse?: components.GetCollectionResponse | undefined;
  /**
   * Unexpected error
   */
  unexpectedErrorResponse?: components.UnexpectedErrorResponse | undefined;
};

/** @internal */
export const IssueTrackingCollectionsOneGlobals$inboundSchema: z.ZodType<
  IssueTrackingCollectionsOneGlobals,
  z.ZodTypeDef,
  unknown
> = z.object({
  consumerId: z.string().optional(),
  appId: z.string().optional(),
});

/** @internal */
export type IssueTrackingCollectionsOneGlobals$Outbound = {
  consumerId?: string | undefined;
  appId?: string | undefined;
};

/** @internal */
export const IssueTrackingCollectionsOneGlobals$outboundSchema: z.ZodType<
  IssueTrackingCollectionsOneGlobals$Outbound,
  z.ZodTypeDef,
  IssueTrackingCollectionsOneGlobals
> = z.object({
  consumerId: z.string().optional(),
  appId: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace IssueTrackingCollectionsOneGlobals$ {
  /** @deprecated use `IssueTrackingCollectionsOneGlobals$inboundSchema` instead. */
  export const inboundSchema = IssueTrackingCollectionsOneGlobals$inboundSchema;
  /** @deprecated use `IssueTrackingCollectionsOneGlobals$outboundSchema` instead. */
  export const outboundSchema =
    IssueTrackingCollectionsOneGlobals$outboundSchema;
  /** @deprecated use `IssueTrackingCollectionsOneGlobals$Outbound` instead. */
  export type Outbound = IssueTrackingCollectionsOneGlobals$Outbound;
}

export function issueTrackingCollectionsOneGlobalsToJSON(
  issueTrackingCollectionsOneGlobals: IssueTrackingCollectionsOneGlobals,
): string {
  return JSON.stringify(
    IssueTrackingCollectionsOneGlobals$outboundSchema.parse(
      issueTrackingCollectionsOneGlobals,
    ),
  );
}

export function issueTrackingCollectionsOneGlobalsFromJSON(
  jsonString: string,
): SafeParseResult<IssueTrackingCollectionsOneGlobals, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      IssueTrackingCollectionsOneGlobals$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'IssueTrackingCollectionsOneGlobals' from JSON`,
  );
}

/** @internal */
export const IssueTrackingCollectionsOneRequest$inboundSchema: z.ZodType<
  IssueTrackingCollectionsOneRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  collection_id: z.string(),
  serviceId: z.string().optional(),
  raw: z.boolean().default(false),
  fields: z.nullable(z.string()).optional(),
}).transform((v) => {
  return remap$(v, {
    "collection_id": "collectionId",
  });
});

/** @internal */
export type IssueTrackingCollectionsOneRequest$Outbound = {
  collection_id: string;
  serviceId?: string | undefined;
  raw: boolean;
  fields?: string | null | undefined;
};

/** @internal */
export const IssueTrackingCollectionsOneRequest$outboundSchema: z.ZodType<
  IssueTrackingCollectionsOneRequest$Outbound,
  z.ZodTypeDef,
  IssueTrackingCollectionsOneRequest
> = z.object({
  collectionId: z.string(),
  serviceId: z.string().optional(),
  raw: z.boolean().default(false),
  fields: z.nullable(z.string()).optional(),
}).transform((v) => {
  return remap$(v, {
    collectionId: "collection_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace IssueTrackingCollectionsOneRequest$ {
  /** @deprecated use `IssueTrackingCollectionsOneRequest$inboundSchema` instead. */
  export const inboundSchema = IssueTrackingCollectionsOneRequest$inboundSchema;
  /** @deprecated use `IssueTrackingCollectionsOneRequest$outboundSchema` instead. */
  export const outboundSchema =
    IssueTrackingCollectionsOneRequest$outboundSchema;
  /** @deprecated use `IssueTrackingCollectionsOneRequest$Outbound` instead. */
  export type Outbound = IssueTrackingCollectionsOneRequest$Outbound;
}

export function issueTrackingCollectionsOneRequestToJSON(
  issueTrackingCollectionsOneRequest: IssueTrackingCollectionsOneRequest,
): string {
  return JSON.stringify(
    IssueTrackingCollectionsOneRequest$outboundSchema.parse(
      issueTrackingCollectionsOneRequest,
    ),
  );
}

export function issueTrackingCollectionsOneRequestFromJSON(
  jsonString: string,
): SafeParseResult<IssueTrackingCollectionsOneRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      IssueTrackingCollectionsOneRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'IssueTrackingCollectionsOneRequest' from JSON`,
  );
}

/** @internal */
export const IssueTrackingCollectionsOneResponse$inboundSchema: z.ZodType<
  IssueTrackingCollectionsOneResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  HttpMeta: components.HTTPMetadata$inboundSchema,
  GetCollectionResponse: components.GetCollectionResponse$inboundSchema
    .optional(),
  UnexpectedErrorResponse: components.UnexpectedErrorResponse$inboundSchema
    .optional(),
}).transform((v) => {
  return remap$(v, {
    "HttpMeta": "httpMeta",
    "GetCollectionResponse": "getCollectionResponse",
    "UnexpectedErrorResponse": "unexpectedErrorResponse",
  });
});

/** @internal */
export type IssueTrackingCollectionsOneResponse$Outbound = {
  HttpMeta: components.HTTPMetadata$Outbound;
  GetCollectionResponse?: components.GetCollectionResponse$Outbound | undefined;
  UnexpectedErrorResponse?:
    | components.UnexpectedErrorResponse$Outbound
    | undefined;
};

/** @internal */
export const IssueTrackingCollectionsOneResponse$outboundSchema: z.ZodType<
  IssueTrackingCollectionsOneResponse$Outbound,
  z.ZodTypeDef,
  IssueTrackingCollectionsOneResponse
> = z.object({
  httpMeta: components.HTTPMetadata$outboundSchema,
  getCollectionResponse: components.GetCollectionResponse$outboundSchema
    .optional(),
  unexpectedErrorResponse: components.UnexpectedErrorResponse$outboundSchema
    .optional(),
}).transform((v) => {
  return remap$(v, {
    httpMeta: "HttpMeta",
    getCollectionResponse: "GetCollectionResponse",
    unexpectedErrorResponse: "UnexpectedErrorResponse",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace IssueTrackingCollectionsOneResponse$ {
  /** @deprecated use `IssueTrackingCollectionsOneResponse$inboundSchema` instead. */
  export const inboundSchema =
    IssueTrackingCollectionsOneResponse$inboundSchema;
  /** @deprecated use `IssueTrackingCollectionsOneResponse$outboundSchema` instead. */
  export const outboundSchema =
    IssueTrackingCollectionsOneResponse$outboundSchema;
  /** @deprecated use `IssueTrackingCollectionsOneResponse$Outbound` instead. */
  export type Outbound = IssueTrackingCollectionsOneResponse$Outbound;
}

export function issueTrackingCollectionsOneResponseToJSON(
  issueTrackingCollectionsOneResponse: IssueTrackingCollectionsOneResponse,
): string {
  return JSON.stringify(
    IssueTrackingCollectionsOneResponse$outboundSchema.parse(
      issueTrackingCollectionsOneResponse,
    ),
  );
}

export function issueTrackingCollectionsOneResponseFromJSON(
  jsonString: string,
): SafeParseResult<IssueTrackingCollectionsOneResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      IssueTrackingCollectionsOneResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'IssueTrackingCollectionsOneResponse' from JSON`,
  );
}

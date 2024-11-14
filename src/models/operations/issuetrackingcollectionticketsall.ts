/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";

export type IssueTrackingCollectionTicketsAllGlobals = {
  /**
   * ID of the consumer which you want to get or push data from
   */
  customerId?: string | undefined;
  /**
   * The ID of your Unify application
   */
  appId?: string | undefined;
};

export type IssueTrackingCollectionTicketsAllRequest = {
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
   * The collection ID
   */
  collectionId: string;
  /**
   * Apply sorting
   */
  sort?: components.TicketsSort | undefined;
  /**
   * Apply filters
   */
  filter?: components.IssuesFilter | undefined;
  /**
   * Optional unmapped key/values that will be passed through to downstream as query parameters. Ie: ?pass_through[search]=leads becomes ?search=leads
   */
  passThrough?: { [k: string]: any } | undefined;
  /**
   * The 'fields' parameter allows API users to specify the fields they want to include in the API response. If this parameter is not present, the API will return all available fields. If this parameter is present, only the fields specified in the comma-separated string will be included in the response. Nested properties can also be requested by using a dot notation. <br /><br />Example: `fields=name,email,addresses.city`<br /><br />In the example above, the response will only include the fields "name", "email" and "addresses.city". If any other fields are available, they will be excluded.
   */
  fields?: string | null | undefined;
};

export type IssueTrackingCollectionTicketsAllResponse = {
  httpMeta: components.HTTPMetadata;
  /**
   * List Tickets
   */
  getTicketsResponse?: components.GetTicketsResponse | undefined;
  /**
   * Unexpected error
   */
  unexpectedErrorResponse?: components.UnexpectedErrorResponse | undefined;
};

/** @internal */
export const IssueTrackingCollectionTicketsAllGlobals$inboundSchema: z.ZodType<
  IssueTrackingCollectionTicketsAllGlobals,
  z.ZodTypeDef,
  unknown
> = z.object({
  customerId: z.string().optional(),
  appId: z.string().optional(),
});

/** @internal */
export type IssueTrackingCollectionTicketsAllGlobals$Outbound = {
  customerId?: string | undefined;
  appId?: string | undefined;
};

/** @internal */
export const IssueTrackingCollectionTicketsAllGlobals$outboundSchema: z.ZodType<
  IssueTrackingCollectionTicketsAllGlobals$Outbound,
  z.ZodTypeDef,
  IssueTrackingCollectionTicketsAllGlobals
> = z.object({
  customerId: z.string().optional(),
  appId: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace IssueTrackingCollectionTicketsAllGlobals$ {
  /** @deprecated use `IssueTrackingCollectionTicketsAllGlobals$inboundSchema` instead. */
  export const inboundSchema =
    IssueTrackingCollectionTicketsAllGlobals$inboundSchema;
  /** @deprecated use `IssueTrackingCollectionTicketsAllGlobals$outboundSchema` instead. */
  export const outboundSchema =
    IssueTrackingCollectionTicketsAllGlobals$outboundSchema;
  /** @deprecated use `IssueTrackingCollectionTicketsAllGlobals$Outbound` instead. */
  export type Outbound = IssueTrackingCollectionTicketsAllGlobals$Outbound;
}

/** @internal */
export const IssueTrackingCollectionTicketsAllRequest$inboundSchema: z.ZodType<
  IssueTrackingCollectionTicketsAllRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  raw: z.boolean().default(false),
  serviceId: z.string().optional(),
  cursor: z.nullable(z.string()).optional(),
  limit: z.number().int().default(20),
  collection_id: z.string(),
  sort: components.TicketsSort$inboundSchema.optional(),
  filter: components.IssuesFilter$inboundSchema.optional(),
  pass_through: z.record(z.any()).optional(),
  fields: z.nullable(z.string()).optional(),
}).transform((v) => {
  return remap$(v, {
    "collection_id": "collectionId",
    "pass_through": "passThrough",
  });
});

/** @internal */
export type IssueTrackingCollectionTicketsAllRequest$Outbound = {
  raw: boolean;
  serviceId?: string | undefined;
  cursor?: string | null | undefined;
  limit: number;
  collection_id: string;
  sort?: components.TicketsSort$Outbound | undefined;
  filter?: components.IssuesFilter$Outbound | undefined;
  pass_through?: { [k: string]: any } | undefined;
  fields?: string | null | undefined;
};

/** @internal */
export const IssueTrackingCollectionTicketsAllRequest$outboundSchema: z.ZodType<
  IssueTrackingCollectionTicketsAllRequest$Outbound,
  z.ZodTypeDef,
  IssueTrackingCollectionTicketsAllRequest
> = z.object({
  raw: z.boolean().default(false),
  serviceId: z.string().optional(),
  cursor: z.nullable(z.string()).optional(),
  limit: z.number().int().default(20),
  collectionId: z.string(),
  sort: components.TicketsSort$outboundSchema.optional(),
  filter: components.IssuesFilter$outboundSchema.optional(),
  passThrough: z.record(z.any()).optional(),
  fields: z.nullable(z.string()).optional(),
}).transform((v) => {
  return remap$(v, {
    collectionId: "collection_id",
    passThrough: "pass_through",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace IssueTrackingCollectionTicketsAllRequest$ {
  /** @deprecated use `IssueTrackingCollectionTicketsAllRequest$inboundSchema` instead. */
  export const inboundSchema =
    IssueTrackingCollectionTicketsAllRequest$inboundSchema;
  /** @deprecated use `IssueTrackingCollectionTicketsAllRequest$outboundSchema` instead. */
  export const outboundSchema =
    IssueTrackingCollectionTicketsAllRequest$outboundSchema;
  /** @deprecated use `IssueTrackingCollectionTicketsAllRequest$Outbound` instead. */
  export type Outbound = IssueTrackingCollectionTicketsAllRequest$Outbound;
}

/** @internal */
export const IssueTrackingCollectionTicketsAllResponse$inboundSchema: z.ZodType<
  IssueTrackingCollectionTicketsAllResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  HttpMeta: components.HTTPMetadata$inboundSchema,
  GetTicketsResponse: components.GetTicketsResponse$inboundSchema.optional(),
  UnexpectedErrorResponse: components.UnexpectedErrorResponse$inboundSchema
    .optional(),
}).transform((v) => {
  return remap$(v, {
    "HttpMeta": "httpMeta",
    "GetTicketsResponse": "getTicketsResponse",
    "UnexpectedErrorResponse": "unexpectedErrorResponse",
  });
});

/** @internal */
export type IssueTrackingCollectionTicketsAllResponse$Outbound = {
  HttpMeta: components.HTTPMetadata$Outbound;
  GetTicketsResponse?: components.GetTicketsResponse$Outbound | undefined;
  UnexpectedErrorResponse?:
    | components.UnexpectedErrorResponse$Outbound
    | undefined;
};

/** @internal */
export const IssueTrackingCollectionTicketsAllResponse$outboundSchema:
  z.ZodType<
    IssueTrackingCollectionTicketsAllResponse$Outbound,
    z.ZodTypeDef,
    IssueTrackingCollectionTicketsAllResponse
  > = z.object({
    httpMeta: components.HTTPMetadata$outboundSchema,
    getTicketsResponse: components.GetTicketsResponse$outboundSchema.optional(),
    unexpectedErrorResponse: components.UnexpectedErrorResponse$outboundSchema
      .optional(),
  }).transform((v) => {
    return remap$(v, {
      httpMeta: "HttpMeta",
      getTicketsResponse: "GetTicketsResponse",
      unexpectedErrorResponse: "UnexpectedErrorResponse",
    });
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace IssueTrackingCollectionTicketsAllResponse$ {
  /** @deprecated use `IssueTrackingCollectionTicketsAllResponse$inboundSchema` instead. */
  export const inboundSchema =
    IssueTrackingCollectionTicketsAllResponse$inboundSchema;
  /** @deprecated use `IssueTrackingCollectionTicketsAllResponse$outboundSchema` instead. */
  export const outboundSchema =
    IssueTrackingCollectionTicketsAllResponse$outboundSchema;
  /** @deprecated use `IssueTrackingCollectionTicketsAllResponse$Outbound` instead. */
  export type Outbound = IssueTrackingCollectionTicketsAllResponse$Outbound;
}

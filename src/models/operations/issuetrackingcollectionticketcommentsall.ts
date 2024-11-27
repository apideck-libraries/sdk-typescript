/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type IssueTrackingCollectionTicketCommentsAllGlobals = {
  /**
   * ID of the consumer which you want to get or push data from
   */
  consumerId?: string | undefined;
  /**
   * The ID of your Unify application
   */
  appId?: string | undefined;
};

export type IssueTrackingCollectionTicketCommentsAllRequest = {
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
   * ID of the ticket you are acting upon.
   */
  ticketId: string;
  /**
   * Apply sorting
   */
  sort?: components.CommentsSort | undefined;
  /**
   * Optional unmapped key/values that will be passed through to downstream as query parameters. Ie: ?pass_through[search]=leads becomes ?search=leads
   */
  passThrough?: { [k: string]: any } | undefined;
  /**
   * The 'fields' parameter allows API users to specify the fields they want to include in the API response. If this parameter is not present, the API will return all available fields. If this parameter is present, only the fields specified in the comma-separated string will be included in the response. Nested properties can also be requested by using a dot notation. <br /><br />Example: `fields=name,email,addresses.city`<br /><br />In the example above, the response will only include the fields "name", "email" and "addresses.city". If any other fields are available, they will be excluded.
   */
  fields?: string | null | undefined;
};

export type IssueTrackingCollectionTicketCommentsAllResponse = {
  httpMeta: components.HTTPMetadata;
  /**
   * List Comments
   */
  getCommentsResponse?: components.GetCommentsResponse | undefined;
  /**
   * Unexpected error
   */
  unexpectedErrorResponse?: components.UnexpectedErrorResponse | undefined;
};

/** @internal */
export const IssueTrackingCollectionTicketCommentsAllGlobals$inboundSchema:
  z.ZodType<
    IssueTrackingCollectionTicketCommentsAllGlobals,
    z.ZodTypeDef,
    unknown
  > = z.object({
    consumerId: z.string().optional(),
    appId: z.string().optional(),
  });

/** @internal */
export type IssueTrackingCollectionTicketCommentsAllGlobals$Outbound = {
  consumerId?: string | undefined;
  appId?: string | undefined;
};

/** @internal */
export const IssueTrackingCollectionTicketCommentsAllGlobals$outboundSchema:
  z.ZodType<
    IssueTrackingCollectionTicketCommentsAllGlobals$Outbound,
    z.ZodTypeDef,
    IssueTrackingCollectionTicketCommentsAllGlobals
  > = z.object({
    consumerId: z.string().optional(),
    appId: z.string().optional(),
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace IssueTrackingCollectionTicketCommentsAllGlobals$ {
  /** @deprecated use `IssueTrackingCollectionTicketCommentsAllGlobals$inboundSchema` instead. */
  export const inboundSchema =
    IssueTrackingCollectionTicketCommentsAllGlobals$inboundSchema;
  /** @deprecated use `IssueTrackingCollectionTicketCommentsAllGlobals$outboundSchema` instead. */
  export const outboundSchema =
    IssueTrackingCollectionTicketCommentsAllGlobals$outboundSchema;
  /** @deprecated use `IssueTrackingCollectionTicketCommentsAllGlobals$Outbound` instead. */
  export type Outbound =
    IssueTrackingCollectionTicketCommentsAllGlobals$Outbound;
}

export function issueTrackingCollectionTicketCommentsAllGlobalsToJSON(
  issueTrackingCollectionTicketCommentsAllGlobals:
    IssueTrackingCollectionTicketCommentsAllGlobals,
): string {
  return JSON.stringify(
    IssueTrackingCollectionTicketCommentsAllGlobals$outboundSchema.parse(
      issueTrackingCollectionTicketCommentsAllGlobals,
    ),
  );
}

export function issueTrackingCollectionTicketCommentsAllGlobalsFromJSON(
  jsonString: string,
): SafeParseResult<
  IssueTrackingCollectionTicketCommentsAllGlobals,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      IssueTrackingCollectionTicketCommentsAllGlobals$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'IssueTrackingCollectionTicketCommentsAllGlobals' from JSON`,
  );
}

/** @internal */
export const IssueTrackingCollectionTicketCommentsAllRequest$inboundSchema:
  z.ZodType<
    IssueTrackingCollectionTicketCommentsAllRequest,
    z.ZodTypeDef,
    unknown
  > = z.object({
    raw: z.boolean().default(false),
    serviceId: z.string().optional(),
    cursor: z.nullable(z.string()).optional(),
    limit: z.number().int().default(20),
    collection_id: z.string(),
    ticket_id: z.string(),
    sort: components.CommentsSort$inboundSchema.optional(),
    pass_through: z.record(z.any()).optional(),
    fields: z.nullable(z.string()).optional(),
  }).transform((v) => {
    return remap$(v, {
      "collection_id": "collectionId",
      "ticket_id": "ticketId",
      "pass_through": "passThrough",
    });
  });

/** @internal */
export type IssueTrackingCollectionTicketCommentsAllRequest$Outbound = {
  raw: boolean;
  serviceId?: string | undefined;
  cursor?: string | null | undefined;
  limit: number;
  collection_id: string;
  ticket_id: string;
  sort?: components.CommentsSort$Outbound | undefined;
  pass_through?: { [k: string]: any } | undefined;
  fields?: string | null | undefined;
};

/** @internal */
export const IssueTrackingCollectionTicketCommentsAllRequest$outboundSchema:
  z.ZodType<
    IssueTrackingCollectionTicketCommentsAllRequest$Outbound,
    z.ZodTypeDef,
    IssueTrackingCollectionTicketCommentsAllRequest
  > = z.object({
    raw: z.boolean().default(false),
    serviceId: z.string().optional(),
    cursor: z.nullable(z.string()).optional(),
    limit: z.number().int().default(20),
    collectionId: z.string(),
    ticketId: z.string(),
    sort: components.CommentsSort$outboundSchema.optional(),
    passThrough: z.record(z.any()).optional(),
    fields: z.nullable(z.string()).optional(),
  }).transform((v) => {
    return remap$(v, {
      collectionId: "collection_id",
      ticketId: "ticket_id",
      passThrough: "pass_through",
    });
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace IssueTrackingCollectionTicketCommentsAllRequest$ {
  /** @deprecated use `IssueTrackingCollectionTicketCommentsAllRequest$inboundSchema` instead. */
  export const inboundSchema =
    IssueTrackingCollectionTicketCommentsAllRequest$inboundSchema;
  /** @deprecated use `IssueTrackingCollectionTicketCommentsAllRequest$outboundSchema` instead. */
  export const outboundSchema =
    IssueTrackingCollectionTicketCommentsAllRequest$outboundSchema;
  /** @deprecated use `IssueTrackingCollectionTicketCommentsAllRequest$Outbound` instead. */
  export type Outbound =
    IssueTrackingCollectionTicketCommentsAllRequest$Outbound;
}

export function issueTrackingCollectionTicketCommentsAllRequestToJSON(
  issueTrackingCollectionTicketCommentsAllRequest:
    IssueTrackingCollectionTicketCommentsAllRequest,
): string {
  return JSON.stringify(
    IssueTrackingCollectionTicketCommentsAllRequest$outboundSchema.parse(
      issueTrackingCollectionTicketCommentsAllRequest,
    ),
  );
}

export function issueTrackingCollectionTicketCommentsAllRequestFromJSON(
  jsonString: string,
): SafeParseResult<
  IssueTrackingCollectionTicketCommentsAllRequest,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      IssueTrackingCollectionTicketCommentsAllRequest$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'IssueTrackingCollectionTicketCommentsAllRequest' from JSON`,
  );
}

/** @internal */
export const IssueTrackingCollectionTicketCommentsAllResponse$inboundSchema:
  z.ZodType<
    IssueTrackingCollectionTicketCommentsAllResponse,
    z.ZodTypeDef,
    unknown
  > = z.object({
    HttpMeta: components.HTTPMetadata$inboundSchema,
    GetCommentsResponse: components.GetCommentsResponse$inboundSchema
      .optional(),
    UnexpectedErrorResponse: components.UnexpectedErrorResponse$inboundSchema
      .optional(),
  }).transform((v) => {
    return remap$(v, {
      "HttpMeta": "httpMeta",
      "GetCommentsResponse": "getCommentsResponse",
      "UnexpectedErrorResponse": "unexpectedErrorResponse",
    });
  });

/** @internal */
export type IssueTrackingCollectionTicketCommentsAllResponse$Outbound = {
  HttpMeta: components.HTTPMetadata$Outbound;
  GetCommentsResponse?: components.GetCommentsResponse$Outbound | undefined;
  UnexpectedErrorResponse?:
    | components.UnexpectedErrorResponse$Outbound
    | undefined;
};

/** @internal */
export const IssueTrackingCollectionTicketCommentsAllResponse$outboundSchema:
  z.ZodType<
    IssueTrackingCollectionTicketCommentsAllResponse$Outbound,
    z.ZodTypeDef,
    IssueTrackingCollectionTicketCommentsAllResponse
  > = z.object({
    httpMeta: components.HTTPMetadata$outboundSchema,
    getCommentsResponse: components.GetCommentsResponse$outboundSchema
      .optional(),
    unexpectedErrorResponse: components.UnexpectedErrorResponse$outboundSchema
      .optional(),
  }).transform((v) => {
    return remap$(v, {
      httpMeta: "HttpMeta",
      getCommentsResponse: "GetCommentsResponse",
      unexpectedErrorResponse: "UnexpectedErrorResponse",
    });
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace IssueTrackingCollectionTicketCommentsAllResponse$ {
  /** @deprecated use `IssueTrackingCollectionTicketCommentsAllResponse$inboundSchema` instead. */
  export const inboundSchema =
    IssueTrackingCollectionTicketCommentsAllResponse$inboundSchema;
  /** @deprecated use `IssueTrackingCollectionTicketCommentsAllResponse$outboundSchema` instead. */
  export const outboundSchema =
    IssueTrackingCollectionTicketCommentsAllResponse$outboundSchema;
  /** @deprecated use `IssueTrackingCollectionTicketCommentsAllResponse$Outbound` instead. */
  export type Outbound =
    IssueTrackingCollectionTicketCommentsAllResponse$Outbound;
}

export function issueTrackingCollectionTicketCommentsAllResponseToJSON(
  issueTrackingCollectionTicketCommentsAllResponse:
    IssueTrackingCollectionTicketCommentsAllResponse,
): string {
  return JSON.stringify(
    IssueTrackingCollectionTicketCommentsAllResponse$outboundSchema.parse(
      issueTrackingCollectionTicketCommentsAllResponse,
    ),
  );
}

export function issueTrackingCollectionTicketCommentsAllResponseFromJSON(
  jsonString: string,
): SafeParseResult<
  IssueTrackingCollectionTicketCommentsAllResponse,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      IssueTrackingCollectionTicketCommentsAllResponse$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'IssueTrackingCollectionTicketCommentsAllResponse' from JSON`,
  );
}

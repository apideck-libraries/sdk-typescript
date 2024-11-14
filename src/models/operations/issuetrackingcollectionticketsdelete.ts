/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";

export type IssueTrackingCollectionTicketsDeleteGlobals = {
  /**
   * ID of the consumer which you want to get or push data from
   */
  customerId?: string | undefined;
  /**
   * The ID of your Unify application
   */
  appId?: string | undefined;
};

export type IssueTrackingCollectionTicketsDeleteRequest = {
  /**
   * ID of the ticket you are acting upon.
   */
  ticketId: string;
  /**
   * Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API.
   */
  serviceId?: string | undefined;
  /**
   * Include raw response. Mostly used for debugging purposes
   */
  raw?: boolean | undefined;
  /**
   * The collection ID
   */
  collectionId: string;
};

export type IssueTrackingCollectionTicketsDeleteResponse = {
  httpMeta: components.HTTPMetadata;
  /**
   * Delete a Ticket
   */
  deleteTicketResponse?: components.DeleteTicketResponse | undefined;
  /**
   * Unexpected error
   */
  unexpectedErrorResponse?: components.UnexpectedErrorResponse | undefined;
};

/** @internal */
export const IssueTrackingCollectionTicketsDeleteGlobals$inboundSchema:
  z.ZodType<
    IssueTrackingCollectionTicketsDeleteGlobals,
    z.ZodTypeDef,
    unknown
  > = z.object({
    customerId: z.string().optional(),
    appId: z.string().optional(),
  });

/** @internal */
export type IssueTrackingCollectionTicketsDeleteGlobals$Outbound = {
  customerId?: string | undefined;
  appId?: string | undefined;
};

/** @internal */
export const IssueTrackingCollectionTicketsDeleteGlobals$outboundSchema:
  z.ZodType<
    IssueTrackingCollectionTicketsDeleteGlobals$Outbound,
    z.ZodTypeDef,
    IssueTrackingCollectionTicketsDeleteGlobals
  > = z.object({
    customerId: z.string().optional(),
    appId: z.string().optional(),
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace IssueTrackingCollectionTicketsDeleteGlobals$ {
  /** @deprecated use `IssueTrackingCollectionTicketsDeleteGlobals$inboundSchema` instead. */
  export const inboundSchema =
    IssueTrackingCollectionTicketsDeleteGlobals$inboundSchema;
  /** @deprecated use `IssueTrackingCollectionTicketsDeleteGlobals$outboundSchema` instead. */
  export const outboundSchema =
    IssueTrackingCollectionTicketsDeleteGlobals$outboundSchema;
  /** @deprecated use `IssueTrackingCollectionTicketsDeleteGlobals$Outbound` instead. */
  export type Outbound = IssueTrackingCollectionTicketsDeleteGlobals$Outbound;
}

/** @internal */
export const IssueTrackingCollectionTicketsDeleteRequest$inboundSchema:
  z.ZodType<
    IssueTrackingCollectionTicketsDeleteRequest,
    z.ZodTypeDef,
    unknown
  > = z.object({
    ticket_id: z.string(),
    serviceId: z.string().optional(),
    raw: z.boolean().default(false),
    collection_id: z.string(),
  }).transform((v) => {
    return remap$(v, {
      "ticket_id": "ticketId",
      "collection_id": "collectionId",
    });
  });

/** @internal */
export type IssueTrackingCollectionTicketsDeleteRequest$Outbound = {
  ticket_id: string;
  serviceId?: string | undefined;
  raw: boolean;
  collection_id: string;
};

/** @internal */
export const IssueTrackingCollectionTicketsDeleteRequest$outboundSchema:
  z.ZodType<
    IssueTrackingCollectionTicketsDeleteRequest$Outbound,
    z.ZodTypeDef,
    IssueTrackingCollectionTicketsDeleteRequest
  > = z.object({
    ticketId: z.string(),
    serviceId: z.string().optional(),
    raw: z.boolean().default(false),
    collectionId: z.string(),
  }).transform((v) => {
    return remap$(v, {
      ticketId: "ticket_id",
      collectionId: "collection_id",
    });
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace IssueTrackingCollectionTicketsDeleteRequest$ {
  /** @deprecated use `IssueTrackingCollectionTicketsDeleteRequest$inboundSchema` instead. */
  export const inboundSchema =
    IssueTrackingCollectionTicketsDeleteRequest$inboundSchema;
  /** @deprecated use `IssueTrackingCollectionTicketsDeleteRequest$outboundSchema` instead. */
  export const outboundSchema =
    IssueTrackingCollectionTicketsDeleteRequest$outboundSchema;
  /** @deprecated use `IssueTrackingCollectionTicketsDeleteRequest$Outbound` instead. */
  export type Outbound = IssueTrackingCollectionTicketsDeleteRequest$Outbound;
}

/** @internal */
export const IssueTrackingCollectionTicketsDeleteResponse$inboundSchema:
  z.ZodType<
    IssueTrackingCollectionTicketsDeleteResponse,
    z.ZodTypeDef,
    unknown
  > = z.object({
    HttpMeta: components.HTTPMetadata$inboundSchema,
    DeleteTicketResponse: components.DeleteTicketResponse$inboundSchema
      .optional(),
    UnexpectedErrorResponse: components.UnexpectedErrorResponse$inboundSchema
      .optional(),
  }).transform((v) => {
    return remap$(v, {
      "HttpMeta": "httpMeta",
      "DeleteTicketResponse": "deleteTicketResponse",
      "UnexpectedErrorResponse": "unexpectedErrorResponse",
    });
  });

/** @internal */
export type IssueTrackingCollectionTicketsDeleteResponse$Outbound = {
  HttpMeta: components.HTTPMetadata$Outbound;
  DeleteTicketResponse?: components.DeleteTicketResponse$Outbound | undefined;
  UnexpectedErrorResponse?:
    | components.UnexpectedErrorResponse$Outbound
    | undefined;
};

/** @internal */
export const IssueTrackingCollectionTicketsDeleteResponse$outboundSchema:
  z.ZodType<
    IssueTrackingCollectionTicketsDeleteResponse$Outbound,
    z.ZodTypeDef,
    IssueTrackingCollectionTicketsDeleteResponse
  > = z.object({
    httpMeta: components.HTTPMetadata$outboundSchema,
    deleteTicketResponse: components.DeleteTicketResponse$outboundSchema
      .optional(),
    unexpectedErrorResponse: components.UnexpectedErrorResponse$outboundSchema
      .optional(),
  }).transform((v) => {
    return remap$(v, {
      httpMeta: "HttpMeta",
      deleteTicketResponse: "DeleteTicketResponse",
      unexpectedErrorResponse: "UnexpectedErrorResponse",
    });
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace IssueTrackingCollectionTicketsDeleteResponse$ {
  /** @deprecated use `IssueTrackingCollectionTicketsDeleteResponse$inboundSchema` instead. */
  export const inboundSchema =
    IssueTrackingCollectionTicketsDeleteResponse$inboundSchema;
  /** @deprecated use `IssueTrackingCollectionTicketsDeleteResponse$outboundSchema` instead. */
  export const outboundSchema =
    IssueTrackingCollectionTicketsDeleteResponse$outboundSchema;
  /** @deprecated use `IssueTrackingCollectionTicketsDeleteResponse$Outbound` instead. */
  export type Outbound = IssueTrackingCollectionTicketsDeleteResponse$Outbound;
}

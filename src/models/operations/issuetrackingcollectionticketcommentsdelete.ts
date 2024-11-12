/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";

export type IssueTrackingCollectionTicketCommentsDeleteGlobals = {
  /**
   * ID of the consumer which you want to get or push data from
   */
  customerId?: string | undefined;
  /**
   * The ID of your Unify application
   */
  appId?: string | undefined;
};

export type IssueTrackingCollectionTicketCommentsDeleteRequest = {
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
  /**
   * The collection ID
   */
  collectionId: string;
  /**
   * ID of the ticket you are acting upon.
   */
  ticketId: string;
};

export type IssueTrackingCollectionTicketCommentsDeleteResponse =
  | components.DeleteCommentResponse
  | components.UnexpectedErrorResponse;

/** @internal */
export const IssueTrackingCollectionTicketCommentsDeleteGlobals$inboundSchema:
  z.ZodType<
    IssueTrackingCollectionTicketCommentsDeleteGlobals,
    z.ZodTypeDef,
    unknown
  > = z.object({
    customerId: z.string().optional(),
    appId: z.string().optional(),
  });

/** @internal */
export type IssueTrackingCollectionTicketCommentsDeleteGlobals$Outbound = {
  customerId?: string | undefined;
  appId?: string | undefined;
};

/** @internal */
export const IssueTrackingCollectionTicketCommentsDeleteGlobals$outboundSchema:
  z.ZodType<
    IssueTrackingCollectionTicketCommentsDeleteGlobals$Outbound,
    z.ZodTypeDef,
    IssueTrackingCollectionTicketCommentsDeleteGlobals
  > = z.object({
    customerId: z.string().optional(),
    appId: z.string().optional(),
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace IssueTrackingCollectionTicketCommentsDeleteGlobals$ {
  /** @deprecated use `IssueTrackingCollectionTicketCommentsDeleteGlobals$inboundSchema` instead. */
  export const inboundSchema =
    IssueTrackingCollectionTicketCommentsDeleteGlobals$inboundSchema;
  /** @deprecated use `IssueTrackingCollectionTicketCommentsDeleteGlobals$outboundSchema` instead. */
  export const outboundSchema =
    IssueTrackingCollectionTicketCommentsDeleteGlobals$outboundSchema;
  /** @deprecated use `IssueTrackingCollectionTicketCommentsDeleteGlobals$Outbound` instead. */
  export type Outbound =
    IssueTrackingCollectionTicketCommentsDeleteGlobals$Outbound;
}

/** @internal */
export const IssueTrackingCollectionTicketCommentsDeleteRequest$inboundSchema:
  z.ZodType<
    IssueTrackingCollectionTicketCommentsDeleteRequest,
    z.ZodTypeDef,
    unknown
  > = z.object({
    id: z.string(),
    serviceId: z.string().optional(),
    raw: z.boolean().default(false),
    collection_id: z.string(),
    ticket_id: z.string(),
  }).transform((v) => {
    return remap$(v, {
      "collection_id": "collectionId",
      "ticket_id": "ticketId",
    });
  });

/** @internal */
export type IssueTrackingCollectionTicketCommentsDeleteRequest$Outbound = {
  id: string;
  serviceId?: string | undefined;
  raw: boolean;
  collection_id: string;
  ticket_id: string;
};

/** @internal */
export const IssueTrackingCollectionTicketCommentsDeleteRequest$outboundSchema:
  z.ZodType<
    IssueTrackingCollectionTicketCommentsDeleteRequest$Outbound,
    z.ZodTypeDef,
    IssueTrackingCollectionTicketCommentsDeleteRequest
  > = z.object({
    id: z.string(),
    serviceId: z.string().optional(),
    raw: z.boolean().default(false),
    collectionId: z.string(),
    ticketId: z.string(),
  }).transform((v) => {
    return remap$(v, {
      collectionId: "collection_id",
      ticketId: "ticket_id",
    });
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace IssueTrackingCollectionTicketCommentsDeleteRequest$ {
  /** @deprecated use `IssueTrackingCollectionTicketCommentsDeleteRequest$inboundSchema` instead. */
  export const inboundSchema =
    IssueTrackingCollectionTicketCommentsDeleteRequest$inboundSchema;
  /** @deprecated use `IssueTrackingCollectionTicketCommentsDeleteRequest$outboundSchema` instead. */
  export const outboundSchema =
    IssueTrackingCollectionTicketCommentsDeleteRequest$outboundSchema;
  /** @deprecated use `IssueTrackingCollectionTicketCommentsDeleteRequest$Outbound` instead. */
  export type Outbound =
    IssueTrackingCollectionTicketCommentsDeleteRequest$Outbound;
}

/** @internal */
export const IssueTrackingCollectionTicketCommentsDeleteResponse$inboundSchema:
  z.ZodType<
    IssueTrackingCollectionTicketCommentsDeleteResponse,
    z.ZodTypeDef,
    unknown
  > = z.union([
    components.DeleteCommentResponse$inboundSchema,
    components.UnexpectedErrorResponse$inboundSchema,
  ]);

/** @internal */
export type IssueTrackingCollectionTicketCommentsDeleteResponse$Outbound =
  | components.DeleteCommentResponse$Outbound
  | components.UnexpectedErrorResponse$Outbound;

/** @internal */
export const IssueTrackingCollectionTicketCommentsDeleteResponse$outboundSchema:
  z.ZodType<
    IssueTrackingCollectionTicketCommentsDeleteResponse$Outbound,
    z.ZodTypeDef,
    IssueTrackingCollectionTicketCommentsDeleteResponse
  > = z.union([
    components.DeleteCommentResponse$outboundSchema,
    components.UnexpectedErrorResponse$outboundSchema,
  ]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace IssueTrackingCollectionTicketCommentsDeleteResponse$ {
  /** @deprecated use `IssueTrackingCollectionTicketCommentsDeleteResponse$inboundSchema` instead. */
  export const inboundSchema =
    IssueTrackingCollectionTicketCommentsDeleteResponse$inboundSchema;
  /** @deprecated use `IssueTrackingCollectionTicketCommentsDeleteResponse$outboundSchema` instead. */
  export const outboundSchema =
    IssueTrackingCollectionTicketCommentsDeleteResponse$outboundSchema;
  /** @deprecated use `IssueTrackingCollectionTicketCommentsDeleteResponse$Outbound` instead. */
  export type Outbound =
    IssueTrackingCollectionTicketCommentsDeleteResponse$Outbound;
}

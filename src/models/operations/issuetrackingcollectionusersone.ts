/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";

export type IssueTrackingCollectionUsersOneGlobals = {
  /**
   * ID of the consumer which you want to get or push data from
   */
  customerId?: string | undefined;
  /**
   * The ID of your Unify application
   */
  appId?: string | undefined;
};

export type IssueTrackingCollectionUsersOneRequest = {
  /**
   * The collection ID
   */
  collectionId: string;
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
   * The 'fields' parameter allows API users to specify the fields they want to include in the API response. If this parameter is not present, the API will return all available fields. If this parameter is present, only the fields specified in the comma-separated string will be included in the response. Nested properties can also be requested by using a dot notation. <br /><br />Example: `fields=name,email,addresses.city`<br /><br />In the example above, the response will only include the fields "name", "email" and "addresses.city". If any other fields are available, they will be excluded.
   */
  fields?: string | null | undefined;
};

export type IssueTrackingCollectionUsersOneResponse = {
  httpMeta: components.HTTPMetadata;
  /**
   * User
   */
  getCollectionUserResponse?: components.GetCollectionUserResponse | undefined;
  /**
   * Unexpected error
   */
  unexpectedErrorResponse?: components.UnexpectedErrorResponse | undefined;
};

/** @internal */
export const IssueTrackingCollectionUsersOneGlobals$inboundSchema: z.ZodType<
  IssueTrackingCollectionUsersOneGlobals,
  z.ZodTypeDef,
  unknown
> = z.object({
  customerId: z.string().optional(),
  appId: z.string().optional(),
});

/** @internal */
export type IssueTrackingCollectionUsersOneGlobals$Outbound = {
  customerId?: string | undefined;
  appId?: string | undefined;
};

/** @internal */
export const IssueTrackingCollectionUsersOneGlobals$outboundSchema: z.ZodType<
  IssueTrackingCollectionUsersOneGlobals$Outbound,
  z.ZodTypeDef,
  IssueTrackingCollectionUsersOneGlobals
> = z.object({
  customerId: z.string().optional(),
  appId: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace IssueTrackingCollectionUsersOneGlobals$ {
  /** @deprecated use `IssueTrackingCollectionUsersOneGlobals$inboundSchema` instead. */
  export const inboundSchema =
    IssueTrackingCollectionUsersOneGlobals$inboundSchema;
  /** @deprecated use `IssueTrackingCollectionUsersOneGlobals$outboundSchema` instead. */
  export const outboundSchema =
    IssueTrackingCollectionUsersOneGlobals$outboundSchema;
  /** @deprecated use `IssueTrackingCollectionUsersOneGlobals$Outbound` instead. */
  export type Outbound = IssueTrackingCollectionUsersOneGlobals$Outbound;
}

/** @internal */
export const IssueTrackingCollectionUsersOneRequest$inboundSchema: z.ZodType<
  IssueTrackingCollectionUsersOneRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  collection_id: z.string(),
  id: z.string(),
  serviceId: z.string().optional(),
  raw: z.boolean().default(false),
  fields: z.nullable(z.string()).optional(),
}).transform((v) => {
  return remap$(v, {
    "collection_id": "collectionId",
  });
});

/** @internal */
export type IssueTrackingCollectionUsersOneRequest$Outbound = {
  collection_id: string;
  id: string;
  serviceId?: string | undefined;
  raw: boolean;
  fields?: string | null | undefined;
};

/** @internal */
export const IssueTrackingCollectionUsersOneRequest$outboundSchema: z.ZodType<
  IssueTrackingCollectionUsersOneRequest$Outbound,
  z.ZodTypeDef,
  IssueTrackingCollectionUsersOneRequest
> = z.object({
  collectionId: z.string(),
  id: z.string(),
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
export namespace IssueTrackingCollectionUsersOneRequest$ {
  /** @deprecated use `IssueTrackingCollectionUsersOneRequest$inboundSchema` instead. */
  export const inboundSchema =
    IssueTrackingCollectionUsersOneRequest$inboundSchema;
  /** @deprecated use `IssueTrackingCollectionUsersOneRequest$outboundSchema` instead. */
  export const outboundSchema =
    IssueTrackingCollectionUsersOneRequest$outboundSchema;
  /** @deprecated use `IssueTrackingCollectionUsersOneRequest$Outbound` instead. */
  export type Outbound = IssueTrackingCollectionUsersOneRequest$Outbound;
}

/** @internal */
export const IssueTrackingCollectionUsersOneResponse$inboundSchema: z.ZodType<
  IssueTrackingCollectionUsersOneResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  HttpMeta: components.HTTPMetadata$inboundSchema,
  GetCollectionUserResponse: components.GetCollectionUserResponse$inboundSchema
    .optional(),
  UnexpectedErrorResponse: components.UnexpectedErrorResponse$inboundSchema
    .optional(),
}).transform((v) => {
  return remap$(v, {
    "HttpMeta": "httpMeta",
    "GetCollectionUserResponse": "getCollectionUserResponse",
    "UnexpectedErrorResponse": "unexpectedErrorResponse",
  });
});

/** @internal */
export type IssueTrackingCollectionUsersOneResponse$Outbound = {
  HttpMeta: components.HTTPMetadata$Outbound;
  GetCollectionUserResponse?:
    | components.GetCollectionUserResponse$Outbound
    | undefined;
  UnexpectedErrorResponse?:
    | components.UnexpectedErrorResponse$Outbound
    | undefined;
};

/** @internal */
export const IssueTrackingCollectionUsersOneResponse$outboundSchema: z.ZodType<
  IssueTrackingCollectionUsersOneResponse$Outbound,
  z.ZodTypeDef,
  IssueTrackingCollectionUsersOneResponse
> = z.object({
  httpMeta: components.HTTPMetadata$outboundSchema,
  getCollectionUserResponse: components.GetCollectionUserResponse$outboundSchema
    .optional(),
  unexpectedErrorResponse: components.UnexpectedErrorResponse$outboundSchema
    .optional(),
}).transform((v) => {
  return remap$(v, {
    httpMeta: "HttpMeta",
    getCollectionUserResponse: "GetCollectionUserResponse",
    unexpectedErrorResponse: "UnexpectedErrorResponse",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace IssueTrackingCollectionUsersOneResponse$ {
  /** @deprecated use `IssueTrackingCollectionUsersOneResponse$inboundSchema` instead. */
  export const inboundSchema =
    IssueTrackingCollectionUsersOneResponse$inboundSchema;
  /** @deprecated use `IssueTrackingCollectionUsersOneResponse$outboundSchema` instead. */
  export const outboundSchema =
    IssueTrackingCollectionUsersOneResponse$outboundSchema;
  /** @deprecated use `IssueTrackingCollectionUsersOneResponse$Outbound` instead. */
  export type Outbound = IssueTrackingCollectionUsersOneResponse$Outbound;
}

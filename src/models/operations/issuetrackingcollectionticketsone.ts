/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type IssueTrackingCollectionTicketsOneGlobals = {
  /**
   * ID of the consumer which you want to get or push data from
   */
  consumerId?: string | undefined;
  /**
   * The ID of your Unify application
   */
  appId?: string | undefined;
};

export type IssueTrackingCollectionTicketsOneRequest = {
  /**
   * ID of the ticket you are acting upon.
   */
  ticketId: string;
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
  /**
   * The collection ID
   */
  collectionId: string;
  /**
   * The 'fields' parameter allows API users to specify the fields they want to include in the API response. If this parameter is not present, the API will return all available fields. If this parameter is present, only the fields specified in the comma-separated string will be included in the response. Nested properties can also be requested by using a dot notation. <br /><br />Example: `fields=name,email,addresses.city`<br /><br />In the example above, the response will only include the fields "name", "email" and "addresses.city". If any other fields are available, they will be excluded.
   */
  fields?: string | null | undefined;
};

export type IssueTrackingCollectionTicketsOneResponse = {
  httpMeta: components.HTTPMetadata;
  /**
   * Get a Ticket
   */
  getTicketResponse?: components.GetTicketResponse | undefined;
  /**
   * Unexpected error
   */
  unexpectedErrorResponse?: components.UnexpectedErrorResponse | undefined;
};

/** @internal */
export const IssueTrackingCollectionTicketsOneGlobals$inboundSchema: z.ZodType<
  IssueTrackingCollectionTicketsOneGlobals,
  z.ZodTypeDef,
  unknown
> = z.object({
  consumerId: z.string().optional(),
  appId: z.string().optional(),
});

/** @internal */
export type IssueTrackingCollectionTicketsOneGlobals$Outbound = {
  consumerId?: string | undefined;
  appId?: string | undefined;
};

/** @internal */
export const IssueTrackingCollectionTicketsOneGlobals$outboundSchema: z.ZodType<
  IssueTrackingCollectionTicketsOneGlobals$Outbound,
  z.ZodTypeDef,
  IssueTrackingCollectionTicketsOneGlobals
> = z.object({
  consumerId: z.string().optional(),
  appId: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace IssueTrackingCollectionTicketsOneGlobals$ {
  /** @deprecated use `IssueTrackingCollectionTicketsOneGlobals$inboundSchema` instead. */
  export const inboundSchema =
    IssueTrackingCollectionTicketsOneGlobals$inboundSchema;
  /** @deprecated use `IssueTrackingCollectionTicketsOneGlobals$outboundSchema` instead. */
  export const outboundSchema =
    IssueTrackingCollectionTicketsOneGlobals$outboundSchema;
  /** @deprecated use `IssueTrackingCollectionTicketsOneGlobals$Outbound` instead. */
  export type Outbound = IssueTrackingCollectionTicketsOneGlobals$Outbound;
}

export function issueTrackingCollectionTicketsOneGlobalsToJSON(
  issueTrackingCollectionTicketsOneGlobals:
    IssueTrackingCollectionTicketsOneGlobals,
): string {
  return JSON.stringify(
    IssueTrackingCollectionTicketsOneGlobals$outboundSchema.parse(
      issueTrackingCollectionTicketsOneGlobals,
    ),
  );
}

export function issueTrackingCollectionTicketsOneGlobalsFromJSON(
  jsonString: string,
): SafeParseResult<
  IssueTrackingCollectionTicketsOneGlobals,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      IssueTrackingCollectionTicketsOneGlobals$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'IssueTrackingCollectionTicketsOneGlobals' from JSON`,
  );
}

/** @internal */
export const IssueTrackingCollectionTicketsOneRequest$inboundSchema: z.ZodType<
  IssueTrackingCollectionTicketsOneRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  ticket_id: z.string(),
  consumerId: z.string().optional(),
  appId: z.string().optional(),
  serviceId: z.string().optional(),
  raw: z.boolean().default(false),
  collection_id: z.string(),
  fields: z.nullable(z.string()).optional(),
}).transform((v) => {
  return remap$(v, {
    "ticket_id": "ticketId",
    "collection_id": "collectionId",
  });
});

/** @internal */
export type IssueTrackingCollectionTicketsOneRequest$Outbound = {
  ticket_id: string;
  consumerId?: string | undefined;
  appId?: string | undefined;
  serviceId?: string | undefined;
  raw: boolean;
  collection_id: string;
  fields?: string | null | undefined;
};

/** @internal */
export const IssueTrackingCollectionTicketsOneRequest$outboundSchema: z.ZodType<
  IssueTrackingCollectionTicketsOneRequest$Outbound,
  z.ZodTypeDef,
  IssueTrackingCollectionTicketsOneRequest
> = z.object({
  ticketId: z.string(),
  consumerId: z.string().optional(),
  appId: z.string().optional(),
  serviceId: z.string().optional(),
  raw: z.boolean().default(false),
  collectionId: z.string(),
  fields: z.nullable(z.string()).optional(),
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
export namespace IssueTrackingCollectionTicketsOneRequest$ {
  /** @deprecated use `IssueTrackingCollectionTicketsOneRequest$inboundSchema` instead. */
  export const inboundSchema =
    IssueTrackingCollectionTicketsOneRequest$inboundSchema;
  /** @deprecated use `IssueTrackingCollectionTicketsOneRequest$outboundSchema` instead. */
  export const outboundSchema =
    IssueTrackingCollectionTicketsOneRequest$outboundSchema;
  /** @deprecated use `IssueTrackingCollectionTicketsOneRequest$Outbound` instead. */
  export type Outbound = IssueTrackingCollectionTicketsOneRequest$Outbound;
}

export function issueTrackingCollectionTicketsOneRequestToJSON(
  issueTrackingCollectionTicketsOneRequest:
    IssueTrackingCollectionTicketsOneRequest,
): string {
  return JSON.stringify(
    IssueTrackingCollectionTicketsOneRequest$outboundSchema.parse(
      issueTrackingCollectionTicketsOneRequest,
    ),
  );
}

export function issueTrackingCollectionTicketsOneRequestFromJSON(
  jsonString: string,
): SafeParseResult<
  IssueTrackingCollectionTicketsOneRequest,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      IssueTrackingCollectionTicketsOneRequest$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'IssueTrackingCollectionTicketsOneRequest' from JSON`,
  );
}

/** @internal */
export const IssueTrackingCollectionTicketsOneResponse$inboundSchema: z.ZodType<
  IssueTrackingCollectionTicketsOneResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  HttpMeta: components.HTTPMetadata$inboundSchema,
  GetTicketResponse: components.GetTicketResponse$inboundSchema.optional(),
  UnexpectedErrorResponse: components.UnexpectedErrorResponse$inboundSchema
    .optional(),
}).transform((v) => {
  return remap$(v, {
    "HttpMeta": "httpMeta",
    "GetTicketResponse": "getTicketResponse",
    "UnexpectedErrorResponse": "unexpectedErrorResponse",
  });
});

/** @internal */
export type IssueTrackingCollectionTicketsOneResponse$Outbound = {
  HttpMeta: components.HTTPMetadata$Outbound;
  GetTicketResponse?: components.GetTicketResponse$Outbound | undefined;
  UnexpectedErrorResponse?:
    | components.UnexpectedErrorResponse$Outbound
    | undefined;
};

/** @internal */
export const IssueTrackingCollectionTicketsOneResponse$outboundSchema:
  z.ZodType<
    IssueTrackingCollectionTicketsOneResponse$Outbound,
    z.ZodTypeDef,
    IssueTrackingCollectionTicketsOneResponse
  > = z.object({
    httpMeta: components.HTTPMetadata$outboundSchema,
    getTicketResponse: components.GetTicketResponse$outboundSchema.optional(),
    unexpectedErrorResponse: components.UnexpectedErrorResponse$outboundSchema
      .optional(),
  }).transform((v) => {
    return remap$(v, {
      httpMeta: "HttpMeta",
      getTicketResponse: "GetTicketResponse",
      unexpectedErrorResponse: "UnexpectedErrorResponse",
    });
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace IssueTrackingCollectionTicketsOneResponse$ {
  /** @deprecated use `IssueTrackingCollectionTicketsOneResponse$inboundSchema` instead. */
  export const inboundSchema =
    IssueTrackingCollectionTicketsOneResponse$inboundSchema;
  /** @deprecated use `IssueTrackingCollectionTicketsOneResponse$outboundSchema` instead. */
  export const outboundSchema =
    IssueTrackingCollectionTicketsOneResponse$outboundSchema;
  /** @deprecated use `IssueTrackingCollectionTicketsOneResponse$Outbound` instead. */
  export type Outbound = IssueTrackingCollectionTicketsOneResponse$Outbound;
}

export function issueTrackingCollectionTicketsOneResponseToJSON(
  issueTrackingCollectionTicketsOneResponse:
    IssueTrackingCollectionTicketsOneResponse,
): string {
  return JSON.stringify(
    IssueTrackingCollectionTicketsOneResponse$outboundSchema.parse(
      issueTrackingCollectionTicketsOneResponse,
    ),
  );
}

export function issueTrackingCollectionTicketsOneResponseFromJSON(
  jsonString: string,
): SafeParseResult<
  IssueTrackingCollectionTicketsOneResponse,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      IssueTrackingCollectionTicketsOneResponse$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'IssueTrackingCollectionTicketsOneResponse' from JSON`,
  );
}

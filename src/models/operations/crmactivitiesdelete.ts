/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";

export type CrmActivitiesDeleteGlobals = {
  /**
   * ID of the consumer which you want to get or push data from
   */
  customerId?: string | undefined;
  /**
   * The ID of your Unify application
   */
  appId?: string | undefined;
};

export type CrmActivitiesDeleteRequest = {
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
};

export type CrmActivitiesDeleteResponse = {
  httpMeta: components.HTTPMetadata;
  /**
   * Activity deleted
   */
  deleteActivityResponse?: components.DeleteActivityResponse | undefined;
  /**
   * Unexpected error
   */
  unexpectedErrorResponse?: components.UnexpectedErrorResponse | undefined;
};

/** @internal */
export const CrmActivitiesDeleteGlobals$inboundSchema: z.ZodType<
  CrmActivitiesDeleteGlobals,
  z.ZodTypeDef,
  unknown
> = z.object({
  customerId: z.string().optional(),
  appId: z.string().optional(),
});

/** @internal */
export type CrmActivitiesDeleteGlobals$Outbound = {
  customerId?: string | undefined;
  appId?: string | undefined;
};

/** @internal */
export const CrmActivitiesDeleteGlobals$outboundSchema: z.ZodType<
  CrmActivitiesDeleteGlobals$Outbound,
  z.ZodTypeDef,
  CrmActivitiesDeleteGlobals
> = z.object({
  customerId: z.string().optional(),
  appId: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CrmActivitiesDeleteGlobals$ {
  /** @deprecated use `CrmActivitiesDeleteGlobals$inboundSchema` instead. */
  export const inboundSchema = CrmActivitiesDeleteGlobals$inboundSchema;
  /** @deprecated use `CrmActivitiesDeleteGlobals$outboundSchema` instead. */
  export const outboundSchema = CrmActivitiesDeleteGlobals$outboundSchema;
  /** @deprecated use `CrmActivitiesDeleteGlobals$Outbound` instead. */
  export type Outbound = CrmActivitiesDeleteGlobals$Outbound;
}

/** @internal */
export const CrmActivitiesDeleteRequest$inboundSchema: z.ZodType<
  CrmActivitiesDeleteRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
  serviceId: z.string().optional(),
  raw: z.boolean().default(false),
});

/** @internal */
export type CrmActivitiesDeleteRequest$Outbound = {
  id: string;
  serviceId?: string | undefined;
  raw: boolean;
};

/** @internal */
export const CrmActivitiesDeleteRequest$outboundSchema: z.ZodType<
  CrmActivitiesDeleteRequest$Outbound,
  z.ZodTypeDef,
  CrmActivitiesDeleteRequest
> = z.object({
  id: z.string(),
  serviceId: z.string().optional(),
  raw: z.boolean().default(false),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CrmActivitiesDeleteRequest$ {
  /** @deprecated use `CrmActivitiesDeleteRequest$inboundSchema` instead. */
  export const inboundSchema = CrmActivitiesDeleteRequest$inboundSchema;
  /** @deprecated use `CrmActivitiesDeleteRequest$outboundSchema` instead. */
  export const outboundSchema = CrmActivitiesDeleteRequest$outboundSchema;
  /** @deprecated use `CrmActivitiesDeleteRequest$Outbound` instead. */
  export type Outbound = CrmActivitiesDeleteRequest$Outbound;
}

/** @internal */
export const CrmActivitiesDeleteResponse$inboundSchema: z.ZodType<
  CrmActivitiesDeleteResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  HttpMeta: components.HTTPMetadata$inboundSchema,
  DeleteActivityResponse: components.DeleteActivityResponse$inboundSchema
    .optional(),
  UnexpectedErrorResponse: components.UnexpectedErrorResponse$inboundSchema
    .optional(),
}).transform((v) => {
  return remap$(v, {
    "HttpMeta": "httpMeta",
    "DeleteActivityResponse": "deleteActivityResponse",
    "UnexpectedErrorResponse": "unexpectedErrorResponse",
  });
});

/** @internal */
export type CrmActivitiesDeleteResponse$Outbound = {
  HttpMeta: components.HTTPMetadata$Outbound;
  DeleteActivityResponse?:
    | components.DeleteActivityResponse$Outbound
    | undefined;
  UnexpectedErrorResponse?:
    | components.UnexpectedErrorResponse$Outbound
    | undefined;
};

/** @internal */
export const CrmActivitiesDeleteResponse$outboundSchema: z.ZodType<
  CrmActivitiesDeleteResponse$Outbound,
  z.ZodTypeDef,
  CrmActivitiesDeleteResponse
> = z.object({
  httpMeta: components.HTTPMetadata$outboundSchema,
  deleteActivityResponse: components.DeleteActivityResponse$outboundSchema
    .optional(),
  unexpectedErrorResponse: components.UnexpectedErrorResponse$outboundSchema
    .optional(),
}).transform((v) => {
  return remap$(v, {
    httpMeta: "HttpMeta",
    deleteActivityResponse: "DeleteActivityResponse",
    unexpectedErrorResponse: "UnexpectedErrorResponse",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CrmActivitiesDeleteResponse$ {
  /** @deprecated use `CrmActivitiesDeleteResponse$inboundSchema` instead. */
  export const inboundSchema = CrmActivitiesDeleteResponse$inboundSchema;
  /** @deprecated use `CrmActivitiesDeleteResponse$outboundSchema` instead. */
  export const outboundSchema = CrmActivitiesDeleteResponse$outboundSchema;
  /** @deprecated use `CrmActivitiesDeleteResponse$Outbound` instead. */
  export type Outbound = CrmActivitiesDeleteResponse$Outbound;
}

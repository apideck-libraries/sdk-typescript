/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";

export type AccountingTrackingCategoriesAddGlobals = {
  /**
   * ID of the consumer which you want to get or push data from
   */
  customerId?: string | undefined;
  /**
   * The ID of your Unify application
   */
  appId?: string | undefined;
};

export type AccountingTrackingCategoriesAddRequest = {
  /**
   * Include raw response. Mostly used for debugging purposes
   */
  raw?: boolean | undefined;
  /**
   * Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API.
   */
  serviceId?: string | undefined;
  trackingCategory: components.TrackingCategoryInput;
};

export type AccountingTrackingCategoriesAddResponse = {
  httpMeta: components.HTTPMetadata;
  /**
   * Tracking category created
   */
  createTrackingCategoryResponse?:
    | components.CreateTrackingCategoryResponse
    | undefined;
  /**
   * Unexpected error
   */
  unexpectedErrorResponse?: components.UnexpectedErrorResponse | undefined;
};

/** @internal */
export const AccountingTrackingCategoriesAddGlobals$inboundSchema: z.ZodType<
  AccountingTrackingCategoriesAddGlobals,
  z.ZodTypeDef,
  unknown
> = z.object({
  customerId: z.string().optional(),
  appId: z.string().optional(),
});

/** @internal */
export type AccountingTrackingCategoriesAddGlobals$Outbound = {
  customerId?: string | undefined;
  appId?: string | undefined;
};

/** @internal */
export const AccountingTrackingCategoriesAddGlobals$outboundSchema: z.ZodType<
  AccountingTrackingCategoriesAddGlobals$Outbound,
  z.ZodTypeDef,
  AccountingTrackingCategoriesAddGlobals
> = z.object({
  customerId: z.string().optional(),
  appId: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AccountingTrackingCategoriesAddGlobals$ {
  /** @deprecated use `AccountingTrackingCategoriesAddGlobals$inboundSchema` instead. */
  export const inboundSchema =
    AccountingTrackingCategoriesAddGlobals$inboundSchema;
  /** @deprecated use `AccountingTrackingCategoriesAddGlobals$outboundSchema` instead. */
  export const outboundSchema =
    AccountingTrackingCategoriesAddGlobals$outboundSchema;
  /** @deprecated use `AccountingTrackingCategoriesAddGlobals$Outbound` instead. */
  export type Outbound = AccountingTrackingCategoriesAddGlobals$Outbound;
}

/** @internal */
export const AccountingTrackingCategoriesAddRequest$inboundSchema: z.ZodType<
  AccountingTrackingCategoriesAddRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  raw: z.boolean().default(false),
  serviceId: z.string().optional(),
  TrackingCategory: components.TrackingCategoryInput$inboundSchema,
}).transform((v) => {
  return remap$(v, {
    "TrackingCategory": "trackingCategory",
  });
});

/** @internal */
export type AccountingTrackingCategoriesAddRequest$Outbound = {
  raw: boolean;
  serviceId?: string | undefined;
  TrackingCategory: components.TrackingCategoryInput$Outbound;
};

/** @internal */
export const AccountingTrackingCategoriesAddRequest$outboundSchema: z.ZodType<
  AccountingTrackingCategoriesAddRequest$Outbound,
  z.ZodTypeDef,
  AccountingTrackingCategoriesAddRequest
> = z.object({
  raw: z.boolean().default(false),
  serviceId: z.string().optional(),
  trackingCategory: components.TrackingCategoryInput$outboundSchema,
}).transform((v) => {
  return remap$(v, {
    trackingCategory: "TrackingCategory",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AccountingTrackingCategoriesAddRequest$ {
  /** @deprecated use `AccountingTrackingCategoriesAddRequest$inboundSchema` instead. */
  export const inboundSchema =
    AccountingTrackingCategoriesAddRequest$inboundSchema;
  /** @deprecated use `AccountingTrackingCategoriesAddRequest$outboundSchema` instead. */
  export const outboundSchema =
    AccountingTrackingCategoriesAddRequest$outboundSchema;
  /** @deprecated use `AccountingTrackingCategoriesAddRequest$Outbound` instead. */
  export type Outbound = AccountingTrackingCategoriesAddRequest$Outbound;
}

/** @internal */
export const AccountingTrackingCategoriesAddResponse$inboundSchema: z.ZodType<
  AccountingTrackingCategoriesAddResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  HttpMeta: components.HTTPMetadata$inboundSchema,
  CreateTrackingCategoryResponse: components
    .CreateTrackingCategoryResponse$inboundSchema.optional(),
  UnexpectedErrorResponse: components.UnexpectedErrorResponse$inboundSchema
    .optional(),
}).transform((v) => {
  return remap$(v, {
    "HttpMeta": "httpMeta",
    "CreateTrackingCategoryResponse": "createTrackingCategoryResponse",
    "UnexpectedErrorResponse": "unexpectedErrorResponse",
  });
});

/** @internal */
export type AccountingTrackingCategoriesAddResponse$Outbound = {
  HttpMeta: components.HTTPMetadata$Outbound;
  CreateTrackingCategoryResponse?:
    | components.CreateTrackingCategoryResponse$Outbound
    | undefined;
  UnexpectedErrorResponse?:
    | components.UnexpectedErrorResponse$Outbound
    | undefined;
};

/** @internal */
export const AccountingTrackingCategoriesAddResponse$outboundSchema: z.ZodType<
  AccountingTrackingCategoriesAddResponse$Outbound,
  z.ZodTypeDef,
  AccountingTrackingCategoriesAddResponse
> = z.object({
  httpMeta: components.HTTPMetadata$outboundSchema,
  createTrackingCategoryResponse: components
    .CreateTrackingCategoryResponse$outboundSchema.optional(),
  unexpectedErrorResponse: components.UnexpectedErrorResponse$outboundSchema
    .optional(),
}).transform((v) => {
  return remap$(v, {
    httpMeta: "HttpMeta",
    createTrackingCategoryResponse: "CreateTrackingCategoryResponse",
    unexpectedErrorResponse: "UnexpectedErrorResponse",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AccountingTrackingCategoriesAddResponse$ {
  /** @deprecated use `AccountingTrackingCategoriesAddResponse$inboundSchema` instead. */
  export const inboundSchema =
    AccountingTrackingCategoriesAddResponse$inboundSchema;
  /** @deprecated use `AccountingTrackingCategoriesAddResponse$outboundSchema` instead. */
  export const outboundSchema =
    AccountingTrackingCategoriesAddResponse$outboundSchema;
  /** @deprecated use `AccountingTrackingCategoriesAddResponse$Outbound` instead. */
  export type Outbound = AccountingTrackingCategoriesAddResponse$Outbound;
}

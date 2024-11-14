/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";

export type AccountingTrackingCategoriesUpdateGlobals = {
  /**
   * ID of the consumer which you want to get or push data from
   */
  customerId?: string | undefined;
  /**
   * The ID of your Unify application
   */
  appId?: string | undefined;
};

export type AccountingTrackingCategoriesUpdateRequest = {
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
  trackingCategory: components.TrackingCategoryInput;
};

export type AccountingTrackingCategoriesUpdateResponse = {
  httpMeta: components.HTTPMetadata;
  /**
   * Tracking category updated
   */
  updateTrackingCategoryResponse?:
    | components.UpdateTrackingCategoryResponse
    | undefined;
  /**
   * Unexpected error
   */
  unexpectedErrorResponse?: components.UnexpectedErrorResponse | undefined;
};

/** @internal */
export const AccountingTrackingCategoriesUpdateGlobals$inboundSchema: z.ZodType<
  AccountingTrackingCategoriesUpdateGlobals,
  z.ZodTypeDef,
  unknown
> = z.object({
  customerId: z.string().optional(),
  appId: z.string().optional(),
});

/** @internal */
export type AccountingTrackingCategoriesUpdateGlobals$Outbound = {
  customerId?: string | undefined;
  appId?: string | undefined;
};

/** @internal */
export const AccountingTrackingCategoriesUpdateGlobals$outboundSchema:
  z.ZodType<
    AccountingTrackingCategoriesUpdateGlobals$Outbound,
    z.ZodTypeDef,
    AccountingTrackingCategoriesUpdateGlobals
  > = z.object({
    customerId: z.string().optional(),
    appId: z.string().optional(),
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AccountingTrackingCategoriesUpdateGlobals$ {
  /** @deprecated use `AccountingTrackingCategoriesUpdateGlobals$inboundSchema` instead. */
  export const inboundSchema =
    AccountingTrackingCategoriesUpdateGlobals$inboundSchema;
  /** @deprecated use `AccountingTrackingCategoriesUpdateGlobals$outboundSchema` instead. */
  export const outboundSchema =
    AccountingTrackingCategoriesUpdateGlobals$outboundSchema;
  /** @deprecated use `AccountingTrackingCategoriesUpdateGlobals$Outbound` instead. */
  export type Outbound = AccountingTrackingCategoriesUpdateGlobals$Outbound;
}

/** @internal */
export const AccountingTrackingCategoriesUpdateRequest$inboundSchema: z.ZodType<
  AccountingTrackingCategoriesUpdateRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
  serviceId: z.string().optional(),
  raw: z.boolean().default(false),
  TrackingCategory: components.TrackingCategoryInput$inboundSchema,
}).transform((v) => {
  return remap$(v, {
    "TrackingCategory": "trackingCategory",
  });
});

/** @internal */
export type AccountingTrackingCategoriesUpdateRequest$Outbound = {
  id: string;
  serviceId?: string | undefined;
  raw: boolean;
  TrackingCategory: components.TrackingCategoryInput$Outbound;
};

/** @internal */
export const AccountingTrackingCategoriesUpdateRequest$outboundSchema:
  z.ZodType<
    AccountingTrackingCategoriesUpdateRequest$Outbound,
    z.ZodTypeDef,
    AccountingTrackingCategoriesUpdateRequest
  > = z.object({
    id: z.string(),
    serviceId: z.string().optional(),
    raw: z.boolean().default(false),
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
export namespace AccountingTrackingCategoriesUpdateRequest$ {
  /** @deprecated use `AccountingTrackingCategoriesUpdateRequest$inboundSchema` instead. */
  export const inboundSchema =
    AccountingTrackingCategoriesUpdateRequest$inboundSchema;
  /** @deprecated use `AccountingTrackingCategoriesUpdateRequest$outboundSchema` instead. */
  export const outboundSchema =
    AccountingTrackingCategoriesUpdateRequest$outboundSchema;
  /** @deprecated use `AccountingTrackingCategoriesUpdateRequest$Outbound` instead. */
  export type Outbound = AccountingTrackingCategoriesUpdateRequest$Outbound;
}

/** @internal */
export const AccountingTrackingCategoriesUpdateResponse$inboundSchema:
  z.ZodType<AccountingTrackingCategoriesUpdateResponse, z.ZodTypeDef, unknown> =
    z.object({
      HttpMeta: components.HTTPMetadata$inboundSchema,
      UpdateTrackingCategoryResponse: components
        .UpdateTrackingCategoryResponse$inboundSchema.optional(),
      UnexpectedErrorResponse: components.UnexpectedErrorResponse$inboundSchema
        .optional(),
    }).transform((v) => {
      return remap$(v, {
        "HttpMeta": "httpMeta",
        "UpdateTrackingCategoryResponse": "updateTrackingCategoryResponse",
        "UnexpectedErrorResponse": "unexpectedErrorResponse",
      });
    });

/** @internal */
export type AccountingTrackingCategoriesUpdateResponse$Outbound = {
  HttpMeta: components.HTTPMetadata$Outbound;
  UpdateTrackingCategoryResponse?:
    | components.UpdateTrackingCategoryResponse$Outbound
    | undefined;
  UnexpectedErrorResponse?:
    | components.UnexpectedErrorResponse$Outbound
    | undefined;
};

/** @internal */
export const AccountingTrackingCategoriesUpdateResponse$outboundSchema:
  z.ZodType<
    AccountingTrackingCategoriesUpdateResponse$Outbound,
    z.ZodTypeDef,
    AccountingTrackingCategoriesUpdateResponse
  > = z.object({
    httpMeta: components.HTTPMetadata$outboundSchema,
    updateTrackingCategoryResponse: components
      .UpdateTrackingCategoryResponse$outboundSchema.optional(),
    unexpectedErrorResponse: components.UnexpectedErrorResponse$outboundSchema
      .optional(),
  }).transform((v) => {
    return remap$(v, {
      httpMeta: "HttpMeta",
      updateTrackingCategoryResponse: "UpdateTrackingCategoryResponse",
      unexpectedErrorResponse: "UnexpectedErrorResponse",
    });
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AccountingTrackingCategoriesUpdateResponse$ {
  /** @deprecated use `AccountingTrackingCategoriesUpdateResponse$inboundSchema` instead. */
  export const inboundSchema =
    AccountingTrackingCategoriesUpdateResponse$inboundSchema;
  /** @deprecated use `AccountingTrackingCategoriesUpdateResponse$outboundSchema` instead. */
  export const outboundSchema =
    AccountingTrackingCategoriesUpdateResponse$outboundSchema;
  /** @deprecated use `AccountingTrackingCategoriesUpdateResponse$Outbound` instead. */
  export type Outbound = AccountingTrackingCategoriesUpdateResponse$Outbound;
}

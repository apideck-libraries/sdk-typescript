/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import * as components from "../components/index.js";

export type AccountingTrackingCategoriesOneGlobals = {
  /**
   * ID of the consumer which you want to get or push data from
   */
  customerId?: string | undefined;
  /**
   * The ID of your Unify application
   */
  appId?: string | undefined;
};

export type AccountingTrackingCategoriesOneRequest = {
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

export type AccountingTrackingCategoriesOneResponse =
  | components.GetTrackingCategoryResponse
  | components.UnexpectedErrorResponse;

/** @internal */
export const AccountingTrackingCategoriesOneGlobals$inboundSchema: z.ZodType<
  AccountingTrackingCategoriesOneGlobals,
  z.ZodTypeDef,
  unknown
> = z.object({
  customerId: z.string().optional(),
  appId: z.string().optional(),
});

/** @internal */
export type AccountingTrackingCategoriesOneGlobals$Outbound = {
  customerId?: string | undefined;
  appId?: string | undefined;
};

/** @internal */
export const AccountingTrackingCategoriesOneGlobals$outboundSchema: z.ZodType<
  AccountingTrackingCategoriesOneGlobals$Outbound,
  z.ZodTypeDef,
  AccountingTrackingCategoriesOneGlobals
> = z.object({
  customerId: z.string().optional(),
  appId: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AccountingTrackingCategoriesOneGlobals$ {
  /** @deprecated use `AccountingTrackingCategoriesOneGlobals$inboundSchema` instead. */
  export const inboundSchema =
    AccountingTrackingCategoriesOneGlobals$inboundSchema;
  /** @deprecated use `AccountingTrackingCategoriesOneGlobals$outboundSchema` instead. */
  export const outboundSchema =
    AccountingTrackingCategoriesOneGlobals$outboundSchema;
  /** @deprecated use `AccountingTrackingCategoriesOneGlobals$Outbound` instead. */
  export type Outbound = AccountingTrackingCategoriesOneGlobals$Outbound;
}

/** @internal */
export const AccountingTrackingCategoriesOneRequest$inboundSchema: z.ZodType<
  AccountingTrackingCategoriesOneRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
  serviceId: z.string().optional(),
  raw: z.boolean().default(false),
  fields: z.nullable(z.string()).optional(),
});

/** @internal */
export type AccountingTrackingCategoriesOneRequest$Outbound = {
  id: string;
  serviceId?: string | undefined;
  raw: boolean;
  fields?: string | null | undefined;
};

/** @internal */
export const AccountingTrackingCategoriesOneRequest$outboundSchema: z.ZodType<
  AccountingTrackingCategoriesOneRequest$Outbound,
  z.ZodTypeDef,
  AccountingTrackingCategoriesOneRequest
> = z.object({
  id: z.string(),
  serviceId: z.string().optional(),
  raw: z.boolean().default(false),
  fields: z.nullable(z.string()).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AccountingTrackingCategoriesOneRequest$ {
  /** @deprecated use `AccountingTrackingCategoriesOneRequest$inboundSchema` instead. */
  export const inboundSchema =
    AccountingTrackingCategoriesOneRequest$inboundSchema;
  /** @deprecated use `AccountingTrackingCategoriesOneRequest$outboundSchema` instead. */
  export const outboundSchema =
    AccountingTrackingCategoriesOneRequest$outboundSchema;
  /** @deprecated use `AccountingTrackingCategoriesOneRequest$Outbound` instead. */
  export type Outbound = AccountingTrackingCategoriesOneRequest$Outbound;
}

/** @internal */
export const AccountingTrackingCategoriesOneResponse$inboundSchema: z.ZodType<
  AccountingTrackingCategoriesOneResponse,
  z.ZodTypeDef,
  unknown
> = z.union([
  components.GetTrackingCategoryResponse$inboundSchema,
  components.UnexpectedErrorResponse$inboundSchema,
]);

/** @internal */
export type AccountingTrackingCategoriesOneResponse$Outbound =
  | components.GetTrackingCategoryResponse$Outbound
  | components.UnexpectedErrorResponse$Outbound;

/** @internal */
export const AccountingTrackingCategoriesOneResponse$outboundSchema: z.ZodType<
  AccountingTrackingCategoriesOneResponse$Outbound,
  z.ZodTypeDef,
  AccountingTrackingCategoriesOneResponse
> = z.union([
  components.GetTrackingCategoryResponse$outboundSchema,
  components.UnexpectedErrorResponse$outboundSchema,
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AccountingTrackingCategoriesOneResponse$ {
  /** @deprecated use `AccountingTrackingCategoriesOneResponse$inboundSchema` instead. */
  export const inboundSchema =
    AccountingTrackingCategoriesOneResponse$inboundSchema;
  /** @deprecated use `AccountingTrackingCategoriesOneResponse$outboundSchema` instead. */
  export const outboundSchema =
    AccountingTrackingCategoriesOneResponse$outboundSchema;
  /** @deprecated use `AccountingTrackingCategoriesOneResponse$Outbound` instead. */
  export type Outbound = AccountingTrackingCategoriesOneResponse$Outbound;
}

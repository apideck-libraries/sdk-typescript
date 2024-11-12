/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import * as components from "../components/index.js";

export type CrmContactsOneGlobals = {
  /**
   * ID of the consumer which you want to get or push data from
   */
  customerId?: string | undefined;
  /**
   * The ID of your Unify application
   */
  appId?: string | undefined;
};

export type CrmContactsOneRequest = {
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
  /**
   * Apply filters
   */
  filter?: components.ContactsFilter | undefined;
};

export type CrmContactsOneResponse =
  | components.GetContactResponse
  | components.UnexpectedErrorResponse;

/** @internal */
export const CrmContactsOneGlobals$inboundSchema: z.ZodType<
  CrmContactsOneGlobals,
  z.ZodTypeDef,
  unknown
> = z.object({
  customerId: z.string().optional(),
  appId: z.string().optional(),
});

/** @internal */
export type CrmContactsOneGlobals$Outbound = {
  customerId?: string | undefined;
  appId?: string | undefined;
};

/** @internal */
export const CrmContactsOneGlobals$outboundSchema: z.ZodType<
  CrmContactsOneGlobals$Outbound,
  z.ZodTypeDef,
  CrmContactsOneGlobals
> = z.object({
  customerId: z.string().optional(),
  appId: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CrmContactsOneGlobals$ {
  /** @deprecated use `CrmContactsOneGlobals$inboundSchema` instead. */
  export const inboundSchema = CrmContactsOneGlobals$inboundSchema;
  /** @deprecated use `CrmContactsOneGlobals$outboundSchema` instead. */
  export const outboundSchema = CrmContactsOneGlobals$outboundSchema;
  /** @deprecated use `CrmContactsOneGlobals$Outbound` instead. */
  export type Outbound = CrmContactsOneGlobals$Outbound;
}

/** @internal */
export const CrmContactsOneRequest$inboundSchema: z.ZodType<
  CrmContactsOneRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
  serviceId: z.string().optional(),
  raw: z.boolean().default(false),
  fields: z.nullable(z.string()).optional(),
  filter: components.ContactsFilter$inboundSchema.optional(),
});

/** @internal */
export type CrmContactsOneRequest$Outbound = {
  id: string;
  serviceId?: string | undefined;
  raw: boolean;
  fields?: string | null | undefined;
  filter?: components.ContactsFilter$Outbound | undefined;
};

/** @internal */
export const CrmContactsOneRequest$outboundSchema: z.ZodType<
  CrmContactsOneRequest$Outbound,
  z.ZodTypeDef,
  CrmContactsOneRequest
> = z.object({
  id: z.string(),
  serviceId: z.string().optional(),
  raw: z.boolean().default(false),
  fields: z.nullable(z.string()).optional(),
  filter: components.ContactsFilter$outboundSchema.optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CrmContactsOneRequest$ {
  /** @deprecated use `CrmContactsOneRequest$inboundSchema` instead. */
  export const inboundSchema = CrmContactsOneRequest$inboundSchema;
  /** @deprecated use `CrmContactsOneRequest$outboundSchema` instead. */
  export const outboundSchema = CrmContactsOneRequest$outboundSchema;
  /** @deprecated use `CrmContactsOneRequest$Outbound` instead. */
  export type Outbound = CrmContactsOneRequest$Outbound;
}

/** @internal */
export const CrmContactsOneResponse$inboundSchema: z.ZodType<
  CrmContactsOneResponse,
  z.ZodTypeDef,
  unknown
> = z.union([
  components.GetContactResponse$inboundSchema,
  components.UnexpectedErrorResponse$inboundSchema,
]);

/** @internal */
export type CrmContactsOneResponse$Outbound =
  | components.GetContactResponse$Outbound
  | components.UnexpectedErrorResponse$Outbound;

/** @internal */
export const CrmContactsOneResponse$outboundSchema: z.ZodType<
  CrmContactsOneResponse$Outbound,
  z.ZodTypeDef,
  CrmContactsOneResponse
> = z.union([
  components.GetContactResponse$outboundSchema,
  components.UnexpectedErrorResponse$outboundSchema,
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CrmContactsOneResponse$ {
  /** @deprecated use `CrmContactsOneResponse$inboundSchema` instead. */
  export const inboundSchema = CrmContactsOneResponse$inboundSchema;
  /** @deprecated use `CrmContactsOneResponse$outboundSchema` instead. */
  export const outboundSchema = CrmContactsOneResponse$outboundSchema;
  /** @deprecated use `CrmContactsOneResponse$Outbound` instead. */
  export type Outbound = CrmContactsOneResponse$Outbound;
}

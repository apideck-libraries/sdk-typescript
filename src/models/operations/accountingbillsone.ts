/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import * as components from "../components/index.js";

export type AccountingBillsOneGlobals = {
  /**
   * ID of the consumer which you want to get or push data from
   */
  customerId?: string | undefined;
  /**
   * The ID of your Unify application
   */
  appId?: string | undefined;
};

export type AccountingBillsOneRequest = {
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

export type AccountingBillsOneResponse =
  | components.GetBillResponse
  | components.UnexpectedErrorResponse;

/** @internal */
export const AccountingBillsOneGlobals$inboundSchema: z.ZodType<
  AccountingBillsOneGlobals,
  z.ZodTypeDef,
  unknown
> = z.object({
  customerId: z.string().optional(),
  appId: z.string().optional(),
});

/** @internal */
export type AccountingBillsOneGlobals$Outbound = {
  customerId?: string | undefined;
  appId?: string | undefined;
};

/** @internal */
export const AccountingBillsOneGlobals$outboundSchema: z.ZodType<
  AccountingBillsOneGlobals$Outbound,
  z.ZodTypeDef,
  AccountingBillsOneGlobals
> = z.object({
  customerId: z.string().optional(),
  appId: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AccountingBillsOneGlobals$ {
  /** @deprecated use `AccountingBillsOneGlobals$inboundSchema` instead. */
  export const inboundSchema = AccountingBillsOneGlobals$inboundSchema;
  /** @deprecated use `AccountingBillsOneGlobals$outboundSchema` instead. */
  export const outboundSchema = AccountingBillsOneGlobals$outboundSchema;
  /** @deprecated use `AccountingBillsOneGlobals$Outbound` instead. */
  export type Outbound = AccountingBillsOneGlobals$Outbound;
}

/** @internal */
export const AccountingBillsOneRequest$inboundSchema: z.ZodType<
  AccountingBillsOneRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
  serviceId: z.string().optional(),
  raw: z.boolean().default(false),
  fields: z.nullable(z.string()).optional(),
});

/** @internal */
export type AccountingBillsOneRequest$Outbound = {
  id: string;
  serviceId?: string | undefined;
  raw: boolean;
  fields?: string | null | undefined;
};

/** @internal */
export const AccountingBillsOneRequest$outboundSchema: z.ZodType<
  AccountingBillsOneRequest$Outbound,
  z.ZodTypeDef,
  AccountingBillsOneRequest
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
export namespace AccountingBillsOneRequest$ {
  /** @deprecated use `AccountingBillsOneRequest$inboundSchema` instead. */
  export const inboundSchema = AccountingBillsOneRequest$inboundSchema;
  /** @deprecated use `AccountingBillsOneRequest$outboundSchema` instead. */
  export const outboundSchema = AccountingBillsOneRequest$outboundSchema;
  /** @deprecated use `AccountingBillsOneRequest$Outbound` instead. */
  export type Outbound = AccountingBillsOneRequest$Outbound;
}

/** @internal */
export const AccountingBillsOneResponse$inboundSchema: z.ZodType<
  AccountingBillsOneResponse,
  z.ZodTypeDef,
  unknown
> = z.union([
  components.GetBillResponse$inboundSchema,
  components.UnexpectedErrorResponse$inboundSchema,
]);

/** @internal */
export type AccountingBillsOneResponse$Outbound =
  | components.GetBillResponse$Outbound
  | components.UnexpectedErrorResponse$Outbound;

/** @internal */
export const AccountingBillsOneResponse$outboundSchema: z.ZodType<
  AccountingBillsOneResponse$Outbound,
  z.ZodTypeDef,
  AccountingBillsOneResponse
> = z.union([
  components.GetBillResponse$outboundSchema,
  components.UnexpectedErrorResponse$outboundSchema,
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AccountingBillsOneResponse$ {
  /** @deprecated use `AccountingBillsOneResponse$inboundSchema` instead. */
  export const inboundSchema = AccountingBillsOneResponse$inboundSchema;
  /** @deprecated use `AccountingBillsOneResponse$outboundSchema` instead. */
  export const outboundSchema = AccountingBillsOneResponse$outboundSchema;
  /** @deprecated use `AccountingBillsOneResponse$Outbound` instead. */
  export type Outbound = AccountingBillsOneResponse$Outbound;
}

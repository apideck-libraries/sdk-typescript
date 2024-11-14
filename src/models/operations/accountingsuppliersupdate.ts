/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";

export type AccountingSuppliersUpdateGlobals = {
  /**
   * ID of the consumer which you want to get or push data from
   */
  customerId?: string | undefined;
  /**
   * The ID of your Unify application
   */
  appId?: string | undefined;
};

export type AccountingSuppliersUpdateRequest = {
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
  supplier: components.SupplierInput;
};

export type AccountingSuppliersUpdateResponse = {
  httpMeta: components.HTTPMetadata;
  /**
   * Supplier updated
   */
  updateSupplierResponse?: components.UpdateSupplierResponse | undefined;
  /**
   * Unexpected error
   */
  unexpectedErrorResponse?: components.UnexpectedErrorResponse | undefined;
};

/** @internal */
export const AccountingSuppliersUpdateGlobals$inboundSchema: z.ZodType<
  AccountingSuppliersUpdateGlobals,
  z.ZodTypeDef,
  unknown
> = z.object({
  customerId: z.string().optional(),
  appId: z.string().optional(),
});

/** @internal */
export type AccountingSuppliersUpdateGlobals$Outbound = {
  customerId?: string | undefined;
  appId?: string | undefined;
};

/** @internal */
export const AccountingSuppliersUpdateGlobals$outboundSchema: z.ZodType<
  AccountingSuppliersUpdateGlobals$Outbound,
  z.ZodTypeDef,
  AccountingSuppliersUpdateGlobals
> = z.object({
  customerId: z.string().optional(),
  appId: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AccountingSuppliersUpdateGlobals$ {
  /** @deprecated use `AccountingSuppliersUpdateGlobals$inboundSchema` instead. */
  export const inboundSchema = AccountingSuppliersUpdateGlobals$inboundSchema;
  /** @deprecated use `AccountingSuppliersUpdateGlobals$outboundSchema` instead. */
  export const outboundSchema = AccountingSuppliersUpdateGlobals$outboundSchema;
  /** @deprecated use `AccountingSuppliersUpdateGlobals$Outbound` instead. */
  export type Outbound = AccountingSuppliersUpdateGlobals$Outbound;
}

/** @internal */
export const AccountingSuppliersUpdateRequest$inboundSchema: z.ZodType<
  AccountingSuppliersUpdateRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
  serviceId: z.string().optional(),
  raw: z.boolean().default(false),
  Supplier: components.SupplierInput$inboundSchema,
}).transform((v) => {
  return remap$(v, {
    "Supplier": "supplier",
  });
});

/** @internal */
export type AccountingSuppliersUpdateRequest$Outbound = {
  id: string;
  serviceId?: string | undefined;
  raw: boolean;
  Supplier: components.SupplierInput$Outbound;
};

/** @internal */
export const AccountingSuppliersUpdateRequest$outboundSchema: z.ZodType<
  AccountingSuppliersUpdateRequest$Outbound,
  z.ZodTypeDef,
  AccountingSuppliersUpdateRequest
> = z.object({
  id: z.string(),
  serviceId: z.string().optional(),
  raw: z.boolean().default(false),
  supplier: components.SupplierInput$outboundSchema,
}).transform((v) => {
  return remap$(v, {
    supplier: "Supplier",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AccountingSuppliersUpdateRequest$ {
  /** @deprecated use `AccountingSuppliersUpdateRequest$inboundSchema` instead. */
  export const inboundSchema = AccountingSuppliersUpdateRequest$inboundSchema;
  /** @deprecated use `AccountingSuppliersUpdateRequest$outboundSchema` instead. */
  export const outboundSchema = AccountingSuppliersUpdateRequest$outboundSchema;
  /** @deprecated use `AccountingSuppliersUpdateRequest$Outbound` instead. */
  export type Outbound = AccountingSuppliersUpdateRequest$Outbound;
}

/** @internal */
export const AccountingSuppliersUpdateResponse$inboundSchema: z.ZodType<
  AccountingSuppliersUpdateResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  HttpMeta: components.HTTPMetadata$inboundSchema,
  UpdateSupplierResponse: components.UpdateSupplierResponse$inboundSchema
    .optional(),
  UnexpectedErrorResponse: components.UnexpectedErrorResponse$inboundSchema
    .optional(),
}).transform((v) => {
  return remap$(v, {
    "HttpMeta": "httpMeta",
    "UpdateSupplierResponse": "updateSupplierResponse",
    "UnexpectedErrorResponse": "unexpectedErrorResponse",
  });
});

/** @internal */
export type AccountingSuppliersUpdateResponse$Outbound = {
  HttpMeta: components.HTTPMetadata$Outbound;
  UpdateSupplierResponse?:
    | components.UpdateSupplierResponse$Outbound
    | undefined;
  UnexpectedErrorResponse?:
    | components.UnexpectedErrorResponse$Outbound
    | undefined;
};

/** @internal */
export const AccountingSuppliersUpdateResponse$outboundSchema: z.ZodType<
  AccountingSuppliersUpdateResponse$Outbound,
  z.ZodTypeDef,
  AccountingSuppliersUpdateResponse
> = z.object({
  httpMeta: components.HTTPMetadata$outboundSchema,
  updateSupplierResponse: components.UpdateSupplierResponse$outboundSchema
    .optional(),
  unexpectedErrorResponse: components.UnexpectedErrorResponse$outboundSchema
    .optional(),
}).transform((v) => {
  return remap$(v, {
    httpMeta: "HttpMeta",
    updateSupplierResponse: "UpdateSupplierResponse",
    unexpectedErrorResponse: "UnexpectedErrorResponse",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AccountingSuppliersUpdateResponse$ {
  /** @deprecated use `AccountingSuppliersUpdateResponse$inboundSchema` instead. */
  export const inboundSchema = AccountingSuppliersUpdateResponse$inboundSchema;
  /** @deprecated use `AccountingSuppliersUpdateResponse$outboundSchema` instead. */
  export const outboundSchema =
    AccountingSuppliersUpdateResponse$outboundSchema;
  /** @deprecated use `AccountingSuppliersUpdateResponse$Outbound` instead. */
  export type Outbound = AccountingSuppliersUpdateResponse$Outbound;
}

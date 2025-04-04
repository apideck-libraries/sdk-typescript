/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type AccountingSuppliersAddGlobals = {
  /**
   * ID of the consumer which you want to get or push data from
   */
  consumerId?: string | undefined;
  /**
   * The ID of your Unify application
   */
  appId?: string | undefined;
};

export type AccountingSuppliersAddRequest = {
  /**
   * Include raw response. Mostly used for debugging purposes
   */
  raw?: boolean | undefined;
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
  supplier: components.SupplierInput;
};

export type AccountingSuppliersAddResponse = {
  httpMeta: components.HTTPMetadata;
  /**
   * Supplier created
   */
  createSupplierResponse?: components.CreateSupplierResponse | undefined;
  /**
   * Unexpected error
   */
  unexpectedErrorResponse?: components.UnexpectedErrorResponse | undefined;
};

/** @internal */
export const AccountingSuppliersAddGlobals$inboundSchema: z.ZodType<
  AccountingSuppliersAddGlobals,
  z.ZodTypeDef,
  unknown
> = z.object({
  consumerId: z.string().optional(),
  appId: z.string().optional(),
});

/** @internal */
export type AccountingSuppliersAddGlobals$Outbound = {
  consumerId?: string | undefined;
  appId?: string | undefined;
};

/** @internal */
export const AccountingSuppliersAddGlobals$outboundSchema: z.ZodType<
  AccountingSuppliersAddGlobals$Outbound,
  z.ZodTypeDef,
  AccountingSuppliersAddGlobals
> = z.object({
  consumerId: z.string().optional(),
  appId: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AccountingSuppliersAddGlobals$ {
  /** @deprecated use `AccountingSuppliersAddGlobals$inboundSchema` instead. */
  export const inboundSchema = AccountingSuppliersAddGlobals$inboundSchema;
  /** @deprecated use `AccountingSuppliersAddGlobals$outboundSchema` instead. */
  export const outboundSchema = AccountingSuppliersAddGlobals$outboundSchema;
  /** @deprecated use `AccountingSuppliersAddGlobals$Outbound` instead. */
  export type Outbound = AccountingSuppliersAddGlobals$Outbound;
}

export function accountingSuppliersAddGlobalsToJSON(
  accountingSuppliersAddGlobals: AccountingSuppliersAddGlobals,
): string {
  return JSON.stringify(
    AccountingSuppliersAddGlobals$outboundSchema.parse(
      accountingSuppliersAddGlobals,
    ),
  );
}

export function accountingSuppliersAddGlobalsFromJSON(
  jsonString: string,
): SafeParseResult<AccountingSuppliersAddGlobals, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => AccountingSuppliersAddGlobals$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AccountingSuppliersAddGlobals' from JSON`,
  );
}

/** @internal */
export const AccountingSuppliersAddRequest$inboundSchema: z.ZodType<
  AccountingSuppliersAddRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  raw: z.boolean().default(false),
  consumerId: z.string().optional(),
  appId: z.string().optional(),
  serviceId: z.string().optional(),
  Supplier: components.SupplierInput$inboundSchema,
}).transform((v) => {
  return remap$(v, {
    "Supplier": "supplier",
  });
});

/** @internal */
export type AccountingSuppliersAddRequest$Outbound = {
  raw: boolean;
  consumerId?: string | undefined;
  appId?: string | undefined;
  serviceId?: string | undefined;
  Supplier: components.SupplierInput$Outbound;
};

/** @internal */
export const AccountingSuppliersAddRequest$outboundSchema: z.ZodType<
  AccountingSuppliersAddRequest$Outbound,
  z.ZodTypeDef,
  AccountingSuppliersAddRequest
> = z.object({
  raw: z.boolean().default(false),
  consumerId: z.string().optional(),
  appId: z.string().optional(),
  serviceId: z.string().optional(),
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
export namespace AccountingSuppliersAddRequest$ {
  /** @deprecated use `AccountingSuppliersAddRequest$inboundSchema` instead. */
  export const inboundSchema = AccountingSuppliersAddRequest$inboundSchema;
  /** @deprecated use `AccountingSuppliersAddRequest$outboundSchema` instead. */
  export const outboundSchema = AccountingSuppliersAddRequest$outboundSchema;
  /** @deprecated use `AccountingSuppliersAddRequest$Outbound` instead. */
  export type Outbound = AccountingSuppliersAddRequest$Outbound;
}

export function accountingSuppliersAddRequestToJSON(
  accountingSuppliersAddRequest: AccountingSuppliersAddRequest,
): string {
  return JSON.stringify(
    AccountingSuppliersAddRequest$outboundSchema.parse(
      accountingSuppliersAddRequest,
    ),
  );
}

export function accountingSuppliersAddRequestFromJSON(
  jsonString: string,
): SafeParseResult<AccountingSuppliersAddRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => AccountingSuppliersAddRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AccountingSuppliersAddRequest' from JSON`,
  );
}

/** @internal */
export const AccountingSuppliersAddResponse$inboundSchema: z.ZodType<
  AccountingSuppliersAddResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  HttpMeta: components.HTTPMetadata$inboundSchema,
  CreateSupplierResponse: components.CreateSupplierResponse$inboundSchema
    .optional(),
  UnexpectedErrorResponse: components.UnexpectedErrorResponse$inboundSchema
    .optional(),
}).transform((v) => {
  return remap$(v, {
    "HttpMeta": "httpMeta",
    "CreateSupplierResponse": "createSupplierResponse",
    "UnexpectedErrorResponse": "unexpectedErrorResponse",
  });
});

/** @internal */
export type AccountingSuppliersAddResponse$Outbound = {
  HttpMeta: components.HTTPMetadata$Outbound;
  CreateSupplierResponse?:
    | components.CreateSupplierResponse$Outbound
    | undefined;
  UnexpectedErrorResponse?:
    | components.UnexpectedErrorResponse$Outbound
    | undefined;
};

/** @internal */
export const AccountingSuppliersAddResponse$outboundSchema: z.ZodType<
  AccountingSuppliersAddResponse$Outbound,
  z.ZodTypeDef,
  AccountingSuppliersAddResponse
> = z.object({
  httpMeta: components.HTTPMetadata$outboundSchema,
  createSupplierResponse: components.CreateSupplierResponse$outboundSchema
    .optional(),
  unexpectedErrorResponse: components.UnexpectedErrorResponse$outboundSchema
    .optional(),
}).transform((v) => {
  return remap$(v, {
    httpMeta: "HttpMeta",
    createSupplierResponse: "CreateSupplierResponse",
    unexpectedErrorResponse: "UnexpectedErrorResponse",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AccountingSuppliersAddResponse$ {
  /** @deprecated use `AccountingSuppliersAddResponse$inboundSchema` instead. */
  export const inboundSchema = AccountingSuppliersAddResponse$inboundSchema;
  /** @deprecated use `AccountingSuppliersAddResponse$outboundSchema` instead. */
  export const outboundSchema = AccountingSuppliersAddResponse$outboundSchema;
  /** @deprecated use `AccountingSuppliersAddResponse$Outbound` instead. */
  export type Outbound = AccountingSuppliersAddResponse$Outbound;
}

export function accountingSuppliersAddResponseToJSON(
  accountingSuppliersAddResponse: AccountingSuppliersAddResponse,
): string {
  return JSON.stringify(
    AccountingSuppliersAddResponse$outboundSchema.parse(
      accountingSuppliersAddResponse,
    ),
  );
}

export function accountingSuppliersAddResponseFromJSON(
  jsonString: string,
): SafeParseResult<AccountingSuppliersAddResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => AccountingSuppliersAddResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AccountingSuppliersAddResponse' from JSON`,
  );
}

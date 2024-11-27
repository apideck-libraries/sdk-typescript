/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type AccountingTrackingCategoriesOneGlobals = {
  /**
   * ID of the consumer which you want to get or push data from
   */
  consumerId?: string | undefined;
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

export type AccountingTrackingCategoriesOneResponse = {
  httpMeta: components.HTTPMetadata;
  /**
   * Tracking category
   */
  getTrackingCategoryResponse?:
    | components.GetTrackingCategoryResponse
    | undefined;
  /**
   * Unexpected error
   */
  unexpectedErrorResponse?: components.UnexpectedErrorResponse | undefined;
};

/** @internal */
export const AccountingTrackingCategoriesOneGlobals$inboundSchema: z.ZodType<
  AccountingTrackingCategoriesOneGlobals,
  z.ZodTypeDef,
  unknown
> = z.object({
  consumerId: z.string().optional(),
  appId: z.string().optional(),
});

/** @internal */
export type AccountingTrackingCategoriesOneGlobals$Outbound = {
  consumerId?: string | undefined;
  appId?: string | undefined;
};

/** @internal */
export const AccountingTrackingCategoriesOneGlobals$outboundSchema: z.ZodType<
  AccountingTrackingCategoriesOneGlobals$Outbound,
  z.ZodTypeDef,
  AccountingTrackingCategoriesOneGlobals
> = z.object({
  consumerId: z.string().optional(),
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

export function accountingTrackingCategoriesOneGlobalsToJSON(
  accountingTrackingCategoriesOneGlobals:
    AccountingTrackingCategoriesOneGlobals,
): string {
  return JSON.stringify(
    AccountingTrackingCategoriesOneGlobals$outboundSchema.parse(
      accountingTrackingCategoriesOneGlobals,
    ),
  );
}

export function accountingTrackingCategoriesOneGlobalsFromJSON(
  jsonString: string,
): SafeParseResult<AccountingTrackingCategoriesOneGlobals, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      AccountingTrackingCategoriesOneGlobals$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AccountingTrackingCategoriesOneGlobals' from JSON`,
  );
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

export function accountingTrackingCategoriesOneRequestToJSON(
  accountingTrackingCategoriesOneRequest:
    AccountingTrackingCategoriesOneRequest,
): string {
  return JSON.stringify(
    AccountingTrackingCategoriesOneRequest$outboundSchema.parse(
      accountingTrackingCategoriesOneRequest,
    ),
  );
}

export function accountingTrackingCategoriesOneRequestFromJSON(
  jsonString: string,
): SafeParseResult<AccountingTrackingCategoriesOneRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      AccountingTrackingCategoriesOneRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AccountingTrackingCategoriesOneRequest' from JSON`,
  );
}

/** @internal */
export const AccountingTrackingCategoriesOneResponse$inboundSchema: z.ZodType<
  AccountingTrackingCategoriesOneResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  HttpMeta: components.HTTPMetadata$inboundSchema,
  GetTrackingCategoryResponse: components
    .GetTrackingCategoryResponse$inboundSchema.optional(),
  UnexpectedErrorResponse: components.UnexpectedErrorResponse$inboundSchema
    .optional(),
}).transform((v) => {
  return remap$(v, {
    "HttpMeta": "httpMeta",
    "GetTrackingCategoryResponse": "getTrackingCategoryResponse",
    "UnexpectedErrorResponse": "unexpectedErrorResponse",
  });
});

/** @internal */
export type AccountingTrackingCategoriesOneResponse$Outbound = {
  HttpMeta: components.HTTPMetadata$Outbound;
  GetTrackingCategoryResponse?:
    | components.GetTrackingCategoryResponse$Outbound
    | undefined;
  UnexpectedErrorResponse?:
    | components.UnexpectedErrorResponse$Outbound
    | undefined;
};

/** @internal */
export const AccountingTrackingCategoriesOneResponse$outboundSchema: z.ZodType<
  AccountingTrackingCategoriesOneResponse$Outbound,
  z.ZodTypeDef,
  AccountingTrackingCategoriesOneResponse
> = z.object({
  httpMeta: components.HTTPMetadata$outboundSchema,
  getTrackingCategoryResponse: components
    .GetTrackingCategoryResponse$outboundSchema.optional(),
  unexpectedErrorResponse: components.UnexpectedErrorResponse$outboundSchema
    .optional(),
}).transform((v) => {
  return remap$(v, {
    httpMeta: "HttpMeta",
    getTrackingCategoryResponse: "GetTrackingCategoryResponse",
    unexpectedErrorResponse: "UnexpectedErrorResponse",
  });
});

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

export function accountingTrackingCategoriesOneResponseToJSON(
  accountingTrackingCategoriesOneResponse:
    AccountingTrackingCategoriesOneResponse,
): string {
  return JSON.stringify(
    AccountingTrackingCategoriesOneResponse$outboundSchema.parse(
      accountingTrackingCategoriesOneResponse,
    ),
  );
}

export function accountingTrackingCategoriesOneResponseFromJSON(
  jsonString: string,
): SafeParseResult<
  AccountingTrackingCategoriesOneResponse,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      AccountingTrackingCategoriesOneResponse$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'AccountingTrackingCategoriesOneResponse' from JSON`,
  );
}

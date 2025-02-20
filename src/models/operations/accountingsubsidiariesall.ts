/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type AccountingSubsidiariesAllGlobals = {
  /**
   * ID of the consumer which you want to get or push data from
   */
  consumerId?: string | undefined;
  /**
   * The ID of your Unify application
   */
  appId?: string | undefined;
};

export type AccountingSubsidiariesAllRequest = {
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
  /**
   * Cursor to start from. You can find cursors for next/previous pages in the meta.cursors property of the response.
   */
  cursor?: string | null | undefined;
  /**
   * Number of results to return. Minimum 1, Maximum 200, Default 20
   */
  limit?: number | undefined;
  /**
   * The 'fields' parameter allows API users to specify the fields they want to include in the API response. If this parameter is not present, the API will return all available fields. If this parameter is present, only the fields specified in the comma-separated string will be included in the response. Nested properties can also be requested by using a dot notation. <br /><br />Example: `fields=name,email,addresses.city`<br /><br />In the example above, the response will only include the fields "name", "email" and "addresses.city". If any other fields are available, they will be excluded.
   */
  fields?: string | null | undefined;
};

export type AccountingSubsidiariesAllResponse = {
  httpMeta: components.HTTPMetadata;
  /**
   * Subsidiaries
   */
  getSubsidiariesResponse?: components.GetSubsidiariesResponse | undefined;
  /**
   * Unexpected error
   */
  unexpectedErrorResponse?: components.UnexpectedErrorResponse | undefined;
};

/** @internal */
export const AccountingSubsidiariesAllGlobals$inboundSchema: z.ZodType<
  AccountingSubsidiariesAllGlobals,
  z.ZodTypeDef,
  unknown
> = z.object({
  consumerId: z.string().optional(),
  appId: z.string().optional(),
});

/** @internal */
export type AccountingSubsidiariesAllGlobals$Outbound = {
  consumerId?: string | undefined;
  appId?: string | undefined;
};

/** @internal */
export const AccountingSubsidiariesAllGlobals$outboundSchema: z.ZodType<
  AccountingSubsidiariesAllGlobals$Outbound,
  z.ZodTypeDef,
  AccountingSubsidiariesAllGlobals
> = z.object({
  consumerId: z.string().optional(),
  appId: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AccountingSubsidiariesAllGlobals$ {
  /** @deprecated use `AccountingSubsidiariesAllGlobals$inboundSchema` instead. */
  export const inboundSchema = AccountingSubsidiariesAllGlobals$inboundSchema;
  /** @deprecated use `AccountingSubsidiariesAllGlobals$outboundSchema` instead. */
  export const outboundSchema = AccountingSubsidiariesAllGlobals$outboundSchema;
  /** @deprecated use `AccountingSubsidiariesAllGlobals$Outbound` instead. */
  export type Outbound = AccountingSubsidiariesAllGlobals$Outbound;
}

export function accountingSubsidiariesAllGlobalsToJSON(
  accountingSubsidiariesAllGlobals: AccountingSubsidiariesAllGlobals,
): string {
  return JSON.stringify(
    AccountingSubsidiariesAllGlobals$outboundSchema.parse(
      accountingSubsidiariesAllGlobals,
    ),
  );
}

export function accountingSubsidiariesAllGlobalsFromJSON(
  jsonString: string,
): SafeParseResult<AccountingSubsidiariesAllGlobals, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => AccountingSubsidiariesAllGlobals$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AccountingSubsidiariesAllGlobals' from JSON`,
  );
}

/** @internal */
export const AccountingSubsidiariesAllRequest$inboundSchema: z.ZodType<
  AccountingSubsidiariesAllRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  raw: z.boolean().default(false),
  consumerId: z.string().optional(),
  appId: z.string().optional(),
  serviceId: z.string().optional(),
  cursor: z.nullable(z.string()).optional(),
  limit: z.number().int().default(20),
  fields: z.nullable(z.string()).optional(),
});

/** @internal */
export type AccountingSubsidiariesAllRequest$Outbound = {
  raw: boolean;
  consumerId?: string | undefined;
  appId?: string | undefined;
  serviceId?: string | undefined;
  cursor?: string | null | undefined;
  limit: number;
  fields?: string | null | undefined;
};

/** @internal */
export const AccountingSubsidiariesAllRequest$outboundSchema: z.ZodType<
  AccountingSubsidiariesAllRequest$Outbound,
  z.ZodTypeDef,
  AccountingSubsidiariesAllRequest
> = z.object({
  raw: z.boolean().default(false),
  consumerId: z.string().optional(),
  appId: z.string().optional(),
  serviceId: z.string().optional(),
  cursor: z.nullable(z.string()).optional(),
  limit: z.number().int().default(20),
  fields: z.nullable(z.string()).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AccountingSubsidiariesAllRequest$ {
  /** @deprecated use `AccountingSubsidiariesAllRequest$inboundSchema` instead. */
  export const inboundSchema = AccountingSubsidiariesAllRequest$inboundSchema;
  /** @deprecated use `AccountingSubsidiariesAllRequest$outboundSchema` instead. */
  export const outboundSchema = AccountingSubsidiariesAllRequest$outboundSchema;
  /** @deprecated use `AccountingSubsidiariesAllRequest$Outbound` instead. */
  export type Outbound = AccountingSubsidiariesAllRequest$Outbound;
}

export function accountingSubsidiariesAllRequestToJSON(
  accountingSubsidiariesAllRequest: AccountingSubsidiariesAllRequest,
): string {
  return JSON.stringify(
    AccountingSubsidiariesAllRequest$outboundSchema.parse(
      accountingSubsidiariesAllRequest,
    ),
  );
}

export function accountingSubsidiariesAllRequestFromJSON(
  jsonString: string,
): SafeParseResult<AccountingSubsidiariesAllRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => AccountingSubsidiariesAllRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AccountingSubsidiariesAllRequest' from JSON`,
  );
}

/** @internal */
export const AccountingSubsidiariesAllResponse$inboundSchema: z.ZodType<
  AccountingSubsidiariesAllResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  HttpMeta: components.HTTPMetadata$inboundSchema,
  GetSubsidiariesResponse: components.GetSubsidiariesResponse$inboundSchema
    .optional(),
  UnexpectedErrorResponse: components.UnexpectedErrorResponse$inboundSchema
    .optional(),
}).transform((v) => {
  return remap$(v, {
    "HttpMeta": "httpMeta",
    "GetSubsidiariesResponse": "getSubsidiariesResponse",
    "UnexpectedErrorResponse": "unexpectedErrorResponse",
  });
});

/** @internal */
export type AccountingSubsidiariesAllResponse$Outbound = {
  HttpMeta: components.HTTPMetadata$Outbound;
  GetSubsidiariesResponse?:
    | components.GetSubsidiariesResponse$Outbound
    | undefined;
  UnexpectedErrorResponse?:
    | components.UnexpectedErrorResponse$Outbound
    | undefined;
};

/** @internal */
export const AccountingSubsidiariesAllResponse$outboundSchema: z.ZodType<
  AccountingSubsidiariesAllResponse$Outbound,
  z.ZodTypeDef,
  AccountingSubsidiariesAllResponse
> = z.object({
  httpMeta: components.HTTPMetadata$outboundSchema,
  getSubsidiariesResponse: components.GetSubsidiariesResponse$outboundSchema
    .optional(),
  unexpectedErrorResponse: components.UnexpectedErrorResponse$outboundSchema
    .optional(),
}).transform((v) => {
  return remap$(v, {
    httpMeta: "HttpMeta",
    getSubsidiariesResponse: "GetSubsidiariesResponse",
    unexpectedErrorResponse: "UnexpectedErrorResponse",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AccountingSubsidiariesAllResponse$ {
  /** @deprecated use `AccountingSubsidiariesAllResponse$inboundSchema` instead. */
  export const inboundSchema = AccountingSubsidiariesAllResponse$inboundSchema;
  /** @deprecated use `AccountingSubsidiariesAllResponse$outboundSchema` instead. */
  export const outboundSchema =
    AccountingSubsidiariesAllResponse$outboundSchema;
  /** @deprecated use `AccountingSubsidiariesAllResponse$Outbound` instead. */
  export type Outbound = AccountingSubsidiariesAllResponse$Outbound;
}

export function accountingSubsidiariesAllResponseToJSON(
  accountingSubsidiariesAllResponse: AccountingSubsidiariesAllResponse,
): string {
  return JSON.stringify(
    AccountingSubsidiariesAllResponse$outboundSchema.parse(
      accountingSubsidiariesAllResponse,
    ),
  );
}

export function accountingSubsidiariesAllResponseFromJSON(
  jsonString: string,
): SafeParseResult<AccountingSubsidiariesAllResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => AccountingSubsidiariesAllResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AccountingSubsidiariesAllResponse' from JSON`,
  );
}

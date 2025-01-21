/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type AccountingSubsidiariesOneGlobals = {
  /**
   * ID of the consumer which you want to get or push data from
   */
  consumerId?: string | undefined;
  /**
   * The ID of your Unify application
   */
  appId?: string | undefined;
};

export type AccountingSubsidiariesOneRequest = {
  /**
   * ID of the record you are acting upon.
   */
  id: string;
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
   * Include raw response. Mostly used for debugging purposes
   */
  raw?: boolean | undefined;
  /**
   * The 'fields' parameter allows API users to specify the fields they want to include in the API response. If this parameter is not present, the API will return all available fields. If this parameter is present, only the fields specified in the comma-separated string will be included in the response. Nested properties can also be requested by using a dot notation. <br /><br />Example: `fields=name,email,addresses.city`<br /><br />In the example above, the response will only include the fields "name", "email" and "addresses.city". If any other fields are available, they will be excluded.
   */
  fields?: string | null | undefined;
};

export type AccountingSubsidiariesOneResponse = {
  httpMeta: components.HTTPMetadata;
  /**
   * Subsidiary
   */
  getSubsidiaryResponse?: components.GetSubsidiaryResponse | undefined;
  /**
   * Unexpected error
   */
  unexpectedErrorResponse?: components.UnexpectedErrorResponse | undefined;
};

/** @internal */
export const AccountingSubsidiariesOneGlobals$inboundSchema: z.ZodType<
  AccountingSubsidiariesOneGlobals,
  z.ZodTypeDef,
  unknown
> = z.object({
  consumerId: z.string().optional(),
  appId: z.string().optional(),
});

/** @internal */
export type AccountingSubsidiariesOneGlobals$Outbound = {
  consumerId?: string | undefined;
  appId?: string | undefined;
};

/** @internal */
export const AccountingSubsidiariesOneGlobals$outboundSchema: z.ZodType<
  AccountingSubsidiariesOneGlobals$Outbound,
  z.ZodTypeDef,
  AccountingSubsidiariesOneGlobals
> = z.object({
  consumerId: z.string().optional(),
  appId: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AccountingSubsidiariesOneGlobals$ {
  /** @deprecated use `AccountingSubsidiariesOneGlobals$inboundSchema` instead. */
  export const inboundSchema = AccountingSubsidiariesOneGlobals$inboundSchema;
  /** @deprecated use `AccountingSubsidiariesOneGlobals$outboundSchema` instead. */
  export const outboundSchema = AccountingSubsidiariesOneGlobals$outboundSchema;
  /** @deprecated use `AccountingSubsidiariesOneGlobals$Outbound` instead. */
  export type Outbound = AccountingSubsidiariesOneGlobals$Outbound;
}

export function accountingSubsidiariesOneGlobalsToJSON(
  accountingSubsidiariesOneGlobals: AccountingSubsidiariesOneGlobals,
): string {
  return JSON.stringify(
    AccountingSubsidiariesOneGlobals$outboundSchema.parse(
      accountingSubsidiariesOneGlobals,
    ),
  );
}

export function accountingSubsidiariesOneGlobalsFromJSON(
  jsonString: string,
): SafeParseResult<AccountingSubsidiariesOneGlobals, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => AccountingSubsidiariesOneGlobals$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AccountingSubsidiariesOneGlobals' from JSON`,
  );
}

/** @internal */
export const AccountingSubsidiariesOneRequest$inboundSchema: z.ZodType<
  AccountingSubsidiariesOneRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
  consumerId: z.string().optional(),
  appId: z.string().optional(),
  serviceId: z.string().optional(),
  raw: z.boolean().default(false),
  fields: z.nullable(z.string()).optional(),
});

/** @internal */
export type AccountingSubsidiariesOneRequest$Outbound = {
  id: string;
  consumerId?: string | undefined;
  appId?: string | undefined;
  serviceId?: string | undefined;
  raw: boolean;
  fields?: string | null | undefined;
};

/** @internal */
export const AccountingSubsidiariesOneRequest$outboundSchema: z.ZodType<
  AccountingSubsidiariesOneRequest$Outbound,
  z.ZodTypeDef,
  AccountingSubsidiariesOneRequest
> = z.object({
  id: z.string(),
  consumerId: z.string().optional(),
  appId: z.string().optional(),
  serviceId: z.string().optional(),
  raw: z.boolean().default(false),
  fields: z.nullable(z.string()).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AccountingSubsidiariesOneRequest$ {
  /** @deprecated use `AccountingSubsidiariesOneRequest$inboundSchema` instead. */
  export const inboundSchema = AccountingSubsidiariesOneRequest$inboundSchema;
  /** @deprecated use `AccountingSubsidiariesOneRequest$outboundSchema` instead. */
  export const outboundSchema = AccountingSubsidiariesOneRequest$outboundSchema;
  /** @deprecated use `AccountingSubsidiariesOneRequest$Outbound` instead. */
  export type Outbound = AccountingSubsidiariesOneRequest$Outbound;
}

export function accountingSubsidiariesOneRequestToJSON(
  accountingSubsidiariesOneRequest: AccountingSubsidiariesOneRequest,
): string {
  return JSON.stringify(
    AccountingSubsidiariesOneRequest$outboundSchema.parse(
      accountingSubsidiariesOneRequest,
    ),
  );
}

export function accountingSubsidiariesOneRequestFromJSON(
  jsonString: string,
): SafeParseResult<AccountingSubsidiariesOneRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => AccountingSubsidiariesOneRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AccountingSubsidiariesOneRequest' from JSON`,
  );
}

/** @internal */
export const AccountingSubsidiariesOneResponse$inboundSchema: z.ZodType<
  AccountingSubsidiariesOneResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  HttpMeta: components.HTTPMetadata$inboundSchema,
  GetSubsidiaryResponse: components.GetSubsidiaryResponse$inboundSchema
    .optional(),
  UnexpectedErrorResponse: components.UnexpectedErrorResponse$inboundSchema
    .optional(),
}).transform((v) => {
  return remap$(v, {
    "HttpMeta": "httpMeta",
    "GetSubsidiaryResponse": "getSubsidiaryResponse",
    "UnexpectedErrorResponse": "unexpectedErrorResponse",
  });
});

/** @internal */
export type AccountingSubsidiariesOneResponse$Outbound = {
  HttpMeta: components.HTTPMetadata$Outbound;
  GetSubsidiaryResponse?: components.GetSubsidiaryResponse$Outbound | undefined;
  UnexpectedErrorResponse?:
    | components.UnexpectedErrorResponse$Outbound
    | undefined;
};

/** @internal */
export const AccountingSubsidiariesOneResponse$outboundSchema: z.ZodType<
  AccountingSubsidiariesOneResponse$Outbound,
  z.ZodTypeDef,
  AccountingSubsidiariesOneResponse
> = z.object({
  httpMeta: components.HTTPMetadata$outboundSchema,
  getSubsidiaryResponse: components.GetSubsidiaryResponse$outboundSchema
    .optional(),
  unexpectedErrorResponse: components.UnexpectedErrorResponse$outboundSchema
    .optional(),
}).transform((v) => {
  return remap$(v, {
    httpMeta: "HttpMeta",
    getSubsidiaryResponse: "GetSubsidiaryResponse",
    unexpectedErrorResponse: "UnexpectedErrorResponse",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AccountingSubsidiariesOneResponse$ {
  /** @deprecated use `AccountingSubsidiariesOneResponse$inboundSchema` instead. */
  export const inboundSchema = AccountingSubsidiariesOneResponse$inboundSchema;
  /** @deprecated use `AccountingSubsidiariesOneResponse$outboundSchema` instead. */
  export const outboundSchema =
    AccountingSubsidiariesOneResponse$outboundSchema;
  /** @deprecated use `AccountingSubsidiariesOneResponse$Outbound` instead. */
  export type Outbound = AccountingSubsidiariesOneResponse$Outbound;
}

export function accountingSubsidiariesOneResponseToJSON(
  accountingSubsidiariesOneResponse: AccountingSubsidiariesOneResponse,
): string {
  return JSON.stringify(
    AccountingSubsidiariesOneResponse$outboundSchema.parse(
      accountingSubsidiariesOneResponse,
    ),
  );
}

export function accountingSubsidiariesOneResponseFromJSON(
  jsonString: string,
): SafeParseResult<AccountingSubsidiariesOneResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => AccountingSubsidiariesOneResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AccountingSubsidiariesOneResponse' from JSON`,
  );
}

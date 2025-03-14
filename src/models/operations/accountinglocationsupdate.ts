/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type AccountingLocationsUpdateGlobals = {
  /**
   * ID of the consumer which you want to get or push data from
   */
  consumerId?: string | undefined;
  /**
   * The ID of your Unify application
   */
  appId?: string | undefined;
};

export type AccountingLocationsUpdateRequest = {
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
  accountingLocation: components.AccountingLocationInput;
};

export type AccountingLocationsUpdateResponse = {
  httpMeta: components.HTTPMetadata;
  /**
   * Location
   */
  updateAccountingLocationResponse?:
    | components.UpdateAccountingLocationResponse
    | undefined;
  /**
   * Unexpected error
   */
  unexpectedErrorResponse?: components.UnexpectedErrorResponse | undefined;
};

/** @internal */
export const AccountingLocationsUpdateGlobals$inboundSchema: z.ZodType<
  AccountingLocationsUpdateGlobals,
  z.ZodTypeDef,
  unknown
> = z.object({
  consumerId: z.string().optional(),
  appId: z.string().optional(),
});

/** @internal */
export type AccountingLocationsUpdateGlobals$Outbound = {
  consumerId?: string | undefined;
  appId?: string | undefined;
};

/** @internal */
export const AccountingLocationsUpdateGlobals$outboundSchema: z.ZodType<
  AccountingLocationsUpdateGlobals$Outbound,
  z.ZodTypeDef,
  AccountingLocationsUpdateGlobals
> = z.object({
  consumerId: z.string().optional(),
  appId: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AccountingLocationsUpdateGlobals$ {
  /** @deprecated use `AccountingLocationsUpdateGlobals$inboundSchema` instead. */
  export const inboundSchema = AccountingLocationsUpdateGlobals$inboundSchema;
  /** @deprecated use `AccountingLocationsUpdateGlobals$outboundSchema` instead. */
  export const outboundSchema = AccountingLocationsUpdateGlobals$outboundSchema;
  /** @deprecated use `AccountingLocationsUpdateGlobals$Outbound` instead. */
  export type Outbound = AccountingLocationsUpdateGlobals$Outbound;
}

export function accountingLocationsUpdateGlobalsToJSON(
  accountingLocationsUpdateGlobals: AccountingLocationsUpdateGlobals,
): string {
  return JSON.stringify(
    AccountingLocationsUpdateGlobals$outboundSchema.parse(
      accountingLocationsUpdateGlobals,
    ),
  );
}

export function accountingLocationsUpdateGlobalsFromJSON(
  jsonString: string,
): SafeParseResult<AccountingLocationsUpdateGlobals, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => AccountingLocationsUpdateGlobals$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AccountingLocationsUpdateGlobals' from JSON`,
  );
}

/** @internal */
export const AccountingLocationsUpdateRequest$inboundSchema: z.ZodType<
  AccountingLocationsUpdateRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
  consumerId: z.string().optional(),
  appId: z.string().optional(),
  serviceId: z.string().optional(),
  raw: z.boolean().default(false),
  AccountingLocation: components.AccountingLocationInput$inboundSchema,
}).transform((v) => {
  return remap$(v, {
    "AccountingLocation": "accountingLocation",
  });
});

/** @internal */
export type AccountingLocationsUpdateRequest$Outbound = {
  id: string;
  consumerId?: string | undefined;
  appId?: string | undefined;
  serviceId?: string | undefined;
  raw: boolean;
  AccountingLocation: components.AccountingLocationInput$Outbound;
};

/** @internal */
export const AccountingLocationsUpdateRequest$outboundSchema: z.ZodType<
  AccountingLocationsUpdateRequest$Outbound,
  z.ZodTypeDef,
  AccountingLocationsUpdateRequest
> = z.object({
  id: z.string(),
  consumerId: z.string().optional(),
  appId: z.string().optional(),
  serviceId: z.string().optional(),
  raw: z.boolean().default(false),
  accountingLocation: components.AccountingLocationInput$outboundSchema,
}).transform((v) => {
  return remap$(v, {
    accountingLocation: "AccountingLocation",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AccountingLocationsUpdateRequest$ {
  /** @deprecated use `AccountingLocationsUpdateRequest$inboundSchema` instead. */
  export const inboundSchema = AccountingLocationsUpdateRequest$inboundSchema;
  /** @deprecated use `AccountingLocationsUpdateRequest$outboundSchema` instead. */
  export const outboundSchema = AccountingLocationsUpdateRequest$outboundSchema;
  /** @deprecated use `AccountingLocationsUpdateRequest$Outbound` instead. */
  export type Outbound = AccountingLocationsUpdateRequest$Outbound;
}

export function accountingLocationsUpdateRequestToJSON(
  accountingLocationsUpdateRequest: AccountingLocationsUpdateRequest,
): string {
  return JSON.stringify(
    AccountingLocationsUpdateRequest$outboundSchema.parse(
      accountingLocationsUpdateRequest,
    ),
  );
}

export function accountingLocationsUpdateRequestFromJSON(
  jsonString: string,
): SafeParseResult<AccountingLocationsUpdateRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => AccountingLocationsUpdateRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AccountingLocationsUpdateRequest' from JSON`,
  );
}

/** @internal */
export const AccountingLocationsUpdateResponse$inboundSchema: z.ZodType<
  AccountingLocationsUpdateResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  HttpMeta: components.HTTPMetadata$inboundSchema,
  UpdateAccountingLocationResponse: components
    .UpdateAccountingLocationResponse$inboundSchema.optional(),
  UnexpectedErrorResponse: components.UnexpectedErrorResponse$inboundSchema
    .optional(),
}).transform((v) => {
  return remap$(v, {
    "HttpMeta": "httpMeta",
    "UpdateAccountingLocationResponse": "updateAccountingLocationResponse",
    "UnexpectedErrorResponse": "unexpectedErrorResponse",
  });
});

/** @internal */
export type AccountingLocationsUpdateResponse$Outbound = {
  HttpMeta: components.HTTPMetadata$Outbound;
  UpdateAccountingLocationResponse?:
    | components.UpdateAccountingLocationResponse$Outbound
    | undefined;
  UnexpectedErrorResponse?:
    | components.UnexpectedErrorResponse$Outbound
    | undefined;
};

/** @internal */
export const AccountingLocationsUpdateResponse$outboundSchema: z.ZodType<
  AccountingLocationsUpdateResponse$Outbound,
  z.ZodTypeDef,
  AccountingLocationsUpdateResponse
> = z.object({
  httpMeta: components.HTTPMetadata$outboundSchema,
  updateAccountingLocationResponse: components
    .UpdateAccountingLocationResponse$outboundSchema.optional(),
  unexpectedErrorResponse: components.UnexpectedErrorResponse$outboundSchema
    .optional(),
}).transform((v) => {
  return remap$(v, {
    httpMeta: "HttpMeta",
    updateAccountingLocationResponse: "UpdateAccountingLocationResponse",
    unexpectedErrorResponse: "UnexpectedErrorResponse",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AccountingLocationsUpdateResponse$ {
  /** @deprecated use `AccountingLocationsUpdateResponse$inboundSchema` instead. */
  export const inboundSchema = AccountingLocationsUpdateResponse$inboundSchema;
  /** @deprecated use `AccountingLocationsUpdateResponse$outboundSchema` instead. */
  export const outboundSchema =
    AccountingLocationsUpdateResponse$outboundSchema;
  /** @deprecated use `AccountingLocationsUpdateResponse$Outbound` instead. */
  export type Outbound = AccountingLocationsUpdateResponse$Outbound;
}

export function accountingLocationsUpdateResponseToJSON(
  accountingLocationsUpdateResponse: AccountingLocationsUpdateResponse,
): string {
  return JSON.stringify(
    AccountingLocationsUpdateResponse$outboundSchema.parse(
      accountingLocationsUpdateResponse,
    ),
  );
}

export function accountingLocationsUpdateResponseFromJSON(
  jsonString: string,
): SafeParseResult<AccountingLocationsUpdateResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => AccountingLocationsUpdateResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AccountingLocationsUpdateResponse' from JSON`,
  );
}

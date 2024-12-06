/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type AccountingDepartmentsUpdateGlobals = {
  /**
   * ID of the consumer which you want to get or push data from
   */
  consumerId?: string | undefined;
  /**
   * The ID of your Unify application
   */
  appId?: string | undefined;
};

export type AccountingDepartmentsUpdateRequest = {
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
  accountingDepartment: components.AccountingDepartmentInput;
};

export type AccountingDepartmentsUpdateResponse = {
  httpMeta: components.HTTPMetadata;
  /**
   * Department
   */
  updateAccountingDepartmentResponse?:
    | components.UpdateAccountingDepartmentResponse
    | undefined;
  /**
   * Unexpected error
   */
  unexpectedErrorResponse?: components.UnexpectedErrorResponse | undefined;
};

/** @internal */
export const AccountingDepartmentsUpdateGlobals$inboundSchema: z.ZodType<
  AccountingDepartmentsUpdateGlobals,
  z.ZodTypeDef,
  unknown
> = z.object({
  consumerId: z.string().optional(),
  appId: z.string().optional(),
});

/** @internal */
export type AccountingDepartmentsUpdateGlobals$Outbound = {
  consumerId?: string | undefined;
  appId?: string | undefined;
};

/** @internal */
export const AccountingDepartmentsUpdateGlobals$outboundSchema: z.ZodType<
  AccountingDepartmentsUpdateGlobals$Outbound,
  z.ZodTypeDef,
  AccountingDepartmentsUpdateGlobals
> = z.object({
  consumerId: z.string().optional(),
  appId: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AccountingDepartmentsUpdateGlobals$ {
  /** @deprecated use `AccountingDepartmentsUpdateGlobals$inboundSchema` instead. */
  export const inboundSchema = AccountingDepartmentsUpdateGlobals$inboundSchema;
  /** @deprecated use `AccountingDepartmentsUpdateGlobals$outboundSchema` instead. */
  export const outboundSchema =
    AccountingDepartmentsUpdateGlobals$outboundSchema;
  /** @deprecated use `AccountingDepartmentsUpdateGlobals$Outbound` instead. */
  export type Outbound = AccountingDepartmentsUpdateGlobals$Outbound;
}

export function accountingDepartmentsUpdateGlobalsToJSON(
  accountingDepartmentsUpdateGlobals: AccountingDepartmentsUpdateGlobals,
): string {
  return JSON.stringify(
    AccountingDepartmentsUpdateGlobals$outboundSchema.parse(
      accountingDepartmentsUpdateGlobals,
    ),
  );
}

export function accountingDepartmentsUpdateGlobalsFromJSON(
  jsonString: string,
): SafeParseResult<AccountingDepartmentsUpdateGlobals, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      AccountingDepartmentsUpdateGlobals$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AccountingDepartmentsUpdateGlobals' from JSON`,
  );
}

/** @internal */
export const AccountingDepartmentsUpdateRequest$inboundSchema: z.ZodType<
  AccountingDepartmentsUpdateRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
  serviceId: z.string().optional(),
  raw: z.boolean().default(false),
  AccountingDepartment: components.AccountingDepartmentInput$inboundSchema,
}).transform((v) => {
  return remap$(v, {
    "AccountingDepartment": "accountingDepartment",
  });
});

/** @internal */
export type AccountingDepartmentsUpdateRequest$Outbound = {
  id: string;
  serviceId?: string | undefined;
  raw: boolean;
  AccountingDepartment: components.AccountingDepartmentInput$Outbound;
};

/** @internal */
export const AccountingDepartmentsUpdateRequest$outboundSchema: z.ZodType<
  AccountingDepartmentsUpdateRequest$Outbound,
  z.ZodTypeDef,
  AccountingDepartmentsUpdateRequest
> = z.object({
  id: z.string(),
  serviceId: z.string().optional(),
  raw: z.boolean().default(false),
  accountingDepartment: components.AccountingDepartmentInput$outboundSchema,
}).transform((v) => {
  return remap$(v, {
    accountingDepartment: "AccountingDepartment",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AccountingDepartmentsUpdateRequest$ {
  /** @deprecated use `AccountingDepartmentsUpdateRequest$inboundSchema` instead. */
  export const inboundSchema = AccountingDepartmentsUpdateRequest$inboundSchema;
  /** @deprecated use `AccountingDepartmentsUpdateRequest$outboundSchema` instead. */
  export const outboundSchema =
    AccountingDepartmentsUpdateRequest$outboundSchema;
  /** @deprecated use `AccountingDepartmentsUpdateRequest$Outbound` instead. */
  export type Outbound = AccountingDepartmentsUpdateRequest$Outbound;
}

export function accountingDepartmentsUpdateRequestToJSON(
  accountingDepartmentsUpdateRequest: AccountingDepartmentsUpdateRequest,
): string {
  return JSON.stringify(
    AccountingDepartmentsUpdateRequest$outboundSchema.parse(
      accountingDepartmentsUpdateRequest,
    ),
  );
}

export function accountingDepartmentsUpdateRequestFromJSON(
  jsonString: string,
): SafeParseResult<AccountingDepartmentsUpdateRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      AccountingDepartmentsUpdateRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AccountingDepartmentsUpdateRequest' from JSON`,
  );
}

/** @internal */
export const AccountingDepartmentsUpdateResponse$inboundSchema: z.ZodType<
  AccountingDepartmentsUpdateResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  HttpMeta: components.HTTPMetadata$inboundSchema,
  UpdateAccountingDepartmentResponse: components
    .UpdateAccountingDepartmentResponse$inboundSchema.optional(),
  UnexpectedErrorResponse: components.UnexpectedErrorResponse$inboundSchema
    .optional(),
}).transform((v) => {
  return remap$(v, {
    "HttpMeta": "httpMeta",
    "UpdateAccountingDepartmentResponse": "updateAccountingDepartmentResponse",
    "UnexpectedErrorResponse": "unexpectedErrorResponse",
  });
});

/** @internal */
export type AccountingDepartmentsUpdateResponse$Outbound = {
  HttpMeta: components.HTTPMetadata$Outbound;
  UpdateAccountingDepartmentResponse?:
    | components.UpdateAccountingDepartmentResponse$Outbound
    | undefined;
  UnexpectedErrorResponse?:
    | components.UnexpectedErrorResponse$Outbound
    | undefined;
};

/** @internal */
export const AccountingDepartmentsUpdateResponse$outboundSchema: z.ZodType<
  AccountingDepartmentsUpdateResponse$Outbound,
  z.ZodTypeDef,
  AccountingDepartmentsUpdateResponse
> = z.object({
  httpMeta: components.HTTPMetadata$outboundSchema,
  updateAccountingDepartmentResponse: components
    .UpdateAccountingDepartmentResponse$outboundSchema.optional(),
  unexpectedErrorResponse: components.UnexpectedErrorResponse$outboundSchema
    .optional(),
}).transform((v) => {
  return remap$(v, {
    httpMeta: "HttpMeta",
    updateAccountingDepartmentResponse: "UpdateAccountingDepartmentResponse",
    unexpectedErrorResponse: "UnexpectedErrorResponse",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AccountingDepartmentsUpdateResponse$ {
  /** @deprecated use `AccountingDepartmentsUpdateResponse$inboundSchema` instead. */
  export const inboundSchema =
    AccountingDepartmentsUpdateResponse$inboundSchema;
  /** @deprecated use `AccountingDepartmentsUpdateResponse$outboundSchema` instead. */
  export const outboundSchema =
    AccountingDepartmentsUpdateResponse$outboundSchema;
  /** @deprecated use `AccountingDepartmentsUpdateResponse$Outbound` instead. */
  export type Outbound = AccountingDepartmentsUpdateResponse$Outbound;
}

export function accountingDepartmentsUpdateResponseToJSON(
  accountingDepartmentsUpdateResponse: AccountingDepartmentsUpdateResponse,
): string {
  return JSON.stringify(
    AccountingDepartmentsUpdateResponse$outboundSchema.parse(
      accountingDepartmentsUpdateResponse,
    ),
  );
}

export function accountingDepartmentsUpdateResponseFromJSON(
  jsonString: string,
): SafeParseResult<AccountingDepartmentsUpdateResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      AccountingDepartmentsUpdateResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AccountingDepartmentsUpdateResponse' from JSON`,
  );
}

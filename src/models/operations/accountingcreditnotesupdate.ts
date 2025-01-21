/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type AccountingCreditNotesUpdateGlobals = {
  /**
   * ID of the consumer which you want to get or push data from
   */
  consumerId?: string | undefined;
  /**
   * The ID of your Unify application
   */
  appId?: string | undefined;
};

export type AccountingCreditNotesUpdateRequest = {
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
  creditNote: components.CreditNoteInput;
};

export type AccountingCreditNotesUpdateResponse = {
  httpMeta: components.HTTPMetadata;
  /**
   * Credit Note updated
   */
  updateCreditNoteResponse?: components.UpdateCreditNoteResponse | undefined;
  /**
   * Unexpected error
   */
  unexpectedErrorResponse?: components.UnexpectedErrorResponse | undefined;
};

/** @internal */
export const AccountingCreditNotesUpdateGlobals$inboundSchema: z.ZodType<
  AccountingCreditNotesUpdateGlobals,
  z.ZodTypeDef,
  unknown
> = z.object({
  consumerId: z.string().optional(),
  appId: z.string().optional(),
});

/** @internal */
export type AccountingCreditNotesUpdateGlobals$Outbound = {
  consumerId?: string | undefined;
  appId?: string | undefined;
};

/** @internal */
export const AccountingCreditNotesUpdateGlobals$outboundSchema: z.ZodType<
  AccountingCreditNotesUpdateGlobals$Outbound,
  z.ZodTypeDef,
  AccountingCreditNotesUpdateGlobals
> = z.object({
  consumerId: z.string().optional(),
  appId: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AccountingCreditNotesUpdateGlobals$ {
  /** @deprecated use `AccountingCreditNotesUpdateGlobals$inboundSchema` instead. */
  export const inboundSchema = AccountingCreditNotesUpdateGlobals$inboundSchema;
  /** @deprecated use `AccountingCreditNotesUpdateGlobals$outboundSchema` instead. */
  export const outboundSchema =
    AccountingCreditNotesUpdateGlobals$outboundSchema;
  /** @deprecated use `AccountingCreditNotesUpdateGlobals$Outbound` instead. */
  export type Outbound = AccountingCreditNotesUpdateGlobals$Outbound;
}

export function accountingCreditNotesUpdateGlobalsToJSON(
  accountingCreditNotesUpdateGlobals: AccountingCreditNotesUpdateGlobals,
): string {
  return JSON.stringify(
    AccountingCreditNotesUpdateGlobals$outboundSchema.parse(
      accountingCreditNotesUpdateGlobals,
    ),
  );
}

export function accountingCreditNotesUpdateGlobalsFromJSON(
  jsonString: string,
): SafeParseResult<AccountingCreditNotesUpdateGlobals, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      AccountingCreditNotesUpdateGlobals$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AccountingCreditNotesUpdateGlobals' from JSON`,
  );
}

/** @internal */
export const AccountingCreditNotesUpdateRequest$inboundSchema: z.ZodType<
  AccountingCreditNotesUpdateRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
  consumerId: z.string().optional(),
  appId: z.string().optional(),
  serviceId: z.string().optional(),
  raw: z.boolean().default(false),
  CreditNote: components.CreditNoteInput$inboundSchema,
}).transform((v) => {
  return remap$(v, {
    "CreditNote": "creditNote",
  });
});

/** @internal */
export type AccountingCreditNotesUpdateRequest$Outbound = {
  id: string;
  consumerId?: string | undefined;
  appId?: string | undefined;
  serviceId?: string | undefined;
  raw: boolean;
  CreditNote: components.CreditNoteInput$Outbound;
};

/** @internal */
export const AccountingCreditNotesUpdateRequest$outboundSchema: z.ZodType<
  AccountingCreditNotesUpdateRequest$Outbound,
  z.ZodTypeDef,
  AccountingCreditNotesUpdateRequest
> = z.object({
  id: z.string(),
  consumerId: z.string().optional(),
  appId: z.string().optional(),
  serviceId: z.string().optional(),
  raw: z.boolean().default(false),
  creditNote: components.CreditNoteInput$outboundSchema,
}).transform((v) => {
  return remap$(v, {
    creditNote: "CreditNote",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AccountingCreditNotesUpdateRequest$ {
  /** @deprecated use `AccountingCreditNotesUpdateRequest$inboundSchema` instead. */
  export const inboundSchema = AccountingCreditNotesUpdateRequest$inboundSchema;
  /** @deprecated use `AccountingCreditNotesUpdateRequest$outboundSchema` instead. */
  export const outboundSchema =
    AccountingCreditNotesUpdateRequest$outboundSchema;
  /** @deprecated use `AccountingCreditNotesUpdateRequest$Outbound` instead. */
  export type Outbound = AccountingCreditNotesUpdateRequest$Outbound;
}

export function accountingCreditNotesUpdateRequestToJSON(
  accountingCreditNotesUpdateRequest: AccountingCreditNotesUpdateRequest,
): string {
  return JSON.stringify(
    AccountingCreditNotesUpdateRequest$outboundSchema.parse(
      accountingCreditNotesUpdateRequest,
    ),
  );
}

export function accountingCreditNotesUpdateRequestFromJSON(
  jsonString: string,
): SafeParseResult<AccountingCreditNotesUpdateRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      AccountingCreditNotesUpdateRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AccountingCreditNotesUpdateRequest' from JSON`,
  );
}

/** @internal */
export const AccountingCreditNotesUpdateResponse$inboundSchema: z.ZodType<
  AccountingCreditNotesUpdateResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  HttpMeta: components.HTTPMetadata$inboundSchema,
  UpdateCreditNoteResponse: components.UpdateCreditNoteResponse$inboundSchema
    .optional(),
  UnexpectedErrorResponse: components.UnexpectedErrorResponse$inboundSchema
    .optional(),
}).transform((v) => {
  return remap$(v, {
    "HttpMeta": "httpMeta",
    "UpdateCreditNoteResponse": "updateCreditNoteResponse",
    "UnexpectedErrorResponse": "unexpectedErrorResponse",
  });
});

/** @internal */
export type AccountingCreditNotesUpdateResponse$Outbound = {
  HttpMeta: components.HTTPMetadata$Outbound;
  UpdateCreditNoteResponse?:
    | components.UpdateCreditNoteResponse$Outbound
    | undefined;
  UnexpectedErrorResponse?:
    | components.UnexpectedErrorResponse$Outbound
    | undefined;
};

/** @internal */
export const AccountingCreditNotesUpdateResponse$outboundSchema: z.ZodType<
  AccountingCreditNotesUpdateResponse$Outbound,
  z.ZodTypeDef,
  AccountingCreditNotesUpdateResponse
> = z.object({
  httpMeta: components.HTTPMetadata$outboundSchema,
  updateCreditNoteResponse: components.UpdateCreditNoteResponse$outboundSchema
    .optional(),
  unexpectedErrorResponse: components.UnexpectedErrorResponse$outboundSchema
    .optional(),
}).transform((v) => {
  return remap$(v, {
    httpMeta: "HttpMeta",
    updateCreditNoteResponse: "UpdateCreditNoteResponse",
    unexpectedErrorResponse: "UnexpectedErrorResponse",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AccountingCreditNotesUpdateResponse$ {
  /** @deprecated use `AccountingCreditNotesUpdateResponse$inboundSchema` instead. */
  export const inboundSchema =
    AccountingCreditNotesUpdateResponse$inboundSchema;
  /** @deprecated use `AccountingCreditNotesUpdateResponse$outboundSchema` instead. */
  export const outboundSchema =
    AccountingCreditNotesUpdateResponse$outboundSchema;
  /** @deprecated use `AccountingCreditNotesUpdateResponse$Outbound` instead. */
  export type Outbound = AccountingCreditNotesUpdateResponse$Outbound;
}

export function accountingCreditNotesUpdateResponseToJSON(
  accountingCreditNotesUpdateResponse: AccountingCreditNotesUpdateResponse,
): string {
  return JSON.stringify(
    AccountingCreditNotesUpdateResponse$outboundSchema.parse(
      accountingCreditNotesUpdateResponse,
    ),
  );
}

export function accountingCreditNotesUpdateResponseFromJSON(
  jsonString: string,
): SafeParseResult<AccountingCreditNotesUpdateResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      AccountingCreditNotesUpdateResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AccountingCreditNotesUpdateResponse' from JSON`,
  );
}

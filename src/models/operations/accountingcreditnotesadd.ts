/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type AccountingCreditNotesAddGlobals = {
  /**
   * ID of the consumer which you want to get or push data from
   */
  consumerId?: string | undefined;
  /**
   * The ID of your Unify application
   */
  appId?: string | undefined;
};

export type AccountingCreditNotesAddRequest = {
  /**
   * Include raw response. Mostly used for debugging purposes
   */
  raw?: boolean | undefined;
  /**
   * Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API.
   */
  serviceId?: string | undefined;
  creditNote: components.CreditNoteInput;
};

export type AccountingCreditNotesAddResponse = {
  httpMeta: components.HTTPMetadata;
  /**
   * Credit Note created
   */
  createCreditNoteResponse?: components.CreateCreditNoteResponse | undefined;
  /**
   * Unexpected error
   */
  unexpectedErrorResponse?: components.UnexpectedErrorResponse | undefined;
};

/** @internal */
export const AccountingCreditNotesAddGlobals$inboundSchema: z.ZodType<
  AccountingCreditNotesAddGlobals,
  z.ZodTypeDef,
  unknown
> = z.object({
  consumerId: z.string().optional(),
  appId: z.string().optional(),
});

/** @internal */
export type AccountingCreditNotesAddGlobals$Outbound = {
  consumerId?: string | undefined;
  appId?: string | undefined;
};

/** @internal */
export const AccountingCreditNotesAddGlobals$outboundSchema: z.ZodType<
  AccountingCreditNotesAddGlobals$Outbound,
  z.ZodTypeDef,
  AccountingCreditNotesAddGlobals
> = z.object({
  consumerId: z.string().optional(),
  appId: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AccountingCreditNotesAddGlobals$ {
  /** @deprecated use `AccountingCreditNotesAddGlobals$inboundSchema` instead. */
  export const inboundSchema = AccountingCreditNotesAddGlobals$inboundSchema;
  /** @deprecated use `AccountingCreditNotesAddGlobals$outboundSchema` instead. */
  export const outboundSchema = AccountingCreditNotesAddGlobals$outboundSchema;
  /** @deprecated use `AccountingCreditNotesAddGlobals$Outbound` instead. */
  export type Outbound = AccountingCreditNotesAddGlobals$Outbound;
}

export function accountingCreditNotesAddGlobalsToJSON(
  accountingCreditNotesAddGlobals: AccountingCreditNotesAddGlobals,
): string {
  return JSON.stringify(
    AccountingCreditNotesAddGlobals$outboundSchema.parse(
      accountingCreditNotesAddGlobals,
    ),
  );
}

export function accountingCreditNotesAddGlobalsFromJSON(
  jsonString: string,
): SafeParseResult<AccountingCreditNotesAddGlobals, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => AccountingCreditNotesAddGlobals$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AccountingCreditNotesAddGlobals' from JSON`,
  );
}

/** @internal */
export const AccountingCreditNotesAddRequest$inboundSchema: z.ZodType<
  AccountingCreditNotesAddRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  raw: z.boolean().default(false),
  serviceId: z.string().optional(),
  CreditNote: components.CreditNoteInput$inboundSchema,
}).transform((v) => {
  return remap$(v, {
    "CreditNote": "creditNote",
  });
});

/** @internal */
export type AccountingCreditNotesAddRequest$Outbound = {
  raw: boolean;
  serviceId?: string | undefined;
  CreditNote: components.CreditNoteInput$Outbound;
};

/** @internal */
export const AccountingCreditNotesAddRequest$outboundSchema: z.ZodType<
  AccountingCreditNotesAddRequest$Outbound,
  z.ZodTypeDef,
  AccountingCreditNotesAddRequest
> = z.object({
  raw: z.boolean().default(false),
  serviceId: z.string().optional(),
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
export namespace AccountingCreditNotesAddRequest$ {
  /** @deprecated use `AccountingCreditNotesAddRequest$inboundSchema` instead. */
  export const inboundSchema = AccountingCreditNotesAddRequest$inboundSchema;
  /** @deprecated use `AccountingCreditNotesAddRequest$outboundSchema` instead. */
  export const outboundSchema = AccountingCreditNotesAddRequest$outboundSchema;
  /** @deprecated use `AccountingCreditNotesAddRequest$Outbound` instead. */
  export type Outbound = AccountingCreditNotesAddRequest$Outbound;
}

export function accountingCreditNotesAddRequestToJSON(
  accountingCreditNotesAddRequest: AccountingCreditNotesAddRequest,
): string {
  return JSON.stringify(
    AccountingCreditNotesAddRequest$outboundSchema.parse(
      accountingCreditNotesAddRequest,
    ),
  );
}

export function accountingCreditNotesAddRequestFromJSON(
  jsonString: string,
): SafeParseResult<AccountingCreditNotesAddRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => AccountingCreditNotesAddRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AccountingCreditNotesAddRequest' from JSON`,
  );
}

/** @internal */
export const AccountingCreditNotesAddResponse$inboundSchema: z.ZodType<
  AccountingCreditNotesAddResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  HttpMeta: components.HTTPMetadata$inboundSchema,
  CreateCreditNoteResponse: components.CreateCreditNoteResponse$inboundSchema
    .optional(),
  UnexpectedErrorResponse: components.UnexpectedErrorResponse$inboundSchema
    .optional(),
}).transform((v) => {
  return remap$(v, {
    "HttpMeta": "httpMeta",
    "CreateCreditNoteResponse": "createCreditNoteResponse",
    "UnexpectedErrorResponse": "unexpectedErrorResponse",
  });
});

/** @internal */
export type AccountingCreditNotesAddResponse$Outbound = {
  HttpMeta: components.HTTPMetadata$Outbound;
  CreateCreditNoteResponse?:
    | components.CreateCreditNoteResponse$Outbound
    | undefined;
  UnexpectedErrorResponse?:
    | components.UnexpectedErrorResponse$Outbound
    | undefined;
};

/** @internal */
export const AccountingCreditNotesAddResponse$outboundSchema: z.ZodType<
  AccountingCreditNotesAddResponse$Outbound,
  z.ZodTypeDef,
  AccountingCreditNotesAddResponse
> = z.object({
  httpMeta: components.HTTPMetadata$outboundSchema,
  createCreditNoteResponse: components.CreateCreditNoteResponse$outboundSchema
    .optional(),
  unexpectedErrorResponse: components.UnexpectedErrorResponse$outboundSchema
    .optional(),
}).transform((v) => {
  return remap$(v, {
    httpMeta: "HttpMeta",
    createCreditNoteResponse: "CreateCreditNoteResponse",
    unexpectedErrorResponse: "UnexpectedErrorResponse",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AccountingCreditNotesAddResponse$ {
  /** @deprecated use `AccountingCreditNotesAddResponse$inboundSchema` instead. */
  export const inboundSchema = AccountingCreditNotesAddResponse$inboundSchema;
  /** @deprecated use `AccountingCreditNotesAddResponse$outboundSchema` instead. */
  export const outboundSchema = AccountingCreditNotesAddResponse$outboundSchema;
  /** @deprecated use `AccountingCreditNotesAddResponse$Outbound` instead. */
  export type Outbound = AccountingCreditNotesAddResponse$Outbound;
}

export function accountingCreditNotesAddResponseToJSON(
  accountingCreditNotesAddResponse: AccountingCreditNotesAddResponse,
): string {
  return JSON.stringify(
    AccountingCreditNotesAddResponse$outboundSchema.parse(
      accountingCreditNotesAddResponse,
    ),
  );
}

export function accountingCreditNotesAddResponseFromJSON(
  jsonString: string,
): SafeParseResult<AccountingCreditNotesAddResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => AccountingCreditNotesAddResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AccountingCreditNotesAddResponse' from JSON`,
  );
}

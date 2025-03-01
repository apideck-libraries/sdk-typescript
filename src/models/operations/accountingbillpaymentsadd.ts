/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type AccountingBillPaymentsAddGlobals = {
  /**
   * ID of the consumer which you want to get or push data from
   */
  consumerId?: string | undefined;
  /**
   * The ID of your Unify application
   */
  appId?: string | undefined;
};

export type AccountingBillPaymentsAddRequest = {
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
  billPayment: components.BillPaymentInput;
};

export type AccountingBillPaymentsAddResponse = {
  httpMeta: components.HTTPMetadata;
  /**
   * Bill Payment created
   */
  createBillPaymentResponse?: components.CreateBillPaymentResponse | undefined;
  /**
   * Unexpected error
   */
  unexpectedErrorResponse?: components.UnexpectedErrorResponse | undefined;
};

/** @internal */
export const AccountingBillPaymentsAddGlobals$inboundSchema: z.ZodType<
  AccountingBillPaymentsAddGlobals,
  z.ZodTypeDef,
  unknown
> = z.object({
  consumerId: z.string().optional(),
  appId: z.string().optional(),
});

/** @internal */
export type AccountingBillPaymentsAddGlobals$Outbound = {
  consumerId?: string | undefined;
  appId?: string | undefined;
};

/** @internal */
export const AccountingBillPaymentsAddGlobals$outboundSchema: z.ZodType<
  AccountingBillPaymentsAddGlobals$Outbound,
  z.ZodTypeDef,
  AccountingBillPaymentsAddGlobals
> = z.object({
  consumerId: z.string().optional(),
  appId: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AccountingBillPaymentsAddGlobals$ {
  /** @deprecated use `AccountingBillPaymentsAddGlobals$inboundSchema` instead. */
  export const inboundSchema = AccountingBillPaymentsAddGlobals$inboundSchema;
  /** @deprecated use `AccountingBillPaymentsAddGlobals$outboundSchema` instead. */
  export const outboundSchema = AccountingBillPaymentsAddGlobals$outboundSchema;
  /** @deprecated use `AccountingBillPaymentsAddGlobals$Outbound` instead. */
  export type Outbound = AccountingBillPaymentsAddGlobals$Outbound;
}

export function accountingBillPaymentsAddGlobalsToJSON(
  accountingBillPaymentsAddGlobals: AccountingBillPaymentsAddGlobals,
): string {
  return JSON.stringify(
    AccountingBillPaymentsAddGlobals$outboundSchema.parse(
      accountingBillPaymentsAddGlobals,
    ),
  );
}

export function accountingBillPaymentsAddGlobalsFromJSON(
  jsonString: string,
): SafeParseResult<AccountingBillPaymentsAddGlobals, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => AccountingBillPaymentsAddGlobals$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AccountingBillPaymentsAddGlobals' from JSON`,
  );
}

/** @internal */
export const AccountingBillPaymentsAddRequest$inboundSchema: z.ZodType<
  AccountingBillPaymentsAddRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  raw: z.boolean().default(false),
  consumerId: z.string().optional(),
  appId: z.string().optional(),
  serviceId: z.string().optional(),
  BillPayment: components.BillPaymentInput$inboundSchema,
}).transform((v) => {
  return remap$(v, {
    "BillPayment": "billPayment",
  });
});

/** @internal */
export type AccountingBillPaymentsAddRequest$Outbound = {
  raw: boolean;
  consumerId?: string | undefined;
  appId?: string | undefined;
  serviceId?: string | undefined;
  BillPayment: components.BillPaymentInput$Outbound;
};

/** @internal */
export const AccountingBillPaymentsAddRequest$outboundSchema: z.ZodType<
  AccountingBillPaymentsAddRequest$Outbound,
  z.ZodTypeDef,
  AccountingBillPaymentsAddRequest
> = z.object({
  raw: z.boolean().default(false),
  consumerId: z.string().optional(),
  appId: z.string().optional(),
  serviceId: z.string().optional(),
  billPayment: components.BillPaymentInput$outboundSchema,
}).transform((v) => {
  return remap$(v, {
    billPayment: "BillPayment",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AccountingBillPaymentsAddRequest$ {
  /** @deprecated use `AccountingBillPaymentsAddRequest$inboundSchema` instead. */
  export const inboundSchema = AccountingBillPaymentsAddRequest$inboundSchema;
  /** @deprecated use `AccountingBillPaymentsAddRequest$outboundSchema` instead. */
  export const outboundSchema = AccountingBillPaymentsAddRequest$outboundSchema;
  /** @deprecated use `AccountingBillPaymentsAddRequest$Outbound` instead. */
  export type Outbound = AccountingBillPaymentsAddRequest$Outbound;
}

export function accountingBillPaymentsAddRequestToJSON(
  accountingBillPaymentsAddRequest: AccountingBillPaymentsAddRequest,
): string {
  return JSON.stringify(
    AccountingBillPaymentsAddRequest$outboundSchema.parse(
      accountingBillPaymentsAddRequest,
    ),
  );
}

export function accountingBillPaymentsAddRequestFromJSON(
  jsonString: string,
): SafeParseResult<AccountingBillPaymentsAddRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => AccountingBillPaymentsAddRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AccountingBillPaymentsAddRequest' from JSON`,
  );
}

/** @internal */
export const AccountingBillPaymentsAddResponse$inboundSchema: z.ZodType<
  AccountingBillPaymentsAddResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  HttpMeta: components.HTTPMetadata$inboundSchema,
  CreateBillPaymentResponse: components.CreateBillPaymentResponse$inboundSchema
    .optional(),
  UnexpectedErrorResponse: components.UnexpectedErrorResponse$inboundSchema
    .optional(),
}).transform((v) => {
  return remap$(v, {
    "HttpMeta": "httpMeta",
    "CreateBillPaymentResponse": "createBillPaymentResponse",
    "UnexpectedErrorResponse": "unexpectedErrorResponse",
  });
});

/** @internal */
export type AccountingBillPaymentsAddResponse$Outbound = {
  HttpMeta: components.HTTPMetadata$Outbound;
  CreateBillPaymentResponse?:
    | components.CreateBillPaymentResponse$Outbound
    | undefined;
  UnexpectedErrorResponse?:
    | components.UnexpectedErrorResponse$Outbound
    | undefined;
};

/** @internal */
export const AccountingBillPaymentsAddResponse$outboundSchema: z.ZodType<
  AccountingBillPaymentsAddResponse$Outbound,
  z.ZodTypeDef,
  AccountingBillPaymentsAddResponse
> = z.object({
  httpMeta: components.HTTPMetadata$outboundSchema,
  createBillPaymentResponse: components.CreateBillPaymentResponse$outboundSchema
    .optional(),
  unexpectedErrorResponse: components.UnexpectedErrorResponse$outboundSchema
    .optional(),
}).transform((v) => {
  return remap$(v, {
    httpMeta: "HttpMeta",
    createBillPaymentResponse: "CreateBillPaymentResponse",
    unexpectedErrorResponse: "UnexpectedErrorResponse",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AccountingBillPaymentsAddResponse$ {
  /** @deprecated use `AccountingBillPaymentsAddResponse$inboundSchema` instead. */
  export const inboundSchema = AccountingBillPaymentsAddResponse$inboundSchema;
  /** @deprecated use `AccountingBillPaymentsAddResponse$outboundSchema` instead. */
  export const outboundSchema =
    AccountingBillPaymentsAddResponse$outboundSchema;
  /** @deprecated use `AccountingBillPaymentsAddResponse$Outbound` instead. */
  export type Outbound = AccountingBillPaymentsAddResponse$Outbound;
}

export function accountingBillPaymentsAddResponseToJSON(
  accountingBillPaymentsAddResponse: AccountingBillPaymentsAddResponse,
): string {
  return JSON.stringify(
    AccountingBillPaymentsAddResponse$outboundSchema.parse(
      accountingBillPaymentsAddResponse,
    ),
  );
}

export function accountingBillPaymentsAddResponseFromJSON(
  jsonString: string,
): SafeParseResult<AccountingBillPaymentsAddResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => AccountingBillPaymentsAddResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AccountingBillPaymentsAddResponse' from JSON`,
  );
}

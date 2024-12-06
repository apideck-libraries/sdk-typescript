/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type AccountingPaymentsAddGlobals = {
  /**
   * ID of the consumer which you want to get or push data from
   */
  consumerId?: string | undefined;
  /**
   * The ID of your Unify application
   */
  appId?: string | undefined;
};

export type AccountingPaymentsAddRequest = {
  /**
   * Include raw response. Mostly used for debugging purposes
   */
  raw?: boolean | undefined;
  /**
   * Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API.
   */
  serviceId?: string | undefined;
  payment: components.PaymentInput;
};

export type AccountingPaymentsAddResponse = {
  httpMeta: components.HTTPMetadata;
  /**
   * Payment created
   */
  createPaymentResponse?: components.CreatePaymentResponse | undefined;
  /**
   * Unexpected error
   */
  unexpectedErrorResponse?: components.UnexpectedErrorResponse | undefined;
};

/** @internal */
export const AccountingPaymentsAddGlobals$inboundSchema: z.ZodType<
  AccountingPaymentsAddGlobals,
  z.ZodTypeDef,
  unknown
> = z.object({
  consumerId: z.string().optional(),
  appId: z.string().optional(),
});

/** @internal */
export type AccountingPaymentsAddGlobals$Outbound = {
  consumerId?: string | undefined;
  appId?: string | undefined;
};

/** @internal */
export const AccountingPaymentsAddGlobals$outboundSchema: z.ZodType<
  AccountingPaymentsAddGlobals$Outbound,
  z.ZodTypeDef,
  AccountingPaymentsAddGlobals
> = z.object({
  consumerId: z.string().optional(),
  appId: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AccountingPaymentsAddGlobals$ {
  /** @deprecated use `AccountingPaymentsAddGlobals$inboundSchema` instead. */
  export const inboundSchema = AccountingPaymentsAddGlobals$inboundSchema;
  /** @deprecated use `AccountingPaymentsAddGlobals$outboundSchema` instead. */
  export const outboundSchema = AccountingPaymentsAddGlobals$outboundSchema;
  /** @deprecated use `AccountingPaymentsAddGlobals$Outbound` instead. */
  export type Outbound = AccountingPaymentsAddGlobals$Outbound;
}

export function accountingPaymentsAddGlobalsToJSON(
  accountingPaymentsAddGlobals: AccountingPaymentsAddGlobals,
): string {
  return JSON.stringify(
    AccountingPaymentsAddGlobals$outboundSchema.parse(
      accountingPaymentsAddGlobals,
    ),
  );
}

export function accountingPaymentsAddGlobalsFromJSON(
  jsonString: string,
): SafeParseResult<AccountingPaymentsAddGlobals, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => AccountingPaymentsAddGlobals$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AccountingPaymentsAddGlobals' from JSON`,
  );
}

/** @internal */
export const AccountingPaymentsAddRequest$inboundSchema: z.ZodType<
  AccountingPaymentsAddRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  raw: z.boolean().default(false),
  serviceId: z.string().optional(),
  Payment: components.PaymentInput$inboundSchema,
}).transform((v) => {
  return remap$(v, {
    "Payment": "payment",
  });
});

/** @internal */
export type AccountingPaymentsAddRequest$Outbound = {
  raw: boolean;
  serviceId?: string | undefined;
  Payment: components.PaymentInput$Outbound;
};

/** @internal */
export const AccountingPaymentsAddRequest$outboundSchema: z.ZodType<
  AccountingPaymentsAddRequest$Outbound,
  z.ZodTypeDef,
  AccountingPaymentsAddRequest
> = z.object({
  raw: z.boolean().default(false),
  serviceId: z.string().optional(),
  payment: components.PaymentInput$outboundSchema,
}).transform((v) => {
  return remap$(v, {
    payment: "Payment",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AccountingPaymentsAddRequest$ {
  /** @deprecated use `AccountingPaymentsAddRequest$inboundSchema` instead. */
  export const inboundSchema = AccountingPaymentsAddRequest$inboundSchema;
  /** @deprecated use `AccountingPaymentsAddRequest$outboundSchema` instead. */
  export const outboundSchema = AccountingPaymentsAddRequest$outboundSchema;
  /** @deprecated use `AccountingPaymentsAddRequest$Outbound` instead. */
  export type Outbound = AccountingPaymentsAddRequest$Outbound;
}

export function accountingPaymentsAddRequestToJSON(
  accountingPaymentsAddRequest: AccountingPaymentsAddRequest,
): string {
  return JSON.stringify(
    AccountingPaymentsAddRequest$outboundSchema.parse(
      accountingPaymentsAddRequest,
    ),
  );
}

export function accountingPaymentsAddRequestFromJSON(
  jsonString: string,
): SafeParseResult<AccountingPaymentsAddRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => AccountingPaymentsAddRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AccountingPaymentsAddRequest' from JSON`,
  );
}

/** @internal */
export const AccountingPaymentsAddResponse$inboundSchema: z.ZodType<
  AccountingPaymentsAddResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  HttpMeta: components.HTTPMetadata$inboundSchema,
  CreatePaymentResponse: components.CreatePaymentResponse$inboundSchema
    .optional(),
  UnexpectedErrorResponse: components.UnexpectedErrorResponse$inboundSchema
    .optional(),
}).transform((v) => {
  return remap$(v, {
    "HttpMeta": "httpMeta",
    "CreatePaymentResponse": "createPaymentResponse",
    "UnexpectedErrorResponse": "unexpectedErrorResponse",
  });
});

/** @internal */
export type AccountingPaymentsAddResponse$Outbound = {
  HttpMeta: components.HTTPMetadata$Outbound;
  CreatePaymentResponse?: components.CreatePaymentResponse$Outbound | undefined;
  UnexpectedErrorResponse?:
    | components.UnexpectedErrorResponse$Outbound
    | undefined;
};

/** @internal */
export const AccountingPaymentsAddResponse$outboundSchema: z.ZodType<
  AccountingPaymentsAddResponse$Outbound,
  z.ZodTypeDef,
  AccountingPaymentsAddResponse
> = z.object({
  httpMeta: components.HTTPMetadata$outboundSchema,
  createPaymentResponse: components.CreatePaymentResponse$outboundSchema
    .optional(),
  unexpectedErrorResponse: components.UnexpectedErrorResponse$outboundSchema
    .optional(),
}).transform((v) => {
  return remap$(v, {
    httpMeta: "HttpMeta",
    createPaymentResponse: "CreatePaymentResponse",
    unexpectedErrorResponse: "UnexpectedErrorResponse",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AccountingPaymentsAddResponse$ {
  /** @deprecated use `AccountingPaymentsAddResponse$inboundSchema` instead. */
  export const inboundSchema = AccountingPaymentsAddResponse$inboundSchema;
  /** @deprecated use `AccountingPaymentsAddResponse$outboundSchema` instead. */
  export const outboundSchema = AccountingPaymentsAddResponse$outboundSchema;
  /** @deprecated use `AccountingPaymentsAddResponse$Outbound` instead. */
  export type Outbound = AccountingPaymentsAddResponse$Outbound;
}

export function accountingPaymentsAddResponseToJSON(
  accountingPaymentsAddResponse: AccountingPaymentsAddResponse,
): string {
  return JSON.stringify(
    AccountingPaymentsAddResponse$outboundSchema.parse(
      accountingPaymentsAddResponse,
    ),
  );
}

export function accountingPaymentsAddResponseFromJSON(
  jsonString: string,
): SafeParseResult<AccountingPaymentsAddResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => AccountingPaymentsAddResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AccountingPaymentsAddResponse' from JSON`,
  );
}

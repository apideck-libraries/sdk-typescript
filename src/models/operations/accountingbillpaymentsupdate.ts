/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";

export type AccountingBillPaymentsUpdateGlobals = {
  /**
   * ID of the consumer which you want to get or push data from
   */
  customerId?: string | undefined;
  /**
   * The ID of your Unify application
   */
  appId?: string | undefined;
};

export type AccountingBillPaymentsUpdateRequest = {
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
  billPayment: components.BillPaymentInput;
};

export type AccountingBillPaymentsUpdateResponse =
  | components.UpdateBillPaymentResponse
  | components.UnexpectedErrorResponse;

/** @internal */
export const AccountingBillPaymentsUpdateGlobals$inboundSchema: z.ZodType<
  AccountingBillPaymentsUpdateGlobals,
  z.ZodTypeDef,
  unknown
> = z.object({
  customerId: z.string().optional(),
  appId: z.string().optional(),
});

/** @internal */
export type AccountingBillPaymentsUpdateGlobals$Outbound = {
  customerId?: string | undefined;
  appId?: string | undefined;
};

/** @internal */
export const AccountingBillPaymentsUpdateGlobals$outboundSchema: z.ZodType<
  AccountingBillPaymentsUpdateGlobals$Outbound,
  z.ZodTypeDef,
  AccountingBillPaymentsUpdateGlobals
> = z.object({
  customerId: z.string().optional(),
  appId: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AccountingBillPaymentsUpdateGlobals$ {
  /** @deprecated use `AccountingBillPaymentsUpdateGlobals$inboundSchema` instead. */
  export const inboundSchema =
    AccountingBillPaymentsUpdateGlobals$inboundSchema;
  /** @deprecated use `AccountingBillPaymentsUpdateGlobals$outboundSchema` instead. */
  export const outboundSchema =
    AccountingBillPaymentsUpdateGlobals$outboundSchema;
  /** @deprecated use `AccountingBillPaymentsUpdateGlobals$Outbound` instead. */
  export type Outbound = AccountingBillPaymentsUpdateGlobals$Outbound;
}

/** @internal */
export const AccountingBillPaymentsUpdateRequest$inboundSchema: z.ZodType<
  AccountingBillPaymentsUpdateRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
  serviceId: z.string().optional(),
  raw: z.boolean().default(false),
  BillPayment: components.BillPaymentInput$inboundSchema,
}).transform((v) => {
  return remap$(v, {
    "BillPayment": "billPayment",
  });
});

/** @internal */
export type AccountingBillPaymentsUpdateRequest$Outbound = {
  id: string;
  serviceId?: string | undefined;
  raw: boolean;
  BillPayment: components.BillPaymentInput$Outbound;
};

/** @internal */
export const AccountingBillPaymentsUpdateRequest$outboundSchema: z.ZodType<
  AccountingBillPaymentsUpdateRequest$Outbound,
  z.ZodTypeDef,
  AccountingBillPaymentsUpdateRequest
> = z.object({
  id: z.string(),
  serviceId: z.string().optional(),
  raw: z.boolean().default(false),
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
export namespace AccountingBillPaymentsUpdateRequest$ {
  /** @deprecated use `AccountingBillPaymentsUpdateRequest$inboundSchema` instead. */
  export const inboundSchema =
    AccountingBillPaymentsUpdateRequest$inboundSchema;
  /** @deprecated use `AccountingBillPaymentsUpdateRequest$outboundSchema` instead. */
  export const outboundSchema =
    AccountingBillPaymentsUpdateRequest$outboundSchema;
  /** @deprecated use `AccountingBillPaymentsUpdateRequest$Outbound` instead. */
  export type Outbound = AccountingBillPaymentsUpdateRequest$Outbound;
}

/** @internal */
export const AccountingBillPaymentsUpdateResponse$inboundSchema: z.ZodType<
  AccountingBillPaymentsUpdateResponse,
  z.ZodTypeDef,
  unknown
> = z.union([
  components.UpdateBillPaymentResponse$inboundSchema,
  components.UnexpectedErrorResponse$inboundSchema,
]);

/** @internal */
export type AccountingBillPaymentsUpdateResponse$Outbound =
  | components.UpdateBillPaymentResponse$Outbound
  | components.UnexpectedErrorResponse$Outbound;

/** @internal */
export const AccountingBillPaymentsUpdateResponse$outboundSchema: z.ZodType<
  AccountingBillPaymentsUpdateResponse$Outbound,
  z.ZodTypeDef,
  AccountingBillPaymentsUpdateResponse
> = z.union([
  components.UpdateBillPaymentResponse$outboundSchema,
  components.UnexpectedErrorResponse$outboundSchema,
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AccountingBillPaymentsUpdateResponse$ {
  /** @deprecated use `AccountingBillPaymentsUpdateResponse$inboundSchema` instead. */
  export const inboundSchema =
    AccountingBillPaymentsUpdateResponse$inboundSchema;
  /** @deprecated use `AccountingBillPaymentsUpdateResponse$outboundSchema` instead. */
  export const outboundSchema =
    AccountingBillPaymentsUpdateResponse$outboundSchema;
  /** @deprecated use `AccountingBillPaymentsUpdateResponse$Outbound` instead. */
  export type Outbound = AccountingBillPaymentsUpdateResponse$Outbound;
}

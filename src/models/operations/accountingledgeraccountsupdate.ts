/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";

export type AccountingLedgerAccountsUpdateGlobals = {
  /**
   * ID of the consumer which you want to get or push data from
   */
  customerId?: string | undefined;
  /**
   * The ID of your Unify application
   */
  appId?: string | undefined;
};

export type AccountingLedgerAccountsUpdateRequest = {
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
  ledgerAccount: components.LedgerAccountInput;
};

export type AccountingLedgerAccountsUpdateResponse =
  | components.UpdateLedgerAccountResponse
  | components.UnexpectedErrorResponse;

/** @internal */
export const AccountingLedgerAccountsUpdateGlobals$inboundSchema: z.ZodType<
  AccountingLedgerAccountsUpdateGlobals,
  z.ZodTypeDef,
  unknown
> = z.object({
  customerId: z.string().optional(),
  appId: z.string().optional(),
});

/** @internal */
export type AccountingLedgerAccountsUpdateGlobals$Outbound = {
  customerId?: string | undefined;
  appId?: string | undefined;
};

/** @internal */
export const AccountingLedgerAccountsUpdateGlobals$outboundSchema: z.ZodType<
  AccountingLedgerAccountsUpdateGlobals$Outbound,
  z.ZodTypeDef,
  AccountingLedgerAccountsUpdateGlobals
> = z.object({
  customerId: z.string().optional(),
  appId: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AccountingLedgerAccountsUpdateGlobals$ {
  /** @deprecated use `AccountingLedgerAccountsUpdateGlobals$inboundSchema` instead. */
  export const inboundSchema =
    AccountingLedgerAccountsUpdateGlobals$inboundSchema;
  /** @deprecated use `AccountingLedgerAccountsUpdateGlobals$outboundSchema` instead. */
  export const outboundSchema =
    AccountingLedgerAccountsUpdateGlobals$outboundSchema;
  /** @deprecated use `AccountingLedgerAccountsUpdateGlobals$Outbound` instead. */
  export type Outbound = AccountingLedgerAccountsUpdateGlobals$Outbound;
}

/** @internal */
export const AccountingLedgerAccountsUpdateRequest$inboundSchema: z.ZodType<
  AccountingLedgerAccountsUpdateRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
  serviceId: z.string().optional(),
  raw: z.boolean().default(false),
  LedgerAccount: components.LedgerAccountInput$inboundSchema,
}).transform((v) => {
  return remap$(v, {
    "LedgerAccount": "ledgerAccount",
  });
});

/** @internal */
export type AccountingLedgerAccountsUpdateRequest$Outbound = {
  id: string;
  serviceId?: string | undefined;
  raw: boolean;
  LedgerAccount: components.LedgerAccountInput$Outbound;
};

/** @internal */
export const AccountingLedgerAccountsUpdateRequest$outboundSchema: z.ZodType<
  AccountingLedgerAccountsUpdateRequest$Outbound,
  z.ZodTypeDef,
  AccountingLedgerAccountsUpdateRequest
> = z.object({
  id: z.string(),
  serviceId: z.string().optional(),
  raw: z.boolean().default(false),
  ledgerAccount: components.LedgerAccountInput$outboundSchema,
}).transform((v) => {
  return remap$(v, {
    ledgerAccount: "LedgerAccount",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AccountingLedgerAccountsUpdateRequest$ {
  /** @deprecated use `AccountingLedgerAccountsUpdateRequest$inboundSchema` instead. */
  export const inboundSchema =
    AccountingLedgerAccountsUpdateRequest$inboundSchema;
  /** @deprecated use `AccountingLedgerAccountsUpdateRequest$outboundSchema` instead. */
  export const outboundSchema =
    AccountingLedgerAccountsUpdateRequest$outboundSchema;
  /** @deprecated use `AccountingLedgerAccountsUpdateRequest$Outbound` instead. */
  export type Outbound = AccountingLedgerAccountsUpdateRequest$Outbound;
}

/** @internal */
export const AccountingLedgerAccountsUpdateResponse$inboundSchema: z.ZodType<
  AccountingLedgerAccountsUpdateResponse,
  z.ZodTypeDef,
  unknown
> = z.union([
  components.UpdateLedgerAccountResponse$inboundSchema,
  components.UnexpectedErrorResponse$inboundSchema,
]);

/** @internal */
export type AccountingLedgerAccountsUpdateResponse$Outbound =
  | components.UpdateLedgerAccountResponse$Outbound
  | components.UnexpectedErrorResponse$Outbound;

/** @internal */
export const AccountingLedgerAccountsUpdateResponse$outboundSchema: z.ZodType<
  AccountingLedgerAccountsUpdateResponse$Outbound,
  z.ZodTypeDef,
  AccountingLedgerAccountsUpdateResponse
> = z.union([
  components.UpdateLedgerAccountResponse$outboundSchema,
  components.UnexpectedErrorResponse$outboundSchema,
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AccountingLedgerAccountsUpdateResponse$ {
  /** @deprecated use `AccountingLedgerAccountsUpdateResponse$inboundSchema` instead. */
  export const inboundSchema =
    AccountingLedgerAccountsUpdateResponse$inboundSchema;
  /** @deprecated use `AccountingLedgerAccountsUpdateResponse$outboundSchema` instead. */
  export const outboundSchema =
    AccountingLedgerAccountsUpdateResponse$outboundSchema;
  /** @deprecated use `AccountingLedgerAccountsUpdateResponse$Outbound` instead. */
  export type Outbound = AccountingLedgerAccountsUpdateResponse$Outbound;
}

/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import * as components from "../components/index.js";

export type AccountingCreditNotesDeleteGlobals = {
  /**
   * ID of the consumer which you want to get or push data from
   */
  customerId?: string | undefined;
  /**
   * The ID of your Unify application
   */
  appId?: string | undefined;
};

export type AccountingCreditNotesDeleteRequest = {
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
};

export type AccountingCreditNotesDeleteResponse =
  | components.DeleteCreditNoteResponse
  | components.UnexpectedErrorResponse;

/** @internal */
export const AccountingCreditNotesDeleteGlobals$inboundSchema: z.ZodType<
  AccountingCreditNotesDeleteGlobals,
  z.ZodTypeDef,
  unknown
> = z.object({
  customerId: z.string().optional(),
  appId: z.string().optional(),
});

/** @internal */
export type AccountingCreditNotesDeleteGlobals$Outbound = {
  customerId?: string | undefined;
  appId?: string | undefined;
};

/** @internal */
export const AccountingCreditNotesDeleteGlobals$outboundSchema: z.ZodType<
  AccountingCreditNotesDeleteGlobals$Outbound,
  z.ZodTypeDef,
  AccountingCreditNotesDeleteGlobals
> = z.object({
  customerId: z.string().optional(),
  appId: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AccountingCreditNotesDeleteGlobals$ {
  /** @deprecated use `AccountingCreditNotesDeleteGlobals$inboundSchema` instead. */
  export const inboundSchema = AccountingCreditNotesDeleteGlobals$inboundSchema;
  /** @deprecated use `AccountingCreditNotesDeleteGlobals$outboundSchema` instead. */
  export const outboundSchema =
    AccountingCreditNotesDeleteGlobals$outboundSchema;
  /** @deprecated use `AccountingCreditNotesDeleteGlobals$Outbound` instead. */
  export type Outbound = AccountingCreditNotesDeleteGlobals$Outbound;
}

/** @internal */
export const AccountingCreditNotesDeleteRequest$inboundSchema: z.ZodType<
  AccountingCreditNotesDeleteRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
  serviceId: z.string().optional(),
  raw: z.boolean().default(false),
});

/** @internal */
export type AccountingCreditNotesDeleteRequest$Outbound = {
  id: string;
  serviceId?: string | undefined;
  raw: boolean;
};

/** @internal */
export const AccountingCreditNotesDeleteRequest$outboundSchema: z.ZodType<
  AccountingCreditNotesDeleteRequest$Outbound,
  z.ZodTypeDef,
  AccountingCreditNotesDeleteRequest
> = z.object({
  id: z.string(),
  serviceId: z.string().optional(),
  raw: z.boolean().default(false),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AccountingCreditNotesDeleteRequest$ {
  /** @deprecated use `AccountingCreditNotesDeleteRequest$inboundSchema` instead. */
  export const inboundSchema = AccountingCreditNotesDeleteRequest$inboundSchema;
  /** @deprecated use `AccountingCreditNotesDeleteRequest$outboundSchema` instead. */
  export const outboundSchema =
    AccountingCreditNotesDeleteRequest$outboundSchema;
  /** @deprecated use `AccountingCreditNotesDeleteRequest$Outbound` instead. */
  export type Outbound = AccountingCreditNotesDeleteRequest$Outbound;
}

/** @internal */
export const AccountingCreditNotesDeleteResponse$inboundSchema: z.ZodType<
  AccountingCreditNotesDeleteResponse,
  z.ZodTypeDef,
  unknown
> = z.union([
  components.DeleteCreditNoteResponse$inboundSchema,
  components.UnexpectedErrorResponse$inboundSchema,
]);

/** @internal */
export type AccountingCreditNotesDeleteResponse$Outbound =
  | components.DeleteCreditNoteResponse$Outbound
  | components.UnexpectedErrorResponse$Outbound;

/** @internal */
export const AccountingCreditNotesDeleteResponse$outboundSchema: z.ZodType<
  AccountingCreditNotesDeleteResponse$Outbound,
  z.ZodTypeDef,
  AccountingCreditNotesDeleteResponse
> = z.union([
  components.DeleteCreditNoteResponse$outboundSchema,
  components.UnexpectedErrorResponse$outboundSchema,
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AccountingCreditNotesDeleteResponse$ {
  /** @deprecated use `AccountingCreditNotesDeleteResponse$inboundSchema` instead. */
  export const inboundSchema =
    AccountingCreditNotesDeleteResponse$inboundSchema;
  /** @deprecated use `AccountingCreditNotesDeleteResponse$outboundSchema` instead. */
  export const outboundSchema =
    AccountingCreditNotesDeleteResponse$outboundSchema;
  /** @deprecated use `AccountingCreditNotesDeleteResponse$Outbound` instead. */
  export type Outbound = AccountingCreditNotesDeleteResponse$Outbound;
}

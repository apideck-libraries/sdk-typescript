/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import {
  InvoiceResponse,
  InvoiceResponse$inboundSchema,
  InvoiceResponse$Outbound,
  InvoiceResponse$outboundSchema,
} from "./invoiceresponse.js";

/**
 * Invoice created
 */
export type CreateInvoiceResponse = {
  /**
   * HTTP Response Status Code
   */
  statusCode: number;
  /**
   * HTTP Response Status
   */
  status: string;
  /**
   * Apideck ID of service provider
   */
  service: string;
  /**
   * Unified API resource name
   */
  resource: string;
  /**
   * Operation performed
   */
  operation: string;
  data: InvoiceResponse;
};

/** @internal */
export const CreateInvoiceResponse$inboundSchema: z.ZodType<
  CreateInvoiceResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  status_code: z.number().int(),
  status: z.string(),
  service: z.string(),
  resource: z.string(),
  operation: z.string(),
  data: InvoiceResponse$inboundSchema,
}).transform((v) => {
  return remap$(v, {
    "status_code": "statusCode",
  });
});

/** @internal */
export type CreateInvoiceResponse$Outbound = {
  status_code: number;
  status: string;
  service: string;
  resource: string;
  operation: string;
  data: InvoiceResponse$Outbound;
};

/** @internal */
export const CreateInvoiceResponse$outboundSchema: z.ZodType<
  CreateInvoiceResponse$Outbound,
  z.ZodTypeDef,
  CreateInvoiceResponse
> = z.object({
  statusCode: z.number().int(),
  status: z.string(),
  service: z.string(),
  resource: z.string(),
  operation: z.string(),
  data: InvoiceResponse$outboundSchema,
}).transform((v) => {
  return remap$(v, {
    statusCode: "status_code",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateInvoiceResponse$ {
  /** @deprecated use `CreateInvoiceResponse$inboundSchema` instead. */
  export const inboundSchema = CreateInvoiceResponse$inboundSchema;
  /** @deprecated use `CreateInvoiceResponse$outboundSchema` instead. */
  export const outboundSchema = CreateInvoiceResponse$outboundSchema;
  /** @deprecated use `CreateInvoiceResponse$Outbound` instead. */
  export type Outbound = CreateInvoiceResponse$Outbound;
}

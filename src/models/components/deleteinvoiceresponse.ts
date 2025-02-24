/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  InvoiceResponse,
  InvoiceResponse$inboundSchema,
  InvoiceResponse$Outbound,
  InvoiceResponse$outboundSchema,
} from "./invoiceresponse.js";

/**
 * Invoice deleted
 */
export type DeleteInvoiceResponse = {
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
  /**
   * Raw response from the integration when raw=true query param is provided
   */
  raw?: { [k: string]: any } | null | undefined;
};

/** @internal */
export const DeleteInvoiceResponse$inboundSchema: z.ZodType<
  DeleteInvoiceResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  status_code: z.number().int(),
  status: z.string(),
  service: z.string(),
  resource: z.string(),
  operation: z.string(),
  data: InvoiceResponse$inboundSchema,
  _raw: z.nullable(z.record(z.any())).optional(),
}).transform((v) => {
  return remap$(v, {
    "status_code": "statusCode",
    "_raw": "raw",
  });
});

/** @internal */
export type DeleteInvoiceResponse$Outbound = {
  status_code: number;
  status: string;
  service: string;
  resource: string;
  operation: string;
  data: InvoiceResponse$Outbound;
  _raw?: { [k: string]: any } | null | undefined;
};

/** @internal */
export const DeleteInvoiceResponse$outboundSchema: z.ZodType<
  DeleteInvoiceResponse$Outbound,
  z.ZodTypeDef,
  DeleteInvoiceResponse
> = z.object({
  statusCode: z.number().int(),
  status: z.string(),
  service: z.string(),
  resource: z.string(),
  operation: z.string(),
  data: InvoiceResponse$outboundSchema,
  raw: z.nullable(z.record(z.any())).optional(),
}).transform((v) => {
  return remap$(v, {
    statusCode: "status_code",
    raw: "_raw",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DeleteInvoiceResponse$ {
  /** @deprecated use `DeleteInvoiceResponse$inboundSchema` instead. */
  export const inboundSchema = DeleteInvoiceResponse$inboundSchema;
  /** @deprecated use `DeleteInvoiceResponse$outboundSchema` instead. */
  export const outboundSchema = DeleteInvoiceResponse$outboundSchema;
  /** @deprecated use `DeleteInvoiceResponse$Outbound` instead. */
  export type Outbound = DeleteInvoiceResponse$Outbound;
}

export function deleteInvoiceResponseToJSON(
  deleteInvoiceResponse: DeleteInvoiceResponse,
): string {
  return JSON.stringify(
    DeleteInvoiceResponse$outboundSchema.parse(deleteInvoiceResponse),
  );
}

export function deleteInvoiceResponseFromJSON(
  jsonString: string,
): SafeParseResult<DeleteInvoiceResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => DeleteInvoiceResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'DeleteInvoiceResponse' from JSON`,
  );
}

/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  LedgerAccount,
  LedgerAccount$inboundSchema,
  LedgerAccount$Outbound,
  LedgerAccount$outboundSchema,
} from "./ledgeraccountinput.js";
import {
  Links,
  Links$inboundSchema,
  Links$Outbound,
  Links$outboundSchema,
} from "./links.js";
import {
  Meta,
  Meta$inboundSchema,
  Meta$Outbound,
  Meta$outboundSchema,
} from "./meta.js";

/**
 * LedgerAccounts
 */
export type GetLedgerAccountsResponse = {
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
  data: Array<LedgerAccount>;
  /**
   * Response metadata
   */
  meta?: Meta | undefined;
  /**
   * Links to navigate to previous or next pages through the API
   */
  links?: Links | undefined;
  /**
   * Raw response from the integration when raw=true query param is provided
   */
  raw?: { [k: string]: any } | null | undefined;
};

/** @internal */
export const GetLedgerAccountsResponse$inboundSchema: z.ZodType<
  GetLedgerAccountsResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  status_code: z.number().int(),
  status: z.string(),
  service: z.string(),
  resource: z.string(),
  operation: z.string(),
  data: z.array(LedgerAccount$inboundSchema),
  meta: Meta$inboundSchema.optional(),
  links: Links$inboundSchema.optional(),
  _raw: z.nullable(z.record(z.any())).optional(),
}).transform((v) => {
  return remap$(v, {
    "status_code": "statusCode",
    "_raw": "raw",
  });
});

/** @internal */
export type GetLedgerAccountsResponse$Outbound = {
  status_code: number;
  status: string;
  service: string;
  resource: string;
  operation: string;
  data: Array<LedgerAccount$Outbound>;
  meta?: Meta$Outbound | undefined;
  links?: Links$Outbound | undefined;
  _raw?: { [k: string]: any } | null | undefined;
};

/** @internal */
export const GetLedgerAccountsResponse$outboundSchema: z.ZodType<
  GetLedgerAccountsResponse$Outbound,
  z.ZodTypeDef,
  GetLedgerAccountsResponse
> = z.object({
  statusCode: z.number().int(),
  status: z.string(),
  service: z.string(),
  resource: z.string(),
  operation: z.string(),
  data: z.array(LedgerAccount$outboundSchema),
  meta: Meta$outboundSchema.optional(),
  links: Links$outboundSchema.optional(),
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
export namespace GetLedgerAccountsResponse$ {
  /** @deprecated use `GetLedgerAccountsResponse$inboundSchema` instead. */
  export const inboundSchema = GetLedgerAccountsResponse$inboundSchema;
  /** @deprecated use `GetLedgerAccountsResponse$outboundSchema` instead. */
  export const outboundSchema = GetLedgerAccountsResponse$outboundSchema;
  /** @deprecated use `GetLedgerAccountsResponse$Outbound` instead. */
  export type Outbound = GetLedgerAccountsResponse$Outbound;
}

export function getLedgerAccountsResponseToJSON(
  getLedgerAccountsResponse: GetLedgerAccountsResponse,
): string {
  return JSON.stringify(
    GetLedgerAccountsResponse$outboundSchema.parse(getLedgerAccountsResponse),
  );
}

export function getLedgerAccountsResponseFromJSON(
  jsonString: string,
): SafeParseResult<GetLedgerAccountsResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetLedgerAccountsResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetLedgerAccountsResponse' from JSON`,
  );
}

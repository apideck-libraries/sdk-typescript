/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  Customer,
  Customer$inboundSchema,
  Customer$Outbound,
  Customer$outboundSchema,
} from "./customerinput.js";
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
 * Customers
 */
export type GetCustomersResponse = {
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
  data: Array<Customer>;
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
export const GetCustomersResponse$inboundSchema: z.ZodType<
  GetCustomersResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  status_code: z.number().int(),
  status: z.string(),
  service: z.string(),
  resource: z.string(),
  operation: z.string(),
  data: z.array(Customer$inboundSchema),
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
export type GetCustomersResponse$Outbound = {
  status_code: number;
  status: string;
  service: string;
  resource: string;
  operation: string;
  data: Array<Customer$Outbound>;
  meta?: Meta$Outbound | undefined;
  links?: Links$Outbound | undefined;
  _raw?: { [k: string]: any } | null | undefined;
};

/** @internal */
export const GetCustomersResponse$outboundSchema: z.ZodType<
  GetCustomersResponse$Outbound,
  z.ZodTypeDef,
  GetCustomersResponse
> = z.object({
  statusCode: z.number().int(),
  status: z.string(),
  service: z.string(),
  resource: z.string(),
  operation: z.string(),
  data: z.array(Customer$outboundSchema),
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
export namespace GetCustomersResponse$ {
  /** @deprecated use `GetCustomersResponse$inboundSchema` instead. */
  export const inboundSchema = GetCustomersResponse$inboundSchema;
  /** @deprecated use `GetCustomersResponse$outboundSchema` instead. */
  export const outboundSchema = GetCustomersResponse$outboundSchema;
  /** @deprecated use `GetCustomersResponse$Outbound` instead. */
  export type Outbound = GetCustomersResponse$Outbound;
}

export function getCustomersResponseToJSON(
  getCustomersResponse: GetCustomersResponse,
): string {
  return JSON.stringify(
    GetCustomersResponse$outboundSchema.parse(getCustomersResponse),
  );
}

export function getCustomersResponseFromJSON(
  jsonString: string,
): SafeParseResult<GetCustomersResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetCustomersResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetCustomersResponse' from JSON`,
  );
}

/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  AccountingDepartment,
  AccountingDepartment$inboundSchema,
  AccountingDepartment$Outbound,
  AccountingDepartment$outboundSchema,
} from "./accountingdepartment.js";
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
 * Departments
 */
export type GetAccountingDepartmentsResponse = {
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
  data: Array<AccountingDepartment>;
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
export const GetAccountingDepartmentsResponse$inboundSchema: z.ZodType<
  GetAccountingDepartmentsResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  status_code: z.number().int(),
  status: z.string(),
  service: z.string(),
  resource: z.string(),
  operation: z.string(),
  data: z.array(AccountingDepartment$inboundSchema),
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
export type GetAccountingDepartmentsResponse$Outbound = {
  status_code: number;
  status: string;
  service: string;
  resource: string;
  operation: string;
  data: Array<AccountingDepartment$Outbound>;
  meta?: Meta$Outbound | undefined;
  links?: Links$Outbound | undefined;
  _raw?: { [k: string]: any } | null | undefined;
};

/** @internal */
export const GetAccountingDepartmentsResponse$outboundSchema: z.ZodType<
  GetAccountingDepartmentsResponse$Outbound,
  z.ZodTypeDef,
  GetAccountingDepartmentsResponse
> = z.object({
  statusCode: z.number().int(),
  status: z.string(),
  service: z.string(),
  resource: z.string(),
  operation: z.string(),
  data: z.array(AccountingDepartment$outboundSchema),
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
export namespace GetAccountingDepartmentsResponse$ {
  /** @deprecated use `GetAccountingDepartmentsResponse$inboundSchema` instead. */
  export const inboundSchema = GetAccountingDepartmentsResponse$inboundSchema;
  /** @deprecated use `GetAccountingDepartmentsResponse$outboundSchema` instead. */
  export const outboundSchema = GetAccountingDepartmentsResponse$outboundSchema;
  /** @deprecated use `GetAccountingDepartmentsResponse$Outbound` instead. */
  export type Outbound = GetAccountingDepartmentsResponse$Outbound;
}

export function getAccountingDepartmentsResponseToJSON(
  getAccountingDepartmentsResponse: GetAccountingDepartmentsResponse,
): string {
  return JSON.stringify(
    GetAccountingDepartmentsResponse$outboundSchema.parse(
      getAccountingDepartmentsResponse,
    ),
  );
}

export function getAccountingDepartmentsResponseFromJSON(
  jsonString: string,
): SafeParseResult<GetAccountingDepartmentsResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetAccountingDepartmentsResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetAccountingDepartmentsResponse' from JSON`,
  );
}

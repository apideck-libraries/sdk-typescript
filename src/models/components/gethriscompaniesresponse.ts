/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  HrisCompany,
  HrisCompany$inboundSchema,
  HrisCompany$Outbound,
  HrisCompany$outboundSchema,
} from "./hriscompany.js";
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
 * Companies
 */
export type GetHrisCompaniesResponse = {
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
  data: Array<HrisCompany>;
  /**
   * Response metadata
   */
  meta?: Meta | undefined;
  /**
   * Links to navigate to previous or next pages through the API
   */
  links?: Links | undefined;
};

/** @internal */
export const GetHrisCompaniesResponse$inboundSchema: z.ZodType<
  GetHrisCompaniesResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  status_code: z.number().int(),
  status: z.string(),
  service: z.string(),
  resource: z.string(),
  operation: z.string(),
  data: z.array(HrisCompany$inboundSchema),
  meta: Meta$inboundSchema.optional(),
  links: Links$inboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    "status_code": "statusCode",
  });
});

/** @internal */
export type GetHrisCompaniesResponse$Outbound = {
  status_code: number;
  status: string;
  service: string;
  resource: string;
  operation: string;
  data: Array<HrisCompany$Outbound>;
  meta?: Meta$Outbound | undefined;
  links?: Links$Outbound | undefined;
};

/** @internal */
export const GetHrisCompaniesResponse$outboundSchema: z.ZodType<
  GetHrisCompaniesResponse$Outbound,
  z.ZodTypeDef,
  GetHrisCompaniesResponse
> = z.object({
  statusCode: z.number().int(),
  status: z.string(),
  service: z.string(),
  resource: z.string(),
  operation: z.string(),
  data: z.array(HrisCompany$outboundSchema),
  meta: Meta$outboundSchema.optional(),
  links: Links$outboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    statusCode: "status_code",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetHrisCompaniesResponse$ {
  /** @deprecated use `GetHrisCompaniesResponse$inboundSchema` instead. */
  export const inboundSchema = GetHrisCompaniesResponse$inboundSchema;
  /** @deprecated use `GetHrisCompaniesResponse$outboundSchema` instead. */
  export const outboundSchema = GetHrisCompaniesResponse$outboundSchema;
  /** @deprecated use `GetHrisCompaniesResponse$Outbound` instead. */
  export type Outbound = GetHrisCompaniesResponse$Outbound;
}

export function getHrisCompaniesResponseToJSON(
  getHrisCompaniesResponse: GetHrisCompaniesResponse,
): string {
  return JSON.stringify(
    GetHrisCompaniesResponse$outboundSchema.parse(getHrisCompaniesResponse),
  );
}

export function getHrisCompaniesResponseFromJSON(
  jsonString: string,
): SafeParseResult<GetHrisCompaniesResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetHrisCompaniesResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetHrisCompaniesResponse' from JSON`,
  );
}

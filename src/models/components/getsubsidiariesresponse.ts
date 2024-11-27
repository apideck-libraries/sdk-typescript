/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
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
import {
  Subsidiary,
  Subsidiary$inboundSchema,
  Subsidiary$Outbound,
  Subsidiary$outboundSchema,
} from "./subsidiary.js";

/**
 * Subsidiaries
 */
export type GetSubsidiariesResponse = {
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
  data: Array<Subsidiary>;
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
export const GetSubsidiariesResponse$inboundSchema: z.ZodType<
  GetSubsidiariesResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  status_code: z.number().int(),
  status: z.string(),
  service: z.string(),
  resource: z.string(),
  operation: z.string(),
  data: z.array(Subsidiary$inboundSchema),
  meta: Meta$inboundSchema.optional(),
  links: Links$inboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    "status_code": "statusCode",
  });
});

/** @internal */
export type GetSubsidiariesResponse$Outbound = {
  status_code: number;
  status: string;
  service: string;
  resource: string;
  operation: string;
  data: Array<Subsidiary$Outbound>;
  meta?: Meta$Outbound | undefined;
  links?: Links$Outbound | undefined;
};

/** @internal */
export const GetSubsidiariesResponse$outboundSchema: z.ZodType<
  GetSubsidiariesResponse$Outbound,
  z.ZodTypeDef,
  GetSubsidiariesResponse
> = z.object({
  statusCode: z.number().int(),
  status: z.string(),
  service: z.string(),
  resource: z.string(),
  operation: z.string(),
  data: z.array(Subsidiary$outboundSchema),
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
export namespace GetSubsidiariesResponse$ {
  /** @deprecated use `GetSubsidiariesResponse$inboundSchema` instead. */
  export const inboundSchema = GetSubsidiariesResponse$inboundSchema;
  /** @deprecated use `GetSubsidiariesResponse$outboundSchema` instead. */
  export const outboundSchema = GetSubsidiariesResponse$outboundSchema;
  /** @deprecated use `GetSubsidiariesResponse$Outbound` instead. */
  export type Outbound = GetSubsidiariesResponse$Outbound;
}

export function getSubsidiariesResponseToJSON(
  getSubsidiariesResponse: GetSubsidiariesResponse,
): string {
  return JSON.stringify(
    GetSubsidiariesResponse$outboundSchema.parse(getSubsidiariesResponse),
  );
}

export function getSubsidiariesResponseFromJSON(
  jsonString: string,
): SafeParseResult<GetSubsidiariesResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetSubsidiariesResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetSubsidiariesResponse' from JSON`,
  );
}

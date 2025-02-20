/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  UnifiedId,
  UnifiedId$inboundSchema,
  UnifiedId$Outbound,
  UnifiedId$outboundSchema,
} from "./unifiedid.js";

/**
 * Company created
 */
export type CreateCompanyResponse = {
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
  /**
   * A object containing a unique identifier for the resource that was created, updated, or deleted.
   */
  data: UnifiedId;
};

/** @internal */
export const CreateCompanyResponse$inboundSchema: z.ZodType<
  CreateCompanyResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  status_code: z.number().int(),
  status: z.string(),
  service: z.string(),
  resource: z.string(),
  operation: z.string(),
  data: UnifiedId$inboundSchema,
}).transform((v) => {
  return remap$(v, {
    "status_code": "statusCode",
  });
});

/** @internal */
export type CreateCompanyResponse$Outbound = {
  status_code: number;
  status: string;
  service: string;
  resource: string;
  operation: string;
  data: UnifiedId$Outbound;
};

/** @internal */
export const CreateCompanyResponse$outboundSchema: z.ZodType<
  CreateCompanyResponse$Outbound,
  z.ZodTypeDef,
  CreateCompanyResponse
> = z.object({
  statusCode: z.number().int(),
  status: z.string(),
  service: z.string(),
  resource: z.string(),
  operation: z.string(),
  data: UnifiedId$outboundSchema,
}).transform((v) => {
  return remap$(v, {
    statusCode: "status_code",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateCompanyResponse$ {
  /** @deprecated use `CreateCompanyResponse$inboundSchema` instead. */
  export const inboundSchema = CreateCompanyResponse$inboundSchema;
  /** @deprecated use `CreateCompanyResponse$outboundSchema` instead. */
  export const outboundSchema = CreateCompanyResponse$outboundSchema;
  /** @deprecated use `CreateCompanyResponse$Outbound` instead. */
  export type Outbound = CreateCompanyResponse$Outbound;
}

export function createCompanyResponseToJSON(
  createCompanyResponse: CreateCompanyResponse,
): string {
  return JSON.stringify(
    CreateCompanyResponse$outboundSchema.parse(createCompanyResponse),
  );
}

export function createCompanyResponseFromJSON(
  jsonString: string,
): SafeParseResult<CreateCompanyResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CreateCompanyResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreateCompanyResponse' from JSON`,
  );
}

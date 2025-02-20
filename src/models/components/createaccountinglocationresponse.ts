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
 * Location
 */
export type CreateAccountingLocationResponse = {
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
export const CreateAccountingLocationResponse$inboundSchema: z.ZodType<
  CreateAccountingLocationResponse,
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
export type CreateAccountingLocationResponse$Outbound = {
  status_code: number;
  status: string;
  service: string;
  resource: string;
  operation: string;
  data: UnifiedId$Outbound;
};

/** @internal */
export const CreateAccountingLocationResponse$outboundSchema: z.ZodType<
  CreateAccountingLocationResponse$Outbound,
  z.ZodTypeDef,
  CreateAccountingLocationResponse
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
export namespace CreateAccountingLocationResponse$ {
  /** @deprecated use `CreateAccountingLocationResponse$inboundSchema` instead. */
  export const inboundSchema = CreateAccountingLocationResponse$inboundSchema;
  /** @deprecated use `CreateAccountingLocationResponse$outboundSchema` instead. */
  export const outboundSchema = CreateAccountingLocationResponse$outboundSchema;
  /** @deprecated use `CreateAccountingLocationResponse$Outbound` instead. */
  export type Outbound = CreateAccountingLocationResponse$Outbound;
}

export function createAccountingLocationResponseToJSON(
  createAccountingLocationResponse: CreateAccountingLocationResponse,
): string {
  return JSON.stringify(
    CreateAccountingLocationResponse$outboundSchema.parse(
      createAccountingLocationResponse,
    ),
  );
}

export function createAccountingLocationResponseFromJSON(
  jsonString: string,
): SafeParseResult<CreateAccountingLocationResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CreateAccountingLocationResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreateAccountingLocationResponse' from JSON`,
  );
}

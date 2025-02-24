/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  ConnectionState,
  ConnectionState$inboundSchema,
  ConnectionState$outboundSchema,
} from "./connectionstate.js";

export type ValidateConnectionStateResponseData = {
  /**
   * The unique identifier of the connection.
   */
  id?: string | undefined;
  /**
   * [Connection state flow](#section/Connection-state)
   */
  state?: ConnectionState | undefined;
};

/**
 * Connection access token refreshed
 */
export type ValidateConnectionStateResponse = {
  /**
   * HTTP Response Status Code
   */
  statusCode: number;
  /**
   * HTTP Response Status
   */
  status: string;
  data: ValidateConnectionStateResponseData;
  /**
   * Raw response from the integration when raw=true query param is provided
   */
  raw?: { [k: string]: any } | null | undefined;
};

/** @internal */
export const ValidateConnectionStateResponseData$inboundSchema: z.ZodType<
  ValidateConnectionStateResponseData,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string().optional(),
  state: ConnectionState$inboundSchema.optional(),
});

/** @internal */
export type ValidateConnectionStateResponseData$Outbound = {
  id?: string | undefined;
  state?: string | undefined;
};

/** @internal */
export const ValidateConnectionStateResponseData$outboundSchema: z.ZodType<
  ValidateConnectionStateResponseData$Outbound,
  z.ZodTypeDef,
  ValidateConnectionStateResponseData
> = z.object({
  id: z.string().optional(),
  state: ConnectionState$outboundSchema.optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ValidateConnectionStateResponseData$ {
  /** @deprecated use `ValidateConnectionStateResponseData$inboundSchema` instead. */
  export const inboundSchema =
    ValidateConnectionStateResponseData$inboundSchema;
  /** @deprecated use `ValidateConnectionStateResponseData$outboundSchema` instead. */
  export const outboundSchema =
    ValidateConnectionStateResponseData$outboundSchema;
  /** @deprecated use `ValidateConnectionStateResponseData$Outbound` instead. */
  export type Outbound = ValidateConnectionStateResponseData$Outbound;
}

export function validateConnectionStateResponseDataToJSON(
  validateConnectionStateResponseData: ValidateConnectionStateResponseData,
): string {
  return JSON.stringify(
    ValidateConnectionStateResponseData$outboundSchema.parse(
      validateConnectionStateResponseData,
    ),
  );
}

export function validateConnectionStateResponseDataFromJSON(
  jsonString: string,
): SafeParseResult<ValidateConnectionStateResponseData, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      ValidateConnectionStateResponseData$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ValidateConnectionStateResponseData' from JSON`,
  );
}

/** @internal */
export const ValidateConnectionStateResponse$inboundSchema: z.ZodType<
  ValidateConnectionStateResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  status_code: z.number().int(),
  status: z.string(),
  data: z.lazy(() => ValidateConnectionStateResponseData$inboundSchema),
  _raw: z.nullable(z.record(z.any())).optional(),
}).transform((v) => {
  return remap$(v, {
    "status_code": "statusCode",
    "_raw": "raw",
  });
});

/** @internal */
export type ValidateConnectionStateResponse$Outbound = {
  status_code: number;
  status: string;
  data: ValidateConnectionStateResponseData$Outbound;
  _raw?: { [k: string]: any } | null | undefined;
};

/** @internal */
export const ValidateConnectionStateResponse$outboundSchema: z.ZodType<
  ValidateConnectionStateResponse$Outbound,
  z.ZodTypeDef,
  ValidateConnectionStateResponse
> = z.object({
  statusCode: z.number().int(),
  status: z.string(),
  data: z.lazy(() => ValidateConnectionStateResponseData$outboundSchema),
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
export namespace ValidateConnectionStateResponse$ {
  /** @deprecated use `ValidateConnectionStateResponse$inboundSchema` instead. */
  export const inboundSchema = ValidateConnectionStateResponse$inboundSchema;
  /** @deprecated use `ValidateConnectionStateResponse$outboundSchema` instead. */
  export const outboundSchema = ValidateConnectionStateResponse$outboundSchema;
  /** @deprecated use `ValidateConnectionStateResponse$Outbound` instead. */
  export type Outbound = ValidateConnectionStateResponse$Outbound;
}

export function validateConnectionStateResponseToJSON(
  validateConnectionStateResponse: ValidateConnectionStateResponse,
): string {
  return JSON.stringify(
    ValidateConnectionStateResponse$outboundSchema.parse(
      validateConnectionStateResponse,
    ),
  );
}

export function validateConnectionStateResponseFromJSON(
  jsonString: string,
): SafeParseResult<ValidateConnectionStateResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ValidateConnectionStateResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ValidateConnectionStateResponse' from JSON`,
  );
}

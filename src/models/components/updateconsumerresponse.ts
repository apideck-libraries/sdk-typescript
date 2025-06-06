/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  Consumer,
  Consumer$inboundSchema,
  Consumer$Outbound,
  Consumer$outboundSchema,
} from "./consumer.js";

/**
 * Consumer updated
 */
export type UpdateConsumerResponse = {
  /**
   * HTTP Response Status Code
   */
  statusCode: number;
  /**
   * HTTP Response Status
   */
  status: string;
  data: Consumer;
  /**
   * Raw response from the integration when raw=true query param is provided
   */
  raw?: { [k: string]: any } | null | undefined;
};

/** @internal */
export const UpdateConsumerResponse$inboundSchema: z.ZodType<
  UpdateConsumerResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  status_code: z.number().int(),
  status: z.string(),
  data: Consumer$inboundSchema,
  _raw: z.nullable(z.record(z.any())).optional(),
}).transform((v) => {
  return remap$(v, {
    "status_code": "statusCode",
    "_raw": "raw",
  });
});

/** @internal */
export type UpdateConsumerResponse$Outbound = {
  status_code: number;
  status: string;
  data: Consumer$Outbound;
  _raw?: { [k: string]: any } | null | undefined;
};

/** @internal */
export const UpdateConsumerResponse$outboundSchema: z.ZodType<
  UpdateConsumerResponse$Outbound,
  z.ZodTypeDef,
  UpdateConsumerResponse
> = z.object({
  statusCode: z.number().int(),
  status: z.string(),
  data: Consumer$outboundSchema,
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
export namespace UpdateConsumerResponse$ {
  /** @deprecated use `UpdateConsumerResponse$inboundSchema` instead. */
  export const inboundSchema = UpdateConsumerResponse$inboundSchema;
  /** @deprecated use `UpdateConsumerResponse$outboundSchema` instead. */
  export const outboundSchema = UpdateConsumerResponse$outboundSchema;
  /** @deprecated use `UpdateConsumerResponse$Outbound` instead. */
  export type Outbound = UpdateConsumerResponse$Outbound;
}

export function updateConsumerResponseToJSON(
  updateConsumerResponse: UpdateConsumerResponse,
): string {
  return JSON.stringify(
    UpdateConsumerResponse$outboundSchema.parse(updateConsumerResponse),
  );
}

export function updateConsumerResponseFromJSON(
  jsonString: string,
): SafeParseResult<UpdateConsumerResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => UpdateConsumerResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'UpdateConsumerResponse' from JSON`,
  );
}

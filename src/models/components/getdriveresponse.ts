/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import {
  Drive,
  Drive$inboundSchema,
  Drive$Outbound,
  Drive$outboundSchema,
} from "./drive.js";

/**
 * Drives
 */
export type GetDriveResponse = {
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
  data: Drive;
};

/** @internal */
export const GetDriveResponse$inboundSchema: z.ZodType<
  GetDriveResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  status_code: z.number().int(),
  status: z.string(),
  service: z.string(),
  resource: z.string(),
  operation: z.string(),
  data: Drive$inboundSchema,
}).transform((v) => {
  return remap$(v, {
    "status_code": "statusCode",
  });
});

/** @internal */
export type GetDriveResponse$Outbound = {
  status_code: number;
  status: string;
  service: string;
  resource: string;
  operation: string;
  data: Drive$Outbound;
};

/** @internal */
export const GetDriveResponse$outboundSchema: z.ZodType<
  GetDriveResponse$Outbound,
  z.ZodTypeDef,
  GetDriveResponse
> = z.object({
  statusCode: z.number().int(),
  status: z.string(),
  service: z.string(),
  resource: z.string(),
  operation: z.string(),
  data: Drive$outboundSchema,
}).transform((v) => {
  return remap$(v, {
    statusCode: "status_code",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetDriveResponse$ {
  /** @deprecated use `GetDriveResponse$inboundSchema` instead. */
  export const inboundSchema = GetDriveResponse$inboundSchema;
  /** @deprecated use `GetDriveResponse$outboundSchema` instead. */
  export const outboundSchema = GetDriveResponse$outboundSchema;
  /** @deprecated use `GetDriveResponse$Outbound` instead. */
  export type Outbound = GetDriveResponse$Outbound;
}

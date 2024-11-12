/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import {
  Applicant,
  Applicant$inboundSchema,
  Applicant$Outbound,
  Applicant$outboundSchema,
} from "./applicant.js";

/**
 * Applicants
 */
export type GetApplicantResponse = {
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
  data: Applicant;
};

/** @internal */
export const GetApplicantResponse$inboundSchema: z.ZodType<
  GetApplicantResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  status_code: z.number().int(),
  status: z.string(),
  service: z.string(),
  resource: z.string(),
  operation: z.string(),
  data: Applicant$inboundSchema,
}).transform((v) => {
  return remap$(v, {
    "status_code": "statusCode",
  });
});

/** @internal */
export type GetApplicantResponse$Outbound = {
  status_code: number;
  status: string;
  service: string;
  resource: string;
  operation: string;
  data: Applicant$Outbound;
};

/** @internal */
export const GetApplicantResponse$outboundSchema: z.ZodType<
  GetApplicantResponse$Outbound,
  z.ZodTypeDef,
  GetApplicantResponse
> = z.object({
  statusCode: z.number().int(),
  status: z.string(),
  service: z.string(),
  resource: z.string(),
  operation: z.string(),
  data: Applicant$outboundSchema,
}).transform((v) => {
  return remap$(v, {
    statusCode: "status_code",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetApplicantResponse$ {
  /** @deprecated use `GetApplicantResponse$inboundSchema` instead. */
  export const inboundSchema = GetApplicantResponse$inboundSchema;
  /** @deprecated use `GetApplicantResponse$outboundSchema` instead. */
  export const outboundSchema = GetApplicantResponse$outboundSchema;
  /** @deprecated use `GetApplicantResponse$Outbound` instead. */
  export type Outbound = GetApplicantResponse$Outbound;
}

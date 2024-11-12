/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import {
  Opportunity,
  Opportunity$inboundSchema,
  Opportunity$Outbound,
  Opportunity$outboundSchema,
} from "./opportunity.js";

/**
 * Opportunity
 */
export type GetOpportunityResponse = {
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
  data: Opportunity;
};

/** @internal */
export const GetOpportunityResponse$inboundSchema: z.ZodType<
  GetOpportunityResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  status_code: z.number().int(),
  status: z.string(),
  service: z.string(),
  resource: z.string(),
  operation: z.string(),
  data: Opportunity$inboundSchema,
}).transform((v) => {
  return remap$(v, {
    "status_code": "statusCode",
  });
});

/** @internal */
export type GetOpportunityResponse$Outbound = {
  status_code: number;
  status: string;
  service: string;
  resource: string;
  operation: string;
  data: Opportunity$Outbound;
};

/** @internal */
export const GetOpportunityResponse$outboundSchema: z.ZodType<
  GetOpportunityResponse$Outbound,
  z.ZodTypeDef,
  GetOpportunityResponse
> = z.object({
  statusCode: z.number().int(),
  status: z.string(),
  service: z.string(),
  resource: z.string(),
  operation: z.string(),
  data: Opportunity$outboundSchema,
}).transform((v) => {
  return remap$(v, {
    statusCode: "status_code",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetOpportunityResponse$ {
  /** @deprecated use `GetOpportunityResponse$inboundSchema` instead. */
  export const inboundSchema = GetOpportunityResponse$inboundSchema;
  /** @deprecated use `GetOpportunityResponse$outboundSchema` instead. */
  export const outboundSchema = GetOpportunityResponse$outboundSchema;
  /** @deprecated use `GetOpportunityResponse$Outbound` instead. */
  export type Outbound = GetOpportunityResponse$Outbound;
}

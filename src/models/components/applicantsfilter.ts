/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";

export type ApplicantsFilter = {
  /**
   * Id of the job to filter on
   */
  jobId?: string | undefined;
};

/** @internal */
export const ApplicantsFilter$inboundSchema: z.ZodType<
  ApplicantsFilter,
  z.ZodTypeDef,
  unknown
> = z.object({
  job_id: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    "job_id": "jobId",
  });
});

/** @internal */
export type ApplicantsFilter$Outbound = {
  job_id?: string | undefined;
};

/** @internal */
export const ApplicantsFilter$outboundSchema: z.ZodType<
  ApplicantsFilter$Outbound,
  z.ZodTypeDef,
  ApplicantsFilter
> = z.object({
  jobId: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    jobId: "job_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ApplicantsFilter$ {
  /** @deprecated use `ApplicantsFilter$inboundSchema` instead. */
  export const inboundSchema = ApplicantsFilter$inboundSchema;
  /** @deprecated use `ApplicantsFilter$outboundSchema` instead. */
  export const outboundSchema = ApplicantsFilter$outboundSchema;
  /** @deprecated use `ApplicantsFilter$Outbound` instead. */
  export type Outbound = ApplicantsFilter$Outbound;
}

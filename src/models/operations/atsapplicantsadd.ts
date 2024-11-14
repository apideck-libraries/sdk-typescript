/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";

export type AtsApplicantsAddGlobals = {
  /**
   * ID of the consumer which you want to get or push data from
   */
  customerId?: string | undefined;
  /**
   * The ID of your Unify application
   */
  appId?: string | undefined;
};

export type AtsApplicantsAddRequest = {
  /**
   * Include raw response. Mostly used for debugging purposes
   */
  raw?: boolean | undefined;
  /**
   * Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API.
   */
  serviceId?: string | undefined;
  applicant: components.ApplicantInput;
};

export type AtsApplicantsAddResponse = {
  httpMeta: components.HTTPMetadata;
  /**
   * Applicants
   */
  createApplicantResponse?: components.CreateApplicantResponse | undefined;
  /**
   * Unexpected error
   */
  unexpectedErrorResponse?: components.UnexpectedErrorResponse | undefined;
};

/** @internal */
export const AtsApplicantsAddGlobals$inboundSchema: z.ZodType<
  AtsApplicantsAddGlobals,
  z.ZodTypeDef,
  unknown
> = z.object({
  customerId: z.string().optional(),
  appId: z.string().optional(),
});

/** @internal */
export type AtsApplicantsAddGlobals$Outbound = {
  customerId?: string | undefined;
  appId?: string | undefined;
};

/** @internal */
export const AtsApplicantsAddGlobals$outboundSchema: z.ZodType<
  AtsApplicantsAddGlobals$Outbound,
  z.ZodTypeDef,
  AtsApplicantsAddGlobals
> = z.object({
  customerId: z.string().optional(),
  appId: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AtsApplicantsAddGlobals$ {
  /** @deprecated use `AtsApplicantsAddGlobals$inboundSchema` instead. */
  export const inboundSchema = AtsApplicantsAddGlobals$inboundSchema;
  /** @deprecated use `AtsApplicantsAddGlobals$outboundSchema` instead. */
  export const outboundSchema = AtsApplicantsAddGlobals$outboundSchema;
  /** @deprecated use `AtsApplicantsAddGlobals$Outbound` instead. */
  export type Outbound = AtsApplicantsAddGlobals$Outbound;
}

/** @internal */
export const AtsApplicantsAddRequest$inboundSchema: z.ZodType<
  AtsApplicantsAddRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  raw: z.boolean().default(false),
  serviceId: z.string().optional(),
  Applicant: components.ApplicantInput$inboundSchema,
}).transform((v) => {
  return remap$(v, {
    "Applicant": "applicant",
  });
});

/** @internal */
export type AtsApplicantsAddRequest$Outbound = {
  raw: boolean;
  serviceId?: string | undefined;
  Applicant: components.ApplicantInput$Outbound;
};

/** @internal */
export const AtsApplicantsAddRequest$outboundSchema: z.ZodType<
  AtsApplicantsAddRequest$Outbound,
  z.ZodTypeDef,
  AtsApplicantsAddRequest
> = z.object({
  raw: z.boolean().default(false),
  serviceId: z.string().optional(),
  applicant: components.ApplicantInput$outboundSchema,
}).transform((v) => {
  return remap$(v, {
    applicant: "Applicant",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AtsApplicantsAddRequest$ {
  /** @deprecated use `AtsApplicantsAddRequest$inboundSchema` instead. */
  export const inboundSchema = AtsApplicantsAddRequest$inboundSchema;
  /** @deprecated use `AtsApplicantsAddRequest$outboundSchema` instead. */
  export const outboundSchema = AtsApplicantsAddRequest$outboundSchema;
  /** @deprecated use `AtsApplicantsAddRequest$Outbound` instead. */
  export type Outbound = AtsApplicantsAddRequest$Outbound;
}

/** @internal */
export const AtsApplicantsAddResponse$inboundSchema: z.ZodType<
  AtsApplicantsAddResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  HttpMeta: components.HTTPMetadata$inboundSchema,
  CreateApplicantResponse: components.CreateApplicantResponse$inboundSchema
    .optional(),
  UnexpectedErrorResponse: components.UnexpectedErrorResponse$inboundSchema
    .optional(),
}).transform((v) => {
  return remap$(v, {
    "HttpMeta": "httpMeta",
    "CreateApplicantResponse": "createApplicantResponse",
    "UnexpectedErrorResponse": "unexpectedErrorResponse",
  });
});

/** @internal */
export type AtsApplicantsAddResponse$Outbound = {
  HttpMeta: components.HTTPMetadata$Outbound;
  CreateApplicantResponse?:
    | components.CreateApplicantResponse$Outbound
    | undefined;
  UnexpectedErrorResponse?:
    | components.UnexpectedErrorResponse$Outbound
    | undefined;
};

/** @internal */
export const AtsApplicantsAddResponse$outboundSchema: z.ZodType<
  AtsApplicantsAddResponse$Outbound,
  z.ZodTypeDef,
  AtsApplicantsAddResponse
> = z.object({
  httpMeta: components.HTTPMetadata$outboundSchema,
  createApplicantResponse: components.CreateApplicantResponse$outboundSchema
    .optional(),
  unexpectedErrorResponse: components.UnexpectedErrorResponse$outboundSchema
    .optional(),
}).transform((v) => {
  return remap$(v, {
    httpMeta: "HttpMeta",
    createApplicantResponse: "CreateApplicantResponse",
    unexpectedErrorResponse: "UnexpectedErrorResponse",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AtsApplicantsAddResponse$ {
  /** @deprecated use `AtsApplicantsAddResponse$inboundSchema` instead. */
  export const inboundSchema = AtsApplicantsAddResponse$inboundSchema;
  /** @deprecated use `AtsApplicantsAddResponse$outboundSchema` instead. */
  export const outboundSchema = AtsApplicantsAddResponse$outboundSchema;
  /** @deprecated use `AtsApplicantsAddResponse$Outbound` instead. */
  export type Outbound = AtsApplicantsAddResponse$Outbound;
}

/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";

export type CrmCompaniesAddGlobals = {
  /**
   * ID of the consumer which you want to get or push data from
   */
  customerId?: string | undefined;
  /**
   * The ID of your Unify application
   */
  appId?: string | undefined;
};

export type CrmCompaniesAddRequest = {
  /**
   * Include raw response. Mostly used for debugging purposes
   */
  raw?: boolean | undefined;
  /**
   * Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API.
   */
  serviceId?: string | undefined;
  company: components.CompanyInput;
};

export type CrmCompaniesAddResponse = {
  httpMeta: components.HTTPMetadata;
  /**
   * Company created
   */
  createCompanyResponse?: components.CreateCompanyResponse | undefined;
  /**
   * Unexpected error
   */
  unexpectedErrorResponse?: components.UnexpectedErrorResponse | undefined;
};

/** @internal */
export const CrmCompaniesAddGlobals$inboundSchema: z.ZodType<
  CrmCompaniesAddGlobals,
  z.ZodTypeDef,
  unknown
> = z.object({
  customerId: z.string().optional(),
  appId: z.string().optional(),
});

/** @internal */
export type CrmCompaniesAddGlobals$Outbound = {
  customerId?: string | undefined;
  appId?: string | undefined;
};

/** @internal */
export const CrmCompaniesAddGlobals$outboundSchema: z.ZodType<
  CrmCompaniesAddGlobals$Outbound,
  z.ZodTypeDef,
  CrmCompaniesAddGlobals
> = z.object({
  customerId: z.string().optional(),
  appId: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CrmCompaniesAddGlobals$ {
  /** @deprecated use `CrmCompaniesAddGlobals$inboundSchema` instead. */
  export const inboundSchema = CrmCompaniesAddGlobals$inboundSchema;
  /** @deprecated use `CrmCompaniesAddGlobals$outboundSchema` instead. */
  export const outboundSchema = CrmCompaniesAddGlobals$outboundSchema;
  /** @deprecated use `CrmCompaniesAddGlobals$Outbound` instead. */
  export type Outbound = CrmCompaniesAddGlobals$Outbound;
}

/** @internal */
export const CrmCompaniesAddRequest$inboundSchema: z.ZodType<
  CrmCompaniesAddRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  raw: z.boolean().default(false),
  serviceId: z.string().optional(),
  Company: components.CompanyInput$inboundSchema,
}).transform((v) => {
  return remap$(v, {
    "Company": "company",
  });
});

/** @internal */
export type CrmCompaniesAddRequest$Outbound = {
  raw: boolean;
  serviceId?: string | undefined;
  Company: components.CompanyInput$Outbound;
};

/** @internal */
export const CrmCompaniesAddRequest$outboundSchema: z.ZodType<
  CrmCompaniesAddRequest$Outbound,
  z.ZodTypeDef,
  CrmCompaniesAddRequest
> = z.object({
  raw: z.boolean().default(false),
  serviceId: z.string().optional(),
  company: components.CompanyInput$outboundSchema,
}).transform((v) => {
  return remap$(v, {
    company: "Company",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CrmCompaniesAddRequest$ {
  /** @deprecated use `CrmCompaniesAddRequest$inboundSchema` instead. */
  export const inboundSchema = CrmCompaniesAddRequest$inboundSchema;
  /** @deprecated use `CrmCompaniesAddRequest$outboundSchema` instead. */
  export const outboundSchema = CrmCompaniesAddRequest$outboundSchema;
  /** @deprecated use `CrmCompaniesAddRequest$Outbound` instead. */
  export type Outbound = CrmCompaniesAddRequest$Outbound;
}

/** @internal */
export const CrmCompaniesAddResponse$inboundSchema: z.ZodType<
  CrmCompaniesAddResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  HttpMeta: components.HTTPMetadata$inboundSchema,
  CreateCompanyResponse: components.CreateCompanyResponse$inboundSchema
    .optional(),
  UnexpectedErrorResponse: components.UnexpectedErrorResponse$inboundSchema
    .optional(),
}).transform((v) => {
  return remap$(v, {
    "HttpMeta": "httpMeta",
    "CreateCompanyResponse": "createCompanyResponse",
    "UnexpectedErrorResponse": "unexpectedErrorResponse",
  });
});

/** @internal */
export type CrmCompaniesAddResponse$Outbound = {
  HttpMeta: components.HTTPMetadata$Outbound;
  CreateCompanyResponse?: components.CreateCompanyResponse$Outbound | undefined;
  UnexpectedErrorResponse?:
    | components.UnexpectedErrorResponse$Outbound
    | undefined;
};

/** @internal */
export const CrmCompaniesAddResponse$outboundSchema: z.ZodType<
  CrmCompaniesAddResponse$Outbound,
  z.ZodTypeDef,
  CrmCompaniesAddResponse
> = z.object({
  httpMeta: components.HTTPMetadata$outboundSchema,
  createCompanyResponse: components.CreateCompanyResponse$outboundSchema
    .optional(),
  unexpectedErrorResponse: components.UnexpectedErrorResponse$outboundSchema
    .optional(),
}).transform((v) => {
  return remap$(v, {
    httpMeta: "HttpMeta",
    createCompanyResponse: "CreateCompanyResponse",
    unexpectedErrorResponse: "UnexpectedErrorResponse",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CrmCompaniesAddResponse$ {
  /** @deprecated use `CrmCompaniesAddResponse$inboundSchema` instead. */
  export const inboundSchema = CrmCompaniesAddResponse$inboundSchema;
  /** @deprecated use `CrmCompaniesAddResponse$outboundSchema` instead. */
  export const outboundSchema = CrmCompaniesAddResponse$outboundSchema;
  /** @deprecated use `CrmCompaniesAddResponse$Outbound` instead. */
  export type Outbound = CrmCompaniesAddResponse$Outbound;
}

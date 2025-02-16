/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type CrmCompaniesUpdateGlobals = {
  /**
   * ID of the consumer which you want to get or push data from
   */
  consumerId?: string | undefined;
  /**
   * The ID of your Unify application
   */
  appId?: string | undefined;
};

export type CrmCompaniesUpdateRequest = {
  /**
   * ID of the record you are acting upon.
   */
  id: string;
  /**
   * Include raw response. Mostly used for debugging purposes
   */
  raw?: boolean | undefined;
  /**
   * ID of the consumer which you want to get or push data from
   */
  consumerId?: string | undefined;
  /**
   * The ID of your Unify application
   */
  appId?: string | undefined;
  /**
   * Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API.
   */
  serviceId?: string | undefined;
  company: components.CompanyInput;
};

export type CrmCompaniesUpdateResponse = {
  httpMeta: components.HTTPMetadata;
  /**
   * Company updated
   */
  updateCompanyResponse?: components.UpdateCompanyResponse | undefined;
  /**
   * Unexpected error
   */
  unexpectedErrorResponse?: components.UnexpectedErrorResponse | undefined;
};

/** @internal */
export const CrmCompaniesUpdateGlobals$inboundSchema: z.ZodType<
  CrmCompaniesUpdateGlobals,
  z.ZodTypeDef,
  unknown
> = z.object({
  consumerId: z.string().optional(),
  appId: z.string().optional(),
});

/** @internal */
export type CrmCompaniesUpdateGlobals$Outbound = {
  consumerId?: string | undefined;
  appId?: string | undefined;
};

/** @internal */
export const CrmCompaniesUpdateGlobals$outboundSchema: z.ZodType<
  CrmCompaniesUpdateGlobals$Outbound,
  z.ZodTypeDef,
  CrmCompaniesUpdateGlobals
> = z.object({
  consumerId: z.string().optional(),
  appId: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CrmCompaniesUpdateGlobals$ {
  /** @deprecated use `CrmCompaniesUpdateGlobals$inboundSchema` instead. */
  export const inboundSchema = CrmCompaniesUpdateGlobals$inboundSchema;
  /** @deprecated use `CrmCompaniesUpdateGlobals$outboundSchema` instead. */
  export const outboundSchema = CrmCompaniesUpdateGlobals$outboundSchema;
  /** @deprecated use `CrmCompaniesUpdateGlobals$Outbound` instead. */
  export type Outbound = CrmCompaniesUpdateGlobals$Outbound;
}

export function crmCompaniesUpdateGlobalsToJSON(
  crmCompaniesUpdateGlobals: CrmCompaniesUpdateGlobals,
): string {
  return JSON.stringify(
    CrmCompaniesUpdateGlobals$outboundSchema.parse(crmCompaniesUpdateGlobals),
  );
}

export function crmCompaniesUpdateGlobalsFromJSON(
  jsonString: string,
): SafeParseResult<CrmCompaniesUpdateGlobals, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CrmCompaniesUpdateGlobals$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CrmCompaniesUpdateGlobals' from JSON`,
  );
}

/** @internal */
export const CrmCompaniesUpdateRequest$inboundSchema: z.ZodType<
  CrmCompaniesUpdateRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
  raw: z.boolean().default(false),
  consumerId: z.string().optional(),
  appId: z.string().optional(),
  serviceId: z.string().optional(),
  Company: components.CompanyInput$inboundSchema,
}).transform((v) => {
  return remap$(v, {
    "Company": "company",
  });
});

/** @internal */
export type CrmCompaniesUpdateRequest$Outbound = {
  id: string;
  raw: boolean;
  consumerId?: string | undefined;
  appId?: string | undefined;
  serviceId?: string | undefined;
  Company: components.CompanyInput$Outbound;
};

/** @internal */
export const CrmCompaniesUpdateRequest$outboundSchema: z.ZodType<
  CrmCompaniesUpdateRequest$Outbound,
  z.ZodTypeDef,
  CrmCompaniesUpdateRequest
> = z.object({
  id: z.string(),
  raw: z.boolean().default(false),
  consumerId: z.string().optional(),
  appId: z.string().optional(),
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
export namespace CrmCompaniesUpdateRequest$ {
  /** @deprecated use `CrmCompaniesUpdateRequest$inboundSchema` instead. */
  export const inboundSchema = CrmCompaniesUpdateRequest$inboundSchema;
  /** @deprecated use `CrmCompaniesUpdateRequest$outboundSchema` instead. */
  export const outboundSchema = CrmCompaniesUpdateRequest$outboundSchema;
  /** @deprecated use `CrmCompaniesUpdateRequest$Outbound` instead. */
  export type Outbound = CrmCompaniesUpdateRequest$Outbound;
}

export function crmCompaniesUpdateRequestToJSON(
  crmCompaniesUpdateRequest: CrmCompaniesUpdateRequest,
): string {
  return JSON.stringify(
    CrmCompaniesUpdateRequest$outboundSchema.parse(crmCompaniesUpdateRequest),
  );
}

export function crmCompaniesUpdateRequestFromJSON(
  jsonString: string,
): SafeParseResult<CrmCompaniesUpdateRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CrmCompaniesUpdateRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CrmCompaniesUpdateRequest' from JSON`,
  );
}

/** @internal */
export const CrmCompaniesUpdateResponse$inboundSchema: z.ZodType<
  CrmCompaniesUpdateResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  HttpMeta: components.HTTPMetadata$inboundSchema,
  UpdateCompanyResponse: components.UpdateCompanyResponse$inboundSchema
    .optional(),
  UnexpectedErrorResponse: components.UnexpectedErrorResponse$inboundSchema
    .optional(),
}).transform((v) => {
  return remap$(v, {
    "HttpMeta": "httpMeta",
    "UpdateCompanyResponse": "updateCompanyResponse",
    "UnexpectedErrorResponse": "unexpectedErrorResponse",
  });
});

/** @internal */
export type CrmCompaniesUpdateResponse$Outbound = {
  HttpMeta: components.HTTPMetadata$Outbound;
  UpdateCompanyResponse?: components.UpdateCompanyResponse$Outbound | undefined;
  UnexpectedErrorResponse?:
    | components.UnexpectedErrorResponse$Outbound
    | undefined;
};

/** @internal */
export const CrmCompaniesUpdateResponse$outboundSchema: z.ZodType<
  CrmCompaniesUpdateResponse$Outbound,
  z.ZodTypeDef,
  CrmCompaniesUpdateResponse
> = z.object({
  httpMeta: components.HTTPMetadata$outboundSchema,
  updateCompanyResponse: components.UpdateCompanyResponse$outboundSchema
    .optional(),
  unexpectedErrorResponse: components.UnexpectedErrorResponse$outboundSchema
    .optional(),
}).transform((v) => {
  return remap$(v, {
    httpMeta: "HttpMeta",
    updateCompanyResponse: "UpdateCompanyResponse",
    unexpectedErrorResponse: "UnexpectedErrorResponse",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CrmCompaniesUpdateResponse$ {
  /** @deprecated use `CrmCompaniesUpdateResponse$inboundSchema` instead. */
  export const inboundSchema = CrmCompaniesUpdateResponse$inboundSchema;
  /** @deprecated use `CrmCompaniesUpdateResponse$outboundSchema` instead. */
  export const outboundSchema = CrmCompaniesUpdateResponse$outboundSchema;
  /** @deprecated use `CrmCompaniesUpdateResponse$Outbound` instead. */
  export type Outbound = CrmCompaniesUpdateResponse$Outbound;
}

export function crmCompaniesUpdateResponseToJSON(
  crmCompaniesUpdateResponse: CrmCompaniesUpdateResponse,
): string {
  return JSON.stringify(
    CrmCompaniesUpdateResponse$outboundSchema.parse(crmCompaniesUpdateResponse),
  );
}

export function crmCompaniesUpdateResponseFromJSON(
  jsonString: string,
): SafeParseResult<CrmCompaniesUpdateResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CrmCompaniesUpdateResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CrmCompaniesUpdateResponse' from JSON`,
  );
}

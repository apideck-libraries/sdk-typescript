/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type CrmCustomObjectSchemasAddGlobals = {
  /**
   * ID of the consumer which you want to get or push data from
   */
  consumerId?: string | undefined;
  /**
   * The ID of your Unify application
   */
  appId?: string | undefined;
};

export type CrmCustomObjectSchemasAddRequest = {
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
  customObjectSchema: components.CustomObjectSchemaInput;
};

export type CrmCustomObjectSchemasAddResponse = {
  httpMeta: components.HTTPMetadata;
  /**
   * Custom object schema created
   */
  createCustomObjectSchemaResponse?:
    | components.CreateCustomObjectSchemaResponse
    | undefined;
  /**
   * Unexpected error
   */
  unexpectedErrorResponse?: components.UnexpectedErrorResponse | undefined;
};

/** @internal */
export const CrmCustomObjectSchemasAddGlobals$inboundSchema: z.ZodType<
  CrmCustomObjectSchemasAddGlobals,
  z.ZodTypeDef,
  unknown
> = z.object({
  consumerId: z.string().optional(),
  appId: z.string().optional(),
});

/** @internal */
export type CrmCustomObjectSchemasAddGlobals$Outbound = {
  consumerId?: string | undefined;
  appId?: string | undefined;
};

/** @internal */
export const CrmCustomObjectSchemasAddGlobals$outboundSchema: z.ZodType<
  CrmCustomObjectSchemasAddGlobals$Outbound,
  z.ZodTypeDef,
  CrmCustomObjectSchemasAddGlobals
> = z.object({
  consumerId: z.string().optional(),
  appId: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CrmCustomObjectSchemasAddGlobals$ {
  /** @deprecated use `CrmCustomObjectSchemasAddGlobals$inboundSchema` instead. */
  export const inboundSchema = CrmCustomObjectSchemasAddGlobals$inboundSchema;
  /** @deprecated use `CrmCustomObjectSchemasAddGlobals$outboundSchema` instead. */
  export const outboundSchema = CrmCustomObjectSchemasAddGlobals$outboundSchema;
  /** @deprecated use `CrmCustomObjectSchemasAddGlobals$Outbound` instead. */
  export type Outbound = CrmCustomObjectSchemasAddGlobals$Outbound;
}

export function crmCustomObjectSchemasAddGlobalsToJSON(
  crmCustomObjectSchemasAddGlobals: CrmCustomObjectSchemasAddGlobals,
): string {
  return JSON.stringify(
    CrmCustomObjectSchemasAddGlobals$outboundSchema.parse(
      crmCustomObjectSchemasAddGlobals,
    ),
  );
}

export function crmCustomObjectSchemasAddGlobalsFromJSON(
  jsonString: string,
): SafeParseResult<CrmCustomObjectSchemasAddGlobals, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CrmCustomObjectSchemasAddGlobals$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CrmCustomObjectSchemasAddGlobals' from JSON`,
  );
}

/** @internal */
export const CrmCustomObjectSchemasAddRequest$inboundSchema: z.ZodType<
  CrmCustomObjectSchemasAddRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  raw: z.boolean().default(false),
  consumerId: z.string().optional(),
  appId: z.string().optional(),
  serviceId: z.string().optional(),
  CustomObjectSchema: components.CustomObjectSchemaInput$inboundSchema,
}).transform((v) => {
  return remap$(v, {
    "CustomObjectSchema": "customObjectSchema",
  });
});

/** @internal */
export type CrmCustomObjectSchemasAddRequest$Outbound = {
  raw: boolean;
  consumerId?: string | undefined;
  appId?: string | undefined;
  serviceId?: string | undefined;
  CustomObjectSchema: components.CustomObjectSchemaInput$Outbound;
};

/** @internal */
export const CrmCustomObjectSchemasAddRequest$outboundSchema: z.ZodType<
  CrmCustomObjectSchemasAddRequest$Outbound,
  z.ZodTypeDef,
  CrmCustomObjectSchemasAddRequest
> = z.object({
  raw: z.boolean().default(false),
  consumerId: z.string().optional(),
  appId: z.string().optional(),
  serviceId: z.string().optional(),
  customObjectSchema: components.CustomObjectSchemaInput$outboundSchema,
}).transform((v) => {
  return remap$(v, {
    customObjectSchema: "CustomObjectSchema",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CrmCustomObjectSchemasAddRequest$ {
  /** @deprecated use `CrmCustomObjectSchemasAddRequest$inboundSchema` instead. */
  export const inboundSchema = CrmCustomObjectSchemasAddRequest$inboundSchema;
  /** @deprecated use `CrmCustomObjectSchemasAddRequest$outboundSchema` instead. */
  export const outboundSchema = CrmCustomObjectSchemasAddRequest$outboundSchema;
  /** @deprecated use `CrmCustomObjectSchemasAddRequest$Outbound` instead. */
  export type Outbound = CrmCustomObjectSchemasAddRequest$Outbound;
}

export function crmCustomObjectSchemasAddRequestToJSON(
  crmCustomObjectSchemasAddRequest: CrmCustomObjectSchemasAddRequest,
): string {
  return JSON.stringify(
    CrmCustomObjectSchemasAddRequest$outboundSchema.parse(
      crmCustomObjectSchemasAddRequest,
    ),
  );
}

export function crmCustomObjectSchemasAddRequestFromJSON(
  jsonString: string,
): SafeParseResult<CrmCustomObjectSchemasAddRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CrmCustomObjectSchemasAddRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CrmCustomObjectSchemasAddRequest' from JSON`,
  );
}

/** @internal */
export const CrmCustomObjectSchemasAddResponse$inboundSchema: z.ZodType<
  CrmCustomObjectSchemasAddResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  HttpMeta: components.HTTPMetadata$inboundSchema,
  CreateCustomObjectSchemaResponse: components
    .CreateCustomObjectSchemaResponse$inboundSchema.optional(),
  UnexpectedErrorResponse: components.UnexpectedErrorResponse$inboundSchema
    .optional(),
}).transform((v) => {
  return remap$(v, {
    "HttpMeta": "httpMeta",
    "CreateCustomObjectSchemaResponse": "createCustomObjectSchemaResponse",
    "UnexpectedErrorResponse": "unexpectedErrorResponse",
  });
});

/** @internal */
export type CrmCustomObjectSchemasAddResponse$Outbound = {
  HttpMeta: components.HTTPMetadata$Outbound;
  CreateCustomObjectSchemaResponse?:
    | components.CreateCustomObjectSchemaResponse$Outbound
    | undefined;
  UnexpectedErrorResponse?:
    | components.UnexpectedErrorResponse$Outbound
    | undefined;
};

/** @internal */
export const CrmCustomObjectSchemasAddResponse$outboundSchema: z.ZodType<
  CrmCustomObjectSchemasAddResponse$Outbound,
  z.ZodTypeDef,
  CrmCustomObjectSchemasAddResponse
> = z.object({
  httpMeta: components.HTTPMetadata$outboundSchema,
  createCustomObjectSchemaResponse: components
    .CreateCustomObjectSchemaResponse$outboundSchema.optional(),
  unexpectedErrorResponse: components.UnexpectedErrorResponse$outboundSchema
    .optional(),
}).transform((v) => {
  return remap$(v, {
    httpMeta: "HttpMeta",
    createCustomObjectSchemaResponse: "CreateCustomObjectSchemaResponse",
    unexpectedErrorResponse: "UnexpectedErrorResponse",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CrmCustomObjectSchemasAddResponse$ {
  /** @deprecated use `CrmCustomObjectSchemasAddResponse$inboundSchema` instead. */
  export const inboundSchema = CrmCustomObjectSchemasAddResponse$inboundSchema;
  /** @deprecated use `CrmCustomObjectSchemasAddResponse$outboundSchema` instead. */
  export const outboundSchema =
    CrmCustomObjectSchemasAddResponse$outboundSchema;
  /** @deprecated use `CrmCustomObjectSchemasAddResponse$Outbound` instead. */
  export type Outbound = CrmCustomObjectSchemasAddResponse$Outbound;
}

export function crmCustomObjectSchemasAddResponseToJSON(
  crmCustomObjectSchemasAddResponse: CrmCustomObjectSchemasAddResponse,
): string {
  return JSON.stringify(
    CrmCustomObjectSchemasAddResponse$outboundSchema.parse(
      crmCustomObjectSchemasAddResponse,
    ),
  );
}

export function crmCustomObjectSchemasAddResponseFromJSON(
  jsonString: string,
): SafeParseResult<CrmCustomObjectSchemasAddResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CrmCustomObjectSchemasAddResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CrmCustomObjectSchemasAddResponse' from JSON`,
  );
}

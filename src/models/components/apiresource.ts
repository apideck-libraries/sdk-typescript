/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  ResourceStatus,
  ResourceStatus$inboundSchema,
  ResourceStatus$outboundSchema,
} from "./resourcestatus.js";

export type LinkedResources = {
  /**
   * ID of the resource, typically a lowercased version of name.
   */
  id?: string | undefined;
  /**
   * Name of the property in our Unified API.
   */
  unifiedProperty?: string | undefined;
};

/**
 * JSON Schema of the resource in our Unified API
 */
export type Schema = {};

export type ApiResource = {
  /**
   * ID of the resource, typically a lowercased version of name.
   */
  id?: string | undefined;
  /**
   * Name of the resource (plural)
   */
  name?: string | undefined;
  /**
   * Status of the resource. Resources with status live or beta are callable.
   */
  status?: ResourceStatus | undefined;
  /**
   * List of linked resources.
   */
  linkedResources?: Array<LinkedResources> | undefined;
  /**
   * JSON Schema of the resource in our Unified API
   */
  schema?: Schema | undefined;
};

/** @internal */
export const LinkedResources$inboundSchema: z.ZodType<
  LinkedResources,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string().optional(),
  unified_property: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    "unified_property": "unifiedProperty",
  });
});

/** @internal */
export type LinkedResources$Outbound = {
  id?: string | undefined;
  unified_property?: string | undefined;
};

/** @internal */
export const LinkedResources$outboundSchema: z.ZodType<
  LinkedResources$Outbound,
  z.ZodTypeDef,
  LinkedResources
> = z.object({
  id: z.string().optional(),
  unifiedProperty: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    unifiedProperty: "unified_property",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace LinkedResources$ {
  /** @deprecated use `LinkedResources$inboundSchema` instead. */
  export const inboundSchema = LinkedResources$inboundSchema;
  /** @deprecated use `LinkedResources$outboundSchema` instead. */
  export const outboundSchema = LinkedResources$outboundSchema;
  /** @deprecated use `LinkedResources$Outbound` instead. */
  export type Outbound = LinkedResources$Outbound;
}

export function linkedResourcesToJSON(
  linkedResources: LinkedResources,
): string {
  return JSON.stringify(LinkedResources$outboundSchema.parse(linkedResources));
}

export function linkedResourcesFromJSON(
  jsonString: string,
): SafeParseResult<LinkedResources, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => LinkedResources$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'LinkedResources' from JSON`,
  );
}

/** @internal */
export const Schema$inboundSchema: z.ZodType<Schema, z.ZodTypeDef, unknown> = z
  .object({});

/** @internal */
export type Schema$Outbound = {};

/** @internal */
export const Schema$outboundSchema: z.ZodType<
  Schema$Outbound,
  z.ZodTypeDef,
  Schema
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Schema$ {
  /** @deprecated use `Schema$inboundSchema` instead. */
  export const inboundSchema = Schema$inboundSchema;
  /** @deprecated use `Schema$outboundSchema` instead. */
  export const outboundSchema = Schema$outboundSchema;
  /** @deprecated use `Schema$Outbound` instead. */
  export type Outbound = Schema$Outbound;
}

export function schemaToJSON(schema: Schema): string {
  return JSON.stringify(Schema$outboundSchema.parse(schema));
}

export function schemaFromJSON(
  jsonString: string,
): SafeParseResult<Schema, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Schema$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Schema' from JSON`,
  );
}

/** @internal */
export const ApiResource$inboundSchema: z.ZodType<
  ApiResource,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string().optional(),
  name: z.string().optional(),
  status: ResourceStatus$inboundSchema.optional(),
  linked_resources: z.array(z.lazy(() => LinkedResources$inboundSchema))
    .optional(),
  schema: z.lazy(() => Schema$inboundSchema).optional(),
}).transform((v) => {
  return remap$(v, {
    "linked_resources": "linkedResources",
  });
});

/** @internal */
export type ApiResource$Outbound = {
  id?: string | undefined;
  name?: string | undefined;
  status?: string | undefined;
  linked_resources?: Array<LinkedResources$Outbound> | undefined;
  schema?: Schema$Outbound | undefined;
};

/** @internal */
export const ApiResource$outboundSchema: z.ZodType<
  ApiResource$Outbound,
  z.ZodTypeDef,
  ApiResource
> = z.object({
  id: z.string().optional(),
  name: z.string().optional(),
  status: ResourceStatus$outboundSchema.optional(),
  linkedResources: z.array(z.lazy(() => LinkedResources$outboundSchema))
    .optional(),
  schema: z.lazy(() => Schema$outboundSchema).optional(),
}).transform((v) => {
  return remap$(v, {
    linkedResources: "linked_resources",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ApiResource$ {
  /** @deprecated use `ApiResource$inboundSchema` instead. */
  export const inboundSchema = ApiResource$inboundSchema;
  /** @deprecated use `ApiResource$outboundSchema` instead. */
  export const outboundSchema = ApiResource$outboundSchema;
  /** @deprecated use `ApiResource$Outbound` instead. */
  export type Outbound = ApiResource$Outbound;
}

export function apiResourceToJSON(apiResource: ApiResource): string {
  return JSON.stringify(ApiResource$outboundSchema.parse(apiResource));
}

export function apiResourceFromJSON(
  jsonString: string,
): SafeParseResult<ApiResource, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ApiResource$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ApiResource' from JSON`,
  );
}

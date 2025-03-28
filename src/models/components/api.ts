/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  ApiStatus,
  ApiStatus$inboundSchema,
  ApiStatus$outboundSchema,
} from "./apistatus.js";
import {
  ResourceStatus,
  ResourceStatus$inboundSchema,
  ResourceStatus$outboundSchema,
} from "./resourcestatus.js";

/**
 * Indicates whether the API is a Unified API. If unified_api is false, the API is a Platform API.
 */
export const ApiType = {
  Platform: "platform",
  Unified: "unified",
} as const;
/**
 * Indicates whether the API is a Unified API. If unified_api is false, the API is a Platform API.
 */
export type ApiType = ClosedEnum<typeof ApiType>;

export type Resources = {
  /**
   * ID of the resource, typically a lowercased version of its name.
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
   * Exclude from mapping coverage
   */
  excludedFromCoverage?: boolean | undefined;
};

export type Api = {
  /**
   * ID of the API.
   */
  id?: string | undefined;
  /**
   * Indicates whether the API is a Unified API. If unified_api is false, the API is a Platform API.
   */
  type?: ApiType | undefined;
  /**
   * Name of the API.
   */
  name?: string | undefined;
  /**
   * Description of the API.
   */
  description?: string | null | undefined;
  /**
   * Status of the API. APIs with status live or beta are callable.
   */
  status?: ApiStatus | undefined;
  /**
   * Link to the latest OpenAPI specification of the API.
   */
  specUrl?: string | undefined;
  /**
   * Link to the API reference of the API.
   */
  apiReferenceUrl?: string | undefined;
  /**
   * ID of the Postman collection of the API.
   */
  postmanCollectionId?: string | null | undefined;
  /**
   * List of categories the API belongs to.
   */
  categories?: Array<string> | undefined;
  /**
   * List of resources supported in this API.
   */
  resources?: Array<Resources> | undefined;
  /**
   * List of event types this API supports.
   */
  events?: Array<string> | undefined;
};

/** @internal */
export const ApiType$inboundSchema: z.ZodNativeEnum<typeof ApiType> = z
  .nativeEnum(ApiType);

/** @internal */
export const ApiType$outboundSchema: z.ZodNativeEnum<typeof ApiType> =
  ApiType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ApiType$ {
  /** @deprecated use `ApiType$inboundSchema` instead. */
  export const inboundSchema = ApiType$inboundSchema;
  /** @deprecated use `ApiType$outboundSchema` instead. */
  export const outboundSchema = ApiType$outboundSchema;
}

/** @internal */
export const Resources$inboundSchema: z.ZodType<
  Resources,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string().optional(),
  name: z.string().optional(),
  status: ResourceStatus$inboundSchema.optional(),
  excluded_from_coverage: z.boolean().optional(),
}).transform((v) => {
  return remap$(v, {
    "excluded_from_coverage": "excludedFromCoverage",
  });
});

/** @internal */
export type Resources$Outbound = {
  id?: string | undefined;
  name?: string | undefined;
  status?: string | undefined;
  excluded_from_coverage?: boolean | undefined;
};

/** @internal */
export const Resources$outboundSchema: z.ZodType<
  Resources$Outbound,
  z.ZodTypeDef,
  Resources
> = z.object({
  id: z.string().optional(),
  name: z.string().optional(),
  status: ResourceStatus$outboundSchema.optional(),
  excludedFromCoverage: z.boolean().optional(),
}).transform((v) => {
  return remap$(v, {
    excludedFromCoverage: "excluded_from_coverage",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Resources$ {
  /** @deprecated use `Resources$inboundSchema` instead. */
  export const inboundSchema = Resources$inboundSchema;
  /** @deprecated use `Resources$outboundSchema` instead. */
  export const outboundSchema = Resources$outboundSchema;
  /** @deprecated use `Resources$Outbound` instead. */
  export type Outbound = Resources$Outbound;
}

export function resourcesToJSON(resources: Resources): string {
  return JSON.stringify(Resources$outboundSchema.parse(resources));
}

export function resourcesFromJSON(
  jsonString: string,
): SafeParseResult<Resources, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Resources$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Resources' from JSON`,
  );
}

/** @internal */
export const Api$inboundSchema: z.ZodType<Api, z.ZodTypeDef, unknown> = z
  .object({
    id: z.string().optional(),
    type: ApiType$inboundSchema.optional(),
    name: z.string().optional(),
    description: z.nullable(z.string()).optional(),
    status: ApiStatus$inboundSchema.optional(),
    spec_url: z.string().optional(),
    api_reference_url: z.string().optional(),
    postman_collection_id: z.nullable(z.string()).optional(),
    categories: z.array(z.string()).optional(),
    resources: z.array(z.lazy(() => Resources$inboundSchema)).optional(),
    events: z.array(z.string()).optional(),
  }).transform((v) => {
    return remap$(v, {
      "spec_url": "specUrl",
      "api_reference_url": "apiReferenceUrl",
      "postman_collection_id": "postmanCollectionId",
    });
  });

/** @internal */
export type Api$Outbound = {
  id?: string | undefined;
  type?: string | undefined;
  name?: string | undefined;
  description?: string | null | undefined;
  status?: string | undefined;
  spec_url?: string | undefined;
  api_reference_url?: string | undefined;
  postman_collection_id?: string | null | undefined;
  categories?: Array<string> | undefined;
  resources?: Array<Resources$Outbound> | undefined;
  events?: Array<string> | undefined;
};

/** @internal */
export const Api$outboundSchema: z.ZodType<Api$Outbound, z.ZodTypeDef, Api> = z
  .object({
    id: z.string().optional(),
    type: ApiType$outboundSchema.optional(),
    name: z.string().optional(),
    description: z.nullable(z.string()).optional(),
    status: ApiStatus$outboundSchema.optional(),
    specUrl: z.string().optional(),
    apiReferenceUrl: z.string().optional(),
    postmanCollectionId: z.nullable(z.string()).optional(),
    categories: z.array(z.string()).optional(),
    resources: z.array(z.lazy(() => Resources$outboundSchema)).optional(),
    events: z.array(z.string()).optional(),
  }).transform((v) => {
    return remap$(v, {
      specUrl: "spec_url",
      apiReferenceUrl: "api_reference_url",
      postmanCollectionId: "postman_collection_id",
    });
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Api$ {
  /** @deprecated use `Api$inboundSchema` instead. */
  export const inboundSchema = Api$inboundSchema;
  /** @deprecated use `Api$outboundSchema` instead. */
  export const outboundSchema = Api$outboundSchema;
  /** @deprecated use `Api$Outbound` instead. */
  export type Outbound = Api$Outbound;
}

export function apiToJSON(api: Api): string {
  return JSON.stringify(Api$outboundSchema.parse(api));
}

export function apiFromJSON(
  jsonString: string,
): SafeParseResult<Api, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Api$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Api' from JSON`,
  );
}

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

export type LinkedConnectorResource = {
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
   * ID of the resource in the Connector's API (downstream)
   */
  downstreamId?: string | undefined;
  /**
   * Name of the resource in the Connector's API (downstream)
   */
  downstreamName?: string | undefined;
};

/** @internal */
export const LinkedConnectorResource$inboundSchema: z.ZodType<
  LinkedConnectorResource,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string().optional(),
  name: z.string().optional(),
  status: ResourceStatus$inboundSchema.optional(),
  downstream_id: z.string().optional(),
  downstream_name: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    "downstream_id": "downstreamId",
    "downstream_name": "downstreamName",
  });
});

/** @internal */
export type LinkedConnectorResource$Outbound = {
  id?: string | undefined;
  name?: string | undefined;
  status?: string | undefined;
  downstream_id?: string | undefined;
  downstream_name?: string | undefined;
};

/** @internal */
export const LinkedConnectorResource$outboundSchema: z.ZodType<
  LinkedConnectorResource$Outbound,
  z.ZodTypeDef,
  LinkedConnectorResource
> = z.object({
  id: z.string().optional(),
  name: z.string().optional(),
  status: ResourceStatus$outboundSchema.optional(),
  downstreamId: z.string().optional(),
  downstreamName: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    downstreamId: "downstream_id",
    downstreamName: "downstream_name",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace LinkedConnectorResource$ {
  /** @deprecated use `LinkedConnectorResource$inboundSchema` instead. */
  export const inboundSchema = LinkedConnectorResource$inboundSchema;
  /** @deprecated use `LinkedConnectorResource$outboundSchema` instead. */
  export const outboundSchema = LinkedConnectorResource$outboundSchema;
  /** @deprecated use `LinkedConnectorResource$Outbound` instead. */
  export type Outbound = LinkedConnectorResource$Outbound;
}

export function linkedConnectorResourceToJSON(
  linkedConnectorResource: LinkedConnectorResource,
): string {
  return JSON.stringify(
    LinkedConnectorResource$outboundSchema.parse(linkedConnectorResource),
  );
}

export function linkedConnectorResourceFromJSON(
  jsonString: string,
): SafeParseResult<LinkedConnectorResource, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => LinkedConnectorResource$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'LinkedConnectorResource' from JSON`,
  );
}

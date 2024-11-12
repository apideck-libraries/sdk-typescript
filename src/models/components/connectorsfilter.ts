/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import {
  ConnectorStatus,
  ConnectorStatus$inboundSchema,
  ConnectorStatus$outboundSchema,
} from "./connectorstatus.js";
import {
  UnifiedApiId,
  UnifiedApiId$inboundSchema,
  UnifiedApiId$outboundSchema,
} from "./unifiedapiid.js";

export type ConnectorsFilter = {
  /**
   * Name of Apideck Unified API
   */
  unifiedApi?: UnifiedApiId | undefined;
  /**
   * Status of the connector. Connectors with status live or beta are callable.
   */
  status?: ConnectorStatus | undefined;
};

/** @internal */
export const ConnectorsFilter$inboundSchema: z.ZodType<
  ConnectorsFilter,
  z.ZodTypeDef,
  unknown
> = z.object({
  unified_api: UnifiedApiId$inboundSchema.optional(),
  status: ConnectorStatus$inboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    "unified_api": "unifiedApi",
  });
});

/** @internal */
export type ConnectorsFilter$Outbound = {
  unified_api?: string | undefined;
  status?: string | undefined;
};

/** @internal */
export const ConnectorsFilter$outboundSchema: z.ZodType<
  ConnectorsFilter$Outbound,
  z.ZodTypeDef,
  ConnectorsFilter
> = z.object({
  unifiedApi: UnifiedApiId$outboundSchema.optional(),
  status: ConnectorStatus$outboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    unifiedApi: "unified_api",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ConnectorsFilter$ {
  /** @deprecated use `ConnectorsFilter$inboundSchema` instead. */
  export const inboundSchema = ConnectorsFilter$inboundSchema;
  /** @deprecated use `ConnectorsFilter$outboundSchema` instead. */
  export const outboundSchema = ConnectorsFilter$outboundSchema;
  /** @deprecated use `ConnectorsFilter$Outbound` instead. */
  export type Outbound = ConnectorsFilter$Outbound;
}

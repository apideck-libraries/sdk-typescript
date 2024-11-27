/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  ConsumerMetadata,
  ConsumerMetadata$inboundSchema,
  ConsumerMetadata$Outbound,
  ConsumerMetadata$outboundSchema,
} from "./consumermetadata.js";
import {
  Links,
  Links$inboundSchema,
  Links$Outbound,
  Links$outboundSchema,
} from "./links.js";
import {
  Meta,
  Meta$inboundSchema,
  Meta$Outbound,
  Meta$outboundSchema,
} from "./meta.js";
import {
  RequestCountAllocation,
  RequestCountAllocation$inboundSchema,
  RequestCountAllocation$Outbound,
  RequestCountAllocation$outboundSchema,
} from "./requestcountallocation.js";

export type Data = {
  consumerId?: string | undefined;
  applicationId?: string | undefined;
  /**
   * The metadata of the consumer. This is used to display the consumer in the sidebar. This is optional, but recommended.
   */
  metadata?: ConsumerMetadata | undefined;
  aggregatedRequestCount?: number | undefined;
  requestCounts?: RequestCountAllocation | undefined;
  created?: string | undefined;
  modified?: string | undefined;
  requestCountUpdated?: string | undefined;
  services?: Array<string> | undefined;
};

/**
 * Consumers
 */
export type GetConsumersResponse = {
  /**
   * HTTP Response Status Code
   */
  statusCode: number;
  /**
   * HTTP Response Status
   */
  status: string;
  data: Array<Data>;
  /**
   * Response metadata
   */
  meta?: Meta | undefined;
  /**
   * Links to navigate to previous or next pages through the API
   */
  links?: Links | undefined;
};

/** @internal */
export const Data$inboundSchema: z.ZodType<Data, z.ZodTypeDef, unknown> = z
  .object({
    consumer_id: z.string().optional(),
    application_id: z.string().optional(),
    metadata: ConsumerMetadata$inboundSchema.optional(),
    aggregated_request_count: z.number().optional(),
    request_counts: RequestCountAllocation$inboundSchema.optional(),
    created: z.string().optional(),
    modified: z.string().optional(),
    request_count_updated: z.string().optional(),
    services: z.array(z.string()).optional(),
  }).transform((v) => {
    return remap$(v, {
      "consumer_id": "consumerId",
      "application_id": "applicationId",
      "aggregated_request_count": "aggregatedRequestCount",
      "request_counts": "requestCounts",
      "request_count_updated": "requestCountUpdated",
    });
  });

/** @internal */
export type Data$Outbound = {
  consumer_id?: string | undefined;
  application_id?: string | undefined;
  metadata?: ConsumerMetadata$Outbound | undefined;
  aggregated_request_count?: number | undefined;
  request_counts?: RequestCountAllocation$Outbound | undefined;
  created?: string | undefined;
  modified?: string | undefined;
  request_count_updated?: string | undefined;
  services?: Array<string> | undefined;
};

/** @internal */
export const Data$outboundSchema: z.ZodType<Data$Outbound, z.ZodTypeDef, Data> =
  z.object({
    consumerId: z.string().optional(),
    applicationId: z.string().optional(),
    metadata: ConsumerMetadata$outboundSchema.optional(),
    aggregatedRequestCount: z.number().optional(),
    requestCounts: RequestCountAllocation$outboundSchema.optional(),
    created: z.string().optional(),
    modified: z.string().optional(),
    requestCountUpdated: z.string().optional(),
    services: z.array(z.string()).optional(),
  }).transform((v) => {
    return remap$(v, {
      consumerId: "consumer_id",
      applicationId: "application_id",
      aggregatedRequestCount: "aggregated_request_count",
      requestCounts: "request_counts",
      requestCountUpdated: "request_count_updated",
    });
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Data$ {
  /** @deprecated use `Data$inboundSchema` instead. */
  export const inboundSchema = Data$inboundSchema;
  /** @deprecated use `Data$outboundSchema` instead. */
  export const outboundSchema = Data$outboundSchema;
  /** @deprecated use `Data$Outbound` instead. */
  export type Outbound = Data$Outbound;
}

export function dataToJSON(data: Data): string {
  return JSON.stringify(Data$outboundSchema.parse(data));
}

export function dataFromJSON(
  jsonString: string,
): SafeParseResult<Data, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Data$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Data' from JSON`,
  );
}

/** @internal */
export const GetConsumersResponse$inboundSchema: z.ZodType<
  GetConsumersResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  status_code: z.number().int(),
  status: z.string(),
  data: z.array(z.lazy(() => Data$inboundSchema)),
  meta: Meta$inboundSchema.optional(),
  links: Links$inboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    "status_code": "statusCode",
  });
});

/** @internal */
export type GetConsumersResponse$Outbound = {
  status_code: number;
  status: string;
  data: Array<Data$Outbound>;
  meta?: Meta$Outbound | undefined;
  links?: Links$Outbound | undefined;
};

/** @internal */
export const GetConsumersResponse$outboundSchema: z.ZodType<
  GetConsumersResponse$Outbound,
  z.ZodTypeDef,
  GetConsumersResponse
> = z.object({
  statusCode: z.number().int(),
  status: z.string(),
  data: z.array(z.lazy(() => Data$outboundSchema)),
  meta: Meta$outboundSchema.optional(),
  links: Links$outboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    statusCode: "status_code",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GetConsumersResponse$ {
  /** @deprecated use `GetConsumersResponse$inboundSchema` instead. */
  export const inboundSchema = GetConsumersResponse$inboundSchema;
  /** @deprecated use `GetConsumersResponse$outboundSchema` instead. */
  export const outboundSchema = GetConsumersResponse$outboundSchema;
  /** @deprecated use `GetConsumersResponse$Outbound` instead. */
  export type Outbound = GetConsumersResponse$Outbound;
}

export function getConsumersResponseToJSON(
  getConsumersResponse: GetConsumersResponse,
): string {
  return JSON.stringify(
    GetConsumersResponse$outboundSchema.parse(getConsumersResponse),
  );
}

export function getConsumersResponseFromJSON(
  jsonString: string,
): SafeParseResult<GetConsumersResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetConsumersResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetConsumersResponse' from JSON`,
  );
}

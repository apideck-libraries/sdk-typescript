/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  Department,
  Department$inboundSchema,
  Department$Outbound,
  Department$outboundSchema,
} from "./department.js";
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

/**
 * Departments
 */
export type GetDepartmentsResponse = {
  /**
   * HTTP Response Status Code
   */
  statusCode: number;
  /**
   * HTTP Response Status
   */
  status: string;
  /**
   * Apideck ID of service provider
   */
  service: string;
  /**
   * Unified API resource name
   */
  resource: string;
  /**
   * Operation performed
   */
  operation: string;
  data: Array<Department>;
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
export const GetDepartmentsResponse$inboundSchema: z.ZodType<
  GetDepartmentsResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  status_code: z.number().int(),
  status: z.string(),
  service: z.string(),
  resource: z.string(),
  operation: z.string(),
  data: z.array(Department$inboundSchema),
  meta: Meta$inboundSchema.optional(),
  links: Links$inboundSchema.optional(),
}).transform((v) => {
  return remap$(v, {
    "status_code": "statusCode",
  });
});

/** @internal */
export type GetDepartmentsResponse$Outbound = {
  status_code: number;
  status: string;
  service: string;
  resource: string;
  operation: string;
  data: Array<Department$Outbound>;
  meta?: Meta$Outbound | undefined;
  links?: Links$Outbound | undefined;
};

/** @internal */
export const GetDepartmentsResponse$outboundSchema: z.ZodType<
  GetDepartmentsResponse$Outbound,
  z.ZodTypeDef,
  GetDepartmentsResponse
> = z.object({
  statusCode: z.number().int(),
  status: z.string(),
  service: z.string(),
  resource: z.string(),
  operation: z.string(),
  data: z.array(Department$outboundSchema),
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
export namespace GetDepartmentsResponse$ {
  /** @deprecated use `GetDepartmentsResponse$inboundSchema` instead. */
  export const inboundSchema = GetDepartmentsResponse$inboundSchema;
  /** @deprecated use `GetDepartmentsResponse$outboundSchema` instead. */
  export const outboundSchema = GetDepartmentsResponse$outboundSchema;
  /** @deprecated use `GetDepartmentsResponse$Outbound` instead. */
  export type Outbound = GetDepartmentsResponse$Outbound;
}

export function getDepartmentsResponseToJSON(
  getDepartmentsResponse: GetDepartmentsResponse,
): string {
  return JSON.stringify(
    GetDepartmentsResponse$outboundSchema.parse(getDepartmentsResponse),
  );
}

export function getDepartmentsResponseFromJSON(
  jsonString: string,
): SafeParseResult<GetDepartmentsResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => GetDepartmentsResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'GetDepartmentsResponse' from JSON`,
  );
}

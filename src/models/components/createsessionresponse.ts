/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type Data = {
  sessionUri: string;
  sessionToken: string;
};

/**
 * Session created
 */
export type CreateSessionResponse = {
  /**
   * HTTP Response Status Code
   */
  statusCode: number;
  /**
   * HTTP Response Status
   */
  status: string;
  data: Data;
};

/** @internal */
export const Data$inboundSchema: z.ZodType<Data, z.ZodTypeDef, unknown> = z
  .object({
    session_uri: z.string(),
    session_token: z.string(),
  }).transform((v) => {
    return remap$(v, {
      "session_uri": "sessionUri",
      "session_token": "sessionToken",
    });
  });

/** @internal */
export type Data$Outbound = {
  session_uri: string;
  session_token: string;
};

/** @internal */
export const Data$outboundSchema: z.ZodType<Data$Outbound, z.ZodTypeDef, Data> =
  z.object({
    sessionUri: z.string(),
    sessionToken: z.string(),
  }).transform((v) => {
    return remap$(v, {
      sessionUri: "session_uri",
      sessionToken: "session_token",
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
export const CreateSessionResponse$inboundSchema: z.ZodType<
  CreateSessionResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  status_code: z.number().int(),
  status: z.string(),
  data: z.lazy(() => Data$inboundSchema),
}).transform((v) => {
  return remap$(v, {
    "status_code": "statusCode",
  });
});

/** @internal */
export type CreateSessionResponse$Outbound = {
  status_code: number;
  status: string;
  data: Data$Outbound;
};

/** @internal */
export const CreateSessionResponse$outboundSchema: z.ZodType<
  CreateSessionResponse$Outbound,
  z.ZodTypeDef,
  CreateSessionResponse
> = z.object({
  statusCode: z.number().int(),
  status: z.string(),
  data: z.lazy(() => Data$outboundSchema),
}).transform((v) => {
  return remap$(v, {
    statusCode: "status_code",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateSessionResponse$ {
  /** @deprecated use `CreateSessionResponse$inboundSchema` instead. */
  export const inboundSchema = CreateSessionResponse$inboundSchema;
  /** @deprecated use `CreateSessionResponse$outboundSchema` instead. */
  export const outboundSchema = CreateSessionResponse$outboundSchema;
  /** @deprecated use `CreateSessionResponse$Outbound` instead. */
  export type Outbound = CreateSessionResponse$Outbound;
}

export function createSessionResponseToJSON(
  createSessionResponse: CreateSessionResponse,
): string {
  return JSON.stringify(
    CreateSessionResponse$outboundSchema.parse(createSessionResponse),
  );
}

export function createSessionResponseFromJSON(
  jsonString: string,
): SafeParseResult<CreateSessionResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CreateSessionResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreateSessionResponse' from JSON`,
  );
}

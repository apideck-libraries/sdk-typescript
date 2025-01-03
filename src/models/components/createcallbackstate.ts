/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type CreateCallbackState = {
  /**
   * The redirect URI to be used after the connection is created.
   */
  redirectUri?: string | undefined;
};

/** @internal */
export const CreateCallbackState$inboundSchema: z.ZodType<
  CreateCallbackState,
  z.ZodTypeDef,
  unknown
> = z.object({
  redirect_uri: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    "redirect_uri": "redirectUri",
  });
});

/** @internal */
export type CreateCallbackState$Outbound = {
  redirect_uri?: string | undefined;
};

/** @internal */
export const CreateCallbackState$outboundSchema: z.ZodType<
  CreateCallbackState$Outbound,
  z.ZodTypeDef,
  CreateCallbackState
> = z.object({
  redirectUri: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    redirectUri: "redirect_uri",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateCallbackState$ {
  /** @deprecated use `CreateCallbackState$inboundSchema` instead. */
  export const inboundSchema = CreateCallbackState$inboundSchema;
  /** @deprecated use `CreateCallbackState$outboundSchema` instead. */
  export const outboundSchema = CreateCallbackState$outboundSchema;
  /** @deprecated use `CreateCallbackState$Outbound` instead. */
  export type Outbound = CreateCallbackState$Outbound;
}

export function createCallbackStateToJSON(
  createCallbackState: CreateCallbackState,
): string {
  return JSON.stringify(
    CreateCallbackState$outboundSchema.parse(createCallbackState),
  );
}

export function createCallbackStateFromJSON(
  jsonString: string,
): SafeParseResult<CreateCallbackState, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CreateCallbackState$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CreateCallbackState' from JSON`,
  );
}

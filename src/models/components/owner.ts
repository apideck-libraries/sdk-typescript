/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type Owner = {
  /**
   * ID of the owner
   */
  id?: string | undefined;
  /**
   * Email of the owner
   */
  email?: string | null | undefined;
  /**
   * Name of the owner
   */
  name?: string | null | undefined;
};

/** @internal */
export const Owner$inboundSchema: z.ZodType<Owner, z.ZodTypeDef, unknown> = z
  .object({
    id: z.string().optional(),
    email: z.nullable(z.string()).optional(),
    name: z.nullable(z.string()).optional(),
  });

/** @internal */
export type Owner$Outbound = {
  id?: string | undefined;
  email?: string | null | undefined;
  name?: string | null | undefined;
};

/** @internal */
export const Owner$outboundSchema: z.ZodType<
  Owner$Outbound,
  z.ZodTypeDef,
  Owner
> = z.object({
  id: z.string().optional(),
  email: z.nullable(z.string()).optional(),
  name: z.nullable(z.string()).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Owner$ {
  /** @deprecated use `Owner$inboundSchema` instead. */
  export const inboundSchema = Owner$inboundSchema;
  /** @deprecated use `Owner$outboundSchema` instead. */
  export const outboundSchema = Owner$outboundSchema;
  /** @deprecated use `Owner$Outbound` instead. */
  export type Outbound = Owner$Outbound;
}

export function ownerToJSON(owner: Owner): string {
  return JSON.stringify(Owner$outboundSchema.parse(owner));
}

export function ownerFromJSON(
  jsonString: string,
): SafeParseResult<Owner, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Owner$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Owner' from JSON`,
  );
}

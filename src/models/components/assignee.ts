/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type Assignee = {
  /**
   * A unique identifier for an object.
   */
  id: string;
  username?: string | null | undefined;
};

/** @internal */
export const Assignee$inboundSchema: z.ZodType<
  Assignee,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
  username: z.nullable(z.string()).optional(),
});

/** @internal */
export type Assignee$Outbound = {
  id: string;
  username?: string | null | undefined;
};

/** @internal */
export const Assignee$outboundSchema: z.ZodType<
  Assignee$Outbound,
  z.ZodTypeDef,
  Assignee
> = z.object({
  id: z.string(),
  username: z.nullable(z.string()).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Assignee$ {
  /** @deprecated use `Assignee$inboundSchema` instead. */
  export const inboundSchema = Assignee$inboundSchema;
  /** @deprecated use `Assignee$outboundSchema` instead. */
  export const outboundSchema = Assignee$outboundSchema;
  /** @deprecated use `Assignee$Outbound` instead. */
  export type Outbound = Assignee$Outbound;
}

export function assigneeToJSON(assignee: Assignee): string {
  return JSON.stringify(Assignee$outboundSchema.parse(assignee));
}

export function assigneeFromJSON(
  jsonString: string,
): SafeParseResult<Assignee, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Assignee$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Assignee' from JSON`,
  );
}

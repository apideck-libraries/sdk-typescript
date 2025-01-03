/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type LinkedFolder = {
  /**
   * A unique identifier for an object.
   */
  id: string;
  /**
   * The name of the folder
   */
  name?: string | null | undefined;
};

/** @internal */
export const LinkedFolder$inboundSchema: z.ZodType<
  LinkedFolder,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
  name: z.nullable(z.string()).optional(),
});

/** @internal */
export type LinkedFolder$Outbound = {
  id: string;
  name?: string | null | undefined;
};

/** @internal */
export const LinkedFolder$outboundSchema: z.ZodType<
  LinkedFolder$Outbound,
  z.ZodTypeDef,
  LinkedFolder
> = z.object({
  id: z.string(),
  name: z.nullable(z.string()).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace LinkedFolder$ {
  /** @deprecated use `LinkedFolder$inboundSchema` instead. */
  export const inboundSchema = LinkedFolder$inboundSchema;
  /** @deprecated use `LinkedFolder$outboundSchema` instead. */
  export const outboundSchema = LinkedFolder$outboundSchema;
  /** @deprecated use `LinkedFolder$Outbound` instead. */
  export type Outbound = LinkedFolder$Outbound;
}

export function linkedFolderToJSON(linkedFolder: LinkedFolder): string {
  return JSON.stringify(LinkedFolder$outboundSchema.parse(linkedFolder));
}

export function linkedFolderFromJSON(
  jsonString: string,
): SafeParseResult<LinkedFolder, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => LinkedFolder$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'LinkedFolder' from JSON`,
  );
}

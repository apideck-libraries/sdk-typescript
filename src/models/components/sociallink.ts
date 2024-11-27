/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type SocialLink = {
  /**
   * Unique identifier of the social link
   */
  id?: string | null | undefined;
  /**
   * URL of the social link, e.g. https://www.twitter.com/apideck
   */
  url: string;
  /**
   * Type of the social link, e.g. twitter
   */
  type?: string | null | undefined;
};

/** @internal */
export const SocialLink$inboundSchema: z.ZodType<
  SocialLink,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.nullable(z.string()).optional(),
  url: z.string(),
  type: z.nullable(z.string()).optional(),
});

/** @internal */
export type SocialLink$Outbound = {
  id?: string | null | undefined;
  url: string;
  type?: string | null | undefined;
};

/** @internal */
export const SocialLink$outboundSchema: z.ZodType<
  SocialLink$Outbound,
  z.ZodTypeDef,
  SocialLink
> = z.object({
  id: z.nullable(z.string()).optional(),
  url: z.string(),
  type: z.nullable(z.string()).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace SocialLink$ {
  /** @deprecated use `SocialLink$inboundSchema` instead. */
  export const inboundSchema = SocialLink$inboundSchema;
  /** @deprecated use `SocialLink$outboundSchema` instead. */
  export const outboundSchema = SocialLink$outboundSchema;
  /** @deprecated use `SocialLink$Outbound` instead. */
  export type Outbound = SocialLink$Outbound;
}

export function socialLinkToJSON(socialLink: SocialLink): string {
  return JSON.stringify(SocialLink$outboundSchema.parse(socialLink));
}

export function socialLinkFromJSON(
  jsonString: string,
): SafeParseResult<SocialLink, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => SocialLink$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'SocialLink' from JSON`,
  );
}

/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

/**
 * The type of website
 */
export const WebsiteType = {
  Primary: "primary",
  Secondary: "secondary",
  Work: "work",
  Personal: "personal",
  Other: "other",
} as const;
/**
 * The type of website
 */
export type WebsiteType = ClosedEnum<typeof WebsiteType>;

export type Website = {
  /**
   * Unique identifier for the website
   */
  id?: string | null | undefined;
  /**
   * The website URL
   */
  url: string;
  /**
   * The type of website
   */
  type?: WebsiteType | null | undefined;
};

/** @internal */
export const WebsiteType$inboundSchema: z.ZodNativeEnum<typeof WebsiteType> = z
  .nativeEnum(WebsiteType);

/** @internal */
export const WebsiteType$outboundSchema: z.ZodNativeEnum<typeof WebsiteType> =
  WebsiteType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace WebsiteType$ {
  /** @deprecated use `WebsiteType$inboundSchema` instead. */
  export const inboundSchema = WebsiteType$inboundSchema;
  /** @deprecated use `WebsiteType$outboundSchema` instead. */
  export const outboundSchema = WebsiteType$outboundSchema;
}

/** @internal */
export const Website$inboundSchema: z.ZodType<Website, z.ZodTypeDef, unknown> =
  z.object({
    id: z.nullable(z.string()).optional(),
    url: z.string(),
    type: z.nullable(WebsiteType$inboundSchema).optional(),
  });

/** @internal */
export type Website$Outbound = {
  id?: string | null | undefined;
  url: string;
  type?: string | null | undefined;
};

/** @internal */
export const Website$outboundSchema: z.ZodType<
  Website$Outbound,
  z.ZodTypeDef,
  Website
> = z.object({
  id: z.nullable(z.string()).optional(),
  url: z.string(),
  type: z.nullable(WebsiteType$outboundSchema).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Website$ {
  /** @deprecated use `Website$inboundSchema` instead. */
  export const inboundSchema = Website$inboundSchema;
  /** @deprecated use `Website$outboundSchema` instead. */
  export const outboundSchema = Website$outboundSchema;
  /** @deprecated use `Website$Outbound` instead. */
  export type Outbound = Website$Outbound;
}

export function websiteToJSON(website: Website): string {
  return JSON.stringify(Website$outboundSchema.parse(website));
}

export function websiteFromJSON(
  jsonString: string,
): SafeParseResult<Website, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Website$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Website' from JSON`,
  );
}

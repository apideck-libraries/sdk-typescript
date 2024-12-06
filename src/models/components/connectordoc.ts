/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

/**
 * Audience for the doc.
 */
export const Audience = {
  ApplicationOwner: "application_owner",
  Consumer: "consumer",
} as const;
/**
 * Audience for the doc.
 */
export type Audience = ClosedEnum<typeof Audience>;

/**
 * Format of the doc.
 */
export const Format = {
  Markdown: "markdown",
} as const;
/**
 * Format of the doc.
 */
export type Format = ClosedEnum<typeof Format>;

export type ConnectorDoc = {
  /**
   * A unique identifier for an object.
   */
  id?: string | undefined;
  /**
   * Name of the doc.
   */
  name?: string | undefined;
  /**
   * Audience for the doc.
   */
  audience?: Audience | undefined;
  /**
   * Format of the doc.
   */
  format?: Format | undefined;
  /**
   * Link to fetch the content of the doc.
   */
  url?: string | undefined;
};

/** @internal */
export const Audience$inboundSchema: z.ZodNativeEnum<typeof Audience> = z
  .nativeEnum(Audience);

/** @internal */
export const Audience$outboundSchema: z.ZodNativeEnum<typeof Audience> =
  Audience$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Audience$ {
  /** @deprecated use `Audience$inboundSchema` instead. */
  export const inboundSchema = Audience$inboundSchema;
  /** @deprecated use `Audience$outboundSchema` instead. */
  export const outboundSchema = Audience$outboundSchema;
}

/** @internal */
export const Format$inboundSchema: z.ZodNativeEnum<typeof Format> = z
  .nativeEnum(Format);

/** @internal */
export const Format$outboundSchema: z.ZodNativeEnum<typeof Format> =
  Format$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Format$ {
  /** @deprecated use `Format$inboundSchema` instead. */
  export const inboundSchema = Format$inboundSchema;
  /** @deprecated use `Format$outboundSchema` instead. */
  export const outboundSchema = Format$outboundSchema;
}

/** @internal */
export const ConnectorDoc$inboundSchema: z.ZodType<
  ConnectorDoc,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string().optional(),
  name: z.string().optional(),
  audience: Audience$inboundSchema.optional(),
  format: Format$inboundSchema.optional(),
  url: z.string().optional(),
});

/** @internal */
export type ConnectorDoc$Outbound = {
  id?: string | undefined;
  name?: string | undefined;
  audience?: string | undefined;
  format?: string | undefined;
  url?: string | undefined;
};

/** @internal */
export const ConnectorDoc$outboundSchema: z.ZodType<
  ConnectorDoc$Outbound,
  z.ZodTypeDef,
  ConnectorDoc
> = z.object({
  id: z.string().optional(),
  name: z.string().optional(),
  audience: Audience$outboundSchema.optional(),
  format: Format$outboundSchema.optional(),
  url: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ConnectorDoc$ {
  /** @deprecated use `ConnectorDoc$inboundSchema` instead. */
  export const inboundSchema = ConnectorDoc$inboundSchema;
  /** @deprecated use `ConnectorDoc$outboundSchema` instead. */
  export const outboundSchema = ConnectorDoc$outboundSchema;
  /** @deprecated use `ConnectorDoc$Outbound` instead. */
  export type Outbound = ConnectorDoc$Outbound;
}

export function connectorDocToJSON(connectorDoc: ConnectorDoc): string {
  return JSON.stringify(ConnectorDoc$outboundSchema.parse(connectorDoc));
}

export function connectorDocFromJSON(
  jsonString: string,
): SafeParseResult<ConnectorDoc, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ConnectorDoc$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ConnectorDoc' from JSON`,
  );
}

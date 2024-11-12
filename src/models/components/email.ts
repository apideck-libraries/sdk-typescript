/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";

/**
 * Email type
 */
export const EmailType = {
  Primary: "primary",
  Secondary: "secondary",
  Work: "work",
  Personal: "personal",
  Billing: "billing",
  Other: "other",
} as const;
/**
 * Email type
 */
export type EmailType = ClosedEnum<typeof EmailType>;

export type Email = {
  /**
   * Unique identifier for the email address
   */
  id?: string | null | undefined;
  /**
   * Email address
   */
  email: string | null;
  /**
   * Email type
   */
  type?: EmailType | null | undefined;
};

/** @internal */
export const EmailType$inboundSchema: z.ZodNativeEnum<typeof EmailType> = z
  .nativeEnum(EmailType);

/** @internal */
export const EmailType$outboundSchema: z.ZodNativeEnum<typeof EmailType> =
  EmailType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace EmailType$ {
  /** @deprecated use `EmailType$inboundSchema` instead. */
  export const inboundSchema = EmailType$inboundSchema;
  /** @deprecated use `EmailType$outboundSchema` instead. */
  export const outboundSchema = EmailType$outboundSchema;
}

/** @internal */
export const Email$inboundSchema: z.ZodType<Email, z.ZodTypeDef, unknown> = z
  .object({
    id: z.nullable(z.string()).optional(),
    email: z.nullable(z.string()),
    type: z.nullable(EmailType$inboundSchema).optional(),
  });

/** @internal */
export type Email$Outbound = {
  id?: string | null | undefined;
  email: string | null;
  type?: string | null | undefined;
};

/** @internal */
export const Email$outboundSchema: z.ZodType<
  Email$Outbound,
  z.ZodTypeDef,
  Email
> = z.object({
  id: z.nullable(z.string()).optional(),
  email: z.nullable(z.string()),
  type: z.nullable(EmailType$outboundSchema).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Email$ {
  /** @deprecated use `Email$inboundSchema` instead. */
  export const inboundSchema = Email$inboundSchema;
  /** @deprecated use `Email$outboundSchema` instead. */
  export const outboundSchema = Email$outboundSchema;
  /** @deprecated use `Email$Outbound` instead. */
  export type Outbound = Email$Outbound;
}

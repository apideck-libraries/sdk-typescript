/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";

export type Credentials = {
  /**
   * The refresh token can be used to obtain a new access token.
   */
  refreshToken?: string | null | undefined;
  /**
   * Access token
   */
  accessToken?: string | undefined;
  /**
   * The datetime at which the token was issued. If omitted the token will be queued for refresh.
   */
  issuedAt?: Date | null | undefined;
  /**
   * The number of seconds until the token expires. If omitted the token will be queued for refresh.
   */
  expiresIn?: number | null | undefined;
};

/**
 * Connection settings. Values will persist to `form_fields` with corresponding id
 */
export type ConnectionImportDataSettings = {};

export type ConnectionImportData = {
  credentials?: Credentials | undefined;
  /**
   * Connection settings. Values will persist to `form_fields` with corresponding id
   */
  settings?: ConnectionImportDataSettings | null | undefined;
  /**
   * Attach your own consumer specific metadata
   */
  metadata?: { [k: string]: any } | null | undefined;
};

/** @internal */
export const Credentials$inboundSchema: z.ZodType<
  Credentials,
  z.ZodTypeDef,
  unknown
> = z.object({
  refresh_token: z.nullable(z.string()).optional(),
  access_token: z.string().optional(),
  issued_at: z.nullable(
    z.string().datetime({ offset: true }).transform(v => new Date(v)),
  ).optional(),
  expires_in: z.nullable(z.number().int()).optional(),
}).transform((v) => {
  return remap$(v, {
    "refresh_token": "refreshToken",
    "access_token": "accessToken",
    "issued_at": "issuedAt",
    "expires_in": "expiresIn",
  });
});

/** @internal */
export type Credentials$Outbound = {
  refresh_token?: string | null | undefined;
  access_token?: string | undefined;
  issued_at?: string | null | undefined;
  expires_in?: number | null | undefined;
};

/** @internal */
export const Credentials$outboundSchema: z.ZodType<
  Credentials$Outbound,
  z.ZodTypeDef,
  Credentials
> = z.object({
  refreshToken: z.nullable(z.string()).optional(),
  accessToken: z.string().optional(),
  issuedAt: z.nullable(z.date().transform(v => v.toISOString())).optional(),
  expiresIn: z.nullable(z.number().int()).optional(),
}).transform((v) => {
  return remap$(v, {
    refreshToken: "refresh_token",
    accessToken: "access_token",
    issuedAt: "issued_at",
    expiresIn: "expires_in",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Credentials$ {
  /** @deprecated use `Credentials$inboundSchema` instead. */
  export const inboundSchema = Credentials$inboundSchema;
  /** @deprecated use `Credentials$outboundSchema` instead. */
  export const outboundSchema = Credentials$outboundSchema;
  /** @deprecated use `Credentials$Outbound` instead. */
  export type Outbound = Credentials$Outbound;
}

/** @internal */
export const ConnectionImportDataSettings$inboundSchema: z.ZodType<
  ConnectionImportDataSettings,
  z.ZodTypeDef,
  unknown
> = z.object({});

/** @internal */
export type ConnectionImportDataSettings$Outbound = {};

/** @internal */
export const ConnectionImportDataSettings$outboundSchema: z.ZodType<
  ConnectionImportDataSettings$Outbound,
  z.ZodTypeDef,
  ConnectionImportDataSettings
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ConnectionImportDataSettings$ {
  /** @deprecated use `ConnectionImportDataSettings$inboundSchema` instead. */
  export const inboundSchema = ConnectionImportDataSettings$inboundSchema;
  /** @deprecated use `ConnectionImportDataSettings$outboundSchema` instead. */
  export const outboundSchema = ConnectionImportDataSettings$outboundSchema;
  /** @deprecated use `ConnectionImportDataSettings$Outbound` instead. */
  export type Outbound = ConnectionImportDataSettings$Outbound;
}

/** @internal */
export const ConnectionImportData$inboundSchema: z.ZodType<
  ConnectionImportData,
  z.ZodTypeDef,
  unknown
> = z.object({
  credentials: z.lazy(() => Credentials$inboundSchema).optional(),
  settings: z.nullable(z.lazy(() => ConnectionImportDataSettings$inboundSchema))
    .optional(),
  metadata: z.nullable(z.record(z.any())).optional(),
});

/** @internal */
export type ConnectionImportData$Outbound = {
  credentials?: Credentials$Outbound | undefined;
  settings?: ConnectionImportDataSettings$Outbound | null | undefined;
  metadata?: { [k: string]: any } | null | undefined;
};

/** @internal */
export const ConnectionImportData$outboundSchema: z.ZodType<
  ConnectionImportData$Outbound,
  z.ZodTypeDef,
  ConnectionImportData
> = z.object({
  credentials: z.lazy(() => Credentials$outboundSchema).optional(),
  settings: z.nullable(
    z.lazy(() => ConnectionImportDataSettings$outboundSchema),
  ).optional(),
  metadata: z.nullable(z.record(z.any())).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ConnectionImportData$ {
  /** @deprecated use `ConnectionImportData$inboundSchema` instead. */
  export const inboundSchema = ConnectionImportData$inboundSchema;
  /** @deprecated use `ConnectionImportData$outboundSchema` instead. */
  export const outboundSchema = ConnectionImportData$outboundSchema;
  /** @deprecated use `ConnectionImportData$Outbound` instead. */
  export type Outbound = ConnectionImportData$Outbound;
}

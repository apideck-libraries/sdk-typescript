/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  ConsumerMetadata,
  ConsumerMetadata$inboundSchema,
  ConsumerMetadata$Outbound,
  ConsumerMetadata$outboundSchema,
} from "./consumermetadata.js";
import {
  UnifiedApiId,
  UnifiedApiId$inboundSchema,
  UnifiedApiId$outboundSchema,
} from "./unifiedapiid.js";

export const AllowActions = {
  Delete: "delete",
  Disconnect: "disconnect",
  Reauthorize: "reauthorize",
  Disable: "disable",
} as const;
export type AllowActions = ClosedEnum<typeof AllowActions>;

/**
 * Settings to change the way the Vault is displayed.
 */
export type Settings = {
  /**
   * Provide the IDs of the Unified APIs you want to be visible. Leaving it empty or omitting this field will show all Unified APIs.
   */
  unifiedApis?: Array<UnifiedApiId> | undefined;
  /**
   * A boolean that controls the display of the configurable resources for an integration. When set to true, the resource configuration options will be hidden and not shown to the user. When set to false, the resource configuration options will be displayed to the user.
   */
  hideResourceSettings?: boolean | undefined;
  /**
   * Configure [Vault](/apis/vault/reference#section/Get-Started) to show a banner informing the logged in user is in a test environment.
   */
  sandboxMode?: boolean | undefined;
  /**
   * Configure [Vault](/apis/vault/reference#section/Get-Started) to run in isolation mode, meaning it only shows the connection settings and hides the navigation items.
   */
  isolationMode?: boolean | undefined;
  /**
   * The duration of time the session is valid for (maximum 1 week).
   */
  sessionLength?: string | undefined;
  /**
   * Configure [Vault](/apis/vault/reference#section/Get-Started) to show the logs page. Defaults to `true`.
   */
  showLogs?: boolean | undefined;
  /**
   * Configure [Vault](/apis/vault/reference#section/Get-Started) to show the suggestions page. Defaults to `false`.
   */
  showSuggestions?: boolean | undefined;
  /**
   * Configure [Vault](/apis/vault/reference#section/Get-Started) to show the sidebar. Defaults to `true`.
   */
  showSidebar?: boolean | undefined;
  /**
   * Automatically redirect to redirect uri after the connection has been configured as callable. Defaults to `false`.
   */
  autoRedirect?: boolean | undefined;
  /**
   * Hide Apideck connection guides in [Vault](/apis/vault/reference#section/Get-Started). Defaults to `false`.
   */
  hideGuides?: boolean | undefined;
  /**
   * Hide actions from your users in [Vault](/apis/vault/reference#section/Get-Started). Actions in `allow_actions` will be shown on a connection in Vault.
   *
   * @remarks
   * Available actions are: `delete`, `disconnect`, `reauthorize` and `disable`.
   * Empty array will hide all actions. By default all actions are visible.
   */
  allowActions?: Array<AllowActions> | undefined;
};

/**
 * Theming options to change the look and feel of Vault.
 */
export type Theme = {
  /**
   * The URL to the favicon to use for Vault.
   */
  favicon?: string | undefined;
  /**
   * The URL to the logo to use for Vault.
   */
  logo?: string | undefined;
  /**
   * The primary color to use for Vault.
   */
  primaryColor?: string | undefined;
  /**
   * The background color to use for the sidebar.
   */
  sidepanelBackgroundColor?: string | undefined;
  /**
   * The text color to use for the sidebar.
   */
  sidepanelTextColor?: string | undefined;
  /**
   * The name that will be shown in the sidebar.
   */
  vaultName?: string | undefined;
  /**
   * The URL to the privacy policy that will be shown in the sidebar.
   */
  privacyUrl?: string | undefined;
  /**
   * The URL to the terms and conditions that will be shown in the sidebar.
   */
  termsUrl?: string | undefined;
};

export type Session = {
  /**
   * The metadata of the consumer. This is used to display the consumer in the sidebar. This is optional, but recommended.
   */
  consumerMetadata?: ConsumerMetadata | undefined;
  /**
   * The URL to redirect the user to after the session has been configured.
   */
  redirectUri?: string | undefined;
  /**
   * Settings to change the way the Vault is displayed.
   */
  settings?: Settings | undefined;
  /**
   * Theming options to change the look and feel of Vault.
   */
  theme?: Theme | undefined;
  /**
   * Custom consumer settings that are passed as part of the session.
   */
  customConsumerSettings?: { [k: string]: any } | undefined;
};

/** @internal */
export const AllowActions$inboundSchema: z.ZodNativeEnum<typeof AllowActions> =
  z.nativeEnum(AllowActions);

/** @internal */
export const AllowActions$outboundSchema: z.ZodNativeEnum<typeof AllowActions> =
  AllowActions$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AllowActions$ {
  /** @deprecated use `AllowActions$inboundSchema` instead. */
  export const inboundSchema = AllowActions$inboundSchema;
  /** @deprecated use `AllowActions$outboundSchema` instead. */
  export const outboundSchema = AllowActions$outboundSchema;
}

/** @internal */
export const Settings$inboundSchema: z.ZodType<
  Settings,
  z.ZodTypeDef,
  unknown
> = z.object({
  unified_apis: z.array(UnifiedApiId$inboundSchema).optional(),
  hide_resource_settings: z.boolean().default(false),
  sandbox_mode: z.boolean().default(false),
  isolation_mode: z.boolean().default(false),
  session_length: z.string().default("1h"),
  show_logs: z.boolean().default(true),
  show_suggestions: z.boolean().default(false),
  show_sidebar: z.boolean().default(true),
  auto_redirect: z.boolean().default(false),
  hide_guides: z.boolean().default(false),
  allow_actions: z.array(AllowActions$inboundSchema).optional(),
}).transform((v) => {
  return remap$(v, {
    "unified_apis": "unifiedApis",
    "hide_resource_settings": "hideResourceSettings",
    "sandbox_mode": "sandboxMode",
    "isolation_mode": "isolationMode",
    "session_length": "sessionLength",
    "show_logs": "showLogs",
    "show_suggestions": "showSuggestions",
    "show_sidebar": "showSidebar",
    "auto_redirect": "autoRedirect",
    "hide_guides": "hideGuides",
    "allow_actions": "allowActions",
  });
});

/** @internal */
export type Settings$Outbound = {
  unified_apis?: Array<string> | undefined;
  hide_resource_settings: boolean;
  sandbox_mode: boolean;
  isolation_mode: boolean;
  session_length: string;
  show_logs: boolean;
  show_suggestions: boolean;
  show_sidebar: boolean;
  auto_redirect: boolean;
  hide_guides: boolean;
  allow_actions?: Array<string> | undefined;
};

/** @internal */
export const Settings$outboundSchema: z.ZodType<
  Settings$Outbound,
  z.ZodTypeDef,
  Settings
> = z.object({
  unifiedApis: z.array(UnifiedApiId$outboundSchema).optional(),
  hideResourceSettings: z.boolean().default(false),
  sandboxMode: z.boolean().default(false),
  isolationMode: z.boolean().default(false),
  sessionLength: z.string().default("1h"),
  showLogs: z.boolean().default(true),
  showSuggestions: z.boolean().default(false),
  showSidebar: z.boolean().default(true),
  autoRedirect: z.boolean().default(false),
  hideGuides: z.boolean().default(false),
  allowActions: z.array(AllowActions$outboundSchema).optional(),
}).transform((v) => {
  return remap$(v, {
    unifiedApis: "unified_apis",
    hideResourceSettings: "hide_resource_settings",
    sandboxMode: "sandbox_mode",
    isolationMode: "isolation_mode",
    sessionLength: "session_length",
    showLogs: "show_logs",
    showSuggestions: "show_suggestions",
    showSidebar: "show_sidebar",
    autoRedirect: "auto_redirect",
    hideGuides: "hide_guides",
    allowActions: "allow_actions",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Settings$ {
  /** @deprecated use `Settings$inboundSchema` instead. */
  export const inboundSchema = Settings$inboundSchema;
  /** @deprecated use `Settings$outboundSchema` instead. */
  export const outboundSchema = Settings$outboundSchema;
  /** @deprecated use `Settings$Outbound` instead. */
  export type Outbound = Settings$Outbound;
}

export function settingsToJSON(settings: Settings): string {
  return JSON.stringify(Settings$outboundSchema.parse(settings));
}

export function settingsFromJSON(
  jsonString: string,
): SafeParseResult<Settings, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Settings$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Settings' from JSON`,
  );
}

/** @internal */
export const Theme$inboundSchema: z.ZodType<Theme, z.ZodTypeDef, unknown> = z
  .object({
    favicon: z.string().optional(),
    logo: z.string().optional(),
    primary_color: z.string().optional(),
    sidepanel_background_color: z.string().optional(),
    sidepanel_text_color: z.string().optional(),
    vault_name: z.string().optional(),
    privacy_url: z.string().optional(),
    terms_url: z.string().optional(),
  }).transform((v) => {
    return remap$(v, {
      "primary_color": "primaryColor",
      "sidepanel_background_color": "sidepanelBackgroundColor",
      "sidepanel_text_color": "sidepanelTextColor",
      "vault_name": "vaultName",
      "privacy_url": "privacyUrl",
      "terms_url": "termsUrl",
    });
  });

/** @internal */
export type Theme$Outbound = {
  favicon?: string | undefined;
  logo?: string | undefined;
  primary_color?: string | undefined;
  sidepanel_background_color?: string | undefined;
  sidepanel_text_color?: string | undefined;
  vault_name?: string | undefined;
  privacy_url?: string | undefined;
  terms_url?: string | undefined;
};

/** @internal */
export const Theme$outboundSchema: z.ZodType<
  Theme$Outbound,
  z.ZodTypeDef,
  Theme
> = z.object({
  favicon: z.string().optional(),
  logo: z.string().optional(),
  primaryColor: z.string().optional(),
  sidepanelBackgroundColor: z.string().optional(),
  sidepanelTextColor: z.string().optional(),
  vaultName: z.string().optional(),
  privacyUrl: z.string().optional(),
  termsUrl: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    primaryColor: "primary_color",
    sidepanelBackgroundColor: "sidepanel_background_color",
    sidepanelTextColor: "sidepanel_text_color",
    vaultName: "vault_name",
    privacyUrl: "privacy_url",
    termsUrl: "terms_url",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Theme$ {
  /** @deprecated use `Theme$inboundSchema` instead. */
  export const inboundSchema = Theme$inboundSchema;
  /** @deprecated use `Theme$outboundSchema` instead. */
  export const outboundSchema = Theme$outboundSchema;
  /** @deprecated use `Theme$Outbound` instead. */
  export type Outbound = Theme$Outbound;
}

export function themeToJSON(theme: Theme): string {
  return JSON.stringify(Theme$outboundSchema.parse(theme));
}

export function themeFromJSON(
  jsonString: string,
): SafeParseResult<Theme, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Theme$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Theme' from JSON`,
  );
}

/** @internal */
export const Session$inboundSchema: z.ZodType<Session, z.ZodTypeDef, unknown> =
  z.object({
    consumer_metadata: ConsumerMetadata$inboundSchema.optional(),
    redirect_uri: z.string().optional(),
    settings: z.lazy(() => Settings$inboundSchema).optional(),
    theme: z.lazy(() => Theme$inboundSchema).optional(),
    custom_consumer_settings: z.record(z.any()).optional(),
  }).transform((v) => {
    return remap$(v, {
      "consumer_metadata": "consumerMetadata",
      "redirect_uri": "redirectUri",
      "custom_consumer_settings": "customConsumerSettings",
    });
  });

/** @internal */
export type Session$Outbound = {
  consumer_metadata?: ConsumerMetadata$Outbound | undefined;
  redirect_uri?: string | undefined;
  settings?: Settings$Outbound | undefined;
  theme?: Theme$Outbound | undefined;
  custom_consumer_settings?: { [k: string]: any } | undefined;
};

/** @internal */
export const Session$outboundSchema: z.ZodType<
  Session$Outbound,
  z.ZodTypeDef,
  Session
> = z.object({
  consumerMetadata: ConsumerMetadata$outboundSchema.optional(),
  redirectUri: z.string().optional(),
  settings: z.lazy(() => Settings$outboundSchema).optional(),
  theme: z.lazy(() => Theme$outboundSchema).optional(),
  customConsumerSettings: z.record(z.any()).optional(),
}).transform((v) => {
  return remap$(v, {
    consumerMetadata: "consumer_metadata",
    redirectUri: "redirect_uri",
    customConsumerSettings: "custom_consumer_settings",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Session$ {
  /** @deprecated use `Session$inboundSchema` instead. */
  export const inboundSchema = Session$inboundSchema;
  /** @deprecated use `Session$outboundSchema` instead. */
  export const outboundSchema = Session$outboundSchema;
  /** @deprecated use `Session$Outbound` instead. */
  export type Outbound = Session$Outbound;
}

export function sessionToJSON(session: Session): string {
  return JSON.stringify(Session$outboundSchema.parse(session));
}

export function sessionFromJSON(
  jsonString: string,
): SafeParseResult<Session, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Session$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Session' from JSON`,
  );
}

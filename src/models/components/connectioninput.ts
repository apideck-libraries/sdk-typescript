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
  AuthType,
  AuthType$inboundSchema,
  AuthType$outboundSchema,
} from "./authtype.js";
import {
  ConnectionState,
  ConnectionState$inboundSchema,
  ConnectionState$outboundSchema,
} from "./connectionstate.js";
import {
  CustomMapping,
  CustomMapping$inboundSchema,
  CustomMapping$Outbound,
  CustomMapping$outboundSchema,
} from "./custommapping.js";
import {
  CustomMappingInput,
  CustomMappingInput$inboundSchema,
  CustomMappingInput$Outbound,
  CustomMappingInput$outboundSchema,
} from "./custommappinginput.js";
import {
  FormField,
  FormField$inboundSchema,
  FormField$Outbound,
  FormField$outboundSchema,
} from "./formfield.js";
import {
  FormFieldOption,
  FormFieldOption$inboundSchema,
  FormFieldOption$Outbound,
  FormFieldOption$outboundSchema,
} from "./formfieldoption.js";
import {
  IntegrationState,
  IntegrationState$inboundSchema,
  IntegrationState$outboundSchema,
} from "./integrationstate.js";
import {
  OAuthGrantType,
  OAuthGrantType$inboundSchema,
  OAuthGrantType$outboundSchema,
} from "./oauthgranttype.js";
import {
  WebhookSubscription,
  WebhookSubscription$inboundSchema,
  WebhookSubscription$Outbound,
  WebhookSubscription$outboundSchema,
} from "./webhooksubscription.js";

export type Value5 = string | number | number;

export type ConnectionValue =
  | string
  | number
  | number
  | boolean
  | Array<string | number | number>;

export type ConnectionDefaults = {
  id?: string | undefined;
  options?: Array<FormFieldOption> | undefined;
  value?:
    | string
    | number
    | number
    | boolean
    | Array<string | number | number>
    | undefined;
};

export type ConnectionConfiguration = {
  resource?: string | undefined;
  defaults?: Array<ConnectionDefaults> | undefined;
};

export type ConnectionInput = {
  /**
   * Whether the connection is enabled or not. You can enable or disable a connection using the Update Connection API.
   */
  enabled?: boolean | undefined;
  /**
   * Connection settings. Values will persist to `form_fields` with corresponding id
   */
  settings?: { [k: string]: any } | null | undefined;
  /**
   * Attach your own consumer specific metadata
   */
  metadata?: { [k: string]: any } | null | undefined;
  configuration?: Array<ConnectionConfiguration> | undefined;
  /**
   * List of custom mappings configured for this connection
   */
  customMappings?: Array<CustomMappingInput> | undefined;
};

/**
 * Status of the connection.
 */
export const ConnectionStatus = {
  Live: "live",
  Upcoming: "upcoming",
  Requested: "requested",
} as const;
/**
 * Status of the connection.
 */
export type ConnectionStatus = ClosedEnum<typeof ConnectionStatus>;

export const Target = {
  CustomFields: "custom_fields",
  Resource: "resource",
} as const;
export type Target = ClosedEnum<typeof Target>;

export type Defaults = {
  target?: Target | undefined;
  id?: string | undefined;
  options?: Array<FormFieldOption> | undefined;
  value?:
    | string
    | number
    | number
    | boolean
    | Array<string | number | number>
    | undefined;
};

export type Configuration = {
  resource?: string | undefined;
  defaults?: Array<Defaults> | undefined;
};

export type Connection = {
  /**
   * The unique identifier of the connection.
   */
  id?: string | undefined;
  /**
   * The ID of the service this connection belongs to.
   */
  serviceId?: string | undefined;
  /**
   * The name of the connection
   */
  name?: string | undefined;
  tagLine?: string | undefined;
  /**
   * The unified API category where the connection belongs to.
   */
  unifiedApi?: string | undefined;
  /**
   * [Connection state flow](#section/Connection-state)
   */
  state?: ConnectionState | undefined;
  /**
   * The current state of the Integration.
   */
  integrationState?: IntegrationState | undefined;
  /**
   * Type of authorization used by the connector
   */
  authType?: AuthType | undefined;
  /**
   * OAuth grant type used by the connector. More info: https://oauth.net/2/grant-types
   */
  oauthGrantType?: OAuthGrantType | undefined;
  /**
   * Status of the connection.
   */
  status?: ConnectionStatus | undefined;
  /**
   * Whether the connection is enabled or not. You can enable or disable a connection using the Update Connection API.
   */
  enabled?: boolean | undefined;
  /**
   * The website URL of the connection
   */
  website?: string | undefined;
  /**
   * A visual icon of the connection, that will be shown in the Vault
   */
  icon?: string | undefined;
  /**
   * The logo of the connection, that will be shown in the Vault
   */
  logo?: string | undefined;
  /**
   * The OAuth redirect URI. Redirect your users to this URI to let them authorize your app in the connector's UI. Before you can use this URI, you must add `redirect_uri` as a query parameter to the `authorize_url`. Be sure to URL encode the `redirect_uri` part. Your users will be redirected to this `redirect_uri` after they granted access to your app in the connector's UI.
   */
  authorizeUrl?: string | null | undefined;
  /**
   * The OAuth revoke URI. Redirect your users to this URI to revoke this connection. Before you can use this URI, you must add `redirect_uri` as a query parameter. Your users will be redirected to this `redirect_uri` after they granted access to your app in the connector's UI.
   */
  revokeUrl?: string | null | undefined;
  /**
   * Connection settings. Values will persist to `form_fields` with corresponding id
   */
  settings?: { [k: string]: any } | null | undefined;
  /**
   * Attach your own consumer specific metadata
   */
  metadata?: { [k: string]: any } | null | undefined;
  /**
   * The settings that are wanted to create a connection.
   */
  formFields?: Array<FormField> | undefined;
  configuration?: Array<Configuration> | undefined;
  configurableResources?: Array<string> | undefined;
  resourceSchemaSupport?: Array<string> | undefined;
  resourceSettingsSupport?: Array<string> | undefined;
  validationSupport?: boolean | undefined;
  schemaSupport?: boolean | undefined;
  /**
   * List of settings that are required to be configured on integration before authorization can occur
   */
  settingsRequiredForAuthorization?: Array<string> | undefined;
  subscriptions?: Array<WebhookSubscription> | undefined;
  /**
   * Whether the connector has a guide available in the developer docs or not (https://docs.apideck.com/connectors/{service_id}/docs/consumer+connection).
   */
  hasGuide?: boolean | undefined;
  createdAt?: number | undefined;
  /**
   * List of custom mappings configured for this connection
   */
  customMappings?: Array<CustomMapping> | undefined;
  updatedAt?: number | null | undefined;
};

/** @internal */
export const Value5$inboundSchema: z.ZodType<Value5, z.ZodTypeDef, unknown> = z
  .union([z.string(), z.number().int(), z.number()]);

/** @internal */
export type Value5$Outbound = string | number | number;

/** @internal */
export const Value5$outboundSchema: z.ZodType<
  Value5$Outbound,
  z.ZodTypeDef,
  Value5
> = z.union([z.string(), z.number().int(), z.number()]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Value5$ {
  /** @deprecated use `Value5$inboundSchema` instead. */
  export const inboundSchema = Value5$inboundSchema;
  /** @deprecated use `Value5$outboundSchema` instead. */
  export const outboundSchema = Value5$outboundSchema;
  /** @deprecated use `Value5$Outbound` instead. */
  export type Outbound = Value5$Outbound;
}

export function value5ToJSON(value5: Value5): string {
  return JSON.stringify(Value5$outboundSchema.parse(value5));
}

export function value5FromJSON(
  jsonString: string,
): SafeParseResult<Value5, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Value5$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Value5' from JSON`,
  );
}

/** @internal */
export const ConnectionValue$inboundSchema: z.ZodType<
  ConnectionValue,
  z.ZodTypeDef,
  unknown
> = z.union([
  z.string(),
  z.number().int(),
  z.number(),
  z.boolean(),
  z.array(z.union([z.string(), z.number().int(), z.number()])),
]);

/** @internal */
export type ConnectionValue$Outbound =
  | string
  | number
  | number
  | boolean
  | Array<string | number | number>;

/** @internal */
export const ConnectionValue$outboundSchema: z.ZodType<
  ConnectionValue$Outbound,
  z.ZodTypeDef,
  ConnectionValue
> = z.union([
  z.string(),
  z.number().int(),
  z.number(),
  z.boolean(),
  z.array(z.union([z.string(), z.number().int(), z.number()])),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ConnectionValue$ {
  /** @deprecated use `ConnectionValue$inboundSchema` instead. */
  export const inboundSchema = ConnectionValue$inboundSchema;
  /** @deprecated use `ConnectionValue$outboundSchema` instead. */
  export const outboundSchema = ConnectionValue$outboundSchema;
  /** @deprecated use `ConnectionValue$Outbound` instead. */
  export type Outbound = ConnectionValue$Outbound;
}

export function connectionValueToJSON(
  connectionValue: ConnectionValue,
): string {
  return JSON.stringify(ConnectionValue$outboundSchema.parse(connectionValue));
}

export function connectionValueFromJSON(
  jsonString: string,
): SafeParseResult<ConnectionValue, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ConnectionValue$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ConnectionValue' from JSON`,
  );
}

/** @internal */
export const ConnectionDefaults$inboundSchema: z.ZodType<
  ConnectionDefaults,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string().optional(),
  options: z.array(FormFieldOption$inboundSchema).optional(),
  value: z.union([
    z.string(),
    z.number().int(),
    z.number(),
    z.boolean(),
    z.array(z.union([z.string(), z.number().int(), z.number()])),
  ]).optional(),
});

/** @internal */
export type ConnectionDefaults$Outbound = {
  id?: string | undefined;
  options?: Array<FormFieldOption$Outbound> | undefined;
  value?:
    | string
    | number
    | number
    | boolean
    | Array<string | number | number>
    | undefined;
};

/** @internal */
export const ConnectionDefaults$outboundSchema: z.ZodType<
  ConnectionDefaults$Outbound,
  z.ZodTypeDef,
  ConnectionDefaults
> = z.object({
  id: z.string().optional(),
  options: z.array(FormFieldOption$outboundSchema).optional(),
  value: z.union([
    z.string(),
    z.number().int(),
    z.number(),
    z.boolean(),
    z.array(z.union([z.string(), z.number().int(), z.number()])),
  ]).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ConnectionDefaults$ {
  /** @deprecated use `ConnectionDefaults$inboundSchema` instead. */
  export const inboundSchema = ConnectionDefaults$inboundSchema;
  /** @deprecated use `ConnectionDefaults$outboundSchema` instead. */
  export const outboundSchema = ConnectionDefaults$outboundSchema;
  /** @deprecated use `ConnectionDefaults$Outbound` instead. */
  export type Outbound = ConnectionDefaults$Outbound;
}

export function connectionDefaultsToJSON(
  connectionDefaults: ConnectionDefaults,
): string {
  return JSON.stringify(
    ConnectionDefaults$outboundSchema.parse(connectionDefaults),
  );
}

export function connectionDefaultsFromJSON(
  jsonString: string,
): SafeParseResult<ConnectionDefaults, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ConnectionDefaults$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ConnectionDefaults' from JSON`,
  );
}

/** @internal */
export const ConnectionConfiguration$inboundSchema: z.ZodType<
  ConnectionConfiguration,
  z.ZodTypeDef,
  unknown
> = z.object({
  resource: z.string().optional(),
  defaults: z.array(z.lazy(() => ConnectionDefaults$inboundSchema)).optional(),
});

/** @internal */
export type ConnectionConfiguration$Outbound = {
  resource?: string | undefined;
  defaults?: Array<ConnectionDefaults$Outbound> | undefined;
};

/** @internal */
export const ConnectionConfiguration$outboundSchema: z.ZodType<
  ConnectionConfiguration$Outbound,
  z.ZodTypeDef,
  ConnectionConfiguration
> = z.object({
  resource: z.string().optional(),
  defaults: z.array(z.lazy(() => ConnectionDefaults$outboundSchema)).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ConnectionConfiguration$ {
  /** @deprecated use `ConnectionConfiguration$inboundSchema` instead. */
  export const inboundSchema = ConnectionConfiguration$inboundSchema;
  /** @deprecated use `ConnectionConfiguration$outboundSchema` instead. */
  export const outboundSchema = ConnectionConfiguration$outboundSchema;
  /** @deprecated use `ConnectionConfiguration$Outbound` instead. */
  export type Outbound = ConnectionConfiguration$Outbound;
}

export function connectionConfigurationToJSON(
  connectionConfiguration: ConnectionConfiguration,
): string {
  return JSON.stringify(
    ConnectionConfiguration$outboundSchema.parse(connectionConfiguration),
  );
}

export function connectionConfigurationFromJSON(
  jsonString: string,
): SafeParseResult<ConnectionConfiguration, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ConnectionConfiguration$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ConnectionConfiguration' from JSON`,
  );
}

/** @internal */
export const ConnectionInput$inboundSchema: z.ZodType<
  ConnectionInput,
  z.ZodTypeDef,
  unknown
> = z.object({
  enabled: z.boolean().optional(),
  settings: z.nullable(z.record(z.any())).optional(),
  metadata: z.nullable(z.record(z.any())).optional(),
  configuration: z.array(z.lazy(() => ConnectionConfiguration$inboundSchema))
    .optional(),
  custom_mappings: z.array(CustomMappingInput$inboundSchema).optional(),
}).transform((v) => {
  return remap$(v, {
    "custom_mappings": "customMappings",
  });
});

/** @internal */
export type ConnectionInput$Outbound = {
  enabled?: boolean | undefined;
  settings?: { [k: string]: any } | null | undefined;
  metadata?: { [k: string]: any } | null | undefined;
  configuration?: Array<ConnectionConfiguration$Outbound> | undefined;
  custom_mappings?: Array<CustomMappingInput$Outbound> | undefined;
};

/** @internal */
export const ConnectionInput$outboundSchema: z.ZodType<
  ConnectionInput$Outbound,
  z.ZodTypeDef,
  ConnectionInput
> = z.object({
  enabled: z.boolean().optional(),
  settings: z.nullable(z.record(z.any())).optional(),
  metadata: z.nullable(z.record(z.any())).optional(),
  configuration: z.array(z.lazy(() => ConnectionConfiguration$outboundSchema))
    .optional(),
  customMappings: z.array(CustomMappingInput$outboundSchema).optional(),
}).transform((v) => {
  return remap$(v, {
    customMappings: "custom_mappings",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ConnectionInput$ {
  /** @deprecated use `ConnectionInput$inboundSchema` instead. */
  export const inboundSchema = ConnectionInput$inboundSchema;
  /** @deprecated use `ConnectionInput$outboundSchema` instead. */
  export const outboundSchema = ConnectionInput$outboundSchema;
  /** @deprecated use `ConnectionInput$Outbound` instead. */
  export type Outbound = ConnectionInput$Outbound;
}

export function connectionInputToJSON(
  connectionInput: ConnectionInput,
): string {
  return JSON.stringify(ConnectionInput$outboundSchema.parse(connectionInput));
}

export function connectionInputFromJSON(
  jsonString: string,
): SafeParseResult<ConnectionInput, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ConnectionInput$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ConnectionInput' from JSON`,
  );
}

/** @internal */
export const ConnectionStatus$inboundSchema: z.ZodNativeEnum<
  typeof ConnectionStatus
> = z.nativeEnum(ConnectionStatus);

/** @internal */
export const ConnectionStatus$outboundSchema: z.ZodNativeEnum<
  typeof ConnectionStatus
> = ConnectionStatus$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ConnectionStatus$ {
  /** @deprecated use `ConnectionStatus$inboundSchema` instead. */
  export const inboundSchema = ConnectionStatus$inboundSchema;
  /** @deprecated use `ConnectionStatus$outboundSchema` instead. */
  export const outboundSchema = ConnectionStatus$outboundSchema;
}

/** @internal */
export const Target$inboundSchema: z.ZodNativeEnum<typeof Target> = z
  .nativeEnum(Target);

/** @internal */
export const Target$outboundSchema: z.ZodNativeEnum<typeof Target> =
  Target$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Target$ {
  /** @deprecated use `Target$inboundSchema` instead. */
  export const inboundSchema = Target$inboundSchema;
  /** @deprecated use `Target$outboundSchema` instead. */
  export const outboundSchema = Target$outboundSchema;
}

/** @internal */
export const Defaults$inboundSchema: z.ZodType<
  Defaults,
  z.ZodTypeDef,
  unknown
> = z.object({
  target: Target$inboundSchema.optional(),
  id: z.string().optional(),
  options: z.array(FormFieldOption$inboundSchema).optional(),
  value: z.union([
    z.string(),
    z.number().int(),
    z.number(),
    z.boolean(),
    z.array(z.union([z.string(), z.number().int(), z.number()])),
  ]).optional(),
});

/** @internal */
export type Defaults$Outbound = {
  target?: string | undefined;
  id?: string | undefined;
  options?: Array<FormFieldOption$Outbound> | undefined;
  value?:
    | string
    | number
    | number
    | boolean
    | Array<string | number | number>
    | undefined;
};

/** @internal */
export const Defaults$outboundSchema: z.ZodType<
  Defaults$Outbound,
  z.ZodTypeDef,
  Defaults
> = z.object({
  target: Target$outboundSchema.optional(),
  id: z.string().optional(),
  options: z.array(FormFieldOption$outboundSchema).optional(),
  value: z.union([
    z.string(),
    z.number().int(),
    z.number(),
    z.boolean(),
    z.array(z.union([z.string(), z.number().int(), z.number()])),
  ]).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Defaults$ {
  /** @deprecated use `Defaults$inboundSchema` instead. */
  export const inboundSchema = Defaults$inboundSchema;
  /** @deprecated use `Defaults$outboundSchema` instead. */
  export const outboundSchema = Defaults$outboundSchema;
  /** @deprecated use `Defaults$Outbound` instead. */
  export type Outbound = Defaults$Outbound;
}

export function defaultsToJSON(defaults: Defaults): string {
  return JSON.stringify(Defaults$outboundSchema.parse(defaults));
}

export function defaultsFromJSON(
  jsonString: string,
): SafeParseResult<Defaults, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Defaults$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Defaults' from JSON`,
  );
}

/** @internal */
export const Configuration$inboundSchema: z.ZodType<
  Configuration,
  z.ZodTypeDef,
  unknown
> = z.object({
  resource: z.string().optional(),
  defaults: z.array(z.lazy(() => Defaults$inboundSchema)).optional(),
});

/** @internal */
export type Configuration$Outbound = {
  resource?: string | undefined;
  defaults?: Array<Defaults$Outbound> | undefined;
};

/** @internal */
export const Configuration$outboundSchema: z.ZodType<
  Configuration$Outbound,
  z.ZodTypeDef,
  Configuration
> = z.object({
  resource: z.string().optional(),
  defaults: z.array(z.lazy(() => Defaults$outboundSchema)).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Configuration$ {
  /** @deprecated use `Configuration$inboundSchema` instead. */
  export const inboundSchema = Configuration$inboundSchema;
  /** @deprecated use `Configuration$outboundSchema` instead. */
  export const outboundSchema = Configuration$outboundSchema;
  /** @deprecated use `Configuration$Outbound` instead. */
  export type Outbound = Configuration$Outbound;
}

export function configurationToJSON(configuration: Configuration): string {
  return JSON.stringify(Configuration$outboundSchema.parse(configuration));
}

export function configurationFromJSON(
  jsonString: string,
): SafeParseResult<Configuration, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Configuration$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Configuration' from JSON`,
  );
}

/** @internal */
export const Connection$inboundSchema: z.ZodType<
  Connection,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string().optional(),
  service_id: z.string().optional(),
  name: z.string().optional(),
  tag_line: z.string().optional(),
  unified_api: z.string().optional(),
  state: ConnectionState$inboundSchema.optional(),
  integration_state: IntegrationState$inboundSchema.optional(),
  auth_type: AuthType$inboundSchema.optional(),
  oauth_grant_type: OAuthGrantType$inboundSchema.optional(),
  status: ConnectionStatus$inboundSchema.optional(),
  enabled: z.boolean().optional(),
  website: z.string().optional(),
  icon: z.string().optional(),
  logo: z.string().optional(),
  authorize_url: z.nullable(z.string()).optional(),
  revoke_url: z.nullable(z.string()).optional(),
  settings: z.nullable(z.record(z.any())).optional(),
  metadata: z.nullable(z.record(z.any())).optional(),
  form_fields: z.array(FormField$inboundSchema).optional(),
  configuration: z.array(z.lazy(() => Configuration$inboundSchema)).optional(),
  configurable_resources: z.array(z.string()).optional(),
  resource_schema_support: z.array(z.string()).optional(),
  resource_settings_support: z.array(z.string()).optional(),
  validation_support: z.boolean().optional(),
  schema_support: z.boolean().optional(),
  settings_required_for_authorization: z.array(z.string()).optional(),
  subscriptions: z.array(WebhookSubscription$inboundSchema).optional(),
  has_guide: z.boolean().optional(),
  created_at: z.number().optional(),
  custom_mappings: z.array(CustomMapping$inboundSchema).optional(),
  updated_at: z.nullable(z.number()).optional(),
}).transform((v) => {
  return remap$(v, {
    "service_id": "serviceId",
    "tag_line": "tagLine",
    "unified_api": "unifiedApi",
    "integration_state": "integrationState",
    "auth_type": "authType",
    "oauth_grant_type": "oauthGrantType",
    "authorize_url": "authorizeUrl",
    "revoke_url": "revokeUrl",
    "form_fields": "formFields",
    "configurable_resources": "configurableResources",
    "resource_schema_support": "resourceSchemaSupport",
    "resource_settings_support": "resourceSettingsSupport",
    "validation_support": "validationSupport",
    "schema_support": "schemaSupport",
    "settings_required_for_authorization": "settingsRequiredForAuthorization",
    "has_guide": "hasGuide",
    "created_at": "createdAt",
    "custom_mappings": "customMappings",
    "updated_at": "updatedAt",
  });
});

/** @internal */
export type Connection$Outbound = {
  id?: string | undefined;
  service_id?: string | undefined;
  name?: string | undefined;
  tag_line?: string | undefined;
  unified_api?: string | undefined;
  state?: string | undefined;
  integration_state?: string | undefined;
  auth_type?: string | undefined;
  oauth_grant_type?: string | undefined;
  status?: string | undefined;
  enabled?: boolean | undefined;
  website?: string | undefined;
  icon?: string | undefined;
  logo?: string | undefined;
  authorize_url?: string | null | undefined;
  revoke_url?: string | null | undefined;
  settings?: { [k: string]: any } | null | undefined;
  metadata?: { [k: string]: any } | null | undefined;
  form_fields?: Array<FormField$Outbound> | undefined;
  configuration?: Array<Configuration$Outbound> | undefined;
  configurable_resources?: Array<string> | undefined;
  resource_schema_support?: Array<string> | undefined;
  resource_settings_support?: Array<string> | undefined;
  validation_support?: boolean | undefined;
  schema_support?: boolean | undefined;
  settings_required_for_authorization?: Array<string> | undefined;
  subscriptions?: Array<WebhookSubscription$Outbound> | undefined;
  has_guide?: boolean | undefined;
  created_at?: number | undefined;
  custom_mappings?: Array<CustomMapping$Outbound> | undefined;
  updated_at?: number | null | undefined;
};

/** @internal */
export const Connection$outboundSchema: z.ZodType<
  Connection$Outbound,
  z.ZodTypeDef,
  Connection
> = z.object({
  id: z.string().optional(),
  serviceId: z.string().optional(),
  name: z.string().optional(),
  tagLine: z.string().optional(),
  unifiedApi: z.string().optional(),
  state: ConnectionState$outboundSchema.optional(),
  integrationState: IntegrationState$outboundSchema.optional(),
  authType: AuthType$outboundSchema.optional(),
  oauthGrantType: OAuthGrantType$outboundSchema.optional(),
  status: ConnectionStatus$outboundSchema.optional(),
  enabled: z.boolean().optional(),
  website: z.string().optional(),
  icon: z.string().optional(),
  logo: z.string().optional(),
  authorizeUrl: z.nullable(z.string()).optional(),
  revokeUrl: z.nullable(z.string()).optional(),
  settings: z.nullable(z.record(z.any())).optional(),
  metadata: z.nullable(z.record(z.any())).optional(),
  formFields: z.array(FormField$outboundSchema).optional(),
  configuration: z.array(z.lazy(() => Configuration$outboundSchema)).optional(),
  configurableResources: z.array(z.string()).optional(),
  resourceSchemaSupport: z.array(z.string()).optional(),
  resourceSettingsSupport: z.array(z.string()).optional(),
  validationSupport: z.boolean().optional(),
  schemaSupport: z.boolean().optional(),
  settingsRequiredForAuthorization: z.array(z.string()).optional(),
  subscriptions: z.array(WebhookSubscription$outboundSchema).optional(),
  hasGuide: z.boolean().optional(),
  createdAt: z.number().optional(),
  customMappings: z.array(CustomMapping$outboundSchema).optional(),
  updatedAt: z.nullable(z.number()).optional(),
}).transform((v) => {
  return remap$(v, {
    serviceId: "service_id",
    tagLine: "tag_line",
    unifiedApi: "unified_api",
    integrationState: "integration_state",
    authType: "auth_type",
    oauthGrantType: "oauth_grant_type",
    authorizeUrl: "authorize_url",
    revokeUrl: "revoke_url",
    formFields: "form_fields",
    configurableResources: "configurable_resources",
    resourceSchemaSupport: "resource_schema_support",
    resourceSettingsSupport: "resource_settings_support",
    validationSupport: "validation_support",
    schemaSupport: "schema_support",
    settingsRequiredForAuthorization: "settings_required_for_authorization",
    hasGuide: "has_guide",
    createdAt: "created_at",
    customMappings: "custom_mappings",
    updatedAt: "updated_at",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Connection$ {
  /** @deprecated use `Connection$inboundSchema` instead. */
  export const inboundSchema = Connection$inboundSchema;
  /** @deprecated use `Connection$outboundSchema` instead. */
  export const outboundSchema = Connection$outboundSchema;
  /** @deprecated use `Connection$Outbound` instead. */
  export type Outbound = Connection$Outbound;
}

export function connectionToJSON(connection: Connection): string {
  return JSON.stringify(Connection$outboundSchema.parse(connection));
}

export function connectionFromJSON(
  jsonString: string,
): SafeParseResult<Connection, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Connection$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Connection' from JSON`,
  );
}

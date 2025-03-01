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
  ConnectorDoc,
  ConnectorDoc$inboundSchema,
  ConnectorDoc$Outbound,
  ConnectorDoc$outboundSchema,
} from "./connectordoc.js";
import {
  ConnectorEvent,
  ConnectorEvent$inboundSchema,
  ConnectorEvent$Outbound,
  ConnectorEvent$outboundSchema,
} from "./connectorevent.js";
import {
  ConnectorSetting,
  ConnectorSetting$inboundSchema,
  ConnectorSetting$Outbound,
  ConnectorSetting$outboundSchema,
} from "./connectorsetting.js";
import {
  ConnectorStatus,
  ConnectorStatus$inboundSchema,
  ConnectorStatus$outboundSchema,
} from "./connectorstatus.js";
import {
  LinkedConnectorResource,
  LinkedConnectorResource$inboundSchema,
  LinkedConnectorResource$Outbound,
  LinkedConnectorResource$outboundSchema,
} from "./linkedconnectorresource.js";
import {
  SchemaSupport,
  SchemaSupport$inboundSchema,
  SchemaSupport$Outbound,
  SchemaSupport$outboundSchema,
} from "./schemasupport.js";
import {
  UnifiedApiId,
  UnifiedApiId$inboundSchema,
  UnifiedApiId$outboundSchema,
} from "./unifiedapiid.js";
import {
  WebhookSupport,
  WebhookSupport$inboundSchema,
  WebhookSupport$Outbound,
  WebhookSupport$outboundSchema,
} from "./webhooksupport.js";

/**
 * Type of authorization used by the connector
 */
export const ConnectorAuthType = {
  Oauth2: "oauth2",
  ApiKey: "apiKey",
  Basic: "basic",
  Custom: "custom",
  None: "none",
} as const;
/**
 * Type of authorization used by the connector
 */
export type ConnectorAuthType = ClosedEnum<typeof ConnectorAuthType>;

/**
 * OAuth grant type used by the connector. More info: https://oauth.net/2/grant-types
 */
export const ConnectorOauthGrantType = {
  AuthorizationCode: "authorization_code",
  ClientCredentials: "client_credentials",
  Password: "password",
} as const;
/**
 * OAuth grant type used by the connector. More info: https://oauth.net/2/grant-types
 */
export type ConnectorOauthGrantType = ClosedEnum<
  typeof ConnectorOauthGrantType
>;

/**
 * Location of the OAuth client credentials. For most connectors the OAuth client credentials are stored on integration and managed by the application owner. For others they are stored on connection and managed by the consumer in Vault.
 */
export const OauthCredentialsSource = {
  Integration: "integration",
  Connection: "connection",
} as const;
/**
 * Location of the OAuth client credentials. For most connectors the OAuth client credentials are stored on integration and managed by the application owner. For others they are stored on connection and managed by the consumer in Vault.
 */
export type OauthCredentialsSource = ClosedEnum<typeof OauthCredentialsSource>;

export type OauthScopes = {
  /**
   * ID of the OAuth scope.
   */
  id?: string | undefined;
  /**
   * Label of the OAuth scope.
   */
  label?: string | undefined;
  /**
   * List of Unified APIs that request this OAuth Scope by default. Application owners can customize the requested scopes.
   */
  defaultApis?: Array<string> | undefined;
};

/**
 * OAuth scopes required for the connector. Add these scopes to your OAuth app.
 */
export type ConnectorOauthScopes = {
  /**
   * ID of the OAuth scope.
   */
  id?: string | undefined;
  /**
   * Label of the OAuth scope.
   */
  label?: string | undefined;
};

export type UnifiedApis = {
  /**
   * Name of Apideck Unified API
   */
  id?: UnifiedApiId | undefined;
  /**
   * Name of the API.
   */
  name?: string | undefined;
  /**
   * Indicates whether a connector only supports authentication. In this case the connector is not mapped to a Unified API, but can be used with the Proxy API
   */
  authOnly?: boolean | undefined;
  oauthScopes?: Array<ConnectorOauthScopes> | undefined;
  /**
   * List of resources that are supported on the connector.
   */
  supportedResources?: Array<LinkedConnectorResource> | undefined;
  /**
   * List of resources that are not supported on the downstream.
   */
  downstreamUnsupportedResources?: Array<string> | undefined;
  /**
   * List of events that are supported on the connector for this Unified API.
   */
  supportedEvents?: Array<ConnectorEvent> | undefined;
};

export type TlsSupport = {
  type?: string | undefined;
  /**
   * Description of the TLS support
   */
  description?: string | undefined;
};

export type Connector = {
  /**
   * ID of the connector.
   */
  id?: string | undefined;
  /**
   * Name of the connector.
   */
  name?: string | undefined;
  /**
   * Status of the connector. Connectors with status live or beta are callable.
   */
  status?: ConnectorStatus | undefined;
  /**
   * A description of the object.
   */
  description?: string | null | undefined;
  /**
   * Link to a small square icon for the connector.
   */
  iconUrl?: string | undefined;
  /**
   * Link to the full logo for the connector.
   */
  logoUrl?: string | undefined;
  /**
   * Link to the connector's website.
   */
  websiteUrl?: string | undefined;
  /**
   * Link to the connector's signup page.
   */
  signupUrl?: string | undefined;
  /**
   * Link to the connector's partner program signup page.
   */
  partnerSignupUrl?: string | undefined;
  /**
   * Set to `true` when the connector offers a free trial. Use `signup_url` to sign up for a free trial
   */
  freeTrialAvailable?: boolean | undefined;
  /**
   * Type of authorization used by the connector
   */
  authType?: ConnectorAuthType | undefined;
  /**
   * Indicates whether a connector only supports authentication. In this case the connector is not mapped to a Unified API, but can be used with the Proxy API
   */
  authOnly?: boolean | undefined;
  /**
   * Set to `true` when connector was implemented from downstream docs only and without API access. This state indicates that integration will require Apideck support, and access to downstream API to validate mapping quality.
   */
  blindMapped?: boolean | undefined;
  /**
   * OAuth grant type used by the connector. More info: https://oauth.net/2/grant-types
   */
  oauthGrantType?: ConnectorOauthGrantType | undefined;
  /**
   * Location of the OAuth client credentials. For most connectors the OAuth client credentials are stored on integration and managed by the application owner. For others they are stored on connection and managed by the consumer in Vault.
   */
  oauthCredentialsSource?: OauthCredentialsSource | undefined;
  /**
   * List of OAuth Scopes available for this connector.
   */
  oauthScopes?: Array<OauthScopes> | undefined;
  /**
   * Set to `true` when connector allows the definition of custom scopes.
   */
  customScopes?: boolean | undefined;
  /**
   * Indicates whether Apideck Sandbox OAuth credentials are available.
   */
  hasSandboxCredentials?: boolean | undefined;
  settings?: Array<ConnectorSetting> | undefined;
  /**
   * Service provider identifier
   */
  serviceId?: string | undefined;
  /**
   * List of Unified APIs that feature this connector.
   */
  unifiedApis?: Array<UnifiedApis> | undefined;
  /**
   * List of resources that are supported on the connector.
   */
  supportedResources?: Array<LinkedConnectorResource> | undefined;
  /**
   * List of resources that have settings that can be configured.
   */
  configurableResources?: Array<string> | undefined;
  /**
   * List of events that are supported on the connector across all Unified APIs.
   */
  supportedEvents?: Array<ConnectorEvent> | undefined;
  /**
   * How webhooks are supported for the connector. Sometimes the connector natively supports webhooks, other times Apideck virtualizes them based on polling.
   */
  webhookSupport?: WebhookSupport | undefined;
  /**
   * When a connector has schema_support, a call can be made to retrieve a json schema that describes a downstream resource.
   */
  schemaSupport?: SchemaSupport | undefined;
  docs?: Array<ConnectorDoc> | undefined;
  tlsSupport?: TlsSupport | undefined;
};

/** @internal */
export const ConnectorAuthType$inboundSchema: z.ZodNativeEnum<
  typeof ConnectorAuthType
> = z.nativeEnum(ConnectorAuthType);

/** @internal */
export const ConnectorAuthType$outboundSchema: z.ZodNativeEnum<
  typeof ConnectorAuthType
> = ConnectorAuthType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ConnectorAuthType$ {
  /** @deprecated use `ConnectorAuthType$inboundSchema` instead. */
  export const inboundSchema = ConnectorAuthType$inboundSchema;
  /** @deprecated use `ConnectorAuthType$outboundSchema` instead. */
  export const outboundSchema = ConnectorAuthType$outboundSchema;
}

/** @internal */
export const ConnectorOauthGrantType$inboundSchema: z.ZodNativeEnum<
  typeof ConnectorOauthGrantType
> = z.nativeEnum(ConnectorOauthGrantType);

/** @internal */
export const ConnectorOauthGrantType$outboundSchema: z.ZodNativeEnum<
  typeof ConnectorOauthGrantType
> = ConnectorOauthGrantType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ConnectorOauthGrantType$ {
  /** @deprecated use `ConnectorOauthGrantType$inboundSchema` instead. */
  export const inboundSchema = ConnectorOauthGrantType$inboundSchema;
  /** @deprecated use `ConnectorOauthGrantType$outboundSchema` instead. */
  export const outboundSchema = ConnectorOauthGrantType$outboundSchema;
}

/** @internal */
export const OauthCredentialsSource$inboundSchema: z.ZodNativeEnum<
  typeof OauthCredentialsSource
> = z.nativeEnum(OauthCredentialsSource);

/** @internal */
export const OauthCredentialsSource$outboundSchema: z.ZodNativeEnum<
  typeof OauthCredentialsSource
> = OauthCredentialsSource$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace OauthCredentialsSource$ {
  /** @deprecated use `OauthCredentialsSource$inboundSchema` instead. */
  export const inboundSchema = OauthCredentialsSource$inboundSchema;
  /** @deprecated use `OauthCredentialsSource$outboundSchema` instead. */
  export const outboundSchema = OauthCredentialsSource$outboundSchema;
}

/** @internal */
export const OauthScopes$inboundSchema: z.ZodType<
  OauthScopes,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string().optional(),
  label: z.string().optional(),
  default_apis: z.array(z.string()).optional(),
}).transform((v) => {
  return remap$(v, {
    "default_apis": "defaultApis",
  });
});

/** @internal */
export type OauthScopes$Outbound = {
  id?: string | undefined;
  label?: string | undefined;
  default_apis?: Array<string> | undefined;
};

/** @internal */
export const OauthScopes$outboundSchema: z.ZodType<
  OauthScopes$Outbound,
  z.ZodTypeDef,
  OauthScopes
> = z.object({
  id: z.string().optional(),
  label: z.string().optional(),
  defaultApis: z.array(z.string()).optional(),
}).transform((v) => {
  return remap$(v, {
    defaultApis: "default_apis",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace OauthScopes$ {
  /** @deprecated use `OauthScopes$inboundSchema` instead. */
  export const inboundSchema = OauthScopes$inboundSchema;
  /** @deprecated use `OauthScopes$outboundSchema` instead. */
  export const outboundSchema = OauthScopes$outboundSchema;
  /** @deprecated use `OauthScopes$Outbound` instead. */
  export type Outbound = OauthScopes$Outbound;
}

export function oauthScopesToJSON(oauthScopes: OauthScopes): string {
  return JSON.stringify(OauthScopes$outboundSchema.parse(oauthScopes));
}

export function oauthScopesFromJSON(
  jsonString: string,
): SafeParseResult<OauthScopes, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => OauthScopes$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'OauthScopes' from JSON`,
  );
}

/** @internal */
export const ConnectorOauthScopes$inboundSchema: z.ZodType<
  ConnectorOauthScopes,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string().optional(),
  label: z.string().optional(),
});

/** @internal */
export type ConnectorOauthScopes$Outbound = {
  id?: string | undefined;
  label?: string | undefined;
};

/** @internal */
export const ConnectorOauthScopes$outboundSchema: z.ZodType<
  ConnectorOauthScopes$Outbound,
  z.ZodTypeDef,
  ConnectorOauthScopes
> = z.object({
  id: z.string().optional(),
  label: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ConnectorOauthScopes$ {
  /** @deprecated use `ConnectorOauthScopes$inboundSchema` instead. */
  export const inboundSchema = ConnectorOauthScopes$inboundSchema;
  /** @deprecated use `ConnectorOauthScopes$outboundSchema` instead. */
  export const outboundSchema = ConnectorOauthScopes$outboundSchema;
  /** @deprecated use `ConnectorOauthScopes$Outbound` instead. */
  export type Outbound = ConnectorOauthScopes$Outbound;
}

export function connectorOauthScopesToJSON(
  connectorOauthScopes: ConnectorOauthScopes,
): string {
  return JSON.stringify(
    ConnectorOauthScopes$outboundSchema.parse(connectorOauthScopes),
  );
}

export function connectorOauthScopesFromJSON(
  jsonString: string,
): SafeParseResult<ConnectorOauthScopes, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ConnectorOauthScopes$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ConnectorOauthScopes' from JSON`,
  );
}

/** @internal */
export const UnifiedApis$inboundSchema: z.ZodType<
  UnifiedApis,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: UnifiedApiId$inboundSchema.optional(),
  name: z.string().optional(),
  auth_only: z.boolean().optional(),
  oauth_scopes: z.array(z.lazy(() => ConnectorOauthScopes$inboundSchema))
    .optional(),
  supported_resources: z.array(LinkedConnectorResource$inboundSchema)
    .optional(),
  downstream_unsupported_resources: z.array(z.string()).optional(),
  supported_events: z.array(ConnectorEvent$inboundSchema).optional(),
}).transform((v) => {
  return remap$(v, {
    "auth_only": "authOnly",
    "oauth_scopes": "oauthScopes",
    "supported_resources": "supportedResources",
    "downstream_unsupported_resources": "downstreamUnsupportedResources",
    "supported_events": "supportedEvents",
  });
});

/** @internal */
export type UnifiedApis$Outbound = {
  id?: string | undefined;
  name?: string | undefined;
  auth_only?: boolean | undefined;
  oauth_scopes?: Array<ConnectorOauthScopes$Outbound> | undefined;
  supported_resources?: Array<LinkedConnectorResource$Outbound> | undefined;
  downstream_unsupported_resources?: Array<string> | undefined;
  supported_events?: Array<ConnectorEvent$Outbound> | undefined;
};

/** @internal */
export const UnifiedApis$outboundSchema: z.ZodType<
  UnifiedApis$Outbound,
  z.ZodTypeDef,
  UnifiedApis
> = z.object({
  id: UnifiedApiId$outboundSchema.optional(),
  name: z.string().optional(),
  authOnly: z.boolean().optional(),
  oauthScopes: z.array(z.lazy(() => ConnectorOauthScopes$outboundSchema))
    .optional(),
  supportedResources: z.array(LinkedConnectorResource$outboundSchema)
    .optional(),
  downstreamUnsupportedResources: z.array(z.string()).optional(),
  supportedEvents: z.array(ConnectorEvent$outboundSchema).optional(),
}).transform((v) => {
  return remap$(v, {
    authOnly: "auth_only",
    oauthScopes: "oauth_scopes",
    supportedResources: "supported_resources",
    downstreamUnsupportedResources: "downstream_unsupported_resources",
    supportedEvents: "supported_events",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UnifiedApis$ {
  /** @deprecated use `UnifiedApis$inboundSchema` instead. */
  export const inboundSchema = UnifiedApis$inboundSchema;
  /** @deprecated use `UnifiedApis$outboundSchema` instead. */
  export const outboundSchema = UnifiedApis$outboundSchema;
  /** @deprecated use `UnifiedApis$Outbound` instead. */
  export type Outbound = UnifiedApis$Outbound;
}

export function unifiedApisToJSON(unifiedApis: UnifiedApis): string {
  return JSON.stringify(UnifiedApis$outboundSchema.parse(unifiedApis));
}

export function unifiedApisFromJSON(
  jsonString: string,
): SafeParseResult<UnifiedApis, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => UnifiedApis$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'UnifiedApis' from JSON`,
  );
}

/** @internal */
export const TlsSupport$inboundSchema: z.ZodType<
  TlsSupport,
  z.ZodTypeDef,
  unknown
> = z.object({
  type: z.string().optional(),
  description: z.string().optional(),
});

/** @internal */
export type TlsSupport$Outbound = {
  type?: string | undefined;
  description?: string | undefined;
};

/** @internal */
export const TlsSupport$outboundSchema: z.ZodType<
  TlsSupport$Outbound,
  z.ZodTypeDef,
  TlsSupport
> = z.object({
  type: z.string().optional(),
  description: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace TlsSupport$ {
  /** @deprecated use `TlsSupport$inboundSchema` instead. */
  export const inboundSchema = TlsSupport$inboundSchema;
  /** @deprecated use `TlsSupport$outboundSchema` instead. */
  export const outboundSchema = TlsSupport$outboundSchema;
  /** @deprecated use `TlsSupport$Outbound` instead. */
  export type Outbound = TlsSupport$Outbound;
}

export function tlsSupportToJSON(tlsSupport: TlsSupport): string {
  return JSON.stringify(TlsSupport$outboundSchema.parse(tlsSupport));
}

export function tlsSupportFromJSON(
  jsonString: string,
): SafeParseResult<TlsSupport, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => TlsSupport$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'TlsSupport' from JSON`,
  );
}

/** @internal */
export const Connector$inboundSchema: z.ZodType<
  Connector,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string().optional(),
  name: z.string().optional(),
  status: ConnectorStatus$inboundSchema.optional(),
  description: z.nullable(z.string()).optional(),
  icon_url: z.string().optional(),
  logo_url: z.string().optional(),
  website_url: z.string().optional(),
  signup_url: z.string().optional(),
  partner_signup_url: z.string().optional(),
  free_trial_available: z.boolean().optional(),
  auth_type: ConnectorAuthType$inboundSchema.optional(),
  auth_only: z.boolean().optional(),
  blind_mapped: z.boolean().optional(),
  oauth_grant_type: ConnectorOauthGrantType$inboundSchema.optional(),
  oauth_credentials_source: OauthCredentialsSource$inboundSchema.optional(),
  oauth_scopes: z.array(z.lazy(() => OauthScopes$inboundSchema)).optional(),
  custom_scopes: z.boolean().optional(),
  has_sandbox_credentials: z.boolean().optional(),
  settings: z.array(ConnectorSetting$inboundSchema).optional(),
  service_id: z.string().optional(),
  unified_apis: z.array(z.lazy(() => UnifiedApis$inboundSchema)).optional(),
  supported_resources: z.array(LinkedConnectorResource$inboundSchema)
    .optional(),
  configurable_resources: z.array(z.string()).optional(),
  supported_events: z.array(ConnectorEvent$inboundSchema).optional(),
  webhook_support: WebhookSupport$inboundSchema.optional(),
  schema_support: SchemaSupport$inboundSchema.optional(),
  docs: z.array(ConnectorDoc$inboundSchema).optional(),
  tls_support: z.lazy(() => TlsSupport$inboundSchema).optional(),
}).transform((v) => {
  return remap$(v, {
    "icon_url": "iconUrl",
    "logo_url": "logoUrl",
    "website_url": "websiteUrl",
    "signup_url": "signupUrl",
    "partner_signup_url": "partnerSignupUrl",
    "free_trial_available": "freeTrialAvailable",
    "auth_type": "authType",
    "auth_only": "authOnly",
    "blind_mapped": "blindMapped",
    "oauth_grant_type": "oauthGrantType",
    "oauth_credentials_source": "oauthCredentialsSource",
    "oauth_scopes": "oauthScopes",
    "custom_scopes": "customScopes",
    "has_sandbox_credentials": "hasSandboxCredentials",
    "service_id": "serviceId",
    "unified_apis": "unifiedApis",
    "supported_resources": "supportedResources",
    "configurable_resources": "configurableResources",
    "supported_events": "supportedEvents",
    "webhook_support": "webhookSupport",
    "schema_support": "schemaSupport",
    "tls_support": "tlsSupport",
  });
});

/** @internal */
export type Connector$Outbound = {
  id?: string | undefined;
  name?: string | undefined;
  status?: string | undefined;
  description?: string | null | undefined;
  icon_url?: string | undefined;
  logo_url?: string | undefined;
  website_url?: string | undefined;
  signup_url?: string | undefined;
  partner_signup_url?: string | undefined;
  free_trial_available?: boolean | undefined;
  auth_type?: string | undefined;
  auth_only?: boolean | undefined;
  blind_mapped?: boolean | undefined;
  oauth_grant_type?: string | undefined;
  oauth_credentials_source?: string | undefined;
  oauth_scopes?: Array<OauthScopes$Outbound> | undefined;
  custom_scopes?: boolean | undefined;
  has_sandbox_credentials?: boolean | undefined;
  settings?: Array<ConnectorSetting$Outbound> | undefined;
  service_id?: string | undefined;
  unified_apis?: Array<UnifiedApis$Outbound> | undefined;
  supported_resources?: Array<LinkedConnectorResource$Outbound> | undefined;
  configurable_resources?: Array<string> | undefined;
  supported_events?: Array<ConnectorEvent$Outbound> | undefined;
  webhook_support?: WebhookSupport$Outbound | undefined;
  schema_support?: SchemaSupport$Outbound | undefined;
  docs?: Array<ConnectorDoc$Outbound> | undefined;
  tls_support?: TlsSupport$Outbound | undefined;
};

/** @internal */
export const Connector$outboundSchema: z.ZodType<
  Connector$Outbound,
  z.ZodTypeDef,
  Connector
> = z.object({
  id: z.string().optional(),
  name: z.string().optional(),
  status: ConnectorStatus$outboundSchema.optional(),
  description: z.nullable(z.string()).optional(),
  iconUrl: z.string().optional(),
  logoUrl: z.string().optional(),
  websiteUrl: z.string().optional(),
  signupUrl: z.string().optional(),
  partnerSignupUrl: z.string().optional(),
  freeTrialAvailable: z.boolean().optional(),
  authType: ConnectorAuthType$outboundSchema.optional(),
  authOnly: z.boolean().optional(),
  blindMapped: z.boolean().optional(),
  oauthGrantType: ConnectorOauthGrantType$outboundSchema.optional(),
  oauthCredentialsSource: OauthCredentialsSource$outboundSchema.optional(),
  oauthScopes: z.array(z.lazy(() => OauthScopes$outboundSchema)).optional(),
  customScopes: z.boolean().optional(),
  hasSandboxCredentials: z.boolean().optional(),
  settings: z.array(ConnectorSetting$outboundSchema).optional(),
  serviceId: z.string().optional(),
  unifiedApis: z.array(z.lazy(() => UnifiedApis$outboundSchema)).optional(),
  supportedResources: z.array(LinkedConnectorResource$outboundSchema)
    .optional(),
  configurableResources: z.array(z.string()).optional(),
  supportedEvents: z.array(ConnectorEvent$outboundSchema).optional(),
  webhookSupport: WebhookSupport$outboundSchema.optional(),
  schemaSupport: SchemaSupport$outboundSchema.optional(),
  docs: z.array(ConnectorDoc$outboundSchema).optional(),
  tlsSupport: z.lazy(() => TlsSupport$outboundSchema).optional(),
}).transform((v) => {
  return remap$(v, {
    iconUrl: "icon_url",
    logoUrl: "logo_url",
    websiteUrl: "website_url",
    signupUrl: "signup_url",
    partnerSignupUrl: "partner_signup_url",
    freeTrialAvailable: "free_trial_available",
    authType: "auth_type",
    authOnly: "auth_only",
    blindMapped: "blind_mapped",
    oauthGrantType: "oauth_grant_type",
    oauthCredentialsSource: "oauth_credentials_source",
    oauthScopes: "oauth_scopes",
    customScopes: "custom_scopes",
    hasSandboxCredentials: "has_sandbox_credentials",
    serviceId: "service_id",
    unifiedApis: "unified_apis",
    supportedResources: "supported_resources",
    configurableResources: "configurable_resources",
    supportedEvents: "supported_events",
    webhookSupport: "webhook_support",
    schemaSupport: "schema_support",
    tlsSupport: "tls_support",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Connector$ {
  /** @deprecated use `Connector$inboundSchema` instead. */
  export const inboundSchema = Connector$inboundSchema;
  /** @deprecated use `Connector$outboundSchema` instead. */
  export const outboundSchema = Connector$outboundSchema;
  /** @deprecated use `Connector$Outbound` instead. */
  export type Outbound = Connector$Outbound;
}

export function connectorToJSON(connector: Connector): string {
  return JSON.stringify(Connector$outboundSchema.parse(connector));
}

export function connectorFromJSON(
  jsonString: string,
): SafeParseResult<Connector, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Connector$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Connector' from JSON`,
  );
}

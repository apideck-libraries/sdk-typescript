/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

/**
 * Mode of the webhook support.
 */
export const Mode = {
  Native: "native",
  Virtual: "virtual",
  None: "none",
} as const;
/**
 * Mode of the webhook support.
 */
export type Mode = ClosedEnum<typeof Mode>;

/**
 * Received events are scoped to connection or across integration.
 */
export const SubscriptionLevel = {
  Connection: "connection",
  Integration: "integration",
} as const;
/**
 * Received events are scoped to connection or across integration.
 */
export type SubscriptionLevel = ClosedEnum<typeof SubscriptionLevel>;

/**
 * How the subscription is managed in the downstream.
 */
export const ManagedVia = {
  Manual: "manual",
  Api: "api",
} as const;
/**
 * How the subscription is managed in the downstream.
 */
export type ManagedVia = ClosedEnum<typeof ManagedVia>;

/**
 * The window unit for the rate.
 */
export const Unit = {
  Second: "second",
  Minute: "minute",
  Hour: "hour",
  Day: "day",
} as const;
/**
 * The window unit for the rate.
 */
export type Unit = ClosedEnum<typeof Unit>;

/**
 * The rate at which requests for resources will be made to downstream.
 */
export type RequestRate = {
  /**
   * The number of requests per window unit.
   */
  rate: number;
  /**
   * Size of request window.
   */
  size: number;
  /**
   * The window unit for the rate.
   */
  unit: Unit;
};

export type WebhookSupportResources = {
  events?: Array<string> | undefined;
};

/**
 * Virtual webhook config for the connector.
 */
export type VirtualWebhooks = {
  /**
   * The rate at which requests for resources will be made to downstream.
   */
  requestRate: RequestRate;
  /**
   * The resources that will be requested from downstream.
   */
  resources?: { [k: string]: WebhookSupportResources } | undefined;
};

/**
 * How webhooks are supported for the connector. Sometimes the connector natively supports webhooks, other times Apideck virtualizes them based on polling.
 */
export type WebhookSupport = {
  /**
   * Mode of the webhook support.
   */
  mode?: Mode | undefined;
  /**
   * Received events are scoped to connection or across integration.
   */
  subscriptionLevel?: SubscriptionLevel | undefined;
  /**
   * How the subscription is managed in the downstream.
   */
  managedVia?: ManagedVia | undefined;
  /**
   * Virtual webhook config for the connector.
   */
  virtualWebhooks?: VirtualWebhooks | undefined;
};

/** @internal */
export const Mode$inboundSchema: z.ZodNativeEnum<typeof Mode> = z.nativeEnum(
  Mode,
);

/** @internal */
export const Mode$outboundSchema: z.ZodNativeEnum<typeof Mode> =
  Mode$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Mode$ {
  /** @deprecated use `Mode$inboundSchema` instead. */
  export const inboundSchema = Mode$inboundSchema;
  /** @deprecated use `Mode$outboundSchema` instead. */
  export const outboundSchema = Mode$outboundSchema;
}

/** @internal */
export const SubscriptionLevel$inboundSchema: z.ZodNativeEnum<
  typeof SubscriptionLevel
> = z.nativeEnum(SubscriptionLevel);

/** @internal */
export const SubscriptionLevel$outboundSchema: z.ZodNativeEnum<
  typeof SubscriptionLevel
> = SubscriptionLevel$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace SubscriptionLevel$ {
  /** @deprecated use `SubscriptionLevel$inboundSchema` instead. */
  export const inboundSchema = SubscriptionLevel$inboundSchema;
  /** @deprecated use `SubscriptionLevel$outboundSchema` instead. */
  export const outboundSchema = SubscriptionLevel$outboundSchema;
}

/** @internal */
export const ManagedVia$inboundSchema: z.ZodNativeEnum<typeof ManagedVia> = z
  .nativeEnum(ManagedVia);

/** @internal */
export const ManagedVia$outboundSchema: z.ZodNativeEnum<typeof ManagedVia> =
  ManagedVia$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ManagedVia$ {
  /** @deprecated use `ManagedVia$inboundSchema` instead. */
  export const inboundSchema = ManagedVia$inboundSchema;
  /** @deprecated use `ManagedVia$outboundSchema` instead. */
  export const outboundSchema = ManagedVia$outboundSchema;
}

/** @internal */
export const Unit$inboundSchema: z.ZodNativeEnum<typeof Unit> = z.nativeEnum(
  Unit,
);

/** @internal */
export const Unit$outboundSchema: z.ZodNativeEnum<typeof Unit> =
  Unit$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Unit$ {
  /** @deprecated use `Unit$inboundSchema` instead. */
  export const inboundSchema = Unit$inboundSchema;
  /** @deprecated use `Unit$outboundSchema` instead. */
  export const outboundSchema = Unit$outboundSchema;
}

/** @internal */
export const RequestRate$inboundSchema: z.ZodType<
  RequestRate,
  z.ZodTypeDef,
  unknown
> = z.object({
  rate: z.number().int(),
  size: z.number().int(),
  unit: Unit$inboundSchema,
});

/** @internal */
export type RequestRate$Outbound = {
  rate: number;
  size: number;
  unit: string;
};

/** @internal */
export const RequestRate$outboundSchema: z.ZodType<
  RequestRate$Outbound,
  z.ZodTypeDef,
  RequestRate
> = z.object({
  rate: z.number().int(),
  size: z.number().int(),
  unit: Unit$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace RequestRate$ {
  /** @deprecated use `RequestRate$inboundSchema` instead. */
  export const inboundSchema = RequestRate$inboundSchema;
  /** @deprecated use `RequestRate$outboundSchema` instead. */
  export const outboundSchema = RequestRate$outboundSchema;
  /** @deprecated use `RequestRate$Outbound` instead. */
  export type Outbound = RequestRate$Outbound;
}

export function requestRateToJSON(requestRate: RequestRate): string {
  return JSON.stringify(RequestRate$outboundSchema.parse(requestRate));
}

export function requestRateFromJSON(
  jsonString: string,
): SafeParseResult<RequestRate, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => RequestRate$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'RequestRate' from JSON`,
  );
}

/** @internal */
export const WebhookSupportResources$inboundSchema: z.ZodType<
  WebhookSupportResources,
  z.ZodTypeDef,
  unknown
> = z.object({
  events: z.array(z.string()).optional(),
});

/** @internal */
export type WebhookSupportResources$Outbound = {
  events?: Array<string> | undefined;
};

/** @internal */
export const WebhookSupportResources$outboundSchema: z.ZodType<
  WebhookSupportResources$Outbound,
  z.ZodTypeDef,
  WebhookSupportResources
> = z.object({
  events: z.array(z.string()).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace WebhookSupportResources$ {
  /** @deprecated use `WebhookSupportResources$inboundSchema` instead. */
  export const inboundSchema = WebhookSupportResources$inboundSchema;
  /** @deprecated use `WebhookSupportResources$outboundSchema` instead. */
  export const outboundSchema = WebhookSupportResources$outboundSchema;
  /** @deprecated use `WebhookSupportResources$Outbound` instead. */
  export type Outbound = WebhookSupportResources$Outbound;
}

export function webhookSupportResourcesToJSON(
  webhookSupportResources: WebhookSupportResources,
): string {
  return JSON.stringify(
    WebhookSupportResources$outboundSchema.parse(webhookSupportResources),
  );
}

export function webhookSupportResourcesFromJSON(
  jsonString: string,
): SafeParseResult<WebhookSupportResources, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => WebhookSupportResources$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'WebhookSupportResources' from JSON`,
  );
}

/** @internal */
export const VirtualWebhooks$inboundSchema: z.ZodType<
  VirtualWebhooks,
  z.ZodTypeDef,
  unknown
> = z.object({
  request_rate: z.lazy(() => RequestRate$inboundSchema),
  resources: z.record(z.lazy(() => WebhookSupportResources$inboundSchema))
    .optional(),
}).transform((v) => {
  return remap$(v, {
    "request_rate": "requestRate",
  });
});

/** @internal */
export type VirtualWebhooks$Outbound = {
  request_rate: RequestRate$Outbound;
  resources?: { [k: string]: WebhookSupportResources$Outbound } | undefined;
};

/** @internal */
export const VirtualWebhooks$outboundSchema: z.ZodType<
  VirtualWebhooks$Outbound,
  z.ZodTypeDef,
  VirtualWebhooks
> = z.object({
  requestRate: z.lazy(() => RequestRate$outboundSchema),
  resources: z.record(z.lazy(() => WebhookSupportResources$outboundSchema))
    .optional(),
}).transform((v) => {
  return remap$(v, {
    requestRate: "request_rate",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace VirtualWebhooks$ {
  /** @deprecated use `VirtualWebhooks$inboundSchema` instead. */
  export const inboundSchema = VirtualWebhooks$inboundSchema;
  /** @deprecated use `VirtualWebhooks$outboundSchema` instead. */
  export const outboundSchema = VirtualWebhooks$outboundSchema;
  /** @deprecated use `VirtualWebhooks$Outbound` instead. */
  export type Outbound = VirtualWebhooks$Outbound;
}

export function virtualWebhooksToJSON(
  virtualWebhooks: VirtualWebhooks,
): string {
  return JSON.stringify(VirtualWebhooks$outboundSchema.parse(virtualWebhooks));
}

export function virtualWebhooksFromJSON(
  jsonString: string,
): SafeParseResult<VirtualWebhooks, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => VirtualWebhooks$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'VirtualWebhooks' from JSON`,
  );
}

/** @internal */
export const WebhookSupport$inboundSchema: z.ZodType<
  WebhookSupport,
  z.ZodTypeDef,
  unknown
> = z.object({
  mode: Mode$inboundSchema.optional(),
  subscription_level: SubscriptionLevel$inboundSchema.optional(),
  managed_via: ManagedVia$inboundSchema.optional(),
  virtual_webhooks: z.lazy(() => VirtualWebhooks$inboundSchema).optional(),
}).transform((v) => {
  return remap$(v, {
    "subscription_level": "subscriptionLevel",
    "managed_via": "managedVia",
    "virtual_webhooks": "virtualWebhooks",
  });
});

/** @internal */
export type WebhookSupport$Outbound = {
  mode?: string | undefined;
  subscription_level?: string | undefined;
  managed_via?: string | undefined;
  virtual_webhooks?: VirtualWebhooks$Outbound | undefined;
};

/** @internal */
export const WebhookSupport$outboundSchema: z.ZodType<
  WebhookSupport$Outbound,
  z.ZodTypeDef,
  WebhookSupport
> = z.object({
  mode: Mode$outboundSchema.optional(),
  subscriptionLevel: SubscriptionLevel$outboundSchema.optional(),
  managedVia: ManagedVia$outboundSchema.optional(),
  virtualWebhooks: z.lazy(() => VirtualWebhooks$outboundSchema).optional(),
}).transform((v) => {
  return remap$(v, {
    subscriptionLevel: "subscription_level",
    managedVia: "managed_via",
    virtualWebhooks: "virtual_webhooks",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace WebhookSupport$ {
  /** @deprecated use `WebhookSupport$inboundSchema` instead. */
  export const inboundSchema = WebhookSupport$inboundSchema;
  /** @deprecated use `WebhookSupport$outboundSchema` instead. */
  export const outboundSchema = WebhookSupport$outboundSchema;
  /** @deprecated use `WebhookSupport$Outbound` instead. */
  export type Outbound = WebhookSupport$Outbound;
}

export function webhookSupportToJSON(webhookSupport: WebhookSupport): string {
  return JSON.stringify(WebhookSupport$outboundSchema.parse(webhookSupport));
}

export function webhookSupportFromJSON(
  jsonString: string,
): SafeParseResult<WebhookSupport, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => WebhookSupport$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'WebhookSupport' from JSON`,
  );
}

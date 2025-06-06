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
  Currency,
  Currency$inboundSchema,
  Currency$outboundSchema,
} from "./currency.js";
import {
  PassThroughBody,
  PassThroughBody$inboundSchema,
  PassThroughBody$Outbound,
  PassThroughBody$outboundSchema,
} from "./passthroughbody.js";

/**
 * Set to sms for SMS messages and mms for MMS messages.
 */
export const MessageType = {
  Sms: "sms",
  Mms: "mms",
} as const;
/**
 * Set to sms for SMS messages and mms for MMS messages.
 */
export type MessageType = ClosedEnum<typeof MessageType>;

/**
 * The direction of the message.
 */
export const Direction = {
  Inbound: "inbound",
  OutboundApi: "outbound-api",
  OutboundCall: "outbound-call",
  OutboundReply: "outbound-reply",
  Unknown: "unknown",
} as const;
/**
 * The direction of the message.
 */
export type Direction = ClosedEnum<typeof Direction>;

/**
 * Status of the delivery of the message.
 */
export const MessageStatus = {
  Accepted: "accepted",
  Scheduled: "scheduled",
  Canceled: "canceled",
  Queued: "queued",
  Sending: "sending",
  Sent: "sent",
  Failed: "failed",
  Delivered: "delivered",
  Undelivered: "undelivered",
  Receiving: "receiving",
  Received: "received",
  Read: "read",
} as const;
/**
 * Status of the delivery of the message.
 */
export type MessageStatus = ClosedEnum<typeof MessageStatus>;

/**
 * Price of the message.
 */
export type Price = {
  perUnit?: string | undefined;
  totalAmount?: string | undefined;
  /**
   * Indicates the associated currency for an amount of money. Values correspond to [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217).
   */
  currency?: Currency | null | undefined;
};

/**
 * The error returned if your message status is failed or undelivered.
 */
export type ErrorT = {
  /**
   * The error_code provides more information about the failure. If the message was successful, this value is null
   */
  code?: string | undefined;
  message?: string | undefined;
};

export type Message = {
  /**
   * A unique identifier for an object.
   */
  id?: string | undefined;
  /**
   * The phone number that initiated the message.
   */
  from: string;
  /**
   * The phone number that received the message.
   */
  to: string;
  subject?: string | undefined;
  /**
   * The message text.
   */
  body: string;
  /**
   * Set to sms for SMS messages and mms for MMS messages.
   */
  type?: MessageType | undefined;
  /**
   * The number of units that make up the complete message. Messages can be split up due to the constraints of the message size.
   */
  numberOfUnits?: number | undefined;
  /**
   * The number of media files associated with the message.
   */
  numberOfMediaFiles?: number | undefined;
  /**
   * The direction of the message.
   */
  direction?: Direction | undefined;
  /**
   * Status of the delivery of the message.
   */
  status?: MessageStatus | undefined;
  /**
   * The scheduled date and time of the message.
   */
  scheduledAt?: Date | undefined;
  /**
   * The date and time that the message was sent
   */
  sentAt?: Date | undefined;
  /**
   * Define a webhook to receive delivery notifications.
   */
  webhookUrl?: string | undefined;
  /**
   * A client reference.
   */
  reference?: string | undefined;
  /**
   * Price of the message.
   */
  price?: Price | undefined;
  /**
   * The error returned if your message status is failed or undelivered.
   */
  error?: ErrorT | undefined;
  /**
   * The ID of the Messaging Service used with the message. In case of Plivo this links to the Powerpack ID.
   */
  messagingServiceId?: string | undefined;
  /**
   * When custom mappings are configured on the resource, the result is included here.
   */
  customMappings?: { [k: string]: any } | null | undefined;
  /**
   * The user who last updated the object.
   */
  updatedBy?: string | null | undefined;
  /**
   * The user who created the object.
   */
  createdBy?: string | null | undefined;
  /**
   * The date and time when the object was last updated.
   */
  updatedAt?: Date | null | undefined;
  /**
   * The date and time when the object was created.
   */
  createdAt?: Date | null | undefined;
  /**
   * The pass_through property allows passing service-specific, custom data or structured modifications in request body when creating or updating resources.
   */
  passThrough?: Array<PassThroughBody> | undefined;
};

export type MessageInput = {
  /**
   * The phone number that initiated the message.
   */
  from: string;
  /**
   * The phone number that received the message.
   */
  to: string;
  subject?: string | undefined;
  /**
   * The message text.
   */
  body: string;
  /**
   * Set to sms for SMS messages and mms for MMS messages.
   */
  type?: MessageType | undefined;
  /**
   * The scheduled date and time of the message.
   */
  scheduledAt?: Date | undefined;
  /**
   * Define a webhook to receive delivery notifications.
   */
  webhookUrl?: string | undefined;
  /**
   * A client reference.
   */
  reference?: string | undefined;
  /**
   * The ID of the Messaging Service used with the message. In case of Plivo this links to the Powerpack ID.
   */
  messagingServiceId?: string | undefined;
  /**
   * The pass_through property allows passing service-specific, custom data or structured modifications in request body when creating or updating resources.
   */
  passThrough?: Array<PassThroughBody> | undefined;
};

/** @internal */
export const MessageType$inboundSchema: z.ZodNativeEnum<typeof MessageType> = z
  .nativeEnum(MessageType);

/** @internal */
export const MessageType$outboundSchema: z.ZodNativeEnum<typeof MessageType> =
  MessageType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace MessageType$ {
  /** @deprecated use `MessageType$inboundSchema` instead. */
  export const inboundSchema = MessageType$inboundSchema;
  /** @deprecated use `MessageType$outboundSchema` instead. */
  export const outboundSchema = MessageType$outboundSchema;
}

/** @internal */
export const Direction$inboundSchema: z.ZodNativeEnum<typeof Direction> = z
  .nativeEnum(Direction);

/** @internal */
export const Direction$outboundSchema: z.ZodNativeEnum<typeof Direction> =
  Direction$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Direction$ {
  /** @deprecated use `Direction$inboundSchema` instead. */
  export const inboundSchema = Direction$inboundSchema;
  /** @deprecated use `Direction$outboundSchema` instead. */
  export const outboundSchema = Direction$outboundSchema;
}

/** @internal */
export const MessageStatus$inboundSchema: z.ZodNativeEnum<
  typeof MessageStatus
> = z.nativeEnum(MessageStatus);

/** @internal */
export const MessageStatus$outboundSchema: z.ZodNativeEnum<
  typeof MessageStatus
> = MessageStatus$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace MessageStatus$ {
  /** @deprecated use `MessageStatus$inboundSchema` instead. */
  export const inboundSchema = MessageStatus$inboundSchema;
  /** @deprecated use `MessageStatus$outboundSchema` instead. */
  export const outboundSchema = MessageStatus$outboundSchema;
}

/** @internal */
export const Price$inboundSchema: z.ZodType<Price, z.ZodTypeDef, unknown> = z
  .object({
    per_unit: z.string().optional(),
    total_amount: z.string().optional(),
    currency: z.nullable(Currency$inboundSchema).optional(),
  }).transform((v) => {
    return remap$(v, {
      "per_unit": "perUnit",
      "total_amount": "totalAmount",
    });
  });

/** @internal */
export type Price$Outbound = {
  per_unit?: string | undefined;
  total_amount?: string | undefined;
  currency?: string | null | undefined;
};

/** @internal */
export const Price$outboundSchema: z.ZodType<
  Price$Outbound,
  z.ZodTypeDef,
  Price
> = z.object({
  perUnit: z.string().optional(),
  totalAmount: z.string().optional(),
  currency: z.nullable(Currency$outboundSchema).optional(),
}).transform((v) => {
  return remap$(v, {
    perUnit: "per_unit",
    totalAmount: "total_amount",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Price$ {
  /** @deprecated use `Price$inboundSchema` instead. */
  export const inboundSchema = Price$inboundSchema;
  /** @deprecated use `Price$outboundSchema` instead. */
  export const outboundSchema = Price$outboundSchema;
  /** @deprecated use `Price$Outbound` instead. */
  export type Outbound = Price$Outbound;
}

export function priceToJSON(price: Price): string {
  return JSON.stringify(Price$outboundSchema.parse(price));
}

export function priceFromJSON(
  jsonString: string,
): SafeParseResult<Price, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Price$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Price' from JSON`,
  );
}

/** @internal */
export const ErrorT$inboundSchema: z.ZodType<ErrorT, z.ZodTypeDef, unknown> = z
  .object({
    code: z.string().optional(),
    message: z.string().optional(),
  });

/** @internal */
export type ErrorT$Outbound = {
  code?: string | undefined;
  message?: string | undefined;
};

/** @internal */
export const ErrorT$outboundSchema: z.ZodType<
  ErrorT$Outbound,
  z.ZodTypeDef,
  ErrorT
> = z.object({
  code: z.string().optional(),
  message: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ErrorT$ {
  /** @deprecated use `ErrorT$inboundSchema` instead. */
  export const inboundSchema = ErrorT$inboundSchema;
  /** @deprecated use `ErrorT$outboundSchema` instead. */
  export const outboundSchema = ErrorT$outboundSchema;
  /** @deprecated use `ErrorT$Outbound` instead. */
  export type Outbound = ErrorT$Outbound;
}

export function errorToJSON(errorT: ErrorT): string {
  return JSON.stringify(ErrorT$outboundSchema.parse(errorT));
}

export function errorFromJSON(
  jsonString: string,
): SafeParseResult<ErrorT, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ErrorT$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ErrorT' from JSON`,
  );
}

/** @internal */
export const Message$inboundSchema: z.ZodType<Message, z.ZodTypeDef, unknown> =
  z.object({
    id: z.string().optional(),
    from: z.string(),
    to: z.string(),
    subject: z.string().optional(),
    body: z.string(),
    type: MessageType$inboundSchema.optional(),
    number_of_units: z.number().int().optional(),
    number_of_media_files: z.number().int().optional(),
    direction: Direction$inboundSchema.optional(),
    status: MessageStatus$inboundSchema.optional(),
    scheduled_at: z.string().datetime({ offset: true }).transform(v =>
      new Date(v)
    ).optional(),
    sent_at: z.string().datetime({ offset: true }).transform(v => new Date(v))
      .optional(),
    webhook_url: z.string().optional(),
    reference: z.string().optional(),
    price: z.lazy(() => Price$inboundSchema).optional(),
    error: z.lazy(() => ErrorT$inboundSchema).optional(),
    messaging_service_id: z.string().optional(),
    custom_mappings: z.nullable(z.record(z.any())).optional(),
    updated_by: z.nullable(z.string()).optional(),
    created_by: z.nullable(z.string()).optional(),
    updated_at: z.nullable(
      z.string().datetime({ offset: true }).transform(v => new Date(v)),
    ).optional(),
    created_at: z.nullable(
      z.string().datetime({ offset: true }).transform(v => new Date(v)),
    ).optional(),
    pass_through: z.array(PassThroughBody$inboundSchema).optional(),
  }).transform((v) => {
    return remap$(v, {
      "number_of_units": "numberOfUnits",
      "number_of_media_files": "numberOfMediaFiles",
      "scheduled_at": "scheduledAt",
      "sent_at": "sentAt",
      "webhook_url": "webhookUrl",
      "messaging_service_id": "messagingServiceId",
      "custom_mappings": "customMappings",
      "updated_by": "updatedBy",
      "created_by": "createdBy",
      "updated_at": "updatedAt",
      "created_at": "createdAt",
      "pass_through": "passThrough",
    });
  });

/** @internal */
export type Message$Outbound = {
  id?: string | undefined;
  from: string;
  to: string;
  subject?: string | undefined;
  body: string;
  type?: string | undefined;
  number_of_units?: number | undefined;
  number_of_media_files?: number | undefined;
  direction?: string | undefined;
  status?: string | undefined;
  scheduled_at?: string | undefined;
  sent_at?: string | undefined;
  webhook_url?: string | undefined;
  reference?: string | undefined;
  price?: Price$Outbound | undefined;
  error?: ErrorT$Outbound | undefined;
  messaging_service_id?: string | undefined;
  custom_mappings?: { [k: string]: any } | null | undefined;
  updated_by?: string | null | undefined;
  created_by?: string | null | undefined;
  updated_at?: string | null | undefined;
  created_at?: string | null | undefined;
  pass_through?: Array<PassThroughBody$Outbound> | undefined;
};

/** @internal */
export const Message$outboundSchema: z.ZodType<
  Message$Outbound,
  z.ZodTypeDef,
  Message
> = z.object({
  id: z.string().optional(),
  from: z.string(),
  to: z.string(),
  subject: z.string().optional(),
  body: z.string(),
  type: MessageType$outboundSchema.optional(),
  numberOfUnits: z.number().int().optional(),
  numberOfMediaFiles: z.number().int().optional(),
  direction: Direction$outboundSchema.optional(),
  status: MessageStatus$outboundSchema.optional(),
  scheduledAt: z.date().transform(v => v.toISOString()).optional(),
  sentAt: z.date().transform(v => v.toISOString()).optional(),
  webhookUrl: z.string().optional(),
  reference: z.string().optional(),
  price: z.lazy(() => Price$outboundSchema).optional(),
  error: z.lazy(() => ErrorT$outboundSchema).optional(),
  messagingServiceId: z.string().optional(),
  customMappings: z.nullable(z.record(z.any())).optional(),
  updatedBy: z.nullable(z.string()).optional(),
  createdBy: z.nullable(z.string()).optional(),
  updatedAt: z.nullable(z.date().transform(v => v.toISOString())).optional(),
  createdAt: z.nullable(z.date().transform(v => v.toISOString())).optional(),
  passThrough: z.array(PassThroughBody$outboundSchema).optional(),
}).transform((v) => {
  return remap$(v, {
    numberOfUnits: "number_of_units",
    numberOfMediaFiles: "number_of_media_files",
    scheduledAt: "scheduled_at",
    sentAt: "sent_at",
    webhookUrl: "webhook_url",
    messagingServiceId: "messaging_service_id",
    customMappings: "custom_mappings",
    updatedBy: "updated_by",
    createdBy: "created_by",
    updatedAt: "updated_at",
    createdAt: "created_at",
    passThrough: "pass_through",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Message$ {
  /** @deprecated use `Message$inboundSchema` instead. */
  export const inboundSchema = Message$inboundSchema;
  /** @deprecated use `Message$outboundSchema` instead. */
  export const outboundSchema = Message$outboundSchema;
  /** @deprecated use `Message$Outbound` instead. */
  export type Outbound = Message$Outbound;
}

export function messageToJSON(message: Message): string {
  return JSON.stringify(Message$outboundSchema.parse(message));
}

export function messageFromJSON(
  jsonString: string,
): SafeParseResult<Message, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Message$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Message' from JSON`,
  );
}

/** @internal */
export const MessageInput$inboundSchema: z.ZodType<
  MessageInput,
  z.ZodTypeDef,
  unknown
> = z.object({
  from: z.string(),
  to: z.string(),
  subject: z.string().optional(),
  body: z.string(),
  type: MessageType$inboundSchema.optional(),
  scheduled_at: z.string().datetime({ offset: true }).transform(v =>
    new Date(v)
  ).optional(),
  webhook_url: z.string().optional(),
  reference: z.string().optional(),
  messaging_service_id: z.string().optional(),
  pass_through: z.array(PassThroughBody$inboundSchema).optional(),
}).transform((v) => {
  return remap$(v, {
    "scheduled_at": "scheduledAt",
    "webhook_url": "webhookUrl",
    "messaging_service_id": "messagingServiceId",
    "pass_through": "passThrough",
  });
});

/** @internal */
export type MessageInput$Outbound = {
  from: string;
  to: string;
  subject?: string | undefined;
  body: string;
  type?: string | undefined;
  scheduled_at?: string | undefined;
  webhook_url?: string | undefined;
  reference?: string | undefined;
  messaging_service_id?: string | undefined;
  pass_through?: Array<PassThroughBody$Outbound> | undefined;
};

/** @internal */
export const MessageInput$outboundSchema: z.ZodType<
  MessageInput$Outbound,
  z.ZodTypeDef,
  MessageInput
> = z.object({
  from: z.string(),
  to: z.string(),
  subject: z.string().optional(),
  body: z.string(),
  type: MessageType$outboundSchema.optional(),
  scheduledAt: z.date().transform(v => v.toISOString()).optional(),
  webhookUrl: z.string().optional(),
  reference: z.string().optional(),
  messagingServiceId: z.string().optional(),
  passThrough: z.array(PassThroughBody$outboundSchema).optional(),
}).transform((v) => {
  return remap$(v, {
    scheduledAt: "scheduled_at",
    webhookUrl: "webhook_url",
    messagingServiceId: "messaging_service_id",
    passThrough: "pass_through",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace MessageInput$ {
  /** @deprecated use `MessageInput$inboundSchema` instead. */
  export const inboundSchema = MessageInput$inboundSchema;
  /** @deprecated use `MessageInput$outboundSchema` instead. */
  export const outboundSchema = MessageInput$outboundSchema;
  /** @deprecated use `MessageInput$Outbound` instead. */
  export type Outbound = MessageInput$Outbound;
}

export function messageInputToJSON(messageInput: MessageInput): string {
  return JSON.stringify(MessageInput$outboundSchema.parse(messageInput));
}

export function messageInputFromJSON(
  jsonString: string,
): SafeParseResult<MessageInput, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => MessageInput$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'MessageInput' from JSON`,
  );
}

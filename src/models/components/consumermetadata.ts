/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";

/**
 * The metadata of the consumer. This is used to display the consumer in the sidebar. This is optional, but recommended.
 */
export type ConsumerMetadata = {
  /**
   * The name of the account as shown in the sidebar.
   */
  accountName?: string | undefined;
  /**
   * The name of the user as shown in the sidebar.
   */
  userName?: string | undefined;
  /**
   * The email of the user as shown in the sidebar.
   */
  email?: string | undefined;
  /**
   * The avatar of the user in the sidebar. Must be a valid URL
   */
  image?: string | undefined;
};

/** @internal */
export const ConsumerMetadata$inboundSchema: z.ZodType<
  ConsumerMetadata,
  z.ZodTypeDef,
  unknown
> = z.object({
  account_name: z.string().optional(),
  user_name: z.string().optional(),
  email: z.string().optional(),
  image: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    "account_name": "accountName",
    "user_name": "userName",
  });
});

/** @internal */
export type ConsumerMetadata$Outbound = {
  account_name?: string | undefined;
  user_name?: string | undefined;
  email?: string | undefined;
  image?: string | undefined;
};

/** @internal */
export const ConsumerMetadata$outboundSchema: z.ZodType<
  ConsumerMetadata$Outbound,
  z.ZodTypeDef,
  ConsumerMetadata
> = z.object({
  accountName: z.string().optional(),
  userName: z.string().optional(),
  email: z.string().optional(),
  image: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    accountName: "account_name",
    userName: "user_name",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ConsumerMetadata$ {
  /** @deprecated use `ConsumerMetadata$inboundSchema` instead. */
  export const inboundSchema = ConsumerMetadata$inboundSchema;
  /** @deprecated use `ConsumerMetadata$outboundSchema` instead. */
  export const outboundSchema = ConsumerMetadata$outboundSchema;
  /** @deprecated use `ConsumerMetadata$Outbound` instead. */
  export type Outbound = ConsumerMetadata$Outbound;
}

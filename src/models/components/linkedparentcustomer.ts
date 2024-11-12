/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

/**
 * The parent customer this entity is linked to.
 */
export type LinkedParentCustomer = {
  /**
   * The parent ID of the customer this entity is linked to.
   */
  id: string;
  /**
   * The name of the parent customer.
   */
  name?: string | undefined;
};

/** @internal */
export const LinkedParentCustomer$inboundSchema: z.ZodType<
  LinkedParentCustomer,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
  name: z.string().optional(),
});

/** @internal */
export type LinkedParentCustomer$Outbound = {
  id: string;
  name?: string | undefined;
};

/** @internal */
export const LinkedParentCustomer$outboundSchema: z.ZodType<
  LinkedParentCustomer$Outbound,
  z.ZodTypeDef,
  LinkedParentCustomer
> = z.object({
  id: z.string(),
  name: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace LinkedParentCustomer$ {
  /** @deprecated use `LinkedParentCustomer$inboundSchema` instead. */
  export const inboundSchema = LinkedParentCustomer$inboundSchema;
  /** @deprecated use `LinkedParentCustomer$outboundSchema` instead. */
  export const outboundSchema = LinkedParentCustomer$outboundSchema;
  /** @deprecated use `LinkedParentCustomer$Outbound` instead. */
  export type Outbound = LinkedParentCustomer$Outbound;
}

/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import {
  FileType,
  FileType$inboundSchema,
  FileType$outboundSchema,
} from "./filetype.js";

export type SharedLinkTarget = {
  /**
   * A unique identifier for an object.
   */
  id: string;
  /**
   * The name of the file
   */
  name?: string | null | undefined;
  /**
   * The type of resource. Could be file, folder or url
   */
  type?: FileType | null | undefined;
};

/** @internal */
export const SharedLinkTarget$inboundSchema: z.ZodType<
  SharedLinkTarget,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
  name: z.nullable(z.string()).optional(),
  type: z.nullable(FileType$inboundSchema).optional(),
});

/** @internal */
export type SharedLinkTarget$Outbound = {
  id: string;
  name?: string | null | undefined;
  type?: string | null | undefined;
};

/** @internal */
export const SharedLinkTarget$outboundSchema: z.ZodType<
  SharedLinkTarget$Outbound,
  z.ZodTypeDef,
  SharedLinkTarget
> = z.object({
  id: z.string(),
  name: z.nullable(z.string()).optional(),
  type: z.nullable(FileType$outboundSchema).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace SharedLinkTarget$ {
  /** @deprecated use `SharedLinkTarget$inboundSchema` instead. */
  export const inboundSchema = SharedLinkTarget$inboundSchema;
  /** @deprecated use `SharedLinkTarget$outboundSchema` instead. */
  export const outboundSchema = SharedLinkTarget$outboundSchema;
  /** @deprecated use `SharedLinkTarget$Outbound` instead. */
  export type Outbound = SharedLinkTarget$Outbound;
}

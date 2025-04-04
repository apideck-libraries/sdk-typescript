/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";

/**
 * The type of resource. Could be file, folder or url
 */
export const FileType = {
  File: "file",
  Folder: "folder",
  Url: "url",
} as const;
/**
 * The type of resource. Could be file, folder or url
 */
export type FileType = ClosedEnum<typeof FileType>;

/** @internal */
export const FileType$inboundSchema: z.ZodNativeEnum<typeof FileType> = z
  .nativeEnum(FileType);

/** @internal */
export const FileType$outboundSchema: z.ZodNativeEnum<typeof FileType> =
  FileType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace FileType$ {
  /** @deprecated use `FileType$inboundSchema` instead. */
  export const inboundSchema = FileType$inboundSchema;
  /** @deprecated use `FileType$outboundSchema` instead. */
  export const outboundSchema = FileType$outboundSchema;
}

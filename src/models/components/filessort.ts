/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  SortDirection,
  SortDirection$inboundSchema,
  SortDirection$outboundSchema,
} from "./sortdirection.js";

/**
 * The field on which to sort the Files
 */
export const FilesSortBy = {
  UpdatedAt: "updated_at",
  Name: "name",
} as const;
/**
 * The field on which to sort the Files
 */
export type FilesSortBy = ClosedEnum<typeof FilesSortBy>;

export type FilesSort = {
  /**
   * The field on which to sort the Files
   */
  by?: FilesSortBy | undefined;
  /**
   * The direction in which to sort the results
   */
  direction?: SortDirection | undefined;
};

/** @internal */
export const FilesSortBy$inboundSchema: z.ZodNativeEnum<typeof FilesSortBy> = z
  .nativeEnum(FilesSortBy);

/** @internal */
export const FilesSortBy$outboundSchema: z.ZodNativeEnum<typeof FilesSortBy> =
  FilesSortBy$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace FilesSortBy$ {
  /** @deprecated use `FilesSortBy$inboundSchema` instead. */
  export const inboundSchema = FilesSortBy$inboundSchema;
  /** @deprecated use `FilesSortBy$outboundSchema` instead. */
  export const outboundSchema = FilesSortBy$outboundSchema;
}

/** @internal */
export const FilesSort$inboundSchema: z.ZodType<
  FilesSort,
  z.ZodTypeDef,
  unknown
> = z.object({
  by: FilesSortBy$inboundSchema.optional(),
  direction: SortDirection$inboundSchema.default("asc"),
});

/** @internal */
export type FilesSort$Outbound = {
  by?: string | undefined;
  direction: string;
};

/** @internal */
export const FilesSort$outboundSchema: z.ZodType<
  FilesSort$Outbound,
  z.ZodTypeDef,
  FilesSort
> = z.object({
  by: FilesSortBy$outboundSchema.optional(),
  direction: SortDirection$outboundSchema.default("asc"),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace FilesSort$ {
  /** @deprecated use `FilesSort$inboundSchema` instead. */
  export const inboundSchema = FilesSort$inboundSchema;
  /** @deprecated use `FilesSort$outboundSchema` instead. */
  export const outboundSchema = FilesSort$outboundSchema;
  /** @deprecated use `FilesSort$Outbound` instead. */
  export type Outbound = FilesSort$Outbound;
}

export function filesSortToJSON(filesSort: FilesSort): string {
  return JSON.stringify(FilesSort$outboundSchema.parse(filesSort));
}

export function filesSortFromJSON(
  jsonString: string,
): SafeParseResult<FilesSort, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => FilesSort$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'FilesSort' from JSON`,
  );
}

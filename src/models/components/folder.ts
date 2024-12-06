/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  CustomMappings,
  CustomMappings$inboundSchema,
  CustomMappings$Outbound,
  CustomMappings$outboundSchema,
} from "./custommappings.js";
import {
  LinkedFolder,
  LinkedFolder$inboundSchema,
  LinkedFolder$Outbound,
  LinkedFolder$outboundSchema,
} from "./linkedfolder.js";
import {
  Owner,
  Owner$inboundSchema,
  Owner$Outbound,
  Owner$outboundSchema,
} from "./owner.js";

export type Folder = {
  /**
   * A unique identifier for an object.
   */
  id?: string | undefined;
  /**
   * The name of the folder
   */
  name: string;
  /**
   * Optional description of the folder
   */
  description?: string | null | undefined;
  /**
   * The full path of the folder (includes the folder name)
   */
  path?: string | null | undefined;
  /**
   * The size of the folder in bytes
   */
  size?: number | null | undefined;
  owner?: Owner | undefined;
  /**
   * The parent folders of the file, starting from the root
   */
  parentFolders: Array<LinkedFolder>;
  /**
   * Whether the list of parent folder is complete. Some connectors only return the direct parent of a folder
   */
  parentFoldersComplete?: boolean | undefined;
  /**
   * When custom mappings are configured on the resource, the result is included here.
   */
  customMappings?: CustomMappings | null | undefined;
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
};

/** @internal */
export const Folder$inboundSchema: z.ZodType<Folder, z.ZodTypeDef, unknown> = z
  .object({
    id: z.string().optional(),
    name: z.string(),
    description: z.nullable(z.string()).optional(),
    path: z.nullable(z.string()).optional(),
    size: z.nullable(z.number().int()).optional(),
    owner: Owner$inboundSchema.optional(),
    parent_folders: z.array(LinkedFolder$inboundSchema),
    parent_folders_complete: z.boolean().optional(),
    custom_mappings: z.nullable(CustomMappings$inboundSchema).optional(),
    updated_by: z.nullable(z.string()).optional(),
    created_by: z.nullable(z.string()).optional(),
    updated_at: z.nullable(
      z.string().datetime({ offset: true }).transform(v => new Date(v)),
    ).optional(),
    created_at: z.nullable(
      z.string().datetime({ offset: true }).transform(v => new Date(v)),
    ).optional(),
  }).transform((v) => {
    return remap$(v, {
      "parent_folders": "parentFolders",
      "parent_folders_complete": "parentFoldersComplete",
      "custom_mappings": "customMappings",
      "updated_by": "updatedBy",
      "created_by": "createdBy",
      "updated_at": "updatedAt",
      "created_at": "createdAt",
    });
  });

/** @internal */
export type Folder$Outbound = {
  id?: string | undefined;
  name: string;
  description?: string | null | undefined;
  path?: string | null | undefined;
  size?: number | null | undefined;
  owner?: Owner$Outbound | undefined;
  parent_folders: Array<LinkedFolder$Outbound>;
  parent_folders_complete?: boolean | undefined;
  custom_mappings?: CustomMappings$Outbound | null | undefined;
  updated_by?: string | null | undefined;
  created_by?: string | null | undefined;
  updated_at?: string | null | undefined;
  created_at?: string | null | undefined;
};

/** @internal */
export const Folder$outboundSchema: z.ZodType<
  Folder$Outbound,
  z.ZodTypeDef,
  Folder
> = z.object({
  id: z.string().optional(),
  name: z.string(),
  description: z.nullable(z.string()).optional(),
  path: z.nullable(z.string()).optional(),
  size: z.nullable(z.number().int()).optional(),
  owner: Owner$outboundSchema.optional(),
  parentFolders: z.array(LinkedFolder$outboundSchema),
  parentFoldersComplete: z.boolean().optional(),
  customMappings: z.nullable(CustomMappings$outboundSchema).optional(),
  updatedBy: z.nullable(z.string()).optional(),
  createdBy: z.nullable(z.string()).optional(),
  updatedAt: z.nullable(z.date().transform(v => v.toISOString())).optional(),
  createdAt: z.nullable(z.date().transform(v => v.toISOString())).optional(),
}).transform((v) => {
  return remap$(v, {
    parentFolders: "parent_folders",
    parentFoldersComplete: "parent_folders_complete",
    customMappings: "custom_mappings",
    updatedBy: "updated_by",
    createdBy: "created_by",
    updatedAt: "updated_at",
    createdAt: "created_at",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Folder$ {
  /** @deprecated use `Folder$inboundSchema` instead. */
  export const inboundSchema = Folder$inboundSchema;
  /** @deprecated use `Folder$outboundSchema` instead. */
  export const outboundSchema = Folder$outboundSchema;
  /** @deprecated use `Folder$Outbound` instead. */
  export type Outbound = Folder$Outbound;
}

export function folderToJSON(folder: Folder): string {
  return JSON.stringify(Folder$outboundSchema.parse(folder));
}

export function folderFromJSON(
  jsonString: string,
): SafeParseResult<Folder, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Folder$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Folder' from JSON`,
  );
}

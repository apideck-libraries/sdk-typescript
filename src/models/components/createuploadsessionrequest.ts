/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import {
  PassThroughBody,
  PassThroughBody$inboundSchema,
  PassThroughBody$Outbound,
  PassThroughBody$outboundSchema,
} from "./passthroughbody.js";

export type CreateUploadSessionRequest = {
  /**
   * The name of the file.
   */
  name: string;
  /**
   * The parent folder to create the new file within. This can be an ID or a path depending on the downstream folder. Please see the connector section below to see downstream specific gotchas.
   */
  parentFolderId: string;
  /**
   * ID of the drive to upload to.
   */
  driveId?: string | undefined;
  /**
   * The size of the file in bytes
   */
  size: number | null;
  /**
   * The pass_through property allows passing service-specific, custom data or structured modifications in request body when creating or updating resources.
   */
  passThrough?: Array<PassThroughBody> | undefined;
};

/** @internal */
export const CreateUploadSessionRequest$inboundSchema: z.ZodType<
  CreateUploadSessionRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  name: z.string(),
  parent_folder_id: z.string(),
  drive_id: z.string().optional(),
  size: z.nullable(z.number().int()),
  pass_through: z.array(PassThroughBody$inboundSchema).optional(),
}).transform((v) => {
  return remap$(v, {
    "parent_folder_id": "parentFolderId",
    "drive_id": "driveId",
    "pass_through": "passThrough",
  });
});

/** @internal */
export type CreateUploadSessionRequest$Outbound = {
  name: string;
  parent_folder_id: string;
  drive_id?: string | undefined;
  size: number | null;
  pass_through?: Array<PassThroughBody$Outbound> | undefined;
};

/** @internal */
export const CreateUploadSessionRequest$outboundSchema: z.ZodType<
  CreateUploadSessionRequest$Outbound,
  z.ZodTypeDef,
  CreateUploadSessionRequest
> = z.object({
  name: z.string(),
  parentFolderId: z.string(),
  driveId: z.string().optional(),
  size: z.nullable(z.number().int()),
  passThrough: z.array(PassThroughBody$outboundSchema).optional(),
}).transform((v) => {
  return remap$(v, {
    parentFolderId: "parent_folder_id",
    driveId: "drive_id",
    passThrough: "pass_through",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CreateUploadSessionRequest$ {
  /** @deprecated use `CreateUploadSessionRequest$inboundSchema` instead. */
  export const inboundSchema = CreateUploadSessionRequest$inboundSchema;
  /** @deprecated use `CreateUploadSessionRequest$outboundSchema` instead. */
  export const outboundSchema = CreateUploadSessionRequest$outboundSchema;
  /** @deprecated use `CreateUploadSessionRequest$Outbound` instead. */
  export type Outbound = CreateUploadSessionRequest$Outbound;
}

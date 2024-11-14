/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { posModifierGroupsCreate } from "../funcs/posModifierGroupsCreate.js";
import { posModifierGroupsDelete } from "../funcs/posModifierGroupsDelete.js";
import { posModifierGroupsGet } from "../funcs/posModifierGroupsGet.js";
import { posModifierGroupsList } from "../funcs/posModifierGroupsList.js";
import { posModifierGroupsUpdate } from "../funcs/posModifierGroupsUpdate.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";

export class ModifierGroups extends ClientSDK {
  /**
   * List Modifier Groups
   *
   * @remarks
   * List Modifier Groups
   */
  async list(
    request: operations.PosModifierGroupsAllRequest,
    options?: RequestOptions,
  ): Promise<operations.PosModifierGroupsAllResponse> {
    return unwrapAsync(posModifierGroupsList(
      this,
      request,
      options,
    ));
  }

  /**
   * Create Modifier Group
   *
   * @remarks
   * Create Modifier Group
   */
  async create(
    request: operations.PosModifierGroupsAddRequest,
    options?: RequestOptions,
  ): Promise<operations.PosModifierGroupsAddResponse> {
    return unwrapAsync(posModifierGroupsCreate(
      this,
      request,
      options,
    ));
  }

  /**
   * Get Modifier Group
   *
   * @remarks
   * Get Modifier Group
   */
  async get(
    request: operations.PosModifierGroupsOneRequest,
    options?: RequestOptions,
  ): Promise<operations.PosModifierGroupsOneResponse> {
    return unwrapAsync(posModifierGroupsGet(
      this,
      request,
      options,
    ));
  }

  /**
   * Update Modifier Group
   *
   * @remarks
   * Update Modifier Group
   */
  async update(
    request: operations.PosModifierGroupsUpdateRequest,
    options?: RequestOptions,
  ): Promise<operations.PosModifierGroupsUpdateResponse> {
    return unwrapAsync(posModifierGroupsUpdate(
      this,
      request,
      options,
    ));
  }

  /**
   * Delete Modifier Group
   *
   * @remarks
   * Delete Modifier Group
   */
  async delete(
    request: operations.PosModifierGroupsDeleteRequest,
    options?: RequestOptions,
  ): Promise<operations.PosModifierGroupsDeleteResponse> {
    return unwrapAsync(posModifierGroupsDelete(
      this,
      request,
      options,
    ));
  }
}
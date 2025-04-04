/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { crmUsersCreate } from "../funcs/crmUsersCreate.js";
import { crmUsersDelete } from "../funcs/crmUsersDelete.js";
import { crmUsersGet } from "../funcs/crmUsersGet.js";
import { crmUsersList } from "../funcs/crmUsersList.js";
import { crmUsersUpdate } from "../funcs/crmUsersUpdate.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";
import { PageIterator, unwrapResultIterator } from "../types/operations.js";

export class Users extends ClientSDK {
  /**
   * List users
   *
   * @remarks
   * List users
   */
  async list(
    request: operations.CrmUsersAllRequest,
    options?: RequestOptions,
  ): Promise<PageIterator<operations.CrmUsersAllResponse, { cursor: string }>> {
    return unwrapResultIterator(crmUsersList(
      this,
      request,
      options,
    ));
  }

  /**
   * Create user
   *
   * @remarks
   * Create user
   */
  async create(
    request: operations.CrmUsersAddRequest,
    options?: RequestOptions,
  ): Promise<operations.CrmUsersAddResponse> {
    return unwrapAsync(crmUsersCreate(
      this,
      request,
      options,
    ));
  }

  /**
   * Get user
   *
   * @remarks
   * Get user
   */
  async get(
    request: operations.CrmUsersOneRequest,
    options?: RequestOptions,
  ): Promise<operations.CrmUsersOneResponse> {
    return unwrapAsync(crmUsersGet(
      this,
      request,
      options,
    ));
  }

  /**
   * Update user
   *
   * @remarks
   * Update user
   */
  async update(
    request: operations.CrmUsersUpdateRequest,
    options?: RequestOptions,
  ): Promise<operations.CrmUsersUpdateResponse> {
    return unwrapAsync(crmUsersUpdate(
      this,
      request,
      options,
    ));
  }

  /**
   * Delete user
   *
   * @remarks
   * Delete user
   */
  async delete(
    request: operations.CrmUsersDeleteRequest,
    options?: RequestOptions,
  ): Promise<operations.CrmUsersDeleteResponse> {
    return unwrapAsync(crmUsersDelete(
      this,
      request,
      options,
    ));
  }
}

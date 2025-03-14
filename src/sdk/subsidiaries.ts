/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { accountingSubsidiariesCreate } from "../funcs/accountingSubsidiariesCreate.js";
import { accountingSubsidiariesDelete } from "../funcs/accountingSubsidiariesDelete.js";
import { accountingSubsidiariesGet } from "../funcs/accountingSubsidiariesGet.js";
import { accountingSubsidiariesList } from "../funcs/accountingSubsidiariesList.js";
import { accountingSubsidiariesUpdate } from "../funcs/accountingSubsidiariesUpdate.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";
import { PageIterator, unwrapResultIterator } from "../types/operations.js";

export class Subsidiaries extends ClientSDK {
  /**
   * List Subsidiaries
   *
   * @remarks
   * List Subsidiaries
   */
  async list(
    request: operations.AccountingSubsidiariesAllRequest,
    options?: RequestOptions,
  ): Promise<
    PageIterator<
      operations.AccountingSubsidiariesAllResponse,
      { cursor: string }
    >
  > {
    return unwrapResultIterator(accountingSubsidiariesList(
      this,
      request,
      options,
    ));
  }

  /**
   * Create Subsidiary
   *
   * @remarks
   * Create Subsidiary
   */
  async create(
    request: operations.AccountingSubsidiariesAddRequest,
    options?: RequestOptions,
  ): Promise<operations.AccountingSubsidiariesAddResponse> {
    return unwrapAsync(accountingSubsidiariesCreate(
      this,
      request,
      options,
    ));
  }

  /**
   * Get Subsidiary
   *
   * @remarks
   * Get Subsidiary
   */
  async get(
    request: operations.AccountingSubsidiariesOneRequest,
    options?: RequestOptions,
  ): Promise<operations.AccountingSubsidiariesOneResponse> {
    return unwrapAsync(accountingSubsidiariesGet(
      this,
      request,
      options,
    ));
  }

  /**
   * Update Subsidiary
   *
   * @remarks
   * Update Subsidiary
   */
  async update(
    request: operations.AccountingSubsidiariesUpdateRequest,
    options?: RequestOptions,
  ): Promise<operations.AccountingSubsidiariesUpdateResponse> {
    return unwrapAsync(accountingSubsidiariesUpdate(
      this,
      request,
      options,
    ));
  }

  /**
   * Delete Subsidiary
   *
   * @remarks
   * Delete Subsidiary
   */
  async delete(
    request: operations.AccountingSubsidiariesDeleteRequest,
    options?: RequestOptions,
  ): Promise<operations.AccountingSubsidiariesDeleteResponse> {
    return unwrapAsync(accountingSubsidiariesDelete(
      this,
      request,
      options,
    ));
  }
}

/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { accountingTrackingCategoriesCreate } from "../funcs/accountingTrackingCategoriesCreate.js";
import { accountingTrackingCategoriesDelete } from "../funcs/accountingTrackingCategoriesDelete.js";
import { accountingTrackingCategoriesGet } from "../funcs/accountingTrackingCategoriesGet.js";
import { accountingTrackingCategoriesList } from "../funcs/accountingTrackingCategoriesList.js";
import { accountingTrackingCategoriesUpdate } from "../funcs/accountingTrackingCategoriesUpdate.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";
import { PageIterator, unwrapResultIterator } from "../types/operations.js";

export class TrackingCategories extends ClientSDK {
  /**
   * List Tracking Categories
   *
   * @remarks
   * List Tracking Categories
   */
  async list(
    request: operations.AccountingTrackingCategoriesAllRequest,
    options?: RequestOptions,
  ): Promise<
    PageIterator<
      operations.AccountingTrackingCategoriesAllResponse,
      { cursor: string }
    >
  > {
    return unwrapResultIterator(accountingTrackingCategoriesList(
      this,
      request,
      options,
    ));
  }

  /**
   * Create Tracking Category
   *
   * @remarks
   * Create Tracking Category
   */
  async create(
    request: operations.AccountingTrackingCategoriesAddRequest,
    options?: RequestOptions,
  ): Promise<operations.AccountingTrackingCategoriesAddResponse> {
    return unwrapAsync(accountingTrackingCategoriesCreate(
      this,
      request,
      options,
    ));
  }

  /**
   * Get Tracking Category
   *
   * @remarks
   * Get Tracking Category
   */
  async get(
    request: operations.AccountingTrackingCategoriesOneRequest,
    options?: RequestOptions,
  ): Promise<operations.AccountingTrackingCategoriesOneResponse> {
    return unwrapAsync(accountingTrackingCategoriesGet(
      this,
      request,
      options,
    ));
  }

  /**
   * Update Tracking Category
   *
   * @remarks
   * Update Tracking Category
   */
  async update(
    request: operations.AccountingTrackingCategoriesUpdateRequest,
    options?: RequestOptions,
  ): Promise<operations.AccountingTrackingCategoriesUpdateResponse> {
    return unwrapAsync(accountingTrackingCategoriesUpdate(
      this,
      request,
      options,
    ));
  }

  /**
   * Delete Tracking Category
   *
   * @remarks
   * Delete Tracking Category
   */
  async delete(
    request: operations.AccountingTrackingCategoriesDeleteRequest,
    options?: RequestOptions,
  ): Promise<operations.AccountingTrackingCategoriesDeleteResponse> {
    return unwrapAsync(accountingTrackingCategoriesDelete(
      this,
      request,
      options,
    ));
  }
}

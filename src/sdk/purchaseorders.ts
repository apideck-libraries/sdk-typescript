/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { accountingPurchaseOrdersCreate } from "../funcs/accountingPurchaseOrdersCreate.js";
import { accountingPurchaseOrdersDelete } from "../funcs/accountingPurchaseOrdersDelete.js";
import { accountingPurchaseOrdersGet } from "../funcs/accountingPurchaseOrdersGet.js";
import { accountingPurchaseOrdersList } from "../funcs/accountingPurchaseOrdersList.js";
import { accountingPurchaseOrdersUpdate } from "../funcs/accountingPurchaseOrdersUpdate.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";

export class PurchaseOrders extends ClientSDK {
  /**
   * List Purchase Orders
   *
   * @remarks
   * List Purchase Orders
   */
  async list(
    request: operations.AccountingPurchaseOrdersAllRequest,
    options?: RequestOptions,
  ): Promise<operations.AccountingPurchaseOrdersAllResponse> {
    return unwrapAsync(accountingPurchaseOrdersList(
      this,
      request,
      options,
    ));
  }

  /**
   * Create Purchase Order
   *
   * @remarks
   * Create Purchase Order
   */
  async create(
    request: operations.AccountingPurchaseOrdersAddRequest,
    options?: RequestOptions,
  ): Promise<operations.AccountingPurchaseOrdersAddResponse> {
    return unwrapAsync(accountingPurchaseOrdersCreate(
      this,
      request,
      options,
    ));
  }

  /**
   * Get Purchase Order
   *
   * @remarks
   * Get Purchase Order
   */
  async get(
    request: operations.AccountingPurchaseOrdersOneRequest,
    options?: RequestOptions,
  ): Promise<operations.AccountingPurchaseOrdersOneResponse> {
    return unwrapAsync(accountingPurchaseOrdersGet(
      this,
      request,
      options,
    ));
  }

  /**
   * Update Purchase Order
   *
   * @remarks
   * Update Purchase Order
   */
  async update(
    request: operations.AccountingPurchaseOrdersUpdateRequest,
    options?: RequestOptions,
  ): Promise<operations.AccountingPurchaseOrdersUpdateResponse> {
    return unwrapAsync(accountingPurchaseOrdersUpdate(
      this,
      request,
      options,
    ));
  }

  /**
   * Delete Purchase Order
   *
   * @remarks
   * Delete Purchase Order
   */
  async delete(
    request: operations.AccountingPurchaseOrdersDeleteRequest,
    options?: RequestOptions,
  ): Promise<operations.AccountingPurchaseOrdersDeleteResponse> {
    return unwrapAsync(accountingPurchaseOrdersDelete(
      this,
      request,
      options,
    ));
  }
}
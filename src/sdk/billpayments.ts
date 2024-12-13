/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { accountingBillPaymentsCreate } from "../funcs/accountingBillPaymentsCreate.js";
import { accountingBillPaymentsDelete } from "../funcs/accountingBillPaymentsDelete.js";
import { accountingBillPaymentsGet } from "../funcs/accountingBillPaymentsGet.js";
import { accountingBillPaymentsList } from "../funcs/accountingBillPaymentsList.js";
import { accountingBillPaymentsUpdate } from "../funcs/accountingBillPaymentsUpdate.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";
import { PageIterator, unwrapResultIterator } from "../types/operations.js";

export class BillPayments extends ClientSDK {
  /**
   * List Bill Payments
   *
   * @remarks
   * List Bill Payments
   */
  async list(
    request: operations.AccountingBillPaymentsAllRequest,
    options?: RequestOptions,
  ): Promise<
    PageIterator<
      operations.AccountingBillPaymentsAllResponse,
      { cursor: string }
    >
  > {
    return unwrapResultIterator(accountingBillPaymentsList(
      this,
      request,
      options,
    ));
  }

  /**
   * Create Bill Payment
   *
   * @remarks
   * Create Bill Payment
   */
  async create(
    request: operations.AccountingBillPaymentsAddRequest,
    options?: RequestOptions,
  ): Promise<operations.AccountingBillPaymentsAddResponse> {
    return unwrapAsync(accountingBillPaymentsCreate(
      this,
      request,
      options,
    ));
  }

  /**
   * Get Bill Payment
   *
   * @remarks
   * Get Bill Payment
   */
  async get(
    request: operations.AccountingBillPaymentsOneRequest,
    options?: RequestOptions,
  ): Promise<operations.AccountingBillPaymentsOneResponse> {
    return unwrapAsync(accountingBillPaymentsGet(
      this,
      request,
      options,
    ));
  }

  /**
   * Update Bill Payment
   *
   * @remarks
   * Update Bill Payment
   */
  async update(
    request: operations.AccountingBillPaymentsUpdateRequest,
    options?: RequestOptions,
  ): Promise<operations.AccountingBillPaymentsUpdateResponse> {
    return unwrapAsync(accountingBillPaymentsUpdate(
      this,
      request,
      options,
    ));
  }

  /**
   * Delete Bill Payment
   *
   * @remarks
   * Delete Bill Payment
   */
  async delete(
    request: operations.AccountingBillPaymentsDeleteRequest,
    options?: RequestOptions,
  ): Promise<operations.AccountingBillPaymentsDeleteResponse> {
    return unwrapAsync(accountingBillPaymentsDelete(
      this,
      request,
      options,
    ));
  }
}

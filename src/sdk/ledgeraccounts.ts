/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { accountingLedgerAccountsCreate } from "../funcs/accountingLedgerAccountsCreate.js";
import { accountingLedgerAccountsDelete } from "../funcs/accountingLedgerAccountsDelete.js";
import { accountingLedgerAccountsGet } from "../funcs/accountingLedgerAccountsGet.js";
import { accountingLedgerAccountsList } from "../funcs/accountingLedgerAccountsList.js";
import { accountingLedgerAccountsUpdate } from "../funcs/accountingLedgerAccountsUpdate.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";
import { PageIterator, unwrapResultIterator } from "../types/operations.js";

export class LedgerAccounts extends ClientSDK {
  /**
   * List Ledger Accounts
   *
   * @remarks
   * List Ledger Accounts
   */
  async list(
    request: operations.AccountingLedgerAccountsAllRequest,
    options?: RequestOptions,
  ): Promise<
    PageIterator<
      operations.AccountingLedgerAccountsAllResponse,
      { cursor: string }
    >
  > {
    return unwrapResultIterator(accountingLedgerAccountsList(
      this,
      request,
      options,
    ));
  }

  /**
   * Create Ledger Account
   *
   * @remarks
   * Create Ledger Account
   */
  async create(
    request: operations.AccountingLedgerAccountsAddRequest,
    options?: RequestOptions,
  ): Promise<operations.AccountingLedgerAccountsAddResponse> {
    return unwrapAsync(accountingLedgerAccountsCreate(
      this,
      request,
      options,
    ));
  }

  /**
   * Get Ledger Account
   *
   * @remarks
   * Get Ledger Account
   */
  async get(
    request: operations.AccountingLedgerAccountsOneRequest,
    options?: RequestOptions,
  ): Promise<operations.AccountingLedgerAccountsOneResponse> {
    return unwrapAsync(accountingLedgerAccountsGet(
      this,
      request,
      options,
    ));
  }

  /**
   * Update Ledger Account
   *
   * @remarks
   * Update Ledger Account
   */
  async update(
    request: operations.AccountingLedgerAccountsUpdateRequest,
    options?: RequestOptions,
  ): Promise<operations.AccountingLedgerAccountsUpdateResponse> {
    return unwrapAsync(accountingLedgerAccountsUpdate(
      this,
      request,
      options,
    ));
  }

  /**
   * Delete Ledger Account
   *
   * @remarks
   * Delete Ledger Account
   */
  async delete(
    request: operations.AccountingLedgerAccountsDeleteRequest,
    options?: RequestOptions,
  ): Promise<operations.AccountingLedgerAccountsDeleteResponse> {
    return unwrapAsync(accountingLedgerAccountsDelete(
      this,
      request,
      options,
    ));
  }
}

/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { accountingJournalEntriesCreate } from "../funcs/accountingJournalEntriesCreate.js";
import { accountingJournalEntriesDelete } from "../funcs/accountingJournalEntriesDelete.js";
import { accountingJournalEntriesGet } from "../funcs/accountingJournalEntriesGet.js";
import { accountingJournalEntriesList } from "../funcs/accountingJournalEntriesList.js";
import { accountingJournalEntriesUpdate } from "../funcs/accountingJournalEntriesUpdate.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";

export class JournalEntries extends ClientSDK {
  /**
   * List Journal Entries
   *
   * @remarks
   * List Journal Entries
   */
  async list(
    request: operations.AccountingJournalEntriesAllRequest,
    options?: RequestOptions,
  ): Promise<operations.AccountingJournalEntriesAllResponse> {
    return unwrapAsync(accountingJournalEntriesList(
      this,
      request,
      options,
    ));
  }

  /**
   * Create Journal Entry
   *
   * @remarks
   * Create Journal Entry
   */
  async create(
    request: operations.AccountingJournalEntriesAddRequest,
    options?: RequestOptions,
  ): Promise<operations.AccountingJournalEntriesAddResponse> {
    return unwrapAsync(accountingJournalEntriesCreate(
      this,
      request,
      options,
    ));
  }

  /**
   * Get Journal Entry
   *
   * @remarks
   * Get Journal Entry
   */
  async get(
    request: operations.AccountingJournalEntriesOneRequest,
    options?: RequestOptions,
  ): Promise<operations.AccountingJournalEntriesOneResponse> {
    return unwrapAsync(accountingJournalEntriesGet(
      this,
      request,
      options,
    ));
  }

  /**
   * Update Journal Entry
   *
   * @remarks
   * Update Journal Entry
   */
  async update(
    request: operations.AccountingJournalEntriesUpdateRequest,
    options?: RequestOptions,
  ): Promise<operations.AccountingJournalEntriesUpdateResponse> {
    return unwrapAsync(accountingJournalEntriesUpdate(
      this,
      request,
      options,
    ));
  }

  /**
   * Delete Journal Entry
   *
   * @remarks
   * Delete Journal Entry
   */
  async delete(
    request: operations.AccountingJournalEntriesDeleteRequest,
    options?: RequestOptions,
  ): Promise<operations.AccountingJournalEntriesDeleteResponse> {
    return unwrapAsync(accountingJournalEntriesDelete(
      this,
      request,
      options,
    ));
  }
}
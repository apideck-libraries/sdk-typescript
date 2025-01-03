/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { crmNotesCreate } from "../funcs/crmNotesCreate.js";
import { crmNotesDelete } from "../funcs/crmNotesDelete.js";
import { crmNotesGet } from "../funcs/crmNotesGet.js";
import { crmNotesList } from "../funcs/crmNotesList.js";
import { crmNotesUpdate } from "../funcs/crmNotesUpdate.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";
import { PageIterator, unwrapResultIterator } from "../types/operations.js";

export class Notes extends ClientSDK {
  /**
   * List notes
   *
   * @remarks
   * List notes
   */
  async list(
    request: operations.CrmNotesAllRequest,
    options?: RequestOptions,
  ): Promise<PageIterator<operations.CrmNotesAllResponse, { cursor: string }>> {
    return unwrapResultIterator(crmNotesList(
      this,
      request,
      options,
    ));
  }

  /**
   * Create note
   *
   * @remarks
   * Create note
   */
  async create(
    request: operations.CrmNotesAddRequest,
    options?: RequestOptions,
  ): Promise<operations.CrmNotesAddResponse> {
    return unwrapAsync(crmNotesCreate(
      this,
      request,
      options,
    ));
  }

  /**
   * Get note
   *
   * @remarks
   * Get note
   */
  async get(
    request: operations.CrmNotesOneRequest,
    options?: RequestOptions,
  ): Promise<operations.CrmNotesOneResponse> {
    return unwrapAsync(crmNotesGet(
      this,
      request,
      options,
    ));
  }

  /**
   * Update note
   *
   * @remarks
   * Update note
   */
  async update(
    request: operations.CrmNotesUpdateRequest,
    options?: RequestOptions,
  ): Promise<operations.CrmNotesUpdateResponse> {
    return unwrapAsync(crmNotesUpdate(
      this,
      request,
      options,
    ));
  }

  /**
   * Delete note
   *
   * @remarks
   * Delete note
   */
  async delete(
    request: operations.CrmNotesDeleteRequest,
    options?: RequestOptions,
  ): Promise<operations.CrmNotesDeleteResponse> {
    return unwrapAsync(crmNotesDelete(
      this,
      request,
      options,
    ));
  }
}

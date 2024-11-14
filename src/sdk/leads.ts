/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { crmLeadsCreate } from "../funcs/crmLeadsCreate.js";
import { crmLeadsDelete } from "../funcs/crmLeadsDelete.js";
import { crmLeadsGet } from "../funcs/crmLeadsGet.js";
import { crmLeadsList } from "../funcs/crmLeadsList.js";
import { crmLeadsUpdate } from "../funcs/crmLeadsUpdate.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";

export class Leads extends ClientSDK {
  /**
   * List leads
   *
   * @remarks
   * List leads
   */
  async list(
    request: operations.CrmLeadsAllRequest,
    options?: RequestOptions,
  ): Promise<operations.CrmLeadsAllResponse> {
    return unwrapAsync(crmLeadsList(
      this,
      request,
      options,
    ));
  }

  /**
   * Create lead
   *
   * @remarks
   * Create lead
   */
  async create(
    request: operations.CrmLeadsAddRequest,
    options?: RequestOptions,
  ): Promise<operations.CrmLeadsAddResponse> {
    return unwrapAsync(crmLeadsCreate(
      this,
      request,
      options,
    ));
  }

  /**
   * Get lead
   *
   * @remarks
   * Get lead
   */
  async get(
    request: operations.CrmLeadsOneRequest,
    options?: RequestOptions,
  ): Promise<operations.CrmLeadsOneResponse> {
    return unwrapAsync(crmLeadsGet(
      this,
      request,
      options,
    ));
  }

  /**
   * Update lead
   *
   * @remarks
   * Update lead
   */
  async update(
    request: operations.CrmLeadsUpdateRequest,
    options?: RequestOptions,
  ): Promise<operations.CrmLeadsUpdateResponse> {
    return unwrapAsync(crmLeadsUpdate(
      this,
      request,
      options,
    ));
  }

  /**
   * Delete lead
   *
   * @remarks
   * Delete lead
   */
  async delete(
    request: operations.CrmLeadsDeleteRequest,
    options?: RequestOptions,
  ): Promise<operations.CrmLeadsDeleteResponse> {
    return unwrapAsync(crmLeadsDelete(
      this,
      request,
      options,
    ));
  }
}
/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { accountingDepartmentsCreate } from "../funcs/accountingDepartmentsCreate.js";
import { accountingDepartmentsDelete } from "../funcs/accountingDepartmentsDelete.js";
import { accountingDepartmentsGet } from "../funcs/accountingDepartmentsGet.js";
import { accountingDepartmentsList } from "../funcs/accountingDepartmentsList.js";
import { accountingDepartmentsUpdate } from "../funcs/accountingDepartmentsUpdate.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";
import { PageIterator, unwrapResultIterator } from "../types/operations.js";

export class ApideckDepartments extends ClientSDK {
  /**
   * List Departments
   *
   * @remarks
   * List Departments
   */
  async list(
    request: operations.AccountingDepartmentsAllRequest,
    options?: RequestOptions,
  ): Promise<
    PageIterator<
      operations.AccountingDepartmentsAllResponse,
      { cursor: string }
    >
  > {
    return unwrapResultIterator(accountingDepartmentsList(
      this,
      request,
      options,
    ));
  }

  /**
   * Create Department
   *
   * @remarks
   * Create Department
   */
  async create(
    request: operations.AccountingDepartmentsAddRequest,
    options?: RequestOptions,
  ): Promise<operations.AccountingDepartmentsAddResponse> {
    return unwrapAsync(accountingDepartmentsCreate(
      this,
      request,
      options,
    ));
  }

  /**
   * Get Department
   *
   * @remarks
   * Get Department
   */
  async get(
    request: operations.AccountingDepartmentsOneRequest,
    options?: RequestOptions,
  ): Promise<operations.AccountingDepartmentsOneResponse> {
    return unwrapAsync(accountingDepartmentsGet(
      this,
      request,
      options,
    ));
  }

  /**
   * Update Department
   *
   * @remarks
   * Update Department
   */
  async update(
    request: operations.AccountingDepartmentsUpdateRequest,
    options?: RequestOptions,
  ): Promise<operations.AccountingDepartmentsUpdateResponse> {
    return unwrapAsync(accountingDepartmentsUpdate(
      this,
      request,
      options,
    ));
  }

  /**
   * Delete Department
   *
   * @remarks
   * Delete Department
   */
  async delete(
    request: operations.AccountingDepartmentsDeleteRequest,
    options?: RequestOptions,
  ): Promise<operations.AccountingDepartmentsDeleteResponse> {
    return unwrapAsync(accountingDepartmentsDelete(
      this,
      request,
      options,
    ));
  }
}

/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { hrisEmployeesCreate } from "../funcs/hrisEmployeesCreate.js";
import { hrisEmployeesDelete } from "../funcs/hrisEmployeesDelete.js";
import { hrisEmployeesGet } from "../funcs/hrisEmployeesGet.js";
import { hrisEmployeesList } from "../funcs/hrisEmployeesList.js";
import { hrisEmployeesUpdate } from "../funcs/hrisEmployeesUpdate.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";
import { PageIterator, unwrapResultIterator } from "../types/operations.js";

export class Employees extends ClientSDK {
  /**
   * List Employees
   *
   * @remarks
   * Apideck operates as a stateless Unified API, which means that the list endpoint only provides a portion of the employee model. This is due to the fact that most HRIS systems do not readily provide all data in every call. However, you can access the complete employee model through an employee detail call.
   */
  async list(
    request: operations.HrisEmployeesAllRequest,
    options?: RequestOptions,
  ): Promise<
    PageIterator<operations.HrisEmployeesAllResponse, { cursor: string }>
  > {
    return unwrapResultIterator(hrisEmployeesList(
      this,
      request,
      options,
    ));
  }

  /**
   * Create Employee
   *
   * @remarks
   * Create Employee
   */
  async create(
    request: operations.HrisEmployeesAddRequest,
    options?: RequestOptions,
  ): Promise<operations.HrisEmployeesAddResponse> {
    return unwrapAsync(hrisEmployeesCreate(
      this,
      request,
      options,
    ));
  }

  /**
   * Get Employee
   *
   * @remarks
   * Get Employee
   */
  async get(
    request: operations.HrisEmployeesOneRequest,
    options?: RequestOptions,
  ): Promise<operations.HrisEmployeesOneResponse> {
    return unwrapAsync(hrisEmployeesGet(
      this,
      request,
      options,
    ));
  }

  /**
   * Update Employee
   *
   * @remarks
   * Update Employee
   */
  async update(
    request: operations.HrisEmployeesUpdateRequest,
    options?: RequestOptions,
  ): Promise<operations.HrisEmployeesUpdateResponse> {
    return unwrapAsync(hrisEmployeesUpdate(
      this,
      request,
      options,
    ));
  }

  /**
   * Delete Employee
   *
   * @remarks
   * Delete Employee
   */
  async delete(
    request: operations.HrisEmployeesDeleteRequest,
    options?: RequestOptions,
  ): Promise<operations.HrisEmployeesDeleteResponse> {
    return unwrapAsync(hrisEmployeesDelete(
      this,
      request,
      options,
    ));
  }
}

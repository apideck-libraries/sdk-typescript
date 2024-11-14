/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { hrisPayrollsGet } from "../funcs/hrisPayrollsGet.js";
import { hrisPayrollsList } from "../funcs/hrisPayrollsList.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";

export class Payrolls extends ClientSDK {
  /**
   * List Payroll
   *
   * @remarks
   * List Payroll
   */
  async list(
    request: operations.HrisPayrollsAllRequest,
    options?: RequestOptions,
  ): Promise<operations.HrisPayrollsAllResponse> {
    return unwrapAsync(hrisPayrollsList(
      this,
      request,
      options,
    ));
  }

  /**
   * Get Payroll
   *
   * @remarks
   * Get Payroll
   */
  async get(
    request: operations.HrisPayrollsOneRequest,
    options?: RequestOptions,
  ): Promise<operations.HrisPayrollsOneResponse> {
    return unwrapAsync(hrisPayrollsGet(
      this,
      request,
      options,
    ));
  }
}
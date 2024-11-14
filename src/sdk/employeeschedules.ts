/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { hrisEmployeeSchedulesList } from "../funcs/hrisEmployeeSchedulesList.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";

export class EmployeeSchedules extends ClientSDK {
  /**
   * List Employee Schedules
   *
   * @remarks
   * List schedules for employee, a schedule is a work pattern, not the actual worked hours, for an employee.
   */
  async list(
    request: operations.HrisEmployeeSchedulesAllRequest,
    options?: RequestOptions,
  ): Promise<operations.HrisEmployeeSchedulesAllResponse> {
    return unwrapAsync(hrisEmployeeSchedulesList(
      this,
      request,
      options,
    ));
  }
}
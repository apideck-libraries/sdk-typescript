/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { atsJobsGet } from "../funcs/atsJobsGet.js";
import { atsJobsList } from "../funcs/atsJobsList.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";
import { PageIterator, unwrapResultIterator } from "../types/operations.js";

export class Jobs extends ClientSDK {
  /**
   * List Jobs
   *
   * @remarks
   * List Jobs
   */
  async list(
    request: operations.AtsJobsAllRequest,
    options?: RequestOptions,
  ): Promise<PageIterator<operations.AtsJobsAllResponse, { cursor: string }>> {
    return unwrapResultIterator(atsJobsList(
      this,
      request,
      options,
    ));
  }

  /**
   * Get Job
   *
   * @remarks
   * Get Job
   */
  async get(
    request: operations.AtsJobsOneRequest,
    options?: RequestOptions,
  ): Promise<operations.AtsJobsOneResponse> {
    return unwrapAsync(atsJobsGet(
      this,
      request,
      options,
    ));
  }
}

/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { vaultLogsList } from "../funcs/vaultLogsList.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { PageIterator, unwrapResultIterator } from "../types/operations.js";

export class Logs extends ClientSDK {
  /**
   * Get all consumer request logs
   *
   * @remarks
   * This endpoint includes all consumer request logs.
   */
  async list(
    request: operations.VaultLogsAllRequest,
    options?: RequestOptions,
  ): Promise<
    PageIterator<operations.VaultLogsAllResponse, { cursor: string }>
  > {
    return unwrapResultIterator(vaultLogsList(
      this,
      request,
      options,
    ));
  }
}

/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { crmPipelinesList } from "../funcs/crmPipelinesList.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { PageIterator, unwrapResultIterator } from "../types/operations.js";

export class Pipelines extends ClientSDK {
  /**
   * List pipelines
   *
   * @remarks
   * List pipelines
   */
  async list(
    request: operations.CrmPipelinesAllRequest,
    options?: RequestOptions,
  ): Promise<
    PageIterator<operations.CrmPipelinesAllResponse, { cursor: string }>
  > {
    return unwrapResultIterator(crmPipelinesList(
      this,
      request,
      options,
    ));
  }
}

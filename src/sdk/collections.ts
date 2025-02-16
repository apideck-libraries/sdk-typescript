/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { issueTrackingCollectionsGet } from "../funcs/issueTrackingCollectionsGet.js";
import { issueTrackingCollectionsList } from "../funcs/issueTrackingCollectionsList.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";
import { PageIterator, unwrapResultIterator } from "../types/operations.js";

export class Collections extends ClientSDK {
  /**
   * List Collections
   *
   * @remarks
   * List Collections
   */
  async list(
    request: operations.IssueTrackingCollectionsAllRequest,
    options?: RequestOptions,
  ): Promise<
    PageIterator<
      operations.IssueTrackingCollectionsAllResponse,
      { cursor: string }
    >
  > {
    return unwrapResultIterator(issueTrackingCollectionsList(
      this,
      request,
      options,
    ));
  }

  /**
   * Get Collection
   *
   * @remarks
   * Get Collection
   */
  async get(
    request: operations.IssueTrackingCollectionsOneRequest,
    options?: RequestOptions,
  ): Promise<operations.IssueTrackingCollectionsOneResponse> {
    return unwrapAsync(issueTrackingCollectionsGet(
      this,
      request,
      options,
    ));
  }
}

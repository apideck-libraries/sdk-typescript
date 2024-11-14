/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { issueTrackingCollectionTagsList } from "../funcs/issueTrackingCollectionTagsList.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";

export class CollectionTags extends ClientSDK {
  /**
   * List Tags
   *
   * @remarks
   * List Tags
   */
  async list(
    request: operations.IssueTrackingCollectionTagsAllRequest,
    options?: RequestOptions,
  ): Promise<operations.IssueTrackingCollectionTagsAllResponse> {
    return unwrapAsync(issueTrackingCollectionTagsList(
      this,
      request,
      options,
    ));
  }
}
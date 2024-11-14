/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { vaultCustomFieldsList } from "../funcs/vaultCustomFieldsList.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";

export class CustomFields extends ClientSDK {
  /**
   * Get resource custom fields
   *
   * @remarks
   * This endpoint returns an custom fields on a connection resource.
   */
  async list(
    request: operations.VaultCustomFieldsAllRequest,
    options?: RequestOptions,
  ): Promise<operations.VaultCustomFieldsAllResponse> {
    return unwrapAsync(vaultCustomFieldsList(
      this,
      request,
      options,
    ));
  }
}
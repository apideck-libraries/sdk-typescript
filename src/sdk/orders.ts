/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { ecommerceOrdersGet } from "../funcs/ecommerceOrdersGet.js";
import { ecommerceOrdersList } from "../funcs/ecommerceOrdersList.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";

export class Orders extends ClientSDK {
  /**
   * List Orders
   *
   * @remarks
   * List Orders
   */
  async list(
    request: operations.EcommerceOrdersAllRequest,
    options?: RequestOptions,
  ): Promise<operations.EcommerceOrdersAllResponse> {
    return unwrapAsync(ecommerceOrdersList(
      this,
      request,
      options,
    ));
  }

  /**
   * Get Order
   *
   * @remarks
   * Get Order
   */
  async get(
    request: operations.EcommerceOrdersOneRequest,
    options?: RequestOptions,
  ): Promise<operations.EcommerceOrdersOneResponse> {
    return unwrapAsync(ecommerceOrdersGet(
      this,
      request,
      options,
    ));
  }
}

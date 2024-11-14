/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { ecommerceProductsGet } from "../funcs/ecommerceProductsGet.js";
import { ecommerceProductsList } from "../funcs/ecommerceProductsList.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";

export class Products extends ClientSDK {
  /**
   * List Products
   *
   * @remarks
   * List Products
   */
  async list(
    request: operations.EcommerceProductsAllRequest,
    options?: RequestOptions,
  ): Promise<operations.EcommerceProductsAllResponse> {
    return unwrapAsync(ecommerceProductsList(
      this,
      request,
      options,
    ));
  }

  /**
   * Get Product
   *
   * @remarks
   * Get Product
   */
  async get(
    request: operations.EcommerceProductsOneRequest,
    options?: RequestOptions,
  ): Promise<operations.EcommerceProductsOneResponse> {
    return unwrapAsync(ecommerceProductsGet(
      this,
      request,
      options,
    ));
  }
}
/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { accountingCompanyInfoGet } from "../funcs/accountingCompanyInfoGet.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";

export class CompanyInfo extends ClientSDK {
  /**
   * Get company info
   *
   * @remarks
   * Get company info
   */
  async get(
    request: operations.AccountingCompanyInfoOneRequest,
    options?: RequestOptions,
  ): Promise<operations.AccountingCompanyInfoOneResponse> {
    return unwrapAsync(accountingCompanyInfoGet(
      this,
      request,
      options,
    ));
  }
}
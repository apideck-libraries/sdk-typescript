/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { smsMessagesCreate } from "../funcs/smsMessagesCreate.js";
import { smsMessagesDelete } from "../funcs/smsMessagesDelete.js";
import { smsMessagesGet } from "../funcs/smsMessagesGet.js";
import { smsMessagesList } from "../funcs/smsMessagesList.js";
import { smsMessagesUpdate } from "../funcs/smsMessagesUpdate.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";
import { PageIterator, unwrapResultIterator } from "../types/operations.js";

export class Messages extends ClientSDK {
  /**
   * List Messages
   *
   * @remarks
   * List Messages
   */
  async list(
    request: operations.SmsMessagesAllRequest,
    options?: RequestOptions,
  ): Promise<
    PageIterator<operations.SmsMessagesAllResponse, { cursor: string }>
  > {
    return unwrapResultIterator(smsMessagesList(
      this,
      request,
      options,
    ));
  }

  /**
   * Create Message
   *
   * @remarks
   * Create Message
   */
  async create(
    request: operations.SmsMessagesAddRequest,
    options?: RequestOptions,
  ): Promise<operations.SmsMessagesAddResponse> {
    return unwrapAsync(smsMessagesCreate(
      this,
      request,
      options,
    ));
  }

  /**
   * Get Message
   *
   * @remarks
   * Get Message
   */
  async get(
    request: operations.SmsMessagesOneRequest,
    options?: RequestOptions,
  ): Promise<operations.SmsMessagesOneResponse> {
    return unwrapAsync(smsMessagesGet(
      this,
      request,
      options,
    ));
  }

  /**
   * Update Message
   *
   * @remarks
   * Update Message
   */
  async update(
    request: operations.SmsMessagesUpdateRequest,
    options?: RequestOptions,
  ): Promise<operations.SmsMessagesUpdateResponse> {
    return unwrapAsync(smsMessagesUpdate(
      this,
      request,
      options,
    ));
  }

  /**
   * Delete Message
   *
   * @remarks
   * Delete Message
   */
  async delete(
    request: operations.SmsMessagesDeleteRequest,
    options?: RequestOptions,
  ): Promise<operations.SmsMessagesDeleteResponse> {
    return unwrapAsync(smsMessagesDelete(
      this,
      request,
      options,
    ));
  }
}

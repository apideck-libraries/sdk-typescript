/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { vaultConsumersCreate } from "../funcs/vaultConsumersCreate.js";
import { vaultConsumersDelete } from "../funcs/vaultConsumersDelete.js";
import { vaultConsumersGet } from "../funcs/vaultConsumersGet.js";
import { vaultConsumersList } from "../funcs/vaultConsumersList.js";
import { vaultConsumersUpdate } from "../funcs/vaultConsumersUpdate.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";
import { PageIterator, unwrapResultIterator } from "../types/operations.js";

export class Consumers extends ClientSDK {
  /**
   * Create consumer
   *
   * @remarks
   * Create a consumer
   */
  async create(
    request: components.ConsumerInput,
    options?: RequestOptions,
  ): Promise<operations.VaultConsumersAddResponse> {
    return unwrapAsync(vaultConsumersCreate(
      this,
      request,
      options,
    ));
  }

  /**
   * Get all consumers
   *
   * @remarks
   * This endpoint includes all application consumers, along with an aggregated count of requests made.
   */
  async list(
    request: operations.VaultConsumersAllRequest,
    options?: RequestOptions,
  ): Promise<
    PageIterator<operations.VaultConsumersAllResponse, { cursor: string }>
  > {
    return unwrapResultIterator(vaultConsumersList(
      this,
      request,
      options,
    ));
  }

  /**
   * Get consumer
   *
   * @remarks
   * Consumer detail including their aggregated counts with the connections they have authorized.
   */
  async get(
    request: operations.VaultConsumersOneRequest,
    options?: RequestOptions,
  ): Promise<operations.VaultConsumersOneResponse> {
    return unwrapAsync(vaultConsumersGet(
      this,
      request,
      options,
    ));
  }

  /**
   * Update consumer
   *
   * @remarks
   * Update consumer metadata such as name and email.
   */
  async update(
    request: operations.VaultConsumersUpdateRequest,
    options?: RequestOptions,
  ): Promise<operations.VaultConsumersUpdateResponse> {
    return unwrapAsync(vaultConsumersUpdate(
      this,
      request,
      options,
    ));
  }

  /**
   * Delete consumer
   *
   * @remarks
   * Delete consumer and all their connections, including credentials.
   */
  async delete(
    request: operations.VaultConsumersDeleteRequest,
    options?: RequestOptions,
  ): Promise<operations.VaultConsumersDeleteResponse> {
    return unwrapAsync(vaultConsumersDelete(
      this,
      request,
      options,
    ));
  }
}

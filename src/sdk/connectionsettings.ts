/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { vaultConnectionSettingsList } from "../funcs/vaultConnectionSettingsList.js";
import { vaultConnectionSettingsUpdate } from "../funcs/vaultConnectionSettingsUpdate.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";

export class ConnectionSettings extends ClientSDK {
  /**
   * Get resource settings
   *
   * @remarks
   * This endpoint returns custom settings and their defaults required by connection for a given resource.
   */
  async list(
    request: operations.VaultConnectionSettingsAllRequest,
    options?: RequestOptions,
  ): Promise<operations.VaultConnectionSettingsAllResponse> {
    return unwrapAsync(vaultConnectionSettingsList(
      this,
      request,
      options,
    ));
  }

  /**
   * Update settings
   *
   * @remarks
   * Update default values for a connection's resource settings
   */
  async update(
    request: operations.VaultConnectionSettingsUpdateRequest,
    options?: RequestOptions,
  ): Promise<operations.VaultConnectionSettingsUpdateResponse> {
    return unwrapAsync(vaultConnectionSettingsUpdate(
      this,
      request,
      options,
    ));
  }
}
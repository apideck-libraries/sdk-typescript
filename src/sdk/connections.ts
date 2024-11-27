/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { vaultConnectionsDelete } from "../funcs/vaultConnectionsDelete.js";
import { vaultConnectionsGet } from "../funcs/vaultConnectionsGet.js";
import { vaultConnectionsImports } from "../funcs/vaultConnectionsImports.js";
import { vaultConnectionsList } from "../funcs/vaultConnectionsList.js";
import { vaultConnectionsToken } from "../funcs/vaultConnectionsToken.js";
import { vaultConnectionsUpdate } from "../funcs/vaultConnectionsUpdate.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";

export class Connections extends ClientSDK {
  /**
   * Get all connections
   *
   * @remarks
   * This endpoint includes all the configured integrations and contains the required assets
   * to build an integrations page where your users can install integrations.
   * OAuth2 supported integrations will contain authorize and revoke links to handle the authentication flows.
   */
  async list(
    request: operations.VaultConnectionsAllRequest,
    options?: RequestOptions,
  ): Promise<operations.VaultConnectionsAllResponse> {
    return unwrapAsync(vaultConnectionsList(
      this,
      request,
      options,
    ));
  }

  /**
   * Get connection
   *
   * @remarks
   * Get a connection
   */
  async get(
    request: operations.VaultConnectionsOneRequest,
    options?: RequestOptions,
  ): Promise<operations.VaultConnectionsOneResponse> {
    return unwrapAsync(vaultConnectionsGet(
      this,
      request,
      options,
    ));
  }

  /**
   * Update connection
   *
   * @remarks
   * Update a connection
   */
  async update(
    request: operations.VaultConnectionsUpdateRequest,
    options?: RequestOptions,
  ): Promise<operations.VaultConnectionsUpdateResponse> {
    return unwrapAsync(vaultConnectionsUpdate(
      this,
      request,
      options,
    ));
  }

  /**
   * Deletes a connection
   *
   * @remarks
   * Deletes a connection
   */
  async delete(
    request: operations.VaultConnectionsDeleteRequest,
    options?: RequestOptions,
  ): Promise<operations.VaultConnectionsDeleteResponse> {
    return unwrapAsync(vaultConnectionsDelete(
      this,
      request,
      options,
    ));
  }

  /**
   * Import connection
   *
   * @remarks
   * Import an authorized connection.
   */
  async imports(
    request: operations.VaultConnectionsImportRequest,
    options?: RequestOptions,
  ): Promise<operations.VaultConnectionsImportResponse> {
    return unwrapAsync(vaultConnectionsImports(
      this,
      request,
      options,
    ));
  }

  /**
   * Authorize Access Token
   *
   * @remarks
   * Triggers exchanging persisted connection credentials for an access token and store it in Vault. Currently supported for connections with the `client_credentials` or `password` OAuth grant type.
   *
   * Note:
   *   - Do not include any credentials in the request body. This operation does not persist changes, but only triggers the exchange of persisted connection credentials for an access token.
   *   - The access token will not be returned in the response. A 200 response code indicates the authorization was successful and that a valid access token was stored on the connection.
   *   - The access token will be used for subsequent API requests.
   */
  async token(
    request: operations.VaultConnectionsTokenRequest,
    options?: RequestOptions,
  ): Promise<operations.VaultConnectionsTokenResponse> {
    return unwrapAsync(vaultConnectionsToken(
      this,
      request,
      options,
    ));
  }
}

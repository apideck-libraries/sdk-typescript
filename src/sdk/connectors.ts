/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { connectorConnectorsGet } from "../funcs/connectorConnectorsGet.js";
import { connectorConnectorsList } from "../funcs/connectorConnectorsList.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";
import { PageIterator, unwrapResultIterator } from "../types/operations.js";

export class Connectors extends ClientSDK {
  /**
   * List Connectors
   *
   * @remarks
   * List Connectors
   */
  async list(
    request: operations.ConnectorConnectorsAllRequest,
    options?: RequestOptions,
  ): Promise<
    PageIterator<operations.ConnectorConnectorsAllResponse, { cursor: string }>
  > {
    return unwrapResultIterator(connectorConnectorsList(
      this,
      request,
      options,
    ));
  }

  /**
   * Get Connector
   *
   * @remarks
   * Get Connector
   */
  async get(
    request: operations.ConnectorConnectorsOneRequest,
    options?: RequestOptions,
  ): Promise<operations.ConnectorConnectorsOneResponse> {
    return unwrapAsync(connectorConnectorsGet(
      this,
      request,
      options,
    ));
  }
}

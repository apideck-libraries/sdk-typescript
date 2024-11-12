/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { connectorConnectorApiResourceCoverageOne } from "../funcs/connectorConnectorApiResourceCoverageOne.js";
import { connectorConnectorApiResourcesOne } from "../funcs/connectorConnectorApiResourcesOne.js";
import { connectorConnectorApisAll } from "../funcs/connectorConnectorApisAll.js";
import { connectorConnectorApisOne } from "../funcs/connectorConnectorApisOne.js";
import {
  connectorConnectorConnectorDocsOne,
  ConnectorConnectorDocsOneAcceptEnum,
} from "../funcs/connectorConnectorConnectorDocsOne.js";
import { connectorConnectorConnectorResourcesOne } from "../funcs/connectorConnectorConnectorResourcesOne.js";
import { connectorConnectorConnectorsAll } from "../funcs/connectorConnectorConnectorsAll.js";
import { connectorConnectorConnectorsOne } from "../funcs/connectorConnectorConnectorsOne.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";

export { ConnectorConnectorDocsOneAcceptEnum } from "../funcs/connectorConnectorConnectorDocsOne.js";

export class Connector extends ClientSDK {
  /**
   * List Connectors
   *
   * @remarks
   * List Connectors
   */
  async connectorConnectorsAll(
    request: operations.ConnectorConnectorsAllRequest,
    options?: RequestOptions,
  ): Promise<operations.ConnectorConnectorsAllResponse> {
    return unwrapAsync(connectorConnectorConnectorsAll(
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
  async connectorConnectorsOne(
    request: operations.ConnectorConnectorsOneRequest,
    options?: RequestOptions,
  ): Promise<operations.ConnectorConnectorsOneResponse> {
    return unwrapAsync(connectorConnectorConnectorsOne(
      this,
      request,
      options,
    ));
  }

  /**
   * Get Connector Doc content
   *
   * @remarks
   * Get Connector Doc content
   */
  async connectorConnectorDocsOne(
    request: operations.ConnectorConnectorDocsOneRequest,
    options?: RequestOptions & {
      acceptHeaderOverride?: ConnectorConnectorDocsOneAcceptEnum;
    },
  ): Promise<operations.ConnectorConnectorDocsOneResponse> {
    return unwrapAsync(connectorConnectorConnectorDocsOne(
      this,
      request,
      options,
    ));
  }

  /**
   * Get Connector Resource
   *
   * @remarks
   * Get Connector Resource
   */
  async connectorConnectorResourcesOne(
    request: operations.ConnectorConnectorResourcesOneRequest,
    options?: RequestOptions,
  ): Promise<operations.ConnectorConnectorResourcesOneResponse> {
    return unwrapAsync(connectorConnectorConnectorResourcesOne(
      this,
      request,
      options,
    ));
  }

  /**
   * List APIs
   *
   * @remarks
   * List APIs
   */
  async connectorApisAll(
    request: operations.ConnectorApisAllRequest,
    options?: RequestOptions,
  ): Promise<operations.ConnectorApisAllResponse> {
    return unwrapAsync(connectorConnectorApisAll(
      this,
      request,
      options,
    ));
  }

  /**
   * Get API
   *
   * @remarks
   * Get API
   */
  async connectorApisOne(
    request: operations.ConnectorApisOneRequest,
    options?: RequestOptions,
  ): Promise<operations.ConnectorApisOneResponse> {
    return unwrapAsync(connectorConnectorApisOne(
      this,
      request,
      options,
    ));
  }

  /**
   * Get API Resource
   *
   * @remarks
   * Get API Resource
   */
  async connectorApiResourcesOne(
    request: operations.ConnectorApiResourcesOneRequest,
    options?: RequestOptions,
  ): Promise<operations.ConnectorApiResourcesOneResponse> {
    return unwrapAsync(connectorConnectorApiResourcesOne(
      this,
      request,
      options,
    ));
  }

  /**
   * Get API Resource Coverage
   *
   * @remarks
   * Get API Resource Coverage
   */
  async connectorApiResourceCoverageOne(
    request: operations.ConnectorApiResourceCoverageOneRequest,
    options?: RequestOptions,
  ): Promise<operations.ConnectorApiResourceCoverageOneResponse> {
    return unwrapAsync(connectorConnectorApiResourceCoverageOne(
      this,
      request,
      options,
    ));
  }
}

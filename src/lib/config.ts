/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { HTTPClient } from "./http.js";
import { Logger } from "./logger.js";
import { RetryConfig } from "./retries.js";
import { Params, pathToFunc } from "./url.js";

/**
 * Contains the list of servers available to the SDK
 */
export const ServerList = [
  "https://unify.apideck.com",
] as const;

export type SDKOptions = {
  apiKey?: string | (() => Promise<string>);

  /**
   * Allows setting the customerId parameter for all supported operations
   */
  customerId?: string | undefined;

  /**
   * Allows setting the appId parameter for all supported operations
   */
  appId?: string | undefined;

  httpClient?: HTTPClient;
  /**
   * Allows overriding the default server used by the SDK
   */
  serverIdx?: number;
  /**
   * Allows overriding the default server URL used by the SDK
   */
  serverURL?: string;
  /**
   * Allows overriding the default retry config used by the SDK
   */
  retryConfig?: RetryConfig;
  timeoutMs?: number;
  debugLogger?: Logger;
};

export function serverURLFromOptions(options: SDKOptions): URL | null {
  let serverURL = options.serverURL;

  const params: Params = {};

  if (!serverURL) {
    const serverIdx = options.serverIdx ?? 0;
    if (serverIdx < 0 || serverIdx >= ServerList.length) {
      throw new Error(`Invalid server index ${serverIdx}`);
    }
    serverURL = ServerList[serverIdx] || "";
  }

  const u = pathToFunc(serverURL)(params);
  return new URL(u);
}

export const SDK_METADATA = {
  language: "typescript",
  openapiDocVersion: "10.8.0",
  sdkVersion: "0.6.1",
  genVersion: "2.457.2",
  userAgent: "speakeasy-sdk/typescript 0.6.1 2.457.2 10.8.0 apideck",
} as const;

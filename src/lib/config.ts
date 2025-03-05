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
  apiKey?: string | (() => Promise<string>) | undefined;

  /**
   * Allows setting the consumerId parameter for all supported operations
   */
  consumerId?: string | undefined;

  /**
   * Allows setting the appId parameter for all supported operations
   */
  appId?: string | undefined;

  httpClient?: HTTPClient;
  /**
   * Allows overriding the default server used by the SDK
   */
  serverIdx?: number | undefined;
  /**
   * Allows overriding the default server URL used by the SDK
   */
  serverURL?: string | undefined;
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
  openapiDocVersion: "10.11.5",
  sdkVersion: "0.19.0",
  genVersion: "2.539.1",
  userAgent: "speakeasy-sdk/typescript 0.19.0 2.539.1 10.11.5 @apideck/unify",
} as const;

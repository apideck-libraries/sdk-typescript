/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { expect, test } from "vitest";
import { Apideck } from "../index.js";
import { createTestHTTPClient } from "./testclient.js";

test("Logs Vault Logs All", async () => {
  const testHttpClient = createTestHTTPClient("vault.logsAll");

  const apideck = new Apideck({
    serverURL: process.env["TEST_SERVER_URL"] ?? "http://localhost:18080",
    httpClient: testHttpClient,
    apiKey: process.env["APIDECK_API_KEY"] ?? "value",
  });

  const result = await apideck.vault.logs.list({
    appId: "dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX",
    consumerId: "test-consumer",
    filter: {
      connectorId: "crm+salesforce",
      statusCode: 201,
      excludeUnifiedApis: "vault,proxy",
    },
  });
  expect(result.httpMeta.response.status).toBe(200);
  expect(result.getLogsResponse).toBeDefined();
  expect(result.getLogsResponse).toEqual({
    statusCode: 200,
    status: "OK",
    data: [
      {
        apiStyle: "REST",
        baseUrl: "unify.apideck.com",
        childRequest: false,
        consumerId: "test-consumer",
        duration: 2220.379304,
        errorMessage: "Refresh token is invalid",
        execution: 2248,
        hasChildren: false,
        httpMethod: "GET",
        id: "0b5f7480-5550-4f5c-a5fc-3c01ac43dd0f",
        latency: 27.620695999999953,
        operation: {
          id: "connectionsAll",
          name: "Get All Connections",
        },
        parentId: "0b5f7480-5550-4f5c-a5fc-3c01ac43dd0f",
        path: "/vault/connections",
        sandbox: false,
        service: {
          id: "apideck-vault",
          name: "Apideck Vault",
        },
        sourceIp: "94.227.131.238",
        statusCode: 200,
        success: true,
        timestamp: "2021-07-12T14:26:17.420Z",
        unifiedApi: "vault",
      },
      {
        apiStyle: "REST",
        baseUrl: "unify.apideck.com",
        childRequest: false,
        consumerId: "test-consumer",
        duration: 2220.379304,
        errorMessage: "Refresh token is invalid",
        execution: 2248,
        hasChildren: false,
        httpMethod: "GET",
        id: "0b5f7480-5550-4f5c-a5fc-3c01ac43dd0f",
        latency: 27.620695999999953,
        operation: {
          id: "connectionsAll",
          name: "Get All Connections",
        },
        parentId: "0b5f7480-5550-4f5c-a5fc-3c01ac43dd0f",
        path: "/vault/connections",
        sandbox: false,
        service: {
          id: "apideck-vault",
          name: "Apideck Vault",
        },
        sourceIp: "94.227.131.238",
        statusCode: 200,
        success: true,
        timestamp: "2021-07-12T14:26:17.420Z",
        unifiedApi: "vault",
      },
      {
        apiStyle: "REST",
        baseUrl: "unify.apideck.com",
        childRequest: false,
        consumerId: "test-consumer",
        duration: 2220.379304,
        errorMessage: "Refresh token is invalid",
        execution: 2248,
        hasChildren: false,
        httpMethod: "GET",
        id: "0b5f7480-5550-4f5c-a5fc-3c01ac43dd0f",
        latency: 27.620695999999953,
        operation: {
          id: "connectionsAll",
          name: "Get All Connections",
        },
        parentId: "0b5f7480-5550-4f5c-a5fc-3c01ac43dd0f",
        path: "/vault/connections",
        sandbox: false,
        service: {
          id: "apideck-vault",
          name: "Apideck Vault",
        },
        sourceIp: "94.227.131.238",
        statusCode: 200,
        success: true,
        timestamp: "2021-07-12T14:26:17.420Z",
        unifiedApi: "vault",
      },
    ],
    meta: {
      itemsOnPage: 50,
      cursors: {
        previous: "em9oby1jcm06OnBhZ2U6OjE=",
        current: "em9oby1jcm06OnBhZ2U6OjI=",
        next: "em9oby1jcm06OnBhZ2U6OjM=",
      },
    },
    links: {
      previous:
        "https://unify.apideck.com/crm/companies?cursor=em9oby1jcm06OnBhZ2U6OjE%3D",
      current: "https://unify.apideck.com/crm/companies",
      next:
        "https://unify.apideck.com/crm/companies?cursor=em9oby1jcm06OnBhZ2U6OjM",
    },
  });
});

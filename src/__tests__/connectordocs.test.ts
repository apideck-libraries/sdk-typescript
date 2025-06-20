/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { expect, test } from "vitest";
import { Apideck } from "../index.js";
import { GetAcceptEnum } from "../sdk/connectordocs.js";
import { createTestHTTPClient } from "./testclient.js";

test("Connectordocs Connector Connector Docs One", async () => {
  const testHttpClient = createTestHTTPClient("connector.connectorDocsOne");

  const apideck = new Apideck({
    serverURL: process.env["TEST_SERVER_URL"] ?? "http://localhost:18080",
    httpClient: testHttpClient,
    apiKey: process.env["APIDECK_API_KEY"] ?? "value",
  });

  const result = await apideck.connector.connectorDocs.get({
    appId: "dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX",
    id: "<id>",
    docId: "application_owner+oauth_credentials",
  }, {
    acceptHeaderOverride: GetAcceptEnum.textMarkdown,
  });
  expect(result.httpMeta.response.status).toBe(200);
  expect(result.getConnectorDocResponse).toBeDefined();
  expect(result.getConnectorDocResponse).toEqual("<value>");
});

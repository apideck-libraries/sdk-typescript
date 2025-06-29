/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { assert, expect, it, test } from "vitest";
import { Apideck } from "../index.js";
import { createTestHTTPClient } from "./testclient.js";

test("Applications Ats Applications All", async () => {
  const testHttpClient = createTestHTTPClient("ats.applicationsAll");

  const apideck = new Apideck({
    serverURL: process.env["TEST_SERVER_URL"] ?? "http://localhost:18080",
    httpClient: testHttpClient,
    apiKey: process.env["APIDECK_API_KEY"] ?? "value",
  });

  const result = await apideck.ats.applications.list({
    consumerId: "test-consumer",
    appId: "dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX",
    serviceId: "salesforce",
    passThrough: {
      "search": "San Francisco",
    },
  });
  expect(result.httpMeta.response.status).toBe(200);
  expect(result.getApplicationsResponse).toBeDefined();
  expect(result.getApplicationsResponse).toEqual({
    statusCode: 200,
    status: "OK",
    service: "sap-successfactors",
    resource: "Applications",
    operation: "all",
    data: [
      {
        id: "12345",
        applicantId: "12345",
        jobId: "12345",
        status: "open",
        stage: {
          id: "12345",
          name: "12345",
        },
        updatedBy: "12345",
        createdBy: "12345",
        updatedAt: new Date("2020-09-30T07:43:32.000Z"),
        createdAt: new Date("2020-09-30T07:43:32.000Z"),
        passThrough: [
          {
            serviceId: "<id>",
            extendPaths: [
              {
                path: "$.nested.property",
                value: {
                  "TaxClassificationRef": {
                    "value": "EUC-99990201-V1-00020000",
                  },
                },
              },
              {
                path: "$.nested.property",
                value: {
                  "TaxClassificationRef": {
                    "value": "EUC-99990201-V1-00020000",
                  },
                },
              },
              {
                path: "$.nested.property",
                value: {
                  "TaxClassificationRef": {
                    "value": "EUC-99990201-V1-00020000",
                  },
                },
              },
            ],
          },
          {
            serviceId: "<id>",
            extendPaths: [
              {
                path: "$.nested.property",
                value: {
                  "TaxClassificationRef": {
                    "value": "EUC-99990201-V1-00020000",
                  },
                },
              },
            ],
          },
        ],
      },
      {
        id: "12345",
        applicantId: "12345",
        jobId: "12345",
        status: "open",
        stage: {
          id: "12345",
          name: "12345",
        },
        updatedBy: "12345",
        createdBy: "12345",
        updatedAt: new Date("2020-09-30T07:43:32.000Z"),
        createdAt: new Date("2020-09-30T07:43:32.000Z"),
        passThrough: [
          {
            serviceId: "<id>",
            extendPaths: [
              {
                path: "$.nested.property",
                value: {
                  "TaxClassificationRef": {
                    "value": "EUC-99990201-V1-00020000",
                  },
                },
              },
            ],
          },
        ],
      },
      {
        id: "12345",
        applicantId: "12345",
        jobId: "12345",
        status: "open",
        stage: {
          id: "12345",
          name: "12345",
        },
        updatedBy: "12345",
        createdBy: "12345",
        updatedAt: new Date("2020-09-30T07:43:32.000Z"),
        createdAt: new Date("2020-09-30T07:43:32.000Z"),
        passThrough: [
          {
            serviceId: "<id>",
            extendPaths: [
              {
                path: "$.nested.property",
                value: {
                  "TaxClassificationRef": {
                    "value": "EUC-99990201-V1-00020000",
                  },
                },
              },
              {
                path: "$.nested.property",
                value: {
                  "TaxClassificationRef": {
                    "value": "EUC-99990201-V1-00020000",
                  },
                },
              },
            ],
          },
          {
            serviceId: "<id>",
            extendPaths: [
              {
                path: "$.nested.property",
                value: {
                  "TaxClassificationRef": {
                    "value": "EUC-99990201-V1-00020000",
                  },
                },
              },
            ],
          },
        ],
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

it.skip("Applications Ats Applications Add", async () => {
  assert.fail(
    "incomplete test found please make sure to address the following errors: [`workflow step ats.applicationsAdd.test referencing operation ats.applicationsAdd with expression in requestBody with type  not currently supported`, `workflow step ats.applicationsAdd.test referencing operation ats.applicationsAdd with expression in requestBody with type  not currently supported`, `workflow step ats.applicationsAdd.test referencing operation ats.applicationsAdd with expression in requestBody with type  not currently supported`, `workflow step ats.applicationsAdd.test referencing operation ats.applicationsAdd with expression in requestBody with type  not currently supported`]",
  );
});

test("Applications Ats Applications One", async () => {
  const testHttpClient = createTestHTTPClient("ats.applicationsOne");

  const apideck = new Apideck({
    serverURL: process.env["TEST_SERVER_URL"] ?? "http://localhost:18080",
    httpClient: testHttpClient,
    apiKey: process.env["APIDECK_API_KEY"] ?? "value",
  });

  const result = await apideck.ats.applications.get({
    id: "<id>",
    consumerId: "test-consumer",
    appId: "dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX",
    serviceId: "salesforce",
  });
  expect(result.httpMeta.response.status).toBe(200);
  expect(result.getApplicationResponse).toBeDefined();
  expect(result.getApplicationResponse).toEqual({
    statusCode: 200,
    status: "OK",
    service: "sap-successfactors",
    resource: "Applications",
    operation: "one",
    data: {
      id: "12345",
      applicantId: "12345",
      jobId: "12345",
      status: "open",
      stage: {
        id: "12345",
        name: "12345",
      },
      updatedBy: "12345",
      createdBy: "12345",
      updatedAt: new Date("2020-09-30T07:43:32.000Z"),
      createdAt: new Date("2020-09-30T07:43:32.000Z"),
      passThrough: [
        {
          serviceId: "<id>",
          extendPaths: [
            {
              path: "$.nested.property",
              value: {
                "TaxClassificationRef": {
                  "value": "EUC-99990201-V1-00020000",
                },
              },
            },
            {
              path: "$.nested.property",
              value: {
                "TaxClassificationRef": {
                  "value": "EUC-99990201-V1-00020000",
                },
              },
            },
          ],
        },
        {
          serviceId: "<id>",
          extendPaths: [
            {
              path: "$.nested.property",
              value: {
                "TaxClassificationRef": {
                  "value": "EUC-99990201-V1-00020000",
                },
              },
            },
            {
              path: "$.nested.property",
              value: {
                "TaxClassificationRef": {
                  "value": "EUC-99990201-V1-00020000",
                },
              },
            },
          ],
        },
        {
          serviceId: "<id>",
          extendPaths: [
            {
              path: "$.nested.property",
              value: {
                "TaxClassificationRef": {
                  "value": "EUC-99990201-V1-00020000",
                },
              },
            },
            {
              path: "$.nested.property",
              value: {
                "TaxClassificationRef": {
                  "value": "EUC-99990201-V1-00020000",
                },
              },
            },
          ],
        },
      ],
    },
  });
});

it.skip("Applications Ats Applications Update", async () => {
  assert.fail(
    "incomplete test found please make sure to address the following errors: [`workflow step ats.applicationsUpdate.test referencing operation ats.applicationsUpdate with expression in requestBody with type  not currently supported`, `workflow step ats.applicationsUpdate.test referencing operation ats.applicationsUpdate with expression in requestBody with type  not currently supported`, `workflow step ats.applicationsUpdate.test referencing operation ats.applicationsUpdate with expression in requestBody with type  not currently supported`, `workflow step ats.applicationsUpdate.test referencing operation ats.applicationsUpdate with expression in requestBody with type  not currently supported`, `workflow step ats.applicationsUpdate.test referencing operation ats.applicationsUpdate with expression in requestBody with type  not currently supported`, `workflow step ats.applicationsUpdate.test referencing operation ats.applicationsUpdate with expression in requestBody with type  not currently supported`, `workflow step ats.applicationsUpdate.test referencing operation ats.applicationsUpdate with expression in requestBody with type  not currently supported`]",
  );
});

test("Applications Ats Applications Delete", async () => {
  const testHttpClient = createTestHTTPClient("ats.applicationsDelete");

  const apideck = new Apideck({
    serverURL: process.env["TEST_SERVER_URL"] ?? "http://localhost:18080",
    httpClient: testHttpClient,
    apiKey: process.env["APIDECK_API_KEY"] ?? "value",
  });

  const result = await apideck.ats.applications.delete({
    id: "<id>",
    consumerId: "test-consumer",
    appId: "dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX",
    serviceId: "salesforce",
  });
  expect(result.httpMeta.response.status).toBe(200);
  expect(result.deleteApplicationResponse).toBeDefined();
  expect(result.deleteApplicationResponse).toEqual({
    statusCode: 200,
    status: "OK",
    service: "sap-successfactors",
    resource: "Applications",
    operation: "delete",
    data: {
      id: "12345",
    },
  });
});

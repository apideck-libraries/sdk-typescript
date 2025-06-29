/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { assert, expect, it, test } from "vitest";
import { Apideck } from "../index.js";
import { createTestHTTPClient } from "./testclient.js";

test("Trackingcategories Accounting Tracking Categories All", async () => {
  const testHttpClient = createTestHTTPClient(
    "accounting.trackingCategoriesAll",
  );

  const apideck = new Apideck({
    serverURL: process.env["TEST_SERVER_URL"] ?? "http://localhost:18080",
    httpClient: testHttpClient,
    apiKey: process.env["APIDECK_API_KEY"] ?? "value",
  });

  const result = await apideck.accounting.trackingCategories.list({
    consumerId: "test-consumer",
    appId: "dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX",
    serviceId: "salesforce",
    passThrough: {
      "search": "San Francisco",
    },
    fields: "id,updated_at",
  });
  expect(result.httpMeta.response.status).toBe(200);
  expect(result.getTrackingCategoriesResponse).toBeDefined();
  expect(result.getTrackingCategoriesResponse).toEqual({
    statusCode: 200,
    status: "OK",
    service: "quickbooks",
    resource: "tracking-categories",
    operation: "all",
    data: [
      {
        id: "12345",
        parentId: "12345",
        name: "Department",
        code: "100",
        status: "active",
        rowVersion: "1-12345",
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
        parentId: "12345",
        name: "Department",
        code: "100",
        status: "active",
        rowVersion: "1-12345",
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
        parentId: "12345",
        name: "Department",
        code: "100",
        status: "active",
        rowVersion: "1-12345",
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

it.skip("Trackingcategories Accounting Tracking Categories Add", async () => {
  assert.fail(
    "incomplete test found please make sure to address the following errors: [`workflow step accounting.trackingCategoriesAdd.test referencing operation accounting.trackingCategoriesAdd with expression in requestBody with type  not currently supported`, `workflow step accounting.trackingCategoriesAdd.test referencing operation accounting.trackingCategoriesAdd with expression in requestBody with type  not currently supported`, `workflow step accounting.trackingCategoriesAdd.test referencing operation accounting.trackingCategoriesAdd with expression in requestBody with type  not currently supported`, `workflow step accounting.trackingCategoriesAdd.test referencing operation accounting.trackingCategoriesAdd with expression in requestBody with type  not currently supported`]",
  );
});

test("Trackingcategories Accounting Tracking Categories One", async () => {
  const testHttpClient = createTestHTTPClient(
    "accounting.trackingCategoriesOne",
  );

  const apideck = new Apideck({
    serverURL: process.env["TEST_SERVER_URL"] ?? "http://localhost:18080",
    httpClient: testHttpClient,
    apiKey: process.env["APIDECK_API_KEY"] ?? "value",
  });

  const result = await apideck.accounting.trackingCategories.get({
    id: "<id>",
    consumerId: "test-consumer",
    appId: "dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX",
    serviceId: "salesforce",
    fields: "id,updated_at",
  });
  expect(result.httpMeta.response.status).toBe(200);
  expect(result.getTrackingCategoryResponse).toBeDefined();
  expect(result.getTrackingCategoryResponse).toEqual({
    statusCode: 200,
    status: "OK",
    service: "xero",
    resource: "tracking-categories",
    operation: "one",
    data: {
      id: "12345",
      parentId: "12345",
      name: "Department",
      code: "100",
      status: "active",
      rowVersion: "1-12345",
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

it.skip("Trackingcategories Accounting Tracking Categories Update", async () => {
  assert.fail(
    "incomplete test found please make sure to address the following errors: [`workflow step accounting.trackingCategoriesUpdate.test referencing operation accounting.trackingCategoriesUpdate with expression in requestBody with type  not currently supported`, `workflow step accounting.trackingCategoriesUpdate.test referencing operation accounting.trackingCategoriesUpdate with expression in requestBody with type  not currently supported`, `workflow step accounting.trackingCategoriesUpdate.test referencing operation accounting.trackingCategoriesUpdate with expression in requestBody with type  not currently supported`, `workflow step accounting.trackingCategoriesUpdate.test referencing operation accounting.trackingCategoriesUpdate with expression in requestBody with type  not currently supported`, `workflow step accounting.trackingCategoriesUpdate.test referencing operation accounting.trackingCategoriesUpdate with expression in requestBody with type  not currently supported`, `workflow step accounting.trackingCategoriesUpdate.test referencing operation accounting.trackingCategoriesUpdate with expression in requestBody with type  not currently supported`, `workflow step accounting.trackingCategoriesUpdate.test referencing operation accounting.trackingCategoriesUpdate with expression in requestBody with type  not currently supported`]",
  );
});

test("Trackingcategories Accounting Tracking Categories Delete", async () => {
  const testHttpClient = createTestHTTPClient(
    "accounting.trackingCategoriesDelete",
  );

  const apideck = new Apideck({
    serverURL: process.env["TEST_SERVER_URL"] ?? "http://localhost:18080",
    httpClient: testHttpClient,
    apiKey: process.env["APIDECK_API_KEY"] ?? "value",
  });

  const result = await apideck.accounting.trackingCategories.delete({
    id: "<id>",
    consumerId: "test-consumer",
    appId: "dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX",
    serviceId: "salesforce",
  });
  expect(result.httpMeta.response.status).toBe(200);
  expect(result.deleteTrackingCategoryResponse).toBeDefined();
  expect(result.deleteTrackingCategoryResponse).toEqual({
    statusCode: 200,
    status: "OK",
    service: "quickbooks",
    resource: "tracking-categories",
    operation: "delete",
    data: {
      id: "12345",
    },
  });
});

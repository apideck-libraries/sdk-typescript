/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { assert, expect, it, test } from "vitest";
import { Apideck } from "../index.js";
import { createTestHTTPClient } from "./testclient.js";

test("Messages Sms Messages All", async () => {
  const testHttpClient = createTestHTTPClient("sms.messagesAll");

  const apideck = new Apideck({
    serverURL: process.env["TEST_SERVER_URL"] ?? "http://localhost:18080",
    httpClient: testHttpClient,
    apiKey: process.env["APIDECK_API_KEY"] ?? "value",
  });

  const result = await apideck.sms.messages.list({
    consumerId: "test-consumer",
    appId: "dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX",
    serviceId: "salesforce",
    fields: "id,updated_at",
  });
  expect(result.httpMeta.response.status).toBe(200);
  expect(result.getMessagesResponse).toBeDefined();
  expect(result.getMessagesResponse).toEqual({
    statusCode: 200,
    status: "OK",
    service: "twilio",
    resource: "Messages",
    operation: "all",
    data: [
      {
        id: "12345",
        from: "+15017122661",
        to: "+15017122662",
        subject: "Picture",
        body: "Hi! How are you doing?",
        type: "sms",
        numberOfUnits: 1,
        numberOfMediaFiles: 1,
        direction: "outbound-api",
        status: "sent",
        scheduledAt: new Date("2020-09-30T07:43:32.000Z"),
        sentAt: new Date("2020-09-30T07:43:32.000Z"),
        webhookUrl:
          "https://unify.apideck.com/webhook/webhooks/eyz329dkffdl4949/x/sms",
        reference: "CUST001",
        price: {
          perUnit: "0.01",
          totalAmount: "0.01",
          currency: "USD",
        },
        error: {
          code: "X1",
          message: "Something went wrong",
        },
        messagingServiceId: "123456",
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
        from: "+15017122661",
        to: "+15017122662",
        subject: "Picture",
        body: "Hi! How are you doing?",
        type: "sms",
        numberOfUnits: 1,
        numberOfMediaFiles: 1,
        direction: "outbound-api",
        status: "sent",
        scheduledAt: new Date("2020-09-30T07:43:32.000Z"),
        sentAt: new Date("2020-09-30T07:43:32.000Z"),
        webhookUrl:
          "https://unify.apideck.com/webhook/webhooks/eyz329dkffdl4949/x/sms",
        reference: "CUST001",
        price: {
          perUnit: "0.01",
          totalAmount: "0.01",
          currency: "USD",
        },
        error: {
          code: "X1",
          message: "Something went wrong",
        },
        messagingServiceId: "123456",
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
        from: "+15017122661",
        to: "+15017122662",
        subject: "Picture",
        body: "Hi! How are you doing?",
        type: "sms",
        numberOfUnits: 1,
        numberOfMediaFiles: 1,
        direction: "outbound-api",
        status: "sent",
        scheduledAt: new Date("2020-09-30T07:43:32.000Z"),
        sentAt: new Date("2020-09-30T07:43:32.000Z"),
        webhookUrl:
          "https://unify.apideck.com/webhook/webhooks/eyz329dkffdl4949/x/sms",
        reference: "CUST001",
        price: {
          perUnit: "0.01",
          totalAmount: "0.01",
          currency: "USD",
        },
        error: {
          code: "X1",
          message: "Something went wrong",
        },
        messagingServiceId: "123456",
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

it.skip("Messages Sms Messages Add", async () => {
  assert.fail(
    "incomplete test found please make sure to address the following errors: [`workflow step sms.messagesAdd.test referencing operation sms.messagesAdd with expression in requestBody with type  not currently supported`, `workflow step sms.messagesAdd.test referencing operation sms.messagesAdd with expression in requestBody with type  not currently supported`, `workflow step sms.messagesAdd.test referencing operation sms.messagesAdd with expression in requestBody with type  not currently supported`, `workflow step sms.messagesAdd.test referencing operation sms.messagesAdd with expression in requestBody with type  not currently supported`]",
  );
});

test("Messages Sms Messages One", async () => {
  const testHttpClient = createTestHTTPClient("sms.messagesOne");

  const apideck = new Apideck({
    serverURL: process.env["TEST_SERVER_URL"] ?? "http://localhost:18080",
    httpClient: testHttpClient,
    apiKey: process.env["APIDECK_API_KEY"] ?? "value",
  });

  const result = await apideck.sms.messages.get({
    id: "<id>",
    consumerId: "test-consumer",
    appId: "dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX",
    serviceId: "salesforce",
    fields: "id,updated_at",
  });
  expect(result.httpMeta.response.status).toBe(200);
  expect(result.getMessageResponse).toBeDefined();
  expect(result.getMessageResponse).toEqual({
    statusCode: 200,
    status: "OK",
    service: "twilio",
    resource: "Messages",
    operation: "one",
    data: {
      id: "12345",
      from: "+15017122661",
      to: "+15017122662",
      subject: "Picture",
      body: "Hi! How are you doing?",
      type: "sms",
      numberOfUnits: 1,
      numberOfMediaFiles: 1,
      direction: "outbound-api",
      status: "sent",
      scheduledAt: new Date("2020-09-30T07:43:32.000Z"),
      sentAt: new Date("2020-09-30T07:43:32.000Z"),
      webhookUrl:
        "https://unify.apideck.com/webhook/webhooks/eyz329dkffdl4949/x/sms",
      reference: "CUST001",
      price: {
        perUnit: "0.01",
        totalAmount: "0.01",
        currency: "USD",
      },
      error: {
        code: "X1",
        message: "Something went wrong",
      },
      messagingServiceId: "123456",
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

it.skip("Messages Sms Messages Update", async () => {
  assert.fail(
    "incomplete test found please make sure to address the following errors: [`workflow step sms.messagesUpdate.test referencing operation sms.messagesUpdate with expression in requestBody with type  not currently supported`, `workflow step sms.messagesUpdate.test referencing operation sms.messagesUpdate with expression in requestBody with type  not currently supported`, `workflow step sms.messagesUpdate.test referencing operation sms.messagesUpdate with expression in requestBody with type  not currently supported`, `workflow step sms.messagesUpdate.test referencing operation sms.messagesUpdate with expression in requestBody with type  not currently supported`, `workflow step sms.messagesUpdate.test referencing operation sms.messagesUpdate with expression in requestBody with type  not currently supported`, `workflow step sms.messagesUpdate.test referencing operation sms.messagesUpdate with expression in requestBody with type  not currently supported`, `workflow step sms.messagesUpdate.test referencing operation sms.messagesUpdate with expression in requestBody with type  not currently supported`]",
  );
});

test("Messages Sms Messages Delete", async () => {
  const testHttpClient = createTestHTTPClient("sms.messagesDelete");

  const apideck = new Apideck({
    serverURL: process.env["TEST_SERVER_URL"] ?? "http://localhost:18080",
    httpClient: testHttpClient,
    apiKey: process.env["APIDECK_API_KEY"] ?? "value",
  });

  const result = await apideck.sms.messages.delete({
    id: "<id>",
    consumerId: "test-consumer",
    appId: "dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX",
    serviceId: "salesforce",
  });
  expect(result.httpMeta.response.status).toBe(200);
  expect(result.deleteMessageResponse).toBeDefined();
  expect(result.deleteMessageResponse).toEqual({
    statusCode: 200,
    status: "OK",
    service: "twilio",
    resource: "Messages",
    operation: "delete",
    data: {
      id: "12345",
    },
  });
});

/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { assert, expect, it, test } from "vitest";
import { Apideck } from "../index.js";
import { RFCDate } from "../types/index.js";
import { createTestHTTPClient } from "./testclient.js";

test("Ledgeraccounts Accounting Ledger Accounts All", async () => {
  const testHttpClient = createTestHTTPClient("accounting.ledgerAccountsAll");

  const apideck = new Apideck({
    serverURL: process.env["TEST_SERVER_URL"] ?? "http://localhost:18080",
    httpClient: testHttpClient,
    apiKey: process.env["APIDECK_API_KEY"] ?? "value",
  });

  const result = await apideck.accounting.ledgerAccounts.list({
    consumerId: "test-consumer",
    appId: "dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX",
    serviceId: "salesforce",
    filter: {
      updatedSince: new Date("2020-09-30T07:43:32.000Z"),
    },
    sort: {
      by: "updated_at",
      direction: "desc",
    },
    passThrough: {
      "search": "San Francisco",
    },
    fields: "id,updated_at",
  });
  expect(result.httpMeta.response.status).toBe(200);
  expect(result.getLedgerAccountsResponse).toBeDefined();
  expect(result.getLedgerAccountsResponse).toEqual({
    statusCode: 200,
    status: "OK",
    service: "xero",
    resource: "ledger-accounts",
    operation: "all",
    data: [
      {
        id: "12345",
        displayId: "1-12345",
        code: "453",
        classification: "asset",
        type: "bank",
        subType: "CHECKING_ACCOUNT",
        name: "Bank account",
        fullyQualifiedName: "Asset.Bank.Checking_Account",
        description: "Main checking account",
        openingBalance: 75000,
        currentBalance: 20000,
        currency: "USD",
        taxType: "NONE",
        taxRate: {
          id: "123456",
          code: "N-T",
          name: "GST on Purchases",
          rate: 10,
        },
        level: 1,
        active: true,
        status: "active",
        header: true,
        bankAccount: {
          bankName: "Monzo",
          accountNumber: "123465",
          accountName: "SPACEX LLC",
          accountType: "credit_card",
          iban: "CH2989144532982975332",
          bic: "AUDSCHGGXXX",
          routingNumber: "012345678",
          bsbNumber: "062-001",
          branchIdentifier: "001",
          bankCode: "BNH",
          currency: "USD",
        },
        categories: [
          {
            id: "12345",
            name: "Finance Charges Expense",
          },
          {
            id: "12345",
            name: "Finance Charges Expense",
          },
        ],
        parentAccount: {
          id: "12345",
          name: "Bank Accounts",
          displayId: "1-1100",
        },
        subAccount: false,
        subAccounts: [
          {
            id: "12345",
            accountSubName: "Petty Cash",
          },
          {
            id: "12345",
            accountSubName: "Petty Cash",
          },
          {
            id: "12345",
            accountSubName: "Petty Cash",
          },
        ],
        lastReconciliationDate: new RFCDate("2020-09-30"),
        customFields: [
          {
            id: "2389328923893298",
            name: "employee_level",
            description: "Employee Level",
            value: 10,
          },
        ],
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
        ],
      },
      {
        id: "12345",
        displayId: "1-12345",
        code: "453",
        classification: "asset",
        type: "bank",
        subType: "CHECKING_ACCOUNT",
        name: "Bank account",
        fullyQualifiedName: "Asset.Bank.Checking_Account",
        description: "Main checking account",
        openingBalance: 75000,
        currentBalance: 20000,
        currency: "USD",
        taxType: "NONE",
        taxRate: {
          id: "123456",
          code: "N-T",
          name: "GST on Purchases",
          rate: 10,
        },
        level: 1,
        active: true,
        status: "active",
        header: true,
        bankAccount: {
          bankName: "Monzo",
          accountNumber: "123465",
          accountName: "SPACEX LLC",
          accountType: "credit_card",
          iban: "CH2989144532982975332",
          bic: "AUDSCHGGXXX",
          routingNumber: "012345678",
          bsbNumber: "062-001",
          branchIdentifier: "001",
          bankCode: "BNH",
          currency: "USD",
        },
        categories: [
          {
            id: "12345",
            name: "Finance Charges Expense",
          },
          {
            id: "12345",
            name: "Finance Charges Expense",
          },
        ],
        parentAccount: {
          id: "12345",
          name: "Bank Accounts",
          displayId: "1-1100",
        },
        subAccount: false,
        subAccounts: [
          {
            id: "12345",
            accountSubName: "Petty Cash",
          },
        ],
        lastReconciliationDate: new RFCDate("2020-09-30"),
        customFields: [
          {
            id: "2389328923893298",
            name: "employee_level",
            description: "Employee Level",
            value: "Uses Salesforce and Marketo",
          },
          {
            id: "2389328923893298",
            name: "employee_level",
            description: "Employee Level",
            value: "Uses Salesforce and Marketo",
          },
          {
            id: "2389328923893298",
            name: "employee_level",
            description: "Employee Level",
            value: [
              "<value>",
              "<value>",
            ],
          },
        ],
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
        displayId: "1-12345",
        code: "453",
        classification: "asset",
        type: "bank",
        subType: "CHECKING_ACCOUNT",
        name: "Bank account",
        fullyQualifiedName: "Asset.Bank.Checking_Account",
        description: "Main checking account",
        openingBalance: 75000,
        currentBalance: 20000,
        currency: "USD",
        taxType: "NONE",
        taxRate: {
          id: "123456",
          code: "N-T",
          name: "GST on Purchases",
          rate: 10,
        },
        level: 1,
        active: true,
        status: "active",
        header: true,
        bankAccount: {
          bankName: "Monzo",
          accountNumber: "123465",
          accountName: "SPACEX LLC",
          accountType: "credit_card",
          iban: "CH2989144532982975332",
          bic: "AUDSCHGGXXX",
          routingNumber: "012345678",
          bsbNumber: "062-001",
          branchIdentifier: "001",
          bankCode: "BNH",
          currency: "USD",
        },
        categories: [
          {
            id: "12345",
            name: "Finance Charges Expense",
          },
          {
            id: "12345",
            name: "Finance Charges Expense",
          },
        ],
        parentAccount: {
          id: "12345",
          name: "Bank Accounts",
          displayId: "1-1100",
        },
        subAccount: false,
        subAccounts: [
          {
            id: "12345",
            accountSubName: "Petty Cash",
          },
          {
            id: "12345",
            accountSubName: "Petty Cash",
          },
        ],
        lastReconciliationDate: new RFCDate("2020-09-30"),
        customFields: [
          {
            id: "2389328923893298",
            name: "employee_level",
            description: "Employee Level",
            value: [
              {},
              {},
            ],
          },
        ],
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

it.skip("Ledgeraccounts Accounting Ledger Accounts Add", async () => {
  assert.fail(
    "incomplete test found please make sure to address the following errors: [`workflow step accounting.ledgerAccountsAdd.test referencing operation accounting.ledgerAccountsAdd with expression in requestBody with type  not currently supported`]",
  );
});

test("Ledgeraccounts Accounting Ledger Accounts One", async () => {
  const testHttpClient = createTestHTTPClient("accounting.ledgerAccountsOne");

  const apideck = new Apideck({
    serverURL: process.env["TEST_SERVER_URL"] ?? "http://localhost:18080",
    httpClient: testHttpClient,
    apiKey: process.env["APIDECK_API_KEY"] ?? "value",
  });

  const result = await apideck.accounting.ledgerAccounts.get({
    id: "<id>",
    consumerId: "test-consumer",
    appId: "dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX",
    serviceId: "salesforce",
    fields: "id,updated_at",
  });
  expect(result.httpMeta.response.status).toBe(200);
  expect(result.getLedgerAccountResponse).toBeDefined();
  expect(result.getLedgerAccountResponse).toEqual({
    statusCode: 200,
    status: "OK",
    service: "xero",
    resource: "ledger-accounts",
    operation: "one",
    data: {
      id: "12345",
      displayId: "1-12345",
      code: "453",
      classification: "asset",
      type: "bank",
      subType: "CHECKING_ACCOUNT",
      name: "Bank account",
      fullyQualifiedName: "Asset.Bank.Checking_Account",
      description: "Main checking account",
      openingBalance: 75000,
      currentBalance: 20000,
      currency: "USD",
      taxType: "NONE",
      taxRate: {
        id: "123456",
        code: "N-T",
        name: "GST on Purchases",
        rate: 10,
      },
      level: 1,
      active: true,
      status: "active",
      header: true,
      bankAccount: {
        bankName: "Monzo",
        accountNumber: "123465",
        accountName: "SPACEX LLC",
        accountType: "credit_card",
        iban: "CH2989144532982975332",
        bic: "AUDSCHGGXXX",
        routingNumber: "012345678",
        bsbNumber: "062-001",
        branchIdentifier: "001",
        bankCode: "BNH",
        currency: "USD",
      },
      categories: [
        {
          id: "12345",
          name: "Finance Charges Expense",
        },
        {
          id: "12345",
          name: "Finance Charges Expense",
        },
        {
          id: "12345",
          name: "Finance Charges Expense",
        },
      ],
      parentAccount: {
        id: "12345",
        name: "Bank Accounts",
        displayId: "1-1100",
      },
      subAccount: false,
      subAccounts: [
        {
          id: "12345",
          accountSubName: "Petty Cash",
        },
        {
          id: "12345",
          accountSubName: "Petty Cash",
        },
      ],
      lastReconciliationDate: new RFCDate("2020-09-30"),
      customFields: [
        {
          id: "2389328923893298",
          name: "employee_level",
          description: "Employee Level",
          value: {},
        },
        {
          id: "2389328923893298",
          name: "employee_level",
          description: "Employee Level",
          value: [
            {},
          ],
        },
      ],
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
  });
});

it.skip("Ledgeraccounts Accounting Ledger Accounts Update", async () => {
  assert.fail(
    "incomplete test found please make sure to address the following errors: [`workflow step accounting.ledgerAccountsUpdate.test referencing operation accounting.ledgerAccountsUpdate with expression in requestBody with type  not currently supported`, `workflow step accounting.ledgerAccountsUpdate.test referencing operation accounting.ledgerAccountsUpdate with expression in requestBody with type  not currently supported`, `workflow step accounting.ledgerAccountsUpdate.test referencing operation accounting.ledgerAccountsUpdate with expression in requestBody with type  not currently supported`, `workflow step accounting.ledgerAccountsUpdate.test referencing operation accounting.ledgerAccountsUpdate with expression in requestBody with type  not currently supported`]",
  );
});

test("Ledgeraccounts Accounting Ledger Accounts Delete", async () => {
  const testHttpClient = createTestHTTPClient(
    "accounting.ledgerAccountsDelete",
  );

  const apideck = new Apideck({
    serverURL: process.env["TEST_SERVER_URL"] ?? "http://localhost:18080",
    httpClient: testHttpClient,
    apiKey: process.env["APIDECK_API_KEY"] ?? "value",
  });

  const result = await apideck.accounting.ledgerAccounts.delete({
    id: "<id>",
    consumerId: "test-consumer",
    appId: "dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX",
    serviceId: "salesforce",
  });
  expect(result.httpMeta.response.status).toBe(200);
  expect(result.deleteLedgerAccountResponse).toBeDefined();
  expect(result.deleteLedgerAccountResponse).toEqual({
    statusCode: 200,
    status: "OK",
    service: "xero",
    resource: "ledger-accounts",
    operation: "delete",
    data: {
      id: "12345",
    },
  });
});

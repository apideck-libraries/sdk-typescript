/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { assert, expect, it, test } from "vitest";
import { Apideck } from "../index.js";
import { createTestHTTPClient } from "./testclient.js";

test("Suppliers Accounting Suppliers All", async () => {
  const testHttpClient = createTestHTTPClient("accounting.suppliersAll");

  const apideck = new Apideck({
    serverURL: process.env["TEST_SERVER_URL"] ?? "http://localhost:18080",
    httpClient: testHttpClient,
    apiKey: process.env["APIDECK_API_KEY"] ?? "value",
  });

  const result = await apideck.accounting.suppliers.list({
    consumerId: "test-consumer",
    appId: "dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX",
    serviceId: "salesforce",
    filter: {
      companyName: "SpaceX",
      displayName: "Elon Musk",
      firstName: "Elon",
      lastName: "Musk",
      email: "elon@musk.com",
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
  expect(result.getSuppliersResponse).toBeDefined();
  expect(result.getSuppliersResponse).toEqual({
    statusCode: 200,
    status: "OK",
    service: "xero",
    resource: "suppliers",
    operation: "all",
    data: [
      {
        id: "12345",
        downstreamId: "12345",
        displayId: "EMP00101",
        displayName: "Windsurf Shop",
        companyName: "SpaceX",
        companyId: "12345",
        title: "CEO",
        firstName: "Elon",
        middleName: "D.",
        lastName: "Musk",
        suffix: "Jr.",
        individual: true,
        addresses: [
          {
            id: "123",
            type: "primary",
            string: "25 Spring Street, Blackburn, VIC 3130",
            name: "HQ US",
            line1: "Main street",
            line2: "apt #",
            line3: "Suite #",
            line4: "delivery instructions",
            streetNumber: "25",
            city: "San Francisco",
            state: "CA",
            postalCode: "94104",
            country: "US",
            latitude: "40.759211",
            longitude: "-73.984638",
            county: "Santa Clara",
            contactName: "Elon Musk",
            salutation: "Mr",
            phoneNumber: "111-111-1111",
            fax: "122-111-1111",
            email: "elon@musk.com",
            website: "https://elonmusk.com",
            notes: "Address notes or delivery instructions.",
            rowVersion: "1-12345",
          },
          {
            id: "123",
            type: "primary",
            string: "25 Spring Street, Blackburn, VIC 3130",
            name: "HQ US",
            line1: "Main street",
            line2: "apt #",
            line3: "Suite #",
            line4: "delivery instructions",
            streetNumber: "25",
            city: "San Francisco",
            state: "CA",
            postalCode: "94104",
            country: "US",
            latitude: "40.759211",
            longitude: "-73.984638",
            county: "Santa Clara",
            contactName: "Elon Musk",
            salutation: "Mr",
            phoneNumber: "111-111-1111",
            fax: "122-111-1111",
            email: "elon@musk.com",
            website: "https://elonmusk.com",
            notes: "Address notes or delivery instructions.",
            rowVersion: "1-12345",
          },
        ],
        phoneNumbers: [
          {
            id: "12345",
            countryCode: "1",
            areaCode: "323",
            number: "111-111-1111",
            extension: "105",
            type: "primary",
          },
          {
            id: "12345",
            countryCode: "1",
            areaCode: "323",
            number: "111-111-1111",
            extension: "105",
            type: "primary",
          },
          {
            id: "12345",
            countryCode: "1",
            areaCode: "323",
            number: "111-111-1111",
            extension: "105",
            type: "primary",
          },
        ],
        emails: [
          {
            id: "123",
            email: "elon@musk.com",
            type: "primary",
          },
        ],
        websites: [
          {
            id: "12345",
            url: "http://example.com",
            type: "primary",
          },
        ],
        bankAccounts: [
          {
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
        ],
        notes: "Some notes about this supplier",
        taxRate: {
          id: "123456",
          code: "N-T",
          name: "GST on Purchases",
          rate: 10,
        },
        taxNumber: "US123945459",
        currency: "USD",
        account: {
          id: "123456",
          name: "Bank account",
          nominalCode: "N091",
          code: "453",
        },
        status: "active",
        paymentMethod: "cash",
        channel: "email",
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
            value: "Uses Salesforce and Marketo",
          },
        ],
        updatedBy: "12345",
        createdBy: "12345",
        updatedAt: new Date("2020-09-30T07:43:32.000Z"),
        createdAt: new Date("2020-09-30T07:43:32.000Z"),
        rowVersion: "1-12345",
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
        ],
        subsidiaryId: "12345",
      },
      {
        id: "12345",
        downstreamId: "12345",
        displayId: "EMP00101",
        displayName: "Windsurf Shop",
        companyName: "SpaceX",
        companyId: "12345",
        title: "CEO",
        firstName: "Elon",
        middleName: "D.",
        lastName: "Musk",
        suffix: "Jr.",
        individual: true,
        addresses: [
          {
            id: "123",
            type: "primary",
            string: "25 Spring Street, Blackburn, VIC 3130",
            name: "HQ US",
            line1: "Main street",
            line2: "apt #",
            line3: "Suite #",
            line4: "delivery instructions",
            streetNumber: "25",
            city: "San Francisco",
            state: "CA",
            postalCode: "94104",
            country: "US",
            latitude: "40.759211",
            longitude: "-73.984638",
            county: "Santa Clara",
            contactName: "Elon Musk",
            salutation: "Mr",
            phoneNumber: "111-111-1111",
            fax: "122-111-1111",
            email: "elon@musk.com",
            website: "https://elonmusk.com",
            notes: "Address notes or delivery instructions.",
            rowVersion: "1-12345",
          },
          {
            id: "123",
            type: "primary",
            string: "25 Spring Street, Blackburn, VIC 3130",
            name: "HQ US",
            line1: "Main street",
            line2: "apt #",
            line3: "Suite #",
            line4: "delivery instructions",
            streetNumber: "25",
            city: "San Francisco",
            state: "CA",
            postalCode: "94104",
            country: "US",
            latitude: "40.759211",
            longitude: "-73.984638",
            county: "Santa Clara",
            contactName: "Elon Musk",
            salutation: "Mr",
            phoneNumber: "111-111-1111",
            fax: "122-111-1111",
            email: "elon@musk.com",
            website: "https://elonmusk.com",
            notes: "Address notes or delivery instructions.",
            rowVersion: "1-12345",
          },
        ],
        phoneNumbers: [
          {
            id: "12345",
            countryCode: "1",
            areaCode: "323",
            number: "111-111-1111",
            extension: "105",
            type: "primary",
          },
          {
            id: "12345",
            countryCode: "1",
            areaCode: "323",
            number: "111-111-1111",
            extension: "105",
            type: "primary",
          },
        ],
        emails: [
          {
            id: "123",
            email: "elon@musk.com",
            type: "primary",
          },
        ],
        websites: [
          {
            id: "12345",
            url: "http://example.com",
            type: "primary",
          },
        ],
        bankAccounts: [
          {
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
          {
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
        ],
        notes: "Some notes about this supplier",
        taxRate: {
          id: "123456",
          code: "N-T",
          name: "GST on Purchases",
          rate: 10,
        },
        taxNumber: "US123945459",
        currency: "USD",
        account: {
          id: "123456",
          name: "Bank account",
          nominalCode: "N091",
          code: "453",
        },
        status: "active",
        paymentMethod: "cash",
        channel: "email",
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
            value: [
              {},
              {},
            ],
          },
        ],
        updatedBy: "12345",
        createdBy: "12345",
        updatedAt: new Date("2020-09-30T07:43:32.000Z"),
        createdAt: new Date("2020-09-30T07:43:32.000Z"),
        rowVersion: "1-12345",
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
        subsidiaryId: "12345",
      },
      {
        id: "12345",
        downstreamId: "12345",
        displayId: "EMP00101",
        displayName: "Windsurf Shop",
        companyName: "SpaceX",
        companyId: "12345",
        title: "CEO",
        firstName: "Elon",
        middleName: "D.",
        lastName: "Musk",
        suffix: "Jr.",
        individual: true,
        addresses: [
          {
            id: "123",
            type: "primary",
            string: "25 Spring Street, Blackburn, VIC 3130",
            name: "HQ US",
            line1: "Main street",
            line2: "apt #",
            line3: "Suite #",
            line4: "delivery instructions",
            streetNumber: "25",
            city: "San Francisco",
            state: "CA",
            postalCode: "94104",
            country: "US",
            latitude: "40.759211",
            longitude: "-73.984638",
            county: "Santa Clara",
            contactName: "Elon Musk",
            salutation: "Mr",
            phoneNumber: "111-111-1111",
            fax: "122-111-1111",
            email: "elon@musk.com",
            website: "https://elonmusk.com",
            notes: "Address notes or delivery instructions.",
            rowVersion: "1-12345",
          },
          {
            id: "123",
            type: "primary",
            string: "25 Spring Street, Blackburn, VIC 3130",
            name: "HQ US",
            line1: "Main street",
            line2: "apt #",
            line3: "Suite #",
            line4: "delivery instructions",
            streetNumber: "25",
            city: "San Francisco",
            state: "CA",
            postalCode: "94104",
            country: "US",
            latitude: "40.759211",
            longitude: "-73.984638",
            county: "Santa Clara",
            contactName: "Elon Musk",
            salutation: "Mr",
            phoneNumber: "111-111-1111",
            fax: "122-111-1111",
            email: "elon@musk.com",
            website: "https://elonmusk.com",
            notes: "Address notes or delivery instructions.",
            rowVersion: "1-12345",
          },
          {
            id: "123",
            type: "primary",
            string: "25 Spring Street, Blackburn, VIC 3130",
            name: "HQ US",
            line1: "Main street",
            line2: "apt #",
            line3: "Suite #",
            line4: "delivery instructions",
            streetNumber: "25",
            city: "San Francisco",
            state: "CA",
            postalCode: "94104",
            country: "US",
            latitude: "40.759211",
            longitude: "-73.984638",
            county: "Santa Clara",
            contactName: "Elon Musk",
            salutation: "Mr",
            phoneNumber: "111-111-1111",
            fax: "122-111-1111",
            email: "elon@musk.com",
            website: "https://elonmusk.com",
            notes: "Address notes or delivery instructions.",
            rowVersion: "1-12345",
          },
        ],
        phoneNumbers: [
          {
            id: "12345",
            countryCode: "1",
            areaCode: "323",
            number: "111-111-1111",
            extension: "105",
            type: "primary",
          },
        ],
        emails: [
          {
            id: "123",
            email: "elon@musk.com",
            type: "primary",
          },
          {
            id: "123",
            email: "elon@musk.com",
            type: "primary",
          },
          {
            id: "123",
            email: "elon@musk.com",
            type: "primary",
          },
        ],
        websites: [
          {
            id: "12345",
            url: "http://example.com",
            type: "primary",
          },
          {
            id: "12345",
            url: "http://example.com",
            type: "primary",
          },
        ],
        bankAccounts: [
          {
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
          {
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
          {
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
        ],
        notes: "Some notes about this supplier",
        taxRate: {
          id: "123456",
          code: "N-T",
          name: "GST on Purchases",
          rate: 10,
        },
        taxNumber: "US123945459",
        currency: "USD",
        account: {
          id: "123456",
          name: "Bank account",
          nominalCode: "N091",
          code: "453",
        },
        status: "active",
        paymentMethod: "cash",
        channel: "email",
        customFields: [
          {
            id: "2389328923893298",
            name: "employee_level",
            description: "Employee Level",
            value: "Uses Salesforce and Marketo",
          },
        ],
        updatedBy: "12345",
        createdBy: "12345",
        updatedAt: new Date("2020-09-30T07:43:32.000Z"),
        createdAt: new Date("2020-09-30T07:43:32.000Z"),
        rowVersion: "1-12345",
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
        subsidiaryId: "12345",
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

it.skip("Suppliers Accounting Suppliers Add", async () => {
  assert.fail(
    "incomplete test found please make sure to address the following errors: [`workflow step accounting.suppliersAdd.test referencing operation accounting.suppliersAdd with expression in requestBody with type  not currently supported`, `workflow step accounting.suppliersAdd.test referencing operation accounting.suppliersAdd with expression in requestBody with type  not currently supported`, `workflow step accounting.suppliersAdd.test referencing operation accounting.suppliersAdd with expression in requestBody with type  not currently supported`, `workflow step accounting.suppliersAdd.test referencing operation accounting.suppliersAdd with expression in requestBody with type  not currently supported`, `workflow step accounting.suppliersAdd.test referencing operation accounting.suppliersAdd with expression in requestBody with type  not currently supported`, `workflow step accounting.suppliersAdd.test referencing operation accounting.suppliersAdd with expression in requestBody with type  not currently supported`, `workflow step accounting.suppliersAdd.test referencing operation accounting.suppliersAdd with expression in requestBody with type  not currently supported`, `workflow step accounting.suppliersAdd.test referencing operation accounting.suppliersAdd with expression in requestBody with type  not currently supported`]",
  );
});

test("Suppliers Accounting Suppliers One", async () => {
  const testHttpClient = createTestHTTPClient("accounting.suppliersOne");

  const apideck = new Apideck({
    serverURL: process.env["TEST_SERVER_URL"] ?? "http://localhost:18080",
    httpClient: testHttpClient,
    apiKey: process.env["APIDECK_API_KEY"] ?? "value",
  });

  const result = await apideck.accounting.suppliers.get({
    id: "<id>",
    consumerId: "test-consumer",
    appId: "dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX",
    serviceId: "salesforce",
    fields: "id,updated_at",
  });
  expect(result.httpMeta.response.status).toBe(200);
  expect(result.getSupplierResponse).toBeDefined();
  expect(result.getSupplierResponse).toEqual({
    statusCode: 200,
    status: "OK",
    service: "xero",
    resource: "suppliers",
    operation: "one",
    data: {
      id: "12345",
      downstreamId: "12345",
      displayId: "EMP00101",
      displayName: "Windsurf Shop",
      companyName: "SpaceX",
      companyId: "12345",
      title: "CEO",
      firstName: "Elon",
      middleName: "D.",
      lastName: "Musk",
      suffix: "Jr.",
      individual: true,
      addresses: [
        {
          id: "123",
          type: "primary",
          string: "25 Spring Street, Blackburn, VIC 3130",
          name: "HQ US",
          line1: "Main street",
          line2: "apt #",
          line3: "Suite #",
          line4: "delivery instructions",
          streetNumber: "25",
          city: "San Francisco",
          state: "CA",
          postalCode: "94104",
          country: "US",
          latitude: "40.759211",
          longitude: "-73.984638",
          county: "Santa Clara",
          contactName: "Elon Musk",
          salutation: "Mr",
          phoneNumber: "111-111-1111",
          fax: "122-111-1111",
          email: "elon@musk.com",
          website: "https://elonmusk.com",
          notes: "Address notes or delivery instructions.",
          rowVersion: "1-12345",
        },
        {
          id: "123",
          type: "primary",
          string: "25 Spring Street, Blackburn, VIC 3130",
          name: "HQ US",
          line1: "Main street",
          line2: "apt #",
          line3: "Suite #",
          line4: "delivery instructions",
          streetNumber: "25",
          city: "San Francisco",
          state: "CA",
          postalCode: "94104",
          country: "US",
          latitude: "40.759211",
          longitude: "-73.984638",
          county: "Santa Clara",
          contactName: "Elon Musk",
          salutation: "Mr",
          phoneNumber: "111-111-1111",
          fax: "122-111-1111",
          email: "elon@musk.com",
          website: "https://elonmusk.com",
          notes: "Address notes or delivery instructions.",
          rowVersion: "1-12345",
        },
        {
          id: "123",
          type: "primary",
          string: "25 Spring Street, Blackburn, VIC 3130",
          name: "HQ US",
          line1: "Main street",
          line2: "apt #",
          line3: "Suite #",
          line4: "delivery instructions",
          streetNumber: "25",
          city: "San Francisco",
          state: "CA",
          postalCode: "94104",
          country: "US",
          latitude: "40.759211",
          longitude: "-73.984638",
          county: "Santa Clara",
          contactName: "Elon Musk",
          salutation: "Mr",
          phoneNumber: "111-111-1111",
          fax: "122-111-1111",
          email: "elon@musk.com",
          website: "https://elonmusk.com",
          notes: "Address notes or delivery instructions.",
          rowVersion: "1-12345",
        },
      ],
      phoneNumbers: [
        {
          id: "12345",
          countryCode: "1",
          areaCode: "323",
          number: "111-111-1111",
          extension: "105",
          type: "primary",
        },
        {
          id: "12345",
          countryCode: "1",
          areaCode: "323",
          number: "111-111-1111",
          extension: "105",
          type: "primary",
        },
      ],
      emails: [
        {
          id: "123",
          email: "elon@musk.com",
          type: "primary",
        },
        {
          id: "123",
          email: "elon@musk.com",
          type: "primary",
        },
      ],
      websites: [
        {
          id: "12345",
          url: "http://example.com",
          type: "primary",
        },
        {
          id: "12345",
          url: "http://example.com",
          type: "primary",
        },
      ],
      bankAccounts: [
        {
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
        {
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
        {
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
      ],
      notes: "Some notes about this supplier",
      taxRate: {
        id: "123456",
        code: "N-T",
        name: "GST on Purchases",
        rate: 10,
      },
      taxNumber: "US123945459",
      currency: "USD",
      account: {
        id: "123456",
        name: "Bank account",
        nominalCode: "N091",
        code: "453",
      },
      status: "active",
      paymentMethod: "cash",
      channel: "email",
      customFields: [
        {
          id: "2389328923893298",
          name: "employee_level",
          description: "Employee Level",
          value: true,
        },
        {
          id: "2389328923893298",
          name: "employee_level",
          description: "Employee Level",
          value: 10,
        },
      ],
      updatedBy: "12345",
      createdBy: "12345",
      updatedAt: new Date("2020-09-30T07:43:32.000Z"),
      createdAt: new Date("2020-09-30T07:43:32.000Z"),
      rowVersion: "1-12345",
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
      ],
      subsidiaryId: "12345",
    },
  });
});

it.skip("Suppliers Accounting Suppliers Update", async () => {
  assert.fail(
    "incomplete test found please make sure to address the following errors: [`workflow step accounting.suppliersUpdate.test referencing operation accounting.suppliersUpdate with expression in requestBody with type  not currently supported`]",
  );
});

test("Suppliers Accounting Suppliers Delete", async () => {
  const testHttpClient = createTestHTTPClient("accounting.suppliersDelete");

  const apideck = new Apideck({
    serverURL: process.env["TEST_SERVER_URL"] ?? "http://localhost:18080",
    httpClient: testHttpClient,
    apiKey: process.env["APIDECK_API_KEY"] ?? "value",
  });

  const result = await apideck.accounting.suppliers.delete({
    id: "<id>",
    consumerId: "test-consumer",
    appId: "dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX",
    serviceId: "salesforce",
  });
  expect(result.httpMeta.response.status).toBe(200);
  expect(result.deleteSupplierResponse).toBeDefined();
  expect(result.deleteSupplierResponse).toEqual({
    statusCode: 200,
    status: "OK",
    service: "xero",
    resource: "suppliers",
    operation: "delete",
    data: {
      id: "12345",
    },
  });
});

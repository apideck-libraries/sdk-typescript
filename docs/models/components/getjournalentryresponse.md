# GetJournalEntryResponse

JournalEntries

## Example Usage

```typescript
import { GetJournalEntryResponse } from "@apideck/unify/models/components";

let value: GetJournalEntryResponse = {
  statusCode: 200,
  status: "OK",
  service: "quickbooks",
  resource: "journal-entries",
  operation: "one",
  data: {
    id: "12345",
    title: "Purchase Invoice-Inventory (USD): 2019/02/01 Batch Summary Entry",
    currencyRate: 0.69,
    currency: "USD",
    companyId: "12345",
    lineItems: [
      {
        id: "12345",
        description:
          "Model Y is a fully electric, mid-size SUV, with seating for up to seven, dual motor AWD and unparalleled protection.",
        taxAmount: 27500,
        subTotal: 27500,
        totalAmount: 27500,
        type: "debit",
        taxRate: {
          id: "123456",
          code: "N-T",
          name: "GST on Purchases",
          rate: 10,
        },
        trackingCategories: [
          {
            id: "123456",
            name: "New York",
            parentId: "123456",
            parentName: "New York",
          },
        ],
        ledgerAccount: {
          id: "123456",
          name: "Bank account",
          nominalCode: "N091",
          code: "453",
        },
        customer: {
          id: "12345",
          displayId: "CUST00101",
          displayName: "Windsurf Shop",
          companyName: "The boring company",
          email: "boring@boring.com",
        },
        supplier: {
          id: "12345",
          displayId: "SUPP00101",
          displayName: "Windsurf Shop",
          companyName: "The boring company",
          address: {
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
        },
        departmentId: "12345",
        locationId: "12345",
        lineNumber: 1,
      },
    ],
    status: "draft",
    memo: "Thank you for your business and have a great day!",
    postedAt: new Date("2020-09-30T07:43:32.000Z"),
    journalSymbol: "IND",
    taxType: "sales",
    taxCode: "1234",
    number: "OIT00546",
    trackingCategories: null,
    accountingPeriod: "01-24",
    updatedBy: "12345",
    createdBy: "12345",
    updatedAt: new Date("2020-09-30T07:43:32.000Z"),
    createdAt: new Date("2020-09-30T07:43:32.000Z"),
    rowVersion: "1-12345",
    customFields: [
      {
        id: "2389328923893298",
        name: "employee_level",
        description: "Employee Level",
        value: "Uses Salesforce and Marketo",
      },
    ],
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
};
```

## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             | Example                                                                 |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `statusCode`                                                            | *number*                                                                | :heavy_check_mark:                                                      | HTTP Response Status Code                                               | 200                                                                     |
| `status`                                                                | *string*                                                                | :heavy_check_mark:                                                      | HTTP Response Status                                                    | OK                                                                      |
| `service`                                                               | *string*                                                                | :heavy_check_mark:                                                      | Apideck ID of service provider                                          | quickbooks                                                              |
| `resource`                                                              | *string*                                                                | :heavy_check_mark:                                                      | Unified API resource name                                               | journal-entries                                                         |
| `operation`                                                             | *string*                                                                | :heavy_check_mark:                                                      | Operation performed                                                     | one                                                                     |
| `data`                                                                  | [components.JournalEntry](../../models/components/journalentry.md)      | :heavy_check_mark:                                                      | N/A                                                                     |                                                                         |
| `raw`                                                                   | Record<string, *any*>                                                   | :heavy_minus_sign:                                                      | Raw response from the integration when raw=true query param is provided |                                                                         |
# AccountingJournalEntriesAddRequest

## Example Usage

```typescript
import { AccountingJournalEntriesAddRequest } from "@apideck/unify/models/operations";

let value: AccountingJournalEntriesAddRequest = {
  serviceId: "salesforce",
  journalEntry: {
    title: "Purchase Invoice-Inventory (USD): 2019/02/01 Batch Summary Entry",
    currencyRate: 0.69,
    currency: "USD",
    companyId: "12345",
    lineItems: [
      {
        description:
          "Model Y is a fully electric, mid-size SUV, with seating for up to seven, dual motor AWD and unparalleled protection.",
        taxAmount: 27500,
        subTotal: 27500,
        totalAmount: 27500,
        type: "debit",
        taxRate: {
          id: "123456",
          rate: 10,
        },
        trackingCategories: [
          {
            id: "123456",
            name: "New York",
          },
        ],
        ledgerAccount: {
          id: "123456",
          nominalCode: "N091",
          code: "453",
        },
        customer: {
          id: "12345",
          displayName: "Windsurf Shop",
          email: "boring@boring.com",
        },
        supplier: {
          id: "12345",
          displayName: "Windsurf Shop",
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
        lineNumber: 1,
      },
    ],
    memo: "Thank you for your business and have a great day!",
    postedAt: new Date("2020-09-30T07:43:32.000Z"),
    journalSymbol: "IND",
    taxType: "sales",
    taxCode: "1234",
    number: "OIT00546",
    trackingCategories: [
      {
        id: "123456",
        name: "New York",
      },
    ],
    accountingPeriod: "01-24",
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

| Field                                                                                                                                         | Type                                                                                                                                          | Required                                                                                                                                      | Description                                                                                                                                   | Example                                                                                                                                       |
| --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| `raw`                                                                                                                                         | *boolean*                                                                                                                                     | :heavy_minus_sign:                                                                                                                            | Include raw response. Mostly used for debugging purposes                                                                                      |                                                                                                                                               |
| `consumerId`                                                                                                                                  | *string*                                                                                                                                      | :heavy_minus_sign:                                                                                                                            | ID of the consumer which you want to get or push data from                                                                                    | test-consumer                                                                                                                                 |
| `appId`                                                                                                                                       | *string*                                                                                                                                      | :heavy_minus_sign:                                                                                                                            | The ID of your Unify application                                                                                                              | dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX                                                                                                       |
| `serviceId`                                                                                                                                   | *string*                                                                                                                                      | :heavy_minus_sign:                                                                                                                            | Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API. | salesforce                                                                                                                                    |
| `journalEntry`                                                                                                                                | [components.JournalEntryInput](../../models/components/journalentryinput.md)                                                                  | :heavy_check_mark:                                                                                                                            | N/A                                                                                                                                           |                                                                                                                                               |
# BatchJournalEntriesRequest

A batch of journal entries to write in a single request. Each item is processed independently: some may succeed while others fail, and the response carries one result per item in the order they were sent.

## Example Usage

```typescript
import { BatchJournalEntriesRequest } from "@apideck/unify/models/components";

let value: BatchJournalEntriesRequest = {
  items: [
    {
      ref: "item-1",
      data: {
        displayId: "12345",
        title:
          "Purchase Invoice-Inventory (USD): 2019/02/01 Batch Summary Entry",
        currencyRate: 0.69,
        currency: "USD",
        companyId: "12345",
        subsidiary: null,
        lineItems: [
          {
            description:
              "Model Y is a fully electric, mid-size SUV, with seating for up to seven, dual motor AWD and unparalleled protection.",
            taxAmount: 27500,
            subTotal: 27500,
            totalAmount: 27500,
            baseCurrencyAmount: 27500,
            type: "debit",
            taxRate: {
              id: "123456",
              code: "N-T",
              rate: 10,
            },
            taxType: "sales",
            trackingCategories: [
              {
                id: "123456",
                code: "100",
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
              parentId: "123456",
              displayId: "123456",
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
                line5: "Attention: Finance Dept",
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
            employee: {
              id: "12345",
              displayId: "EH",
              displayName: "Ester Henderson",
            },
            departmentId: "12345",
            locationId: "12345",
            lineNumber: 1,
            worktags: [
              {
                id: "123456",
                value: "New York",
              },
            ],
            date: new Date("2020-09-30"),
            sourceId: "12345",
          },
        ],
        status: "draft",
        memo: "Thank you for your business and have a great day!",
        postedAt: new Date("2020-09-30T07:43:32.000Z"),
        journalSymbol: "IND",
        taxCode: "1234",
        number: "OIT00546",
        trackingCategories: [
          {
            id: "123456",
            code: "100",
            name: "New York",
            parentId: "123456",
            parentName: "New York",
          },
        ],
        accountingPeriod: "01-24",
        taxInclusive: true,
        attachments: [
          {
            name: "sample.jpg",
            mimeType: "image/jpeg",
            isCompressed: false,
            encoding: "base64",
            content: "data:image/jpeg;base64,...",
            notes: "A sample image",
          },
        ],
        sourceType: "manual",
        sourceId: "12345",
        rowVersion: "1-12345",
        customFields: [
          {
            id: "2389328923893298",
            name: "employee_level",
            refName: "Marketing",
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
    },
  ],
};
```

## Fields

| Field                                                                                                                                                                                                                                                                                                                                                                            | Type                                                                                                                                                                                                                                                                                                                                                                             | Required                                                                                                                                                                                                                                                                                                                                                                         | Description                                                                                                                                                                                                                                                                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `items`                                                                                                                                                                                                                                                                                                                                                                          | [components.BatchJournalEntriesRequestItems](../../models/components/batchjournalentriesrequestitems.md)[]                                                                                                                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                                                                                                                                                                                                                               | The records to write. The per-connector limit is the real cap and is usually lower than the ceiling here: read `batch_support.resources[<resource>].max_items` on the Connector API for the connector you are calling, or the resource gotchas. This ceiling exists so an oversized array is rejected by request validation before any per-item work runs, rather than after it. |
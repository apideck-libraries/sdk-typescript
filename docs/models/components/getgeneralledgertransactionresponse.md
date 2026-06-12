# GetGeneralLedgerTransactionResponse

GeneralLedgerTransaction

## Example Usage

```typescript
import { GetGeneralLedgerTransactionResponse } from "@apideck/unify/models/components";

let value: GetGeneralLedgerTransactionResponse = {
  statusCode: 200,
  status: "OK",
  service: "xero",
  resource: "general-ledger-transactions",
  operation: "one",
  data: {
    id: "12345",
    sourceType: "invoice",
    sourceId: "12345",
    postedAt: new Date("2020-09-30T07:43:32.000Z"),
    reference: "INV-2024-001",
    number: "JNL-001",
    currency: "USD",
    currencyRate: 0.69,
    memo: "Year-end adjustment for inventory revaluation",
    lineItems: [
      {
        id: "12345",
        description: "Sales revenue from Q3 batch",
        netAmount: 27500,
        type: "debit",
        taxAmount: 0,
        taxRate: {
          id: "123456",
          code: "N-T",
          name: "GST on Purchases",
          rate: 10,
        },
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
        lineNumber: 1,
      },
    ],
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

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                | Example                                                                                    |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `statusCode`                                                                               | *number*                                                                                   | :heavy_check_mark:                                                                         | HTTP Response Status Code                                                                  | 200                                                                                        |
| `status`                                                                                   | *string*                                                                                   | :heavy_check_mark:                                                                         | HTTP Response Status                                                                       | OK                                                                                         |
| `service`                                                                                  | *string*                                                                                   | :heavy_check_mark:                                                                         | Apideck ID of service provider                                                             | xero                                                                                       |
| `resource`                                                                                 | *string*                                                                                   | :heavy_check_mark:                                                                         | Unified API resource name                                                                  | general-ledger-transactions                                                                |
| `operation`                                                                                | *string*                                                                                   | :heavy_check_mark:                                                                         | Operation performed                                                                        | one                                                                                        |
| `data`                                                                                     | [components.GeneralLedgerTransaction](../../models/components/generalledgertransaction.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |                                                                                            |
| `raw`                                                                                      | Record<string, *any*>                                                                      | :heavy_minus_sign:                                                                         | Raw response from the integration when raw=true query param is provided                    |                                                                                            |
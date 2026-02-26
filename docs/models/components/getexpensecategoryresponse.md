# GetExpenseCategoryResponse

Expense Categories

## Example Usage

```typescript
import { GetExpenseCategoryResponse } from "@apideck/unify/models/components";

let value: GetExpenseCategoryResponse = {
  statusCode: 200,
  status: "OK",
  service: "netsuite",
  resource: "ExpenseCategories",
  operation: "one",
  data: {
    id: "12345",
    displayId: "123456",
    name: "Travel",
    code: "TRAVEL-001",
    description:
      "Travel-related expenses including flights, hotels, and ground transportation.",
    status: "active",
    account: {
      id: "123456",
      name: "Bank account",
      nominalCode: "N091",
      code: "453",
      parentId: "123456",
      displayId: "123456",
    },
    offsetAccount: null,
    taxRate: {
      id: "123456",
      code: "N-T",
      name: "GST on Purchases",
      rate: 10,
    },
    rateRequired: false,
    defaultRate: 0.67,
    downstreamId: "12345",
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
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              | Example                                                                  |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `statusCode`                                                             | *number*                                                                 | :heavy_check_mark:                                                       | HTTP Response Status Code                                                | 200                                                                      |
| `status`                                                                 | *string*                                                                 | :heavy_check_mark:                                                       | HTTP Response Status                                                     | OK                                                                       |
| `service`                                                                | *string*                                                                 | :heavy_check_mark:                                                       | Apideck ID of service provider                                           | netsuite                                                                 |
| `resource`                                                               | *string*                                                                 | :heavy_check_mark:                                                       | Unified API resource name                                                | ExpenseCategories                                                        |
| `operation`                                                              | *string*                                                                 | :heavy_check_mark:                                                       | Operation performed                                                      | one                                                                      |
| `data`                                                                   | [components.ExpenseCategory](../../models/components/expensecategory.md) | :heavy_check_mark:                                                       | N/A                                                                      |                                                                          |
| `raw`                                                                    | Record<string, *any*>                                                    | :heavy_minus_sign:                                                       | Raw response from the integration when raw=true query param is provided  |                                                                          |
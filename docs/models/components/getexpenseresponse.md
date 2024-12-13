# GetExpenseResponse

Expenses

## Example Usage

```typescript
import { GetExpenseResponse } from "@apideck/unify/models/components";

let value: GetExpenseResponse = {
  statusCode: 200,
  status: "OK",
  service: "quickbooks",
  resource: "Expenses",
  operation: "one",
  data: {
    id: "12345",
    number: "OIT00546",
    transactionDate: new Date("2021-05-01T12:00:00.000Z"),
    accountId: "123456",
    customerId: "12345",
    supplierId: "12345",
    companyId: "12345",
    departmentId: "12345",
    paymentType: "cash",
    currency: "USD",
    currencyRate: 0.69,
    type: "expense",
    memo: "For travel expenses incurred on 2024-05-15",
    taxRate: {
      id: "123456",
      code: "N-T",
      name: "GST on Purchases",
      rate: 10,
    },
    totalAmount: 275,
    lineItems: [
      {
        id: "12345",
        trackingCategories: [
          {
            id: "123456",
            name: "New York",
          },
        ],
        accountId: "123456",
        customerId: "12345",
        departmentId: "12345",
        locationId: "12345",
        taxRate: {
          id: "123456",
          code: "N-T",
          name: "GST on Purchases",
          rate: 10,
        },
        description: "Travel US.",
        totalAmount: 275,
        billable: true,
      },
    ],
    customFields: [
      {
        id: "2389328923893298",
        name: "employee_level",
        description: "Employee Level",
        value: {},
      },
    ],
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
    ],
  },
};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              | Example                                                  |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `statusCode`                                             | *number*                                                 | :heavy_check_mark:                                       | HTTP Response Status Code                                | 200                                                      |
| `status`                                                 | *string*                                                 | :heavy_check_mark:                                       | HTTP Response Status                                     | OK                                                       |
| `service`                                                | *string*                                                 | :heavy_check_mark:                                       | Apideck ID of service provider                           | quickbooks                                               |
| `resource`                                               | *string*                                                 | :heavy_check_mark:                                       | Unified API resource name                                | Expenses                                                 |
| `operation`                                              | *string*                                                 | :heavy_check_mark:                                       | Operation performed                                      | one                                                      |
| `data`                                                   | [components.Expense](../../models/components/expense.md) | :heavy_check_mark:                                       | N/A                                                      |                                                          |
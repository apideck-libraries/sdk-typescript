# AccountingExpensesAddRequest

## Example Usage

```typescript
import { AccountingExpensesAddRequest } from "apideck/models/operations";

let value: AccountingExpensesAddRequest = {
  serviceId: "salesforce",
  expense: {
    number: "OIT00546",
    transactionDate: new Date("2021-05-01T12:00:00.000Z"),
    accountId: "123456",
    customerId: "12345",
    supplierId: "12345",
    companyId: "12345",
    departmentId: "12345",
    currency: "USD",
    currencyRate: 0.69,
    type: "expense",
    memo: "For travel expenses incurred on 2024-05-15",
    taxRate: {
      id: "123456",
      rate: 10,
    },
    totalAmount: 275,
    lineItems: [
      {
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
        value: [
          {},
        ],
      },
    ],
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

| Field                                                                                                                                         | Type                                                                                                                                          | Required                                                                                                                                      | Description                                                                                                                                   | Example                                                                                                                                       |
| --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| `raw`                                                                                                                                         | *boolean*                                                                                                                                     | :heavy_minus_sign:                                                                                                                            | Include raw response. Mostly used for debugging purposes                                                                                      |                                                                                                                                               |
| `serviceId`                                                                                                                                   | *string*                                                                                                                                      | :heavy_minus_sign:                                                                                                                            | Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API. | salesforce                                                                                                                                    |
| `expense`                                                                                                                                     | [components.ExpenseInput](../../models/components/expenseinput.md)                                                                            | :heavy_check_mark:                                                                                                                            | N/A                                                                                                                                           |                                                                                                                                               |
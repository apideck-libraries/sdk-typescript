# AccountingExpensesUpdateRequest

## Example Usage

```typescript
import { AccountingExpensesUpdateRequest } from "@apideck/unify/models/operations";

let value: AccountingExpensesUpdateRequest = {
  id: "<id>",
  consumerId: "test-consumer",
  appId: "dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX",
  serviceId: "salesforce",
  expense: {
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
          "<value>",
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
| `id`                                                                                                                                          | *string*                                                                                                                                      | :heavy_check_mark:                                                                                                                            | ID of the record you are acting upon.                                                                                                         |                                                                                                                                               |
| `consumerId`                                                                                                                                  | *string*                                                                                                                                      | :heavy_minus_sign:                                                                                                                            | ID of the consumer which you want to get or push data from                                                                                    | test-consumer                                                                                                                                 |
| `appId`                                                                                                                                       | *string*                                                                                                                                      | :heavy_minus_sign:                                                                                                                            | The ID of your Unify application                                                                                                              | dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX                                                                                                       |
| `serviceId`                                                                                                                                   | *string*                                                                                                                                      | :heavy_minus_sign:                                                                                                                            | Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API. | salesforce                                                                                                                                    |
| `raw`                                                                                                                                         | *boolean*                                                                                                                                     | :heavy_minus_sign:                                                                                                                            | Include raw response. Mostly used for debugging purposes                                                                                      |                                                                                                                                               |
| `expense`                                                                                                                                     | [components.ExpenseInput](../../models/components/expenseinput.md)                                                                            | :heavy_check_mark:                                                                                                                            | N/A                                                                                                                                           |                                                                                                                                               |
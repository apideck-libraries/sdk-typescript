# AccountingExpenseReportsAddRequest

## Example Usage

```typescript
import { AccountingExpenseReportsAddRequest } from "@apideck/unify/models/operations";

let value: AccountingExpenseReportsAddRequest = {
  serviceId: "salesforce",
  expenseReport: {
    displayId: "123456",
    number: "ER-001",
    title: "Q1 Business Travel",
    employee: {
      id: "12345",
      displayName: "John Doe",
    },
    status: "submitted",
    transactionDate: new Date("2021-05-01T12:00:00.000Z"),
    postingDate: new Date("2024-06-01"),
    dueDate: new Date("2024-06-15"),
    currency: "USD",
    currencyRate: 0.69,
    subTotal: 250,
    totalTax: 25,
    totalAmount: 1250.75,
    reimbursableAmount: 1100,
    memo: "Business travel expenses for Q1 client meetings",
    department: {
      displayId: "123456",
      name: "Acme Inc.",
    },
    location: {
      id: "123456",
      displayId: "123456",
      name: "New York Office",
    },
    account: {
      id: "123456",
      name: "Bank account",
      nominalCode: "N091",
      code: "453",
      parentId: "123456",
      displayId: "123456",
    },
    accountingPeriod: {
      id: "12345",
      name: "Q1 2024",
    },
    lineItems: [],
    subsidiary: {
      displayId: "123456",
      name: "Acme Inc.",
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
    taxInclusive: true,
    approvedBy: {
      id: "12345",
      displayName: "Jane Smith",
    },
    customFields: [
      {
        id: "2389328923893298",
        name: "employee_level",
        description: "Employee Level",
        value: "Uses Salesforce and Marketo",
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
| `consumerId`                                                                                                                                  | *string*                                                                                                                                      | :heavy_minus_sign:                                                                                                                            | ID of the consumer which you want to get or push data from                                                                                    | test-consumer                                                                                                                                 |
| `appId`                                                                                                                                       | *string*                                                                                                                                      | :heavy_minus_sign:                                                                                                                            | The ID of your Unify application                                                                                                              | dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX                                                                                                       |
| `serviceId`                                                                                                                                   | *string*                                                                                                                                      | :heavy_minus_sign:                                                                                                                            | Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API. | salesforce                                                                                                                                    |
| `expenseReport`                                                                                                                               | [components.ExpenseReportInput](../../models/components/expensereportinput.md)                                                                | :heavy_check_mark:                                                                                                                            | N/A                                                                                                                                           |                                                                                                                                               |
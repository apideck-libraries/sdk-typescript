# GetExpenseReportResponse

Expense Reports

## Example Usage

```typescript
import { GetExpenseReportResponse } from "@apideck/unify/models/components";

let value: GetExpenseReportResponse = {
  statusCode: 200,
  status: "OK",
  service: "netsuite",
  resource: "ExpenseReports",
  operation: "one",
  data: {
    id: "12345",
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
      id: "12345",
      displayId: "123456",
      name: "Acme Inc.",
      downstreamId: "12345",
    },
    location: {
      id: "123456",
      displayId: "123456",
      name: "New York Office",
      downstreamId: "12345",
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
    lineItems: [
      {
        id: "12345",
        lineNumber: 1,
        expenseCategory: {
          id: "12345",
          downstreamId: "12345",
          displayId: "Airfare",
          name: "Airfare",
        },
        account: {
          id: "123456",
          name: "Bank account",
          nominalCode: "N091",
          code: "453",
          parentId: "123456",
          displayId: "123456",
        },
        description: "Flight to New York",
        quantity: 1,
        unitPrice: 27500.5,
        amount: 275,
        taxRate: {
          id: "123456",
          code: "N-T",
          name: "GST on Purchases",
          rate: 10,
        },
        taxAmount: 27.5,
        totalAmount: 302.5,
        transactionDate: new Date("2024-05-15"),
        billable: true,
        reimbursable: true,
        customer: {
          id: "12345",
          displayId: "CUST00101",
          displayName: "Windsurf Shop",
          companyName: "The boring company",
          email: "boring@boring.com",
        },
        department: null,
        location: {
          id: "123456",
          displayId: "123456",
          name: "New York Office",
          downstreamId: "12345",
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
        receiptUrl: "https://example.com/receipts/123.pdf",
        currency: "USD",
        updatedBy: "12345",
        createdBy: "12345",
        updatedAt: new Date("2020-09-30T07:43:32.000Z"),
        createdAt: new Date("2020-09-30T07:43:32.000Z"),
      },
    ],
    subsidiary: {
      id: "12345",
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
    approvedBy: null,
    customFields: [
      {
        id: "2389328923893298",
        name: "employee_level",
        description: "Employee Level",
        value: "Uses Salesforce and Marketo",
      },
    ],
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

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             | Example                                                                 |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `statusCode`                                                            | *number*                                                                | :heavy_check_mark:                                                      | HTTP Response Status Code                                               | 200                                                                     |
| `status`                                                                | *string*                                                                | :heavy_check_mark:                                                      | HTTP Response Status                                                    | OK                                                                      |
| `service`                                                               | *string*                                                                | :heavy_check_mark:                                                      | Apideck ID of service provider                                          | netsuite                                                                |
| `resource`                                                              | *string*                                                                | :heavy_check_mark:                                                      | Unified API resource name                                               | ExpenseReports                                                          |
| `operation`                                                             | *string*                                                                | :heavy_check_mark:                                                      | Operation performed                                                     | one                                                                     |
| `data`                                                                  | [components.ExpenseReport](../../models/components/expensereport.md)    | :heavy_check_mark:                                                      | N/A                                                                     |                                                                         |
| `raw`                                                                   | Record<string, *any*>                                                   | :heavy_minus_sign:                                                      | Raw response from the integration when raw=true query param is provided |                                                                         |
# ExpenseReportInput

## Example Usage

```typescript
import { ExpenseReportInput } from "@apideck/unify/models/components";

let value: ExpenseReportInput = {
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
  accountingPeriod: null,
  lineItems: [
    {
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
        rate: 10,
      },
      taxAmount: 27.5,
      totalAmount: 302.5,
      transactionDate: new Date("2024-05-15"),
      billable: true,
      reimbursable: true,
      customer: {
        id: "12345",
        displayName: "Windsurf Shop",
        email: "boring@boring.com",
      },
      department: null,
      location: {
        id: "123456",
        displayId: "123456",
        name: "New York Office",
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
    },
  ],
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
};
```

## Fields

| Field                                                                                                                                                   | Type                                                                                                                                                    | Required                                                                                                                                                | Description                                                                                                                                             | Example                                                                                                                                                 |
| ------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `displayId`                                                                                                                                             | *string*                                                                                                                                                | :heavy_minus_sign:                                                                                                                                      | Id to be displayed.                                                                                                                                     | 123456                                                                                                                                                  |
| `number`                                                                                                                                                | *string*                                                                                                                                                | :heavy_minus_sign:                                                                                                                                      | The expense report number.                                                                                                                              | ER-001                                                                                                                                                  |
| `title`                                                                                                                                                 | *string*                                                                                                                                                | :heavy_minus_sign:                                                                                                                                      | Title or purpose of the expense report.                                                                                                                 | Q1 Business Travel                                                                                                                                      |
| `employee`                                                                                                                                              | [components.ExpenseReportEmployee](../../models/components/expensereportemployee.md)                                                                    | :heavy_check_mark:                                                                                                                                      | The employee who submitted the expense report.                                                                                                          |                                                                                                                                                         |
| `status`                                                                                                                                                | [components.ExpenseReportStatus](../../models/components/expensereportstatus.md)                                                                        | :heavy_minus_sign:                                                                                                                                      | The status of the expense report.                                                                                                                       | submitted                                                                                                                                               |
| `transactionDate`                                                                                                                                       | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                                           | :heavy_check_mark:                                                                                                                                      | The date of the transaction - YYYY:MM::DDThh:mm:ss.sTZD                                                                                                 | 2021-05-01T12:00:00.000Z                                                                                                                                |
| `postingDate`                                                                                                                                           | [Date](../../types/rfcdate.md)                                                                                                                          | :heavy_minus_sign:                                                                                                                                      | The date the expense report was posted to the general ledger.                                                                                           | 2024-06-01                                                                                                                                              |
| `dueDate`                                                                                                                                               | [Date](../../types/rfcdate.md)                                                                                                                          | :heavy_minus_sign:                                                                                                                                      | Date when reimbursement is due.                                                                                                                         | 2024-06-15                                                                                                                                              |
| `currency`                                                                                                                                              | [components.Currency](../../models/components/currency.md)                                                                                              | :heavy_minus_sign:                                                                                                                                      | Indicates the associated currency for an amount of money. Values correspond to [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217).                      | USD                                                                                                                                                     |
| `currencyRate`                                                                                                                                          | *number*                                                                                                                                                | :heavy_minus_sign:                                                                                                                                      | Currency Exchange Rate at the time entity was recorded/generated.                                                                                       | 0.69                                                                                                                                                    |
| `subTotal`                                                                                                                                              | *number*                                                                                                                                                | :heavy_minus_sign:                                                                                                                                      | Subtotal amount, normally before tax.                                                                                                                   | 250                                                                                                                                                     |
| `totalTax`                                                                                                                                              | *number*                                                                                                                                                | :heavy_minus_sign:                                                                                                                                      | Total tax amount applied to this transaction.                                                                                                           | 25                                                                                                                                                      |
| `totalAmount`                                                                                                                                           | *number*                                                                                                                                                | :heavy_minus_sign:                                                                                                                                      | Total amount of all expense lines including tax.                                                                                                        | 1250.75                                                                                                                                                 |
| `reimbursableAmount`                                                                                                                                    | *number*                                                                                                                                                | :heavy_minus_sign:                                                                                                                                      | Total reimbursable amount (may differ from total if some expenses are non-reimbursable).                                                                | 1100                                                                                                                                                    |
| `memo`                                                                                                                                                  | *string*                                                                                                                                                | :heavy_minus_sign:                                                                                                                                      | The memo of the expense report.                                                                                                                         | Business travel expenses for Q1 client meetings                                                                                                         |
| `department`                                                                                                                                            | [components.LinkedDepartmentInput](../../models/components/linkeddepartmentinput.md)                                                                    | :heavy_minus_sign:                                                                                                                                      | N/A                                                                                                                                                     |                                                                                                                                                         |
| `location`                                                                                                                                              | [components.LinkedLocationInput](../../models/components/linkedlocationinput.md)                                                                        | :heavy_minus_sign:                                                                                                                                      | N/A                                                                                                                                                     |                                                                                                                                                         |
| `account`                                                                                                                                               | [components.LinkedLedgerAccount](../../models/components/linkedledgeraccount.md)                                                                        | :heavy_minus_sign:                                                                                                                                      | N/A                                                                                                                                                     |                                                                                                                                                         |
| `accountingPeriod`                                                                                                                                      | [components.AccountingPeriod](../../models/components/accountingperiod.md)                                                                              | :heavy_minus_sign:                                                                                                                                      | The accounting period the expense report is posted to.                                                                                                  |                                                                                                                                                         |
| `lineItems`                                                                                                                                             | [components.ExpenseReportLineItemInput](../../models/components/expensereportlineiteminput.md)[]                                                        | :heavy_check_mark:                                                                                                                                      | Expense line items linked to this expense report.                                                                                                       |                                                                                                                                                         |
| `subsidiary`                                                                                                                                            | [components.LinkedSubsidiaryInput](../../models/components/linkedsubsidiaryinput.md)                                                                    | :heavy_minus_sign:                                                                                                                                      | N/A                                                                                                                                                     |                                                                                                                                                         |
| `trackingCategories`                                                                                                                                    | [components.LinkedTrackingCategory](../../models/components/linkedtrackingcategory.md)[]                                                                | :heavy_minus_sign:                                                                                                                                      | A list of linked tracking categories.                                                                                                                   |                                                                                                                                                         |
| `taxInclusive`                                                                                                                                          | *boolean*                                                                                                                                               | :heavy_minus_sign:                                                                                                                                      | Amounts are including tax                                                                                                                               | true                                                                                                                                                    |
| `approvedBy`                                                                                                                                            | [components.ApprovedBy](../../models/components/approvedby.md)                                                                                          | :heavy_minus_sign:                                                                                                                                      | The person who approved the expense report.                                                                                                             |                                                                                                                                                         |
| `customFields`                                                                                                                                          | *components.CustomField*[]                                                                                                                              | :heavy_minus_sign:                                                                                                                                      | N/A                                                                                                                                                     |                                                                                                                                                         |
| `rowVersion`                                                                                                                                            | *string*                                                                                                                                                | :heavy_minus_sign:                                                                                                                                      | A binary value used to detect updates to a object and prevent data conflicts. It is incremented each time an update is made to the object.              | 1-12345                                                                                                                                                 |
| `passThrough`                                                                                                                                           | [components.PassThroughBody](../../models/components/passthroughbody.md)[]                                                                              | :heavy_minus_sign:                                                                                                                                      | The pass_through property allows passing service-specific, custom data or structured modifications in request body when creating or updating resources. |                                                                                                                                                         |
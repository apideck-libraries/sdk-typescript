# ExpenseReportLineItem

## Example Usage

```typescript
import { ExpenseReportLineItem } from "@apideck/unify/models/components";

let value: ExpenseReportLineItem = {
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
};
```

## Fields

| Field                                                                                                                              | Type                                                                                                                               | Required                                                                                                                           | Description                                                                                                                        | Example                                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                               | *string*                                                                                                                           | :heavy_minus_sign:                                                                                                                 | A unique identifier for an object.                                                                                                 | 12345                                                                                                                              |
| `lineNumber`                                                                                                                       | *number*                                                                                                                           | :heavy_minus_sign:                                                                                                                 | Line number of the resource                                                                                                        | 1                                                                                                                                  |
| `expenseCategory`                                                                                                                  | [components.LinkedExpenseCategory](../../models/components/linkedexpensecategory.md)                                               | :heavy_minus_sign:                                                                                                                 | The expense category this entity is linked to.                                                                                     |                                                                                                                                    |
| `account`                                                                                                                          | [components.LinkedLedgerAccount](../../models/components/linkedledgeraccount.md)                                                   | :heavy_minus_sign:                                                                                                                 | N/A                                                                                                                                |                                                                                                                                    |
| `description`                                                                                                                      | *string*                                                                                                                           | :heavy_minus_sign:                                                                                                                 | The description of the expense line item.                                                                                          | Flight to New York                                                                                                                 |
| `quantity`                                                                                                                         | *number*                                                                                                                           | :heavy_minus_sign:                                                                                                                 | N/A                                                                                                                                | 1                                                                                                                                  |
| `unitPrice`                                                                                                                        | *number*                                                                                                                           | :heavy_minus_sign:                                                                                                                 | N/A                                                                                                                                | 27500.5                                                                                                                            |
| `amount`                                                                                                                           | *number*                                                                                                                           | :heavy_check_mark:                                                                                                                 | The amount of the expense line item.                                                                                               | 275                                                                                                                                |
| `taxRate`                                                                                                                          | [components.LinkedTaxRate](../../models/components/linkedtaxrate.md)                                                               | :heavy_minus_sign:                                                                                                                 | N/A                                                                                                                                |                                                                                                                                    |
| `taxAmount`                                                                                                                        | *number*                                                                                                                           | :heavy_minus_sign:                                                                                                                 | Tax amount                                                                                                                         | 27.5                                                                                                                               |
| `totalAmount`                                                                                                                      | *number*                                                                                                                           | :heavy_minus_sign:                                                                                                                 | The total amount of the expense line item including tax.                                                                           | 302.5                                                                                                                              |
| `transactionDate`                                                                                                                  | [Date](../../types/rfcdate.md)                                                                                                     | :heavy_minus_sign:                                                                                                                 | The date of the individual expense.                                                                                                | 2024-05-15                                                                                                                         |
| `billable`                                                                                                                         | *boolean*                                                                                                                          | :heavy_minus_sign:                                                                                                                 | Whether the expense is billable to a customer.                                                                                     | true                                                                                                                               |
| `reimbursable`                                                                                                                     | *boolean*                                                                                                                          | :heavy_minus_sign:                                                                                                                 | Whether the expense is reimbursable to the employee.                                                                               | true                                                                                                                               |
| `customer`                                                                                                                         | [components.LinkedCustomer](../../models/components/linkedcustomer.md)                                                             | :heavy_minus_sign:                                                                                                                 | The customer this entity is linked to.                                                                                             |                                                                                                                                    |
| `department`                                                                                                                       | [components.LinkedDepartment](../../models/components/linkeddepartment.md)                                                         | :heavy_minus_sign:                                                                                                                 | N/A                                                                                                                                |                                                                                                                                    |
| `location`                                                                                                                         | [components.LinkedLocation](../../models/components/linkedlocation.md)                                                             | :heavy_minus_sign:                                                                                                                 | N/A                                                                                                                                |                                                                                                                                    |
| `trackingCategories`                                                                                                               | [components.LinkedTrackingCategory](../../models/components/linkedtrackingcategory.md)[]                                           | :heavy_minus_sign:                                                                                                                 | A list of linked tracking categories.                                                                                              |                                                                                                                                    |
| `receiptUrl`                                                                                                                       | *string*                                                                                                                           | :heavy_minus_sign:                                                                                                                 | URL to the receipt or attachment for this expense line.                                                                            | https://example.com/receipts/123.pdf                                                                                               |
| `currency`                                                                                                                         | [components.Currency](../../models/components/currency.md)                                                                         | :heavy_minus_sign:                                                                                                                 | Indicates the associated currency for an amount of money. Values correspond to [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217). | USD                                                                                                                                |
| `updatedBy`                                                                                                                        | *string*                                                                                                                           | :heavy_minus_sign:                                                                                                                 | The user who last updated the object.                                                                                              | 12345                                                                                                                              |
| `createdBy`                                                                                                                        | *string*                                                                                                                           | :heavy_minus_sign:                                                                                                                 | The user who created the object.                                                                                                   | 12345                                                                                                                              |
| `updatedAt`                                                                                                                        | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                      | :heavy_minus_sign:                                                                                                                 | The date and time when the object was last updated.                                                                                | 2020-09-30T07:43:32.000Z                                                                                                           |
| `createdAt`                                                                                                                        | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                      | :heavy_minus_sign:                                                                                                                 | The date and time when the object was created.                                                                                     | 2020-09-30T07:43:32.000Z                                                                                                           |
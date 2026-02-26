# ExpenseReportLineItemInput

## Example Usage

```typescript
import { ExpenseReportLineItemInput } from "@apideck/unify/models/components";

let value: ExpenseReportLineItemInput = {
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
  department: {
    displayId: "123456",
    name: "Acme Inc.",
  },
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
};
```

## Fields

| Field                                                                                                                              | Type                                                                                                                               | Required                                                                                                                           | Description                                                                                                                        | Example                                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `lineNumber`                                                                                                                       | *number*                                                                                                                           | :heavy_minus_sign:                                                                                                                 | Line number of the resource                                                                                                        | 1                                                                                                                                  |
| `expenseCategory`                                                                                                                  | [components.LinkedExpenseCategory](../../models/components/linkedexpensecategory.md)                                               | :heavy_minus_sign:                                                                                                                 | The expense category this entity is linked to.                                                                                     |                                                                                                                                    |
| `account`                                                                                                                          | [components.LinkedLedgerAccount](../../models/components/linkedledgeraccount.md)                                                   | :heavy_minus_sign:                                                                                                                 | N/A                                                                                                                                |                                                                                                                                    |
| `description`                                                                                                                      | *string*                                                                                                                           | :heavy_minus_sign:                                                                                                                 | The description of the expense line item.                                                                                          | Flight to New York                                                                                                                 |
| `quantity`                                                                                                                         | *number*                                                                                                                           | :heavy_minus_sign:                                                                                                                 | N/A                                                                                                                                | 1                                                                                                                                  |
| `unitPrice`                                                                                                                        | *number*                                                                                                                           | :heavy_minus_sign:                                                                                                                 | N/A                                                                                                                                | 27500.5                                                                                                                            |
| `amount`                                                                                                                           | *number*                                                                                                                           | :heavy_check_mark:                                                                                                                 | The amount of the expense line item.                                                                                               | 275                                                                                                                                |
| `taxRate`                                                                                                                          | [components.LinkedTaxRateInput](../../models/components/linkedtaxrateinput.md)                                                     | :heavy_minus_sign:                                                                                                                 | N/A                                                                                                                                |                                                                                                                                    |
| `taxAmount`                                                                                                                        | *number*                                                                                                                           | :heavy_minus_sign:                                                                                                                 | Tax amount                                                                                                                         | 27.5                                                                                                                               |
| `totalAmount`                                                                                                                      | *number*                                                                                                                           | :heavy_minus_sign:                                                                                                                 | The total amount of the expense line item including tax.                                                                           | 302.5                                                                                                                              |
| `transactionDate`                                                                                                                  | [Date](../../types/rfcdate.md)                                                                                                     | :heavy_minus_sign:                                                                                                                 | The date of the individual expense.                                                                                                | 2024-05-15                                                                                                                         |
| `billable`                                                                                                                         | *boolean*                                                                                                                          | :heavy_minus_sign:                                                                                                                 | Whether the expense is billable to a customer.                                                                                     | true                                                                                                                               |
| `reimbursable`                                                                                                                     | *boolean*                                                                                                                          | :heavy_minus_sign:                                                                                                                 | Whether the expense is reimbursable to the employee.                                                                               | true                                                                                                                               |
| `customer`                                                                                                                         | [components.LinkedCustomerInput](../../models/components/linkedcustomerinput.md)                                                   | :heavy_minus_sign:                                                                                                                 | The customer this entity is linked to.                                                                                             |                                                                                                                                    |
| `department`                                                                                                                       | [components.LinkedDepartmentInput](../../models/components/linkeddepartmentinput.md)                                               | :heavy_minus_sign:                                                                                                                 | N/A                                                                                                                                |                                                                                                                                    |
| `location`                                                                                                                         | [components.LinkedLocationInput](../../models/components/linkedlocationinput.md)                                                   | :heavy_minus_sign:                                                                                                                 | N/A                                                                                                                                |                                                                                                                                    |
| `trackingCategories`                                                                                                               | [components.LinkedTrackingCategory](../../models/components/linkedtrackingcategory.md)[]                                           | :heavy_minus_sign:                                                                                                                 | A list of linked tracking categories.                                                                                              |                                                                                                                                    |
| `receiptUrl`                                                                                                                       | *string*                                                                                                                           | :heavy_minus_sign:                                                                                                                 | URL to the receipt or attachment for this expense line.                                                                            | https://example.com/receipts/123.pdf                                                                                               |
| `currency`                                                                                                                         | [components.Currency](../../models/components/currency.md)                                                                         | :heavy_minus_sign:                                                                                                                 | Indicates the associated currency for an amount of money. Values correspond to [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217). | USD                                                                                                                                |
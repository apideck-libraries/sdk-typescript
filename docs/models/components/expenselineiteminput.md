# ExpenseLineItemInput

## Example Usage

```typescript
import { ExpenseLineItemInput } from "@apideck/unify/models/components";

let value: ExpenseLineItemInput = {
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
  subsidiaryId: "12345",
  taxRate: {
    id: "123456",
    rate: 10,
  },
  description: "Travel US.",
  totalAmount: 275,
  billable: true,
  lineNumber: 1,
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              | Example                                                                                  |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `trackingCategories`                                                                     | [components.LinkedTrackingCategory](../../models/components/linkedtrackingcategory.md)[] | :heavy_minus_sign:                                                                       | A list of linked tracking categories.                                                    |                                                                                          |
| `accountId`                                                                              | *string*                                                                                 | :heavy_minus_sign:                                                                       | The unique identifier for the ledger account.                                            | 123456                                                                                   |
| `customerId`                                                                             | *string*                                                                                 | :heavy_minus_sign:                                                                       | The ID of the customer this expense item is linked to.                                   | 12345                                                                                    |
| `departmentId`                                                                           | *string*                                                                                 | :heavy_minus_sign:                                                                       | The ID of the department                                                                 | 12345                                                                                    |
| `locationId`                                                                             | *string*                                                                                 | :heavy_minus_sign:                                                                       | The ID of the location                                                                   | 12345                                                                                    |
| `subsidiaryId`                                                                           | *string*                                                                                 | :heavy_minus_sign:                                                                       | The ID of the subsidiary                                                                 | 12345                                                                                    |
| `taxRate`                                                                                | [components.LinkedTaxRateInput](../../models/components/linkedtaxrateinput.md)           | :heavy_minus_sign:                                                                       | N/A                                                                                      |                                                                                          |
| `description`                                                                            | *string*                                                                                 | :heavy_minus_sign:                                                                       | The expense line item description                                                        | Travel US.                                                                               |
| `totalAmount`                                                                            | *number*                                                                                 | :heavy_check_mark:                                                                       | The total amount of the expense line item.                                               | 275                                                                                      |
| `billable`                                                                               | *boolean*                                                                                | :heavy_minus_sign:                                                                       | Boolean that indicates if the line item is billable or not.                              | true                                                                                     |
| `lineNumber`                                                                             | *number*                                                                                 | :heavy_minus_sign:                                                                       | Line number of the resource                                                              | 1                                                                                        |
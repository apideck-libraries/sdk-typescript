# ExpenseLineItem

## Example Usage

```typescript
import { ExpenseLineItem } from "apideck/models/components";

let value: ExpenseLineItem = {
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
};
```

## Fields

| Field                                                                                    | Type                                                                                     | Required                                                                                 | Description                                                                              | Example                                                                                  |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `id`                                                                                     | *string*                                                                                 | :heavy_minus_sign:                                                                       | A unique identifier for an object.                                                       | 12345                                                                                    |
| `trackingCategories`                                                                     | [components.LinkedTrackingCategory](../../models/components/linkedtrackingcategory.md)[] | :heavy_minus_sign:                                                                       | A list of linked tracking categories.                                                    |                                                                                          |
| `accountId`                                                                              | *string*                                                                                 | :heavy_minus_sign:                                                                       | The unique identifier for the ledger account.                                            | 123456                                                                                   |
| `customerId`                                                                             | *string*                                                                                 | :heavy_minus_sign:                                                                       | The ID of the customer this expense item is linked to.                                   | 12345                                                                                    |
| `departmentId`                                                                           | *string*                                                                                 | :heavy_minus_sign:                                                                       | The ID of the department this expense item is linked to.                                 | 12345                                                                                    |
| `locationId`                                                                             | *string*                                                                                 | :heavy_minus_sign:                                                                       | The ID of the location this expense item is linked to.                                   | 12345                                                                                    |
| `taxRate`                                                                                | [components.LinkedTaxRate](../../models/components/linkedtaxrate.md)                     | :heavy_minus_sign:                                                                       | N/A                                                                                      |                                                                                          |
| `description`                                                                            | *string*                                                                                 | :heavy_minus_sign:                                                                       | The expense line item description                                                        | Travel US.                                                                               |
| `totalAmount`                                                                            | *number*                                                                                 | :heavy_check_mark:                                                                       | The total amount of the expense line item.                                               | 275                                                                                      |
| `billable`                                                                               | *boolean*                                                                                | :heavy_minus_sign:                                                                       | Boolean that indicates if the line item is billable or not.                              | true                                                                                     |
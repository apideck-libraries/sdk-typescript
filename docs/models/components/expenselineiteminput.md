# ExpenseLineItemInput

## Example Usage

```typescript
import { ExpenseLineItemInput } from "@apideck/unify/models/components";

let value: ExpenseLineItemInput = {
  trackingCategories: [
    {
      id: "123456",
      code: "100",
      name: "New York",
      parentId: "123456",
      parentName: "New York",
    },
  ],
  account: {
    id: "123456",
    name: "Bank account",
    nominalCode: "N091",
    code: "453",
    parentId: "123456",
    displayId: "123456",
  },
  customer: {
    id: "12345",
    displayName: "Windsurf Shop",
    email: "boring@boring.com",
  },
  departmentId: "12345",
  department: {
    displayId: "123456",
    name: "Acme Inc.",
  },
  locationId: "12345",
  location: {
    id: "123456",
    displayId: "123456",
    name: "New York Office",
  },
  taxRate: {
    id: "123456",
    code: "N-T",
    rate: 10,
  },
  description: "Travel US.",
  type: "expense_account",
  totalAmount: 275,
  taxAmount: 27.5,
  quantity: 1,
  unitPrice: 27500.5,
  item: {
    id: "12344",
    code: "120-C",
    name: "Model Y",
  },
  lineNumber: 1,
  rebilling: {
    rebillable: true,
    rebillStatus: "billed",
    linkedTransactionId: "txn_abc123",
    linkedTransactionLineId: "line_xyz789",
  },
};
```

## Fields

| Field                                                                                                                                                      | Type                                                                                                                                                       | Required                                                                                                                                                   | Description                                                                                                                                                | Example                                                                                                                                                    |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `trackingCategories`                                                                                                                                       | [components.LinkedTrackingCategory](../../models/components/linkedtrackingcategory.md)[]                                                                   | :heavy_minus_sign:                                                                                                                                         | A list of linked tracking categories.                                                                                                                      |                                                                                                                                                            |
| ~~`accountId`~~                                                                                                                                            | *string*                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                         | : warning: ** DEPRECATED **: Deprecated. Use account instead..<br/><br/>The unique identifier for the ledger account. Deprecated, use account instead.     | 123456                                                                                                                                                     |
| `account`                                                                                                                                                  | [components.LinkedLedgerAccount](../../models/components/linkedledgeraccount.md)                                                                           | :heavy_minus_sign:                                                                                                                                         | N/A                                                                                                                                                        |                                                                                                                                                            |
| ~~`customerId`~~                                                                                                                                           | *string*                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                         | : warning: ** DEPRECATED **: Deprecated. Use customer instead..<br/><br/>The ID of the customer this expense item is linked to. Deprecated in favor of `customer`. | 12345                                                                                                                                                      |
| `customer`                                                                                                                                                 | [components.LinkedCustomerInput](../../models/components/linkedcustomerinput.md)                                                                           | :heavy_minus_sign:                                                                                                                                         | The customer this entity is linked to.                                                                                                                     |                                                                                                                                                            |
| `departmentId`                                                                                                                                             | *string*                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                         | The ID of the department                                                                                                                                   | 12345                                                                                                                                                      |
| `department`                                                                                                                                               | [components.LinkedDepartmentInput](../../models/components/linkeddepartmentinput.md)                                                                       | :heavy_minus_sign:                                                                                                                                         | N/A                                                                                                                                                        |                                                                                                                                                            |
| `locationId`                                                                                                                                               | *string*                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                         | The ID of the location                                                                                                                                     | 12345                                                                                                                                                      |
| `location`                                                                                                                                                 | [components.LinkedLocationInput](../../models/components/linkedlocationinput.md)                                                                           | :heavy_minus_sign:                                                                                                                                         | N/A                                                                                                                                                        |                                                                                                                                                            |
| `taxRate`                                                                                                                                                  | [components.LinkedTaxRateInput](../../models/components/linkedtaxrateinput.md)                                                                             | :heavy_minus_sign:                                                                                                                                         | N/A                                                                                                                                                        |                                                                                                                                                            |
| `description`                                                                                                                                              | *string*                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                         | The expense line item description                                                                                                                          | Travel US.                                                                                                                                                 |
| `type`                                                                                                                                                     | [components.LineItemType](../../models/components/lineitemtype.md)                                                                                         | :heavy_minus_sign:                                                                                                                                         | Line Item type                                                                                                                                             | expense_account                                                                                                                                            |
| `totalAmount`                                                                                                                                              | *number*                                                                                                                                                   | :heavy_check_mark:                                                                                                                                         | The total amount of the expense line item.                                                                                                                 | 275                                                                                                                                                        |
| `taxAmount`                                                                                                                                                | *number*                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                         | Tax amount                                                                                                                                                 | 27.5                                                                                                                                                       |
| `quantity`                                                                                                                                                 | *number*                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                         | N/A                                                                                                                                                        | 1                                                                                                                                                          |
| `unitPrice`                                                                                                                                                | *number*                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                         | N/A                                                                                                                                                        | 27500.5                                                                                                                                                    |
| `item`                                                                                                                                                     | [components.LinkedInvoiceItem](../../models/components/linkedinvoiceitem.md)                                                                               | :heavy_minus_sign:                                                                                                                                         | N/A                                                                                                                                                        |                                                                                                                                                            |
| `lineNumber`                                                                                                                                               | *number*                                                                                                                                                   | :heavy_minus_sign:                                                                                                                                         | Line number of the resource                                                                                                                                | 1                                                                                                                                                          |
| `rebilling`                                                                                                                                                | [components.Rebilling](../../models/components/rebilling.md)                                                                                               | :heavy_minus_sign:                                                                                                                                         | Rebilling metadata for this line item.                                                                                                                     |                                                                                                                                                            |
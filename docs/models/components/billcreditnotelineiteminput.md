# BillCreditNoteLineItemInput

## Example Usage

```typescript
import { BillCreditNoteLineItemInput } from "@apideck/unify/models/components";

let value: BillCreditNoteLineItemInput = {
  rowId: "12345",
  code: "120-C",
  lineNumber: 1,
  description: "Returned goods credit",
  type: "expense_account",
  taxAmount: 27.5,
  totalAmount: 27500,
  quantity: 1,
  unitPrice: 27500.5,
  unitOfMeasure: "pc.",
  discountPercentage: 0.01,
  discountAmount: 19.99,
  serviceDate: new Date("2024-01-15"),
  location: {
    id: "123456",
    displayId: "123456",
    name: "New York Office",
  },
  department: {
    displayId: "123456",
    name: "Acme Inc.",
  },
  item: {
    id: "12344",
    code: "120-C",
    name: "Model Y",
  },
  taxRate: {
    id: "123456",
    code: "N-T",
    rate: 10,
  },
  ledgerAccount: {
    id: "123456",
    name: "Bank account",
    nominalCode: "N091",
    code: "453",
    parentId: "123456",
    displayId: "123456",
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
  rowVersion: "1-12345",
};
```

## Fields

| Field                                                                                                                                      | Type                                                                                                                                       | Required                                                                                                                                   | Description                                                                                                                                | Example                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ |
| `rowId`                                                                                                                                    | *string*                                                                                                                                   | :heavy_minus_sign:                                                                                                                         | The unique row identifier of the line item, when the connector exposes one.                                                                | 12345                                                                                                                                      |
| `code`                                                                                                                                     | *string*                                                                                                                                   | :heavy_minus_sign:                                                                                                                         | User defined item code.                                                                                                                    | 120-C                                                                                                                                      |
| `lineNumber`                                                                                                                               | *number*                                                                                                                                   | :heavy_minus_sign:                                                                                                                         | Line number of the resource                                                                                                                | 1                                                                                                                                          |
| `description`                                                                                                                              | *string*                                                                                                                                   | :heavy_minus_sign:                                                                                                                         | User defined description for the line item.                                                                                                | Returned goods credit                                                                                                                      |
| `type`                                                                                                                                     | [components.LineItemType](../../models/components/lineitemtype.md)                                                                         | :heavy_minus_sign:                                                                                                                         | Line Item type                                                                                                                             | expense_account                                                                                                                            |
| `taxAmount`                                                                                                                                | *number*                                                                                                                                   | :heavy_minus_sign:                                                                                                                         | Tax amount                                                                                                                                 | 27.5                                                                                                                                       |
| `totalAmount`                                                                                                                              | *number*                                                                                                                                   | :heavy_minus_sign:                                                                                                                         | Total amount of the line item.                                                                                                             | 27500                                                                                                                                      |
| `quantity`                                                                                                                                 | *number*                                                                                                                                   | :heavy_minus_sign:                                                                                                                         | N/A                                                                                                                                        | 1                                                                                                                                          |
| `unitPrice`                                                                                                                                | *number*                                                                                                                                   | :heavy_minus_sign:                                                                                                                         | N/A                                                                                                                                        | 27500.5                                                                                                                                    |
| `unitOfMeasure`                                                                                                                            | *string*                                                                                                                                   | :heavy_minus_sign:                                                                                                                         | Description of the unit type the item is sold as, ie: kg, hour.                                                                            | pc.                                                                                                                                        |
| `discountPercentage`                                                                                                                       | *number*                                                                                                                                   | :heavy_minus_sign:                                                                                                                         | Discount percentage applied to the line item when supported downstream.                                                                    | 0.01                                                                                                                                       |
| `discountAmount`                                                                                                                           | *number*                                                                                                                                   | :heavy_minus_sign:                                                                                                                         | Discount amount applied to the line item when supported downstream.                                                                        | 19.99                                                                                                                                      |
| `serviceDate`                                                                                                                              | [Date](../../types/rfcdate.md)                                                                                                             | :heavy_minus_sign:                                                                                                                         | Date on which the service was provided or performed - YYYY-MM-DD.                                                                          | 2024-01-15                                                                                                                                 |
| `location`                                                                                                                                 | [components.LinkedLocationInput](../../models/components/linkedlocationinput.md)                                                           | :heavy_minus_sign:                                                                                                                         | N/A                                                                                                                                        |                                                                                                                                            |
| `department`                                                                                                                               | [components.LinkedDepartmentInput](../../models/components/linkeddepartmentinput.md)                                                       | :heavy_minus_sign:                                                                                                                         | N/A                                                                                                                                        |                                                                                                                                            |
| `item`                                                                                                                                     | [components.LinkedInvoiceItem](../../models/components/linkedinvoiceitem.md)                                                               | :heavy_minus_sign:                                                                                                                         | N/A                                                                                                                                        |                                                                                                                                            |
| `taxRate`                                                                                                                                  | [components.LinkedTaxRateInput](../../models/components/linkedtaxrateinput.md)                                                             | :heavy_minus_sign:                                                                                                                         | N/A                                                                                                                                        |                                                                                                                                            |
| `ledgerAccount`                                                                                                                            | [components.LinkedLedgerAccount](../../models/components/linkedledgeraccount.md)                                                           | :heavy_minus_sign:                                                                                                                         | N/A                                                                                                                                        |                                                                                                                                            |
| `trackingCategories`                                                                                                                       | [components.LinkedTrackingCategory](../../models/components/linkedtrackingcategory.md)[]                                                   | :heavy_minus_sign:                                                                                                                         | A list of linked tracking categories.                                                                                                      |                                                                                                                                            |
| `rowVersion`                                                                                                                               | *string*                                                                                                                                   | :heavy_minus_sign:                                                                                                                         | A binary value used to detect updates to a object and prevent data conflicts. It is incremented each time an update is made to the object. | 1-12345                                                                                                                                    |
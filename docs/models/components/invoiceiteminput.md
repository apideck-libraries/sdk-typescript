# InvoiceItemInput

## Example Usage

```typescript
import { InvoiceItemInput } from "@apideck/unify/models/components";
import { RFCDate } from "@apideck/unify/types";

let value: InvoiceItemInput = {
  name: "Model Y",
  description:
    "Model Y is a fully electric, mid-size SUV, with seating for up to seven, dual motor AWD and unparalleled protection.",
  code: "120-C",
  sold: true,
  purchased: true,
  tracked: true,
  taxable: true,
  inventoryDate: new RFCDate("2020-10-30"),
  type: "inventory",
  salesDetails: {
    unitPrice: 27500.5,
    unitOfMeasure: "pc.",
    taxInclusive: true,
    taxRate: {
      id: "123456",
      rate: 10,
    },
  },
  purchaseDetails: {
    unitPrice: 27500.5,
    unitOfMeasure: "pc.",
    taxInclusive: true,
    taxRate: {
      id: "123456",
      rate: 10,
    },
  },
  quantity: 1,
  unitPrice: 27500.5,
  assetAccount: {
    id: "123456",
    nominalCode: "N091",
    code: "453",
  },
  incomeAccount: {
    id: "123456",
    nominalCode: "N091",
    code: "453",
  },
  expenseAccount: {
    id: "123456",
    nominalCode: "N091",
    code: "453",
  },
  trackingCategories: [
    {
      id: "123456",
      name: "New York",
    },
  ],
  active: true,
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
| `name`                                                                                                                                                  | *string*                                                                                                                                                | :heavy_minus_sign:                                                                                                                                      | Item name                                                                                                                                               | Model Y                                                                                                                                                 |
| `description`                                                                                                                                           | *string*                                                                                                                                                | :heavy_minus_sign:                                                                                                                                      | A short description of the item                                                                                                                         | Model Y is a fully electric, mid-size SUV, with seating for up to seven, dual motor AWD and unparalleled protection.                                    |
| `code`                                                                                                                                                  | *string*                                                                                                                                                | :heavy_minus_sign:                                                                                                                                      | User defined item code                                                                                                                                  | 120-C                                                                                                                                                   |
| `sold`                                                                                                                                                  | *boolean*                                                                                                                                               | :heavy_minus_sign:                                                                                                                                      | Item will be available on sales transactions                                                                                                            | true                                                                                                                                                    |
| `purchased`                                                                                                                                             | *boolean*                                                                                                                                               | :heavy_minus_sign:                                                                                                                                      | Item is available for purchase transactions                                                                                                             | true                                                                                                                                                    |
| `tracked`                                                                                                                                               | *boolean*                                                                                                                                               | :heavy_minus_sign:                                                                                                                                      | Item is inventoried                                                                                                                                     | true                                                                                                                                                    |
| `taxable`                                                                                                                                               | *boolean*                                                                                                                                               | :heavy_minus_sign:                                                                                                                                      | If true, transactions for this item are taxable                                                                                                         | true                                                                                                                                                    |
| `inventoryDate`                                                                                                                                         | [RFCDate](../../types/rfcdate.md)                                                                                                                       | :heavy_minus_sign:                                                                                                                                      | The date of opening balance if inventory item is tracked - YYYY-MM-DD.                                                                                  | 2020-10-30                                                                                                                                              |
| `type`                                                                                                                                                  | [components.InvoiceItemTypeType](../../models/components/invoiceitemtypetype.md)                                                                        | :heavy_minus_sign:                                                                                                                                      | Item type                                                                                                                                               | inventory                                                                                                                                               |
| `salesDetails`                                                                                                                                          | [components.InvoiceItemSalesDetails](../../models/components/invoiceitemsalesdetails.md)                                                                | :heavy_minus_sign:                                                                                                                                      | N/A                                                                                                                                                     |                                                                                                                                                         |
| `purchaseDetails`                                                                                                                                       | [components.InvoiceItemPurchaseDetails](../../models/components/invoiceitempurchasedetails.md)                                                          | :heavy_minus_sign:                                                                                                                                      | N/A                                                                                                                                                     |                                                                                                                                                         |
| `quantity`                                                                                                                                              | *number*                                                                                                                                                | :heavy_minus_sign:                                                                                                                                      | N/A                                                                                                                                                     | 1                                                                                                                                                       |
| `unitPrice`                                                                                                                                             | *number*                                                                                                                                                | :heavy_minus_sign:                                                                                                                                      | N/A                                                                                                                                                     | 27500.5                                                                                                                                                 |
| `assetAccount`                                                                                                                                          | [components.LinkedLedgerAccountInput](../../models/components/linkedledgeraccountinput.md)                                                              | :heavy_minus_sign:                                                                                                                                      | N/A                                                                                                                                                     |                                                                                                                                                         |
| `incomeAccount`                                                                                                                                         | [components.LinkedLedgerAccountInput](../../models/components/linkedledgeraccountinput.md)                                                              | :heavy_minus_sign:                                                                                                                                      | N/A                                                                                                                                                     |                                                                                                                                                         |
| `expenseAccount`                                                                                                                                        | [components.LinkedLedgerAccountInput](../../models/components/linkedledgeraccountinput.md)                                                              | :heavy_minus_sign:                                                                                                                                      | N/A                                                                                                                                                     |                                                                                                                                                         |
| ~~`trackingCategory`~~                                                                                                                                  | [components.DeprecatedLinkedTrackingCategory](../../models/components/deprecatedlinkedtrackingcategory.md)                                              | :heavy_minus_sign:                                                                                                                                      | : warning: ** DEPRECATED **: This will be removed in a future release, please migrate away from it as soon as possible.                                 |                                                                                                                                                         |
| `trackingCategories`                                                                                                                                    | [components.LinkedTrackingCategory](../../models/components/linkedtrackingcategory.md)[]                                                                | :heavy_minus_sign:                                                                                                                                      | A list of linked tracking categories.                                                                                                                   |                                                                                                                                                         |
| `active`                                                                                                                                                | *boolean*                                                                                                                                               | :heavy_minus_sign:                                                                                                                                      | N/A                                                                                                                                                     | true                                                                                                                                                    |
| `rowVersion`                                                                                                                                            | *string*                                                                                                                                                | :heavy_minus_sign:                                                                                                                                      | A binary value used to detect updates to a object and prevent data conflicts. It is incremented each time an update is made to the object.              | 1-12345                                                                                                                                                 |
| `passThrough`                                                                                                                                           | [components.PassThroughBody](../../models/components/passthroughbody.md)[]                                                                              | :heavy_minus_sign:                                                                                                                                      | The pass_through property allows passing service-specific, custom data or structured modifications in request body when creating or updating resources. |                                                                                                                                                         |
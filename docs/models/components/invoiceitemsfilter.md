# InvoiceItemsFilter

## Example Usage

```typescript
import { InvoiceItemsFilter } from "@apideck/unify/models/components";

let value: InvoiceItemsFilter = {
  updatedSince: new Date("2020-09-30T07:43:32.000Z"),
  name: "Widgets Large",
  type: "service",
  transactionType: "sale",
};
```

## Fields

| Field                                                                                             | Type                                                                                              | Required                                                                                          | Description                                                                                       | Example                                                                                           |
| ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| `updatedSince`                                                                                    | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)     | :heavy_minus_sign:                                                                                | N/A                                                                                               | 2020-09-30T07:43:32.000Z                                                                          |
| `name`                                                                                            | *string*                                                                                          | :heavy_minus_sign:                                                                                | Name of Invoice Items to search for                                                               | Widgets Large                                                                                     |
| `type`                                                                                            | [components.InvoiceItemType](../../models/components/invoiceitemtype.md)                          | :heavy_minus_sign:                                                                                | The type of invoice item, indicating whether it is an inventory item, a service, or another type. | service                                                                                           |
| `transactionType`                                                                                 | [components.TransactionType](../../models/components/transactiontype.md)                          | :heavy_minus_sign:                                                                                | The kind of transaction, indicating whether it is a sales transaction or a purchase transaction.  | sale                                                                                              |
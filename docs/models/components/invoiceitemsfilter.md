# InvoiceItemsFilter

## Example Usage

```typescript
import { InvoiceItemsFilter } from "@apideck/unify/models/components";

let value: InvoiceItemsFilter = {
  name: "Widgets Large",
  type: "service",
};
```

## Fields

| Field                                                                                             | Type                                                                                              | Required                                                                                          | Description                                                                                       | Example                                                                                           |
| ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| `name`                                                                                            | *string*                                                                                          | :heavy_minus_sign:                                                                                | Name of Invoice Items to search for                                                               | Widgets Large                                                                                     |
| `type`                                                                                            | [components.InvoiceItemType](../../models/components/invoiceitemtype.md)                          | :heavy_minus_sign:                                                                                | The type of invoice item, indicating whether it is an inventory item, a service, or another type. | service                                                                                           |
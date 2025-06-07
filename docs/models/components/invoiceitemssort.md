# InvoiceItemsSort

## Example Usage

```typescript
import { InvoiceItemsSort } from "@apideck/unify/models/components";

let value: InvoiceItemsSort = {
  by: "updated_at",
  direction: "desc",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    | Example                                                                        |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `by`                                                                           | [components.InvoiceItemsSortBy](../../models/components/invoiceitemssortby.md) | :heavy_minus_sign:                                                             | The field on which to sort the Invoice Items                                   | updated_at                                                                     |
| `direction`                                                                    | [components.SortDirection](../../models/components/sortdirection.md)           | :heavy_minus_sign:                                                             | The direction in which to sort the results                                     |                                                                                |
# PurchaseOrdersSort

## Example Usage

```typescript
import { PurchaseOrdersSort } from "@apideck/unify/models/components";

let value: PurchaseOrdersSort = {
  by: "updated_at",
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        | Example                                                                            |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `by`                                                                               | [components.PurchaseOrdersSortBy](../../models/components/purchaseorderssortby.md) | :heavy_minus_sign:                                                                 | The field on which to sort the Purchase Orders                                     | updated_at                                                                         |
| `direction`                                                                        | [components.SortDirection](../../models/components/sortdirection.md)               | :heavy_minus_sign:                                                                 | The direction in which to sort the results                                         |                                                                                    |
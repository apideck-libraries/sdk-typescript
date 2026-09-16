# GoodsReceiptsSort

## Example Usage

```typescript
import { GoodsReceiptsSort } from "@apideck/unify/models/components";

let value: GoodsReceiptsSort = {
  by: "updated_at",
  direction: "desc",
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      | Example                                                                          |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `by`                                                                             | [components.GoodsReceiptsSortBy](../../models/components/goodsreceiptssortby.md) | :heavy_minus_sign:                                                               | The field on which to sort the Goods Receipts                                    | updated_at                                                                       |
| `direction`                                                                      | [components.SortDirection](../../models/components/sortdirection.md)             | :heavy_minus_sign:                                                               | The direction in which to sort the results                                       |                                                                                  |
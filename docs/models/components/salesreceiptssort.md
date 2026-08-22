# SalesReceiptsSort

## Example Usage

```typescript
import { SalesReceiptsSort } from "@apideck/unify/models/components";

let value: SalesReceiptsSort = {
  by: "updated_at",
  direction: "desc",
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      | Example                                                                          |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `by`                                                                             | [components.SalesReceiptsSortBy](../../models/components/salesreceiptssortby.md) | :heavy_minus_sign:                                                               | The field on which to sort the Sales Receipts.                                   | updated_at                                                                       |
| `direction`                                                                      | [components.SortDirection](../../models/components/sortdirection.md)             | :heavy_minus_sign:                                                               | The direction in which to sort the results                                       |                                                                                  |
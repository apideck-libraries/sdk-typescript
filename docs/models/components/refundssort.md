# RefundsSort

## Example Usage

```typescript
import { RefundsSort } from "@apideck/unify/models/components";

let value: RefundsSort = {
  by: "updated_at",
  direction: "desc",
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          | Example                                                              |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `by`                                                                 | [components.RefundsSortBy](../../models/components/refundssortby.md) | :heavy_minus_sign:                                                   | The field on which to sort the Refunds                               | updated_at                                                           |
| `direction`                                                          | [components.SortDirection](../../models/components/sortdirection.md) | :heavy_minus_sign:                                                   | The direction in which to sort the results                           |                                                                      |
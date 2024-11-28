# OrdersSort

## Example Usage

```typescript
import { OrdersSort } from "@apideck/unify/models/components";

let value: OrdersSort = {
  by: "created_at",
  direction: "desc",
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          | Example                                                              |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `by`                                                                 | [components.OrdersSortBy](../../models/components/orderssortby.md)   | :heavy_minus_sign:                                                   | The field on which to sort the Orders                                | created_at                                                           |
| `direction`                                                          | [components.SortDirection](../../models/components/sortdirection.md) | :heavy_minus_sign:                                                   | The direction in which to sort the results                           |                                                                      |
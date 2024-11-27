# BillsSort

## Example Usage

```typescript
import { BillsSort } from "@apideck/sdk/models/components";

let value: BillsSort = {
  by: "updated_at",
  direction: "desc",
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          | Example                                                              |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `by`                                                                 | [components.By](../../models/components/by.md)                       | :heavy_minus_sign:                                                   | The field on which to sort the Bills                                 | updated_at                                                           |
| `direction`                                                          | [components.SortDirection](../../models/components/sortdirection.md) | :heavy_minus_sign:                                                   | The direction in which to sort the results                           |                                                                      |
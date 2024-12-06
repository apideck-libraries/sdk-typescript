# OpportunitiesSort

## Example Usage

```typescript
import { OpportunitiesSort } from "@apideck/unify/models/components";

let value: OpportunitiesSort = {
  by: "created_at",
  direction: "desc",
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      | Example                                                                          |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `by`                                                                             | [components.OpportunitiesSortBy](../../models/components/opportunitiessortby.md) | :heavy_minus_sign:                                                               | The field on which to sort the Opportunities                                     | created_at                                                                       |
| `direction`                                                                      | [components.SortDirection](../../models/components/sortdirection.md)             | :heavy_minus_sign:                                                               | The direction in which to sort the results                                       |                                                                                  |
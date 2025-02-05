# ActivitiesSort

## Example Usage

```typescript
import { ActivitiesSort } from "@apideck/unify/models/components";

let value: ActivitiesSort = {
  by: "created_at",
};
```

## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                | Example                                                                    |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `by`                                                                       | [components.ActivitiesSortBy](../../models/components/activitiessortby.md) | :heavy_minus_sign:                                                         | The field on which to sort the Activities                                  | created_at                                                                 |
| `direction`                                                                | [components.SortDirection](../../models/components/sortdirection.md)       | :heavy_minus_sign:                                                         | The direction in which to sort the results                                 |                                                                            |
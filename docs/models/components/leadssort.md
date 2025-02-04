# LeadsSort

## Example Usage

```typescript
import { LeadsSort } from "@apideck/unify/models/components";

let value: LeadsSort = {
  by: "created_at",
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          | Example                                                              |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `by`                                                                 | [components.LeadsSortBy](../../models/components/leadssortby.md)     | :heavy_minus_sign:                                                   | The field on which to sort the Leads                                 | created_at                                                           |
| `direction`                                                          | [components.SortDirection](../../models/components/sortdirection.md) | :heavy_minus_sign:                                                   | The direction in which to sort the results                           |                                                                      |
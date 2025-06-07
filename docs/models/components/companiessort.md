# CompaniesSort

## Example Usage

```typescript
import { CompaniesSort } from "@apideck/unify/models/components";

let value: CompaniesSort = {
  by: "created_at",
  direction: "desc",
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              | Example                                                                  |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `by`                                                                     | [components.CompaniesSortBy](../../models/components/companiessortby.md) | :heavy_minus_sign:                                                       | The field on which to sort the Companies                                 | created_at                                                               |
| `direction`                                                              | [components.SortDirection](../../models/components/sortdirection.md)     | :heavy_minus_sign:                                                       | The direction in which to sort the results                               |                                                                          |
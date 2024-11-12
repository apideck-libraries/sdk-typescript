# SuppliersSort

## Example Usage

```typescript
import { SuppliersSort } from "apideck/models/components";

let value: SuppliersSort = {
  by: "updated_at",
  direction: "desc",
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              | Example                                                                  |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `by`                                                                     | [components.SuppliersSortBy](../../models/components/supplierssortby.md) | :heavy_minus_sign:                                                       | The field on which to sort the Suppliers                                 | updated_at                                                               |
| `direction`                                                              | [components.SortDirection](../../models/components/sortdirection.md)     | :heavy_minus_sign:                                                       | The direction in which to sort the results                               |                                                                          |
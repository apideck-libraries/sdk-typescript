# FilesSort

## Example Usage

```typescript
import { FilesSort } from "apideck/models/components";

let value: FilesSort = {
  by: "updated_at",
  direction: "desc",
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          | Example                                                              |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `by`                                                                 | [components.FilesSortBy](../../models/components/filessortby.md)     | :heavy_minus_sign:                                                   | The field on which to sort the Files                                 | updated_at                                                           |
| `direction`                                                          | [components.SortDirection](../../models/components/sortdirection.md) | :heavy_minus_sign:                                                   | The direction in which to sort the results                           |                                                                      |
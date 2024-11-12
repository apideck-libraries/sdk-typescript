# CreditNotesSort

## Example Usage

```typescript
import { CreditNotesSort } from "apideck/models/components";

let value: CreditNotesSort = {
  by: "updated_at",
  direction: "desc",
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  | Example                                                                      |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `by`                                                                         | [components.CreditNotesSortBy](../../models/components/creditnotessortby.md) | :heavy_minus_sign:                                                           | The field on which to sort the Customers                                     | updated_at                                                                   |
| `direction`                                                                  | [components.SortDirection](../../models/components/sortdirection.md)         | :heavy_minus_sign:                                                           | The direction in which to sort the results                                   |                                                                              |
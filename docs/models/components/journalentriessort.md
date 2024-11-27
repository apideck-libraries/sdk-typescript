# JournalEntriesSort

## Example Usage

```typescript
import { JournalEntriesSort } from "@apideck/sdk/models/components";

let value: JournalEntriesSort = {
  by: "updated_at",
  direction: "desc",
};
```

## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        | Example                                                                            |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `by`                                                                               | [components.JournalEntriesSortBy](../../models/components/journalentriessortby.md) | :heavy_minus_sign:                                                                 | The field on which to sort the Journal Entries.                                    | updated_at                                                                         |
| `direction`                                                                        | [components.SortDirection](../../models/components/sortdirection.md)               | :heavy_minus_sign:                                                                 | The direction in which to sort the results                                         |                                                                                    |
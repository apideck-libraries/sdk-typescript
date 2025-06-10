# CollectionsSort

## Example Usage

```typescript
import { CollectionsSort } from "@apideck/unify/models/components";

let value: CollectionsSort = {
  by: "name",
  direction: "desc",
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  | Example                                                                      |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `by`                                                                         | [components.CollectionsSortBy](../../models/components/collectionssortby.md) | :heavy_minus_sign:                                                           | The field on which to sort the Collections                                   | name                                                                         |
| `direction`                                                                  | [components.SortDirection](../../models/components/sortdirection.md)         | :heavy_minus_sign:                                                           | The direction in which to sort the results                                   |                                                                              |
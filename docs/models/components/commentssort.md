# CommentsSort

## Example Usage

```typescript
import { CommentsSort } from "@apideck/unify/models/components";

let value: CommentsSort = {
  by: "created_at",
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            | Example                                                                |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `by`                                                                   | [components.CommentsSortBy](../../models/components/commentssortby.md) | :heavy_minus_sign:                                                     | The field on which to sort the Comments                                | created_at                                                             |
| `direction`                                                            | [components.SortDirection](../../models/components/sortdirection.md)   | :heavy_minus_sign:                                                     | The direction in which to sort the results                             |                                                                        |
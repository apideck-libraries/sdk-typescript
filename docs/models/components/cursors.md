# Cursors

Cursors to navigate to previous or next pages through the API

## Example Usage

```typescript
import { Cursors } from "@apideck/sdk/models/components";

let value: Cursors = {
  previous: "em9oby1jcm06OnBhZ2U6OjE=",
  current: "em9oby1jcm06OnBhZ2U6OjI=",
  next: "em9oby1jcm06OnBhZ2U6OjM=",
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        | Example                                                            |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `previous`                                                         | *string*                                                           | :heavy_minus_sign:                                                 | Cursor to navigate to the previous page of results through the API | em9oby1jcm06OnBhZ2U6OjE=                                           |
| `current`                                                          | *string*                                                           | :heavy_minus_sign:                                                 | Cursor to navigate to the current page of results through the API  | em9oby1jcm06OnBhZ2U6OjI=                                           |
| `next`                                                             | *string*                                                           | :heavy_minus_sign:                                                 | Cursor to navigate to the next page of results through the API     | em9oby1jcm06OnBhZ2U6OjM=                                           |
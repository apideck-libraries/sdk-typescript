# LinkedTrackingCategory

## Example Usage

```typescript
import { LinkedTrackingCategory } from "@apideck/unify/models/components";

let value: LinkedTrackingCategory = {
  id: "123456",
  name: "New York",
  parentId: "123456",
  parentName: "New York",
};
```

## Fields

| Field                                                   | Type                                                    | Required                                                | Description                                             | Example                                                 |
| ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- |
| `id`                                                    | *string*                                                | :heavy_minus_sign:                                      | The unique identifier for the tracking category.        | 123456                                                  |
| `name`                                                  | *string*                                                | :heavy_minus_sign:                                      | The name of the tracking category.                      | New York                                                |
| `parentId`                                              | *string*                                                | :heavy_minus_sign:                                      | The unique identifier for the parent tracking category. | 123456                                                  |
| `parentName`                                            | *string*                                                | :heavy_minus_sign:                                      | The name of the parent tracking category.               | New York                                                |
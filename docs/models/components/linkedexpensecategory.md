# LinkedExpenseCategory

The expense category this entity is linked to.

## Example Usage

```typescript
import { LinkedExpenseCategory } from "@apideck/unify/models/components";

let value: LinkedExpenseCategory = {
  id: "12345",
  downstreamId: "12345",
  displayId: "Airfare",
  name: "Airfare",
};
```

## Fields

| Field                                           | Type                                            | Required                                        | Description                                     | Example                                         |
| ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- |
| `id`                                            | *string*                                        | :heavy_minus_sign:                              | The ID of the expense category.                 | 12345                                           |
| `downstreamId`                                  | *string*                                        | :heavy_minus_sign:                              | The third-party API ID of the expense category. | 12345                                           |
| `displayId`                                     | *string*                                        | :heavy_minus_sign:                              | The display ID of the expense category.         | Airfare                                         |
| `name`                                          | *string*                                        | :heavy_minus_sign:                              | The name of the expense category.               | Airfare                                         |
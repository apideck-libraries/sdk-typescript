# LinkedParentCustomer

The parent customer this entity is linked to.

## Example Usage

```typescript
import { LinkedParentCustomer } from "apideck/models/components";

let value: LinkedParentCustomer = {
  id: "12345",
  name: "Windsurf Shop",
};
```

## Fields

| Field                                                   | Type                                                    | Required                                                | Description                                             | Example                                                 |
| ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------------------- |
| `id`                                                    | *string*                                                | :heavy_check_mark:                                      | The parent ID of the customer this entity is linked to. | 12345                                                   |
| `name`                                                  | *string*                                                | :heavy_minus_sign:                                      | The name of the parent customer.                        | Windsurf Shop                                           |
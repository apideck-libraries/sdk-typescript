# One

## Example Usage

```typescript
import { One } from "@apideck/unify/models/components";

let value: One = {
  read: true,
  write: true,
};
```

## Fields

| Field                               | Type                                | Required                            | Description                         | Example                             |
| ----------------------------------- | ----------------------------------- | ----------------------------------- | ----------------------------------- | ----------------------------------- |
| `read`                              | *boolean*                           | :heavy_minus_sign:                  | Whether the field can be read       | true                                |
| `write`                             | *boolean*                           | :heavy_minus_sign:                  | Whether the field can be written to | true                                |
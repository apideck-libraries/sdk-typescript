# ConfirmConnection

## Example Usage

```typescript
import { ConfirmConnection } from "@apideck/unify/models/components";

let value: ConfirmConnection = {
  confirmToken: "550e8400-e29b-41d4-a716-446655440000",
};
```

## Fields

| Field                                                        | Type                                                         | Required                                                     | Description                                                  | Example                                                      |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `confirmToken`                                               | *string*                                                     | :heavy_check_mark:                                           | The confirm token received from the OAuth callback redirect. | 550e8400-e29b-41d4-a716-446655440000                         |
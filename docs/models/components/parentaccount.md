# ParentAccount

## Example Usage

```typescript
import { ParentAccount } from "apideck/models/components";

let value: ParentAccount = {
  id: "12345",
  name: "Bank Accounts",
  displayId: "1-1100",
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           | Example                                                               |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `id`                                                                  | *string*                                                              | :heavy_minus_sign:                                                    | The ID of the parent account.                                         | 12345                                                                 |
| `name`                                                                | *string*                                                              | :heavy_minus_sign:                                                    | The name of the parent account.                                       | Bank Accounts                                                         |
| `displayId`                                                           | *string*                                                              | :heavy_minus_sign:                                                    | The human readable display ID used when displaying the parent account | 1-1100                                                                |
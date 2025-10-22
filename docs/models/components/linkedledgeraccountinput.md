# LinkedLedgerAccountInput

## Example Usage

```typescript
import { LinkedLedgerAccountInput } from "@apideck/unify/models/components";

let value: LinkedLedgerAccountInput = {
  id: "123456",
  nominalCode: "N091",
  code: "453",
  parentId: "123456",
  displayId: "123456",
};
```

## Fields

| Field                                  | Type                                   | Required                               | Description                            | Example                                |
| -------------------------------------- | -------------------------------------- | -------------------------------------- | -------------------------------------- | -------------------------------------- |
| `id`                                   | *string*                               | :heavy_minus_sign:                     | The unique identifier for the account. | 123456                                 |
| `nominalCode`                          | *string*                               | :heavy_minus_sign:                     | The nominal code of the account.       | N091                                   |
| `code`                                 | *string*                               | :heavy_minus_sign:                     | The code assigned to the account.      | 453                                    |
| `parentId`                             | *string*                               | :heavy_minus_sign:                     | The parent ID of the account.          | 123456                                 |
| `displayId`                            | *string*                               | :heavy_minus_sign:                     | The display ID of the account.         | 123456                                 |
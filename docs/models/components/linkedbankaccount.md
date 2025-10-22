# LinkedBankAccount

## Example Usage

```typescript
import { LinkedBankAccount } from "@apideck/unify/models/components";

let value: LinkedBankAccount = {
  id: "ba_123456",
  name: "Main Operating Account",
  accountNumber: "123465",
  bankName: "Chase Bank",
};
```

## Fields

| Field                                         | Type                                          | Required                                      | Description                                   | Example                                       |
| --------------------------------------------- | --------------------------------------------- | --------------------------------------------- | --------------------------------------------- | --------------------------------------------- |
| `id`                                          | *string*                                      | :heavy_minus_sign:                            | The unique identifier for the bank account.   | ba_123456                                     |
| `name`                                        | *string*                                      | :heavy_minus_sign:                            | The name of the bank account                  | Main Operating Account                        |
| `accountNumber`                               | *string*                                      | :heavy_minus_sign:                            | The bank account number                       | 123465                                        |
| `bankName`                                    | *string*                                      | :heavy_minus_sign:                            | The name of the bank or financial institution | Chase Bank                                    |
# BankFeedStatementsFilter

## Example Usage

```typescript
import { BankFeedStatementsFilter } from "@apideck/unify/models/components";

let value: BankFeedStatementsFilter = {
  bankFeedAccountId: "12345",
};
```

## Fields

| Field                                                       | Type                                                        | Required                                                    | Description                                                 | Example                                                     |
| ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| `bankFeedAccountId`                                         | *string*                                                    | :heavy_minus_sign:                                          | Only return statements belonging to this bank feed account. | 12345                                                       |
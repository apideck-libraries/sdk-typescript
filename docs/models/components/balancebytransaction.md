# BalanceByTransaction

## Example Usage

```typescript
import { BalanceByTransaction } from "@apideck/unify/models/components";
import { RFCDate } from "@apideck/unify/types";

let value: BalanceByTransaction = {
  transactionId: "INV-1001",
  transactionDate: new RFCDate("2024-01-15"),
  transactionType: "invoice",
  dueDate: new RFCDate("2024-02-15"),
  originalAmount: 1000,
  outstandingBalance: 800,
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              | Example                                                                  |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `transactionId`                                                          | *string*                                                                 | :heavy_minus_sign:                                                       | Unique identifier for the transaction.                                   | INV-1001                                                                 |
| `transactionDate`                                                        | [RFCDate](../../types/rfcdate.md)                                        | :heavy_minus_sign:                                                       | Date of the transaction.                                                 | 2024-01-15                                                               |
| `transactionType`                                                        | [components.TransactionType](../../models/components/transactiontype.md) | :heavy_minus_sign:                                                       | Type of the transaction.                                                 | invoice                                                                  |
| `dueDate`                                                                | [RFCDate](../../types/rfcdate.md)                                        | :heavy_minus_sign:                                                       | Due date of the transaction.                                             | 2024-02-15                                                               |
| `originalAmount`                                                         | *number*                                                                 | :heavy_minus_sign:                                                       | Original amount of the transaction.                                      | 1000                                                                     |
| `outstandingBalance`                                                     | *number*                                                                 | :heavy_minus_sign:                                                       | Outstanding balance of the transaction.                                  | 800                                                                      |
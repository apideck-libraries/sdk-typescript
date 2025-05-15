# BankFeedStatement

## Example Usage

```typescript
import { BankFeedStatement } from "@apideck/unify/models/components";

let value: BankFeedStatement = {
  id: "12345",
  bankFeedAccountId: "acc_456",
  status: "pending",
  startDate: new Date("2021-05-01T12:00:00.000Z"),
  endDate: new Date("2025-01-31T12:00:00.000Z"),
  startBalance: 10500.25,
  startBalanceCreditOrDebit: "debit",
  endBalance: 9800.5,
  endBalanceCreditOrDebit: "debit",
  transactions: [
    {
      postedDate: new Date("2025-01-15T12:00:00.000Z"),
      description: "Payment received from ACME Corp",
      amount: 250,
      creditOrDebit: "debit",
      sourceTransactionId: "txn_987",
      counterparty: "ACME Corp",
      reference: "INV-2025-01",
      transactionType: "payment",
    },
  ],
  createdAt: new Date("2020-09-30T07:43:32.000Z"),
  createdBy: "12345",
  updatedAt: new Date("2020-09-30T07:43:32.000Z"),
  updatedBy: "12345",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   | Example                                                                                       |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | A unique identifier for an object.                                                            | 12345                                                                                         |
| `bankFeedAccountId`                                                                           | *string*                                                                                      | :heavy_minus_sign:                                                                            | The ID of the bank feed account this statement belongs to.                                    | acc_456                                                                                       |
| `status`                                                                                      | [components.StatementStatus](../../models/components/statementstatus.md)                      | :heavy_minus_sign:                                                                            | The current status of the bank feed statement.                                                | pending                                                                                       |
| `startDate`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | Start date of the bank feed statement.                                                        | 2021-05-01T12:00:00.000Z                                                                      |
| `endDate`                                                                                     | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | End date of the bank feed statement.                                                          | 2025-01-31T12:00:00.000Z                                                                      |
| `startBalance`                                                                                | *number*                                                                                      | :heavy_minus_sign:                                                                            | Balance amount at the start of the period.                                                    | 10500.25                                                                                      |
| `startBalanceCreditOrDebit`                                                                   | [components.CreditOrDebit](../../models/components/creditordebit.md)                          | :heavy_minus_sign:                                                                            | Whether the amount is a credit or debit.                                                      | debit                                                                                         |
| `endBalance`                                                                                  | *number*                                                                                      | :heavy_minus_sign:                                                                            | Balance amount at the end of the period.                                                      | 9800.5                                                                                        |
| `endBalanceCreditOrDebit`                                                                     | [components.CreditOrDebit](../../models/components/creditordebit.md)                          | :heavy_minus_sign:                                                                            | Whether the amount is a credit or debit.                                                      | debit                                                                                         |
| `transactions`                                                                                | [components.Transactions](../../models/components/transactions.md)[]                          | :heavy_minus_sign:                                                                            | List of transactions in the bank feed statement.                                              |                                                                                               |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | The date and time when the object was created.                                                | 2020-09-30T07:43:32.000Z                                                                      |
| `createdBy`                                                                                   | *string*                                                                                      | :heavy_minus_sign:                                                                            | The user who created the object.                                                              | 12345                                                                                         |
| `updatedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_minus_sign:                                                                            | The date and time when the object was last updated.                                           | 2020-09-30T07:43:32.000Z                                                                      |
| `updatedBy`                                                                                   | *string*                                                                                      | :heavy_minus_sign:                                                                            | The user who last updated the object.                                                         | 12345                                                                                         |
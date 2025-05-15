# Transactions

## Example Usage

```typescript
import { Transactions } from "@apideck/unify/models/components";

let value: Transactions = {
  postedDate: new Date("2025-01-15T12:00:00.000Z"),
  description: "Payment received from ACME Corp",
  amount: 250,
  creditOrDebit: "debit",
  sourceTransactionId: "txn_987",
  counterparty: "ACME Corp",
  reference: "INV-2025-01",
  transactionType: "payment",
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                | Example                                                                                                    |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `postedDate`                                                                                               | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)              | :heavy_check_mark:                                                                                         | The date of the transaction - YYYY:MM::DDThh:mm:ss.sTZD                                                    | 2025-01-15T12:00:00.000Z                                                                                   |
| `description`                                                                                              | *string*                                                                                                   | :heavy_minus_sign:                                                                                         | A description of the transaction.                                                                          | Payment received from ACME Corp                                                                            |
| `amount`                                                                                                   | *number*                                                                                                   | :heavy_check_mark:                                                                                         | The amount of the transaction.                                                                             | 250                                                                                                        |
| `creditOrDebit`                                                                                            | [components.CreditOrDebit](../../models/components/creditordebit.md)                                       | :heavy_check_mark:                                                                                         | Whether the amount is a credit or debit.                                                                   | debit                                                                                                      |
| `sourceTransactionId`                                                                                      | *string*                                                                                                   | :heavy_check_mark:                                                                                         | The ID of the source transaction.                                                                          | txn_987                                                                                                    |
| `counterparty`                                                                                             | *string*                                                                                                   | :heavy_minus_sign:                                                                                         | The counterparty of the transaction.                                                                       | ACME Corp                                                                                                  |
| `reference`                                                                                                | *string*                                                                                                   | :heavy_minus_sign:                                                                                         | The reference of the transaction.                                                                          | INV-2025-01                                                                                                |
| `transactionType`                                                                                          | [components.BankFeedStatementTransactionType](../../models/components/bankfeedstatementtransactiontype.md) | :heavy_minus_sign:                                                                                         | Type of transaction.                                                                                       | payment                                                                                                    |
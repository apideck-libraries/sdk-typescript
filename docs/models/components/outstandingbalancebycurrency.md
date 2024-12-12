# OutstandingBalanceByCurrency

## Example Usage

```typescript
import { OutstandingBalanceByCurrency } from "@apideck/unify/models/components";
import { RFCDate } from "@apideck/unify/types";

let value: OutstandingBalanceByCurrency = {
  currency: "USD",
  balancesByPeriod: [
    {
      startDate: new RFCDate("2024-01-01"),
      endDate: new RFCDate("2024-01-30"),
      totalAmount: 1500,
      balancesByTransaction: [
        {
          transactionId: "INV-1001",
          transactionDate: new RFCDate("2024-01-15"),
          transactionType: "invoice",
          dueDate: new RFCDate("2024-02-15"),
          originalAmount: 1000,
          outstandingBalance: 800,
        },
      ],
    },
  ],
};
```

## Fields

| Field                                                                                                                              | Type                                                                                                                               | Required                                                                                                                           | Description                                                                                                                        | Example                                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `currency`                                                                                                                         | [components.Currency](../../models/components/currency.md)                                                                         | :heavy_minus_sign:                                                                                                                 | Indicates the associated currency for an amount of money. Values correspond to [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217). | USD                                                                                                                                |
| `balancesByPeriod`                                                                                                                 | [components.BalanceByPeriod](../../models/components/balancebyperiod.md)[]                                                         | :heavy_minus_sign:                                                                                                                 | N/A                                                                                                                                |                                                                                                                                    |
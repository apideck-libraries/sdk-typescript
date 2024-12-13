# BalanceByPeriod

## Example Usage

```typescript
import { BalanceByPeriod } from "@apideck/unify/models/components";
import { RFCDate } from "@apideck/unify/types";

let value: BalanceByPeriod = {
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
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          | Example                                                                              |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `startDate`                                                                          | [RFCDate](../../types/rfcdate.md)                                                    | :heavy_minus_sign:                                                                   | Start date of the period.                                                            | 2024-01-01                                                                           |
| `endDate`                                                                            | [RFCDate](../../types/rfcdate.md)                                                    | :heavy_minus_sign:                                                                   | End date of the period.                                                              | 2024-01-30                                                                           |
| `totalAmount`                                                                        | *number*                                                                             | :heavy_minus_sign:                                                                   | Total amount of the period.                                                          | 1500                                                                                 |
| `balancesByTransaction`                                                              | [components.BalanceByTransaction](../../models/components/balancebytransaction.md)[] | :heavy_minus_sign:                                                                   | N/A                                                                                  |                                                                                      |
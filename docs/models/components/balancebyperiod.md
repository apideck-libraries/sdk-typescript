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
      transactionNumber: "INV-1001",
    },
  ],
};
```

## Fields

| Field                                                                                                                                                                                   | Type                                                                                                                                                                                    | Required                                                                                                                                                                                | Description                                                                                                                                                                             | Example                                                                                                                                                                                 |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `startDate`                                                                                                                                                                             | [RFCDate](../../types/rfcdate.md)                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                                      | The starting date of the period. If not provided, it represents the oldest period, where all transactions due before the specified `end_date` are included.                             | 2024-01-01                                                                                                                                                                              |
| `endDate`                                                                                                                                                                               | [RFCDate](../../types/rfcdate.md)                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                                      | The ending date of the period. If not provided, it represents an open-ended period starting from the `start_date`, typically capturing future-dated transactions that are not yet aged. | 2024-01-30                                                                                                                                                                              |
| `totalAmount`                                                                                                                                                                           | *number*                                                                                                                                                                                | :heavy_minus_sign:                                                                                                                                                                      | Total amount of the period.                                                                                                                                                             | 1500                                                                                                                                                                                    |
| `balancesByTransaction`                                                                                                                                                                 | [components.BalanceByTransaction](../../models/components/balancebytransaction.md)[]                                                                                                    | :heavy_minus_sign:                                                                                                                                                                      | N/A                                                                                                                                                                                     |                                                                                                                                                                                         |
# AgedCreditors

## Example Usage

```typescript
import { AgedCreditors } from "@apideck/unify/models/components";

let value: AgedCreditors = {
  reportGeneratedAt: new Date("2024-11-14T12:00:00.000Z"),
  reportAsOfDate: new Date("2024-11-13"),
  outstandingBalances: [
    {
      supplierId: "123",
      supplierName: "Super Store",
      outstandingBalancesByCurrency: [
        {
          currency: "USD",
          balancesByPeriod: [
            {
              startDate: new Date("2024-01-01"),
              endDate: new Date("2024-01-30"),
              totalAmount: 1500,
              balancesByTransaction: [
                {
                  transactionId: "INV-1001",
                  transactionDate: new Date("2024-01-15"),
                  transactionType: "invoice",
                  dueDate: new Date("2024-02-15"),
                  originalAmount: 1000,
                  outstandingBalance: 800,
                  transactionNumber: "INV-1001",
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          | Example                                                                                              |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `reportGeneratedAt`                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)        | :heavy_minus_sign:                                                                                   | The exact date and time the report was generated.                                                    | 2024-11-14T12:00:00.000Z                                                                             |
| `reportAsOfDate`                                                                                     | [Date](../../types/rfcdate.md)                                                                       | :heavy_minus_sign:                                                                                   | The cutoff date for transactions included in the report.                                             | 2024-11-13                                                                                           |
| `periodCount`                                                                                        | *number*                                                                                             | :heavy_minus_sign:                                                                                   | Number of aging periods shown in the report.                                                         | 4                                                                                                    |
| `periodLength`                                                                                       | *number*                                                                                             | :heavy_minus_sign:                                                                                   | Length of each aging period in days.                                                                 | 30                                                                                                   |
| `outstandingBalances`                                                                                | [components.OutstandingBalanceBySupplier](../../models/components/outstandingbalancebysupplier.md)[] | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |                                                                                                      |
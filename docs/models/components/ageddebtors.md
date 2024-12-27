# AgedDebtors

## Example Usage

```typescript
import { AgedDebtors } from "@apideck/unify/models/components";
import { RFCDate } from "@apideck/unify/types";

let value: AgedDebtors = {
  reportGeneratedAt: new Date("2024-11-14T12:00:00.000Z"),
  reportAsOfDate: new RFCDate("2024-11-13"),
  periodCount: 4,
  periodLength: 30,
  outstandingBalances: [
    {
      customerId: "123",
      customerName: "Super Store",
      outstandingBalancesByCurrency: [
        {
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
| `reportAsOfDate`                                                                                     | [RFCDate](../../types/rfcdate.md)                                                                    | :heavy_minus_sign:                                                                                   | The cutoff date for transactions included in the report.                                             | 2024-11-13                                                                                           |
| `periodCount`                                                                                        | *number*                                                                                             | :heavy_minus_sign:                                                                                   | Number of aging periods shown in the report.                                                         | 4                                                                                                    |
| `periodLength`                                                                                       | *number*                                                                                             | :heavy_minus_sign:                                                                                   | Length of each aging period in days.                                                                 | 30                                                                                                   |
| `outstandingBalances`                                                                                | [components.OutstandingBalanceByCustomer](../../models/components/outstandingbalancebycustomer.md)[] | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |                                                                                                      |
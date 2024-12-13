# OutstandingBalance

## Example Usage

```typescript
import { OutstandingBalance } from "@apideck/unify/models/components";
import { RFCDate } from "@apideck/unify/types";

let value: OutstandingBalance = {
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
| `customerId`                                                                                         | *string*                                                                                             | :heavy_minus_sign:                                                                                   | Unique identifier for the customer or supplier.                                                      | 123                                                                                                  |
| `customerName`                                                                                       | *string*                                                                                             | :heavy_minus_sign:                                                                                   | Full name of the customer or supplier.                                                               | Super Store                                                                                          |
| `outstandingBalancesByCurrency`                                                                      | [components.OutstandingBalanceByCurrency](../../models/components/outstandingbalancebycurrency.md)[] | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |                                                                                                      |
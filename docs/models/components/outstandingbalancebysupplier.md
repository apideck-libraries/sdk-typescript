# OutstandingBalanceBySupplier

## Example Usage

```typescript
import { OutstandingBalanceBySupplier } from "@apideck/unify/models/components";
import { RFCDate } from "@apideck/unify/types";

let value: OutstandingBalanceBySupplier = {
  supplierId: "123",
  supplierName: "Super Store",
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
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          | Example                                                                                              |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `supplierId`                                                                                         | *string*                                                                                             | :heavy_minus_sign:                                                                                   | Unique identifier for the supplier.                                                                  | 123                                                                                                  |
| `supplierName`                                                                                       | *string*                                                                                             | :heavy_minus_sign:                                                                                   | Full name of the supplier.                                                                           | Super Store                                                                                          |
| `outstandingBalancesByCurrency`                                                                      | [components.OutstandingBalanceByCurrency](../../models/components/outstandingbalancebycurrency.md)[] | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |                                                                                                      |
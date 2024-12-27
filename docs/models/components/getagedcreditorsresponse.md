# GetAgedCreditorsResponse

Aged Creditors

## Example Usage

```typescript
import { GetAgedCreditorsResponse } from "@apideck/unify/models/components";
import { RFCDate } from "@apideck/unify/types";

let value: GetAgedCreditorsResponse = {
  statusCode: 200,
  status: "OK",
  service: "quickbooks",
  resource: "AgedCreditors",
  operation: "one",
  data: {
    reportGeneratedAt: new Date("2024-11-14T12:00:00.000Z"),
    reportAsOfDate: new RFCDate("2024-11-13"),
    periodCount: 4,
    periodLength: 30,
    outstandingBalances: [
      {
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
      },
    ],
  },
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          | Example                                                              |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `statusCode`                                                         | *number*                                                             | :heavy_check_mark:                                                   | HTTP Response Status Code                                            | 200                                                                  |
| `status`                                                             | *string*                                                             | :heavy_check_mark:                                                   | HTTP Response Status                                                 | OK                                                                   |
| `service`                                                            | *string*                                                             | :heavy_check_mark:                                                   | Apideck ID of service provider                                       | quickbooks                                                           |
| `resource`                                                           | *string*                                                             | :heavy_check_mark:                                                   | Unified API resource name                                            | AgedCreditors                                                        |
| `operation`                                                          | *string*                                                             | :heavy_check_mark:                                                   | Operation performed                                                  | one                                                                  |
| `data`                                                               | [components.AgedCreditors](../../models/components/agedcreditors.md) | :heavy_check_mark:                                                   | N/A                                                                  |                                                                      |
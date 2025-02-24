# GetAgedDebtorsResponse

Aged Debtors

## Example Usage

```typescript
import { GetAgedDebtorsResponse } from "@apideck/unify/models/components";
import { RFCDate } from "@apideck/unify/types";

let value: GetAgedDebtorsResponse = {
  statusCode: 200,
  status: "OK",
  service: "quickbooks",
  resource: "AgedDebtors",
  operation: "one",
  data: {
    reportGeneratedAt: new Date("2024-11-14T12:00:00.000Z"),
    reportAsOfDate: new RFCDate("2024-11-13"),
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
  },
};
```

## Fields

| Field                                                                   | Type                                                                    | Required                                                                | Description                                                             | Example                                                                 |
| ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `statusCode`                                                            | *number*                                                                | :heavy_check_mark:                                                      | HTTP Response Status Code                                               | 200                                                                     |
| `status`                                                                | *string*                                                                | :heavy_check_mark:                                                      | HTTP Response Status                                                    | OK                                                                      |
| `service`                                                               | *string*                                                                | :heavy_check_mark:                                                      | Apideck ID of service provider                                          | quickbooks                                                              |
| `resource`                                                              | *string*                                                                | :heavy_check_mark:                                                      | Unified API resource name                                               | AgedDebtors                                                             |
| `operation`                                                             | *string*                                                                | :heavy_check_mark:                                                      | Operation performed                                                     | one                                                                     |
| `data`                                                                  | [components.AgedDebtors](../../models/components/ageddebtors.md)        | :heavy_check_mark:                                                      | N/A                                                                     |                                                                         |
| `raw`                                                                   | Record<string, *any*>                                                   | :heavy_minus_sign:                                                      | Raw response from the integration when raw=true query param is provided |                                                                         |
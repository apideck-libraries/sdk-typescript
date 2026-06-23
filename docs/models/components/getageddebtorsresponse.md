# GetAgedDebtorsResponse

Aged Debtors

## Example Usage

```typescript
import { GetAgedDebtorsResponse } from "@apideck/unify/models/components";

let value: GetAgedDebtorsResponse = {
  statusCode: 200,
  status: "OK",
  service: "quickbooks",
  resource: "AgedDebtors",
  operation: "one",
  data: {
    reportGeneratedAt: new Date("2024-11-14T12:00:00.000Z"),
    reportAsOfDate: new Date("2024-11-13"),
    outstandingBalances: [
      {
        customerId: "123",
        customerName: "Super Store",
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
  },
  meta: {
    itemsOnPage: 50,
    cursors: {
      previous: "em9oby1jcm06OnBhZ2U6OjE=",
      current: "em9oby1jcm06OnBhZ2U6OjI=",
      next: "em9oby1jcm06OnBhZ2U6OjM=",
    },
    totalCount: 1,
    warnings: [
      {
        type: "downstream_request_failed",
        statusCode: 429,
        operation: "getManager",
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
| `meta`                                                                  | [components.Meta](../../models/components/meta.md)                      | :heavy_minus_sign:                                                      | Response metadata                                                       |                                                                         |
| `raw`                                                                   | Record<string, *any*>                                                   | :heavy_minus_sign:                                                      | Raw response from the integration when raw=true query param is provided |                                                                         |
# GetProfitAndLossResponse

Profit & Loss Report

## Example Usage

```typescript
import { GetProfitAndLossResponse } from "@apideck/sdk/models/components";

let value: GetProfitAndLossResponse = {
  statusCode: 200,
  status: "OK",
  service: "quickbooks",
  resource: "ProfitAndLosses",
  operation: "one",
  data: {
    id: "12345",
    reportName: "ProfitAndLoss",
    startDate: "2017-01-01",
    endDate: "2017-01-01",
    currency: "USD",
    customerId: "123",
    income: {
      total: 200000,
      records: [
        {
          "id": "123",
          "name": "Income 1",
          "amount": 10000,
        },
        {
          "id": "456",
          "name": "Income 2",
          "amount": 20000,
        },
      ],
    },
    expenses: {
      total: 200000,
      records: [
        {
          "id": "123",
          "name": "Expense 1",
          "amount": 10000,
        },
        {
          "id": "456",
          "name": "Expense 2",
          "amount": 20000,
        },
      ],
    },
    netIncome: {
      total: 200000,
      records: "<value>",
    },
    netOperatingIncome: {
      total: 200000,
      records: "<value>",
    },
    grossProfit: {
      total: 200000,
      records: "<value>",
    },
  },
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          | Example                                                              |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `statusCode`                                                         | *number*                                                             | :heavy_check_mark:                                                   | HTTP Response Status Code                                            | 200                                                                  |
| `status`                                                             | *string*                                                             | :heavy_check_mark:                                                   | HTTP Response Status                                                 | OK                                                                   |
| `service`                                                            | *string*                                                             | :heavy_check_mark:                                                   | Apideck ID of service provider                                       | quickbooks                                                           |
| `resource`                                                           | *string*                                                             | :heavy_check_mark:                                                   | Unified API resource name                                            | ProfitAndLosses                                                      |
| `operation`                                                          | *string*                                                             | :heavy_check_mark:                                                   | Operation performed                                                  | one                                                                  |
| `data`                                                               | [components.ProfitAndLoss](../../models/components/profitandloss.md) | :heavy_check_mark:                                                   | N/A                                                                  |                                                                      |
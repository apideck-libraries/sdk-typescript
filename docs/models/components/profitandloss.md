# ProfitAndLoss

## Example Usage

```typescript
import { ProfitAndLoss } from "@apideck/sdk/models/components";

let value: ProfitAndLoss = {
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
};
```

## Fields

| Field                                                                                                                                            | Type                                                                                                                                             | Required                                                                                                                                         | Description                                                                                                                                      | Example                                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `id`                                                                                                                                             | *string*                                                                                                                                         | :heavy_minus_sign:                                                                                                                               | A unique identifier for an object.                                                                                                               | 12345                                                                                                                                            |
| `reportName`                                                                                                                                     | *string*                                                                                                                                         | :heavy_check_mark:                                                                                                                               | The name of the report                                                                                                                           | ProfitAndLoss                                                                                                                                    |
| `startDate`                                                                                                                                      | *string*                                                                                                                                         | :heavy_minus_sign:                                                                                                                               | The start date of the report                                                                                                                     | 2017-01-01                                                                                                                                       |
| `endDate`                                                                                                                                        | *string*                                                                                                                                         | :heavy_minus_sign:                                                                                                                               | The start date of the report                                                                                                                     | 2017-01-01                                                                                                                                       |
| `currency`                                                                                                                                       | *string*                                                                                                                                         | :heavy_check_mark:                                                                                                                               | N/A                                                                                                                                              | USD                                                                                                                                              |
| `customerId`                                                                                                                                     | *string*                                                                                                                                         | :heavy_minus_sign:                                                                                                                               | Customer id                                                                                                                                      | 123                                                                                                                                              |
| `income`                                                                                                                                         | [components.Income](../../models/components/income.md)                                                                                           | :heavy_check_mark:                                                                                                                               | N/A                                                                                                                                              | {<br/>"total": 200000,<br/>"records": [<br/>{<br/>"id": "123",<br/>"name": "Income 1",<br/>"amount": 10000<br/>},<br/>{<br/>"id": "456",<br/>"name": "Income 2",<br/>"amount": 20000<br/>}<br/>]<br/>} |
| `expenses`                                                                                                                                       | [components.Expenses](../../models/components/expenses.md)                                                                                       | :heavy_check_mark:                                                                                                                               | N/A                                                                                                                                              | {<br/>"total": 200000,<br/>"records": [<br/>{<br/>"id": "123",<br/>"name": "Expense 1",<br/>"amount": 10000<br/>},<br/>{<br/>"id": "456",<br/>"name": "Expense 2",<br/>"amount": 20000<br/>}<br/>]<br/>} |
| `netIncome`                                                                                                                                      | [components.NetIncome](../../models/components/netincome.md)                                                                                     | :heavy_minus_sign:                                                                                                                               | N/A                                                                                                                                              | {<br/>"total": 200000<br/>}                                                                                                                      |
| `netOperatingIncome`                                                                                                                             | [components.NetOperatingIncome](../../models/components/netoperatingincome.md)                                                                   | :heavy_minus_sign:                                                                                                                               | N/A                                                                                                                                              | {<br/>"total": 200000<br/>}                                                                                                                      |
| `grossProfit`                                                                                                                                    | [components.GrossProfit](../../models/components/grossprofit.md)                                                                                 | :heavy_minus_sign:                                                                                                                               | N/A                                                                                                                                              | {<br/>"total": 200000<br/>}                                                                                                                      |
| `customMappings`                                                                                                                                 | [components.CustomMappings](../../models/components/custommappings.md)                                                                           | :heavy_minus_sign:                                                                                                                               | When custom mappings are configured on the resource, the result is included here.                                                                |                                                                                                                                                  |
# BalanceSheetLiabilitiesAccount

A balance sheet liabilities account represents the financial position of a company at a specific point in time.

## Example Usage

```typescript
import { BalanceSheetLiabilitiesAccount } from "@apideck/unify/models/components";

let value: BalanceSheetLiabilitiesAccount = {
  accountId: "2",
  code: "2000",
  name: "Liabilities",
  value: 30000,
  items: [
    {
      "account_id": "201",
      "code": "2100",
      "name": "Current Liabilities",
      "value": 10000,
      "items": [
        {
          "account_id": "2011",
          "code": "2101",
          "name": "Accounts Payable",
          "value": 4000,
        },
        {
          "account_id": "2012",
          "code": "2102",
          "name": "Short-Term Debt",
          "value": 2000,
        },
        {
          "account_id": "2013",
          "code": "2103",
          "name": "Accrued Expenses",
          "value": 1000,
        },
        {
          "account_id": "2014",
          "code": "2104",
          "name": "Current Portion of Long-Term Debt",
          "value": 3000,
        },
      ],
    },
    {
      "account_id": "202",
      "code": "2200",
      "name": "Non-Current Liabilities",
      "value": 20000,
      "items": [
        {
          "account_id": "2021",
          "code": "2201",
          "name": "Long-Term Debt",
          "value": 15000,
        },
        {
          "account_id": "2022",
          "code": "2202",
          "name": "Deferred Tax Liabilities",
          "value": 3000,
        },
        {
          "account_id": "2023",
          "code": "2203",
          "name": "Pension Liabilities",
          "value": 2000,
        },
      ],
    },
  ],
};
```

## Fields

| Field                                  | Type                                   | Required                               | Description                            | Example                                |
| -------------------------------------- | -------------------------------------- | -------------------------------------- | -------------------------------------- | -------------------------------------- |
| `accountId`                            | *string*                               | :heavy_minus_sign:                     | The unique identifier for the account. | 123456                                 |
| `code`                                 | *string*                               | :heavy_minus_sign:                     | The account code of the account        | 1100                                   |
| `name`                                 | *string*                               | :heavy_minus_sign:                     | The name of the account.               | Current assets                         |
| `value`                                | *number*                               | :heavy_minus_sign:                     | The amount or value of the item        | 1000                                   |
| `items`                                | *any*                                  | :heavy_minus_sign:                     | A list of balance sheet accounts       |                                        |
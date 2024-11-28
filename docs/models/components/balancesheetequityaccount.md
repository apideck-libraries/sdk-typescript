# BalanceSheetEquityAccount

A balance sheet equity account represents the financial position of a company at a specific point in time.

## Example Usage

```typescript
import { BalanceSheetEquityAccount } from "@apideck/unify/models/components";

let value: BalanceSheetEquityAccount = {
  accountId: "3",
  code: "3000",
  name: "Equity",
  value: 20000,
  items: [
    {
      "account_id": "301",
      "code": "3100",
      "name": "Common Stock",
      "value": 5000,
    },
    {
      "account_id": "302",
      "code": "3200",
      "name": "Retained Earnings",
      "value": 10000,
    },
    {
      "account_id": "303",
      "code": "3300",
      "name": "Additional Paid-In Capital",
      "value": 3000,
    },
    {
      "account_id": "304",
      "code": "3400",
      "name": "Treasury Stock",
      "value": -1000,
    },
    {
      "account_id": "305",
      "code": "3500",
      "name": "Other Comprehensive Income",
      "value": 3000,
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
# BalanceSheetAssetsAccount

A balance sheet assets account represents the financial position of a company at a specific point in time.

## Example Usage

```typescript
import { BalanceSheetAssetsAccount } from "@apideck/sdk/models/components";

let value: BalanceSheetAssetsAccount = {
  accountId: "1",
  code: "1000",
  name: "Assets",
  value: 50000,
  items: [
    {
      "account_id": "101",
      "code": "1100",
      "name": "Current Assets",
      "value": 20000,
      "items": [
        {
          "account_id": "1011",
          "code": "1101",
          "name": "Cash and Cash Equivalents",
          "value": 10000,
        },
        {
          "account_id": "1012",
          "code": "1102",
          "name": "Accounts Receivable",
          "value": 5000,
        },
        {
          "account_id": "1013",
          "code": "1103",
          "name": "Inventory",
          "value": 3000,
        },
        {
          "account_id": "1014",
          "code": "1104",
          "name": "Prepaid Expenses",
          "value": 2000,
        },
      ],
    },
    {
      "account_id": "102",
      "code": "1200",
      "name": "Non-Current Assets",
      "value": 30000,
      "items": [
        {
          "account_id": "1021",
          "code": "1201",
          "name": "Property, Plant, and Equipment (PPE)",
          "value": 25000,
        },
        {
          "account_id": "1022",
          "code": "1202",
          "name": "Intangible Assets",
          "value": 5000,
          "items": [
            {
              "account_id": "10221",
              "code": "1203",
              "name": "Goodwill",
              "value": 3000,
            },
            {
              "account_id": "10222",
              "code": "1204",
              "name": "Patents",
              "value": 2000,
            },
          ],
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
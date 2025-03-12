# UncategorizedAccounts

The accounts not categorized in the other sections

## Example Usage

```typescript
import { UncategorizedAccounts } from "@apideck/unify/models/components";

let value: UncategorizedAccounts = {
  id: "123",
  code: "123",
  title: "Uncategorized Accounts",
  type: "Section",
  total: 0,
  records: [
    {
      "id": "123",
      "code": "123",
      "title": "Elimination Adjustments",
      "type": "Record",
      "total": 0,
    },
  ],
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  | Example                                                                      |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `id`                                                                         | *string*                                                                     | :heavy_minus_sign:                                                           | A unique identifier for an object.                                           | 12345                                                                        |
| `code`                                                                       | *string*                                                                     | :heavy_minus_sign:                                                           | The account code of the account                                              | 1100                                                                         |
| `title`                                                                      | *string*                                                                     | :heavy_minus_sign:                                                           | The name of the account.                                                     | Current assets                                                               |
| `type`                                                                       | [components.ProfitAndLossType](../../models/components/profitandlosstype.md) | :heavy_minus_sign:                                                           | The type of profit and loss                                                  | Section                                                                      |
| `total`                                                                      | *number*                                                                     | :heavy_check_mark:                                                           | The aggregated total of all accounts within this category.                   | 1000                                                                         |
| `records`                                                                    | *any*                                                                        | :heavy_check_mark:                                                           | N/A                                                                          |                                                                              |
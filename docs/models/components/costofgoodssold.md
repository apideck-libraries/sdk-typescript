# CostOfGoodsSold

The cost of goods sold accounts

## Example Usage

```typescript
import { CostOfGoodsSold } from "@apideck/unify/models/components";

let value: CostOfGoodsSold = {
  id: "123",
  code: "123",
  title: "Cost of Goods Sold",
  type: "Section",
  total: 12000,
  records: [
    {
      "id": "123",
      "code": "123",
      "title": "COGS Sales",
      "type": "Record",
      "total": 12000,
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
| `total`                                                                      | *number*                                                                     | :heavy_minus_sign:                                                           | The aggregated total of all accounts within this category.                   | 1000                                                                         |
| `records`                                                                    | *any*                                                                        | :heavy_check_mark:                                                           | N/A                                                                          |                                                                              |
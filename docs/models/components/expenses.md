# Expenses

The operating expenses accounts

## Example Usage

```typescript
import { Expenses } from "@apideck/unify/models/components";

let value: Expenses = {
  id: "123",
  code: "123",
  title: "Operating Expenses",
  type: "Section",
  total: 14000,
  records: [
    {
      "id": "137",
      "title": "Maintenance",
      "code": "137",
      "type": "Record",
      "total": 1000,
    },
    {
      "id": "138",
      "title": "Rent",
      "code": "138",
      "type": "Record",
      "total": 10000,
    },
    {
      "id": "789",
      "code": "789",
      "title": "Utilities",
      "type": "Section",
      "total": 3000,
      "records": [
        {
          "id": "101",
          "code": "101",
          "title": "Electricity",
          "type": "Record",
          "total": 2000,
        },
        {
          "id": "102",
          "code": "102",
          "title": "Telephone",
          "type": "Record",
          "total": 1000,
        },
      ],
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
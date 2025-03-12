# OtherIncome

The other income accounts

## Example Usage

```typescript
import { OtherIncome } from "@apideck/unify/models/components";

let value: OtherIncome = {
  id: "123",
  code: "123",
  title: "Other Income",
  type: "Section",
  total: 3000,
  records: [
    {
      "id": "123",
      "code": "123",
      "title": "Interest Income",
      "type": "Record",
      "total": 2000,
    },
    {
      "id": "123",
      "code": "123",
      "title": "Foreign Exchange Gain",
      "type": "Record",
      "total": 1000,
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
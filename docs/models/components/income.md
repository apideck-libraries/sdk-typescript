# Income

The operating income accounts

## Example Usage

```typescript
import { Income } from "@apideck/unify/models/components";

let value: Income = {
  id: "123",
  code: "123",
  title: "Operating Income",
  type: "Section",
  total: 60000,
  records: [
    {
      "id": "137",
      "title": "Sales of products",
      "code": "137",
      "type": "Section",
      "total": 20000,
      "records": [
        {
          "id": "13701",
          "title": "Sales of products",
          "code": "13701",
          "type": "Record",
          "total": 20000,
        },
      ],
    },
    {
      "id": "138",
      "title": "Sales of services",
      "code": "138",
      "type": "Section",
      "total": 40000,
      "records": [
        {
          "id": "789",
          "code": "789",
          "title": "Sales of External Services",
          "type": "Record",
          "total": 10000,
        },
        {
          "id": "101",
          "code": "101",
          "title": "Sales of Internal Services",
          "type": "Record",
          "total": 30000,
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
| `total`                                                                      | *number*                                                                     | :heavy_check_mark:                                                           | The total amount of the transaction                                          | 49.99                                                                        |
| `records`                                                                    | *any*                                                                        | :heavy_check_mark:                                                           | N/A                                                                          |                                                                              |
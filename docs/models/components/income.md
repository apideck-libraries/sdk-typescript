# Income

## Example Usage

```typescript
import { Income } from "apideck/models/components";

let value: Income = {
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
};
```

## Fields

| Field              | Type               | Required           | Description        | Example            |
| ------------------ | ------------------ | ------------------ | ------------------ | ------------------ |
| `total`            | *number*           | :heavy_check_mark: | Total income       | 100000             |
| `records`          | *any*              | :heavy_check_mark: | N/A                |                    |
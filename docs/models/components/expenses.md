# Expenses

## Example Usage

```typescript
import { Expenses } from "@apideck/unify/models/components";

let value: Expenses = {
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
};
```

## Fields

| Field              | Type               | Required           | Description        | Example            |
| ------------------ | ------------------ | ------------------ | ------------------ | ------------------ |
| `total`            | *number*           | :heavy_check_mark: | Total expense      | 100000             |
| `records`          | *any*              | :heavy_check_mark: | N/A                |                    |
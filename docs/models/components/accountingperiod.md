# AccountingPeriod

The accounting period the expense report is posted to.

## Example Usage

```typescript
import { AccountingPeriod } from "@apideck/unify/models/components";

let value: AccountingPeriod = {
  id: "12345",
  name: "Q1 2024",
};
```

## Fields

| Field                                          | Type                                           | Required                                       | Description                                    | Example                                        |
| ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- |
| `id`                                           | *string*                                       | :heavy_minus_sign:                             | A unique identifier for the accounting period. | 12345                                          |
| `name`                                         | *string*                                       | :heavy_minus_sign:                             | The name of the accounting period.             | Q1 2024                                        |
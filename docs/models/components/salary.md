# Salary

## Example Usage

```typescript
import { Salary } from "@apideck/sdk/models/components";

let value: Salary = {
  min: 8000,
  max: 10000,
  currency: "USD",
  interval: "year",
};
```

## Fields

| Field                                                                                                                              | Type                                                                                                                               | Required                                                                                                                           | Description                                                                                                                        | Example                                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `min`                                                                                                                              | *number*                                                                                                                           | :heavy_minus_sign:                                                                                                                 | Minimum salary payable for the job role.                                                                                           | 8000                                                                                                                               |
| `max`                                                                                                                              | *number*                                                                                                                           | :heavy_minus_sign:                                                                                                                 | Maximum salary payable for the job role.                                                                                           | 10000                                                                                                                              |
| `currency`                                                                                                                         | [components.Currency](../../models/components/currency.md)                                                                         | :heavy_minus_sign:                                                                                                                 | Indicates the associated currency for an amount of money. Values correspond to [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217). | USD                                                                                                                                |
| `interval`                                                                                                                         | *string*                                                                                                                           | :heavy_minus_sign:                                                                                                                 | N/A                                                                                                                                | year                                                                                                                               |
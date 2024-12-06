# TaxRatesFilter

## Example Usage

```typescript
import { TaxRatesFilter } from "@apideck/unify/models/components";

let value: TaxRatesFilter = {
  assets: true,
  equity: true,
  expenses: true,
  liabilities: true,
  revenue: true,
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        | Example                                                            |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `assets`                                                           | *boolean*                                                          | :heavy_minus_sign:                                                 | Boolean to describe if tax rate can be used for asset accounts     | true                                                               |
| `equity`                                                           | *boolean*                                                          | :heavy_minus_sign:                                                 | Boolean to describe if tax rate can be used for equity accounts    | true                                                               |
| `expenses`                                                         | *boolean*                                                          | :heavy_minus_sign:                                                 | Boolean to describe if tax rate can be used for expense accounts   | true                                                               |
| `liabilities`                                                      | *boolean*                                                          | :heavy_minus_sign:                                                 | Boolean to describe if tax rate can be used for liability accounts | true                                                               |
| `revenue`                                                          | *boolean*                                                          | :heavy_minus_sign:                                                 | Boolean to describe if tax rate can be used for revenue accounts   | true                                                               |
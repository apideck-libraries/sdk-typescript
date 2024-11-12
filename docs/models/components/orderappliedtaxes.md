# OrderAppliedTaxes

## Example Usage

```typescript
import { OrderAppliedTaxes } from "apideck/models/components";

let value: OrderAppliedTaxes = {
  taxId: "sales-tax",
  amount: 27500,
  currency: "USD",
};
```

## Fields

| Field                                                                                                                              | Type                                                                                                                               | Required                                                                                                                           | Description                                                                                                                        | Example                                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `taxId`                                                                                                                            | *string*                                                                                                                           | :heavy_minus_sign:                                                                                                                 | N/A                                                                                                                                | sales-tax                                                                                                                          |
| `amount`                                                                                                                           | *number*                                                                                                                           | :heavy_minus_sign:                                                                                                                 | N/A                                                                                                                                | 27500                                                                                                                              |
| `currency`                                                                                                                         | [components.Currency](../../models/components/currency.md)                                                                         | :heavy_minus_sign:                                                                                                                 | Indicates the associated currency for an amount of money. Values correspond to [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217). | USD                                                                                                                                |
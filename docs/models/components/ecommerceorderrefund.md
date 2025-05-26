# EcommerceOrderRefund

A refund for an ecommerce order.

## Example Usage

```typescript
import { EcommerceOrderRefund } from "@apideck/unify/models/components";

let value: EcommerceOrderRefund = {
  id: "12345",
  amount: "100",
  currency: "USD",
  reason: "Customer requested a refund",
  createdAt: new Date("2020-09-30T07:43:32.000Z"),
};
```

## Fields

| Field                                                                                                                              | Type                                                                                                                               | Required                                                                                                                           | Description                                                                                                                        | Example                                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                               | *string*                                                                                                                           | :heavy_minus_sign:                                                                                                                 | A unique identifier for an object.                                                                                                 | 12345                                                                                                                              |
| `amount`                                                                                                                           | *string*                                                                                                                           | :heavy_minus_sign:                                                                                                                 | The amount of the refund.                                                                                                          | 100                                                                                                                                |
| `currency`                                                                                                                         | [components.Currency](../../models/components/currency.md)                                                                         | :heavy_minus_sign:                                                                                                                 | Indicates the associated currency for an amount of money. Values correspond to [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217). | USD                                                                                                                                |
| `reason`                                                                                                                           | *string*                                                                                                                           | :heavy_minus_sign:                                                                                                                 | The reason for the refund.                                                                                                         | Customer requested a refund                                                                                                        |
| `createdAt`                                                                                                                        | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                                      | :heavy_minus_sign:                                                                                                                 | The date and time when the object was created.                                                                                     | 2020-09-30T07:43:32.000Z                                                                                                           |
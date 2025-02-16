# PaymentsSort

## Example Usage

```typescript
import { PaymentsSort } from "@apideck/unify/models/components";

let value: PaymentsSort = {
  by: "updated_at",
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            | Example                                                                |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `by`                                                                   | [components.PaymentsSortBy](../../models/components/paymentssortby.md) | :heavy_minus_sign:                                                     | The field on which to sort the Payments                                | updated_at                                                             |
| `direction`                                                            | [components.SortDirection](../../models/components/sortdirection.md)   | :heavy_minus_sign:                                                     | The direction in which to sort the results                             |                                                                        |
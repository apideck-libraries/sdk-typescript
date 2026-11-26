# PurchaseOrderLine

The purchase order line this quantity is received against. Send the same object a goods receipt read returns for `line_items[].purchase_order`: `line_id` or `line_number` identifies the purchase order line (at least one is required; the connector gotchas say which one is used), and `id`, when sent, must be the receipt's `purchase_order_id`. Null and an empty object are rejected.

## Example Usage

```typescript
import { PurchaseOrderLine } from "@apideck/unify/models/components";

let value: PurchaseOrderLine = {
  id: "123456",
  lineId: "123456",
  lineNumber: "1",
};
```

## Fields

| Field                                              | Type                                               | Required                                           | Description                                        | Example                                            |
| -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- | -------------------------------------------------- |
| `id`                                               | *string*                                           | :heavy_minus_sign:                                 | The unique identifier for the purchase order.      | 123456                                             |
| `lineId`                                           | *string*                                           | :heavy_minus_sign:                                 | The unique identifier for the purchase order line. | 123456                                             |
| `lineNumber`                                       | *string*                                           | :heavy_minus_sign:                                 | The line number of the purchase order line.        | 1                                                  |
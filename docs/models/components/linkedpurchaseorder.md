# LinkedPurchaseOrder

## Example Usage

```typescript
import { LinkedPurchaseOrder } from "@apideck/unify/models/components";

let value: LinkedPurchaseOrder = {
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
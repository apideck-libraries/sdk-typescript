# Rebilling

Rebilling metadata for this line item.

## Example Usage

```typescript
import { Rebilling } from "@apideck/unify/models/components";

let value: Rebilling = {
  rebillable: true,
  rebillStatus: "billed",
  linkedTransactionId: "txn_abc123",
  linkedTransactionLineId: "line_xyz789",
};
```

## Fields

| Field                                                              | Type                                                               | Required                                                           | Description                                                        | Example                                                            |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| `rebillable`                                                       | *boolean*                                                          | :heavy_minus_sign:                                                 | Whether this line item is eligible for rebilling.                  | true                                                               |
| `rebillStatus`                                                     | [components.RebillStatus](../../models/components/rebillstatus.md) | :heavy_minus_sign:                                                 | Status of the rebilling process for this line item.                | billed                                                             |
| `linkedTransactionId`                                              | *string*                                                           | :heavy_minus_sign:                                                 | The ID of the transaction this line item was rebilled to.          | txn_abc123                                                         |
| `linkedTransactionLineId`                                          | *string*                                                           | :heavy_minus_sign:                                                 | The ID of the line item in the rebilled transaction.               | line_xyz789                                                        |
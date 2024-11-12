# CashDetails

Cash details for this payment

## Example Usage

```typescript
import { CashDetails } from "apideck/models/components";

let value: CashDetails = {};
```

## Fields

| Field                                                                                                                                             | Type                                                                                                                                              | Required                                                                                                                                          | Description                                                                                                                                       |
| ------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| `amount`                                                                                                                                          | *any*                                                                                                                                             | :heavy_minus_sign:                                                                                                                                | The amount of cash given by the customer.                                                                                                         |
| `chargeBackAmount`                                                                                                                                | *any*                                                                                                                                             | :heavy_minus_sign:                                                                                                                                | The amount of change due back to the buyer. For Square: this read-only field is calculated from the amount_money and buyer_supplied_money fields. |
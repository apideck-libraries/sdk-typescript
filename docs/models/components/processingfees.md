# ProcessingFees

## Example Usage

```typescript
import { ProcessingFees } from "apideck/models/components";

let value: ProcessingFees = {
  amount: 1.05,
  effectiveAt: new Date("2020-09-30T07:43:32.000Z"),
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        | Example                                                                                            |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `amount`                                                                                           | *number*                                                                                           | :heavy_minus_sign:                                                                                 | N/A                                                                                                | 1.05                                                                                               |
| `effectiveAt`                                                                                      | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)      | :heavy_minus_sign:                                                                                 | N/A                                                                                                | 2020-09-30T07:43:32.000Z                                                                           |
| `processingType`                                                                                   | [components.PosPaymentProcessingFeesType](../../models/components/pospaymentprocessingfeestype.md) | :heavy_minus_sign:                                                                                 | N/A                                                                                                |                                                                                                    |
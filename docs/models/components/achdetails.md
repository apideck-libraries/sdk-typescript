# AchDetails

ACH-specific details about `BANK_ACCOUNT` type payments with the `transfer_type` of `ACH`.

## Example Usage

```typescript
import { AchDetails } from "apideck/models/components";

let value: AchDetails = {};
```

## Fields

| Field                                                                                                              | Type                                                                                                               | Required                                                                                                           | Description                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------ |
| `routingNumber`                                                                                                    | *string*                                                                                                           | :heavy_minus_sign:                                                                                                 | The routing number for the bank account.                                                                           |
| `accountNumberSuffix`                                                                                              | *string*                                                                                                           | :heavy_minus_sign:                                                                                                 | The last few digits of the bank account number.                                                                    |
| `accountType`                                                                                                      | *string*                                                                                                           | :heavy_minus_sign:                                                                                                 | The type of the bank account performing the transfer. The account type can be `CHECKING`,<br/>`SAVINGS`, or `UNKNOWN`. |
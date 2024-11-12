# WalletDetails

Wallet details for this payment. This field is currently not available. Reach out to our team for more info.

## Example Usage

```typescript
import { WalletDetails } from "apideck/models/components";

let value: WalletDetails = {};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `status`                                                                                     | [components.PosPaymentWalletStatus](../../models/components/pospaymentwalletstatus.md)       | :heavy_minus_sign:                                                                           | The status of the wallet payment. The status can be AUTHORIZED, CAPTURED, VOIDED, or FAILED. |
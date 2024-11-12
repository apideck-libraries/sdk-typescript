# PosPaymentWalletStatus

The status of the wallet payment. The status can be AUTHORIZED, CAPTURED, VOIDED, or FAILED.

## Example Usage

```typescript
import { PosPaymentWalletStatus } from "apideck/models/components";

let value: PosPaymentWalletStatus = "voided";
```

## Values

```typescript
"authorized" | "captured" | "voided" | "failed" | "other"
```
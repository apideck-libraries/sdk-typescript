# PosPaymentStatus

Is this order paid or not?

## Example Usage

```typescript
import { PosPaymentStatus } from "apideck/models/components";

let value: PosPaymentStatus = "open";
```

## Values

```typescript
"open" | "paid" | "refunded" | "credited" | "partially_paid" | "partially_refunded" | "unknown"
```
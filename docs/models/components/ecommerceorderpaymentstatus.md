# EcommerceOrderPaymentStatus

Current payment status of the order.

## Example Usage

```typescript
import { EcommerceOrderPaymentStatus } from "@apideck/unify/models/components";

let value: EcommerceOrderPaymentStatus = "paid";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"pending" | "authorized" | "paid" | "partial" | "refunded" | "voided" | "unknown" | "partially_refunded" | Unrecognized<string>
```
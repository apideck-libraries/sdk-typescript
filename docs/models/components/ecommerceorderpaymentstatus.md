# EcommerceOrderPaymentStatus

Current payment status of the order.

## Example Usage

```typescript
import { EcommerceOrderPaymentStatus } from "@apideck/unify/models/components";

let value: EcommerceOrderPaymentStatus = "paid";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"pending" | "authorized" | "paid" | "partial" | "refunded" | "voided" | "unknown" | "partially_refunded" | Unrecognized<string>
```
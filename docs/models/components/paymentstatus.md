# PaymentStatus

Status of payment

## Example Usage

```typescript
import { PaymentStatus } from "@apideck/unify/models/components";

let value: PaymentStatus = "authorised";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"draft" | "authorised" | "rejected" | "paid" | "voided" | "deleted" | Unrecognized<string>
```
# PaymentStatus

Status of payment

## Example Usage

```typescript
import { PaymentStatus } from "@apideck/unify/models/components";

let value: PaymentStatus = "authorised";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"draft" | "authorised" | "rejected" | "paid" | "voided" | "deleted" | Unrecognized<string>
```
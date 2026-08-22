# AccountingPaymentMethodType

The type of payment method.

## Example Usage

```typescript
import { AccountingPaymentMethodType } from "@apideck/unify/models/components";

let value: AccountingPaymentMethodType = "cash";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"cash" | "check" | "credit_card" | "debit_card" | "bank_transfer" | "electronic" | "other" | "unknown" | Unrecognized<string>
```
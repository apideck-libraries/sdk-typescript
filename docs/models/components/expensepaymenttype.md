# ExpensePaymentType

The type of payment for the expense.

## Example Usage

```typescript
import { ExpensePaymentType } from "@apideck/unify/models/components";

let value: ExpensePaymentType = "cash";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"cash" | "check" | "credit_card" | "other" | Unrecognized<string>
```
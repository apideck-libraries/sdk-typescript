# ExpensePaymentType

The type of payment for the expense.

## Example Usage

```typescript
import { ExpensePaymentType } from "@apideck/unify/models/components";

let value: ExpensePaymentType = "cash";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"cash" | "check" | "credit_card" | "other" | Unrecognized<string>
```
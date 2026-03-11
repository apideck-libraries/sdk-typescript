# CreditOrDebit

Whether the amount is a credit or debit.

## Example Usage

```typescript
import { CreditOrDebit } from "@apideck/unify/models/components";

let value: CreditOrDebit = "debit";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"credit" | "debit" | Unrecognized<string>
```
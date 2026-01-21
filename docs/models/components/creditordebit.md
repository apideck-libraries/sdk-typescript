# CreditOrDebit

Whether the amount is a credit or debit.

## Example Usage

```typescript
import { CreditOrDebit } from "@apideck/unify/models/components";

let value: CreditOrDebit = "debit";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"credit" | "debit" | Unrecognized<string>
```
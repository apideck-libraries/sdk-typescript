# BankAccountType

Type of the bank account.

## Example Usage

```typescript
import { BankAccountType } from "@apideck/unify/models/components";

let value: BankAccountType = "bank";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"bank" | "credit_card" | Unrecognized<string>
```
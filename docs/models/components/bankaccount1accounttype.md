# BankAccount1AccountType

The type of bank account.

## Example Usage

```typescript
import { BankAccount1AccountType } from "@apideck/unify/models/components";

let value: BankAccount1AccountType = "credit_card";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"bank_account" | "credit_card" | "other" | Unrecognized<string>
```
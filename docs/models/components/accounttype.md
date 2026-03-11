# AccountType

The type of bank account.

## Example Usage

```typescript
import { AccountType } from "@apideck/unify/models/components";

let value: AccountType = "credit_card";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"bank_account" | "credit_card" | "other" | Unrecognized<string>
```
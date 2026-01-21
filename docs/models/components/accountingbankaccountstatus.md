# AccountingBankAccountStatus

The status of the bank account

## Example Usage

```typescript
import { AccountingBankAccountStatus } from "@apideck/unify/models/components";

let value: AccountingBankAccountStatus = "active";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"active" | "inactive" | "closed" | Unrecognized<string>
```
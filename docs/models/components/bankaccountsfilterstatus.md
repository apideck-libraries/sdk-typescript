# BankAccountsFilterStatus

Filter by account status

## Example Usage

```typescript
import { BankAccountsFilterStatus } from "@apideck/unify/models/components";

let value: BankAccountsFilterStatus = "active";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"active" | "inactive" | "closed" | Unrecognized<string>
```
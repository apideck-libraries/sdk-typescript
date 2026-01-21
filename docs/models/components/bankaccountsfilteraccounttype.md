# BankAccountsFilterAccountType

Filter by account type

## Example Usage

```typescript
import { BankAccountsFilterAccountType } from "@apideck/unify/models/components";

let value: BankAccountsFilterAccountType = "checking";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"checking" | "savings" | "credit_card" | "money_market" | "line_of_credit" | "other" | "cash" | Unrecognized<string>
```
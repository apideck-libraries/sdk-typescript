# AccountingBankAccountAccountType

The type of bank account

## Example Usage

```typescript
import { AccountingBankAccountAccountType } from "@apideck/unify/models/components";

let value: AccountingBankAccountAccountType = "checking";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"checking" | "savings" | "credit_card" | "money_market" | "line_of_credit" | "other" | "cash" | Unrecognized<string>
```
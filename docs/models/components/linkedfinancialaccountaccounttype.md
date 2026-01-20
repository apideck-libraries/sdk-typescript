# LinkedFinancialAccountAccountType

The type of account being referenced. Use `ledger_account` for GL accounts from the chart of accounts, or `bank_account` for bank account entities. When not specified, the connector will use its default behavior.

## Example Usage

```typescript
import { LinkedFinancialAccountAccountType } from "@apideck/unify/models/components";

let value: LinkedFinancialAccountAccountType = "ledger_account";
```

## Values

```typescript
"ledger_account" | "bank_account"
```
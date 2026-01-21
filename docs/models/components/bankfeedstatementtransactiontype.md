# BankFeedStatementTransactionType

Type of transaction.

## Example Usage

```typescript
import { BankFeedStatementTransactionType } from "@apideck/unify/models/components";

let value: BankFeedStatementTransactionType = "payment";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"credit" | "debit" | "deposit" | "transfer" | "payment" | "other" | Unrecognized<string>
```
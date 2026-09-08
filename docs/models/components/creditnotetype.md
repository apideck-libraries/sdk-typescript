# CreditNoteType

Whether this credit note reduces an amount owed by a customer (accounts receivable) or owed to a supplier (accounts payable). `accounts_payable_credit` support is connector-specific — most connectors only expose the accounts-receivable side. Check the connector's gotchas for known deviations.

## Example Usage

```typescript
import { CreditNoteType } from "@apideck/unify/models/components";

let value: CreditNoteType = "accounts_receivable_credit";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"accounts_receivable_credit" | "accounts_payable_credit" | Unrecognized<string>
```
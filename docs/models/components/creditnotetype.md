# CreditNoteType

Type of payment

## Example Usage

```typescript
import { CreditNoteType } from "@apideck/unify/models/components";

let value: CreditNoteType = "accounts_receivable_credit";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"accounts_receivable_credit" | "accounts_payable_credit" | Unrecognized<string>
```
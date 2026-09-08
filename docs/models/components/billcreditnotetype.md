# BillCreditNoteType

The type of credit note. A bill credit note is always an accounts payable (supplier-side) credit.

## Example Usage

```typescript
import { BillCreditNoteType } from "@apideck/unify/models/components";

let value: BillCreditNoteType = "accounts_payable_credit";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"accounts_payable_credit" | Unrecognized<string>
```
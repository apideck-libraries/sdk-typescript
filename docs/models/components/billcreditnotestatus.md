# BillCreditNoteStatus

Status of bill credit notes

## Example Usage

```typescript
import { BillCreditNoteStatus } from "@apideck/unify/models/components";

let value: BillCreditNoteStatus = "authorised";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"draft" | "authorised" | "posted" | "partially_paid" | "paid" | "voided" | "deleted" | Unrecognized<string>
```
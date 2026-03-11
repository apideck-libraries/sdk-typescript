# CreditNoteStatus

Status of credit notes

## Example Usage

```typescript
import { CreditNoteStatus } from "@apideck/unify/models/components";

let value: CreditNoteStatus = "authorised";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"draft" | "authorised" | "posted" | "partially_paid" | "paid" | "voided" | "deleted" | Unrecognized<string>
```
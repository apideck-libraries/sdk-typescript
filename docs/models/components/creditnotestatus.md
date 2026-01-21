# CreditNoteStatus

Status of credit notes

## Example Usage

```typescript
import { CreditNoteStatus } from "@apideck/unify/models/components";

let value: CreditNoteStatus = "authorised";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"draft" | "authorised" | "posted" | "partially_paid" | "paid" | "voided" | "deleted" | Unrecognized<string>
```
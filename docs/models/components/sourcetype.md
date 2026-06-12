# SourceType

Filter by the originating transaction type.

## Example Usage

```typescript
import { SourceType } from "@apideck/unify/models/components";

let value: SourceType = "other";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"other" | "invoice" | "bill" | "credit_note" | "payment" | "refund" | "expense" | "journal_entry" | "payroll" | Unrecognized<string>
```
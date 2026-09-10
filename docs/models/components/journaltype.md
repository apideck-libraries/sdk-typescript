# JournalType

Normalized journal classification.

## Example Usage

```typescript
import { JournalType } from "@apideck/unify/models/components";

let value: JournalType = "general";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"general" | "sales" | "purchase" | "sales_credit_note" | "purchase_credit_note" | "cash" | "bank" | "payment_service" | "other" | Unrecognized<string>
```
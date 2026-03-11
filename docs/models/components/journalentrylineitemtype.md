# JournalEntryLineItemType

Debit entries are considered positive, and credit entries are considered negative.

## Example Usage

```typescript
import { JournalEntryLineItemType } from "@apideck/unify/models/components";

let value: JournalEntryLineItemType = "debit";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"debit" | "credit" | Unrecognized<string>
```
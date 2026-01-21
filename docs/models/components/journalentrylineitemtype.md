# JournalEntryLineItemType

Debit entries are considered positive, and credit entries are considered negative.

## Example Usage

```typescript
import { JournalEntryLineItemType } from "@apideck/unify/models/components";

let value: JournalEntryLineItemType = "debit";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"debit" | "credit" | Unrecognized<string>
```
# JournalEntryStatus

Journal entry status

## Example Usage

```typescript
import { JournalEntryStatus } from "@apideck/unify/models/components";

let value: JournalEntryStatus = "draft";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"draft" | "pending_approval" | "approved" | "posted" | "voided" | "rejected" | "deleted" | "other" | Unrecognized<string>
```
# JournalEntryStatus

Journal entry status

## Example Usage

```typescript
import { JournalEntryStatus } from "@apideck/unify/models/components";

let value: JournalEntryStatus = "draft";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"draft" | "pending_approval" | "approved" | "posted" | "voided" | "rejected" | "deleted" | "other" | Unrecognized<string>
```
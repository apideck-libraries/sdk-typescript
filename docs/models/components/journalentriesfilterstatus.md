# JournalEntriesFilterStatus

## Example Usage

```typescript
import { JournalEntriesFilterStatus } from "@apideck/unify/models/components";

let value: JournalEntriesFilterStatus = "pending_approval";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"draft" | "pending_approval" | "approved" | "posted" | "voided" | "rejected" | "deleted" | "other" | Unrecognized<string>
```
# JournalEntriesSortBy

The field on which to sort the Journal Entries.

## Example Usage

```typescript
import { JournalEntriesSortBy } from "@apideck/unify/models/components";

let value: JournalEntriesSortBy = "updated_at";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"created_at" | "updated_at" | Unrecognized<string>
```
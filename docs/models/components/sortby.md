# SortBy

The field to sort by

## Example Usage

```typescript
import { SortBy } from "@apideck/unify/models/components";

let value: SortBy = "updated_at";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"created_at" | "updated_at" | Unrecognized<string>
```
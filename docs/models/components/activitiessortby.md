# ActivitiesSortBy

The field on which to sort the Activities

## Example Usage

```typescript
import { ActivitiesSortBy } from "@apideck/unify/models/components";

let value: ActivitiesSortBy = "created_at";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"created_at" | "updated_at" | Unrecognized<string>
```
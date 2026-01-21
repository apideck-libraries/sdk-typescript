# OpportunitiesSortBy

The field on which to sort the Opportunities

## Example Usage

```typescript
import { OpportunitiesSortBy } from "@apideck/unify/models/components";

let value: OpportunitiesSortBy = "created_at";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"created_at" | "updated_at" | "title" | "win_probability" | "monetary_amount" | "status" | Unrecognized<string>
```
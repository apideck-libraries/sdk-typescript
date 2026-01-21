# OrdersSortBy

The field on which to sort the Orders

## Example Usage

```typescript
import { OrdersSortBy } from "@apideck/unify/models/components";

let value: OrdersSortBy = "created_at";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"created_at" | "updated_at" | "name" | Unrecognized<string>
```
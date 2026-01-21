# CustomersSortBy

The field on which to sort the Customers

## Example Usage

```typescript
import { CustomersSortBy } from "@apideck/unify/models/components";

let value: CustomersSortBy = "updated_at";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"created_at" | "updated_at" | Unrecognized<string>
```
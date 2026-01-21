# CategoryType

The type of the category.

## Example Usage

```typescript
import { CategoryType } from "@apideck/unify/models/components";

let value: CategoryType = "expense";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"supplier" | "expense" | "revenue" | "customer" | Unrecognized<string>
```
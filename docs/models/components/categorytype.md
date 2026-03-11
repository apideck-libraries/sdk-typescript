# CategoryType

The type of the category.

## Example Usage

```typescript
import { CategoryType } from "@apideck/unify/models/components";

let value: CategoryType = "expense";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"supplier" | "expense" | "revenue" | "customer" | Unrecognized<string>
```
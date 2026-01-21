# CategoriesFilterType

The type of the category.

## Example Usage

```typescript
import { CategoriesFilterType } from "@apideck/unify/models/components";

let value: CategoriesFilterType = "expense";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"supplier" | "expense" | "revenue" | "customer" | Unrecognized<string>
```
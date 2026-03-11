# Classification

Filter by account classification.

## Example Usage

```typescript
import { Classification } from "@apideck/unify/models/components";

let value: Classification = "asset";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"asset" | "equity" | "expense" | "liability" | "revenue" | "income" | "other_income" | "other_expense" | "costs_of_sales" | "other" | Unrecognized<string>
```
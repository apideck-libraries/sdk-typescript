# Classification

Filter by account classification.

## Example Usage

```typescript
import { Classification } from "@apideck/unify/models/components";

let value: Classification = "asset";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"asset" | "equity" | "expense" | "liability" | "revenue" | "income" | "other_income" | "other_expense" | "costs_of_sales" | "other" | Unrecognized<string>
```
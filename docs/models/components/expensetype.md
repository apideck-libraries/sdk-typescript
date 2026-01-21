# ExpenseType

The type of expense.

## Example Usage

```typescript
import { ExpenseType } from "@apideck/unify/models/components";

let value: ExpenseType = "expense";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"expense" | "refund" | Unrecognized<string>
```
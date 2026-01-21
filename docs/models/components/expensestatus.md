# ExpenseStatus

Expense status

## Example Usage

```typescript
import { ExpenseStatus } from "@apideck/unify/models/components";

let value: ExpenseStatus = "draft";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"draft" | "posted" | Unrecognized<string>
```
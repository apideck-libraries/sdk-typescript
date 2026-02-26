# ExpenseCategoryStatus

The status of the expense category.

## Example Usage

```typescript
import { ExpenseCategoryStatus } from "@apideck/unify/models/components";

let value: ExpenseCategoryStatus = "active";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"active" | "inactive" | Unrecognized<string>
```
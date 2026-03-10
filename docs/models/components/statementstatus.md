# StatementStatus

The current status of the bank feed statement.

## Example Usage

```typescript
import { StatementStatus } from "@apideck/unify/models/components";

let value: StatementStatus = "pending";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"pending" | "rejected" | "success" | Unrecognized<string>
```
# StatementStatus

The current status of the bank feed statement.

## Example Usage

```typescript
import { StatementStatus } from "@apideck/unify/models/components";

let value: StatementStatus = "pending";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"pending" | "rejected" | "success" | Unrecognized<string>
```
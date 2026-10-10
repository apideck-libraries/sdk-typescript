# SalesOrderStatus

Sales order status, in order of precedence: `cancelled`; `closed` (the order is closed or completed, whether or not it was billed); `invoiced` (fully billed but not yet closed); `back_ordered`; `on_hold` (including credit hold); `draft` (including pending approval); `open` (every other active state, including partially shipped and partially invoiced); `other` for states that fit none of these.

## Example Usage

```typescript
import { SalesOrderStatus } from "@apideck/unify/models/components";

let value: SalesOrderStatus = "open";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"draft" | "open" | "on_hold" | "back_ordered" | "invoiced" | "closed" | "cancelled" | "other" | Unrecognized<string>
```
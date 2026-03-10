# FulfillmentStatus

Current fulfillment status of the order.

## Example Usage

```typescript
import { FulfillmentStatus } from "@apideck/unify/models/components";

let value: FulfillmentStatus = "shipped";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"pending" | "shipped" | "partial" | "delivered" | "cancelled" | "returned" | "unknown" | Unrecognized<string>
```
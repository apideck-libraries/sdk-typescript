# FulfillmentStatus

Current fulfillment status of the order.

## Example Usage

```typescript
import { FulfillmentStatus } from "@apideck/unify/models/components";

let value: FulfillmentStatus = "shipped";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"pending" | "shipped" | "partial" | "delivered" | "cancelled" | "returned" | "unknown" | Unrecognized<string>
```
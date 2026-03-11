# EcommerceOrderStatus

Current status of the order.

## Example Usage

```typescript
import { EcommerceOrderStatus } from "@apideck/unify/models/components";

let value: EcommerceOrderStatus = "active";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"active" | "completed" | "cancelled" | "archived" | "unknown" | "other" | Unrecognized<string>
```
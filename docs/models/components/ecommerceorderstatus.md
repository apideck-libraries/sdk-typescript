# EcommerceOrderStatus

Current status of the order.

## Example Usage

```typescript
import { EcommerceOrderStatus } from "@apideck/unify/models/components";

let value: EcommerceOrderStatus = "active";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"active" | "completed" | "cancelled" | "archived" | "unknown" | "other" | Unrecognized<string>
```
# PurchaseOrderStatus

## Example Usage

```typescript
import { PurchaseOrderStatus } from "@apideck/unify/models/components";

let value: PurchaseOrderStatus = "open";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"draft" | "open" | "closed" | "deleted" | "billed" | "other" | Unrecognized<string>
```
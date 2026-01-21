# SupplierStatus

Supplier status

## Example Usage

```typescript
import { SupplierStatus } from "@apideck/unify/models/components";

let value: SupplierStatus = "active";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"active" | "inactive" | "archived" | "gdpr-erasure-request" | "unknown" | Unrecognized<string>
```
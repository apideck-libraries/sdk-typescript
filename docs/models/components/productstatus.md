# ProductStatus

The current status of the product (active or archived).

## Example Usage

```typescript
import { ProductStatus } from "@apideck/unify/models/components";

let value: ProductStatus = "active";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"active" | "archived" | Unrecognized<string>
```
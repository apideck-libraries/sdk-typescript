# ProductStatus

The current status of the product (active or archived).

## Example Usage

```typescript
import { ProductStatus } from "@apideck/unify/models/components";

let value: ProductStatus = "active";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"active" | "archived" | Unrecognized<string>
```
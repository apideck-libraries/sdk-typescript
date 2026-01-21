# InvoiceItemTypeType

Item type

## Example Usage

```typescript
import { InvoiceItemTypeType } from "@apideck/unify/models/components";

let value: InvoiceItemTypeType = "inventory";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"inventory" | "non_inventory" | "service" | "description" | "other" | Unrecognized<string>
```
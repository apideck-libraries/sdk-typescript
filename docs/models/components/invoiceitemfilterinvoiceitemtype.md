# InvoiceItemFilterInvoiceItemType

The type of invoice item, indicating whether it is an inventory item, a service, or another type.

## Example Usage

```typescript
import { InvoiceItemFilterInvoiceItemType } from "@apideck/unify/models/components";

let value: InvoiceItemFilterInvoiceItemType = "service";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"inventory" | "service" | "other" | Unrecognized<string>
```
# InvoiceItemType

The type of invoice item, indicating whether it is an inventory item, a service, or another type.

## Example Usage

```typescript
import { InvoiceItemType } from "@apideck/unify/models/components";

let value: InvoiceItemType = "service";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"inventory" | "service" | "other" | Unrecognized<string>
```
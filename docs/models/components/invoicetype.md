# InvoiceType

Invoice type

## Example Usage

```typescript
import { InvoiceType } from "@apideck/unify/models/components";

let value: InvoiceType = "service";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"standard" | "credit" | "service" | "product" | "supplier" | "other" | Unrecognized<string>
```
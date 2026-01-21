# InvoicesSortBy

The field on which to sort the Invoices

## Example Usage

```typescript
import { InvoicesSortBy } from "@apideck/unify/models/components";

let value: InvoicesSortBy = "updated_at";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"created_at" | "updated_at" | Unrecognized<string>
```
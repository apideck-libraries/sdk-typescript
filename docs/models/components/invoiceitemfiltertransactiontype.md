# InvoiceItemFilterTransactionType

The kind of transaction, indicating whether it is a sales transaction or a purchase transaction.

## Example Usage

```typescript
import { InvoiceItemFilterTransactionType } from "@apideck/unify/models/components";

let value: InvoiceItemFilterTransactionType = "purchase";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"sale" | "purchase" | Unrecognized<string>
```
# InvoiceStatus

Invoice status

## Example Usage

```typescript
import { InvoiceStatus } from "@apideck/unify/models/components";

let value: InvoiceStatus = "draft";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"draft" | "submitted" | "authorised" | "partially_paid" | "paid" | "unpaid" | "void" | "credit" | "deleted" | "posted" | Unrecognized<string>
```
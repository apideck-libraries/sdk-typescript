# BillStatus

Invoice status

## Example Usage

```typescript
import { BillStatus } from "@apideck/unify/models/components";

let value: BillStatus = "draft";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"draft" | "submitted" | "authorised" | "partially_paid" | "paid" | "void" | "credit" | "deleted" | "posted" | Unrecognized<string>
```
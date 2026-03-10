# BillStatus

Invoice status

## Example Usage

```typescript
import { BillStatus } from "@apideck/unify/models/components";

let value: BillStatus = "draft";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"draft" | "submitted" | "authorised" | "partially_paid" | "paid" | "void" | "credit" | "deleted" | "posted" | Unrecognized<string>
```
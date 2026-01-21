# BillsFilterStatus

Filter by bill status

## Example Usage

```typescript
import { BillsFilterStatus } from "@apideck/unify/models/components";

let value: BillsFilterStatus = "paid";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"paid" | "unpaid" | "partially_paid" | Unrecognized<string>
```
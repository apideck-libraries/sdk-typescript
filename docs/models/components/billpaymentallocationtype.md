# BillPaymentAllocationType

Type of entity this payment should be attributed to.

## Example Usage

```typescript
import { BillPaymentAllocationType } from "@apideck/unify/models/components";

let value: BillPaymentAllocationType = "bill";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"bill" | "expense" | "credit_memo" | "over_payment" | "pre_payment" | "journal_entry" | "other" | Unrecognized<string>
```
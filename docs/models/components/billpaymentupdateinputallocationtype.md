# BillPaymentUpdateInputAllocationType

Type of entity this payment should be attributed to.

## Example Usage

```typescript
import { BillPaymentUpdateInputAllocationType } from "@apideck/unify/models/components";

let value: BillPaymentUpdateInputAllocationType = "bill";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"bill" | "expense" | "credit_memo" | "over_payment" | "pre_payment" | "journal_entry" | "other" | Unrecognized<string>
```
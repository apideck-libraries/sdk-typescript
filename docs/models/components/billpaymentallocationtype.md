# BillPaymentAllocationType

Type of entity this payment should be attributed to.

## Example Usage

```typescript
import { BillPaymentAllocationType } from "@apideck/unify/models/components";

let value: BillPaymentAllocationType = "bill";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"bill" | "expense" | "credit_memo" | "over_payment" | "pre_payment" | "journal_entry" | "other" | Unrecognized<string>
```
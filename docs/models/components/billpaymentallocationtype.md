# BillPaymentAllocationType

Type of entity this payment should be attributed to.

## Example Usage

```typescript
import { BillPaymentAllocationType } from "@apideck/sdk/models/components";

let value: BillPaymentAllocationType = "bill";
```

## Values

```typescript
"bill" | "expense" | "credit_memo" | "over_payment" | "pre_payment" | "journal_entry" | "other"
```
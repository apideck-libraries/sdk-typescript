# RefundType

Type of refund. `refund_receipt` for itemized refunds with product/service lines and payment (QBO RefundReceipt; also NetSuite's apply-list-based CustomerRefund). `cash_refund` for cash-out refunds with GL distribution or allocations (Sage Intacct). `credit_note_refund` for refunds applied against a credit note (Zoho Books). `sale_refund` for itemized refunds tied to a cash sale or return authorization, without an apply-list (NetSuite CashRefund) — NetSuite's apply-list-based CustomerRefund reports as `refund_receipt` instead.

## Example Usage

```typescript
import { RefundType } from "@apideck/unify/models/components";

let value: RefundType = "refund_receipt";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"refund_receipt" | "cash_refund" | "credit_note_refund" | "sale_refund" | Unrecognized<string>
```
# RefundStatus

Status of refund. Maps to: QBO (limited status), NetSuite CashRefund status, Sage Intacct state (draft/posted/voided), Zoho Books vis_state.

## Example Usage

```typescript
import { RefundStatus } from "@apideck/unify/models/components";

let value: RefundStatus = "paid";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"draft" | "authorised" | "posted" | "paid" | "voided" | "deleted" | Unrecognized<string>
```
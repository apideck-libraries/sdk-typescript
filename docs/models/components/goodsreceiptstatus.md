# GoodsReceiptStatus

Lifecycle status of the receipt. `draft` covers unposted or awaiting-validation documents, `pending_approval` covers documents submitted into an approval flow, `received` covers posted/validated/released receipts that have affected stock or the receiving ledger, `cancelled` covers voided, reversed or denied receipts.

## Example Usage

```typescript
import { GoodsReceiptStatus } from "@apideck/unify/models/components";

let value: GoodsReceiptStatus = "received";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"draft" | "pending_approval" | "received" | "cancelled" | "other" | Unrecognized<string>
```
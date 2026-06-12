# GeneralLedgerTransactionLineItemType

Side of the entry. Redundant with the sign of net_amount but exposed as an explicit flag for filtering convenience.

## Example Usage

```typescript
import { GeneralLedgerTransactionLineItemType } from "@apideck/unify/models/components";

let value: GeneralLedgerTransactionLineItemType = "debit";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"debit" | "credit" | Unrecognized<string>
```
# BalanceByTransactionTransactionType

Type of the transaction.

## Example Usage

```typescript
import { BalanceByTransactionTransactionType } from "@apideck/unify/models/components";

let value: BalanceByTransactionTransactionType = "invoice";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"invoice" | "credit_note" | "bill" | "payment" | "bill_payment" | Unrecognized<string>
```
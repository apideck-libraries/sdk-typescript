# PaymentType

Type of payment

## Example Usage

```typescript
import { PaymentType } from "@apideck/unify/models/components";

let value: PaymentType = "accounts_receivable";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"accounts_receivable" | "accounts_payable" | "accounts_receivable_credit" | "accounts_payable_credit" | "accounts_receivable_overpayment" | "accounts_payable_overpayment" | "accounts_receivable_prepayment" | "accounts_payable_prepayment" | Unrecognized<string>
```
# BillPaymentType

Type of payment

## Example Usage

```typescript
import { BillPaymentType } from "@apideck/unify/models/components";

let value: BillPaymentType = "accounts_payable";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"accounts_payable_credit" | "accounts_payable_overpayment" | "accounts_payable_prepayment" | "accounts_payable" | Unrecognized<string>
```
# PosPaymentType

The type of external payment the seller received. It can be one of the following:
- CHECK - Paid using a physical check.
- BANK_TRANSFER - Paid using external bank transfer.
- OTHER\_GIFT\_CARD - Paid using a non-Square gift card.
- CRYPTO - Paid using a crypto currency.
- SQUARE_CASH - Paid using Square Cash App.
- SOCIAL - Paid using peer-to-peer payment applications.
- EXTERNAL - A third-party application gathered this payment outside of Square.
- EMONEY - Paid using an E-money provider.
- CARD - A credit or debit card that Square does not support.
- STORED_BALANCE - Use for house accounts, store credit, and so forth.
- FOOD_VOUCHER - Restaurant voucher provided by employers to employees to pay for meals
- OTHER - A type not listed here.

## Example Usage

```typescript
import { PosPaymentType } from "apideck/models/components";

let value: PosPaymentType = "square_cash";
```

## Values

```typescript
"check" | "bank_transfer" | "other_gift_card" | "crypto" | "square_cash" | "social" | "external" | "emoney" | "card" | "stored_balance" | "food_voucher" | "other"
```
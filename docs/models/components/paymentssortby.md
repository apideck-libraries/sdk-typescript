# PaymentsSortBy

The field on which to sort the Payments

## Example Usage

```typescript
import { PaymentsSortBy } from "@apideck/unify/models/components";

let value: PaymentsSortBy = "updated_at";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"updated_at" | "created_at" | Unrecognized<string>
```
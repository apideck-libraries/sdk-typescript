# PaymentUnit

Unit of measurement for employee compensation.

## Example Usage

```typescript
import { PaymentUnit } from "@apideck/unify/models/components";

let value: PaymentUnit = "year";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"hour" | "week" | "month" | "year" | "paycheck" | "other" | Unrecognized<string>
```
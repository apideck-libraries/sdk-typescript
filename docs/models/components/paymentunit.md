# PaymentUnit

Unit of measurement for employee compensation.

## Example Usage

```typescript
import { PaymentUnit } from "@apideck/unify/models/components";

let value: PaymentUnit = "year";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"hour" | "week" | "month" | "year" | "paycheck" | "other" | Unrecognized<string>
```
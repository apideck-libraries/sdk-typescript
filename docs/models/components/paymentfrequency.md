# PaymentFrequency

Frequency of employee compensation.

## Example Usage

```typescript
import { PaymentFrequency } from "@apideck/unify/models/components";

let value: PaymentFrequency = "monthly";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"weekly" | "biweekly" | "monthly" | "pro-rata" | "other" | Unrecognized<string>
```
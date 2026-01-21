# PeriodType

The type of period to include in the resource: month, quarter, year.

## Example Usage

```typescript
import { PeriodType } from "@apideck/unify/models/components";

let value: PeriodType = "month";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"month" | "quarter" | "year" | Unrecognized<string>
```
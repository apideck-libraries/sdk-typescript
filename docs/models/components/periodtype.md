# PeriodType

The type of period to include in the resource: month, quarter, year.

## Example Usage

```typescript
import { PeriodType } from "@apideck/unify/models/components";

let value: PeriodType = "month";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"month" | "quarter" | "year" | Unrecognized<string>
```
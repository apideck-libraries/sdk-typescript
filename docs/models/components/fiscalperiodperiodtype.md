# FiscalPeriodPeriodType

Whether this record is a posting period, or a quarter or year that groups posting periods.

## Example Usage

```typescript
import { FiscalPeriodPeriodType } from "@apideck/unify/models/components";

let value: FiscalPeriodPeriodType = "period";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"period" | "quarter" | "year" | Unrecognized<string>
```
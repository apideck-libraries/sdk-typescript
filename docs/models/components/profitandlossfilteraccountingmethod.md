# ProfitAndLossFilterAccountingMethod

The accounting method used for the report: cash or accrual.

## Example Usage

```typescript
import { ProfitAndLossFilterAccountingMethod } from "@apideck/unify/models/components";

let value: ProfitAndLossFilterAccountingMethod = "accrual";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"cash" | "accrual" | Unrecognized<string>
```
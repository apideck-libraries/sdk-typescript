# AccountingMethod

The accounting method used for the report: cash or accrual.

## Example Usage

```typescript
import { AccountingMethod } from "@apideck/unify/models/components";

let value: AccountingMethod = "accrual";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"cash" | "accrual" | Unrecognized<string>
```
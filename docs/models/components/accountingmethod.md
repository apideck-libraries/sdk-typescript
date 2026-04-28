# AccountingMethod

The accounting basis used by the company for financial reports.

## Example Usage

```typescript
import { AccountingMethod } from "@apideck/unify/models/components";

let value: AccountingMethod = "accrual";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"cash" | "accrual" | Unrecognized<string>
```
# DepreciationMethod

The depreciation method of the assets, normalised across accounting systems: declining-balance variants (for example 150% or 200%) are all `declining_balance`, and the accounting system's own value is in `downstream_depreciation_method`. Set only when every asset recorded in the account uses the same method.

## Example Usage

```typescript
import { DepreciationMethod } from "@apideck/unify/models/components";

let value: DepreciationMethod = "straight_line";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"other" | "straight_line" | "declining_balance" | "none" | Unrecognized<string>
```
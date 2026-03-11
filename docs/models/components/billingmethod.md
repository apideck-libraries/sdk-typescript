# BillingMethod

Method used for billing this project

## Example Usage

```typescript
import { BillingMethod } from "@apideck/unify/models/components";

let value: BillingMethod = "time_and_materials";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"fixed_price" | "time_and_materials" | "milestone_based" | "retainer" | "non_billable" | Unrecognized<string>
```
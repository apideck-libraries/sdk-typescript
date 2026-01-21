# BillingMethod

Method used for billing this project

## Example Usage

```typescript
import { BillingMethod } from "@apideck/unify/models/components";

let value: BillingMethod = "time_and_materials";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"fixed_price" | "time_and_materials" | "milestone_based" | "retainer" | "non_billable" | Unrecognized<string>
```
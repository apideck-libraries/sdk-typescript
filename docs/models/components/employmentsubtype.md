# EmploymentSubType

The work schedule of the employee.

## Example Usage

```typescript
import { EmploymentSubType } from "@apideck/unify/models/components";

let value: EmploymentSubType = "part_time";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"full_time" | "part_time" | "hourly" | "other" | "not_specified" | Unrecognized<string>
```
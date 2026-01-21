# EmploymentStatus

The employment status of the employee, indicating whether they are currently employed, inactive, terminated, or in another status.

## Example Usage

```typescript
import { EmploymentStatus } from "@apideck/unify/models/components";

let value: EmploymentStatus = "active";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"active" | "inactive" | "terminated" | "other" | Unrecognized<string>
```
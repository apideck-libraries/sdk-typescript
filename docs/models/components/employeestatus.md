# EmployeeStatus

The status of the employee.

## Example Usage

```typescript
import { EmployeeStatus } from "@apideck/unify/models/components";

let value: EmployeeStatus = "active";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"active" | "inactive" | "terminated" | Unrecognized<string>
```
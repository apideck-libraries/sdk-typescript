# EmployeesFilterEmploymentStatus

Employment status to filter on

## Example Usage

```typescript
import { EmployeesFilterEmploymentStatus } from "@apideck/unify/models/components";

let value: EmployeesFilterEmploymentStatus = "active";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"active" | "inactive" | "terminated" | "other" | Unrecognized<string>
```
# EmployeeJobStatus

Indicates the status of the job.

## Example Usage

```typescript
import { EmployeeJobStatus } from "@apideck/unify/models/components";

let value: EmployeeJobStatus = "active";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"active" | "inactive" | "other" | Unrecognized<string>
```
# EmploymentType

The type of employment relationship the employee has with the organization.

## Example Usage

```typescript
import { EmploymentType } from "@apideck/unify/models/components";

let value: EmploymentType = "employee";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"contractor" | "employee" | "freelance" | "temp" | "internship" | "other" | Unrecognized<string>
```
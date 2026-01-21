# EmploymentTerms

## Example Usage

```typescript
import { EmploymentTerms } from "@apideck/unify/models/components";

let value: EmploymentTerms = "full-time";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"full-time" | "part-time" | "internship" | "contractor" | "employee" | "freelance" | "temp" | "seasonal" | "volunteer" | "other" | Unrecognized<string>
```
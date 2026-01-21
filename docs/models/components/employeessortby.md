# EmployeesSortBy

The field on which to sort the Employees

## Example Usage

```typescript
import { EmployeesSortBy } from "@apideck/unify/models/components";

let value: EmployeesSortBy = "created_at";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"first_name" | "last_name" | "created_at" | "updated_at" | Unrecognized<string>
```
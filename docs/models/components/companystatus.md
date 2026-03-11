# CompanyStatus

Based on the status some functionality is enabled or disabled.

## Example Usage

```typescript
import { CompanyStatus } from "@apideck/unify/models/components";

let value: CompanyStatus = "active";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"active" | "inactive" | Unrecognized<string>
```
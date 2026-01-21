# HrisCompanyStatus

## Example Usage

```typescript
import { HrisCompanyStatus } from "@apideck/unify/models/components";

let value: HrisCompanyStatus = "active";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"active" | "inactive" | "trial" | "other" | Unrecognized<string>
```
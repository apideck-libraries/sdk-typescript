# CategoryStatus

Based on the status some functionality is enabled or disabled.

## Example Usage

```typescript
import { CategoryStatus } from "@apideck/unify/models/components";

let value: CategoryStatus = "active";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"active" | "inactive" | Unrecognized<string>
```
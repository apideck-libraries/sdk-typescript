# TrackingCategoryStatus

Based on the status some functionality is enabled or disabled.

## Example Usage

```typescript
import { TrackingCategoryStatus } from "@apideck/unify/models/components";

let value: TrackingCategoryStatus = "active";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"active" | "inactive" | Unrecognized<string>
```
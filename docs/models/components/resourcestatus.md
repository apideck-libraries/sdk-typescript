# ResourceStatus

Status of the resource. Resources with status live or beta are callable.

## Example Usage

```typescript
import { ResourceStatus } from "@apideck/unify/models/components";

let value: ResourceStatus = "upcoming";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"live" | "beta" | "development" | "upcoming" | "considering" | Unrecognized<string>
```
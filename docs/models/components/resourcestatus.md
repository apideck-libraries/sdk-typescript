# ResourceStatus

Status of the resource. Resources with status live or beta are callable.

## Example Usage

```typescript
import { ResourceStatus } from "@apideck/unify/models/components";

let value: ResourceStatus = "live";
```

## Values

```typescript
"live" | "beta" | "development" | "upcoming" | "considering"
```
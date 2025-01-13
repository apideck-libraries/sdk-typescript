# ResourceStatus

Status of the resource. Resources with status live or beta are callable.

## Example Usage

```typescript
import { ResourceStatus } from "@apideck/unify/models/components";

let value: ResourceStatus = "development";
```

## Values

```typescript
"live" | "beta" | "development" | "upcoming" | "considering"
```
# ResourceStatus

Status of the resource. Resources with status live or beta are callable.

## Example Usage

```typescript
import { ResourceStatus } from "apideck/models/components";

let value: ResourceStatus = "considering";
```

## Values

```typescript
"live" | "beta" | "development" | "upcoming" | "considering"
```
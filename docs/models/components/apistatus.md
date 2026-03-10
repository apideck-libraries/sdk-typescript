# ApiStatus

Status of the API. APIs with status live or beta are callable.

## Example Usage

```typescript
import { ApiStatus } from "@apideck/unify/models/components";

let value: ApiStatus = "live";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"live" | "beta" | "development" | "considering" | Unrecognized<string>
```
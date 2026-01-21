# ApiStatus

Status of the API. APIs with status live or beta are callable.

## Example Usage

```typescript
import { ApiStatus } from "@apideck/unify/models/components";

let value: ApiStatus = "live";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"live" | "beta" | "development" | "considering" | Unrecognized<string>
```
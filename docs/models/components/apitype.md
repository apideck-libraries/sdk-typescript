# ApiType

Indicates whether the API is a Unified API. If unified_api is false, the API is a Platform API.

## Example Usage

```typescript
import { ApiType } from "@apideck/unify/models/components";

let value: ApiType = "unified";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"platform" | "unified" | Unrecognized<string>
```
# ApiType

Indicates whether the API is a Unified API. If unified_api is false, the API is a Platform API.

## Example Usage

```typescript
import { ApiType } from "@apideck/unify/models/components";

let value: ApiType = "unified";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"platform" | "unified" | Unrecognized<string>
```
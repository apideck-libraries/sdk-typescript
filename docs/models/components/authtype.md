# AuthType

Type of authorization used by the connector

## Example Usage

```typescript
import { AuthType } from "@apideck/unify/models/components";

let value: AuthType = "oauth2";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"oauth2" | "apiKey" | "basic" | "custom" | "none" | Unrecognized<string>
```
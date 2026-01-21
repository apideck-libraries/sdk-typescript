# AuthType

Type of authorization used by the connector

## Example Usage

```typescript
import { AuthType } from "@apideck/unify/models/components";

let value: AuthType = "oauth2";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"oauth2" | "apiKey" | "basic" | "custom" | "none" | Unrecognized<string>
```
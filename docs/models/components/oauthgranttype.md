# OAuthGrantType

OAuth grant type used by the connector. More info: https://oauth.net/2/grant-types

## Example Usage

```typescript
import { OAuthGrantType } from "@apideck/unify/models/components";

let value: OAuthGrantType = "authorization_code";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"authorization_code" | "client_credentials" | "password" | Unrecognized<string>
```
# ConnectorOauthGrantType

OAuth grant type used by the connector. More info: https://oauth.net/2/grant-types

## Example Usage

```typescript
import { ConnectorOauthGrantType } from "@apideck/unify/models/components";

let value: ConnectorOauthGrantType = "authorization_code";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"authorization_code" | "client_credentials" | "password" | Unrecognized<string>
```
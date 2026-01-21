# OauthCredentialsSource

Location of the OAuth client credentials. For most connectors the OAuth client credentials are stored on integration and managed by the application owner. For others they are stored on connection and managed by the consumer in Vault.

## Example Usage

```typescript
import { OauthCredentialsSource } from "@apideck/unify/models/components";

let value: OauthCredentialsSource = "integration";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"integration" | "connection" | Unrecognized<string>
```
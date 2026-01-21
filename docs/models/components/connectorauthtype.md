# ConnectorAuthType

Type of authorization used by the connector

## Example Usage

```typescript
import { ConnectorAuthType } from "@apideck/unify/models/components";

let value: ConnectorAuthType = "oauth2";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"oauth2" | "apiKey" | "basic" | "custom" | "none" | Unrecognized<string>
```
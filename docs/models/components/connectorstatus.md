# ConnectorStatus

Status of the connector. Connectors with status live or beta are callable.

## Example Usage

```typescript
import { ConnectorStatus } from "@apideck/unify/models/components";

let value: ConnectorStatus = "early-access";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"live" | "beta" | "early-access" | "development" | "considering" | Unrecognized<string>
```
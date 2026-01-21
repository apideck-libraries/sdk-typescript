# ConnectorStatus

Status of the connector. Connectors with status live or beta are callable.

## Example Usage

```typescript
import { ConnectorStatus } from "@apideck/unify/models/components";

let value: ConnectorStatus = "early-access";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"live" | "beta" | "early-access" | "development" | "considering" | Unrecognized<string>
```
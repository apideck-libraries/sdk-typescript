# ConnectionStatus

Status of the connection.

## Example Usage

```typescript
import { ConnectionStatus } from "@apideck/unify/models/components";

let value: ConnectionStatus = "live";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"live" | "upcoming" | "requested" | Unrecognized<string>
```
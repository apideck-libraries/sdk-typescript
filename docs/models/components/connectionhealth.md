# ConnectionHealth

The operational health status of the connection

## Example Usage

```typescript
import { ConnectionHealth } from "@apideck/unify/models/components";

let value: ConnectionHealth = "ok";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"ok" | "pending_refresh" | "needs_auth" | "needs_consent" | "revoked" | "missing_settings" | Unrecognized<string>
```
# Health

Operational health status of the connection

## Example Usage

```typescript
import { Health } from "@apideck/unify/models/components";

let value: Health = "ok";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"revoked" | "missing_settings" | "needs_consent" | "needs_auth" | "pending_refresh" | "ok" | Unrecognized<string>
```
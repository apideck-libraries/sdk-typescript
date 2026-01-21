# Health

Operational health status of the connection

## Example Usage

```typescript
import { Health } from "@apideck/unify/models/components";

let value: Health = "ok";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"revoked" | "missing_settings" | "needs_consent" | "needs_auth" | "pending_refresh" | "ok" | Unrecognized<string>
```
# ConsentState

The current consent state of the connection

## Example Usage

```typescript
import { ConsentState } from "@apideck/unify/models/components";

let value: ConsentState = "granted";
```

## Values

```typescript
"implicit" | "pending" | "granted" | "denied" | "revoked" | "requires_reconsent"
```
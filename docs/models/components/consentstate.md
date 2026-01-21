# ConsentState

The current consent state of the connection

## Example Usage

```typescript
import { ConsentState } from "@apideck/unify/models/components";

let value: ConsentState = "granted";
```

## Values

This is an open enum. Unrecognized values will be captured as the `Unrecognized<string>` branded type.

```typescript
"implicit" | "pending" | "granted" | "denied" | "revoked" | "requires_reconsent" | Unrecognized<string>
```